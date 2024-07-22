import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import CardView from "react-native-cardview";

const CardViewTest= () => {
    return (
	<Tester style={{ flex: 1, marginTop: 30 }}>
    <ScrollView >
      <TestCase tags={['C_API']} itShould="show cardview cornerRadius">
          <CardView
              cardElevation={0}
			  cardMaxElevation={20}
              cornerRadius={10}
              style={{
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                backgroundColor: '#ffffff'
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  backgroundColor: 'red'
                }}
              >
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    backgroundColor: 'pink',
                    textAlign: 'center'
                  }}
                >
                 Helloo
                </Text>
              </View>
          </CardView>
      </TestCase>
      <TestCase tags={['C_API']} itShould="show cardview shadow">
            <CardView
              cardElevation={20}
			  cardMaxElevation={21}
              cornerRadius={0}
              style={{
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                backgroundColor: '#ffffff'
              }}
            >
                          <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  backgroundColor: 'red'
                }}
              >
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    backgroundColor: 'pink',
                    textAlign: 'center'
                  }}
                >
                 Helloo
                </Text>
              </View>
          </CardView>
      </TestCase>
      <TestCase tags={['C_API']} itShould="Shadow height show as five">
          <CardView
              cardElevation={20}
              cardMaxElevation={10}
              cornerRadius={0}
              style={{
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                backgroundColor: '#ffffff'
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  backgroundColor: 'red'
                }}
              >
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    backgroundColor: 'pink',
                    textAlign: 'center'
                  }}
                >
                  Helloo
                </Text>
              </View>
          </CardView>
      </TestCase>
	  </ScrollView>
    </Tester>
    );
 };
 
 export default CardViewTest;