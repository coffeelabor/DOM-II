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

const three = document.getElementsByTagName("body");
three.addEventListener("mousemove", runEventThree);

function runEventThree(event) {
  console.log(event.offsetX, event.offsetY);
}
