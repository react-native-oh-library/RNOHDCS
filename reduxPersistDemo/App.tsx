import {NavigationContainer, Page} from './src/components/Navigation';
import React from 'react';
import { RnReduxPage } from './src/pages';
import { StatusBar, useColorScheme } from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const BasicScreen: React.FC = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
      <>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {/* <Header/> */}
        <NavigationContainer>
            <Page name="React redux">
              <RnReduxPage/>
            </Page>
        </NavigationContainer>
      </>
    )
}

export default BasicScreen;
