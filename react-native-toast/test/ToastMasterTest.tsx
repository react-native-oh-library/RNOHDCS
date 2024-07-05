import { TestSuite } from '@rnoh/testerino';
import React from 'react';
import { TestCase } from '../components';
import Toast from 'react-native-toast';

export function FileUploadTest() {
    return (
        <TestSuite name="Toast">
            <TestCase.Logical
                itShould="Toast.show"
                fn={({ expect }: any) => {
                    expect(Toast.show('This is a toast.')).to.not.be.true;
                }}
            />
            <TestCase.Logical
                itShould="Toast.showShortTop"
                fn={({ expect }: any) => {
                    expect(Toast.showShortTop('This is a top toast.')).to.not.be.true;
                }}
            />
            <TestCase.Logical
                itShould="Toast.showShortCenter"
                fn={({ expect }: any) => {
                    expect(Toast.showShortCenter('This is a center toast.')).to.not.be
                        .true;
                }}
            />
            <TestCase.Logical
                itShould="Toast.showShortBottom"
                fn={({ expect }: any) => {
                    expect(Toast.showShortBottom('This is a bottom toast.')).to.not.be
                        .true;
                }}
            />
            <TestCase.Logical
                itShould="Toast.showLongTop"
                fn={({ expect }: any) => {
                    expect(Toast.showLongTop('This is a long top toast.')).to.not.be.true;
                }}
            />
            <TestCase.Logical
                itShould="Toast.showLongCenter"
                fn={({ expect }: any) => {
                    expect(Toast.showLongCenter('This is a long center toast.')).to.not.be
                        .true;
                }}
            />
            <TestCase.Logical
                itShould="Toast.showLongBottom"
                fn={({ expect }: any) => {
                    expect(Toast.showLongBottom('This is a long bottom toast.')).to.not.be
                        .true;
                }}
            />
            <TestCase.Logical
                itShould="Toast.showLongBottom"
                fn={({ expect }: any) => {
                    expect(Toast.hide()).to.not.be.true;
                }}
            />
        </TestSuite>
    );
}