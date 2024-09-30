import * as React from 'react';
import { ScrollView} from 'react-native';
import { MD2Colors,Text} from 'react-native-paper';


import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function TextDemo() { 
  const TextProps = [
    {
      key: ' TextProps style:variant ={"displayLarge"}',
      value: {
        variant:'displayLarge' as 'displayLarge' | 'displayMedium' | 'displaySmall',
        value:'Display Large'
      }
    },
    {
      key: ' TextProps style:variant ={"displayMedium"}',
      value: {
        variant:'displayMedium' as 'displayLarge' | 'displayMedium' | 'displaySmall',
        value:'Display Medium'
      }
    },
    {
      key: ' TextProps style:variant ={"displaySmall"}',
      value: {
        variant:'displaySmall' as 'displayLarge' | 'displayMedium' | 'displaySmall',
        value:'Display small'
      }
    },
    {
      key: ' TextProps style:variant ={"headlineLarge"}',
      value: {
        variant:'headlineLarge' as 'headlineLarge' | 'headlineMedium' | 'headlineSmall',
        value:'Headline Large'
      }
    },
    {
      key: ' TextProps style:variant ={"headlineMedium"}',
      value: {
        variant:'headlineMedium' as 'headlineLarge' | 'headlineMedium' | 'headlineSmall',
        value:'Headline Medium'
      }
    },
    {
      key: ' TextProps style:variant ={"headlineMedium"}',
      value: {
        variant:'headlineMedium' as 'headlineLarge' | 'headlineMedium' | 'headlineSmall',
        value:'Headline Medium'
      }
    },
    {
      key: ' TextProps style:variant ={"headlineSmall"}',
      value: {
        variant:'headlineSmall' as 'headlineLarge' | 'headlineMedium' | 'headlineSmall',
        value:'Headline Small'
      }
    },
    {
      key: ' TextProps style:variant ={"titleLarge"}',
      value: {
        variant:'titleLarge' as 'titleLarge' | 'titleMedium' | 'titleSmall',
        value:'Title Large'
      }
    },
    {
      key: ' TextProps style:variant ={"titleMedium"}',
      value: {
        variant:'titleMedium' as 'titleLarge' | 'titleMedium' | 'titleSmall',
        value:'Title Mediume'
      }
    },
    {
      key: ' TextProps style:variant ={"titleSmall"}',
      value: {
        variant:'titleSmall' as 'titleLarge' | 'titleMedium' | 'titleSmall',
        value:'Title Small'
      }
    },

    {
      key: ' TextProps style:variant ={"bodyLarge"}',
      value: {
        variant:'bodyLarge' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
        value:'Body Large'
      }
    },
    {
      key: ' TextProps style:variant ={"bodyMedium"}',
      value: {
        variant:'bodyMedium' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
        value:'>Body Medium'
      }
    },
    {
      key: ' TextProps style:variant ={"bodySmall"}',
      value: {
        variant:'bodySmall' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
        value:'Body Small'
      }
    },
    {
      key: ' TextProps style:variant ={"labelLarge"}',
      value: {
        variant:'labelLarge' as 'labelLarge' | 'labelMedium' | 'labelSmall',
        value:'Label Large'
      }
    },
    {
      key: ' TextProps style:children  ={"Label Large"}',
      value: {
        variant:'labelLarge' as 'labelLarge' | 'labelMedium' | 'labelSmall',
        value:'Label Large'
      }
    },
    {
      key: ' TextProps style:theme  ={ colors: { primary:"green"} }',
      value: {
        variant:'labelLarge' as 'labelLarge' | 'labelMedium' | 'labelSmall',
        value:'Label Large',
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' TextProps style:{backgroundColor:MD2Colors.blue100},',
      value: {
        variant:'labelLarge' as 'labelLarge' | 'labelMedium' | 'labelSmall',
        value:'Label Large',
        style:{backgroundColor:MD2Colors.blue100},
      }
    },
  ]

  return (
    <Tester>
      <ScrollView>
      <TestSuite name='TextDemo' >
       {TextProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
                 <Text {...item.value}>{item.value.value}</Text>
            </TestCase>
          );
        })},
      </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export default TextDemo;