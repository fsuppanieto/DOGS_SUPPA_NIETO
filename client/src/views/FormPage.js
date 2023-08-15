import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTemperaments } from "../redux/actions";

function FormPage() {
  const [name, setName] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [temperaments, setTemperaments] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments()); // Cargar los temperamentos al montar el componente
  }, [dispatch]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDog = {
      name,
      height: { min: minHeight, max: maxHeight },
      weight: { min: minWeight, max: maxWeight },
      life_span: lifeSpan,
      temperaments,
    };
    //POSIBLE ELIMINACION DE CACHE:

// const config = {
//   headers: {
//     "Cache-Control": "no-cache, no-store, must-revalidate, private",
//     "Pragma": "no-cache",
//     "Expires": "0"
//   }
// };

    try {
      const response = await axios.post("/dogs", newDog);
      console.log("New dog created:", response.data);
    } catch (error) {
      console.error("Error al crear new dog:", error);
    }
  };

  return (
    <div>
      <h2>Crear Nueva Raza de Perro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Altura Mínima:
          <input
            type="text"
            value={minHeight}
            onChange={(e) => setMinHeight(e.target.value)}
          />
        </label>
        <label>
          Altura Máxima:
          <input
            type="text"
            value={maxHeight}
            onChange={(e) => setMaxHeight(e.target.value)}
          />
        </label>
        <label>
          Peso Mínimo:
          <input
            type="text"
            value={minWeight}
            onChange={(e) => setMinWeight(e.target.value)}
          />
        </label>
        <label>
          Peso Máximo:
          <input
            type="text"
            value={maxWeight}
            onChange={(e) => setMaxWeight(e.target.value)}
          />
        </label>
        <label>
          Años de Vida:
          <input
            type="text"
            value={lifeSpan}
            onChange={(e) => setLifeSpan(e.target.value)}
          />
        </label>
        <label>
          Temperamentos:
          <select
            multiple
            value={temperaments}
            onChange={(e) =>
              setTemperaments(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
          >
            {temperaments.map((temperament) => (
              <option key={temperament} value={temperament}>
                {temperament}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Crear Raza</button>
      </form>
    </div>
  );
}

export default FormPage;
