const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const TODAY = new Date().toISOString().split('T')[0];

async function fetchAiringTodayTV() {
  const API_KEY = process.env.VUE_APP_TMDB_API_KEY

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&with_origin_country=US&with_original_language=en&air_date.gte=${TODAY}&air_date.lte=${TODAY}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchAiringTodayTVData() {
  const tvShows = await fetchAiringTodayTV();
  const tvData = tvShows.map((tvShow) => {
    const imageUrl = tvShow.poster_path 
      ? `${BASE_IMAGE_URL}${tvShow.poster_path}` 
      : `${BASE_IMAGE_URL}${tvShow.backdrop_path}`;
    
    return {
      tvID: tvShow.id,
      imageUrl,
    };
  });

  return tvData;
}
