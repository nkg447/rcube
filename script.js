var container = document.getElementById("container");
var cube = document.getElementById("cube");
var faces = document.getElementsByClassName("face");

//autoSiziing
function autoSize() {
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
}

function getTransformString(transformations) {
  var transformString = "";
  for (var i = transformations.length - 1; i >= 0; i--) {
    transformString = transformString + " " + transformations[i];
  }
  return transformString;
}

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
      transformations.push(`rotateY(90deg)`);
    }
    // left
    else {
      transformations.push(`rotateY(-90deg)`);
    }
  }
  //vertical
  else {
    // up
    if (newY < y) {
      transformations.push(`rotateX(90deg)`);
    }
    // down
    else {
      transformations.push(`rotateX(-90deg)`);
    }
  }

  cube.style.transform = getTransformString(transformations);
  console.log(transformations);
};

cube.ontouchstart = e => {
  var event = {
    screenX: e.changedTouches[0].clientX,
    screenY: e.changedTouches[0].clientY
  };
  return cube.onmousedown(event);
};
cube.ontouchend = e => {
  var event = {
    screenX: e.changedTouches[0].clientX,
    screenY: e.changedTouches[0].clientY
  };
  return cube.onmouseup(event);
};

document.getElementById("rotate").onclick = () => {
  cube.style.animation = "rotateHorizontal 4s linear infinite";
};

autoSize();
