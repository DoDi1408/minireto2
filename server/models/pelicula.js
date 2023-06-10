import {connection as sql} from "../services/db.js";

// constructor
const Pelicula = function(pelicula) {
    this.name = pelicula.name;
    this.rating = pelicula.rating;
    this.recommend = pelicula.recommend;
    this.dateSeen = pelicula.dateSeen;
    this.releaseYear = pelicula.releaseYear;
    this.img = pelicula.img;
};


Pelicula.Create = (newPelicula, result) => {
    sql.query("INSERT INTO peliculas SET ?", newPelicula, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created pelicula: ", {newPelicula});
      result(null, {newPelicula });
    });
};

Pelicula.getAll = (result) => {
    let query = "SELECT * FROM peliculas";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("peliculas: ", res);
      result(null, res);
    });
};

Pelicula.updateById = (id, rating, result) => {
    sql.query(
      "UPDATE peliculas SET rating = ? WHERE id = ?",
      [rating, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Pelicula with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated pelicula with id: ", id);
        result(null, res);
      }
    );
};

Pelicula.remove = (id, result) => {
    sql.query("DELETE FROM peliculas WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Pelicula with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted pelicula with id: ", id);
      result(null, res);
    });
};

export default Pelicula;