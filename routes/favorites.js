import express from "express";
import {favorites, favoritesDelete, favoritesInsert} from "../Controllers/favorites.js";


const FavoritesRouter = express.Router();

//Favorites
FavoritesRouter.get("/", favorites);
FavoritesRouter.delete("/Delete/:id", favoritesDelete);
FavoritesRouter.post("/Insert/:id", favoritesInsert);

export default FavoritesRouter;