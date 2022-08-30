import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container">
        <h2>NOT FOUND PAGE</h2>
        <Link to="/">GO HOME PAGE</Link>
      </div>
    </section>
  );
}
