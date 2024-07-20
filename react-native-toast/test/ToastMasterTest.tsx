import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import React from 'react';
import Toast from '@remobile/react-native-toast';

export function ToastTest() {
    return (
        <Tester>
            <TestSuite name="Toast">
                <TestCase
                    itShould="Toast.show"
                    fn={({ expect }: any) => {
                        expect(Toast.show('This is a toast.')).to.not.be.true;
                    }}
                />
                <TestCase
                    itShould="Toast.showShortTop"
                    fn={({ expect }: any) => {
                        expect(Toast.showShortTop('This is a top toast.')).to.not.be.true;
                    }}
                />
                <TestCase
                    itShould="Toast.showShortCenter"
                    fn={({ expect }: any) => {
                        expect(Toast.showShortCenter('This is a center toast.')).to.not.be
                            .true;
                    }}
                />
                <TestCase
                    itShould="Toast.showShortBottom"
                    fn={({ expect }: any) => {
                        expect(Toast.showShortBottom('This is a bottom toast.')).to.not.be
                            .true;
                    }}
                />
                <TestCase
                    itShould="Toast.showLongTop"
                    fn={({ expect }: any) => {
                        expect(Toast.showLongTop('This is a long top toast.')).to.not.be.true;
                    }}
                />
                <TestCase
                    itShould="Toast.showLongCenter"
                    fn={({ expect }: any) => {
                        expect(Toast.showLongCenter('This is a long center toast.')).to.not.be
                            .true;
                    }}
                />
                <TestCase
                    itShould="Toast.showLongBottom"
                    fn={({ expect }: any) => {
                        expect(Toast.showLongBottom('This is a long bottom toast.')).to.not.be
                            .true;
                    }}
                />
                <TestCase
                    itShould="Toast.showLongBottom"
                    fn={({ expect }: any) => {
                        expect(Toast.hide()).to.not.be.true;
                    }}
                />
            </TestSuite>
        </Tester>
    );
}