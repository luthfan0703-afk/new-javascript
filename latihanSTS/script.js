let blue = document.getElementById("target");
let green = document.getElementById("target2");
let yellow = document.getElementById("target3");
let darkMode = document.getElementById("background_body");

blue.addEventListener("click", () => {
  target.classList.toggle("blue");
});

green.addEventListener("click", () => {
  target2.classList.toggle("green");
});

yellow.addEventListener("click", () => {
  target3.classList.toggle("yellow");
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("body")
  document.fonts.classList.toggle("body")
  
});
