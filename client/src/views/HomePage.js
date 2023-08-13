import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dogs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query) => {
    // Handle search logic here
    // Dispatch an action to filter dogs based on the search query
  };

  return (
    <div>
      <h2>Lista de Razas de Perros</h2>
      <SearchBar onSearch={handleSearch} />
      <Cards dogs={currentItems} />
      <Pagination
        totalItems={dogs.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </div>
  );
}

export default HomePage;
