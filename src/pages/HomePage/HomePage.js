import PopularFilmList from '../../modules/PopularFilmList/PopularFilmList';
import s from './HomePage.module.css';
export default function Home() {
  return (
    <section className="section">
      <main>
        <div className="container">
          <h1 className={s.title}>Weekly popular films</h1>
          <PopularFilmList />
        </div>
      </main>
    </section>
  );
}
