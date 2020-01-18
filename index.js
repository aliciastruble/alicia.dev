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
    num++;

    if (num > 500) clearInterval(timer);
  }, 80);
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
  //   circleStyle.opacity = 0.3;
  document.getElementById("main").appendChild(circle);
}
