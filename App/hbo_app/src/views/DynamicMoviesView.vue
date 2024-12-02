<template>
  <div class="home" ref="home">
    <HeroCarousel v-if="movieData" :movieData="movieData" />
    <TabbedContainer
      v-if="movieData"
      :tabs="tabs"
      :tabData="tabData"
    />
    <GlobalFooter />
  </div>
</template>

<script>
import { fetchMovieDetails } from '@/services/DynamicMovies/heroMovieCarouselLogic';
import { fetchRecommendedData } from '@/services/DynamicMovies/RecommendedMovieCarouselLogic';
import HeroCarousel from '@/components/DynamicMovies/HeroCarousel.vue';
import GlobalFooter from '@/components/Global/GlobalFooter.vue';
import RecommendedCarousel from '@/components/DynamicMovies/RecommendedCarousel.vue';
import MovieDetails from "@/components/DynamicMovies/MovieDetails.vue";
import TabbedContainer from "@/components/DynamicMovies/TabbedContainer.vue";


export default {
  name: 'DynamicMoviesView',
  components: { HeroCarousel, GlobalFooter, TabbedContainer },
  data() {
    return {
      movieData: null,
      tabs: [
        { name: "recommend", label: "Recommended", component: RecommendedCarousel },
        { name: "details", label: "Details", component: MovieDetails },
      ],
      tabData: {},
    };
  },
  async mounted() {
    await this.loadMovieData();
  },
  watch: {
    '$route.params.movieID': {
      immediate: true,
      async handler() {
        await this.resetAndLoadData();
      },
    },
  },
  methods: {
    async loadMovieData() {
      const movieID = this.$route.params.movieID;
      if (movieID) {
        this.movieData = await fetchMovieDetails(movieID);
        this.recommendedMovieCarousel = await fetchRecommendedData(movieID);

        this.tabData = {
          recommend: { recommendedMovieCarousel: this.recommendedMovieCarousel },
          details: { movieDetails: this.movieData },
        };
      }

      this.$nextTick(() => {
        if (this.$refs.home) {
          this.$refs.home.classList.add('loaded');
        }
      });
    },
    async resetAndLoadData() {
      if (this.$refs.home) {
        this.$refs.home.classList.remove('loaded');
      }
      setTimeout(async () => {
        await this.loadMovieData();
      }, 100);
    },
  },
};

</script>


<style scoped>

.home {
  opacity: 0;
  transition: opacity .1s ease;
  background-color: black!important;
  background-image: none!important;
  }

.home.loaded {
  opacity: 1;
}
</style>