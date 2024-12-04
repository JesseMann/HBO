const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

async function fetchPopularTVShows() {
  const API_KEY = process.env.VUE_APP_TMDB_API_KEY
  
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchtop10TVData() {
  const tvShows = await fetchPopularTVShows();
  const tvData = tvShows.map(tvShow => ({
    tvID: tvShow.id,
    imageUrl: tvShow.poster_path
      ? `${BASE_IMAGE_URL}${tvShow.poster_path}`
      : `${BASE_IMAGE_URL}${tvShow.backdrop_path}`
  }));
  
  return tvData;
}