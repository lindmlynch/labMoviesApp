import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActors } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddActorToFavouritesIcon from '../components/cardIcons/addActorToFavourites';
import { MoviesContext } from "../contexts/moviesContext"; 
const ActorListPage = () => {
  const { id } = useParams();
  const { data: actors, error, isLoading, isError } = useQuery(["actors", id], () =>
    getActors(id)
  );

  const { addToFavouriteActors } = useContext(MoviesContext); 

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <PageTemplate
        actors={actors}
        title="Actors List"
        action={(actor) => (
          <AddActorToFavouritesIcon
            actor={actor}
            onAddToFavorites={() => addToFavouriteActors(actor)} 
          />
        )}
      />
    </div>
  );
};

export default ActorListPage;


