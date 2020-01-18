const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

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
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  let circleStyle = circle.style;
  circleStyle.position = "absolute";
  circleStyle.height = "22px";
  circleStyle.width = "22px";
  circleStyle.backgroundColor = "gold";
  circleStyle.borderRadius = "50%";
  circleStyle.top = y + "px";
  circleStyle.left = x + "px";
  circleStyle.opacity = 0.35;
  document.getElementById("main").appendChild(circle);
}
