import React from "react";
import Card from "./Card";

const Cards = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog) => (
        <Card
          key={dog.id}
          name={dog.name}
          image={dog.image}
          temperament={dog.temperament}
          weight={dog.weight}
        />
      ))}
    </div>
  );
};

export default Cards;
