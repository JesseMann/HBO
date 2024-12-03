<template>
    <div class="search-results">
      <section v-if="movies.length">
        <h2>Movies</h2>
        <div class="media-grid">
          <div
            v-for="movie in movies"
            :key="movie.movieID"
            class="media-card"
            @click="navigateToMedia(movie)"
          >
            <img :src="movie.imageUrl || placeholderImage" alt="Movie Poster" />
            <p>{{ movie.title || "Untitled" }}</p>
          </div>
        </div>
      </section>
  
      <section v-if="tvShows.length">
        <h2>TV Series</h2>
        <div class="media-grid">
          <div
            v-for="show in tvShows"
            :key="show.movieID"
            class="media-card"
            @click="navigateToMedia(show)"
          >
            <img :src="show.imageUrl || placeholderImage" alt="TV Poster" />
            <p>{{ show.title || "Untitled" }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchResults",
    props: {
      movies: {
        type: Array,
        default: () => [],
      },
      tvShows: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        placeholderImage: require("@/assets/FooterIcons/FB.webp"),
      };
    },
    methods: {
      navigateToMedia(media) {
        const route =
          media.type === "tv" ? `/series/${media.movieID}` : `/movie/${media.movieID}`;
        this.$router.push(route);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-results {
    margin-top: 12%;
  }

  .search-results h2 {
    text-align: left;
  }
  
  .media-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .media-card {
    width: 150px;
    text-align: center;
    cursor: pointer;
  }
  
  .media-card img {
    width: 100%;
    border-radius: 8px;
  }
  
  .media-card p {
    color: white;
    margin-top: 8px;
  }
  
  h2 {
    color: white;
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
  .search-results {
    margin-top: 20%;
  }
}
  </style>
  