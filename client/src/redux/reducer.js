import {
  CLEAN_DETAIL,
  GET_DOGS,
  GET_DOGS_BY_NAME,
  GET_DOG_BY_ID,
  GET_TEMPERAMENTS,
} from "./actions-type";

const initialState = {
  allDogs: [],
  dogsByName: [],
  dogsRender: [],
  dog: {},
  temperaments: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: payload,
        dogsRender: payload,
      };
    case GET_DOG_BY_ID:
      return {
        ...state,
        dog: payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        dog: payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    case GET_DOGS_BY_NAME:
      return {
        ...state,
        dogsByName: payload,
        dogsRender: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
