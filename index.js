import express from 'express'
import userRouter from './routes/login.js'
import FavoritesRouter from './routes/favorites.js';
import CharacterRouter from './routes/character.js';
import { config } from "dotenv";
import { PORT } from './db/config.js';

config();

const app = express()
app.use(express.json());

app.use('/API/User', userRouter)


/*Favoritos*/
app.use('/API/Favorites', FavoritesRouter)


app.use('/API/character', CharacterRouter)


app.listen(PORT)
console.log("Server running on port", PORT)

