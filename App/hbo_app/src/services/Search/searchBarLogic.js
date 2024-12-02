/**
 * Fetch movies and TV series based on a keyword using TMDB API.
 * @param {string} query - The search keyword.
 * @returns {Promise<Object>} - An object containing movies and TV series.
 */
export const searchMoviesAndTV = async (query) => {
  if (!query || query.trim() === "") {
    console.warn("Search query is empty.");
    return { movies: [], tvShows: [] };
  }

  try {
    const [moviesResponse, tvResponse] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=cfd0f90ef11421b744113aec2cdad0fe&query=${encodeURIComponent(
          query
        )}&language=en-US&region=US&include_image_language=en&include_adult=false`
      ),
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=cfd0f90ef11421b744113aec2cdad0fe&query=${encodeURIComponent(
          query
        )}&language=en-US&include_adult=false`
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
      .filter((item) => item.poster_path) // Only include items with images
      .map((item) => ({
        movieID: item.id,
        title: item.title || item.original_title || "Untitled",
        imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        type: "movie",
      }));

    const tvShows = (tvData.results || [])
      .filter((item) => item.poster_path) // Only include items with images
      .map((item) => ({
        movieID: item.id,
        title: item.name || item.original_name || "Untitled",
        imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        type: "tv",
      }));

    return { movies, tvShows };
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
