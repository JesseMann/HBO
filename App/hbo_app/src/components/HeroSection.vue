<template>
  <div class="hero">
    <img v-if="!isVideoPlaying" :src="posterImage" class="hero-image" alt="Static Poster Image">
    <video v-else :src="videoSource" class="hero-video" autoplay muted></video>
  </div>
</template>


<style scoped>

.hero {
  width: 100vw;
  max-height: 100vh;
}

.hero img {
   min-height: 850px;
   max-height: 100vh;
   width: 100%;
   max-width: 100%;
   object-fit: cover;
}

</style>

<script>
export default {
  name: 'HeroSection',
  props: {
    posterImage: {
      type: String,
      required: true
    },
    videoSource: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isVideoPlaying: false
    };
  },
  methods: {
    playVideo() {
      this.isVideoPlaying = true;
    },
    stopVideo() {
      this.isVideoPlaying = false;
    }
  }
};
</script>