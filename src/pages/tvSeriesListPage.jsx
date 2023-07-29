import React from "react";
import { useQuery } from "react-query";
import { getTVSeries } from "../api/tmdb-api";
import TVSeriesPageTemplate from "../components/templateSeriesListPage";

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
      <TVSeriesPageTemplate tvSeries={tvSeries} title="TV Series List" />
    </div>
  );
};

export default TVSeriesList;
