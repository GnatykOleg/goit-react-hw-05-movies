import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './MovieSearchForm.module.css';

export default function MovieSearchForm({ formSubmitQuery }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    formSubmitQuery(query);
    setQuery('');
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <input
          placeholder="Please type text..."
          className={s.input}
          name="search"
          value={query}
          onChange={handleChange}
        ></input>
      </label>
      <button className={s.btn} type="submit">
        Search
      </button>
    </form>
  );
}

MovieSearchForm.propTypes = {
  formSubmitQuery: PropTypes.func.isRequired,
};
