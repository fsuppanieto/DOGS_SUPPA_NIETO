import React, { useState, useEffect } from "react";
import axios from "axios";

function DetailPage({ match }) {
  const [dogDetails, setDogDetails] = useState({});
  const dogId = match.params.id;

  useEffect(() => {
    const fetchDogDetails = async () => {
      try {
        const response = await axios.get(`/dogs/${dogId}`);
        setDogDetails(response.data);
      } catch (error) {
        console.error("Error en el fetching", error);
      }
    };

    fetchDogDetails();
  }, [dogId]);

  return (
    <div>
      <h2>Detalle de la Raza</h2>
      <p>ID: {dogDetails.id}</p>
      <img src={dogDetails.image} alt={dogDetails.name} />
      <p>Nombre: {dogDetails.name}</p>
      <p>Altura: {dogDetails.height}</p>
      <p>Peso: {dogDetails.weight}</p>
      <p>Temperamentos: {dogDetails.temperament}</p>
      <p>Años de Vida: {dogDetails.life_span}</p>
    </div>
  );
}

export default DetailPage;
