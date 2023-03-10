const API_KEY = '436949076e001e14eab6be97ed97ce99';
// const API_KEY = "10612ebbbeaf2ad5999e09badf85e183";

const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchMovies(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}


export function getMovieTrending() {
  return fetchMovies(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
}


export function getSingleMovieDetails(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)

  
}

export function getCastMovie(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
}

export function getMovieReviews(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
}


export function getMovieByQuery(query) {
  
    return fetchMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)

  
}