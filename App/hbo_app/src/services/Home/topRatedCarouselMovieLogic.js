const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

async function fetchPopularMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=cfd0f90ef11421b744113aec2cdad0fe'
  );
  const data = await response.json();
  return data.results; 
}

export async function fetchTopRatedMovieData() {
  const movies = await fetchPopularMovies();
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
