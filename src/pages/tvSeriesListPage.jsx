import React from "react";
import { useQuery } from "react-query";
import { getTVSeries } from "../api/tmdb-api";

const TVSeriesList = () => {
  const { data, error, isLoading, isError } = useQuery("tvSeries", getTVSeries);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const tvSeries = data ? data : [];

  return (
    <div>
      <h1>TV Series List</h1>
      <ul>
        {tvSeries.map((tvShow) => (
          <li key={tvShow.id}>{tvShow.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TVSeriesList;