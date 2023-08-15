import React from "react";

const pagination = ({
  currentPage,
  totalPages,
  handlePrevious,
  handleNext,
}) => {
  return (
    <div>
      <label>Page: {currentPage}</label>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        PREVIOUS
      </button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        NEXT
      </button>
    </div>
  );
};

export default pagination;
