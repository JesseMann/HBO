const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

async function fetchTopRatedTV() {
  const response = await fetch(
    'https://api.themoviedb.org/3/tv/top_rated?api_key=cfd0f90ef11421b744113aec2cdad0fe&language=en-US&page=1'
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
