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

document.addEventListener('DOMContentLoaded', function () {
  var monthlyRadioButton = document.getElementById("tab-monthly");
  var yearlyRadioButton = document.getElementById("tab-yearly");
  
  // Function to handle changes in the radio button state
  function changeStates() {
    var yearElements = document.querySelectorAll('[id^="year"]');
    var monthElements = document.querySelectorAll('[id^="month"]');
    
    if (monthlyRadioButton.checked) {
      yearElements.forEach(element => {
        element.style.display = 'none';
      });
      monthElements.forEach(element => {
        element.style.display = 'block';
      });
    } else {
      monthElements.forEach(element => {
        element.style.display = 'none';
      });
      yearElements.forEach(element => {
        element.style.display = 'block';
      });
    }
  }

  // Call the changeStates function
  changeStates();

  // Add event listener to the radio button to handle changes
  monthlyRadioButton.addEventListener('change', changeStates);
  yearlyRadioButton.addEventListener('change', changeStates);
});