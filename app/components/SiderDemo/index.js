/**
 *
 * SiderDemo
 *
 */

import React, { memo,useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

/************************ styles **********************/
import {ViewStyle} from './styles'

function SiderDemo(props) {

  const [collapsed,setCollapsed] = useState(false)

  const toggle = ()=>{
    setCollapsed(!collapsed)
  }

  return (
    <Layout id={'components-layout-demo-custom-trigger'} style={{minHeight:window.document.body.clientHeight+'px'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          <FormattedMessage {...props.messages.header} />
        </Content>
      </Layout>
      <ViewStyle/>
    </Layout>
  );
}

SiderDemo.propTypes = {};

export default memo(SiderDemo);
