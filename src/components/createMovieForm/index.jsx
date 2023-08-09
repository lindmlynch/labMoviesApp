import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MoviesContext } from '../../contexts/moviesContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from './styles'; 
const CreateMovieForm = () => {
  const {
    control,
    handleSubmit,
  } = useForm();

  const context = useContext(MoviesContext);

  const onSubmit = (data) => {
    context.addToUserMovies(data); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <Controller
        name="title"
        control={control}
        rules={{ required: 'Title is required' }}
        render={({ field }) => (
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            style={styles.textField}
            {...field}
          />
        )}
      />
      <Controller
        name="overview"
        control={control}
        rules={{ required: 'Overview is required' }}
        render={({ field }) => (
          <TextField
            label="Overview"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            style={styles.textField}
            {...field}
          />
        )}
      />
      <Controller
        name="genres"
        control={control}
        rules={{ required: 'Genres are required' }}
        render={({ field }) => (
          <TextField
            label="Genres"
            variant="outlined"
            fullWidth
            style={styles.textField}
            {...field}
          />
        )}
      />
      <Controller
        name="releaseDate"
        control={control}
        rules={{ required: 'Release Date is required' }}
        render={({ field }) => (
          <TextField
            label="Release Date"
            type="date"
            variant="outlined"
            fullWidth
            style={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
            {...field}
          />
        )}
      />
      <Controller
        name="runtime"
        control={control}
        rules={{ required: 'Runtime is required' }}
        render={({ field }) => (
          <TextField
            label="Runtime (minutes)"
            type="number"
            variant="outlined"
            fullWidth
            style={styles.textField}
            {...field}
          />
        )}
      />
      <Controller
        name="productionCompanies"
        control={control}
        render={({ field }) => (
          <TextField
            label="Production Company(s)"
            variant="outlined"
            fullWidth
            style={styles.textField}
            {...field}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary" style={styles.submit}>
        Create Movie
      </Button>
    </form>
  );
};

export default CreateMovieForm;
