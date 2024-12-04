const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

async function fetchRecommendedMovies(movieId) {
  const API_KEY = process.env.VUE_APP_TMDB_API_KEY; 

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results; 
}

export async function fetchRecommendedData(movieId) {
  const movies = await fetchRecommendedMovies(movieId);
  const movieData = await Promise.all(
    movies.map(async (movie) => {
      const imageUrl = movie.poster_path
        ? `${BASE_IMAGE_URL}${movie.poster_path}`
        : `${BASE_IMAGE_URL}${movie.backdrop_path}`;
      
      return {
        movieID: movie.id,
        imageUrl, 
      };
    })
  );
  return movieData;
}