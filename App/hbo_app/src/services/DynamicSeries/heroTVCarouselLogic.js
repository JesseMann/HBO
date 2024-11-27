const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
const BASE_LOGO_URL = "https://image.tmdb.org/t/p/original";
const VIDEO_BASE_URL = "https://www.youtube.com/embed/";

async function fetchTVRecommendations(seriesId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${seriesId}/recommendations?api_key=cfd0f90ef11421b744113aec2cdad0fe&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching recommendations for TV ID ${seriesId}:`, error);
    return [];
  }
}

async function fetchTVDetails(tvId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=cfd0f90ef11421b744113aec2cdad0fe&include_image_language=en&append_to_response=videos,images,credits`
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

    const cast = tvData.credits?.cast.map((member) => member.name) || [];
    const directors = tvData.credits?.crew
      ?.filter((crew) => crew.job === "Director")
      .map((director) => director.name) || [];
    const producers = tvData.credits?.crew
      ?.filter((crew) => crew.job === "Producer")
      .map((producer) => producer.name) || [];

    return {
      tvID: tvData.id,
      tvTitle: tvData.name || "Untitled",
      tvOverview: tvData.overview || "No overview available.",
      tvDate: tvData.first_air_date || "N/A",
      tvEpisodes: tvData.number_of_episodes || "N/A",
      tvRating: tvData.vote_average ? tvData.vote_average.toFixed(1) : "N/A",
      tvGenres: tvData.genres || [],
      imageUrl,
      logoUrl,
      trailerUrl,
      cast,
      directors,
      producers,
    };
  } catch (error) {
    console.error(`Error fetching details for TV ID ${tvId}:`, error);
    return null;
  }
}

export async function fetchTVData(seriesId) {
  try {
    const recommendedTVShows = await fetchTVRecommendations(seriesId);

    const tvData = await Promise.all(
      recommendedTVShows.map(async (show) => {
        const tvDetails = await fetchTVDetails(show.id);
        return tvDetails || {
          tvID: show.id,
          tvTitle: show.name || "Untitled",
          tvOverview: show.overview || "No overview available.",
          tvDate: show.first_air_date || "N/A",
          tvEpisodes: show.number_of_episodes || "N/A",
          tvRating: show.vote_average
            ? show.vote_average.toFixed(1)
            : "N/A",
          tvGenres: show.genre_ids || [],
          imageUrl: show.backdrop_path
            ? `${BASE_IMAGE_URL}${show.backdrop_path}`
            : `${BASE_IMAGE_URL}${show.poster_path}`,
          logoUrl: null,
          trailerUrl: null,
          cast: [],
          directors: [],
          producers: [],
        };
      })
    );

    return tvData;
  } catch (error) {
    console.error("Error fetching recommended TV shows:", error);
    return [];
  }
}
