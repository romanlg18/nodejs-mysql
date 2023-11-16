import express from "express";
import {character} from "../Controllers/character.js";


const CharacterRouter = express.Router();

//Favorites
CharacterRouter.get("/:id", character);

export default CharacterRouter;