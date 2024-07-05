import {TestSuite, Tester} from '@rnoh/testerino';
import { TestCase } from '../components';
import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar
} from "react-native";
import * as CardView from "react-native-cardview";

function RNCardViewTest() {
    return (
     <TestSuite name="CardView">
        <TestCase.Logical
          tags={['C_API']}
          itShould="cardview cardElevation"
          fn={({expect}:any) => {
              expect(CardView.cardElevation).to.be.undefined;
          }}
        />
        <TestCase.Logical
          tags={['C_API']}
          itShould="cardview cardMaxElevation"
          fn={({expect}:any) => {
              expect(CardView.cardMaxElevation).to.be.undefined;
          }}
        />
        <TestCase.Logical
          tags={['C_API']}
          itShould="cardview cornerRadius"
          fn={({expect}:any) => {
              expect(CardView.cornerRadius).to.be.undefined;
            }} 
        />
        <TestCase.Logical
          tags={['C_API']}
          itShould="cardview useCompatPadding"
          fn={({expect}:any) => {
              expect(CardView.useCompatPadding).to.be.undefined;
            }} 
        />
        <TestCase.Logical
          tags={['C_API']}
          itShould="cardview cornerOverlap"
          fn={({expect}:any) => {
              expect(CardView.cornerOverlap).to.be.undefined;
            }} 
        />
        <TestCase.Logical
          tags={['C_API']}
          itShould="cardview backgroundcolor"
          fn={({expect}:any) => {
              expect(CardView.backgroundcolor).to.be.undefined;
            }} 
        />
      </TestSuite>
    
    );
  }
  
  function App() {
    return (
      <View>
      <StatusBar />
      <SafeAreaView style={{backgroundColor: '#222'}}>
          <Tester >
            <ScrollView style={{width: '100%'}}>
              <RNCardViewTest/>
              
            </ScrollView>
          </Tester>
      </SafeAreaView>
    </View>
    );
  }
  
  export default App;