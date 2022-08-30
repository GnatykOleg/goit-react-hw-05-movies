import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'shared/services/theMovieAPI';
import Loader from 'components/Loader/Loader';
import s from './Cast.module.css';

export default function Cast() {
  const [state, setState] = useState({
    cast: [],
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      try {
        const data = await getMovieCast(movieId);
        setState(prevState => ({
          ...prevState,
          cast: [...data],
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({ ...prevState, loading: false, error }));
      }
    };
    fetchMovieCast();
  }, [movieId]);

  const { loading, error, cast } = state;

  const elements = cast.map(({ name, character, profile_path, id }) => {
    return (
      <ul className={s.list} key={id}>
        <li>
          <img
            src={
              profile_path
                ? (profile_path = `https://image.tmdb.org/t/p/w500/${profile_path}`)
                : (profile_path =
                    'https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792__340.jpg')
            }
            alt={name}
            width={140}
          />
        </li>
        <li className={s.item}>
          <p className={s.text}>{name}</p>
          <p className={s.text}>Character: {character}</p>
        </li>
      </ul>
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
      {cast.length > 0 ? (
        <div className={s.div}>{elements}</div>
      ) : (
        <div className={s.div}>
          <p className={s.text}>
            Sorry we dont have informations about this cast
          </p>
        </div>
      )}
    </>
  );
}
