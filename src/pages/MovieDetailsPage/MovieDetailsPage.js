import { useState, useEffect, Suspense, lazy } from 'react';

import { useParams, useNavigate, Link, Route, Routes } from 'react-router-dom';

import MovieDetailsList from '../../modules/MovieDetailsList/MovieDetailsList';

import { getMovieDetails } from 'shared/services/theMovieAPI';
import { Loader } from 'components';

import Container from 'modules/Container/Container';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../../modules/Cast/Cast'));
const Reviews = lazy(() => import('../../modules/Reviews/Reviews'));

export default function MovieDetailsPage() {
  const [state, setState] = useState({
    movies: {},
    loading: false,
    error: null,
  });

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      try {
        const data = await getMovieDetails(movieId);

        setState(prevState => ({
          ...prevState,
          movies: data,
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({ ...prevState, loading: false, error }));
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const { loading, error, movies } = state;

  const goBackButton = () => {
    navigate(-1);
  };

  const isMovies = Object.keys(movies).length > 0;

  return (
    <>
      {loading && <Loader />}
      {error && <h2 className={s.error}>Data not found</h2>}
      {isMovies && (
        <>
          <section className="section">
            <Container>
              <button className={s.button} type="button" onClick={goBackButton}>
                ← Go back
              </button>
              <MovieDetailsList {...movies} />
            </Container>
          </section>
          <section className="section">
            <Container>
              <p className={s.text}>Additional information:</p>
              <Link className={s.link} to={`cast`}>
                » Cast
              </Link>
              <Link className={s.link} to={`reviews`}>
                » Reviews
              </Link>
            </Container>
          </section>
          <Suspense>
            <Routes>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
