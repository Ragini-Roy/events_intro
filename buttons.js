const button =document.querySelectorAll("btn");

document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelectorAll(".btn");
    for (let i = 0; i < submit.length; i++) {
        submit[i].addEventListener("click", function (e) {
            console.log(e.target);
            e.target.style.backgroundColor = "white"
            e.target.style.color = "black";

        });
    }
 });

// trying to change the content
const changeContent= docucment.getElementById("Buy"); 

// targeted the element whose content we want to dynamically change
 
let change = document.getElementById("Buy");
change.addEventListener("click", () => {
    change.innerHTML = "<b>You won the race!</b>";
});

const buySubscription = document.querySelectorAll(".btn2");

// document.addEventListener("DOMContentLoaded", ()=> {
//     const buySubscription= document.querySelectorAll(".btn2");
//     buySubscription.forEach(function(btn) {
//        btn.addEventListener("click", function(event) {
//          event.target.style.backgroundColor= "white";
//          event.target.style.color= "red";
//        });
//     });
// });
