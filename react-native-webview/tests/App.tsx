import React from 'react';
import {NavigationContainer, Page} from './Navigation';
import {PortalProvider} from '@gorhom/portal';
import WebViewTest from './WebViewTest';
import WebViewOnShouldStartLoadWithRequestTest from './WebViewTest_2';

function App() {
  return (
    <NavigationContainer>
      <PortalProvider>
        <Page name="EXAMPLE: WebViewTest">
          <WebViewTest />
        </Page>
        <Page name="EXAMPLE: WebViewOnShouldStartLoadWithRequestTest">
          <WebViewOnShouldStartLoadWithRequestTest />
        </Page>
      </PortalProvider>
    </NavigationContainer>
  );
};

export default App;
