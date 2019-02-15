(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
// //Animating welcome
// var svg = document.getElementById("welcome");
// Snap(svg);

// var simpleShape = Snap.select("#simple-shape");
// var fancyShape = Snap.select("#fancy-shape");

// var simpleShapePoints = simpleShape.node.getAttribute("d");
// var fancyShapePoints = fancyShape.node.getAttribute("d");

// var toFancy = function() {
//   simpleShape.animate({ d: fancyShapePoints }, 1000, mina.backout, toSimple);
// };

// var toSimple = function() {
//   simpleShape.animate({ d: simpleShapePoints }, 1000, mina.backout, toFancy);
// };

// toFancy();

},{}]},{},[1]);
