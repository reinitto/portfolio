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

if (window.screen.width > 996) {
  new Vivus("welcome-svg", { duration: 200 }, function() {
    return;
  });
  new Vivus("my-portfolio-svg", { duration: 200 }, function() {
    return;
  });
  new Vivus("contact-me-svg", { duration: 200 }, function() {
    return;
  });
  new Vivus(
    "reinis",
    {
      duration: 200
    },
    function() {
      return;
    }
  );
}
