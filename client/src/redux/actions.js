export const getDogs = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://api.thedogapi.com/v1/breeds");
      const data = await response.json();

      dispatch({ type: "FETCH_DOGS_SUCCESS", payload: data }); // Cambia el tipo y payload según tu aplicación
    } catch (error) {
      dispatch({ type: "FETCH_DOGS_FAILURE", payload: error.message }); // Manejo de error si la solicitud falla
    }
  };
};

// import axios from "axios";
// import { GET_DOGS, GET_TEMPERAMENTS } from "./actions-type";

// export const getDogs = async (dispatch) => {
//   try {
//     const response = await axios.get("http://localhost:3001/dogs");
//     const dogs = response.data;
//     dispatch({ type: GET_DOGS, payload: dogs });
//   } catch (error) {
//     // Manejar el error si la llamada a la API falla
//     console.error("Error fetching dogs:", error);
//   }
// };
// export const getTemperaments = async (dispatch) => {
//   try {
//     const response = await axios.get("http://localhost:3001/temperaments");
//     const temperaments = response.data;
//     dispatch({ type: GET_TEMPERAMENTS, payload: temperaments });
//   } catch (error) {
//     // Manejar el error si la llamada a la API falla
//     console.error("Error fetching temperaments:", error);
//   }
// };
