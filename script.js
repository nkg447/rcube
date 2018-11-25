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

var horizontalRotationCount = 0;
var verticalRotationCount = 0;
var x, y, newX, newY;
var transformations = [];
cube.onmousedown = e => {
  x = e.screenX;
  y = e.screenY;
};
cube.onmouseup = e => {
  newX = e.screenX;
  newY = e.screenY;

  //horizontal
  if (Math.abs(x - newX) > Math.abs(y - newY)) {
    // right
    if (newX > x) {
      horizontalRotationCount += 1;
      transformations.push(`rotateY(90deg)`);
    }
    // left
    else {
      horizontalRotationCount -= 1;
      transformations.push(`rotateY(-90deg)`);
    }
    // cube.style.transform = transformations.reverse().join(" ");

    cube.style.transform = `rotateY(${horizontalRotationCount *
      90}deg) rotateX(${verticalRotationCount * 90}deg)`;
  }
  //vertical
  else {
    // up
    if (newY < y) {
      verticalRotationCount += 1;
      transformations.push(`rotateX(90deg)`);
    }
    // down
    else {
      verticalRotationCount -= 1;
      transformations.push(`rotateX(-90deg)`);
    }
    // cube.style.transform = transformations.reverse().join(" ");
    cube.style.transform = `rotateX(${verticalRotationCount *
      90}deg) rotateY(${horizontalRotationCount * 90}deg)`;
  }
  console.log(
    horizontalRotationCount +
      " " +
      verticalRotationCount +
      " " +
      cube.style.transform
  );
};
