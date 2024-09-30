import * as React from 'react';
import { Alert, View,StyleSheet,ScrollView} from 'react-native';
import { Text,Surface,MD3Elevation,List,useTheme,MD3Theme,MD2Theme,MD3Colors, Button} from 'react-native-paper';

import ScreenWrapper from '../ScreenWrapper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function SurfaceTextDemo() { 

  const SurfaceTextProps = [
    {
      key: ' SurfaceTextProps style:elevation ={0}',
      value: {
        style:styles.surface,
        elevation:0 as 0 | 1 | 2 | 3 | 4 | 5 ,
      }
    },
    {
      key: ' SurfaceTextProps style:elevation ={1}',
      value: {
        style:styles.surface,
        elevation:1 as 0 | 1 | 2 | 3 | 4 | 5 ,
      }
    },
    {
      key: ' SurfaceTextProps style:elevation ={2}',
      value: {
        style:styles.surface,
        elevation:2 as 0 | 1 | 2 | 3 | 4 | 5 ,
      }
    },
    {
      key: ' SurfaceTextProps style:elevation ={3}',
      value: {
        style:styles.surface,
        elevation:3 as 0 | 1 | 2 | 3 | 4 | 5 ,
      }
    },
    {
      key: ' SurfaceTextProps style:elevation ={4}',
      value: {
        style:styles.surface,
        elevation:4 as 0 | 1 | 2 | 3 | 4 | 5 ,
      }
    },
    {
      key: ' SurfaceTextProps style:elevation ={5}',
      value: {
        style:styles.surface,
        elevation:5 as 0 | 1 | 2 | 3 | 4 | 5 ,
      }
    },
    {
      key: ' SurfaceTextProps style:mode ={"flat"}',
      value: {
        style:styles.surface,
        elevation:5 as 0 | 1 | 2 | 3 | 4 | 5 ,
        mode:'flat' as 'flat' | 'elevated'
      }
    },
    {
      key: ' SurfaceTextProps style:mode ={"elevated"}',
      value: {
        style:styles.surface,
        elevation:5 as 0 | 1 | 2 | 3 | 4 | 5 ,
        mode:'elevated' as 'flat' | 'elevated'
      }
    },
    {
      key: ' SurfaceTextProps style:theme ={ colors: { primary: "green" } }',
      value: {
        style:styles.surface,
        elevation:5 as 0 | 1 | 2 | 3 | 4 | 5 ,
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: 'SurfaceTextProps style:testID ={"SurfaceText"}',
      value: {
        style:styles.surface,
        elevation:5 as 0 | 1 | 2 | 3 | 4 | 5 ,
        testID:'SurfaceText'
      }
    },
    {
      key: 'SurfaceTextProps style:testID ={"SurfaceText1"}',
      value: {
        style:styles.surface,
        elevation:5 as 0 | 1 | 2 | 3 | 4 | 5 ,
        testID:'SurfaceText1'
      }
    },
  ]

    // 创建一个ref，它将被用来引用View组件  
    const viewRef = React.useRef(null); 
    // 你可以使用这个ref来访问View组件，例如测量其尺寸  
    const measureView = () => {  
      if (viewRef.current) {  
        // 这里只是为了演示如何访问ref  
        console.log('View is referenced');
      }  
    };  

  
  return (
    <Tester>
      <ScrollView>
      <TestCase itShould={'Surface style:ref={viewRef}'}  >
        <Surface style={styles.surface} elevation={4} ref={viewRef}>
        <Text>Surface</Text>
        </Surface>
         <Button onPress={measureView} >Press me</Button>  
        </TestCase>
       <TestSuite name='SurfaceText' >
        {SurfaceTextProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <Surface {...item.value}>
                  <Text>Surface</Text>
                </Surface>
              </TestCase>
            );
          })},
       </TestSuite>
      </ScrollView>
    </Tester>
  )
}


const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SurfaceTextDemo;