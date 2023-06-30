import React from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getUpcomingMovies } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'; 

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data : [];

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => <AddToFavouritesIcon movie={movie} />} 
    />
  );
};

export default UpcomingMoviesPage;
