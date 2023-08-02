import React from "react";
import Typography from "@mui/material/Typography";

const ActorDetails = ({ actor }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Bio
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Typography variant="subtitle1">Birthday: {actor.birthday}</Typography>
      <Typography variant="subtitle1">Place of Birth: {actor.place_of_birth}</Typography>
    </>
  );
};

export default ActorDetails;
