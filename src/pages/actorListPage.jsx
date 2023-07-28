import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActors } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const ActorListPage = () => {
  const { id } = useParams();
  const { data: actors, error, isLoading, isError } = useQuery(["actors", id], () =>
    getActors(id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>Actors List</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActorListPage;
