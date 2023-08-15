import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Pagination from "./Pagination"; // Importa el componente de paginación

const Cards = () => {
  const dogsRender = useSelector((state) => state.dogsRender);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [dogsRender]);

  if (!dogsRender) {
    return null;
  }

  const totalPages = Math.ceil(dogsRender.length / ITEMS_PER_PAGE);
  const indexLastItem = currentPage * ITEMS_PER_PAGE;
  const indexFirstItem = indexLastItem - ITEMS_PER_PAGE;
  const currentItems = dogsRender.slice(indexFirstItem, indexLastItem);

  return (
    <div>
      <div>
        {currentItems.map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            temperament={dog.temperament}
            weight={dog.weight}
            image={dog.image}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevious={() => setCurrentPage(currentPage - 1)}
        handleNext={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  );
};

export default Cards;
// import React from "react";
// import Card from "./Card";

// const Cards = ({ dogs }) => {
//   return (
//     <div>
//       {dogs.map((dog) => (
//         <Card
//           key={dog.id}
//           id={dog.id}
//           name={dog.name}
//           image={dog.image}
//           temperament={dog.temperament}
//           weight={dog.weight}
//         />
//       ))}
//     </div>
//   );
// };

// export default Cards;
