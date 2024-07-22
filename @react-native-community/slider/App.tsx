import Slider from "@react-native-community/slider"
import { View, Button, Text, ScrollView } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import { useState } from "react";

export default function SliderExample() {
    const [maximumChangeValue, setMaximumChangeValue] = useState<Number>(0)
    const [minimunTestValue, setMinimunTestValue] = useState<Number>(0)
    const [sourceValue, setSourceValue] = useState<Number>(0)
    const [targetValue, setTargetValue] = useState<Number>(0)

    return (
        <ScrollView>
            <Tester>
                <TestCase
                    itShould="style: Used to style and layout the Slider"
                    initialState={200}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View style={{ height: 100 }}>
                                <Text>{"current width status ： "}{JSON.stringify(state)}</Text>
                                <Slider
                                    style={{ width: state, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="#000000"
                                />
                                <Button onPress={() => {
                                    setState(300)
                                }}
                                    title="change to style" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(300);
                    }}

                />
                <TestCase
                    itShould="disabled: If true the user won't be able to move the slider"
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View style={{ height: 100 }}>
                                <Text>{"current disabeld status ： "}{JSON.stringify(state)}</Text>

                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    disabled={state}
                                    maximumValue={100}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="#000000"
                                />
                                <Button onPress={() => {
                                    setState(true)
                                }}
                                    title="change to disabled state" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase
                    itShould="maximumValue: Initial maximum value of the slider."
                    initialState={50}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"current maximumValue  ： "}{JSON.stringify(state)}</Text>
                                <Text>{"current value  ： "}{JSON.stringify(maximumChangeValue)}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={state}
                                    onValueChange={(e) => {
                                        setMaximumChangeValue(e)
                                    }}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="#000000"
                                />
                                <Button onPress={() => {
                                    setState(100)
                                }} title="change to maximumValue" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(100);
                    }}
                />

                <TestCase
                    itShould="minimumValue: Initial minimum value of the slider"
                    initialState={50}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"current minimumValue  ： "}{JSON.stringify(state)}</Text>
                                <Text>{"current value  ： "}{JSON.stringify(minimunTestValue)}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={state}
                                    value={50}
                                    maximumValue={100}
                                    onValueChange={(e) => {
                                        setMinimunTestValue(e)
                                    }}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="#000000"
                                />
                                <Button onPress={() => {
                                    setState(0)
                                }} title="change to minimumValue" />
                               
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(0);
                    }}
                />
                <TestCase
                    itShould="minimumTrackTintColor: The color used for the track to the left of the button."
                    initialState={"#FFFFFF"}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor={state}
                                    maximumTrackTintColor="#000000"
                                />
                                <Button onPress={() => {
                                    setState('red')
                                }} title="change to color" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq('red');
                    }}
                />
                <TestCase
                    itShould="maximumTrackTintColor: The color used for the track to the right of the button."
                    initialState={"#000000"}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={state}
                                />
                                <Button onPress={() => {
                                    setState('red')
                                }} title="change to color" />

                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq('red');
                    }}
                />
                <TestCase
                    itShould="onSlidingStart: Callback that is called when the user picks up the slider."
                    initialState={"未滑动"}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"current status  ： "}{JSON.stringify(state)}</Text>
                                <Text>{"callback handler value： "}{JSON.stringify(sourceValue)}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    onSlidingStart={(v) => {
                                        setSourceValue(v)
                                        setState("当前滑动开始并以当前值作为入参值")
                                    }}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={"#000000"}
                                />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq("当前滑动开始并以当前值作为入参值");
                    }}
                />
                <TestCase
                    itShould="onSlidingComplete: Callback that is called when the user releases the slider, regardless if the value has changed."
                    initialState={"未滑动"}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"current status  ： "}{JSON.stringify(state)}</Text>
                                <Text>{"callback handler value： "}{JSON.stringify(targetValue)}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    onSlidingComplete={(v) => {
                                        setTargetValue(v)
                                        setState("释放滑块时以结束值为参的回调")
                                    }}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={"#000000"}
                                />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq("释放滑块时以结束值为参的回调");
                    }}
                />
                <TestCase
                    itShould="onValueChange: Callback continuously called while the user is dragging the slider."
                    initialState={0}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"current value  ： "}{JSON.stringify(Number(state.toFixed(3)))}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    onValueChange={(v) => {
                                        console.log(v)
                                        setState(v)
                                    }}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={"#000000"}
                                />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(100);
                    }}
                />
                <TestCase
                    itShould="Step: Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0."
                    initialState={0}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"current step  ： "}{JSON.stringify(10)}</Text>
                                <Text>{"current value  ： "}{JSON.stringify(state)}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    step={10}
                                    onValueChange={(v) => {
                                        setState(v)
                                    }}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={"#000000"}
                                />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(100);
                    }}
                />
                <TestCase
                    itShould="value: Write-only property representing the value of the slider. Can be used to programmatically control the position of the thumb. The value should be between minimumValue and maximumValue, which default to 0 and 1 respectively. Default value is 0."
                    initialState={1}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"init value  ： "}{JSON.stringify(state)}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    value={state}
                                    maximumValue={100}
                                    step={10}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={"#000000"}
                                />
                                <Button onPress={() => {
                                    setState(30)
                                }} title="change Value" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(30);
                    }}
                />
                <TestCase
                    itShould="inverted: Reverses the direction of the slider.Default value is false."
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"current inverted value： "}{JSON.stringify(state)}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    inverted={state}
                                    maximumValue={100}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={"#000000"}
                                />
                                <Button onPress={() => {
                                    setState(true)
                                }} title="change inverted Value" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(true);
                    }}
                />
                <TestCase
                    itShould="vertical: Changes the orientation of the slider to vertical, if set to true."
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Text>{"current vertical value： "}{JSON.stringify(state)}</Text>
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    vertical={state}
                                    maximumValue={100}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={"#000000"}
                                />
                                <Button onPress={() => {
                                    setState(true)
                                }} title="change vertical Value" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(true);
                    }}
                />
                <TestCase
                    itShould="thumbTintColor: Color of the foreground switch grip."
                    initialState={"#000000"}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Slider
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor={"#FFFFFF"}
                                    maximumTrackTintColor={"#000000"}
                                    thumbTintColor={state}
                                />
                                <Button onPress={() => {
                                    setState('red')
                                }} title="change to thumbTintColor" />

                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq('red');
                    }}
                />
                <TestCase
                    itShould="thumbImage: Sets an image for the thumb. Only static images are supported. "
                    initialState={0.5}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View >
                                <Slider
                                    thumbImage={require('./resources/expo.png')}
                                    style={{ width: 200, height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="#000000"
                                />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                    }}
                />
            </Tester>
        </ScrollView>
    );
};

