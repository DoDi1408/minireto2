import React from "react";
import {Dialog, IconButton} from "@mui/material";
import { MdDelete } from "react-icons/md";
import DeleteRequestDialog from "../DeletePeliculaDialog/DeletePeliculaDialog";
import axios from 'axios';
import './styles.css';


const DeleteButton = ({id}) => {
  const [open, setOpen] = React.useState(false);

  const linkLocal = 'http://localhost:3006/api/'
  const linkServer = 'https://miniretointento2.herokuapp.com/api/'

  const handleExit = () => {
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickDeletePelicula = () => {
    axios.delete((linkLocal + id))
    .then(response => console.log('Delete successful'))
    .catch(error => {
      console.error('There was an error!', error);
    });
    setOpen(false);  
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <MdDelete/>
      </IconButton>
      <Dialog open={open} onClose={handleExit}>
            <DeleteRequestDialog handleDelete={handleClickDeletePelicula}/>
      </Dialog>
    </div>
    );
  }
  
  export default DeleteButton;