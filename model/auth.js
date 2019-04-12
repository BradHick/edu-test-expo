import Immutable from 'seamless-immutable';
import axios from 'axios';
import { Alert } from 'react-native';

const API_URL = 'https://frontend-test.agendaedu.com/api/login';
const initialState = new Immutable({
  email: '',
  token: '',
  loading: false,
  errors: {}
});

const auth = {
  state: initialState,
  reducers: {
    authUserFulfiled: (state, payload) => {
      return state.merge({
        email: payload.email,
        token: payload.token,
        errors: {},
        loading: false
      });
    },
    authUserPending: (state) => {
      return state.merge({
        loading: true
      });
    },
    authUserRejected: (state, payload) => {
      return state.merge({
        token: '',
        email: '',
        errors: payload.errors || payload,
        loading: false
      });
    },
    logout: (state) => {
      return state.merge(initialState)
    }
  },
  effects: (dispatch) => ({
    login: (user) =>{
      dispatch.auth.authUserPending();
      const { email, password } = user
      return axios.post(API_URL, { email, password })
        .then(res => {
          dispatch.auth.authUserFulfiled({email, token: res.data.token});
        })
        .catch(err =>{
          Alert.alert(
            'Erro',
            `${err.response.data.message}`
          );
          dispatch.auth.authUserRejected(err);
        })
    }
  })
};

export default auth;