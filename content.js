var links = document.getElementsByTagName("a");

function transform(blob) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(blob)));
};

function getlink(link) {
    var x = new XMLHttpRequest();
    x.open("GET", link, true);
    x.responseType = 'arraybuffer';
    x.onload = function(e) {
        console.log("Raw response:");
        console.log(x.response);
        console.log("Direct transformation:");
        console.log(btoa(x.response));
        console.log("Mysterious thing I got from SO:");
        console.log(transform(x.response));
        window.location.href = link;
    };

    x.onerror = function (e) {
        console.error(x.statusText);
    };

    x.send(null);
};

for (i = 0, len = links.length; i < len; i++) {
    var l = links[i]
    l.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        getlink(this.href);
    }, false);
};

// works: add click handler but doesn't keep link from loading.
// next step is to generate own http request and turn to base64.


// NOTE: may need to use event bubbling for dynamic content
// http://stackoverflow.com/questions/8492344/javascript-attach-an-onclick-event-to-all-links 
