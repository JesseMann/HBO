<template>
  <div class="home">
    <HeroCarousel :heroMovieCarousel="heroMovieCarousel" />
    <TopRatedCarousel :topRatedCarousel="topRatedCarousel" />
    <Top10MovieCarousel :top10MovieCarousel="top10MovieCarousel" />
    <BigScreenCarousel :bigScreenCarousel="bigScreenCarousel" />
    <GlobalFooter />
  </div>

</template>

<script>
import { fetchMovieData } from '@/services/Movies/heroMovieCarouselLogic';
import { fetchBigScreenData } from '@/services/Movies/bigScreenCarouselLogic';
import { fetchtop10MoviesData } from '@/services/Movies/top10MovieCarouselLogic';
import { fetchTopRatedData } from '@/services/Movies/topRatedCarouselLogic';

import HeroCarousel from '@/components/Movies/HeroCarousel.vue';
import BigScreenCarousel from '@/components/Movies/BigScreenCarousel.vue';
import Top10MovieCarousel from '@/components/Movies/Top10MovieCarousel.vue';
import TopRatedCarousel from '@/components/Movies/TopRatedCarousel.vue';
import GlobalFooter from '@/components/Global/GlobalFooter.vue';



export default {
  name: 'MoviesView',
  components: { HeroCarousel, BigScreenCarousel, Top10MovieCarousel, TopRatedCarousel, GlobalFooter },
  data() {
    return {
      heroMovieCarousel: [],
      bigScreenCarousel: [],
      top10MovieCarousel: [],
      topRatedCarousel: []
    };
  },
  async mounted() {
    this.heroMovieCarousel = await fetchMovieData();
    this.bigScreenCarousel = await fetchBigScreenData();
    this.top10MovieCarousel = await fetchtop10MoviesData();
    this.topRatedCarousel = await fetchTopRatedData();
  
    setTimeout(() => {
      const homeElement = document.querySelector('.home');
      if (homeElement) {
        homeElement.classList.add('loaded');
      }
    }, 1000);
  }
};
</script>

<style scoped>

  .home {
  opacity: 0;
  transition: opacity 1s ease
}

.home.loaded {
  opacity: 1;
}
</style>