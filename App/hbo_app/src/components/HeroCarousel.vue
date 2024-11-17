<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        v-for="(movie, index) in movies"
        :key="movie.movieID"
        class="carousel-item"
        :class="{ active: index === currentIndex }"
        :style="{ backgroundImage: `url(${movie.imageUrl})` }"
      >
        <div class="container">
          <iframe
            v-if="movie.trailerUrl && showVideo && currentIndex === index"
            class="responsive-iframe"
            :src="movie.trailerUrl"
            frameborder="0"
            allow="autoplay; encrypted-media"
            scrolling="no"
          ></iframe>
      </div>
      </div>
    </div>

    <div class="heroOverview" v-if="movies.length" >
      <img :src="movies[currentIndex].logoUrl" alt="Movie Logo" v-if="movies[currentIndex].logoUrl">
      <div class="date">Released: {{ movies[currentIndex].movieDate }}</div>
      <div class="description">{{ movies[currentIndex].movieOverview }}</div>
      <button @click="goToMoviePage(movies[currentIndex].movieID)">Go To Movie</button>
    </div>

    <div class="chevron prev-chevron" @click="prevSlide">
      <!-- Left Chevron Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#BABABA" viewBox="0 0 24 24">
        <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"/>
      </svg>
    </div>
    <div class="chevron next-chevron" @click="nextSlide">
      <!-- Right Chevron Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#BABABA" viewBox="0 0 24 24">
        <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
      </svg>
    </div>

    <div class="carousel-indicators">
      <span
        v-for="(movie, index) in movies"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        class="indicator-bubble"
      ></span>
    </div>


  </div>
</template>
  
  <style scoped>
  .carousel {
    width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    position: relative;
    font-family: sans-serif;
  }
  .carousel::before {
  content: ""; 
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 25%;
  background: linear-gradient(
    to top, 
    rgba(0, 0, 0, 1) 0%, 
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 2) 10%, 
    rgba(0, 0, 0, 1) 80%, 
    rgba(0, 0, 0, 0) 100%   
  );
  pointer-events: none; 
  z-index: 1;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0s ease;
  }
  
  .carousel-item {
    min-width: 100%;
    background-size: cover;
    background-position: center;
    max-height: 90vh;
    width: 100%;
    opacity: 0;
    transition: opacity .2s ease;
  }

  .carousel-item.active {
  opacity: 1;
  }
  
  .heroOverview {
  position: absolute;
  max-width: 30%;
  z-index: 2;
  bottom: calc(52px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  margin-left: 60px;
  font-family: system-ui;
  line-height: 25px;
  font-weight: 450;
  }

  .heroOverview img {
    align-self: flex-start; 
    width: 100%; 
    flex: 1; 
    object-fit: contain; 
  }

  .heroOverview div {
    flex: 1; 
    text-align: left; 
    width: 100%;
    margin-top: 10px;
  }

  .date {
    font-size: .9rem;
  }

  .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 4.5em;
  }

  .heroOverview button {
    flex: none; 
    background-color: rgba(134, 151, 206, 0.3);
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 12px 22px;
    font-size: 1rem;
    border-radius: 5px;
    text-align: left; 
    margin-top: 10px;
    cursor: pointer;
    width: 27%;
    font-weight: 800;
  }

  .heroOverview button:hover {
    background-color: #0056b3;
  }

  .chevron {
    position: absolute;
    top: 0;
    padding: 10px;
    cursor: pointer;
    max-height: 100vh;
    height: 100%;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .carousel:hover .chevron {
  opacity: 1;
}

  .prev-chevron {
    left: 0px;
  }

  .next-chevron {
    right: 0px;
  }

  .prev-chevron:hover {
    background-image: linear-gradient(to right, black, transparent);
    opacity: .5;
    animation: fadeInBackground 0.4s forwards;
    fill: white;
  }

  .next-chevron:hover {
    background-image: linear-gradient(to left, black, transparent);
    opacity: .5;
    animation: fadeInBackground 0.4s forwards;
    fill: white;
  }

  @keyframes fadeInBackground {
    from { opacity: .5; }
    to { opacity: 1; }
  }

  .next-chevron:hover svg{
    fill: white;
  }

  .prev-chevron:hover svg{
    fill: white;
  }


  svg {
    width: 38px; 
    height: 38px;
    position: relative;
    top: 50%;
  }

  svg:hover {
    fill: white;
  }

  .carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  position: relative;
  bottom: calc(52px);
  z-index: 2;
}

.indicator-bubble {
  width: 2px;
  height: 2px;
  padding: 5px;
  border-radius: 50%;
  background-color: rgba(134, 151, 206, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator-bubble.active {
  background-color: white;
}

  .container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 62.5%;
  }

  .responsive-iframe {
    position: absolute;
    top: -200px;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  button {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 100;
  }
  </style>


<script>
  export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      currentIndex: 0,
      showVideo: false,
      videoTimeout: null,
      videoDurationTimeout: null,
    };
  },

  mounted() {
    this.startVideoTimer();
  },

  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.movies.length) % this.movies.length;
      this.resetVideoTimer();
    },

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.movies.length;
      this.resetVideoTimer();
    },

    startVideoTimer() {
      if (this.videoTimeout) clearTimeout(this.videoTimeout);
      if (this.videoDurationTimeout) clearTimeout(this.videoDurationTimeout);

      this.videoTimeout = setTimeout(() => {
        if (this.movies[this.currentIndex].trailerUrl) {
          this.showVideo = true;

          this.videoDurationTimeout = setTimeout(() => {
            this.showVideo = false;
          }, 30000);
        }
      }, 5000); 
    },

    resetVideoTimer() {
      this.showVideo = false;
      if (this.videoTimeout) clearTimeout(this.videoTimeout);
      if (this.videoDurationTimeout) clearTimeout(this.videoDurationTimeout);
      this.startVideoTimer();
    },

    goToMoviePage(movieID) {
      this.$router.push({ name: 'MoviesView', params: { movieID } });
    },

    goToSlide(index) {
      this.currentIndex = index;
      this.resetVideoTimer(); 
    },

  },

};
</script>
