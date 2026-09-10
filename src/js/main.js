document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // optional genre filter on reviews page
  var chips = document.querySelectorAll(".chip[data-genre]");
  var cards = document.querySelectorAll("[data-genre-tag]");
  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var genre = chip.getAttribute("data-genre");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
        cards.forEach(function (card) {
          var tags = card.getAttribute("data-genre-tag");
          card.style.display = genre === "all" || tags.indexOf(genre) !== -1 ? "" : "none";
        });
      });
    });
  }
});
