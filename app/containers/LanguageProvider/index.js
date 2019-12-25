/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

import { ConfigProvider } from 'antd'

import enGB from 'antd/es/locale/en_GB'
import zhCN from 'antd/es/locale/zh_CN'

export function LanguageProvider(props) {

  const antd_i18n = {
    'en': enGB,
    'zh': zhCN,
  }
  const antd_language = antd_i18n[props.locale] || enGB

  return (
    <IntlProvider
      locale={props.locale}
      key={props.locale}
      messages={props.messages[props.locale]}
    >
      <ConfigProvider locale={antd_language}>
        {React.Children.only(props.children)}
      </ConfigProvider>
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageProvider);
