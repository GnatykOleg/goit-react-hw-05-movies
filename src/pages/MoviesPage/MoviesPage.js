import Container from 'modules/Container/Container';
import MovieSearchBar from '../../modules/MovieSearchBar/MovieSearchBar';
import s from '../MoviesPage/MoviesPage.module.css';

export default function MoviesPage() {
  return (
    <section className="section">
      <Container>
        <h2 className={s.title}>Search movie</h2>
        <MovieSearchBar />
      </Container>
    </section>
  );
}
