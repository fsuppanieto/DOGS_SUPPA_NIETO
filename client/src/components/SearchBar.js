import React, { useState } from "react";
import axios from "axios"; // Importa axios u otro cliente HTTP

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/dogs/name?name=${query}`);
      const filteredDogs = response.data; // Suponiendo que la respuesta contiene los perros filtrados
      onSearch(filteredDogs);
    } catch (error) {
      console.error("Error en el fetching", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar razas de perros..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
