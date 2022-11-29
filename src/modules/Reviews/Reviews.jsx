import { getMovieReviews } from 'shared/services/theMovieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import Container from 'modules/Container/Container';
import s from './Reviews.module.css';

export default function Reviews() {
  const [state, setState] = useState({
    review: [],
    loading: false,
    error: null,
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const data = await getMovieReviews(movieId);
        setState(prevState => ({
          ...prevState,
          loading: false,
          review: [...data],
        }));
      } catch (error) {
        setState(prevState => ({ ...prevState, loading: false, error }));
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const { loading, error, review } = state;
  const elements = review.map(({ author, content, id }) => {
    return (
      <li className={s.item} key={id}>
        <p className={s.author}>Author: {author}</p>
        <p className={s.text}>{content}</p>
      </li>
    );
  });
  return (
    <section className="section">
      <Container>
        {loading && <Loader />}
        {error && (
          <div className={s.div}>
            <p className={s.text}>Data not found</p>
          </div>
        )}
        {review.length > 0 ? (
          <ul>{elements}</ul>
        ) : (
          <p className={s.text}>We dont have any reviews for this movie!</p>
        )}
      </Container>
    </section>
  );
}
