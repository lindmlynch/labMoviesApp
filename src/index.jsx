import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import FavouriteActorsPage from "./pages/favouriteActorsPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorListPage from "./pages/actorListPage"; 
import TVSeriesList from "./pages/tvSeriesListPage";
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import ActorDetailsPage from "./pages/actorDetailsPage";
import CreateMoviePage from "./pages/createMoviePage"; 


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
              <Route path="/movies/top-rated" element={<TopRatedMoviesPage />} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/actors/favourites" element={<FavouriteActorsPage />} />
              <Route path="/create-movies" element={<CreateMoviePage />} />
              <Route path="/actors" element={<ActorListPage />} />
              <Route path="/tv-series" element={<TVSeriesList />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/actors/:id" element={<ActorDetailsPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
