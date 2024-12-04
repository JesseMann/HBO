const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

async function fetchTopRatedTV() {
  const API_KEY = process.env.VUE_APP_TMDB_API_KEY

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchTopRatedTVData() {
  const tvShows = await fetchTopRatedTV();
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
