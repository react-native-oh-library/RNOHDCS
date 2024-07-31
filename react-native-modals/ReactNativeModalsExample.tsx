import { LogicalTestCase, TestCase as _TestCase, Tester, TestSuite } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import React, { useState, Fragment, useEffect, useMemo } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Switch,
    TextInput,
    ScrollView,
    FlatList,
    Animated,
    Dimensions,
    Platform,
} from 'react-native';

const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
}

function Button({ label, onPress }: { onPress: () => void; label: string }) {
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

const TestCase = {
    Example: Example,
    Manual: Manual,
    Logical: Logical,
};

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

function prepareSkipProp(skipProp: TesterSkipProp | undefined) {
    return skipProp
        ? typeof skipProp === 'string'
            ? skipProp
            : Platform.select({
                android: skipProp?.android,
                harmony: prepareHarmonySkipProp(skipProp?.harmony),
            })
        : undefined;
}

function prepareHarmonySkipProp(
    skipProp: TesterHarmonySkipProp,
): string | boolean {
    if (typeof skipProp === 'string' || typeof skipProp === 'boolean') {
        return skipProp;
    } else {
        return 'rnohArchitecture' in Platform.constants &&
            Platform.constants.rnohArchitecture === 'C_API'
            ? skipProp?.cAPI
            : skipProp?.arkTS;
    }
}

function Example({
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
}) {
    return (
        <_TestCase
            itShould={itShould}
            modal={modal}
            tags={tags}
            skip={prepareSkipProp(skip)}>
            {children}
        </_TestCase>
    );
}

function Manual<TState = undefined>({
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
}) {
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
}

function Logical({
    itShould,
    skip,
    tags,
    fn,
}: {
    itShould: string;
    skip?: TesterSkipProp;
    tags?: TesterTag[];
    fn: React.ComponentProps<typeof LogicalTestCase>['fn'];
}) {
    return (
        <_TestCase
            itShould={itShould}
            skip={prepareSkipProp(skip)}
            tags={tags}
            fn={fn}
        />
    );
}

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

import {
    ModalPortal,
    Modal,
    BottomModal,
    Backdrop,
    DraggableView,
    ModalButton,
    ModalContent,
    ModalTitle,
    ModalFooter,
    Animation,
    FadeAnimation,
    ScaleAnimation,
    SlideAnimation,
    DragEvent,
    ModalProps,
    ModalTitleProps,
    ModalButtonProps,
    ModalFooterProps,
    BackdropProps,
    ModalContentProps,
} from 'react-native-modals'

type RotateAnimationConfig = {
    initialValue?: number,
    useNativeDriver?: boolean,
    animationDuration?: number,
}

class RotateAnimation extends Animation {
    animationDuration: number

    constructor({
        initialValue = 0,
        useNativeDriver = false,
        animationDuration = 200,
    }: RotateAnimationConfig = {}) {
        super({ initialValue, useNativeDriver });
        this.animationDuration = animationDuration;
    }

    in(onFinished?: Function = () => { }): void {
        Animated.timing(this.animate, {
            toValue: 1,
            duration: this.animationDuration,
            useNativeDriver: this.useNativeDriver,
        }).start(onFinished);
    }

    out(onFinished?: Function = () => { }): void {
        Animated.timing(this.animate, {
            toValue: 0,
            duration: this.animationDuration,
            useNativeDriver: this.useNativeDriver,
        }).start(onFinished);
    }

    getAnimations(): Object {
        return {
            transform: [{
                rotateZ: this.animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                }),
            }, {
                scale: this.animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
            }],
        };
    }
}

