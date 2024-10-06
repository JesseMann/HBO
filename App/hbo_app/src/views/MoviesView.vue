<template>
  <div class="home">
    <HeroCarousel :images="dynamicImages" />
  </div>
</template>

<script>
import HeroCarousel from '@/components/HeroCarousel.vue';

export default {
  name: 'HomeView',
  components: {
    HeroCarousel,
  },
  data() {
    return {
      dynamicImages: [],
    };
  },
  mounted() {
    this.fetchMovieData();
  },
  methods: {
    async fetchMovieData() {
      const options = { method: 'GET', headers: { accept: 'application/json' } };
      const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=your_api_key', options);
      const data = await response.json();
      
      const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
      
      // Loop through the results to collect the poster URLs
      this.dynamicImages = data.results.map(movie => `${baseImageUrl}${movie.poster_path}`);
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
}
</style>
