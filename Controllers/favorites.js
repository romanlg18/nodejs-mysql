import { pool } from "../db/db.js";
import axios from 'axios';

// URL de la API REST
const apiUrl = 'https://rickandmortyapi.com/api/character/';

// SELECCIONAR FAVORITOS
export const favorites = async (req, res) => {
  console.log("SI ENTRA");
  try {
    const query = "SELECT IdCharacter from FAVORITOS";
    const [result] = await pool.query(query);
    const listaDeIds = result.map((fila) => fila.IdCharacter);

    const characterDataArray = await Promise.all(
      listaDeIds.map(async (id) => {
        const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
        const response = await axios.get(apiUrl);
        return response.data;
      })
    );

    console.log('Datos de los personajes:', characterDataArray);

    res.json(characterDataArray);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};




// BORRAR FAVORITOS

export const favoritesDelete = async (req, res) => {
    try {
      const {id} = req.params;
  
      // Verificar si el ID existe en la base de datos
      const [existingRecord] = await pool.query('SELECT IdCharacter from FAVORITOS WHERE IdCharacter = ?', id);
      
      console.log(existingRecord.length);
      if (existingRecord.length === 0) {
        // Si no hay registros con el ID proporcionado, devuelve un mensaje de error
        return res.status(404).send('No se encontró el registro con el ID proporcionado.');
      }
      // Si existe, procede con la eliminación
      const result = await pool.query('DELETE FROM FAVORITOS WHERE IdFavorito = ?', [id]);
      console.log(result);
      res.send('¡Personaje en tus favoritos eliminado!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  };


// BORRAR FAVORITOS

export const favoritesInsert = async (req, res) => {
  try {
    const {id} = req.params;;
    console.log('id:', id);
    //Intenta insertar el ID en la base de datos
    const result = await pool.query('INSERT INTO FAVORITOS (IdCharacter) VALUES (?)', [id]);
    console.log(result);
    res.send('¡Personaje agregado a tus favoritos!');
  } catch (error) {
    res.status(500).send('Error interno del servidor');
    console.log(error);
  }
};


  
  
  
  
