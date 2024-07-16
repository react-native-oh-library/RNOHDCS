import { Text, View, TouchableHighlight, Platform } from 'react-native';
import { LogicalTestCase, TestSuite, TestCase as _TestCase } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import { ScaledSheet as extendScaledSheet } from 'react-native-size-matters/extend';

type TesterTag = 'dev';

type TesterHarmonySkipProp =
    | boolean
    | string
    | {
        arkTS: string | boolean;
        cAPI: string | boolean;
    };

type TesterSkipProp =
    | {
        android: string | boolean;
        harmony: TesterHarmonySkipProp;
    }
    | string;

const styles = ScaledSheet.create({
    container: {
        width: '100@s', // = scale(100)
        height: '100@vs', // = verticalScale(200)
        padding: '5@msr', // = Math.round(moderateScale(2))
        borderWidth: 10,
        borderColor: 'red',
        backgroundColor: 'yellow'
    }
})

const extendStyles = extendScaledSheet.create({
    container: {
        width: '100@s', // = scale(100)
        height: '100@vs', // = verticalScale(200)
        padding: '5@msr', // = Math.round(moderateScale(2))
        borderWidth: 10,
        borderColor: 'red',
        backgroundColor: 'yellow'
    }
})


const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

const Button = ({ label, onPress }: { onPress: () => void; label: string }) => {
    return (
        <TouchableHighlight
            underlayColor={PALETTE.REACT_CYAN_DARK}
            style={{
                paddingVertical: 6,
                paddingHorizontal: 12,
                backgroundColor: PALETTE.REACT_CYAN_LIGHT,
                borderWidth: 2,
                borderColor: PALETTE.REACT_CYAN_DARK,
            }}
            onPress={onPress}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                {label}
            </Text>
        </TouchableHighlight>
    );
}

const prepareHarmonySkipProp = (
    skipProp: TesterHarmonySkipProp,
): string | boolean => {
    if (typeof skipProp === 'string' || typeof skipProp === 'boolean') {
        return skipProp;
    } else {
        return 'rnohArchitecture' in Platform.constants &&
            Platform.constants.rnohArchitecture === 'C_API'
            ? skipProp?.cAPI
            : skipProp?.arkTS;
    }
}

const prepareSkipProp = (skipProp: TesterSkipProp | undefined) => {
    return skipProp
        ? typeof skipProp === 'string'
            ? skipProp
            : Platform.select({
                android: skipProp?.android,
                harmony: prepareHarmonySkipProp(skipProp?.harmony),
            })
        : undefined;
}

const TestCase = {
    Example: ({
        itShould,
        children,
        skip,
        tags,
        modal,
    }: {
        itShould: string;
        children: any;
        modal?: boolean;
        skip?: TesterSkipProp;
        tags?: TesterTag[];
    }) => {
        return (
            <_TestCase
                itShould={itShould}
                modal={modal}
                tags={tags}
                skip={prepareSkipProp(skip)}>
                {children}
            </_TestCase>
        );
    },
    Manual: <TState = undefined>({
        itShould,
        skip,
        tags,
        modal,
        initialState,
        arrange,
        assert,
    }: {
        itShould: string;
        skip?: TesterSkipProp;
        tags?: TesterTag[];
        modal?: boolean;
        initialState: TState;
        arrange: SmartManualTestCaseProps<TState>['arrange'];
        assert: SmartManualTestCaseProps<TState>['assert'];
    }) => {
        return (
            <_TestCase
                itShould={itShould}
                modal={modal}
                tags={tags}
                skip={prepareSkipProp(skip)}
                initialState={initialState}
                arrange={arrange}
                assert={assert}
            />
        );
    },
    Logical: ({
        itShould,
        skip,
        tags,
        fn,
    }: {
        itShould: string;
        skip?: TesterSkipProp;
        tags?: TesterTag[];
        fn: React.ComponentProps<typeof LogicalTestCase>['fn'];
    }) => {
        return (
            <_TestCase
                itShould={itShould}
                skip={prepareSkipProp(skip)}
                tags={tags}
                fn={fn}
            />
        );
    },
};

