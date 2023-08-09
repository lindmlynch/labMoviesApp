import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; 
const ActorDetails = ({ actor }) => {
  return (
    <Box p={2}> 
      <Typography variant="h5" component="h3" gutterBottom> 
        Bio
      </Typography>

      <Typography variant="body1" component="p" paragraph> 
        {actor.biography}
      </Typography>

      <Typography variant="subtitle1" paragraph>
        Birthday: {actor.birthday}
      </Typography>
      <Typography variant="subtitle1">
        Place of Birth: {actor.place_of_birth}
      </Typography>
    </Box>
  );
};

export default ActorDetails;

