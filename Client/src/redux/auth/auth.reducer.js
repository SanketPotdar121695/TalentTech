import Cookies from 'js-cookie';
import * as types from './auth.types';

let userData = Cookies.get('userDetails');
let token = Cookies.get('token') || '';
userData = userData.length ? JSON.parse(userData) : {};

const initState = {
  loading: false,
  error: false,
  token,
  userData,
  isAuth: Object.keys(userData).length ? true : false
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
        userData: payload.userData
      };
    }

    case types.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload
      };
    }

    case types.LOGOUT_SUCCESS: {
      Cookies.remove('token');
      Cookies.remove('rToken');
      Cookies.remove('userDetails');

      return {
        ...state,
        loading: false,
        error: false,
        isAuth: false,
        userData: {},
        token: ''
      };
    }

    default: {
      return state;
    }
  }
};
