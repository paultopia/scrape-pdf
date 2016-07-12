var links = document.getElementsByTagName("a");


function getlink(link) {
    console.log("looking for link");
    var x = new XMLHttpRequest();
    x.open("GET", link, false);
 //   x.onload = function (e) {
        console.log("loaded");
    console.log(link);
    console.log(x.status);
    //    if (x.readyState === 4) {
     //       console.log(x.status);
       //     console.log(btoa(x.responseText));
      //      if (x.status === 200) {
       //         console.log("succeeded");
  //              console.log(x.response);
    //        } else {
      //          console.error(x.statusText);
       //    }
     //   }
   // };
    x.onerror = function (e) {
        console.error(x.statusText);
    };
    x.send(null);
}

for (i = 0, len = links.length; i < len; i++) {
    var l = links[i]
    l.addEventListener("click", function() {
        getlink(l.href);
        //        console.log(l.href);
//        console.log(getlink(l.href))
    }, false);
};

// works: add click handler but doesn't keep link from loading.
// next step is to generate own http request and turn to base64.


// NOTE: may need to use event bubbling for dynamic content
// http://stackoverflow.com/questions/8492344/javascript-attach-an-onclick-event-to-all-links 
