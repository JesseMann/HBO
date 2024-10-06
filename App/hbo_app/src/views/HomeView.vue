<template>
  <div class="home">
    <HeroSection :posterImage="dynamicPoster" :videoSource="dynamicVideo"/>
  </div>
  <div>
    FISH
  </div>
  <div>
    FISH 1
  </div>
</template>

<style scoped>

.home {
  position: absolute;
  top: 0px;
}

</style>


<script>
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection
  },

  data() {
    return {
      dynamicPoster: '',
      dynamicVideo: ''  
    };
  },

  mounted() {
    this.fetchMovieData();
  },

  methods: {
    async fetchMovieData() {
      const options = { method: 'GET', headers: { accept: 'application/json' } };
      const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=cfd0f90ef11421b744113aec2cdad0fe&language=en-US', options);
      const data = await response.json();

      const movie = data.results[0];
 
      const baseImageUrl = "https://image.tmdb.org/t/p/original";
      const posterUrl = `${baseImageUrl}${movie.backdrop_path}`;

      this.dynamicPoster = posterUrl;

      if (movie.media_type === "movie") {
        await this.fetchMovieVideo(1062215);
      }
    },

    async fetchMovieVideo(movieId) {
      const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=cfd0f90ef11421b744113aec2cdad0fe&language=en-US`);
      const videoData = await videoResponse.json();

      const video = videoData.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');

      if (video) {
        this.dynamicVideo = `https://www.youtube.com/watch?v=${video.key}`;
      }
    }
  }
}
</script>

