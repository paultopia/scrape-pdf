var links = document.getElementsByTagName("a");
for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener("click", function() {
        console.log("clicked a link");
    }, false);
};

// works: add click handler but doesn't keep link from loading.
// next step is to generate own http request and turn to base64.
