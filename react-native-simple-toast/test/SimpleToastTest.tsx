import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import * as React from 'react';
import { Button, View } from 'react-native';
import Toast from 'react-native-simple-toast';

export function SimpleToastTest() {
    return (
        <TestSuite name="SimpleToast">
            <TestCase
                itShould="Toast.SHORT"
                fn={({ expect }: any) => {
                    expect(Toast.SHORT).to.eql(2000);
                }}
            />
            <TestCase
                itShould="Toast.LONG"
                fn={({ expect }: any) => {
                    expect(Toast.LONG).to.eql(3500);
                }}
            />
            <TestCase
                itShould="Toast.TOP"
                fn={({ expect }: any) => {
                    expect(Toast.TOP).to.eql(0);
                }}
            />
            <TestCase
                itShould="Toast.BOTTOM"
                fn={({ expect }: any) => {
                    expect(Toast.BOTTOM).to.eql(1);
                }}
            />
            <TestCase
                itShould="Toast.CENTER"
                fn={({ expect }: any) => {
                    expect(Toast.CENTER).to.eql(2);
                }}
            />
            <TestCase
                itShould="Toast.show">
                <Button
                    title={'simple toast'}
                    onPress={() => {
                        Toast.show('This is a toast.', Toast.SHORT);
                    }}
                />
            </TestCase>
            <TestCase
                itShould="Toast.showWithGravity">
                <Button
                    onPress={() => {
                        setTimeout(() => {
                            Toast.showWithGravity(
                                'This is a toast in a modal.',
                                Toast.SHORT,
                                Toast.CENTER,
                            );
                        }, 500);
                    }}
                    title="toast on top of Modal"
                />
            </TestCase>
            <TestCase
                itShould="Toast.showWithGravityAndOffset">
                <Button
                    title={'toast with offset'}
                    onPress={() => {
                        Toast.showWithGravityAndOffset(
                            'This is a toast w/ offset.',
                            Toast.LONG,
                            Toast.CENTER,
                            200,
                            0,
                        );
                    }}
                />
            </TestCase>
        </TestSuite>
    );
}