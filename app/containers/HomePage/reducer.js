/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';

/********************** constants ***********************/
import {
  DEFAULT_ACTION,
  COMPONENT_WILL_MOUNT, // before render
  COMPONENT_DID_MOUNT, // after render
} from './constants';

export const initialState = {
  module: 'HomePage',
  render: 'none',
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, data => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      // before render
      case COMPONENT_WILL_MOUNT:
        initialState.render = 'before';
        data = initialState;
        break;
      // after render
      case COMPONENT_DID_MOUNT:
        data.render = 'after';
        break;
    }
  });

export default homePageReducer;
