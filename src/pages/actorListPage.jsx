import React from "react";
import ActorListPageTemplate from "../components/templateActorListPage";
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
    <ActorListPageTemplate actors={actors} title="Actors List" /> 
  );
};

export default ActorListPage;
