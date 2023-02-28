//about-us functionality
let highlighter = document.getElementById("highlighter");
let s = document.getElementById("s");
let c = document.getElementById("c");
let i = document.getElementById("i");
let stewardship = document.getElementById("stewardship");
let cv = document.getElementById("client-value");
let integrity = document.getElementById("integrity");

s.addEventListener("click", function () {
  s.style.color = "#f58220";
  c.style.color = "#404040";
  i.style.color = "#404040";
  highlighter.style.top = "0%";
  stewardship.style.display = "block";
  cv.style.display = "none";
  integrity.style.display = "none";
});

c.addEventListener("click", function () {
  s.style.color = "#404040";
  c.style.color = "#f58220";
  i.style.color = "#404040";
  highlighter.style.top = "33.3%";
  stewardship.style.display = "none";
  cv.style.display = "block";
  integrity.style.display = "none";
});

i.addEventListener("click", function () {
  s.style.color = "#404040";
  c.style.color = "#404040";
  i.style.color = "#f58220";
  highlighter.style.top = "66.6%";
  stewardship.style.display = "none";
  cv.style.display = "none";
  integrity.style.display = "block";
});
