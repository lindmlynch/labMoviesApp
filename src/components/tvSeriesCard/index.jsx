import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
};

const TVSeriesCard = ({ tvSeries }) => {
  return (
    <Card sx={styles.card}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {tvSeries.name}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          tvSeries.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
      </CardActions>
    </Card>
  );
};

export default TVSeriesCard;

