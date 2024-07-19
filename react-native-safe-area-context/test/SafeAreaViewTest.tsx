import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React from 'react';
import { Text, View, StatusBarStyle, StyleSheet } from 'react-native';
import {
    SafeAreaView,
    Edge,
    SafeAreaProvider,
    EdgeInsets,
    Rect,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

export function SafeAreaViewTest() {
    const STYLES = ['default', 'dark-content', 'light-content'] as const;

    const [backColor, setBackColor] = React.useState("red");
    const [mode, setMode] = React.useState('margin');
    const [top, setTop] = React.useState(true);
    const [right, setRight] = React.useState(true);
    const [bottom, setBottom] = React.useState(true);
    const [left, setLeft] = React.useState(true);
    const [layout, setLayout] = React.useState('null');
    const [height, setHeight] = React.useState(500);
    const [insets, setInsets] = React.useState<EdgeInsets>();
    const [frame, setFrame] = React.useState<Rect>();
    const [statusBarStyle, setStatusBarStyle] = React.useState<StatusBarStyle>(
        STYLES[0],
    );
    const [hidden, setHidden] = React.useState(false);
    const [translucent, setTranslucent] = React.useState(true);

    let edges: Edge[] = [];

    const setEdges = () => {
        let arr = []
        if (top) {
            arr.push('top');
        }

        if (right) {
            arr.push('right');
        }
        if (bottom) {
            arr.push('bottom');
        }
        if (left) {
            arr.push('left');
        }

        edges = arr
    }
    setEdges();
    return (
        <Tester>
        <TestSuite name="SafeAreaViewTest">
            <TestCase tags={['C_API']} itShould="SafeAreaView">
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <View style={{ width: '100%', height: 500 }}>
                    <SafeAreaView
                        style={{
                            flex: 1,
                            backgroundColor: backColor,
                        }}
                        mode={mode}
                        edges={edges}
                        onLayout={e => {
                            setLayout(JSON.stringify(e.nativeEvent.layout));
                        }}>
                        <View>
                            <Text style={{ height: 36 }}>{edges}</Text>
                            <Text style={{ height: 36 }}>{layout}</Text>
                            <Text style={{ height: 36 }}>
                                top:{insets?.top},right:{insets?.right},bottom:{insets?.bottom}
                                ,left:{insets?.left}
                            </Text>
                            <Text style={{ height: 36 }}>
                                x:{frame?.x},y:{frame?.y},width:{frame?.width},height:
                                {frame?.height}
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 20,
                                }}>
                                <View
                                    style={styles.button}
                                    onTouchEnd={() =>
                                        setMode(mode == 'margin' ? 'padding' : 'margin')
                                    }>
                                    <Text style={styles.buttonText}>mode:{mode}</Text>
                                </View>

                                <View
                                    style={[styles.button, styles.margin20]}
                                    onTouchEnd={() =>
                                        setBackColor(backColor == 'red' ? 'green' : 'red')
                                    }>
                                    <Text style={styles.buttonText}>background:{backColor}</Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 20,
                                }}>
                                <View
                                    style={[styles.button]}
                                    onTouchEnd={() => setHeight(height + 100)}>
                                    <Text style={styles.buttonText}>height:{height}</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 20,
                                }}>
                                <View
                                    style={[
                                        styles.button80,
                                        { backgroundColor: top ? 'orange' : 'white' },
                                    ]}
                                    onTouchEnd={() => {
                                        setTop(!top);
                                        setEdges();
                                    }}>
                                    <Text style={styles.buttonText}>top</Text>
                                </View>

                                <View
                                    style={[
                                        styles.button80,
                                        {
                                            marginLeft: 10,
                                            backgroundColor: right ? 'orange' : 'white',
                                        },
                                    ]}
                                    onTouchEnd={() => {
                                        setRight(!right);
                                        setEdges();
                                    }}>
                                    <Text style={styles.buttonText}>right</Text>
                                </View>

                                <View
                                    style={[
                                        styles.button80,
                                        {
                                            marginLeft: 10,
                                            backgroundColor: bottom ? 'orange' : 'white',
                                        },
                                    ]}
                                    onTouchEnd={() => {
                                        setBottom(!bottom);
                                        setEdges();
                                    }}>
                                    <Text style={styles.buttonText}>bottom</Text>
                                </View>

                                <View
                                    style={[
                                        styles.button80,
                                        {
                                            marginLeft: 10,
                                            backgroundColor: left ? 'orange' : 'white',
                                        },
                                    ]}
                                    onTouchEnd={() => {
                                        setLeft(!left);
                                        setEdges();
                                    }}>
                                    <Text style={styles.buttonText}>left</Text>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
                </SafeAreaProvider>
            </TestCase>
        </TestSuite>
        </Tester>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    svgContainer: {
        width: '100%',
        height: 150,
    },
    label: {
        color: 'gray',
        width: '100%', // hack
        height: 20, // hack
    },
    button: {
        width: 160,
        height: 36,
        backgroundColor: 'hsl(190, 50%, 70%)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    button80: {
        width: 80,
        height: 36,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    buttonText: {
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
    },
    pagerView: {
        flex: 1,
        backgroundColor: 'hsl(190, 50%, 70%)',
        paddingTop: 24,
        margin: 24
    },
    margin20: {
        marginLeft: 20
    }
});