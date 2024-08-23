import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import { AgendaExample } from './test2/AgendaExample'
import { AgendaExample2 } from './test2/AgendaExample2'
import { AgendaExample3 } from './test2/AgendaExample3'
import { AgendaExample4 } from './test2/AgendaExample4'
import { AgendaExample5 } from './test2/AgendaExample5'
import { AgendaExample6 } from './test2/AgendaExample6'


import { NavigationContainer, Page } from '../components/Navigation';


function Agenda() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>

          <Page name="测试 Agenda1组件">
              <AgendaExample></AgendaExample>
            </Page>
          <Page name="测试 Agenda2组件">
            <AgendaExample2></AgendaExample2>
          </Page>
          <Page name="测试 Agenda3组件">
            <AgendaExample3></AgendaExample3>
          </Page>
          <Page name="测试 Agenda4组件">
            <AgendaExample4></AgendaExample4>
          </Page>
          <Page name="测试 Agenda5组件">
            <AgendaExample5></AgendaExample5>
          </Page>
          <Page name="测试 Agenda6组件">
            <AgendaExample6></AgendaExample6>
          </Page>
                  
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default Agenda;
