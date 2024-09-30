import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer, Page } from './components/Navigation';
import { PortalProvider } from '@gorhom/portal';
import * as PageCont from './page';
const { ...remainingDemoByName } = PageCont;

import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export function SlidingUpPanelDemo() {
  return (<View style={{ backgroundColor: 'black' }}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <NavigationContainer>
        <PortalProvider>
          {Object.entries(remainingDemoByName).map(
            ([exampleName, Example]) => {
              return (
                <Page key={exampleName} name={exampleName}>
                  <Tester style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                      <TestCase itShould={exampleName}>
                        <Example />
                      </TestCase>
                    </ScrollView>
                  </Tester>
                </Page>
              );
            }
          )}
        </PortalProvider>
      </NavigationContainer>
    </SafeAreaView>
  </View >);
}
