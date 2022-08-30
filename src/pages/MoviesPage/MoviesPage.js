import MovieSearchBar from '../../modules/MovieSearchBar/MovieSearchBar';

export default function MoviesPage() {
  return (
    <section className="section">
      <div className="container">
        <main>
          <h2>Search movie</h2>
          <MovieSearchBar />
        </main>
      </div>
    </section>
  );
}
