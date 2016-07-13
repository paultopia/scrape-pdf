// get an array of every link on page

var links = document.getElementsByTagName("a");

// function to transform arraybuffer to base64 string.  Don't ask me how it works, this part is
// entirely from stackoverflow and people who understand how encodings work (i.e., not me).
// also, javascript is a really janky language.  Look at how much easier it is in the python
// code in this repo for comparison... 

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
