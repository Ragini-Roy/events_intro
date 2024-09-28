// there are many appoarches to use events on page, many beginners inject events directly on the html tag , that`s not fesible, in case of react it can be used due to its feasiblility

// document.getElementsById("travel1").addEventListener("click", function (e) {
//     alert("random image ofn travel destination!");
// })
document.getElementById("travel1").onclick= function() {
    alert("random travelling destination, India!");
}

document.getElementById("travel2").addEventListener ("click", function () {
    alert("random travelling destination, Effiel Tower!");
},false); //third parameter in addEventListener is the useCapture parameter, which is optional and defaults to false. It determines whether the event should be captured during the capturing phase or the bubbling phase.
// both are diff ways for using event listeners , second way holds more advantage over using onclick event .On using onclick() , only one event handler can be assigned.If we want to assign another handler will overwrite the previous one.
// adding event listener allows to event handlers for same event type on same element


document.getElementById("travel3").addEventListener("click", function() {
    alert("random indian tourism destination,India")
});

document.getElementById("travel4").addEventListener("click", function() {
    alert("random indian tourism destination!");
});
// to view event listeners, we can use getEventListeners()
// attachEvent: used previously
// jQuery - mein on hota hai as event


// document.getElementById("addButton").addEventListener("click", function() {
//     const newButton= document.createElement("button");
//     newButton.innerHTML="new button";

//     document.getElementById("buttonContainer").appendChild(newButton);

//     newButton.addEventListener("click", function() {
//         alert("new button clicked.");
//     });
// });

// type,timestamp,defaultPrevented, currentTraget,target,toElement,srcElement,currentTraget,clientX,client Y, screenX, screenY ,altkey,ctrlkey,shiftkey,keyCode

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("images").addEventListener("click", function() {
        alert("travel is fun!");
        console.log("clicked inside ul");
    },false); //event bubbling mode
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("travel4").addEventListener("click", function() {
        alert("travel is fun!");
        console.log("someone clicked me!");
    }, true); //event capturing mode
}); 
// event bubbling jis mein html elements inner se outer ke towards jaate hai like a bubble
// stopPropagation() is a method jo ki event bubbling ko rokata hai or jis element ko target kra hai wahi sirf appear hota hai 
// ex: instead clicked inside ul and someone clicked me ki jagah someone clicked me sirf show karega
document.addEventListener ("DOMContentLoaded", function(){
    console.log("DOM content fully loaded and parsed!");
    document.getElementById("travel3").addEventListener("click", function() {
        alert("this is an alert box");
        console.log("inside ul clicked");
    }, false);
}); //event bubbling  where false is optional parameter 

// event capturing mode where true is set as parameter 
document.addEventListener("DOMContentLoaded", function() {
    console.log("this is event capturing mode in events!");
    document.getElementById("travel2").addEventListener("click",function() {
        alert("this is another alert box");
        console.log("inside ul again!")
    } ,false);
});

// creating an element to ensure if the script has been loaded
const myscript= document.createElement("script"); 
myscript.src= "introEvents.js"; 
myscript.onload= function() {
    console.log("script has been loaded!");
    // appending child to make it visible
    document.head.appendChild(myscript);
}

document.getElementById("addButton").addEventListener("click", function() {
    alert("buy something.");
    console.log("this is a buy button!");
}, false);
