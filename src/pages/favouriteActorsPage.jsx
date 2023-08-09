import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActorById } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const FavouriteActorsPage = () => {
  const { favouriteActors: actorIds } = useContext(MoviesContext);

  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActorById,
      };
    })
  );

  const isLoading = favouriteActorQueries.some((q) => q.isLoading);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => q.data);

  return (
    <div>
      <PageTemplate
        title="Favourite Actors"
        actors={actors}
      />
    </div>
  );
};

export default FavouriteActorsPage;

