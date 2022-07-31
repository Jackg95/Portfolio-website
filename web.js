let wheelbox = document.getElementById("box");

function colorValue() {
  return Math.floor(Math.random() * 256);
}
function wheel(event) {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
}

wheelbox.onwheel = wheel;

let circleclick = document.getElementById("circle");

function click(event) {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
}

circleclick.onmousedown = click;
circleclick.onmouseup = click;
