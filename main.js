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
});