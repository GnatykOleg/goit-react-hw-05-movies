import PopularFilmList from '../../modules/PopularFilmList/PopularFilmList';
import s from './HomePage.module.css';
import Container from '../../modules/Container/Container';
export default function Home() {
  return (
    <section className="section">
      <main>
        <Container>
          <h1 className={s.title}>Weekly popular films</h1>
          <PopularFilmList />
        </Container>
      </main>
    </section>
  );
}
