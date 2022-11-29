import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from 'shared/services/theMovieAPI';
import { Loader } from 'components';
import s from './PopularFilmList.module.css';

export default function PopularFilmList() {
  const [state, setState] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      try {
        const data = await getPopularMovies();

        setState(prevState => ({
          ...prevState,
          movies: [...data],
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };
    fetchPopularMovies();
  }, []);

  const { loading, error, movies } = state;

  const elements = movies?.map(({ title, id, poster_path }) => {
    return (
      <li className={s.item} key={id}>
        <Link to={`/movies/${id}`}>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="postermovie"
          ></img>
          <p className={s.text}>{title}</p>
        </Link>
      </li>
    );
  });

  return (
    <>
      {loading && <Loader />}
      {error && (
        <div className={s.div}>
          <p className={s.text}>Data not found</p>
        </div>
      )}
      {movies.length > 0 ? (
        <ul className={s.list}>{elements}</ul>
      ) : (
        <div className={s.div}>
          <p className={s.text}>Sorry we dont found films...</p>
        </div>
      )}
    </>
  );
}
