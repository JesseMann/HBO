<template>
  <div class="home" ref="home">
    <HeroCarouselTV v-if="tvData && tvData.length > 0" :tvData="tvData" />
    <GlobalFooter />
  </div>
</template>

<script>
import { fetchTVData } from "@/services/DynamicSeries/heroTVCarouselLogic";
import HeroCarouselTV from "@/components/DynamicSeries/HeroCarouselTV.vue";
import GlobalFooter from "@/components/Global/GlobalFooter.vue";

export default {
  name: "DynamicSeriesView",
  components: { HeroCarouselTV, GlobalFooter, },
  data() {
    return {
      tvData: null,
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
