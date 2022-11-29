import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './SearchMovieList.module.css';

export default function SearchMovieList({ movies }) {
  const elements = movies.map(({ title, id, poster_path }) => {
    return (
      <li className={s.item} key={id}>
        <Link className={s.text} to={`/movies/${id}`}>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="poster for movie"
          ></img>

          {title}
        </Link>
      </li>
    );
  });

  return <ul className={s.list}>{elements}</ul>;
}

SearchMovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
