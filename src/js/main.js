// Runs once the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // ---- Mobile hamburger menu ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // ---- Genre filter chips on the Reviews page ----
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
          card.style.display =
            genre === "all" || tags.toLowerCase().indexOf(genre.toLowerCase()) !== -1
              ? ""
              : "none";
        });
      });
    });
  }

  // ---- Genre carousel arrows ----
  var genreContainer = document.querySelector(".chips-container");
  var leftArrow = document.querySelector(".genre-arrow-left");
  var rightArrow = document.querySelector(".genre-arrow-right");

  if (genreContainer && leftArrow && rightArrow) {

    function updateGenreArrows() {
      var maxScroll = genreContainer.scrollWidth - genreContainer.clientWidth;

      // If there's nothing to scroll, hide both arrows
      if (maxScroll <= 1) {
        leftArrow.disabled = true;
        rightArrow.disabled = true;
        return;
      }

      leftArrow.disabled = genreContainer.scrollLeft <= 0;
      rightArrow.disabled = genreContainer.scrollLeft >= maxScroll - 1;
    }

    leftArrow.addEventListener("click", function () {
      genreContainer.scrollBy({ left: -250, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", function () {
      genreContainer.scrollBy({ left: 250, behavior: "smooth" });
    });

    genreContainer.addEventListener("scroll", updateGenreArrows);
    window.addEventListener("resize", updateGenreArrows);
    updateGenreArrows();
  }

  // ---- Content carousels (Homepage) ----
  document.querySelectorAll(".content-carousel").forEach(function (wrap) {
    var container = wrap.querySelector(".carousel-container");
    var track = wrap.querySelector(".carousel-track");
    var leftBtn = wrap.querySelector(".carousel-arrow-left");
    var rightBtn = wrap.querySelector(".carousel-arrow-right");
    if (!container || !track || !leftBtn || !rightBtn) return;

    function amount() {
      var card = track.firstElementChild;
      return card ? card.getBoundingClientRect().width + 28 : 300;
    }

    function update() {
      var maxScroll = container.scrollWidth - container.clientWidth;

      // If there's nothing to scroll, hide both arrows
      if (maxScroll <= 1) {
        leftBtn.disabled = true;
        rightBtn.disabled = true;
        return;
      }

      leftBtn.disabled = container.scrollLeft <= 0;
      rightBtn.disabled = container.scrollLeft >= maxScroll - 1;
    }

    leftBtn.addEventListener("click", function () {
      container.scrollBy({ left: -amount(), behavior: "smooth" });
    });

    rightBtn.addEventListener("click", function () {
      container.scrollBy({ left: amount(), behavior: "smooth" });
    });

    container.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    update();
  });
});