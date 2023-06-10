import './App.css';
import React from "react";
import PeliculaResena from "./components/PeliculaResena/PeliculaResena";
import { Grid} from "@mui/material";
import axios from 'axios';
import CreatePelicula from './components/CreatePelicula/CreatePelicula'

function App() {

  const [peliculas, setPeliculas] = React.useState([]);
  

  const linkLocal = 'http://localhost:3006/api'
  const linkServer = 'https://miniretointento2.herokuapp.com/api'

  const getInfoSolicitudes = () => {
    axios.get(linkLocal)
    .then(res => {
    setPeliculas(res.data);})
  }
  React.useEffect(()=> {
    getInfoSolicitudes();
  }, []);

  return (
    <div>
      <header className="App-header">
        <p className="title">Peliculas</p>
        <Grid container spacing={0}>
            {peliculas.length === 0 ? "Loading..." : peliculas.map((row) => (<PeliculaResena key={row.id} pelicula={row}/>)) } 
        </Grid>
        <CreatePelicula/>
      </header>
    </div>
  );
}

export default App;
