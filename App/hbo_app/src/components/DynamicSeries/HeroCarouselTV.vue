<template>
  <div class="tv-view" v-if="tvData">
    <div class="carousel-item" :style="{ backgroundImage: `url(${tvData.imageUrl})` }"></div>
    <div class="container">
      <img v-if="tvData.logoUrl" :src="tvData.logoUrl" class="hero-logo" />
      <div class="metadata">
        <div class="air-date">Air Date: {{ tvData.tvDate }}</div>
        <div class="episodes">Episodes: {{ tvData.tvEpisodes }}</div>
        <div class="rating">Rating: {{ tvData.tvRating }}</div>
      </div>
      <button class="watch-now-button" @click="goToWatchPage">
        <div class="buttonText">
          <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(0, 0, 0)" viewBox="0 0 20 20" role="img" style="height: 20px; width: 20px;">
            <path d="M5.777 17.815A.5.5 0 0 1 5 17.399V2.6a.5.5 0 0 1 .777-.416l11.099 7.399a.5.5 0 0 1 0 .832z"></path>
          </svg>
          <span>Watch Now</span>
        </div>
      </button>
      <div v-if="tvData.trailerUrl" class="trailer-icon-row">
        <button class="trailer-icon" @click="goToTrailer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(255, 255, 255)" focusable="false" stroke="#fff" viewBox="0 0 20 20" style="height: 24px; width: 24px;">
            <path clip-rule="evenodd" d="m7.78 4.466 8.343-1.752a1.013 1.013 0 0 1 1.195.77l.575 2.601a.987.987 0 0 1-.763 1.182L10.686 8.62h6.647a1 1 0 0 1 1 1v7.714a1 1 0 0 1-1 1H3.544a1 1 0 0 1-1-1V9.717l-.661-2.992a.987.987 0 0 1 .762-1.181l5.087-1.068.01-.025zm-.328 3.3.77-1.86 3.355-.705-.834 1.875zm4.498-.944.834-1.874 3.174-.667.359 1.624zM6.266 8.015l-2.448.514-.36-1.623 3.58-.752zM4.044 10.12h12.79v6.714H4.043z" fill-rule="evenodd"></path>
          </svg>
          <span>Trailer</span>
        </button>
      </div>
      <div class="description">{{ tvData.tvOverview }}</div>
      <div class="genres" v-if="tvData && Array.isArray(tvData)">
        <span v-for="(genre, index) in tvData.tvGenres" :key="index" class="genre">{{ genre.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tvData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToWatchPage() {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    },
    goToTrailer() {
      if (this.tvData && this.tvData.trailerUrl) {
        window.open(this.tvData.trailerUrl, "_blank");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 50%;
  margin-left: 60px;
  position: absolute;
  bottom: 0;
  z-index: 2;
}

.tv-view .carousel-item {
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  position: relative;
  z-index: 2;
}

.carousel-item::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
  z-index: -1;
}

.hero-logo {
  width: 50%;
  max-width: 50%;
  border-radius: 8px;
  margin-bottom: 20px;
}

.metadata {
  display: flex;
  gap: 15px;
  color: white;
  margin-top: 20px;
  font-family: system-ui, sans-serif;
}

.watch-now-button {
  width: 45%;
  background-color: rgb(221, 221, 221);
  color: white;
  border: 1px solid transparent;
  padding: 14px 22px;
  font-size: 1rem;
  border-radius: 8px;
  font-weight: 900;
  cursor: pointer;
  margin-top: 20px;
}

.watch-now-button:hover {
  background-color: rgb(255, 255, 255);
}

.description {
  max-width: 75%;
  color: white;
  margin-top: 20px;
  line-height: 1.5;
  font-family: system-ui, sans-serif;
}

.genres {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.genre {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 8px;
  font-size: 0.9rem;
}
</style>
