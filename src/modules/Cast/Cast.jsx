import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'shared/services/theMovieAPI';
import Loader from 'components/Loader/Loader';
import Container from 'modules/Container/Container';
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
      <li className={s.item} key={id}>
        <img
          className="img"
          src={
            profile_path
              ? (profile_path = `https://image.tmdb.org/t/p/w500/${profile_path}`)
              : (profile_path =
                  'https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg')
          }
          alt={name}
          width={140}
        />
        <p className={s.text}>{name}</p>
        <p className={s.text}>Character: {character}</p>
      </li>
    );
  });

  return (
    <section className="section">
      <Container>
        {loading && <Loader />}
        {error && <p style={{ fontSize: '20px' }}>Data not found</p>}
        {cast.length > 0 ? (
          <ul className={s.list}>{elements}</ul>
        ) : (
          <p style={{ fontSize: '20px' }}>
            Sorry we dont have informations about this cast!
          </p>
        )}
      </Container>
    </section>
  );
}
