<template>
  <div class="home" ref="home">
    <HeroCarouselTV v-if="tvData" :tvData="tvData" />
    <TabbedContainer
      v-if="tvData"
      :tabs="tabs"
      :tabData="tabData"
    />
    <GlobalFooter />
  </div>
</template>

<script>
import { fetchTVData } from "@/services/DynamicSeries/heroTVCarouselLogic";
import { fetchRecommendedTVData } from "@/services/DynamicSeries/recommendedTVCarouselLogic";
import HeroCarouselTV from "@/components/DynamicSeries/HeroCarouselTV.vue";
import RecommendedCarouselTV from "@/components/DynamicSeries/RecommendedCarouselTV.vue";
import TVDetails from "@/components/DynamicSeries/TVDetails.vue";
import GlobalFooter from "@/components/Global/GlobalFooter.vue";
import TabbedContainer from "@/components/DynamicSeries/TabbedContainer.vue";

export default {
  name: "DynamicSeriesView",
  components: { HeroCarouselTV, GlobalFooter, TabbedContainer },
  data() {
    return {
      tvData: null,
      tabs: [
        { name: "recommend", label: "Recommended", component: RecommendedCarouselTV },
        { name: "details", label: "Details", component: TVDetails },
      ],
      tabData: {},
    };
  },
  async mounted() {
    await this.loadTVData();
  },
  watch: {
    "$route.params.tvID": {
      immediate: true,
      async handler() {
        await this.resetAndLoadData();
      },
    },
  },
  methods: {
    async loadTVData() {
      const tvID = this.$route.params.tvID;
      if (tvID) {
        this.tvData = await fetchTVData(tvID);
        const recommendedTVCarousel = await fetchRecommendedTVData(tvID);

        this.tabData = {
          recommend: { recommendedTVCarousel },
          details: { tvData: this.tvData },
        };
      }

      this.$nextTick(() => {
        if (this.$refs.home) {
          this.$refs.home.classList.add("loaded");
        }
      });
    },
    async resetAndLoadData() {
      if (this.$refs.home) {
        this.$refs.home.classList.remove("loaded");
      }
      setTimeout(async () => {
        await this.loadTVData();
      }, 100);
    },
  },
};
</script>

<style scoped>

.home {
  opacity: 0;
  transition: opacity 0.1s ease;
  background-color: black !important;
  background-image: none !important;
}

.home.loaded {
  opacity: 1;
}
</style>
