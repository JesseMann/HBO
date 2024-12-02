<template>
  <div class="home">
    <HeroCarouselTV :heroTVCarousel="heroTVCarousel" />
    <AiringTodayCarouselTV :airingTodayCarousel="airingTodayCarousel"/>
    <Top10TVCarousel :top10TVCarousel="top10TVCarousel"/>
    <TopRatedCarouselTV :topRatedCarouselTV="topRatedCarouselTV"/>
    <GlobalFooter />
  </div>

</template>

<script>
import { fetchtop10TVData } from '@/services/Series/top10TVCarouselLogic.js'
import { fetchTopRatedTVData } from '@/services/Series/topRatedCarouselTVLogic.js';
import { fetchTVData } from '@/services/Series/heroTVCarouselLogic.js';
import { fetchAiringTodayTVData } from '@/services/Series/airingTodayCarouselLogic.js';

import HeroCarouselTV from '@/components/Series/HeroCarouselTV.vue'
import Top10TVCarousel from '@/components/Series/Top10TVCarousel.vue'
import TopRatedCarouselTV from '@/components/Series/TopRatedCarouselTV.vue';
import GlobalFooter from '@/components/Global/GlobalFooter.vue';
import AiringTodayCarouselTV from '@/components/Series/AiringTodayCarouselTV.vue';


export default {
  name: 'SeriesView',
  components: { HeroCarouselTV, GlobalFooter, TopRatedCarouselTV, Top10TVCarousel, AiringTodayCarouselTV },
  data() {
    return {
      topRatedCarouselTV: [],
      top10TVCarousel: [],
      heroTVCarousel: [],
      airingTodayCarousel: [],
    };
  },
  async mounted() {
    this.topRatedCarouselTV = await fetchTopRatedTVData();
    this.top10TVCarousel = await fetchtop10TVData();
    this.heroTVCarousel = await fetchTVData();
    this.airingTodayCarousel = await fetchAiringTodayTVData();
    
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
