import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '34dbf9d1a3fd74b10bf7ab9eec59866f',
    language: 'en-US',
  },
});

export const getPopularMovies = async () => {
  const { data } = await instance('/trending/movie/day');
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await instance(`/movie/${movieId}`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await instance(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await instance(`/movie/${movieId}/reviews`);
  return data.results;
};
export const getMoviesBySearch = async (query, page = 1) => {
  const { data } = await instance('/search/movie', {
    params: {
      query,
      page,
    },
  });

  return data.results;
};
