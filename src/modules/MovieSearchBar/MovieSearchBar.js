import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'shared/services/theMovieAPI';

import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import SearchMovieList from '../SearchMovieList/SearchMovieList';
import { Loader } from 'components';

export default function MovieSearchBar() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      setLoading(true);
      try {
        const data = await getMoviesBySearch(query);

        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchMoviesBySearch();
    }
  }, [query]);

  const handleFormSubmit = searchValue => {
    if (!searchValue) {
      alert('Please type text');
      return;
    }
    setSearchParams({ query: searchValue });
  };
  return (
    <div>
      {error && <p>Movies not found.</p>}
      <MovieSearchForm formSubmitQuery={handleFormSubmit} />
      {loading && <Loader />}

      {movies.length > 0 && <SearchMovieList movies={movies} />}
    </div>
  );
}
