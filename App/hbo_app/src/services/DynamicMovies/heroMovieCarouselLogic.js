const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
const BASE_LOGO_URL = "https://image.tmdb.org/t/p/original";
const VIDEO_BASE_URL = "https://www.youtube.com/embed/";

export async function fetchMovieDetails(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=cfd0f90ef11421b744113aec2cdad0fe&include_image_language=en&append_to_response=videos,images,credits`
  );
  const movieData = await response.json();

  const imageUrl = movieData.backdrop_path
    ? `${BASE_IMAGE_URL}${movieData.backdrop_path}`
    : `${BASE_IMAGE_URL}${movieData.poster_path}`;

  const logo = movieData.images && movieData.images.logos
    ? movieData.images.logos.find((logo) => logo.file_path)
    : null;

  const logoUrl = logo ? `${BASE_LOGO_URL}${logo.file_path}` : null;

  const trailer = movieData.videos && movieData.videos.results
    ? movieData.videos.results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer" &&
          video.official
      )
    : null;

  const trailerUrl = trailer ? `${VIDEO_BASE_URL}${trailer.key}` : null;

  const cast = movieData.credits?.cast?.slice(0, 5).map((member) => member.name) || [];
  const directors = movieData.credits?.crew
    ?.filter((crew) => crew.job === "Director")
    .map((director) => director.name) || [];
  const writers = movieData.credits?.crew
    ?.filter((crew) => crew.job === "Writer")
    .map((writer) => writer.name) || [];
  const producers = movieData.credits?.crew
    ?.filter((crew) => crew.job === "Producer")
    .map((producer) => producer.name) || [];

  const subtitleLanguages = movieData.spoken_languages?.map((lang) => lang.english_name) || [];
  const audioLanguages = movieData.audio_languages || []; // Adjust this line based on actual API availability

  return {
    movieID: movieData.id,
    movieTitle: movieData.title,
    movieOverview: movieData.overview,
    movieDate: movieData.release_date,
    movieRuntime: `${Math.floor(movieData.runtime / 60)}h ${movieData.runtime % 60}m`,
    movieRating: movieData.vote_average,
    movieGenres: movieData.genres,
    imageUrl,
    logoUrl,
    trailerUrl,
    movieResolution: "1080p",
    subtitleLanguages,
    audioLanguages,
    cast,
    directors,
    writers,
    producers,
  };
}
