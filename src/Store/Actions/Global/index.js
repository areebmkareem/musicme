import * as types from '../../actionTypes';
// import SvcLayer from '../../../Utils/svcLayer';
// import {setAuthToken} from '../../../Utils/getAuthToken';

// const Requester = new SvcLayer();
// const routes = Requester.routes;

export const handleModal = (data) => async (dispatch) => {
  try {
    dispatch({type: types.UPDATE_MODAL_PROPS, data});
  } catch (err) {
    console.log('err: ', err);
  }
};
