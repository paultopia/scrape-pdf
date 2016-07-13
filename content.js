// Get an array of every link on page

var links = document.getElementsByTagName("a");

// Next: function to transform arraybuffer to base64 string.  I'm a little shaky on how it works, this part is
// entirely from stackoverflow and people who understand how encodings work better than me.

// As best I can infer from various MDN doc pages and SO, arraybuffer is how you have to receive a binary file (see line 46 below)
// (why? dunno, but see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType ).  Blob does NOT work for this
// use, and I have no idea whatsoever why, but I spent hours trying.

// But then, you can't actually work with an arraybuffer.  Because, Javascript. Instead, you have to change it to a typed array.
// (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ). There are many different
// kinds of typed arrays available. (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray ).
// I went with an unsigned 8-bit integer array ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )
// solely because that's what someone on stackoverflow did, and there aren't, you know, any actual usable docs to explain why.

// Executive summary: Javascript is a really janky language.  Look at how much easier it is in the Python
// code in this repo for comparison. In Python it's seriously one method, called "encode," called on a file object.
// But Javascript is on bath salts, so you have to:

// 1.  Specify a precise data type for the response you receive, rather than just trusting the server to tell you what type. The reason for
// the precise type you have to return is left a mystery.

// 2. Create a second type of data structure from the first, not by calling a function on the first one but by instantiating the constructor
// for some class (uh, prototype, I guess, since this is JS?) for it.

// 3.  Use some string method on every element of that new data structure to pretend that new data structure (a bunch of ints, remember)
// is really intended to be unicode values (yes, that's what the string method in question really does!
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode )

// 4.  Then, and only then, can you have a base64 encoding. From a string made from a sequence of pretend unicode characters that are really
// just ints representing a chunk of binary data into which the perfectly good binary file that the server sent has been coerced.

// 5. Cry. Drink heavily. Cry some more. Search ebay for a lock of Brendan Eich's hair and a book of curses. Drink some more. Cry some more.

function transform(blob) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(blob)));
};

// function to fetch a link and massage response into arraybuffer

function getlink(link) {
    var x = new XMLHttpRequest();
    x.open("GET", link, true);
    x.responseType = 'arraybuffer';
    x.onload = function(e) {
        console.log(transform(x.response));
        window.location.href = link;
    };

    x.onerror = function (e) {
        console.error(x.statusText);
    };

    x.send(null);
};

// hang click event handlers on all the links on the page. Make ordinary loading behavior wait until the
// extension gets at content.

for (i = 0, len = links.length; i < len; i++) {
    var l = links[i]
    l.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        getlink(this.href);
    }, false);
};

// NOTE: may need to use event bubbling for dynamic content in production.
// http://stackoverflow.com/questions/8492344/javascript-attach-an-onclick-event-to-all-links 
