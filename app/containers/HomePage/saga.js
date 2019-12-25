import {
  take,
  call,
  apply,
  folk,
  delay,
  put,
  select,
  takeLatest
} from 'redux-saga/effects';

/********************** constants ***********************/
import {
  DEFAULT_ACTION,
  COMPONENT_WILL_MOUNT, // before render
  COMPONENT_DID_MOUNT, // after render
} from './constants';

/********************** actions ***********************/
import { componentDidMountAction } from './actions';
import {changeLocale}from '../../containers/LanguageProvider/actions'

/************************ selectors **********************/
import makeSelectHomePage from './selectors';

/************************ utils **********************/
// const logger = require('../../utils/logger')
// 修改主题色
const updateThemeColor = (color)=>{

  if(window.less &&window.less.modifyVars&&color ){
    // 修改主题色
    window.less.modifyVars(
      {
        '@primary-color': color,
        '@btn-primary-bg': color,
        '@link-color': color,
      }
    )
      .then(() => {console.log('change theme success')})
      .catch(error => {
        console.log(error)
      })
  }
}

// after render
export function* componentDidMountSaga() {
  try {
    const {render} = yield select(makeSelectHomePage())

    // 修改语言（国际化）
    yield put(changeLocale('zh'));

    // 修改主题色
    // updateThemeColor('red')

  } catch (err) {}
}

// Individual exports for testing
export default function* homePageSaga() {
  // after render
  yield takeLatest(COMPONENT_DID_MOUNT, componentDidMountSaga);
}
