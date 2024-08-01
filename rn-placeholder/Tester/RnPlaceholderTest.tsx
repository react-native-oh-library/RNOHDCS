import  { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Animated,
    Image,
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
    ShineOverlay,
    Shine,
    Loader,
    Progressive
} from "rn-placeholder";


export const RnPlaceholderTest = () => {
    return (
        <Tester>
            <ScrollView>
                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_1"}
                        itShould={`Animations of Fade`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>Animation: Fade</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                       setState(true);
                                       }}>Fade</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Fade}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine width={80} />
                                        <PlaceholderLine />
                                        <PlaceholderLine width={30} />
                                    </Placeholder>                               
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_2"}
                        itShould={`Animations of ShineOverlay`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>Animation: ShineOverlay</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                                              setState(true);
                                       }}>ShineOverlay</Text>
                                    </View>
                                    <Placeholder
                                        Animation={ShineOverlay}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine width={80} />
                                        <PlaceholderLine />
                                        <PlaceholderLine width={30} />
                                    </Placeholder>                               
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_3"}
                        itShould={`Animations of Shine`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>Animation: Shine</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                        setState(true);
                                        }}>Shine</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Shine}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine width={80} />
                                        <PlaceholderLine />
                                        <PlaceholderLine width={30} />
                                    </Placeholder>                               
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_4"}
                        itShould={`Animations of Loader`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>Animation: Loader</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                       setState(true);
                                       }}>Loader</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Loader}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine width={80} />
                                        <PlaceholderLine />
                                        <PlaceholderLine width={30} />
                                    </Placeholder>                               
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_5"}
                        itShould={`Animations of Progressive`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>Animation: Progressive</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                        setState(true);
                                        }}>Progressive</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Progressive}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine width={80} />
                                        <PlaceholderLine />
                                        <PlaceholderLine width={30} />
                                    </Placeholder>                               
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>


                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_6"}
                        itShould={`Tweaking existing animations`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>Tweaking existing animations</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setState(true);
                                        }}>动画自定义</Text>
                                    </View>
                                    <Placeholder
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                        Animation={(props) => <ShineOverlay {...props} reverse={true} />}
                                    >
                                        <PlaceholderLine width={80} />
                                        <PlaceholderLine />
                                        <PlaceholderLine width={30} />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_7"}
                        itShould={`change height`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [height, setHeight] = useState<number>(12);

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>height: {height}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            let h = height;
                                            setHeight(h+10);
                                            setState(true);
                                        }}>height++</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Fade}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine height={height} />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_8"}
                        itShould={`change width`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [width, setHeight] = useState<number>(12);

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>width: {width}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            let w = width;
                                            setHeight(w + 10);
                                            setState(true);
                                        }}>height++</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Fade}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine width={width} />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_9"}
                        itShould={`change color`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [color, setColor] = useState<string>('#efefef');

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>color: {color}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setColor('#ff6700');
                                            setState(true);
                                        }}>change color</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Fade}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine color={color} />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_10"}
                        itShould={`isNoMargin`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [isNoMargin, setIsNoMargin] = useState<boolean>(false);

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>isNoMargin: {isNoMargin}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setIsNoMargin(!isNoMargin);
                                            setState(true);
                                        }}>change noMargin</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Fade}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine noMargin={isNoMargin} />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_11"}
                        itShould={`change style`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [background, setBackground] = useState<string>('');

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>style: {background}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setBackground('red');
                                            setState(true);
                                        }}>change style</Text>
                                    </View>
                                    <Placeholder
                                        Animation={Fade}
                                        Left={PlaceholderMedia}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine style={{ backgroundColor: background }} />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_12"}
                        itShould={`PlaceholderMedia size`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [size, setSize] = useState<number>(40);

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>PlaceholderMedia size: {size}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            let s = size;
                                            setSize(s + 10);
                                            setState(true);
                                        }}>change size</Text>
                                    </View>
                                    <Placeholder
                                        Left={props => (
                                            <PlaceholderMedia
                                                size={size}
                                            />
                                        )}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_13"}
                        itShould={`PlaceholderMedia isRound`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [isRound, setIsRound] = useState<boolean>(false);

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>PlaceholderMedia isRound: {isRound}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {                                            
                                            setIsRound(!isRound);
                                            setState(true);
                                        }}>change isRound</Text>
                                    </View>
                                    <Placeholder
                                        Left={props => (
                                            <PlaceholderMedia
                                            isRound={isRound}
                                            />
                                        )}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_14"}
                        itShould={`PlaceholderMedia color`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [color, setColor] = useState<string>('blue');

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>PlaceholderMedia color: {color}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {                                            
                                            setColor('#ff6700');
                                            setState(true);
                                        }}>change color</Text>
                                    </View>
                                    <Placeholder
                                        Left={props => (
                                            <PlaceholderMedia
                                            color={color}
                                            />
                                        )}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="RnPlaceholder">
                    <TestCase
                        key={"getInitStatus_15"}
                        itShould={`PlaceholderMedia style`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [background, setBackground] = useState<string>('green');

                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>PlaceholderMedia style: {background}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {                                            
                                            setBackground('yellow');
                                            setState(true);
                                        }}>change style</Text>
                                    </View>
                                    <Placeholder
                                        Left={props => (
                                            <PlaceholderMedia
                                                style={[{ backgroundColor: background }, props.style]}
                                            />
                                        )}
                                        Right={PlaceholderMedia}
                                        style={{ padding: 20 }}
                                    >
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                        <PlaceholderLine />
                                    </Placeholder>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}


