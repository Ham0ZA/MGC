// Runs once the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // ---- Mobile hamburger menu ----
  var toggle = document.querySelector(".nav-toggle");   // the ☰ button
  var nav = document.querySelector(".main-nav");         // the nav links
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      // .toggle() flips the "open" class on/off each click, returns true/false
      var open = nav.classList.toggle("open");
      // update aria-expanded for accessibility (screen readers)
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ---- Genre filter chips on the Reviews page ----
  var chips = document.querySelectorAll(".chip[data-genre]");   // all filter buttons
  var cards = document.querySelectorAll("[data-genre-tag]");    // all review cards
  if (chips.length && cards.length) {
    // attach a click handler to every chip
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var genre = chip.getAttribute("data-genre");   // e.g. "action"

        // visually reset every chip, then mark only the clicked one as active
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");

        // show/hide each card depending on whether its genres match
        cards.forEach(function (card) {
          var tags = card.getAttribute("data-genre-tag");   // e.g. "Action Shooter"
          // .toLowerCase() on both sides so "Action" matches "action" —
          // without this, capitalized genres never matched the lowercase chips
          card.style.display =
            genre === "all" || tags.toLowerCase().indexOf(genre.toLowerCase()) !== -1
              ? ""
              : "none";
        });
      });
    });
  }
});