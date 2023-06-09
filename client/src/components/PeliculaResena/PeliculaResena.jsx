import React from "react";
import {Grid} from "@mui/material";
import DeleteButton from "../DeleteButton/DeleteButton";
import './styles.css';

const PeliculaResena = ({pelicula}) => {
    const date1 = new Date(pelicula.dateSeen);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <Grid className="gridItem"item md={6} xs={12}>
            <div className="Fondo">
                <img alt= "imagen" src={pelicula.img} className="imagenPelicula"/>
                <div>
                    <p className="texto">
                        {pelicula.name}
                    </p>
                    <p className="texto">
                        Mi Calificacion fue de {pelicula.rating} estrellas.
                    </p>
                    <p className="texto">
                        La recomiendo? {pelicula.recommend}.
                    </p>
                    <p className="texto">
                        La vi el: {date1.toLocaleDateString('es-MX', options)}.
                    </p>
                    <p className="texto">
                    Salio en el: {pelicula.releaseYear}.
                    </p>
                </div>
                <div className="botones-container">
                    <DeleteButton id={pelicula.id}/>
                </div>
            </div>
        </Grid>
    );
  }
  
  export default PeliculaResena;