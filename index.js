import express from 'express'
import userRouter from './routes/login.js'
import FavoritesRouter from './routes/favorites.js';
import { config } from "dotenv";
config();

const app = express()
app.use(express.json());

app.use('/API/User', userRouter)


/*Favoritos*/
app.use('/API/Favorites', FavoritesRouter)

app.use('/API/Favorites/Delete', FavoritesRouter)

app.use('/API/Favorites/Insert', FavoritesRouter)


app.listen(5018)
console.log("Server running on port 5018")

