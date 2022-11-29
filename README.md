# React Movies Finder

#### Adaptive design to the mobile, tablet, and desktop.

#### Themoviedb.org public API is used for the backend.

#### The following endpoints were used in this work:

` /trending/get-trending a list of the most popular films for today to create a collection on the main page.`

` /search/search-movies search for a movie by keyword on the movies page.`

` /movies/get-movie-details Request full movie details for the movie page.`

` /movies/get-movie-credits request information about the cast for the movie page.`

` /movies/get-movie-reviews Request reviews for the movie page.`

#### The application has the following routes. If the user has accessed a non-existent route, he is redirected to the home page.

`'/' is the Home component, the home page with a list of popular movies.`

`'/movies' is the Movies component, a search page for movies by keyword.`

`'/movies/:movieId'' is the MovieDetails component, the movie detail page.`

`/movies/:movieId/cast - Cast component, information about the cast. Rendered on the MovieDetails page.`

`/movies/:movieId/reviews - Reviews component, information about reviews. Rendered on the MovieDetails page.`

#### Added asynchronous loading of JS code for app routes using React.lazy() and <Suspense>
