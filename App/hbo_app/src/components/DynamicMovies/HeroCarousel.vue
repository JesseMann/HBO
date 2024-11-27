<template>
  <div class="movie-view" v-if="movieData">
    <div class="carousel-item" :style="{ backgroundImage: `url(${movieData.imageUrl})` }">
      </div>
      <div class="container">
        <img v-if="movieData.logoUrl" :src="movieData.logoUrl" class="hero-logo" />
        <div class="metadata">
          <div class="release-date">{{ movieData.movieDate }}</div>
          <div class="runtime"> {{ movieData.movieRuntime }}</div>
          <div class="resolution">{{ movieData.movieResolution }}</div>
          <div class="rating">Rating: {{ movieData.movieRating }}</div>
        </div>
        <button class="watch-now-button" @click="goToWatchPage">
          <div class="buttonText">
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(0, 0, 0)" viewBox="0 0 20 20" role="img" style="height: 20px; width: 20px;"><path d="M5.777 17.815A.5.5 0 0 1 5 17.399V2.6a.5.5 0 0 1 .777-.416l11.099 7.399a.5.5 0 0 1 0 .832z"></path></svg><span>Watch Now</span>
          </div>
        </button>
        
        <div v-if="movieData.trailerUrl" class="trailer-icon-row">
          <button class="trailer-icon" @click="goToTrailer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(255, 255, 255)" focusable="false" stroke="#fff" viewBox="0 0 20 20" style="height: 24px; width: 24px;"><path clip-rule="evenodd" d="m7.78 4.466 8.343-1.752a1.013 1.013 0 0 1 1.195.77l.575 2.601a.987.987 0 0 1-.763 1.182L10.686 8.62h6.647a1 1 0 0 1 1 1v7.714a1 1 0 0 1-1 1H3.544a1 1 0 0 1-1-1V9.717l-.661-2.992a.987.987 0 0 1 .762-1.181l5.087-1.068.01-.025zm-.328 3.3.77-1.86 3.355-.705-.834 1.875zm4.498-.944.834-1.874 3.174-.667.359 1.624zM6.266 8.015l-2.448.514-.36-1.623 3.58-.752zM4.044 10.12h12.79v6.714H4.043z" fill-rule="evenodd"></path></svg>
            <span>Trailer</span>
          </button>
          
        </div>
        <div class="description">{{ movieData.movieOverview }}</div>
        <div class="genres">
          <span v-for="(genre, index) in movieData.movieGenres.slice(0, 5)" :key="index" class="genre">{{ genre.name }}</span>
        </div>
    </div>
  </div>
</template>

<style scoped>

.container {
display: flex;
flex-direction: column;
align-items: flex-start; 
justify-content: center; 
max-width: 50%;
margin-left: 60px;
position: absolute;
bottom: 0px;
z-index: 2;
}

.movie-view .carousel-item {
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
background: linear-gradient(
  to top, 
  rgba(0, 0, 0, 1) 0%, 
  rgba(0, 0, 0, 1) 0%,
  rgba(0, 0, 0, 2) 10%, 
  rgba(0, 0, 0, 1) 50%, 
  rgba(0, 0, 0, 0) 100%   
);
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
min-width: 45%;
background-color: rgb(221, 221, 221); 
color: white;
border: 1px solid transparent;
padding: 14px 22px;
font-size: 1rem;
border-radius: 8px;
font-weight: 900;
cursor: pointer;
margin-top: 20px;
justify-content: center;
}

.watch-now-button:hover {
background-color: rgb(255, 255, 255);
}

.buttonText {
display: flex;
gap: 10px;
text-align: center;
justify-content: center;
}
.buttonText span {
margin-top: auto; 
font-weight: 750;
font-family: system-ui;
color: rgb(0, 0, 0);
letter-spacing: 1px;
}

.trailer-icon-row {
margin-top: 20px;
display: flex;
align-items: center;
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.trailer-icon {
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: transparent;
color: white;
border-color: transparent;
border-radius: 8px;
gap: 5px;
padding-left: 20px;
padding-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
}

.trailer-icon svg{
stroke: none;
}

.trailer-icon:hover {
background-color: rgba(134, 151, 206, 0.3);
}

.description {
max-width: 75%;
color: white;
margin-top: 20px;
line-height: 1.5; 
font-family: system-ui, sans-serif; 
text-align: left;
}

.genres {
display: flex;
flex-wrap: wrap;
gap: 20px;
margin-top: 20px;
margin-bottom: 20px;
text-align: left;
}

.genre {
background-color: rgba(0, 0, 0, 0.6);
color: white;
border-radius: 8px; 
font-size: 0.9rem;
}

</style>

<script>
export default {
  props: {
    movieData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToWatchPage() {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    },
    goToTrailer() {
      if (this.movieData && this.movieData.trailerUrl) {
        window.open(this.movieData.trailerUrl, "_blank");
      }
    },
  },
};
</script>