export function SizeMattersTest() {
    return (
        <TestSuite name="SizeMattersTest">
            <TestCase.Manual
                itShould="scale"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本宽度100</Text>
                            </View>
                            <View style={{
                                width: state.changeStatus ? scale(100) : 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'blue'
                            }} >
                                <Text>调用方法宽度{state.changeStatus ? scale(100) : 100}</Text>
                            </View>

                            <Button
                                label="点击"
                                onPress={() => {
                                    setState(prev => ({ ...prev, changeStatus: true }));
                                }}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="verticalScale"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本高度100</Text>
                            </View>
                            <View style={{
                                width: 100,
                                height: state.changeStatus ? verticalScale(100) : 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'blue'
                            }} >
                                <Text>调用方法高度{state.changeStatus ? verticalScale(100) : 100}</Text>
                            </View>
                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="moderateVerticalScale"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本高度100</Text>
                            </View>
                            <View style={{
                                width: 100,
                                height: state.changeStatus ? moderateVerticalScale(100) : 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'blue'
                            }} >
                                <Text>调用方法高度{state.changeStatus ? moderateVerticalScale(100) : 100}</Text>
                            </View>
                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="moderateScale"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 10,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本borderWidth10</Text>
                            </View>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: state.changeStatus ? moderateScale(10) : 10,
                                borderColor: 'red',
                                backgroundColor: 'blue'
                            }} >
                                <Text>调用方法borderWidth{state.changeStatus ? moderateScale(10) : 10}</Text>
                            </View>
                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="s"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本宽度100</Text>
                            </View>
                            <View style={{
                                width: state.changeStatus ? s(100) : 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'blue'
                            }} >
                                <Text>调用方法宽度{state.changeStatus ? s(100) : 100}</Text>
                            </View>

                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="vs"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本高度100</Text>
                            </View>
                            <View style={{
                                width: 100,
                                height: state.changeStatus ? vs(100) : 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'blue'
                            }} >
                                <Text>调用方法高度{state.changeStatus ? vs(100) : 100}</Text>
                            </View>
                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="mvs"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本高度100</Text>
                            </View>
                            <View style={{
                                width: 100,
                                height: state.changeStatus ? mvs(100) : 100,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: 'red',
                                backgroundColor: 'blue'
                            }} >
                                <Text>调用方法高度{state.changeStatus ? mvs(100) : 100}</Text>
                            </View>
                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="ms"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 10,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本borderWidth10</Text>
                            </View>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: state.changeStatus ? ms(10) : 10,
                                borderColor: 'red',
                                backgroundColor: 'blue'
                            }} >
                                <Text>调用方法borderWidth{state.changeStatus ? ms(10) : 10}</Text>
                            </View>
                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="create"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 10,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本</Text>
                            </View>
                            <View style={state.changeStatus ? styles.container : {}} >
                                <Text>调用create方法</Text>
                            </View>
                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>

            <TestCase.Manual
                itShould="extendStyles"
                initialState={{
                    changeStatus: false
                }}
                arrange={({ setState, state }) => {
                    return (
                        <>
                            <View style={{
                                width: 100,
                                height: 100,
                                padding: 5,
                                borderWidth: 10,
                                borderColor: 'red',
                                backgroundColor: 'yellow'
                            }} >
                                <Text>基本</Text>
                            </View>
                            <View style={state.changeStatus ? extendStyles.container : {}} >
                                <Text>调用create方法</Text>
                            </View>
                            <Button
                                label="点击"
                                onPress={() => setState(prev => ({ ...prev, changeStatus: true }))}
                            />
                        </>
                    );
                }}
                assert={({ expect, state }) => {
                    expect(state.changeStatus).to.be.true;
                }}>
            </TestCase.Manual>
        </TestSuite>
    );
}

