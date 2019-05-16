// Your code goes here

const one = document.querySelector(".btn");

one.addEventListener("mousemove", function(event) {
  alert("Sign Up!");
});

const two = document.querySelector("body, .nav-link, .main-navigation");

two.addEventListener("dblclick", function(event) {
  event.target.style.backgroundColor = "black";
  event.target.style.color = "white";
});
//why doesnt this work
// const three = document.getElementsByTagName("body");
const three = document.querySelector("body");
three.addEventListener("mousemove", function(event) {
  let point = (event.offsetX, event.offsetY);
  three.style.backgroundColor = point.toString(16);
});

const fours = document.querySelectorAll(".btn");

fours[1].addEventListener("mousedown", function(event) {
  console.log("mousedown");
  // if (fours.style.backgroundColor === "#17A2B8") {
  //   fours.style.backgroundColor = "red";
  // }
});
