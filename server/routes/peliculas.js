import express from "express";
import { createPelicula, deletePelicula, findAllPeliculas, updatePelicula } from "../controllers/peliculas.js";

const router = express.Router();

router.post("/", createPelicula);
router.delete("/:id", deletePelicula);
router.get("/", findAllPeliculas);
router.patch("/:id", updatePelicula);

export default router;