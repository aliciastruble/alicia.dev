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
  }, 100);
  num++;
}

function makeCircle() {
  let circle = document.createElement("circle");
  circle.id = "circle" + num;
  circle.className = "circle fade-in";
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  let circleStyle = circle.style;
  circleStyle.left = x + "px";
  circleStyle.top = y + "px";
  document.getElementById("main").appendChild(circle);
}
