import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from 'components';

import './App.css';

const Header = lazy(() => import('../src/modules/Header/Header'));

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const NotFoundPage = lazy(() =>
  import('../src/pages/NotFoundPage/NotFoundPage')
);
const MovieDetailsPage = lazy(() =>
  import('../src/pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('../src/pages/MoviesPage/MoviesPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
