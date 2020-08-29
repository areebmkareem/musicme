import * as types from '../../actionTypes';
import React from 'react';
const initialState = {
  modalProps: {
    isVisible: false,
    component: <React.Fragment />,
  },
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MODAL_PROPS:
      return {
        ...state,
        modalProps: {...state.modalProps, ...action.data},
      };
    default:
      return state;
  }
};

export default global;
