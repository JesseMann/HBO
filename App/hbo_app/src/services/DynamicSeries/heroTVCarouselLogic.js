const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
const BASE_LOGO_URL = "https://image.tmdb.org/t/p/original";
const VIDEO_BASE_URL = "https://www.youtube.com/embed/";

export async function fetchTVDetails(tvID) {
  try {
    const API_KEY = process.env.VUE_APP_TMDB_API_KEY; 

    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tvID}?api_key=${API_KEY}&include_image_language=en&append_to_response=videos,images,credits`
    );
    const tvData = await response.json();

    const imageUrl = tvData.backdrop_path
      ? `${BASE_IMAGE_URL}${tvData.backdrop_path}`
      : tvData.poster_path
      ? `${BASE_IMAGE_URL}${tvData.poster_path}`
      : "https://via.placeholder.com/500x281?text=No+Image+Available";

    const logo = tvData.images?.logos?.find((logo) => logo.file_path);
    const logoUrl = logo ? `${BASE_LOGO_URL}${logo.file_path}` : null;

    const trailer = tvData.videos?.results?.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official
    );
    const trailerUrl = trailer
      ? `${VIDEO_BASE_URL}${trailer.key}?autoplay=1&mute=1`
      : null;

      const cast = tvData.credits?.cast || [];

      return {
        tvID: tvData.id,
        tvTitle: tvData.name || "Untitled",
        tvOverview: tvData.overview || "No overview available.",
        tvDate: tvData.first_air_date || "N/A",
        tvEpisodes: tvData.number_of_episodes || "N/A",
        tvSeasons: tvData.number_of_seasons || "N/A",
        tvRating: tvData.vote_average ? tvData.vote_average.toFixed(1) : "N/A",
        tvGenres: tvData.genres || [],
        cast, 
        imageUrl,
        logoUrl,
        trailerUrl,
      };
  } catch (error) {
    console.error(`Error fetching TV details for TV ID ${tvID}:`, error);
    return null;
  }
}

export async function fetchTVData(tvID) {
  // Wrapper for fetching TV details for compatibility
  return fetchTVDetails(tvID);
}
