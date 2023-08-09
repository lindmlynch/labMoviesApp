import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext"; 
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddActorToFavouritesIcon = ({ actor }) => {
  const context = useContext(MoviesContext); 

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavourites(actor); 
  };

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddActorToFavouritesIcon;
