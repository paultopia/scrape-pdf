var links = document.getElementsByTagName("a");


function getlink(link) {
    var x = new XMLHttpRequest();
    x.open("GET", link, true);
    x.onload = function (e) {
        if (x.readyState === 4) {
            if (x.status === 200) {
                console.log(x.responseText);
            } else {
                console.error(x.statusText);
            }
        }
    };
    x.onerror = function (e) {
        console.error(x.statusText);
    };
    x.send(null);
}

for (i = 0, len = links.length; i < len; i++) {
    var l = links[i]
    l.addEventListener("click", function() {
        console.log(l.href);
        console.log(getlink(l.href))
    }, false);
};

// works: add click handler but doesn't keep link from loading.
// next step is to generate own http request and turn to base64.


// NOTE: may need to use event bubbling for dynamic content
// http://stackoverflow.com/questions/8492344/javascript-attach-an-onclick-event-to-all-links 
