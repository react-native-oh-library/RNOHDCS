
import React from 'react';
import {
  TextInput,
} from 'react-native';

import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import Config from "react-native-config";

export default function App(): JSX.Element {
    return (
        <Tester style = {{flex: 1, top: 30}}>
            <TestSuite name = "Config"> 
                <TestCase 
                    itShould = "test Config Cbject"
                    fn = {({expect}) => {
                    expect(Config).to.have.property("ENV");
                    }}
                />   

                <TestCase
                    itShould = "test Config Content"
                    >
                    <TextInput>
                        {Config.ENV}
                    </TextInput>
                </TestCase>        
            </TestSuite>
        </Tester>
       )
}