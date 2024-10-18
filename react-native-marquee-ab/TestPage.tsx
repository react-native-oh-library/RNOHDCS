import React, { Component } from 'react';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { View, Dimensions, Text, Image, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { MarqueeHorizontal, MarqueeVertical } from 'react-native-marquee-ab';
//整个屏幕的宽度(由于宽度只能使用数值所以如果想要宽度满屏的话需要获取到宽度再赋值给width)
const mWidth = Dimensions.get('window').width - 40;
export default class TestPage extends Component {
    render() {
        return (
            <ScrollView>
                <Tester>
                    <TestSuite name="Marquee">
                        <TestCase itShould="horizontal duration customization">
                            <HorizontalDurationRolling />
                        </TestCase>
                        <TestCase itShould="horizontal speed customization">
                            <HorizontalSpeedRolling />
                        </TestCase>
                        <TestCase itShould="horizontal textList customization">
                            <HorizontalTextList />
                        </TestCase>
                        <TestCase itShould="horizontal width customization">
                            <HorizontalWidthRolling />
                        </TestCase>
                        <TestCase itShould="horizontal height customization">
                            <HorizontalHeightRolling />
                        </TestCase>
                        <TestCase itShould="horizontal direction customization">
                            <HorizontalDirectionRolling />
                        </TestCase>
                        <TestCase itShould="horizontal reverse customization">
                            <HorizontalReverseRolling />
                        </TestCase>
                        <TestCase itShould="horizontal separator customization">
                            <HorizontalSeparatorRolling />
                        </TestCase>
                        <TestCase itShould="horizontal bgStyle customization">
                            <HorizontalBgStyleRolling />
                        </TestCase>
                        <TestCase itShould="horizontal textStyle customization">
                            <HorizontalTextStyleRolling />
                        </TestCase>
                        <TestCase itShould="Vertical scrolling all effects">
                            <VerticalRolling />
                        </TestCase>
                    </TestSuite>
                </Tester>
            </ScrollView>
        );
    }
}

const HorizontalDurationRolling = () => {
    const [pressCounter, setPressCounter] = React.useState(10000);
    const handlePress = () => {
        setPressCounter(pressCounter == 10000 ? 2000 : 10000);
    };
    return (
        <View>
            <Text>{`The time required to complete the entire animation execution(${pressCounter}ms)`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handlePress}
            />
            <MarqueeHorizontal
                duration={pressCounter}
                textList={[
                    { label: '1', value: '两个黄鹂鸣翠柳，' },
                    { label: '2', value: '一行白鹭上青天。' },
                ]}
                width={mWidth}
                height={50}
                direction={'left'}
                reverse={false}
                separator={10}
                bgContainerStyle={{ backgroundColor: 'pink' }}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalSpeedRolling = () => {
    const [rollingCounter, setRollingCounter] = React.useState(60);
    const handleRolling = () => {
        setRollingCounter(rollingCounter == 60 ? 170 : 60);
    };
    return (
        <View>
            <Text>{`Average rolling speed(${rollingCounter})`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleRolling}
            />
            <MarqueeHorizontal
                speed={rollingCounter}
                textList={[
                    { label: '1', value: '两个黄鹂鸣翠柳，' },
                    { label: '2', value: '一行白鹭上青天。' },
                ]}
                width={mWidth}
                height={50}
                direction={'left'}
                reverse={false}
                separator={10}
                bgContainerStyle={{ backgroundColor: 'pink' }}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalTextList = () => {
    const [textListValue, setTextListValue] = React.useState([
        { label: '1', value: '一闪一闪亮晶晶' },
    ]);
    const handleTextList = () => {
        if (textListValue[0].label === '1') {
            setTextListValue([
                { label: '2', value: '满天都是小星星' },
            ]);
        } else {
            setTextListValue([
                { label: '1', value: '一闪一闪亮晶晶' },
            ]);
        }
    };
    return (
        <View>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleTextList}
            />
            <MarqueeHorizontal
                speed={100}
                textList={textListValue}
                width={mWidth}
                height={50}
                direction={'left'}
                reverse={false}
                separator={10}
                bgContainerStyle={{ backgroundColor: 'pink' }}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalWidthRolling = () => {
    const [widthCounter, setWidthCounter] = React.useState(300);
    const handleWidth = () => {
        setWidthCounter(widthCounter == 300 ? 200 : 300);
    };
    return (
        <View>
            <Text>{`width(${widthCounter})`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleWidth}
            />
            <MarqueeHorizontal
                speed={100}
                textList={[
                    { label: '1', value: '两个黄鹂鸣翠柳，' },
                    { label: '2', value: '一行白鹭上青天。' },
                ]}
                width={widthCounter}
                height={50}
                direction={'left'}
                reverse={false}
                separator={10}
                bgContainerStyle={{ backgroundColor: 'pink' }}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalHeightRolling = () => {
    const [heightCounter, setHeightCounter] = React.useState(50);
    const handleHeight = () => {
        setHeightCounter(heightCounter == 50 ? 100 : 50);
    };
    return (
        <View>
            <Text>{`height(${heightCounter})`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleHeight}
            />
            <MarqueeHorizontal
                speed={100}
                textList={[
                    { label: '1', value: '两个黄鹂鸣翠柳，' },
                    { label: '2', value: '一行白鹭上青天。' },
                ]}
                width={mWidth}
                height={heightCounter}
                direction={'left'}
                reverse={false}
                separator={10}
                bgContainerStyle={{ backgroundColor: 'pink' }}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalDirectionRolling = () => {
    const [directionCounter, setDirectionCounter] = React.useState("left");
    const handleDirection = () => {
        setDirectionCounter(directionCounter == 'left' ? 'right' : 'left');
    };
    return (
        <View>
            <Text>{`animation direction(${directionCounter})`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleDirection}
            />
            <MarqueeHorizontal
                speed={100}
                textList={[
                    { label: '1', value: '两个黄鹂鸣翠柳，' },
                    { label: '2', value: '一行白鹭上青天。' },
                ]}
                width={mWidth}
                height={50}
                direction={directionCounter}
                reverse={false}
                separator={10}
                bgContainerStyle={{ backgroundColor: 'pink' }}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalReverseRolling = () => {
    const [reverseCounter, setReverseCounter] = React.useState(false);
    const handleReverse = () => {
        setReverseCounter(reverseCounter == false ? true : false);
    };
    return (
        <View>
            <Text>{`display text in reverse order(${reverseCounter})`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleReverse}
            />
            <MarqueeHorizontal
                duration={5000}
                textList={[
                    { label: '1', value: '两只老虎跑得快,' },
                    { label: '2', value: '一只没有眼睛，一只没有耳朵。' },
                ]}
                width={mWidth}
                height={50}
                direction={'left'}
                reverse={reverseCounter}
                separator={10}
                bgContainerStyle={{ backgroundColor: 'pink' }}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalSeparatorRolling = () => {
    const [separatorCounter, setSeparatorCounter] = React.useState(10);
    const handleSeparator = () => {
        setSeparatorCounter(separatorCounter == 10 ? 50 : 10);
    };
    return (
        <View>
            <Text>{`the gap between two data points(${separatorCounter})`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleSeparator}
            />
            <MarqueeHorizontal
                duration={5000}
                textList={[
                    { label: '1', value: '一只没有眼睛,' },
                    { label: '2', value: '一只没有耳朵。' },
                ]}
                width={mWidth}
                height={50}
                direction={'left'}
                reverse={false}
                separator={separatorCounter}
                bgContainerStyle={{ backgroundColor: 'pink' }}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalBgStyleRolling = () => {
    const [bgroundColor, setBgroundColor] = React.useState({ backgroundColor: 'pink' });
    const handleBgContainerStyles = () => {
        if (bgroundColor.backgroundColor === 'pink') {
            setBgroundColor({ backgroundColor: 'skyblue' });
        } else {
            setBgroundColor({ backgroundColor: 'pink' });
        }
    };
    return (
        <View>
            <Text>{`backgroundColor(${bgroundColor.backgroundColor})`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleBgContainerStyles}
            />
            <MarqueeHorizontal
                duration={5000}
                textList={[
                    { label: '1', value: '门前大桥下，游过一群鸭' },
                    { label: '2', value: '快来快来数一数，24678' },
                ]}
                width={mWidth}
                height={50}
                direction={'left'}
                reverse={false}
                separator={20}
                bgContainerStyle={bgroundColor}
                textStyle={{ fontSize: 16 }}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const HorizontalTextStyleRolling = () => {
    const [textStyles, setTextStyles] = React.useState({ fontSize: 16 });
    const handleTextStyles = () => {
        if (textStyles.fontSize === 16) {
            setTextStyles({ fontSize: 24 });
        } else {
            setTextStyles({ fontSize: 16 });
        }
    };
    return (
        <View>
            <Text>{`textStyle.fontSize(${textStyles.fontSize})`}</Text>
            <Button
                title="Click on me!"
                color="#FF0000"
                onPress={handleTextStyles}
            />
            <MarqueeHorizontal
                speed={60}
                textList={[
                    { label: '1', value: '在大大的花园里面挖呀挖呀挖' },
                    { label: '2', value: '种小小的种子开大大的花' },
                ]}
                width={mWidth}
                height={50}
                direction={'left'}
                reverse={false}
                separator={20}
                bgContainerStyle={{ backgroundColor: '#008ad3' }}
                textStyle={textStyles}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};
const VerticalRolling = () => {
    const [durationChange, setDurationChange] = React.useState(2000);
    const [textListChange, setTextListChange] = React.useState([
        {
            label: '1',
            value: '窗含西岭千秋雪heiheiheiheiheiheiheiheihiehahahahaahahahahahaha，'
        }
    ]);
    const [widthChange, setWidthChange] = React.useState(300);
    const [heightChange, setHeightChange] = React.useState(50);
    const [delayChange, setDelayChange] = React.useState(1000);
    const [directionChange, setDirectionChange] = React.useState('up');
    const [numberOfLinesChange, setNumberOfLinesChange] = React.useState(1);
    const [bgColorChange, setBgColorChange] = React.useState({ backgroundColor: '#FFFF00' });
    const [textStyleChange, setTextStyleChange] = React.useState({ fontSize: 16 });
    const [isInitial, setIsInitial] = React.useState(true);
    const getViews = () => {
        if (isInitial) {
            return [
                <View
                    key="initial-view"
                    style={{
                        backgroundColor: '#FF0000',
                        padding: 5,
                        borderRadius: 3,
                        marginHorizontal: 5,
                    }}>
                    <Text style={{ color: '#FFFFFF' }}>{'hd1'}</Text>
                </View>,
                <Image
                    key="initial-image"
                    source={require('./assets/pravatar-131.jpg')}
                    style={{ width: 46, height: 28 }}
                />,
            ];
        } else {
            return [
                <View
                    key="toggled-view"
                    style={{
                        backgroundColor: '#FFF',
                        padding: 5,
                        borderRadius: 3,
                        marginHorizontal: 5,
                    }}>
                    <Text style={{ color: '#000' }}>{'???'}</Text>
                </View>,
                <Image
                    key="toggled-image"
                    source={require('./assets/pravatar-131.jpg')}
                    style={{ width: 30, height: 30 }}
                />,
            ];
        }
    };
    const [viewStyleChange, setViewStyleChange] = React.useState(StyleSheet.create({
        marqueeStyle: {
            backgroundColor: 'skyblue',
            borderRadius: 20,
        },
    }));
    const handleVerticalStyle = () => {
        setDurationChange(durationChange == 2000 ? 4000 : 2000);
        if (textListChange[0].label === '1') {
            setTextListChange([
                { label: '2', value: '门泊东吴万里船12345678998765432100lalalalalalalalalalalalalala' },
            ]);
        } else {
            setTextListChange([
                { label: '1', value: '窗含西岭千秋雪heiheiheiheiheiheiheiheihiehahahahaahahahahahaha，' },
            ]);
        }
        setWidthChange(widthChange == 300 ? 200 : 300);
        setHeightChange(heightChange == 50 ? 80 : 50);
        setDelayChange(delayChange == 1000 ? 3000 : 1000);
        setDirectionChange(directionChange == 'up' ? 'down' : 'up');
        setNumberOfLinesChange(numberOfLinesChange == 1 ? 2 : 1);
        if (bgColorChange.backgroundColor === '#FFFF00') {
            setBgColorChange({ backgroundColor: 'green' });
        } else {
            setBgColorChange({ backgroundColor: '#FFFF00' });
        }
        if (textStyleChange.fontSize === 16) {
            setTextStyleChange({ fontSize: 24 });
        } else {
            setTextStyleChange({ fontSize: 16 });
        }
        setIsInitial(!isInitial);
        if (viewStyleChange.marqueeStyle.backgroundColor === 'skyblue') {
            setViewStyleChange(StyleSheet.create({
                marqueeStyle: {
                    backgroundColor: 'pink',
                    borderRadius: 30,
                },
            }));
        } else {
            setViewStyleChange(StyleSheet.create({
                marqueeStyle: {
                    backgroundColor: 'skyblue',
                    borderRadius: 20,
                },
            }));
        }
    };
    return (
        <View>
            <Button
                title="Click to change all vertical props!"
                color="#FF0000"
                onPress={handleVerticalStyle}
            />
            <MarqueeVertical
                duration={durationChange}
                textList={textListChange}
                width={widthChange}
                height={heightChange}
                delay={delayChange}
                direction={directionChange}
                numberOfLines={numberOfLinesChange}
                headViews={getViews()}
                viewStyle={viewStyleChange.marqueeStyle}
                bgContainerStyle={bgColorChange}
                textStyle={textStyleChange}
                onTextClick={item => {
                    Alert.alert('' + JSON.stringify(item));
                }}
            />
        </View>
    );
};