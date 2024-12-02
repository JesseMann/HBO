<template>
    <div class="search-view">
      <SearchBar @search="fetchMoviesAndTV" />
      <SearchResults :movies="movies" :tvShows="tvShows" />
    </div>
  </template>
  
  <script>
  import SearchBar from "@/components/SearchView/SearchBar.vue";
  import SearchResults from "@/components/SearchView/SearchResults.vue";
  import { searchMoviesAndTV } from "@/services/Search/searchBarLogic.js";
  
  export default {
    name: "SearchView",
    components: { SearchBar, SearchResults },
    data() {
      return {
        movies: [],
        tvShows: [],
      };
    },
    methods: {
      async fetchMoviesAndTV(query) {
        if (!query.trim()) {
          this.movies = [];
          this.tvShows = [];
          return;
        }
  
        try {
          const { movies, tvShows } = await searchMoviesAndTV(query);
          this.movies = movies;
          this.tvShows = tvShows;
        } catch (error) {
          console.error("Error fetching movies/TV series:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>

  .search-view {
    padding-top: 20px;
    padding-left: 64px;
    padding-right: 64px;
  }
  </style>
  