import React, { useState } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize current page to 1
  const { data, error, isLoading, isError } = useQuery(["discover", currentPage], () => getMovies(currentPage));

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <div>
      <MovieListPageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={movies.length === 0} // Disable if no more movies on next page
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
