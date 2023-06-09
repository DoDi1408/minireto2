import React from "react";
import {Button, Box} from "@mui/material";
import './styles.css';


const DeletePeliculaDialog = ({handleDelete}) => {
  return (
      <Box className='popup-container-delete-request'> 
        <div className='popup-text-container-delete'>
          <p className='popup-task-title-delete'>¿Estas seguro de que quieres borrar esta pelicula?</p>
          <p className="alert-text"> Esta acción no se puede deshacer. </p>
        </div>
        <div className='popup-button-container-delete'>
          <Button className='popup-button-delete' onClick={handleDelete} variant="contained"> Borrar </Button>
        </div>
      </Box>
    );
  }
  
  export default DeletePeliculaDialog;