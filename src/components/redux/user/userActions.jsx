import axios from "axios";
import * as types from "./userTypes";

export const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchUsersFailure(error));
      });
  };
};
