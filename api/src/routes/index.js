const { Router } = require("express");
const dogControllers = require("../controllers/DogControllers");
const tempControllers = require("../controllers/TempControllers");
// const { Temperament } = require("../db");

const router = Router();

router.get("/dogs", async (req, res) => {
  try {
    const { name } = req.query; // parametro de consulta: 'name'

    let dogs = await dogControllers.getDogs();

    // Si se proporciona un nombre en la consulta, filtra los perros por ese nombre
    if (name) {
      dogs = dogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    res.json(dogs);
  } catch (error) {
    return res.status(500).send("Error en el servidor");
  }
});

router.get("/dogs/:idRaza", async (req, res) => {
  const id = req.params.idRaza;
  try {
    const dog = await dogControllers.getDogsById(Number(id));
    return res.json(dog);
  } catch (error) {
    return res.status(500).send("Error en el servidor");
  }
});
//ESTA RUTA NO LA PUDE HACER FUNCIONAR, POR ESO HICE UN FILTRO DENTRO DE /dogs
// router.get("/dogs/name", async (req, res) => {
//   try {
//     const { name } = req.query;
//     console.log("nombre:", name);
//     const filterName = await dogControllers.getDogsByName(name);
//     const namesArray = filterName.map((dog) => dog.name);

//     res.json(namesArray);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/temperaments", async (req, res) => {
  try {
    console.log("Hasta aca esta bien");
    const temperaments = await tempControllers.getTemperamentsFromAPI();
    console.log("Temperaments from API:", temperaments);
    res.json(temperaments);
  } catch (error) {
    console.error("El error esta aca");
    return res.status(500).send("Error en el servidor");
  }
});

router.post("/dogs", async (req, res) => {
  const { name, temperament } = req.body;
  try {
    const newDog = await dogControllers.createDog(name, temperament);
    res.status(200).json(newDog);
  } catch (error) {
    console.error("Error al crear al perri", error);
    res.status(500).json({ error: "Error al crear el perro" });
  }
});

module.exports = router;
