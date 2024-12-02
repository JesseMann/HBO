<template>
  <div class="tv-details" v-if="tvData">
    <div
      class="detail-item"
      v-if="tvData.tvTitle"
    >
      <h2>Title</h2>
      <p>{{ tvData.tvTitle }}</p>
    </div>

    <div
      class="detail-item"
      v-if="tvData.tvDate"
    >
      <h2>First Air Date</h2>
      <p>{{ tvData.tvDate }}</p>
    </div>

    <div
      class="detail-item"
      v-if="tvData.tvGenres.length"
    >
      <h2>Genres</h2>
      <p>{{ genres }}</p>
    </div>

    <div
      class="detail-item"
      v-if="tvData.cast.length"
    >
      <h2>Cast</h2>
      <p>{{ tvData.cast.map(actor => actor.name).join(", ") }}</p>
    </div>

    <div
      class="detail-item"
      v-if="tvData.tvSeasons"
    >
      <h2>Seasons</h2>
      <p>{{ tvData.tvSeasons }}</p>
    </div>

    <div
      class="detail-item"
      v-if="tvData.tvEpisodes"
    >
      <h2>Episodes</h2>
      <p>{{ tvData.tvEpisodes }}</p>
    </div>

    <div
      class="detail-item"
      v-if="tvData.tvRating"
    >
      <h2>Rating</h2>
      <p>{{ tvData.tvRating }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tvData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    genres() {
      return this.tvData.tvGenres.length
        ? this.tvData.tvGenres.map((genre) => genre.name).join(", ")
        : "N/A";
    },
  },
};
</script>

<style scoped>
.tv-details {
  color: white;
  font-family: system-ui;
  text-align: left;
  width: 50%;
}

.detail-item {
  margin-bottom: 20px;
  margin-left: 60px;
}

.detail-item h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.detail-item p {
  font-size: 14px;
  margin: 0;
  line-height: 20px;
  letter-spacing: 1px;
}
</style>
