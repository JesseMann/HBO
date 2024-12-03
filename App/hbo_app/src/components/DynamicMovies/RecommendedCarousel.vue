<template>
  <div class="carousel">
    <div class="sectionName"></div>
    <div class="carousel-inner">     
      <div
        v-for="movie in recommendedMovieCarousel"
        :key="movie.movieID"
        class="carousel-item"
        :style="{ backgroundImage: `url(${movie.imageUrl})` }"
        @click="goToMoviePage(movie.movieID)"
      >
      </div>
    </div>
    <div class="chevron prev-chevron" @click="prevSlide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#BABABA" viewBox="0 0 24 24">
        <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"/>
      </svg>
    </div>
    <div class="chevron next-chevron" @click="nextSlide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#BABABA" viewBox="0 0 24 24">
        <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  width: 100vw;
  overflow: hidden;
  position: relative;
  font-family: system-ui;
}

.sectionName {
  display: flex;
  color: white;
  font-weight: 800;
  margin-left: 60px;
  font-size: 19px;
}

.carousel-inner {
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  gap: 20px;
  overflow-x: auto;
}

.carousel-inner::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  flex: 0 0 10%;
  height: 280px;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  position: relative;
  border-radius: 0;
  background-repeat: no-repeat;
  border: 2px solid transparent;
  aspect-ratio: 2 / 3;
}

.carousel-item:hover {
  border: 2px solid white!important;
}

.chevron {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  cursor: pointer;
  max-height: 100vh;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel:hover .chevron {
  opacity: 1;
}

.prev-chevron {
  left: 0;
}

.next-chevron {
  right: 0;
}

.prev-chevron:hover {
  background-image: linear-gradient(to right, black, transparent);
  opacity: 0.5;
  animation: fadeInBackground 0.4s forwards;
  fill: white;
}

.next-chevron:hover {
  background-image: linear-gradient(to left, black, transparent);
  opacity: 0.5;
  animation: fadeInBackground 0.4s forwards;
  fill: white;
}

@keyframes fadeInBackground {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

.chevron svg {
  width: 36px;
  height: 36px;
  fill: #bababa;
}

.next-chevron:hover svg,
.prev-chevron:hover svg {
  fill: white;
}

@media (max-width: 1200px) {
  .sectionName {
    font-size: 17px;
    margin-left: 40px;
  }

  .carousel-inner {
    padding-left: 40px;
    padding-right: 40px;
    gap: 16px;
  }

  .carousel-item {
    flex: 0 0 12%;
    height: 240px;
  }

  .chevron svg {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 768px) {
  .sectionName {
    font-size: 15px;
    margin-left: 20px;
    text-align: center;
  }

  .carousel-inner {
    padding-left: 20px;
    padding-right: 20px;
    gap: 12px;
  }

  .carousel-item {
    flex: 0 0 16%;
    height: 200px;
  }

  .chevron svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .sectionName {
    font-size: 13px;
    margin-left: 10px;
    text-align: center;
  }

  .carousel-inner {
    gap: 8px;
  }

  .carousel-item {
    flex: 0 0 20%;
    height: 160px;
  }

  .chevron svg {
    width: 20px;
    height: 20px;
  }
}


</style>

<script>
export default {
  props: {
    recommendedMovieCarousel: {
      type: Array,
      required: true,
    },
  },

  data() {
  return {
    currentIndex: 0,
  };
},

methods: {
  goToMoviePage(movieID) {
    this.$router.push({ name: 'DynamicMoviesView', params: { movieID } });
  },

  prevSlide() {
    const carouselInner = this.$el.querySelector('.carousel-inner');
    const itemWidth = window.innerWidth;
    
    
    if (carouselInner.scrollLeft === 0) {
      setTimeout(() => {
        carouselInner.scrollTo({
          left: carouselInner.scrollWidth - carouselInner.clientWidth,
          behavior: 'smooth'
        });
      }, 200);
    } else {
      carouselInner.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  },

  nextSlide() {
    const carouselInner = this.$el.querySelector('.carousel-inner');
    const itemWidth = window.innerWidth;
    const maxScrollLeft = carouselInner.scrollWidth - carouselInner.clientWidth;


    if (carouselInner.scrollLeft >= maxScrollLeft) {
      setTimeout(() => {
        carouselInner.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }, 200);
    } else {
      carouselInner.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  }
}

};
</script>
