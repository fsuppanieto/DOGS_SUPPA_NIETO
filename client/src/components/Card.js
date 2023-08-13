import React from "react";
import { Link } from "react-router-dom";

function Card({ id, name, image, temperament, weight }) {
  return (
    <div>
      <Link to={`/detalle/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Temperament: {temperament}</p>
        <p>Weight: {weight}</p>
      </Link>
    </div>
  );
}

export default Card;
