import { getUserData, logoutUser } from './auth.api';
import * as types from './auth.types';

export const login = (userData) => async (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
  try {
    let response = await getUserData(userData);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.LOGIN_ERROR, payload: err.response.data });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
  try {
    await logoutUser();
    dispatch({ type: types.LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({ type: types.LOGIN_ERROR, payload: err.response.data });
  }
};
