import React, { FC } from 'react';
import styled from '@emotion/styled';
const ReactWebView = require('react-electron-web-view');

const Wrapper = styled('div')`
  width: 100vh;
  height: 100vh;

  * {
    height: 100vh;
    width: 100vw;
  }
`;

interface WebViewProps {
  src: string;
}

const WebView: FC<WebViewProps> = (props) => (
  <Wrapper>
    <ReactWebView src={props.src} />
  </Wrapper>
);

export default WebView;
