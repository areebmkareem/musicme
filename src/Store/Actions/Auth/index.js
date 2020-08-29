import * as types from '../../actionTypes';
import SvcLayer from '../../../Utils/svcLayer';
import {setAuthToken} from '../../../Utils/getAuthToken';

const Requester = new SvcLayer();
const routes = Requester.routes;

export const signInWithEmailAndPassword = (payload) => async (dispatch) => {
  try {
    const response = await Requester.post(routes.login, payload);
    if (response.success) {
      await setAuthToken(response.data.token);
      await dispatch(getUserInfo());
    } else throw response;
  } catch (err) {
    console.log('err: ', err);
  }
};

export const createUserWithEmailAndPassword = (payload) => async (dispatch) => {
  try {
    const response = await Requester.post(routes.register, payload);
    if (response.success) {
      await setAuthToken(response.data.token);
      await dispatch(getUserInfo());
    } else throw response;
  } catch (err) {
    console.log('err: ', err);
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const response = await Requester.get(routes.getUserInfo);
    if (response.success) await dispatch({type: types.SET_USER_INFO, data: response.data});
    else throw response;
  } catch (err) {
    console.log('err: ', err);
  }
};
