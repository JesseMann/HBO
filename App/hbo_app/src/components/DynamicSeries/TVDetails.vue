<template>
  <div class="movie-details">
    <div
      class="detail-item"
      v-if="movieDetails.movieTitle"
    >
      <h2>Title</h2>
      <p>{{ movieDetails.movieTitle }}</p>
    </div>

    <div
      class="detail-item"
      v-if="movieDetails.movieDate"
    >
      <h2>Release Date</h2>
      <p>{{ movieDetails.movieDate }}</p>
    </div>

    <div
      class="detail-item"
      v-if="genres"
    >
      <h2>Genres</h2>
      <p>{{ genres }}</p>
    </div>

    <div
      class="detail-item"
      v-if="movieDetails.cast"
    >
      <h2>Starring</h2>
      <p>{{ movieDetails.cast.join(", ") }}</p>
    </div>

    <div
      class="detail-item"
      v-if="movieDetails.directors"
    >
      <h2>Directors</h2>
      <p>{{ movieDetails.directors.join(", ") }}</p>
    </div>

    <div
      class="detail-item"
      v-if="movieDetails.producers"
    >
      <h2>Producers</h2>
      <p>{{ movieDetails.producers.join(", ") }}</p>
    </div>
  </div>
</template>

<style scoped>
.movie-details {
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

<script>
export default {
  props: {
    movieDetails: {
      type: Object,
      required: true,
    },
  },
  computed: {
    genres() {
      return this.movieDetails.movieGenres?.map((genre) => genre.name).join(", ") || "N/A";
    },
  },
};
</script>
