/*
 *
 * HomePage actions
 *
 */

/********************** constants ***********************/
import {
  DEFAULT_ACTION,
  COMPONENT_WILL_MOUNT, // before render
  COMPONENT_DID_MOUNT, // after render
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

// before render
export function componentWillMountAction() {
  return {
    type: COMPONENT_WILL_MOUNT,
  };
}

// after render
export function componentDidMountAction() {
  return {
    type: COMPONENT_DID_MOUNT,
  };
}
