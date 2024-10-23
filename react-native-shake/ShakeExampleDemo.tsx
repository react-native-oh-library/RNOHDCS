import React, { useState } from 'react';
import { Text, Button } from 'react-native'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'
import RNShake from 'react-native-shake';

export function ShakeExampleDemo() {
    const [result, setResult] = useState<string>('')
    return (
        <Tester>
            <TestSuite name='shake'>
                <TestCase
                    itShould="shake(摇晃手机)"
                    tags={['C_API']}
                    initialState={false}
                    arrange={({ setState }) => {
                        myComponent(setState, setResult)
                        return (
                            <Text>{result}</Text>
                        );
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(true);
                    }}
                />
                <TestCase
                    itShould="remove(移除监听)"
                    tags={["C_API"]}
                    initialState={false}
                    arrange={({ setState }) => (
                        <Button
                            onPress={() => {
                                RNShake.removeAllListeners()
                                setState(true)
                            }}
                            title={"removeAllListeners"}
                        ></Button>
                    )}
                    assert={({ expect, state }) => {
                        expect(state).to.be.eq(true);
                    }}
                />
            </TestSuite>
        </Tester>
    )
}

export const myComponent = (setState: React.Dispatch<React.SetStateAction<boolean>>, setResult: React.Dispatch<React.SetStateAction<string>>) => {
    React.useEffect(() => {
        const subscription = RNShake.addListener(() => {
            setState(true)
            setResult('shake listen success')
        })
        return () => {
            subscription.remove()
        }
    }, [])
}

