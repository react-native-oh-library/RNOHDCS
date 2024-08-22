import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'


import { TimelineExample } from './test7/TimelineExample'
import { TimelineExample2 } from './test7/TimelineExample2'
import { TimelineExample3 } from './test7/TimelineExample3'
import { TimelineExample4 } from './test7/TimelineExample4'
import { TimelineExample5 } from './test7/TimelineExample5'
import { TimelineExample6 } from './test7/TimelineExample6'


import { NavigationContainer, Page } from '../components/Navigation';


function Timeline() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>


          <Page name="测试 Timeline1组件">
              <TimelineExample></TimelineExample>
            </Page>
          <Page name="测试 Timeline2组件">
            <TimelineExample2></TimelineExample2>
          </Page>
          <Page name="测试 Timeline3组件">
            <TimelineExample3></TimelineExample3>
          </Page>
          <Page name="测试 Timeline4组件">
            <TimelineExample4></TimelineExample4>
          </Page>
          <Page name="测试 Timeline5组件">
            <TimelineExample5></TimelineExample5>
          </Page>
          <Page name="测试 Timeline6组件">
            <TimelineExample6></TimelineExample6>
          </Page>
          
       
  
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default Timeline;
