import React from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTopRatedMovies } from '../api/tmdb-api'; 
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';

const TopRatedMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('topRated', getTopRatedMovies); 

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data : [];

  return (
    <PageTemplate
      title="Top Rated Movies" 
      movies={movies}
      action={(movie) => <AddToPlaylistIcon movie={movie} />}
    />
  );
};

export default TopRatedMoviesPage;
