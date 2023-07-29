import React, { useState } from "react";
import HeaderTVSeriesList from "../headerTVSeriesList"; 
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import FilterTVSeriesCard from "../filterTVSeriesCard"; 
import TVSeriesCard from "../tvSeriesCard"; 

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function TVSeriesPageTemplate({ tvSeries, title }) {
  const [nameFilter, setNameFilter] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  let displayedTVSeries = tvSeries.filter((series) => {
    return series.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  const handleNameFilterChange = (value) => {
    setNameFilter(value);
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <HeaderTVSeriesList title={title} />
        </Grid>
        <Grid item container spacing={5}>
          {displayedTVSeries.map((series) => (
            <Grid item key={series.id}>
              <TVSeriesCard tvSeries={series} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterTVSeriesCard
          onUserInput={handleNameFilterChange}
          nameFilter={nameFilter}
        />
      </Drawer>
    </>
  );
}

export default TVSeriesPageTemplate;

