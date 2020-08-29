import * as types from '../../actionTypes';
import SvcLayer from '../../../Utils/svcLayer';
import {setAuthToken} from '../../../Utils/getAuthToken';

const Requester = new SvcLayer();
const routes = Requester.routes;

export const bulkInsertTracks = (payload) => async (dispatch) => {
  try {
    const response = await Requester.post(routes.bulkInsertTracks, payload);
    console.log('response: ', response);
    if (response.success) {
      //   await setAuthToken(response.data.token);
      //   await dispatch(getUserInfo());
    } else throw response;
  } catch (err) {
    console.log('err: ', err);
  }
};
