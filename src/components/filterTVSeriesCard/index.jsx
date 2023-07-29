import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

const styles = {
  root: {
    padding: "20px",
  },
};

const FilterTVSeriesCard = ({ onUserInput, nameFilter }) => {
  const handleNameInputChange = (event) => {
    const value = event.target.value;
    onUserInput(value);
  };

  return (
    <Paper sx={styles.root}>
      <TextField
        label="Search by TV Series Name"
        variant="outlined"
        value={nameFilter}
        onChange={handleNameInputChange}
        fullWidth
      />
    </Paper>
  );
};

export default FilterTVSeriesCard;
