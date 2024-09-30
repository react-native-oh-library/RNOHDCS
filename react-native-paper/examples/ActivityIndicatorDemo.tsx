import React  from 'react';
import {
  ActivityIndicator,
  MD2Colors,
  FAB
} from 'react-native-paper';
import { ScrollView, StyleSheet, View } from 'react-native';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

type Size = 'small' | 'large' | number

export function ActivityIndicatorTest() {
  const [animating, setAnimating] = React.useState<boolean>(true);
  const ActivityIndicatorProps = [
    {
      key: 'style:color is MD2Colors.red500',
      value: {
        color:MD2Colors.red500,
        animating:true,
       
      }
    },
    {
      key: 'style:color is MD2Colors.blue100',
      value: {
        color:MD2Colors.blue100,
        animating:true,
      }
    },
    {
      key: 'style:size is small',
      value: {
        color:MD2Colors.red800,
        animating:true,
        size:"small" as Size
      }
    },
    {
      key: 'style:size is large',
      value: {
        color:MD2Colors.red800,
        animating:true,
        size:"large" as Size
      }
    },
    {
      key: 'style:size is 50',
      value: {
        color:MD2Colors.red800,
        animating:true,
        size:50 as Size
      }
    },
    {
      key: 'style:style is backgroundColor:#000000',
      value: {
        color:MD2Colors.red800,
        animating:true,
        style:{ backgroundColor:MD2Colors.blue100}
      }
    },
    {
      key: 'style:theme = { colors: { primary: "green"} }',
      value: {
        animating:true,
        hidesWhenStopped:true,
        theme:{ colors: { primary: 'green' } }
      }
    }
  ]

  return (
    <ScrollView>
      <Tester> 
    <TestSuite name='ActivityIndicator'>
      <TestCase  itShould={'关闭ActivityIndicator动画效果(style:animating is true/false)'}> 
      <View style={styles.row}> 
          <FAB
            size="small"
            icon={animating ? 'pause' : 'play'}
            onPress={() => setAnimating(!animating)}
          /> 
        </View>
        
      </TestCase> 
      <TestCase  itShould={'style:animating is true/false'}> 
        <ActivityIndicator
            animating={animating}
            size="large"
            hidesWhenStopped={false}
          />
      </TestCase> 
      <TestCase  itShould={'style:hidesWhenStopped is true'}> 
        <ActivityIndicator
            animating={animating}
            size="large"
            hidesWhenStopped={false}
          />
      </TestCase> 
      <TestCase  itShould={'style:hidesWhenStopped is false'}> 
        <ActivityIndicator
            animating={animating}
            size="large"
            hidesWhenStopped={true}
          />
      </TestCase> 
      {ActivityIndicatorProps.map((item) => {
              return (
                <TestCase  itShould={item.key}  key={item.key} > 
                    <ActivityIndicator 
                      {...item.value}
                    />
                </TestCase>
              );
          })}
    </TestSuite>

  </Tester>
    </ScrollView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default ActivityIndicatorTest;