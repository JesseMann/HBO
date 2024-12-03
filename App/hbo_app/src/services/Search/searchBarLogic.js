export const searchMoviesAndTV = async (query) => {
  if (!query || query.trim() === "") {
    console.warn("Search query is empty.");
    return { movies: [], tvShows: [] };
  }

  try {
    const [moviesResponse, tvResponse] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=true&api_key=cfd0f90ef11421b744113aec2cdad0fe&query=${encodeURIComponent(
          query
        )}&language=en-US&region=US&include_image_language=en&include_adult=true&with_original_language=en&page=1&per_page=40`
      ),
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=cfd0f90ef11421b744113aec2cdad0fe&query=${encodeURIComponent(
          query
        )}&language=en-US&include_adult=true&page=1&per_page=40`
      ),
    ]);

    if (!moviesResponse.ok || !tvResponse.ok) {
      throw new Error("Failed to fetch search results.");
    }

    const [moviesData, tvData] = await Promise.all([
      moviesResponse.json(),
      tvResponse.json(),
    ]);

    const movies = (moviesData.results || [])
    .filter((item) => item.poster_path && item.original_language == "en" ) 
    .map((item) => ({
      movieID: item.id,
      title: item.title || item.original_title || "Untitled",
      imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      type: "movie",
    }));


    const tvShows = (tvData.results || [])
    .filter((item) => item.poster_path && item.original_language == "en") 
    .map((item) => ({
      movieID: item.id,
      title: item.name || item.original_name || "Untitled",
      imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      type: "tv",
    }));

      console.log("Raw Movies Data:", moviesData);
      console.log("Raw TV Shows Data:", tvData);

    return { movies, tvShows };
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
