const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const VIDEO_BASE_URL = 'https://www.youtube.com/embed/';
const BASE_LOGO_URL = "https://image.tmdb.org/t/p/original"

async function fetchPopularMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=cfd0f90ef11421b744113aec2cdad0fe'
  );
  const data = await response.json();
  return data.results; 
}

async function fetchMovieTrailer(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=cfd0f90ef11421b744113aec2cdad0fe&include_image_language=en&append_to_response=videos,images`
  );
  const videoData = await response.json();
  
  const trailer = videoData.videos.results.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer' && video.official
  );

  const trailerUrl = trailer ? `${VIDEO_BASE_URL}${trailer.key}?autoplay=1&mute=1` : null;

  const logo = videoData.images.logos.find((logo) => logo.file_path);
  const logoUrl = logo ? `${BASE_LOGO_URL}${logo.file_path}` : null;

  return { trailerUrl, logoUrl };
}

export async function fetchBigScreenData() {
  const movies = await fetchPopularMovies();
  const movieData = await Promise.all(
    movies.map(async (movie) => {
      const imageUrl = movie.poster_path
      ? `${BASE_IMAGE_URL}${movie.poster_path}`
      : `${BASE_IMAGE_URL}${movie.backdrop_path}`;
      
      const { trailerUrl, logoUrl } = await fetchMovieTrailer(movie.id);
      return {
        movieDate: movie.release_date,
        movieTitle: movie.title,
        movieOverview: movie.overview,
        movieID: movie.id,
        imageUrl,
        trailerUrl,
        logoUrl, };
    })
  );
  return movieData;
}