<template>
  <div class="home">
    <HeroCarousel :movies="movies" />
    <BasicCarousel :bigScreenCarousel="bigScreenMovies" />
    <Top10MovieCarousel :bigScreenCarousel="bigScreenMovies" />
  </div>

</template>

<script>
import { fetchMovieData } from '@/services/movies';
import { fetchBigScreenData } from '@/services/bigScreenCarouselLogic';
import HeroCarousel from '@/components/HeroCarousel.vue';
import BasicCarousel from '@/components/BasicCarousel.vue';
import Top10MovieCarousel from '@/components/Top10MovieCarousel.vue';

export default {
  name: 'HomeView',
  components: { HeroCarousel, BasicCarousel, Top10MovieCarousel },
  data() {
    return {
      movies: [],
      bigScreenMovies: []
    };
  },
  async mounted() {
    this.movies = await fetchMovieData();
    this.bigScreenMovies = await fetchBigScreenData();
  }
};
</script>

<style scoped>

</style>