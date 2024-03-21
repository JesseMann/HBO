document.addEventListener('DOMContentLoaded', function () {
  // Function to center the active indicator within the carousel-indicators
  function centerActiveIndicator() {
    var activeIndicator = document.querySelector('.carousel-indicators li.active');
    if (activeIndicator) {
      var container = document.querySelector('.carousel-indicators');
      var scrollLeft = activeIndicator.offsetLeft - container.offsetWidth / 2 + activeIndicator.offsetWidth / 2;
      container.scrollLeft = scrollLeft;
    }
  }

  // Call the function before the carousel slides
  document.getElementById('carouselExampleControls').addEventListener('slide.bs.carousel', function () {
    centerActiveIndicator();
  });

  // Call the function on page load
  centerActiveIndicator();

  // Function to fadeOut the newly inactive carousel slides
  function fadeOutActive() {
    var activeCarousel = document.querySelector('.carousel-inner .carousel-item.active');
    if (activeCarousel) {
      activeCarousel.classList.add("img-anim-out");
      setTimeout(function () {
        activeCarousel.classList.remove("img-anim-out");
      }, 1000); // Delay for removing the fade-out class
    }
  };

  // Call the function when the slide has moved left
  document.getElementById('carouselExampleControls').addEventListener('slide.bs.carousel', function (event) {
    if (event.direction === "left") {
      fadeOutActive();
    }
  });

  // Call the function when the slide has moved right
  document.getElementById('carouselExampleControls').addEventListener('slide.bs.carousel', function (event) {
    if (event.direction === "right") {
      fadeOutActive();
    }
  });

});