var links = document.getElementsByTagName("a");


function getlink(link) {
    console.log("looking for link");
    var x = new XMLHttpRequest();
    x.open("GET", link, true);
    x.responseType = 'blob';
    x.onload = function(e) {
        console.log("loaded");
        console.log(link);
        console.log(x.status);
        window.location.href = link;
        console.log(x.response);
        console.log(btoa(x.response));
    };
    

    x.onerror = function (e) {
        console.error(x.statusText);
    };

    x.send(null);

}

for (i = 0, len = links.length; i < len; i++) {
    var l = links[i]
    l.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      //  console.log(this.href);
        getlink(this.href);
    }, false);
};

// works: add click handler but doesn't keep link from loading.
// next step is to generate own http request and turn to base64.


// NOTE: may need to use event bubbling for dynamic content
// http://stackoverflow.com/questions/8492344/javascript-attach-an-onclick-event-to-all-links 
