import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './actionTypes';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => { // the return function will triger the thunk.
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload: data}))
      .catch(error => ({type:REQUEST_ROBOTS_FAILED, payload: error}))
}