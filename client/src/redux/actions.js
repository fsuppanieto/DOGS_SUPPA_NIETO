import {
  GET_DOGS,
  GET_DOG_BY_ID,
  CLEAN_DETAIL,
  GET_TEMPERAMENTS,
  GET_DOGS_BY_NAME,
} from "./actions-type";
import axios from "axios";

export const getDogs = () => {
  const endpoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
    const dogs = (await axios.get(endpoint)).data;
    return dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const getDogById = (id) => {
  const endpoint = `http://localhost:3001/dogs/${id}`;
  return (dispatch) => {
    return axios
      .get(endpoint)
      .then((response) => {
        const [dog] = response.data; // hago destructuring porque el dog viene en un arr desde el back
        dispatch({ type: GET_DOG_BY_ID, payload: dog }); //este dog es un obj
      })
      .catch((error) => {
        alert(`${error.message}`);
        alert(`${error.response.data.error}`); //llego al error del back dentro el objeto de axios
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL, payload: {} };
};

export const getTemperaments = () => {
  const endpoint = `http://localhost:3001/temperaments`;
  return async (dispatch) => {
    const temperaments = (await axios.get(endpoint)).data;
    return dispatch({ type: GET_TEMPERAMENTS, payload: temperaments });
  };
};

export const getDogsByName = (name) => {
  const endpoint = `http://localhost:3001/dogs?name=${name}`;
  return (dispatch) => {
    return axios
      .get(endpoint)
      .then((response) => {
        const dogs = response.data;
        dispatch({ type: GET_DOGS_BY_NAME, payload: dogs });
      })
      .catch((error) => {
        alert(`${error.message}`);
        alert(`${error.response.data.error}`); //llego al error del back dentro el objeto de axios
      });
  };
};

// export const getDogs = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch("https://api.thedogapi.com/v1/breeds");
//       const data = await response.json();

//       dispatch({ type: "FETCH_DOGS_SUCCESS", payload: data }); // Cambia el tipo y payload según tu aplicación
//     } catch (error) {
//       dispatch({ type: "FETCH_DOGS_FAILURE", payload: error.message }); // Manejo de error si la solicitud falla
//     }
//   };
// };
