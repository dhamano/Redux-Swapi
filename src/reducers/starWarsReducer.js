import { GET_CHARACTER_LIST, GET_CHARACTER_LIST_SUCCESS, GET_CHARACTER_LIST_FAIL } from "../actions";

const initialState = {
  characters: [],
  error     : "",
  isFetching: false,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_LIST:
      return {
        ...state,
        error: "",
        characters: [],
        isFetching: true
      }
    case GET_CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        error: "",
        isFetching: false,
      }
    case GET_CHARACTER_LIST_FAIL:
        return {
          ...state,
          error: action.payload,
          characters: [],
          isFetching: false
        }
    default:
      return state;
  }
};
