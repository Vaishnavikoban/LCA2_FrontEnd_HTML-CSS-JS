document.querySelectorAll(".icon-heart").forEach(function (icon) {
  icon.addEventListener("click", function () {
    this.classList.toggle("icon-heart-filled");
  });
});



document.querySelectorAll(".button-wrapper button").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".button-wrapper button").forEach(function (btn) {
      btn.classList.remove("primary-button-active");
      btn.classList.add("primary-button");
    });
    this.classList.remove("primary-button");
    this.classList.add("primary-button-active");
  });
});
