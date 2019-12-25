import styled, { css, createGlobalStyle } from 'styled-components';

const ViewStyle = createGlobalStyle`

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px !important;
  line-height: 64px !important;
  padding: 0 24px !important;
  cursor: pointer !important;
  transition: color 0.3s !important;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff !important;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px !important;
  background: rgba(255, 255, 255, 0.2) !important;
  margin: 16px !important;
}
`;

export { ViewStyle };
