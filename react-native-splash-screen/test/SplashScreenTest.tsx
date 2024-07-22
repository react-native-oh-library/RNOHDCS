import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';

export function SplashScreenTest() {
    return (
        <Tester>
            <TestSuite name="SplashScreen">
                <TestCase
                    itShould="SplashScreen.hide"
                    fn={({ expect }: any) => {
                        expect(SplashScreen.hide()).to.not.be.undefined;
                    }}
                />
            </TestSuite>
        </Tester>
    );
}
