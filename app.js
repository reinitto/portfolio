const Vivus = require("vivus");
const form = document.getElementById("form-form");
const inputs = [...document.getElementsByTagName("input")];
const textarea = document.getElementById("your-message");
const sandwich = document.getElementById("sandwich");
const navItems = [...document.getElementsByClassName("navItem")];
const introItems = [...document.querySelectorAll("#list a")];

form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("isvalid:", formValid);
  console.log("text:", textarea.value);
  inputs.forEach(input => {
    console.log(input.id + " : " + input.value);
  });
});

sandwich.addEventListener("click", () => {
  navItems.forEach(item => item.classList.toggle("navItem-visible"));
});

introItems.forEach(item => {
  item.addEventListener("mouseenter", function(e) {
    e.stopPropagation();
    // let children = Array.from(this.children);
    item.children[0].classList.toggle("triangle-right-hover");
  });
  item.addEventListener("mouseleave", function(e) {
    e.stopPropagation();
    // let children = Array.from(this.children);
    item.children[0].classList.toggle("triangle-right-hover");
  });
});
new Vivus("welcome", { duration: 200 }, function() {
  return;
});
// //Animate SVG
// var ctx = document.querySelector("#welcome").getContext("2d"),
//   dashLen = 220,
//   dashOffset = dashLen,
//   speed = 5,
//   txt = "WELCOME",
//   x = 30,
//   i = 0;

// ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
// ctx.lineWidth = 5;
// ctx.lineJoin = "round";
// ctx.globalAlpha = 2 / 3;
// ctx.strokeStyle = ctx.fillStyle = "#1f2f90";
// ctx.canvas.width = window.innerWidth;
// ctx.canvas.height = window.innerHeight;
// (function loop() {
//   ctx.clearRect(x, 0, 60, 150);
//   ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
//   dashOffset -= speed; // reduce dash length
//   ctx.strokeText(txt[i], x, 90); // stroke letter

//   if (dashOffset > 0) requestAnimationFrame(loop);
//   // animate
//   else {
//     ctx.fillText(txt[i], x, 90); // fill final letter
//     dashOffset = dashLen; // prep next char
//     x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
//     ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random()); // random y-delta
//     ctx.rotate(Math.random() * 0.005); // random rotation
//     if (i < txt.length) requestAnimationFrame(loop);
//   }
// })();
