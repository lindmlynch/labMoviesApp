import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

const styles = {
  root: {
    padding: "20px",
  },
};

const FilterActorsCard = ({ onUserInput, nameFilter }) => {
  const handleNameInputChange = (event) => {
    const value = event.target.value;
    onUserInput(value);
  };

  return (
    <Paper sx={styles.root}>
      <TextField
        label="Search by Actor Name"
        variant="outlined"
        value={nameFilter}
        onChange={handleNameInputChange}
        fullWidth
      />
    </Paper>
  );
};

export default FilterActorsCard;
