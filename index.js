const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

const maxX = width - 34;
const maxY = height - 34;

let num = 0;

function loadAtRandom() {
  let timer = setInterval(function() {
    makeCircle();
    if (num > 1024) {
      clearInterval(timer);
    }
  }, 80);
  num++;
}

function makeCircle() {
  let circle = document.createElement("circle");
  circle.id = "circle" + num;
  circle.className = "circle";
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  let circleStyle = circle.style;
  circleStyle.top = (y > maxY ? maxY : y) + "px";
  circleStyle.left = (x > maxX ? maxX : x) + "px";
  document.getElementById("main").appendChild(circle);
}
