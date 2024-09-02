import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'


import { AgendaListExample } from './test3/AgendaListExample'
import { AgendaListExample2 } from './test3/AgendaListExample2'
import { AgendaListExample3 } from './test3/AgendaListExample3'
import { AgendaListExample4 } from './test3/AgendaListExample4'
import { AgendaListExample5 } from './test3/AgendaListExample5'
import ExpandableCalendarScreen1  from './test3/AgendaListExample6'
import  ExpandableCalendarScreen  from './test3/AgendaListExample7'
import  ExpandableCalendarScreen2  from './test3/AgendaListExample8'

import { NavigationContainer, Page } from '../components/Navigation';


function AgendaList() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>


          <Page name="测试 AgendaList1组件">
              <AgendaListExample></AgendaListExample>
            </Page>
          <Page name="测试 AgendaList2组件">
            <AgendaListExample2></AgendaListExample2>
          </Page>
          <Page name="测试 AgendaList3组件">
            <AgendaListExample3></AgendaListExample3>
          </Page>
          <Page name="测试 AgendaList4组件">
            <AgendaListExample4></AgendaListExample4>
          </Page>
          <Page name="测试 AgendaList5组件">
            <AgendaListExample5></AgendaListExample5>
          </Page>
          <Page name="测试 AgendaList6组件">
            <ExpandableCalendarScreen1></ExpandableCalendarScreen1>
          </Page>
          <Page name="测试 AgendaList7组件">
            <ExpandableCalendarScreen></ExpandableCalendarScreen>
          </Page>
          <Page name="测试 AgendaList8组件">
            <ExpandableCalendarScreen2></ExpandableCalendarScreen2>
          </Page>


        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default AgendaList;
