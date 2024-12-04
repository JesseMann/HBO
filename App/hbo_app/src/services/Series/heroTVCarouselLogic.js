const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const VIDEO_BASE_URL = 'https://www.youtube.com/embed/';
const BASE_LOGO_URL = 'https://image.tmdb.org/t/p/w500/';
const API_KEY = process.env.VUE_APP_TMDB_API_KEY;

async function fetchPopularTVShows() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&region=US&with_origin_country=US&with_original_language=en&without_genres=35,10749&sort_by=popularity.desc&include_adult=false&page=1`
      );
    const data = await response.json();
    return data.results || [];
  }

  async function fetchTVTrailer(tvId) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&append_to_response=videos,images&include_image_language=en,null`
      );
      const videoData = await response.json();
  
      const trailer = videoData.videos?.results?.find(
        (video) => video.site === 'YouTube' && video.type === 'Trailer' && video.official
      );
      const trailerUrl = trailer ? `${VIDEO_BASE_URL}${trailer.key}?autoplay=1&mute=1` : null;
  
      const logo = videoData.images?.logos?.find((logo) => logo.file_path);
      const logoUrl = logo ? `${BASE_LOGO_URL}${logo.file_path}` : null;
  
      return { trailerUrl, logoUrl };
    } catch (error) {
      console.error(`Error fetching trailer for TV ID ${tvId}:`, error);
      return { trailerUrl: null, logoUrl: null };
    }
  }

export async function fetchTVData() {
    const tvShows = await fetchPopularTVShows();
    const tvData = await Promise.all(
      tvShows.map(async (show) => {
        const imageUrl = show.backdrop_path
          ? `${BASE_IMAGE_URL}${show.backdrop_path}`
          : show.poster_path
          ? `${BASE_IMAGE_URL}${show.poster_path}`
          : null;


        const { trailerUrl, logoUrl } = await fetchTVTrailer(show.id);
        console.log('TV Show:', show.name, 'Logo URL:', logoUrl);

        return {
          tvDate: show.first_air_date || 'N/A', 
          tvTitle: show.name || 'Untitled',
          tvOverview: show.overview || 'No overview available.', 
          tvID: show.id || null, 
          imageUrl: imageUrl || 'https://via.placeholder.com/500x281?text=No+Image+Available',
          trailerUrl,
          logoUrl,
        };
      })
    );
    return tvData;
  }
