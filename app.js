document.addEventListener("DOMContentLoaded", function(e) {
  const Vivus = require("vivus");
  const btnsubmit = document.getElementById("btnsubmit");
  const form = document.getElementById("form-form");
  const inputs = [...document.getElementsByTagName("input")];
  const message = document.getElementsByTagName("textarea")[0];
  // const message = document.getElementById("your-message").value;
  // const company = document.getElementById("your-company").value;
  // const phone = document.getElementById("your-phone").value;
  // const email = document.getElementById("your-email").value;
  // const name = document.getElementById("your-name").value;
  const sandwich = document.getElementById("sandwich");
  const navItems = [...document.getElementsByClassName("navItem")];
  const introItems = [...document.querySelectorAll("#list a")];
  // form.addEventListener("submit", function(e) {
  //   console.log("text:", textarea.value);
  //   inputs.forEach(input => {
  //     console.log(input.id + " : " + input.value);
  //   });
  //   return false;
  // });

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
    new Vivus(
      "reinis",
      {
        duration: 200
      },
      function() {
        return;
      }
    );
    new Vivus("welcome-svg", { duration: 200 }, function() {
      return;
    });
    new Vivus("my-portfolio-svg", { duration: 200 }, function() {
      return;
    });
    new Vivus("contact-me-svg", { duration: 200 }, function() {
      return;
    });
  }

  const submitForm = function() {
    let request = {
      message: message.value
    };
    inputs.forEach(input => {
      request[input.id] = input.value;
    });

    console.log(request);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/contact", true);
    var json_upload = "request=" + JSON.stringify(request);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(json_upload);
  };
  btnsubmit.addEventListener("click", submitForm);
});
