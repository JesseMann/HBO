const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

async function fetchRecommendedTVShows(tvId) {
  const API_KEY = process.env.VUE_APP_TMDB_API_KEY; 

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/recommendations?language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results; 
}

export async function fetchRecommendedTVData(tvId) {
  const tvShows = await fetchRecommendedTVShows(tvId);
  const tvData = await Promise.all(
    tvShows.map(async (tvShow) => {
      const imageUrl = tvShow.poster_path
        ? `${BASE_IMAGE_URL}${tvShow.poster_path}`
        : tvShow.backdrop_path
        ? `${BASE_IMAGE_URL}${tvShow.backdrop_path}`
        : [];
      
      return {
        tvID: tvShow.id,
        imageUrl, 
      };
    })
  );
  return tvData;
}
