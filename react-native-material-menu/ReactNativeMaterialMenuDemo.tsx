
import { LogicalTestCase, TestCase as _TestCase, Tester, TestSuite } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ScrollView,
    Platform,
} from 'react-native';

import { Menu, MenuItem, MenuDivider, MenuItemProps, MenuProps } from 'react-native-material-menu';


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

export function MaterialMenuTest() {
    return (
        <Tester key={"MaterialMenuTest"} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <TestSuite name="Menu">
                    <TestCase.Manual
                        itShould="show props children and anchor"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuDemo
                                children={true}
                                anchor={true}
                                setState={setState}
                                reset={reset}
                            ></MenuDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show props visible"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuDemo
                                children={true}
                                anchor={true}
                                visible={true}
                                setState={setState}
                                reset={reset}
                            ></MenuDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show props style"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuDemo
                                children={true}
                                anchor={true}
                                style={{ backgroundColor: 'rgba(150,0,55,0.5)' }}
                                setState={setState}
                                reset={reset}
                            ></MenuDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show props onRequestClose"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuDemo
                                children={true}
                                anchor={true}
                                onRequestClose={() => { }}
                                setState={setState}
                                reset={reset}
                            ></MenuDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase.Manual
                        itShould="show props animationDuration"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuDemo
                                children={true}
                                anchor={true}
                                animationDuration={1000}
                                setState={setState}
                                reset={reset}
                            ></MenuDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="MenuItem">
                    <TestCase.Manual
                        itShould="show props children"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuItemDemo
                                children={true}
                                setState={setState}
                                reset={reset}
                            ></MenuItemDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show props disabled"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuItemDemo
                                children={true}
                                disabled={true}
                                setState={setState}
                                reset={reset}
                            ></MenuItemDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show props disabledTextColor"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuItemDemo
                                children={true}
                                disabled={true}
                                disabledTextColor={'red'}
                                setState={setState}
                                reset={reset}
                            ></MenuItemDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show props onPress call back"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuItemDemo
                                children={true}
                                onPress={() => { }}
                                setState={setState}
                                reset={reset}
                            ></MenuItemDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show props style"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuItemDemo
                                children={true}
                                style={{ backgroundColor: '#f10110' }}
                                setState={setState}
                                reset={reset}
                            ></MenuItemDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show props textStyle"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuItemDemo
                                children={true}
                                textStyle={{ color: '#f10110' }}
                                setState={setState}
                                reset={reset}
                            ></MenuItemDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase.Manual
                        itShould="show props pressColor"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuItemDemo
                                children={true}
                                pressColor={'blue'}
                                setState={setState}
                                reset={reset}
                            ></MenuItemDemo>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="MenuDivider">
                    <TestCase.Manual
                        itShould="show prop color"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <MenuDividerDemo
                                setState={setState}
                                reset={reset}
                            ></MenuDividerDemo>
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


const MenuDemo = (props: MenuProps & {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    reset: () => void;
}) => {
    const [switchShowChildren, setSwitchShowChildren] = useState(false);
    const [switchAnimationDuration, setSwitchAnimationDuration] = useState(300);
    const [switchShowStyle, setSwitchShowStyle] = useState(false);
    const [switchShowTouch, setSwitchShowTouch] = useState(false);
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    return (
        <>


            {props.visible && <Text style={styles.textStyle}>set prop visible :{visible ? 'true' : 'false'}</Text>}
            {props.anchor && <Text style={styles.textStyle}>set prop anchor :{switchShowChildren ? '<Text onPress={showMenu}>Show menu pop</Text>' : ''}</Text>}
            {props.style && <Text style={styles.textStyle}>set prop style :{switchShowStyle ? JSON.stringify(props.style) : ''}</Text>}
            {typeof (props.onRequestClose) === 'function' && <Text style={styles.textStyle}>set prop onRequestClose :{switchShowTouch ? 'call' : ''}</Text>}

            {props.animationDuration && <Text style={styles.textStyle}>set prop animationDuration :{switchAnimationDuration}</Text>}

            <View style={{ marginVertical: 5, paddingVertical: 5, backgroundColor: 'yellow' }}>
                <Menu
                    visible={visible}
                    anchor={<Text onPress={showMenu}>{switchShowChildren ? 'Show menu pop' : ''}</Text>}
                    onRequestClose={() => {
                        hideMenu();
                        setSwitchShowTouch(true);
                    }}

                    style={switchShowStyle ? { backgroundColor: '#00ff19' } : undefined}
                    animationDuration={switchAnimationDuration}
                >{switchShowChildren ? <>
                    <MenuItem onPress={() => {
                        hideMenu();
                        setSwitchShowTouch(true);
                    }}>Menu item 1</MenuItem>
                    <MenuItem onPress={() => {
                        hideMenu();
                        setSwitchShowTouch(true);
                    }}>Menu item 2</MenuItem>
                    <MenuItem disabled>Disabled item</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={() => {
                        hideMenu();
                        setSwitchShowTouch(true);
                    }}>Menu item 4</MenuItem>
                </> : <Text></Text>}</Menu>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>

                {props.children && <Button
                    label="show children and anchor props"
                    onPress={() => {
                        setSwitchShowChildren(true);
                        props.setState(true);
                    }}
                />}

                {props.style && <Button
                    label="set style props"
                    onPress={() => {
                        setSwitchShowStyle(true);
                        props.setState(true);
                    }}
                />}

                {props.visible && <Button
                    label="change visible props"
                    onPress={() => {
                        setVisible(true);
                        props.setState(true);
                    }}
                />}

                {props.animationDuration && <Button
                    label="change animationDuration props"
                    onPress={() => {
                        setSwitchAnimationDuration(props.animationDuration ?? 300);
                        props.setState(true);
                    }}
                />}
                <Button label="reset" onPress={() => {
                    setSwitchShowChildren(false);
                    setVisible(false);
                    setSwitchShowStyle(false);
                    setSwitchShowTouch(false);
                    setSwitchAnimationDuration(300);
                    props.reset();
                }} />
            </View>
        </>
    );
};

const MenuItemDemo = (props: MenuItemProps & {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    reset: () => void;
}) => {
    const [switchShowChildren, setSwitchShowChildren] = useState(false);
    const [switchShowDisabled, setSwitchShowDisabled] = useState(false);
    const [switchShowDisabledColor, setSwitchShowDisabledColor] = useState('#bdbdbd');
    const [switchShowStyle, setSwitchShowStyle] = useState(false);
    const [switchShowTextStyle, setSwitchShowTextStyle] = useState(false);
    const [switchShowTouch, setSwitchShowTouch] = useState(false);
    const [pressColor, setPressColor] = useState('#e0e0e0');

    return (
        <>
            <MenuItem
                disabled={switchShowDisabled}
                disabledTextColor={switchShowDisabledColor}
                onPress={() => {
                    setSwitchShowTouch(true);
                }}
                style={switchShowStyle ? { backgroundColor: '#00ff19' } : undefined}
                textStyle={switchShowTextStyle ? { color: 'blue' } : undefined}
                pressColor={pressColor}
            >{switchShowChildren ? 'i am menuItem' : ''}</MenuItem>

            {props.disabled && <Text style={styles.textStyle}>set prop disabled :{switchShowDisabled ? 'true' : 'false'}</Text>}
            {props.disabledTextColor && <Text style={styles.textStyle}>set prop disabledTextColor :{switchShowDisabledColor}</Text>}
            {props.style && <Text style={styles.textStyle}>set prop style :{switchShowStyle ? JSON.stringify(props.style) : ''}</Text>}
            {typeof (props.textStyle) === 'object' && <Text style={styles.textStyle}>set prop textStyle :{switchShowTextStyle ? JSON.stringify(props.textStyle) : ''}</Text>}
            {typeof (props.onPress) === 'function' && <Text style={styles.textStyle}>set prop onPress :{switchShowTouch ? 'call' : ''}</Text>}

            {props.pressColor && <Text style={styles.textStyle}>set prop pressColor :{pressColor}</Text>}

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>

                {props.children && <Button
                    label="show children props"
                    onPress={() => {
                        setSwitchShowChildren(true);
                        props.setState(true);
                    }}
                />}

                {props.disabled && <Button
                    label="change disabled props"
                    onPress={() => {
                        setSwitchShowDisabled(true);
                        props.setState(true);
                    }}
                />}

                {props.disabledTextColor && <Button
                    label="change disabledTextColor props"
                    onPress={() => {
                        setSwitchShowDisabledColor(props.disabledTextColor ?? 'rgba(0,100,0,0.3)');
                        props.setState(true);
                    }}
                />}

                {props.style && <Button
                    label="set style props"
                    onPress={() => {
                        setSwitchShowStyle(true);
                        props.setState(true);
                    }}
                />}

                {props.textStyle && <Button
                    label="set textStyle props"
                    onPress={() => {
                        setSwitchShowTextStyle(true);
                        props.setState(true);
                    }}
                />}

                {props.pressColor && <Button
                    label="change pressColor props"
                    onPress={() => {
                        setPressColor(props.pressColor ?? 'blue');
                        props.setState(true);
                    }}
                />}

                <Button label="reset" onPress={() => {
                    setSwitchShowChildren(false);
                    setSwitchShowDisabled(false);
                    setSwitchShowDisabledColor('#bdbdbd');
                    setSwitchShowStyle(false);
                    setSwitchShowTextStyle(false);
                    setSwitchShowTouch(false);
                    setPressColor('#e0e0e0');
                    props.reset();
                }} />
            </View>
        </>
    );
};



const MenuDividerDemo = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    reset: () => void;
}) => {
    const [lineColor, setLineColor] = useState('rgba(0,0,0,0.12)');

    return (
        <>
            <View style={{ marginVertical: 10 }}>
                <MenuDivider color={lineColor}></MenuDivider>
            </View>
            <Text style={styles.textStyle}>set color :{lineColor}</Text>
            <View style={{ flexDirection: 'row' }}>

                <Button
                    label="set color"
                    onPress={() => {
                        setLineColor('red');
                        props.setState(true);
                    }}
                />
                <Button label="reset" onPress={() => {
                    setLineColor('rgba(0,0,0,0.12)');
                    props.reset();
                }} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: '#666',
        fontWeight: 'bold',
        height: 30,
    },
});
