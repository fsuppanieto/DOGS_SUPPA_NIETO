const axios = require("axios");
const { API_KEY } = process.env;
const { Dog } = require("../models/Dog");
// const { Temperament } = require("../models/Temperament");
const db = require("../db");
const URL = `https://api.thedogapi.com/v1/breeds`;

async function getDogs() {
  try {
    const response = await axios.get(URL);
    const dogs = response.data;
    return dogs;
  } catch (reason) {
    return res.status(404).json({ message: reason.message });
  }
}

async function getDogsById(id) {
  try {
    const response = await axios.get(`${URL}/${id}`, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    const dogData = response.data;
    if (!dogData) {
      return res.status(404).send(`No existe la raza con el ID ${id}`);
    }
    return dogData;
  } catch (reason) {
    return res.status(500).send("Error en el servidor");
  }
}
//NO ENCONTRE EL ERROR NI ACA NI EN LA RUTA PARA PODER HACER FUNCIONAR ESTO DE ESTA FORMA, EN ROUTES ACLARO LO QUE HICE PARA PODER OBTENER LOS PERROS POR RAZA
// async function getDogsByName(name) {
//   try {
//     // uso este console.log para chequear que funcione
//     console.log("Searching for:", name);
//     const response = await axios.get(
//       `${URL}/search?q=${name}&api_key=${API_KEY}`,
//       {
//         headers: {
//           "x-api-key": API_KEY,
//         },
//       }
//     );
//     // este console.log es para chequear la respouesta de mi api
//     console.log("API Response:", response.data);
//     const apiDogs = response.data;
//     if (apiDogs.length > 0) {
//       return apiDogs;
//     }
//     //  Buscar en la base de datos
//     const dbDogs = await Dog.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${name}%`,
//         },
//       },
//     });
//     if (dbDogs.length > 0) {
//       return dbDogs;
//     }
//   } catch (error) {
//     throw new Error(`No hay perros de raza: ${name}`);
//   }
// }

async function createDog(name, temperament) {
  try {
    const newDog = await db.Dog.create({ nombre: name });
//CUANDO LLEGO VOY A PROBAR DE ELIMINAR EL DB.
    const temperamentRecords = await db.Temperament.findAll({ // ACA TAMBIEN, VOY A TRABAJAR SIN EL DB.
      where: {
        name: temperament,
      },
    });

    // Agregar los registros de temperamentos al perro
    await newDog.addTemperaments(temperamentRecords);

    return newDog;
  } catch (error) {
    console.error("Error al crear en perro en la base de datos", error);
    throw new Error("Error al crear el perro en la base de datos");
  }
}

module.exports = { getDogs, getDogsById, createDog };
