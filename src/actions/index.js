// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios';

export const GET_CHARACTER_LIST = "GET_CHARACTER_LIST";
export const GET_CHARACTER_LIST_SUCCESS = "GET_CHARACTER_LIST_SUCCESS";
export const GET_CHARACTER_LIST_FAIL = "GET_CHARACTER_LIST_FAIL";

export const getCharacters = () => dispatch => {
  dispatch({ type: GET_CHARACTER_LIST });
  axios.get('https://swapi.co/api/people/')
  .then( res => {
    dispatch({
      type: GET_CHARACTER_LIST_SUCCESS,
      payload: res.data.results,
    })
  })
  .catch( err => {
    dispatch({
      type: GET_CHARACTER_LIST_FAIL,
      payload: 'Something went wrong!',
    })
  })
}