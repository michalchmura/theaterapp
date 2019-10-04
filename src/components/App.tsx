import React, { FC } from 'react';
import WebView from './WebView';

import styled from '@emotion/styled';

const Layout = styled('div')`
  overflow: auto;
  height: 100vh;
  min-height: 100vh;
`;

const App: FC<any> = (props) => {
  return (
    <Layout>
      <h1>Hello2</h1>

      <WebView src="https://www.netflix.com" />
    </Layout>
  );
};

export default App;
