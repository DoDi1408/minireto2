import Pelicula from "../models/pelicula.js";

export const createPelicula = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Pelicula
    const pelicula = new Pelicula({
        name: req.body.name,
        rating: req.body.rating,
        recommend: req.body.recommend,
        dateSeen: req.body.dateSeen,
        releaseYear: req.body.releaseYear,
        img: req.body.img
    });
  
    // Save Pelicula in the database
    Pelicula.Create(pelicula, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the pelicula."
        });
      else res.send(data);
    });
};

// Retrieve all peliculas from the database
export const findAllPeliculas = (req, res) => {
    Pelicula.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving peliculas."
        });
      else res.send(data);
});
};


export const updatePelicula = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    console.log(req.body);
    Pelicula.updateById(req.params.id, req.body.rating, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found pelicula with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating pelicula with id " + req.params.id
              });
            }
          } else res.send({ message: `Pelicula was updated successfully!` });
        }
      );
};

// Delete a Pelicula with the specified id in the request
export const deletePelicula = (req, res) => {
    Pelicula.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found pelicula with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete pelicula with id " + req.params.id
            });
          }
        } else res.send({ message: `Pelicula was deleted successfully!` });
      });
};