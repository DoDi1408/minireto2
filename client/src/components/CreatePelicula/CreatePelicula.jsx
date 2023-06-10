import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';


export default function FormDialog() {
    const linkLocal = 'http://localhost:3006/api/'
    const linkServer = 'https://miniretointento2.herokuapp.com/api/'
    const [open, setOpen] = React.useState(false);

    const [newMovie, setNewMovie] = React.useState({
        name: "",
        rating: "",
        recommend: "",
        img: "",
        dateSeen: "",
        releaseYear: ""
        })
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateMovie = () => {
        setOpen(false);
        axios({
            method: 'post',
            url: (linkLocal),
            data: newMovie
        });
    };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Pelicula
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Creating a Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The form below will create a Movie.
          </DialogContentText>
          <TextField
            placeholder='name'
            margin="dense"
            fullWidth
            variant="standard"
            value={newMovie.name}
            onChange={(e) => setNewMovie({...newMovie, name: e.target.value})}
          />
          <TextField
            placeholder='rating (1-5)'
            margin="dense"
            fullWidth
            variant="standard"
            value={newMovie.rating}
            onChange={(e) => setNewMovie({...newMovie, rating: e.target.value})}
          />
            <TextField
            placeholder='recommend (lo que quieras)'
                margin="dense"
                fullWidth
                variant="standard"
            value={newMovie.recommend}
            onChange={(e) => setNewMovie({...newMovie, recommend: e.target.value})}
            />
        <TextField
        placeholder='date (example 2023-11-81) '
            margin="dense"
            fullWidth
            variant="standard"
            value={newMovie.dateSeen}
            onChange={(e) => setNewMovie({...newMovie, dateSeen: e.target.value})}          />
          <TextField
          placeholder='release year'
            margin="dense"
            fullWidth
            variant="standard"
            value={newMovie.releaseYear}
            onChange={(e) => setNewMovie({...newMovie, releaseYear: e.target.value})}          />
          <TextField
          placeholder='link a una imagen !!!!importante (LINK REAL)'
            margin="dense"
            fullWidth
            variant="standard"
            value={newMovie.img}
            onChange={(e) => setNewMovie({...newMovie, img: e.target.value})}          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateMovie}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}