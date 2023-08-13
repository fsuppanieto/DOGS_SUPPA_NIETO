const axios = require("axios");
const { Temperament } = require("../db");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds`;

async function getTemperamentsFromAPI() {
  try {
    console.log("Obteniendo temperamentos desde la API");
    const response = await axios.get(`${URL}?api_key=${API_KEY}`);

    // Obtener el array de temperamentos de los objetos de la API
    const temperamentsFromAPI = response.data
      .filter(
        (breed) =>
          breed.hasOwnProperty("temperament") && breed.temperament !== null
      )
      .map((breed) => breed.temperament.split(", "))
      .flat();

    // Eliminar duplicados en el array de temperamentos
    const uniqueTemperaments = [...new Set(temperamentsFromAPI)];

    // Guardar los temperamentos en la base de datos
    await saveTemperamentsToDatabase(uniqueTemperaments);

    return uniqueTemperaments;
  } catch (error) {
    console.error(
      "Error al obtener los temperamentos desde la API:",
      error.message
    );
    throw error;
  }
}

async function saveTemperamentsToDatabase(temperaments) {
  await Promise.all(
    temperaments.map((temperament) =>
      Temperament.findOrCreate({ where: { name: temperament } })
    )
  );
}

module.exports = { getTemperamentsFromAPI };
