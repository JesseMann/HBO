<template>
  <div class="home">
    <HeroCarousel :heroMovieCarousel="heroMovieCarousel" />
    <TopRatedCarouselTV :topRatedCarouselTV="topRatedCarouselTV"/>
    <Top10TVCarousel :top10TVCarousel="top10TVCarousel"/>
    <TopRatedCarouselMovie :topRatedCarouselMovie="topRatedCarouselMovie" />
    <GlobalFooter />
  </div>

</template>

<script>
import { fetchMovieData } from '@/services/Home/heroMovieCarouselLogic';
import { fetchTopRatedTVData } from '@/services/Home/topRatedCarouselTVLogic.js';
import { fetchtop10TVData } from '@/services/Home/top10TVCarouselLogic.js'
import { fetchTopRatedMovieData } from '@/services/Home/topRatedCarouselMovieLogic';

import HeroCarousel from '@/components/Home/HeroCarousel.vue';
import TopRatedCarouselTV from '@/components/Home/TopRatedCarouselTV.vue';
import Top10TVCarousel from '@/components/Home/Top10TVCarousel.vue'
import TopRatedCarouselMovie from '@/components/Home/TopRatedCarouselMovie.vue';
import GlobalFooter from '@/components/Global/GlobalFooter.vue';


export default {
  name: 'HomeView',
  components: {HeroCarousel, GlobalFooter, TopRatedCarouselTV, Top10TVCarousel, TopRatedCarouselMovie },
  data() {
    return {
      heroMovieCarousel: [],
      topRatedCarouselTV: [],
      top10TVCarousel: [],
      topRatedCarouselMovie: [],
    };
  },
  async mounted() {
    this.heroMovieCarousel = await fetchMovieData();
    this.topRatedCarouselTV = await fetchTopRatedTVData();
    this.top10TVCarousel = await fetchtop10TVData();
    this.topRatedCarouselMovie = await fetchTopRatedMovieData();
    
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


Create Dynamic Movies Page
Create Dynamic Series Page
Create Search Bar
Create Profile Page
Update Media Queries