export function ModalsTest() {
    return (
        <Tester key="ModalsTest" style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>


                <TestSuite name="Modals">

                    <TestCase.Manual
                        itShould="Show Modal - Default Animation with set props onShow and onDismiss"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalExample
                                onDismiss={() => {
                                    setState(true)
                                }}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show modal with set props width=0.5 and height=0.5 "
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalExample
                                width={0.5}
                                height={0.5}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show modal with set props rounded and useNativeDriver"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalRoundedExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show modal with set props style and modalStyle"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalStyleExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show modal with set props hasOverlay、 overlayOpacity、overlayBackgroundColor and overlayPointerEvents"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalOverlayExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show modal with set props modalAnimation and animationDuration"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalAnimateExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show modal with set props onTouchOutside and onHardwareBackPress"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalTouchExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show modal with set props swipeDirection 、 swipeThreshold、onMove、onSwiping、onSwipeRelease、onSwipingOut and onSwipeOut"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalSwipeExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />


                    <TestCase.Manual
                        itShould="show modal with set props modalTitle 、 footer"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalExample
                                modalTitle={<Text>I am cust modal title</Text>}
                                footer={<Text>I am cust modal footer</Text>}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show modal with use ModalTitle、 ModalFooter、ModalButton、ModalContent"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalCustExample

                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>


                <TestSuite name="BottomModal">

                    <TestCase.Manual
                        itShould="show with title"
                        initialState={false}
                        arrange={({ setState }) => (
                            <BottomModalExample
                                modalTitle={
                                    <ModalTitle
                                        title="Bottom Modal"
                                        hasTitleBar
                                    />
                                }
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />


                    <TestCase.Manual
                        itShould="show without title"
                        initialState={false}
                        arrange={({ setState }) => (
                            <BottomModalExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />


                    <TestCase.Manual
                        itShould="show with set props height=0.8 "
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalExample
                                isBottom={true}
                                height={0.8}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show with set props rounded and useNativeDriver"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalRoundedExample
                                isBottom={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show with set props style and modalStyle"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalStyleExample
                                isBottom={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show with set props hasOverlay、 overlayOpacity、overlayBackgroundColor and overlayPointerEvents"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalOverlayExample
                                isBottom={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show with set props modalAnimation and animationDuration"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalAnimateExample
                                isBottom={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show with set props onTouchOutside and onHardwareBackPress"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalTouchExample
                                isBottom={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show with set props swipeDirection 、 swipeThreshold、onMove、onSwiping、onSwipeRelease、onSwipingOut and onSwipeOut"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalSwipeExample
                                isBottom={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />


                    <TestCase.Manual
                        itShould="show with set props modalTitle 、 footer"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalExample
                                modalTitle={<Text>I am cust modal title</Text>}
                                footer={<Text>I am cust modal footer</Text>}
                                isBottom={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show with use ModalTitle、 ModalFooter、ModalButton、ModalContent"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalCustExample
                                isBottom={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>

                <TestSuite name="ModalPortal">

                    <TestCase.Manual
                        itShould="show with call show 、update、dismiss、dismissAll、get props ref、size"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalSinglePortalExample

                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />



                </TestSuite>


                <TestSuite name="DraggableView">

                    <TestCase.Manual
                        itShould="show DraggableView"
                        initialState={false}
                        arrange={({ setState }) => (
                            <DraggableViewExample

                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />



                </TestSuite>


                <TestSuite name="ModalTitle">

                    <TestCase.Manual
                        itShould="show ModalTitle with set props title、align、style、textStyle、hasTitleBar"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalTitleExample
                                title=''
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />



                </TestSuite>

                <TestSuite name="ModalContent">

                    <TestCase.Manual
                        itShould="show ModalContent with set props style、children"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalContentExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />


                </TestSuite>

                <TestSuite name="ModalButton">

                    <TestCase.Manual
                        itShould="show ModalButton with set props text、align、style、textStyle、activeOpacity、disabled、bordered、onPress"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalButtonExample
                                text=''
                                onPress={() => { }}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />


                </TestSuite>

                <TestSuite name="ModalFooter">

                    <TestCase.Manual
                        itShould="show ModalFooter with set props style、bordered、children"
                        initialState={false}
                        arrange={({ setState }) => (
                            <ModalFooterExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>

                <TestSuite name="Backdrop">

                    <TestCase.Manual
                        itShould="show Backdrop with set props visible、opacity、onPress、backgroundColor、animationDuration、pointerEvents、useNativeDriver"
                        initialState={false}
                        arrange={({ setState }) => (
                            <BackdropExample
                                visible={false}
                                opacity={1}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>


                <TestSuite name="ScaleAnimation">

                    <TestCase.Manual
                        itShould="show scaleAnimation with set props useNativeDriver、initialValue and call in、out、getAnimations"
                        initialState={false}
                        arrange={({ setState }) => (
                            <AnimationExample
                                scaleVisible={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>

                <TestSuite name="FadeAnimation">

                    <TestCase.Manual
                        itShould="show fadeAnimation with set props useNativeDriver、initialValue、animationDuration and call in、out、getAnimations"
                        initialState={false}
                        arrange={({ setState }) => (
                            <AnimationExample
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>

                <TestSuite name="SlideAnimation">

                    <TestCase.Manual
                        itShould="show slideAnimation with set props useNativeDriver、initialValue、slideFrom and call in、out、getAnimations"
                        initialState={false}
                        arrange={({ setState }) => (
                            <AnimationExample
                                sliderVisible={true}
                                onShow={() => {
                                    setState(true);
                                }}
                            />
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>



            </ScrollView>
        </Tester>

    );
}

const DraggableViewExample = (props: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [switchThreshold, setSwitchThreshold] = useState(false);
    const [switchSwipeDirection, setSwitchSwipeDirection] = useState(false);
    const [onMoveCk, setOnMoveCk] = useState('');
    const [onSwipingCk, setOnSwipingCk] = useState('');
    const [onSwipeReleaseCK, setOnSwipeReleaseCK] = useState('');
    const [onSwipingOutCK, setOnSwipingOutCk] = useState('');
    const [onSwipeOutCk, setOnSwipeOutCk] = useState('');

    let animate = new Animated.Value(0);

    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>

            {!switchSwipeDirection && <View style={{ height: 200, backgroundColor: 'yellow', width: SCREEN_WIDTH - 40 }}>
                {modalVisible ? <DraggableView
                    style={{ height: 200, width: SCREEN_WIDTH - 40 }}
                    swipeThreshold={switchThreshold ? 30 : 150}
                    swipeDirection={'left'}
                    onMove={(e: DragEvent) => {
                        setOnMoveCk(JSON.stringify(e));
                    }}
                    onSwiping={(e: DragEvent) => {
                        setOnSwipingCk(JSON.stringify(e));
                    }}
                    onSwipeRelease={(e: DragEvent) => {
                        setOnSwipeReleaseCK(JSON.stringify(e));
                    }}
                    onSwipingOut={(e: DragEvent) => {
                        setOnSwipingOutCk(JSON.stringify(e));
                    }}
                    onSwipeOut={(e: DragEvent) => {
                        setOnSwipeOutCk(JSON.stringify(e));
                        setModalVisible(false);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }}
                >
                    {({ pan, onLayout }: any) => (
                        <Fragment>
                            <Animated.View
                                style={pan.getLayout()}
                                onLayout={onLayout}
                            >
                                <Animated.View
                                    style={[
                                        { overflow: 'hidden', },
                                        { flexDirection: 'row', justifyContent: 'flex-end' }
                                    ]}
                                >
                                    <View style={{ width: 40, height: 40, backgroundColor: 'red', }}></View>
                                </Animated.View>
                            </Animated.View>
                        </Fragment>
                    )}
                </DraggableView> : <View></View>}
            </View>}

            {switchSwipeDirection && <View style={{ height: 200, backgroundColor: 'yellow', width: SCREEN_WIDTH - 40 }}>
                {modalVisible ? <DraggableView
                    style={{ height: 200, width: SCREEN_WIDTH - 40 }}
                    swipeThreshold={switchThreshold ? 30 : 150}
                    swipeDirection={'right'}
                    onMove={(e: DragEvent) => {
                        setOnMoveCk(JSON.stringify(e));
                    }}
                    onSwiping={(e: DragEvent) => {
                        setOnSwipingCk(JSON.stringify(e));
                    }}
                    onSwipeRelease={(e: DragEvent) => {
                        setOnSwipeReleaseCK(JSON.stringify(e));
                    }}
                    onSwipingOut={(e: DragEvent) => {
                        setOnSwipingOutCk(JSON.stringify(e));
                    }}
                    onSwipeOut={(e: DragEvent) => {
                        setOnSwipeOutCk(JSON.stringify(e));
                        setModalVisible(false);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }}
                >
                    {({ pan, onLayout }: any) => (
                        <Fragment>
                            <Animated.View
                                style={pan.getLayout()}
                                onLayout={onLayout}
                            >
                                <Animated.View
                                    style={[
                                        { overflow: 'hidden', },

                                    ]}
                                >
                                    <View style={{ width: 40, height: 40, backgroundColor: 'red', }}></View>
                                </Animated.View>
                            </Animated.View>
                        </Fragment>
                    )}
                </DraggableView> : <View></View>}
            </View>}

            <View style={{}}>
                <Text>{"set swipeDirection:" + (switchSwipeDirection ? "right" : "left")}</Text>
                <Text>
                    {"set swipeThreshold:" + (!switchThreshold ? "150" : "30")}
                </Text>


                <Text>{"onMove:" + onMoveCk}</Text>
                <Text>{"onSwiping:" + onSwipingCk}</Text>
                <Text>{"onSwipeRelease:" + onSwipeReleaseCK}</Text>
                <Text>{"onSwipingOut:" + onSwipingOutCK}</Text>
                <Text>{"onSwipeOut:" + onSwipeOutCk}</Text>


                <View style={styles.bottomView}>
                    <Button label="set swipeDirection" onPress={() => {
                        setSwitchSwipeDirection(true);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                    <Button label="set swipeThreshold" onPress={() => {
                        setSwitchThreshold(true);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />

                    <Button label="reset" onPress={() => {
                        setModalVisible(true);
                        setSwitchThreshold(false);
                        setSwitchSwipeDirection(false);
                        setOnMoveCk('');
                        setOnSwipeOutCk('');
                        setOnSwipeReleaseCK('');
                        setOnSwipingCk('');
                        setOnSwipingOutCk('');
                    }} />
                </View>
            </View>
        </View>
    );
}

const BottomModalExample = (props: ModalProps & { withTextInput?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>

            <BottomModal
                visible={modalVisible}
                onTouchOutside={() => setModalVisible(false)}
                height={0.5}
                width={1}
                onSwipeOut={() => setModalVisible(false)}
                {...props}
            >
                <ModalContent
                    style={{
                        flex: 1,
                        backgroundColor: 'fff',
                    }}
                >
                    <Text>
                        Bottom Modal with Title
                    </Text>
                </ModalContent>
            </BottomModal>
            <Button label="Show Modal" onPress={() => setModalVisible(true)} />
        </View>
    );
};


const ModalExample = (props: ModalProps & { withTextInput?: boolean, isBottom?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const ModalWrap = props.isBottom ? BottomModal : Modal;

    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>
            <ModalWrap
                overlayOpacity={0.5}
                {...props}
                visible={modalVisible}
                onTouchOutside={() => {
                    setModalVisible(false)
                }}
                onHardwareBackPress={() => {
                    setModalVisible(false)
                    return true;
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    {props.withTextInput && <TextInput style={styles.textInput} />}
                    <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
                </View>
            </ModalWrap>
            <Button label="Show Modal" onPress={() => setModalVisible(true)} />
        </View>
    );
};

const ModalRoundedExample = (props: ModalProps & { isBottom?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [roundVisible, setRoundVisible] = useState(false);
    const [nativeDriVisible, setNativeDriVisible] = useState(false);

    const ModalWrap = props.isBottom ? BottomModal : Modal;
    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>
            <ModalWrap
                overlayOpacity={0.5}
                {...props}
                visible={modalVisible}
                rounded={roundVisible}
                useNativeDriver={nativeDriVisible}
                onTouchOutside={() => {
                    setModalVisible(false)
                }}
                onHardwareBackPress={() => {
                    setModalVisible(false)
                    return true;
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
                </View>
            </ModalWrap>
            <View style={{}}>
                <Text>
                    {"set rounded:" + roundVisible}
                    <Switch value={roundVisible} onValueChange={(val: boolean) => setRoundVisible(val)} ></Switch>
                </Text>


                <Text>
                    {"set useNativeDriver:" + nativeDriVisible}
                    <Switch value={nativeDriVisible} onValueChange={(val: boolean) => setNativeDriVisible(val)} />
                </Text>


                <Button label="Show Modal" onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
}


const ModalStyleExample = (props: ModalProps & { isBottom?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchOneVisible, setSwitchOneVisible] = useState(false);
    const [switchTwoVisible, setSwitchTwoVisible] = useState(false);

    const ModalWrap = props.isBottom ? BottomModal : Modal;
    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>
            <ModalWrap
                overlayOpacity={0.5}
                {...props}
                visible={modalVisible}
                style={switchOneVisible ? { backgroundColor: 'blue', opacity: 0.5 } : {}}
                modalStyle={switchTwoVisible ? { backgroundColor: 'green' } : {}}
                onTouchOutside={() => {
                    setModalVisible(false)
                }}
                onHardwareBackPress={() => {
                    setModalVisible(false)
                    return true;
                }}
            >
                <View style={[styles.modalView, { backgroundColor: 'tranparent' }]}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
                </View>
            </ModalWrap>
            <View style={{}}>
                <Text>
                    {"set style:" + (!switchOneVisible ? "null" : "{backgroundColor:'blue',opacity:0.5}")}
                    <Switch value={switchOneVisible} onValueChange={(val: boolean) => setSwitchOneVisible(val)} />
                </Text>


                <Text>
                    {"set modalStyle:" + (!switchTwoVisible ? "null" : "{backgroundColor:'green'}")}
                    <Switch value={switchTwoVisible} onValueChange={(val: boolean) => setSwitchTwoVisible(val)} />
                </Text>


                <Button label="Show Modal" onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
}


const ModalOverlayExample = (props: ModalProps & { isBottom?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchOneVisible, setSwitchOneVisible] = useState(false);
    const [switchTwoVisible, setSwitchTwoVisible] = useState(false);
    const [switchThreeVisible, setSwitchThreeVisible] = useState(false);
    const [switchFourVisible, setSwitchFourVisible] = useState(false);

    const ModalWrap = props.isBottom ? BottomModal : Modal;
    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>
            <ModalWrap
                overlayOpacity={switchFourVisible ? 0.5 : 0.8}
                overlayBackgroundColor={!switchThreeVisible ? undefined : "#f5f5f5"}
                overlayPointerEvents={switchTwoVisible ? 'auto' : 'none'}
                hasOverlay={switchOneVisible as any}
                {...props}
                visible={modalVisible}
                onTouchOutside={() => {
                    setModalVisible(false)
                }}
                onHardwareBackPress={() => {
                    setModalVisible(false)
                    return true;
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
                </View>
            </ModalWrap>
            <View style={{}}>
                <Text>
                    {"set hasOverlay:" + (!switchOneVisible ? "false" : "true")}
                    <Switch value={switchOneVisible} onValueChange={(val: boolean) => setSwitchOneVisible(val)} />
                </Text>


                <Text>
                    {"set overlayPointerEvents:" + (!switchTwoVisible ? "none" : "auto")}
                    <Switch value={switchTwoVisible} onValueChange={(val: boolean) => setSwitchTwoVisible(val)} />
                </Text>


                <Text>
                    {"set overlayBackgroundColor:" + (!switchThreeVisible ? "null" : "#f5f5f5")}
                    <Switch value={switchThreeVisible} onValueChange={(val: boolean) => setSwitchThreeVisible(val)} />
                </Text>


                <Text>
                    {"set overlayOpacity:" + (!switchFourVisible ? "0.8" : "0.5")}
                    <Switch value={switchFourVisible} onValueChange={(val: boolean) => setSwitchFourVisible(val)} />
                </Text>


                <Button label="Show Modal" onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
}


const ModalTouchExample = (props: ModalProps & { isBottom?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchOneVisible, setSwitchOneVisible] = useState(false);
    const [switchTwoVisible, setSwitchTwoVisible] = useState(false);

    const ModalWrap = props.isBottom ? BottomModal : Modal;
    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>
            <ModalWrap
                overlayOpacity={0.5}
                {...props}
                visible={modalVisible}
                onTouchOutside={() => {
                    setSwitchOneVisible(true);
                    setModalVisible(false)
                }}
                onHardwareBackPress={() => {
                    setModalVisible(false);
                    setSwitchTwoVisible(true);
                    return true;
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
                </View>
            </ModalWrap>
            <View style={{}}>
                <Text>{"onTouchOutside:" + (!switchOneVisible ? "" : "callback")}</Text>

                <Text>{"onHardwareBackPress:" + (!switchTwoVisible ? "" : "callback")}</Text>

                <Button label="Show Modal" onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
}


const ModalSwipeExample = (props: ModalProps & { isBottom?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchThreshold, setSwitchThreshold] = useState(false);
    const [switchSwipeDirection, setSwitchSwipeDirection] = useState(false);
    const [onMoveCk, setOnMoveCk] = useState('');
    const [onSwipingCk, setOnSwipingCk] = useState('');
    const [onSwipeReleaseCK, setOnSwipeReleaseCK] = useState('');
    const [onSwipingOutCK, setOnSwipingOutCk] = useState('');
    const [onSwipeOutCk, setOnSwipeOutCk] = useState('');

    const ModalWrap = props.isBottom ? BottomModal : Modal;
    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>
            <ModalWrap
                overlayOpacity={0.5}
                {...props}
                visible={modalVisible}
                swipeDirection={switchSwipeDirection ? ['down', 'up', 'left', 'right'] : undefined}
                onTouchOutside={() => {
                    setModalVisible(false)
                }}
                onHardwareBackPress={() => {
                    setModalVisible(false)
                    return true;
                }}
                swipeThreshold={switchThreshold ? 30 : undefined}
                onMove={(e: DragEvent) => {
                    setOnMoveCk(JSON.stringify(e));
                }}
                onSwiping={(e: DragEvent) => {
                    setOnSwipingCk(JSON.stringify(e));
                }}
                onSwipeRelease={(e: DragEvent) => {
                    setOnSwipeReleaseCK(JSON.stringify(e));
                }}
                onSwipingOut={(e: DragEvent) => {
                    setOnSwipingOutCk(JSON.stringify(e));
                }}
                onSwipeOut={(e: DragEvent) => {
                    setOnSwipeOutCk(JSON.stringify(e));
                    setModalVisible(false)
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>I am support swipe!</Text>

                    <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
                </View>
            </ModalWrap>
            <View style={{}}>
                {!props.isBottom && <Text>{"set swipeDirection:" + (switchSwipeDirection ? "['down','up','left','right']" : '')}</Text>}
                <Text>
                    {"set swipeThreshold:" + (!switchThreshold ? "" : "30")}
                </Text>


                <Text>{"onMove:" + onMoveCk}</Text>
                <Text>{"onSwiping:" + onSwipingCk}</Text>
                <Text>{"onSwipeRelease:" + onSwipeReleaseCK}</Text>
                <Text>{"onSwipingOut:" + onSwipingOutCK}</Text>
                <Text>{"onSwipeOut:" + onSwipeOutCk}</Text>

                <View style={styles.bottomView}>
                    {!props.isBottom && <Button label="set swipeDirection" onPress={() => {
                        setSwitchSwipeDirection(true);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />}
                    <Button label="set swipeThreshold" onPress={() => {
                        setSwitchThreshold(true);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                    <Button label="Show Modal" onPress={() => {
                        setModalVisible(true);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                    <Button label="reset" onPress={() => {
                        setModalVisible(false);
                        setSwitchThreshold(false);
                        setSwitchSwipeDirection(false);
                        setOnMoveCk('');
                        setOnSwipeOutCk('');
                        setOnSwipeReleaseCK('');
                        setOnSwipingCk('');
                        setOnSwipingOutCk('');
                    }} />
                </View>
            </View>
        </View>
    );
}


const ModalAnimateExample = (props: ModalProps & { isBottom?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [useNativeDriverVisible, setUseNativeDriverVisible] = useState(false);
    const [durationVisible, setDurationVisible] = useState(false);
    const [fadeVisible, setFadeVisible] = useState(false);
    const [scaleVisible, setScaleVisible] = useState(false);
    const [sliderVisible, setSliderVisible] = useState(false);
    const [custAnimateVisible, setCustAnimateVisible] = useState(false);

    const ModalWrap = props.isBottom ? BottomModal : Modal;
    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>
            <ModalWrap
                overlayOpacity={0.5}
                {...props}
                visible={modalVisible}
                animationDuration={durationVisible ? 1000 : 200}
                modalAnimation={custAnimateVisible ? new RotateAnimation({ animationDuration: durationVisible ? 1000 : 200, useNativeDriver: useNativeDriverVisible }) : scaleVisible ? new ScaleAnimation({ useNativeDriver: useNativeDriverVisible }) : sliderVisible ? new SlideAnimation({ slideFrom: 'bottom', useNativeDriver: useNativeDriverVisible }) : new FadeAnimation({ animationDuration: durationVisible ? 1000 : 200, useNativeDriver: useNativeDriverVisible })}
                onTouchOutside={() => {
                    setModalVisible(false)
                }}
                onHardwareBackPress={() => {
                    setModalVisible(false)
                    return true;
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
                </View>
            </ModalWrap>
            <View style={{}}>
                <Text>{"set modalAnimation:" + (scaleVisible ? "ScaleAnimation" : sliderVisible ? 'SlideAnimation' : 'FadeAnimation')}</Text>

                <Text>
                    {'open FadeAnimation'}
                    <Switch value={fadeVisible} onValueChange={(val: boolean) => {
                        setFadeVisible(val)
                        setSliderVisible(false);
                        setScaleVisible(false);
                        setCustAnimateVisible(false);
                    }} />
                </Text>
                <Text>
                    {'open SlideAnimation'}
                    <Switch value={sliderVisible} onValueChange={(val: boolean) => {
                        setFadeVisible(false)
                        setScaleVisible(false);
                        setSliderVisible(val);
                        setCustAnimateVisible(false);
                    }} />
                </Text>
                <Text>
                    {'open ScaleAnimation'}
                    <Switch value={scaleVisible} onValueChange={(val: boolean) => {
                        setFadeVisible(false)
                        setSliderVisible(false);
                        setCustAnimateVisible(false);
                        setScaleVisible(val)
                    }} />
                </Text>

                <Text>
                    {'open CustAnimation'}
                    <Switch value={custAnimateVisible} onValueChange={(val: boolean) => {
                        setFadeVisible(false)
                        setSliderVisible(false);
                        setCustAnimateVisible(val);
                        setScaleVisible(false)
                    }} />
                </Text>

                <Text>
                    {"set animationDuration:" + (!durationVisible ? "200" : "1000")}
                    <Switch value={durationVisible} onValueChange={(val: boolean) => setDurationVisible(val)} />
                </Text>

                <Text>
                    {"set useNativeDriver:" + (!useNativeDriverVisible ? "false" : "true")}
                    <Switch value={useNativeDriverVisible} onValueChange={(val: boolean) => setUseNativeDriverVisible(val)} />
                </Text>


                <Button label="Show Modal" onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
}


const ModalCustExample = (props: ModalProps & { withTextInput?: boolean, isBottom?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const ModalWrap = props.isBottom ? BottomModal : Modal;
    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>
            <ModalWrap
                overlayOpacity={0.5}
                {...props}
                visible={modalVisible}
                onTouchOutside={() => {
                    setModalVisible(false)
                }}
                onHardwareBackPress={() => {
                    setModalVisible(false)
                    return true;
                }}
                modalTitle={<ModalTitle title='I am modalTitle Node' style={{ backgroundColor: '#00f190' }}></ModalTitle>}
                footer={<ModalFooter style={{ backgroundColor: '#f1f900' }}>
                    <ModalButton
                        text="CANCEL"
                        bordered
                        align="center"
                        textStyle={{ color: 'red' }}
                        onPress={() => {
                            setModalVisible(false)
                        }}
                        key="button-1"
                    />
                    <ModalButton
                        text="OK"
                        bordered
                        align="center"
                        activeOpacity={0.5}
                        onPress={() => {
                            setModalVisible(false)
                        }}
                        key="button-2"
                    />
                </ModalFooter>}
            >
                <ModalContent>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        {props.withTextInput && <TextInput style={styles.textInput} />}
                        <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
                    </View>
                </ModalContent>
            </ModalWrap>
            <Button label="Show Modal" onPress={() => setModalVisible(true)} />
        </View>
    );
};


const ModalSinglePortalExample = (props: ModalProps & { withTextInput?: boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [countModalLen, setCountModalLen] = useState(ModalPortal.size);
    const [getCountValue, setGetCountValue] = useState(false);
    const [getRefValue, setGetRefValue] = useState(false);
    const [switchDismiss, setSwitchDismiss] = useState(false);
    const [switchDismissAll, setSwitchDismissAll] = useState(false);
    const [switchUpdate, setSwitchUpdate] = useState(false);

    let currentModalKey: string = '';

    const showOneModal = () => {
        let key = ModalPortal.show(<Modal
            overlayOpacity={0.5}
            {...props}
            visible={true}
            height={0.5}
            onTouchOutside={() => {
                ModalPortal.dismiss(key);
                setSwitchDismiss(true);
                if (props.onShow) {
                    props.onShow();
                }
            }}
            onHardwareBackPress={() => {
                ModalPortal.dismiss(key);
                setSwitchDismiss(true);
                if (props.onShow) {
                    props.onShow();
                }
                return true;
            }}
            swipeDirection={['down']}
            onSwipeOut={() => {
                ModalPortal.dismiss(key);
                setSwitchDismiss(true);
                if (props.onShow) {
                    props.onShow();
                }
            }}
        >
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{`-ModalPortal size:${ModalPortal.size + 1}`}</Text>
                <Button label="call show other Modal" onPress={() => show()} />
                <Button label="call dismiss" onPress={() => {
                    ModalPortal.dismiss(key as string);
                    setSwitchDismiss(true);
                    if (props.onShow) {
                        props.onShow();
                    }
                }} />
            </View>
        </Modal>) as any;
        currentModalKey = key;
        setCountModalLen(ModalPortal.size);
    }

    const show = () => {

        let key = ModalPortal.show(<Modal
            overlayOpacity={0.5}
            {...props}
            visible={true}
            onTouchOutside={() => {
            }}
            onHardwareBackPress={() => {
                ModalPortal.dismiss(key);
                return true;
            }}
            swipeDirection={['down']}
            onSwipeOut={() => {
                ModalPortal.dismiss(key);
            }}
            modalTitle={<ModalTitle title={`get size:${ModalPortal.size}`} style={{ backgroundColor: '#00f190' }}></ModalTitle>}
            footer={<ModalFooter style={{ backgroundColor: '#f1f900' }}>
                <ModalButton
                    text="call dismiss"
                    bordered
                    align="center"
                    textStyle={{ color: 'red', fontSize: 14 }}
                    onPress={() => {
                        dismiss()

                    }}
                    key="button-1"
                />
                <ModalButton
                    text="call update"
                    bordered
                    align="center"
                    textStyle={{ fontSize: 14 }}
                    activeOpacity={0.5}
                    onPress={() => {
                        update()
                    }}
                    key="button-2"
                />
            </ModalFooter>}
        >
            <ModalContent>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>i am content</Text>
                    <Button label="call dismissAll" onPress={() => dismissAll()} />
                </View>
            </ModalContent>
        </Modal>) as any;
        currentModalKey = key;
        setCountModalLen(ModalPortal.size);
    }

    const dismiss = (key?: string) => {
        let someKey = (currentModalKey ? currentModalKey : key || '') as string;
        if (someKey.length) {
            ModalPortal.dismiss(someKey);
            setSwitchDismiss(true);
        }
        if (props.onShow) {
            props.onShow();
        }
    }

    const update = (key?: string) => {
        let someKey = (currentModalKey ? currentModalKey : key || '') as string;
        if (someKey.length) {
            ModalPortal.update(someKey, { overlayBackgroundColor: 'blue', overlayOpacity: 0.1 });
            setSwitchUpdate(true);
        }


        if (props.onShow) {
            props.onShow();
        }
    }

    const dismissAll = () => {
        ModalPortal.dismissAll();
        setSwitchDismissAll(true);
        if (props.onShow) {
            props.onShow();
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                show: {modalVisible ? 'call' : ''}
            </Text>

            <Text>size:{`${(getCountValue ? ModalPortal.size : '')}`}</Text>
            <Text>ref:{`${getRefValue ? ModalPortal.ref : ''}`}</Text>

            <Text>dismiss:{`${(switchDismiss ? 'call' : '')}`}</Text>
            <Text>dismissAll:{`${(switchDismissAll ? 'call' : '')}`}</Text>
            <Text>update:{`${(switchUpdate ? 'call' : '')}`}</Text>

            <View style={styles.bottomView}>
                <Button label="call Show" onPress={() => {
                    setModalVisible(true);
                    showOneModal();
                    if (props.onShow) {
                        props.onShow();
                    }
                }} />
                <Button label="get size" onPress={() => {
                    setGetCountValue(true);
                    if (props.onShow) {
                        props.onShow();
                    }
                }} />
                <Button label="get ref" onPress={() => {
                    setGetRefValue(true);
                    if (props.onShow) {
                        props.onShow();
                    }
                }} />
            </View>
        </View>
    );
};


const ModalTitleExample = (props: (ModalTitleProps & { onShow?: () => void })) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [switchTitleVisible, setSwitchTitleVisible] = useState(false);
    const [switchStyle, setSwitchStyle] = useState(false);
    const [switchTextStyle, setSwitchTextStyle] = useState(false);
    const [switchAlign, setSwitchAlign] = useState('center');
    const [switchTopBar, setSwitchTopBar] = useState(false);


    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>

            <View style={{ height: 100, backgroundColor: 'yellow', width: SCREEN_WIDTH - 40 }}>
                <ModalTitle
                    title={switchTitleVisible ? 'I am modalTitle component.' : ''}
                    style={switchStyle ? { backgroundColor: '#5f0ff1' } : {}}
                    textStyle={switchTextStyle ? { color: 'orange' } : {}}
                    align={switchAlign}
                    hasTitleBar={switchTopBar}
                ></ModalTitle>
            </View>

            <View style={{}}>

                <Text>
                    {"set title:" + (switchTitleVisible ? 'I am modalTitle component.' : '')}
                    <Switch value={switchTitleVisible} onValueChange={(val: boolean) => {
                        setSwitchTitleVisible(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>
                <Text>
                    {"set style:" + (switchStyle ? "{backgroundColor:'blue'}" : "")}
                    <Switch value={switchStyle} onValueChange={(val: boolean) => {
                        setSwitchStyle(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>
                <Text>
                    {"set textStyle:" + (switchTextStyle ? "{color:'orange'}" : "")}
                    <Switch value={switchTextStyle} onValueChange={(val: boolean) => {
                        setSwitchTextStyle(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                <Text>
                    {"set hasTitleBar:" + (switchTopBar ? "true" : "false")}
                    <Switch value={switchTopBar} onValueChange={(val: boolean) => {
                        setSwitchTopBar(val);
                        if (val) {
                            setSwitchStyle(false);
                        }
                    }} />
                </Text>

                <Text>
                    {"set align:" + switchAlign}
                    <Button label="left" onPress={() => {
                        setSwitchAlign('left');
                        if (props.onShow) {
                            props.onShow();
                        }


                    }} />
                    <Button label="center" onPress={() => {
                        setSwitchAlign('center');
                        if (props.onShow) {
                            props.onShow();
                        }


                    }} />
                    <Button label="right" onPress={() => {
                        setSwitchAlign('right');
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />
                </Text>

                <View style={styles.bottomView}>

                </View>
            </View>
        </View>
    );
}


const ModalButtonExample = (props: (ModalButtonProps & { onShow?: () => void })) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [switchTextVisible, setSwitchTextVisible] = useState(false);
    const [switchStyle, setSwitchStyle] = useState(false);
    const [switchTextStyle, setSwitchTextStyle] = useState(false);
    const [switchAlign, setSwitchAlign] = useState('center');
    const [switchBordered, setSwitchBordered] = useState(false);
    const [switchDisabled, setSwitchDisabled] = useState(false);
    const [switchActivityOpacity, setSwitchActivityOpacity] = useState(0.6);
    const [switchTapCK, setSwitchTapCK] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>

            <View style={{ height: 100, backgroundColor: 'yellow', width: SCREEN_WIDTH - 40 }}>
                <ModalButton
                    text={switchTextVisible ? 'modalButton text.' : ''}
                    style={[{ width: 200, height: 40 }, switchStyle ? { backgroundColor: '#5f0ff1' } : {}]}
                    textStyle={switchTextStyle ? { color: 'orange' } : {}}
                    align={switchAlign}
                    bordered={switchBordered}
                    disabled={switchDisabled}
                    activeOpacity={switchActivityOpacity}
                    onPress={() => setSwitchTapCK(true)}
                ></ModalButton>

            </View>

            <View style={{}}>
                <Text>onPress:{switchTapCK ? 'callback' : ''}</Text>

                <Text>
                    {"set text:" + (switchTextVisible ? 'modalButton text.' : '')}
                    <Switch value={switchTextVisible} onValueChange={(val: boolean) => {
                        setSwitchTextVisible(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>
                <Text>
                    {"set style:" + (switchStyle ? "{backgroundColor:'blue'}" : "")}
                    <Switch value={switchStyle} onValueChange={(val: boolean) => {
                        setSwitchStyle(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>
                <Text>
                    {"set textStyle:" + (switchTextStyle ? "{color:'orange'}" : "")}
                    <Switch value={switchTextStyle} onValueChange={(val: boolean) => {
                        setSwitchTextStyle(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>
                <Text>
                    {"set activeOpacity:" + switchActivityOpacity}
                    <Switch value={switchActivityOpacity !== 0.6} onValueChange={(val: boolean) => {
                        setSwitchActivityOpacity(val ? 0.0 : 0.6);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>


                <Text>
                    {"set borderd:" + (switchBordered ? "true" : "false")}
                    <Switch value={switchBordered} onValueChange={(val: boolean) => {
                        setSwitchBordered(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                <Text>
                    {"set disabled:" + (switchDisabled ? "true" : "false")}
                    <Switch value={switchDisabled} onValueChange={(val: boolean) => {
                        setSwitchDisabled(val);
                        if (val) {
                            setSwitchTapCK(false);
                        }
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                <Text>
                    {"set align:" + switchAlign}
                    <Button label="left" onPress={() => {
                        setSwitchAlign('left');
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                    <Button label="center" onPress={() => {
                        setSwitchAlign('center');
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                    <Button label="right" onPress={() => {
                        setSwitchAlign('right');
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

            </View>
        </View>
    );
}


const ModalContentExample = (props: (ModalContentProps & { onShow?: () => void })) => {
    const [switchStyle, setSwitchStyle] = useState(false);
    const [switchShowChildren, setSwitchShowChildren] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
            </Text>

            <View style={{ height: 100, backgroundColor: 'yellow', width: SCREEN_WIDTH - 40 }}>
                <ModalContent
                    style={[{ width: 200, height: 40 }, switchStyle ? { backgroundColor: '#5f0ff1' } : {}]}

                >
                    {switchShowChildren ? <Text style={styles.modalText}>I am children</Text> : null}
                </ModalContent>

            </View>

            <View style={{}}>

                <Text>
                    {"set style:" + (switchStyle ? "{backgroundColor:'blue'}" : "")}
                </Text>

                <View style={styles.bottomView}>
                    <Button label="show style" onPress={() => {
                        setSwitchStyle(true);
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />
                    <Button label="show children" onPress={() => {
                        setSwitchShowChildren(true);
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />
                    <Button label="reset" onPress={() => {
                        setSwitchShowChildren(false);
                        setSwitchStyle(false);

                    }} />
                </View>
            </View>
        </View>
    );
}



const ModalFooterExample = (props: (ModalFooterProps & { onShow?: () => void })) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchStyle, setSwitchStyle] = useState(false);
    const [switchBordered, setSwitchBordered] = useState(false);


    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>

            <View style={{ height: 100, backgroundColor: 'yellow', width: SCREEN_WIDTH - 40 }}>
                {modalVisible ? <ModalFooter
                    style={switchStyle ? { backgroundColor: '#5f0ff1' } : {}}
                    bordered={switchBordered}
                >
                    <ModalButton
                        text="cancle"
                        bordered
                        align="center"
                        textStyle={{ color: 'red' }}
                        onPress={() => {


                        }}
                        key="button-1"
                    />
                    <ModalButton
                        text="ok"
                        bordered
                        align="center"
                        activeOpacity={0.5}
                        textStyle={{ color: 'purple' }}
                        onPress={() => {

                        }}
                        key="button-2"
                    />
                </ModalFooter> : null}
            </View>

            <View style={{}}>
                <Text>
                    {"set style:" + (switchStyle ? "{backgroundColor:'blue'}" : "")}
                    <Switch value={switchStyle} onValueChange={(val: boolean) => {
                        setSwitchStyle(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                <Text>
                    {"set borderd:" + (switchBordered ? "true" : "false")}
                    <Switch value={switchBordered} onValueChange={(val: boolean) => {
                        setSwitchBordered(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                <View style={styles.bottomView}>
                    <Button label="show" onPress={() => {

                        setModalVisible(true);
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />

                    <Button label="reset" onPress={() => {

                        setModalVisible(false);
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />
                </View>
            </View>
        </View>
    );
}


const BackdropExample = (props: (BackdropProps & { onShow?: () => void })) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchBackgroundStyle, setSwitchBackgroundStyle] = useState(false);
    const [switchUseNativeDriver, setSwitchUseNativeDriver] = useState(false);
    const [switchAnimationDuration, setSwitchAnimationDuration] = useState(false);
    const [switchDisabled, setSwitchDisabled] = useState(false);
    const [switchActivityOpacity, setSwitchActivityOpacity] = useState(false);
    const [switchTapCK, setSwitchTapCK] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.textStyle, { color: 'black' }]}>
                {modalVisible ? 'shown' : 'hidden'}
            </Text>

            <View style={{ height: 100, backgroundColor: 'yellow', width: SCREEN_WIDTH - 40 }}>
                <Backdrop
                    visible={modalVisible}
                    backgroundColor={switchBackgroundStyle ? '#5f0ff1' : 'red'}
                    useNativeDriver={switchUseNativeDriver}
                    animationDuration={switchAnimationDuration ? 1000 : 200}
                    pointerEvents={!switchDisabled ? 'none' : 'auto'}
                    opacity={switchActivityOpacity ? 0.2 : 0.5}
                    onPress={() => {
                        setSwitchTapCK(true);
                        setModalVisible(false);
                    }}
                ></Backdrop>

            </View>

            <View style={{}}>
                <Text>onPress:{switchTapCK ? 'callback' : ''}</Text>

                <Text>
                    {"set backgroundColor:" + (switchBackgroundStyle ? "#5f0ff1" : "red")}
                    <Switch value={switchBackgroundStyle} onValueChange={(val: boolean) => {
                        setSwitchBackgroundStyle(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>
                <Text>
                    {"set opacity:" + (switchActivityOpacity ? 0.2 : '')}
                    <Switch value={switchActivityOpacity} onValueChange={(val: boolean) => {
                        setSwitchActivityOpacity(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>


                <Text>
                    {"set useNativeDriver:" + (switchUseNativeDriver ? "true" : "false")}
                    <Switch value={switchUseNativeDriver} onValueChange={(val: boolean) => {
                        setSwitchUseNativeDriver(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                <Text>
                    {"set animationDuration:" + (switchAnimationDuration ? "1000" : "200")}
                    <Switch value={switchAnimationDuration} onValueChange={(val: boolean) => {
                        setSwitchAnimationDuration(val);
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />
                </Text>

                <Text>
                    {"set pointerEvents:" + (switchDisabled ? "auto" : "none")}
                    <Switch value={switchDisabled} onValueChange={(val: boolean) => {
                        setSwitchDisabled(val);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                <View style={styles.bottomView}>
                    <Button label="show" onPress={() => {
                        setSwitchTapCK(false);
                        setModalVisible(true);
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />
                    <Button label="reset" onPress={() => {
                        setSwitchTapCK(false);
                        setSwitchDisabled(false);
                        setSwitchActivityOpacity(false);
                        setSwitchBackgroundStyle(false);
                        setSwitchUseNativeDriver(false);
                        setSwitchAnimationDuration(false);
                        setModalVisible(false);

                    }} />
                </View>
            </View>
        </View>
    );
}


const AnimationExample = (props: (ModalFooterProps & { onShow?: () => void, scaleVisible?: boolean, sliderVisible?: boolean })) => {
    const [initValueVisible, setInitValueVisible] = useState(0);
    const [switchCallIn, setSwitchCallIn] = useState(false);
    const [switchCallOut, setSwitchCallOut] = useState(false);
    const [switchCallAnimations, setSwitchCallAnimations] = useState(false);
    const [switchUseNativeDriver, setSwitchUseNativeDriver] = useState(0);
    const [switchAnimationDuration, setSwitchAnimationDuration] = useState(200);
    const [switchSliderFrom, setSwitchSliderFrom] = useState<"top" | "bottom" | "left" | "right">('bottom');

    const animateScaleAng: Animation = useMemo(() => {
        let intValue = initValueVisible;
        let nativeDriver = switchUseNativeDriver == 1 ? true : false;
        return new ScaleAnimation({ initialValue: intValue, useNativeDriver: nativeDriver });
    }, [initValueVisible, switchUseNativeDriver]);

    const animateSliderAng: Animation = useMemo(() => {
        let intValue = initValueVisible;
        let nativeDriver = switchUseNativeDriver == 1 ? true : false;
        return new SlideAnimation({ initialValue: intValue, slideFrom: switchSliderFrom, nativeDriver: nativeDriver });
    }, [initValueVisible, switchUseNativeDriver, switchSliderFrom]);

    const animateFadeAng: Animation = useMemo(() => {
        let intValue = initValueVisible;
        let nativeDriver = switchUseNativeDriver == 1 ? true : false;
        let duration = switchAnimationDuration;
        return new FadeAnimation({ initialValue: intValue, animationDuration: duration, useNativeDriver: nativeDriver });
    }, [initValueVisible, switchAnimationDuration]);

    const animateAng = props.scaleVisible ? animateScaleAng : props.sliderVisible ? animateSliderAng : animateFadeAng;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 200, backgroundColor: 'yellow', width: SCREEN_WIDTH - 40 }}>
                {<Animated.View
                    style={[
                        { overflow: 'hidden', },
                        animateAng.getAnimations(),
                    ]}
                >
                    <View style={{ width: 40, height: 40, backgroundColor: 'red', }}></View>
                </Animated.View>}
            </View>

            <View style={{}}>
                <Text>
                    {"call in:" + (switchCallIn ? "call" : "")}

                </Text>

                <Text>
                    {"call out:" + (switchCallOut ? "call" : "")}

                </Text>

                <Text>
                    {"call getAnimations:" + (switchCallAnimations ? JSON.stringify(animateAng.getAnimations()) : "")}

                </Text>

                <Text>
                    {"set initialValue:" + (initValueVisible)}
                    <Switch value={initValueVisible == 1} onValueChange={(val: boolean) => {
                        setInitValueVisible(initValueVisible == 1 ? 0 : 1);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                <Text>
                    {"set useNativeDriver:" + (switchUseNativeDriver ? "true" : "false")}
                    <Switch value={switchUseNativeDriver == 1} onValueChange={(val: boolean) => {
                        setSwitchUseNativeDriver(val ? 1 : 0);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />
                </Text>

                {!(props.scaleVisible || props.sliderVisible) && <Text>
                    {"set animationDuration:" + (switchAnimationDuration ? "1000" : "200")}
                    <Switch value={switchAnimationDuration == 1000} onValueChange={(val: boolean) => {
                        setSwitchAnimationDuration(val ? 1000 : 200);
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />
                </Text>}

                {(props.sliderVisible) && <Text>
                    {"set slideFrom:" + switchSliderFrom}

                    <Button label='left' onPress={() => {
                        setSwitchSliderFrom('left');
                    }}></Button>
                    <Button label='right' onPress={() => {
                        setSwitchSliderFrom('right');
                    }}></Button>
                    <Button label='top' onPress={() => {
                        setSwitchSliderFrom('top');
                    }}></Button>
                    <Button label='bottom' onPress={() => {
                        setSwitchSliderFrom('bottom');
                    }}></Button>
                </Text>}

                <View style={styles.bottomView}>

                    <Button label="call getAnimations" onPress={() => {

                        setSwitchCallAnimations(true);
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />


                    <Button label="call in" onPress={() => {

                        setSwitchCallIn(true);
                        animateAng.in();
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />

                    <Button label="call out" onPress={() => {

                        setSwitchCallOut(true);
                        animateAng.out();
                        if (props.onShow) {
                            props.onShow();
                        }
                    }} />

                    <Button label="reset" onPress={() => {
                        setSwitchCallAnimations(false);
                        setSwitchCallOut(false);
                        setSwitchCallIn(false);
                        setInitValueVisible(0);
                        setSwitchAnimationDuration(200);
                        setSwitchSliderFrom('bottom');
                        setSwitchUseNativeDriver(0);
                        animateAng.out();
                        if (props.onShow) {
                            props.onShow();
                        }

                    }} />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    modalView: {
        padding: 15,
        alignItems: 'center',
    },

    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        height: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        height: 20,
    },
    textInput: {
        width: 150,
        height: 40,
        backgroundColor: 'rgb(200,200,200)',
        borderRadius: 12,
        marginVertical: 4,
    },
});
