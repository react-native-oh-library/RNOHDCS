import { Text, View, TouchableHighlight, Platform, ScrollView } from 'react-native';
import { LogicalTestCase, TestSuite, TestCase as _TestCase, Tester } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

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
        <ScrollView>
            <View>
                <Tester>
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
                                        {/* scale 方法将根据您设备的屏幕宽度返回所提供尺寸的线性缩放结果。 */}
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
                                        {/* verticalScale 方法将根据您设备的屏幕高度返回所提供尺寸的线性缩放结果。 */}
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
                                        {/* moderateVerticalScale 方法有时您不想以线性方式缩放所有内容，这时可以使用 moderateScale。
                                它的妙处在于您可以控制调整大小的因子（默认值为 0.5）。
                                如果正常缩放会将您的尺寸增加 +2X，则 moderateScale 只会将其增加 +X，例如：
                                ➡️ scale(10) = 20
                                ➡️ moderateScale(10) = 15
                                ➡️ moderateScale(10, 0.1) = 11 
                            */}
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
                                        {/* moderateVerticalScale 方法与 moderateScale 相同，但使用 verticalScale 而不是 scale。 */}
                                        <View style={{
                                            width: 100,
                                            height: 100,
                                            padding: 5,
                                            borderWidth: state.changeStatus ? moderateScale(15) : 10,
                                            borderColor: 'red',
                                            backgroundColor: 'blue'
                                        }} >
                                            <Text>调用方法borderWidth{state.changeStatus ? moderateScale(15) : 10}</Text>
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
                                        {/* 这个是scale方法的别名 */}
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
                                        {/* 这个是verticalScale方法的别名 */}
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
                                        {/* 这个是moderateVerticalScale的别名方法 */}
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
                                        {/* 这个是moderateScale的别名方法 */}
                                        <View style={{
                                            width: 100,
                                            height: 100,
                                            padding: 5,
                                            borderWidth: state.changeStatus ? ms(15) : 10,
                                            borderColor: 'red',
                                            backgroundColor: 'blue'
                                        }} >
                                            <Text>调用方法borderWidth{state.changeStatus ? ms(15) : 10}</Text>
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
                </Tester>
            </View>
        </ScrollView>
    );
}

