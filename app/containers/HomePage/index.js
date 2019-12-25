/**
 *
 * HomePage
 *
 */

/************************ library **********************/
import React, { memo, useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/************************ utils **********************/
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

/************************ selectors **********************/
import makeSelectHomePage from './selectors';

/************************ reducer **********************/
import reducer from './reducer';

/************************ saga **********************/
import saga from './saga';

/************************ messages **********************/
import messages from './messages';

/************************ actions **********************/
import {
  componentWillMountAction, // before render
  componentDidMountAction, // after render
} from './actions';

/************************ components **********************/
import SiderDemo from 'components/SiderDemo/loadable'

/************************ styles **********************/

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const componentWillMount = () => {
    props.componentWillMountAction();
  };

  const componentDidMount = () => {
    props.componentDidMountAction();
  };



  useEffect(() => {
    // Async Action

    const containerData = props.homePage;
    if (containerData.render === 'none') {
      componentWillMount();
    }

    if (containerData.render === 'before') {
      componentDidMount();
    }
  });

  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      {/*<FormattedMessage {...messages.header} />*/}
      <SiderDemo messages={messages}/>
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    componentWillMountAction: () => {
      dispatch(componentWillMountAction());
    },
    componentDidMountAction: () => {
      dispatch(componentDidMountAction());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
