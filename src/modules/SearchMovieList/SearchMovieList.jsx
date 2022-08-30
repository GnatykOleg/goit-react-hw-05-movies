import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './SearchMovieList.module.css';

export default function SearchMovieList({ movies }) {
  const elements = movies.map(({ title, id }) => {
    return (
      <li className={s.item} key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
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
