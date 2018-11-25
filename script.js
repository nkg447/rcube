var container = document.getElementById("container");
var cube = document.getElementById("cube");
var faces = document.getElementsByClassName("face");

var side =
  window.innerHeight < window.innerWidth
    ? window.innerHeight / 2
    : window.innerWidth / 2;

container.style.width = side + "px";
container.style.height = side + "px";
container.style.margin = side / 2 + "px auto 0";

cube.style.width = side + "px";
cube.style.height = side + "px";

for (var i = 0; i < faces.length; i++) {
  faces[i].style.width = side + "px";
  faces[i].style.height = side + "px";
}
console.log(side);
