import { pool } from "../db/db.js";
import axios from 'axios';

// URL de la API REST
const apiUrl = 'https://rickandmortyapi.com/api/character/';

// SELECCIONAR FAVORITOS
export const character = async (req, res) => {
  console.log("SI ENTRA");
  const { id } = req.params;
  try {
    const query = "SELECT IdCharacter from FAVORITOS WHERE IdCharacter = ?";
    const [result] = await pool.query(query, id);
    console.log(result);
    
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await axios.get(apiUrl);
    console.log(response.data);
    

    console.log('Datos de los personajes:', response.data);
    if (result.length > 0){
        response.data.isFavorite = 1
    }
    else{
        response.data.isFavorite = 0
    }
    
    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};