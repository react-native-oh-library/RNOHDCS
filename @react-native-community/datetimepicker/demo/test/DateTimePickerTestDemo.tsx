import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Button } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import DateTimePicker from '@react-native-community/datetimepicker';

const STYLES = StyleSheet.create({
    defaultPickerStyle: {
        width: 150,
        height: 50,
        backgroundColor: '#ffffff'
    },
    MDDSStyle: {
        width: 180,
        height: 60,
        backgroundColor: '#ff0000'
    },
    MDDCStyle: {
        width: 210,
        height: 70,
        backgroundColor: '#00ff00'
    },
    MTStyle: {
        width: 240,
        height: 80,
        backgroundColor: '#0000ff'
    }
});

interface ComponentStyle {
    width: number,
    height: number,
    backgroundColor: string
}

interface State {
    mode: number,
    MDDSValue: Date,
    MDDCValue: Date,
    MTValue: Date,
    display: number,
    MDDSStyle: ComponentStyle,
    MDDCStyle: ComponentStyle,
    MTStyle: ComponentStyle,

    is24Hour: boolean,
    maximumDate: Date,
    minimumDate: Date,
    MDDSDisabled: boolean,
    MDDCDisabled: boolean,
    MTDisabled: boolean,
    textColor: string,
}

const modeList = ['date', 'time']
const displayList = ['spinner', 'compact', 'inline']

export class DateTimePickerTestDemo extends Component {

    state: State = {
        mode: 0,
        MDDSValue: new Date('2024-07-24'),
        MDDCValue: new Date('2024-07-24'),
        MTValue: new Date('2024-07-24'),
        display: 0,
        MDDSStyle: {
            width: 150,
            height: 50,
            backgroundColor: '#ffffff'
        },
        MDDCStyle: {
            width: 150,
            height: 50,
            backgroundColor: '#ffffff'
        },
        MTStyle: {
            width: 150,
            height: 50,
            backgroundColor: '#ffffff'
        },
        is24Hour: true,
        maximumDate: new Date('2030-01-01'),
        minimumDate: new Date('2008-10-01'),
        MDDSDisabled: false,
        MDDCDisabled: false,
        MTDisabled: false,
        textColor: '#000000'
    }

    render(): React.ReactNode {
        const { mode, MDDSValue, MDDCValue, MTValue, display, MDDSStyle, MDDCStyle, MTStyle, is24Hour, maximumDate,
            minimumDate, MDDSDisabled, MDDCDisabled, MTDisabled, textColor } = this.state;
        return <Tester style={{ paddingBottom: 20 }}>
            <ScrollView>
                <TestSuite name="datetimepicker">
                    <TestCase
                        key={"mode"}
                        itShould='改变mode'
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <Text>当前mode是：{modeList[mode]}</Text>
                                <DateTimePicker testID='DTP1' style={STYLES.defaultPickerStyle} mode={modeList[mode] as any} value={new Date} />
                                <Button title='切换mode' onPress={() => {
                                    if (mode < modeList.length - 1) this.setState({ mode: mode + 1 })
                                    else this.setState({ mode: 0 })
                                    setState(true)
                                }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => { expect(state).to.be.true; }}
                    />
                    <TestCase
                        key={"display"}
                        itShould='改变display'
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <Text>当前display是：{displayList[display]}</Text>
                                <DateTimePicker testID='DTP2' style={STYLES.defaultPickerStyle} value={new Date}
                                    mode='date' display={displayList[display] as any} />
                                <Button title='切换display' onPress={() => {
                                    if (display < displayList.length - 1) this.setState({ display: display + 1 })
                                    else this.setState({ display: 0 })
                                    setState(true)
                                }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onChange-mode_date-display_spinner"}
                        itShould="onChange事件,mode为'date',display为:'spinner'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <Text>当前日期是：{MDDSValue.toDateString()}</Text>
                                <DateTimePicker testID='DTP3' display='spinner' mode='date' style={STYLES.defaultPickerStyle}
                                    value={MDDSValue} onChange={(e, date) => { this.setState({ MDDSValue: date }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onChange-mode_date-display_compact"}
                        itShould="onChange事件,mode为'date',display为:'compact'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <Text>当前日期是：{MDDCValue.toDateString()}</Text>
                                <DateTimePicker testID='DTP10' display='compact' mode='date' style={STYLES.defaultPickerStyle}
                                    value={MDDCValue} onChange={(e, date) => { this.setState({ MDDCValue: date }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onChange-mode_time"}
                        itShould="onChange事件,mode为'time'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <Text>当前时间是：{MTValue.toTimeString()}</Text>
                                <DateTimePicker testID='DTP12' mode='time' style={STYLES.defaultPickerStyle}
                                    value={MTValue} onChange={e => { this.setState({ MTValue: new Date(e.nativeEvent.timestamp) }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"style-mode_date-display_spinner"}
                        itShould="style属性,mode为'date',display为:'spinner'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker testID='DTP13' style={MDDSStyle} mode='date' value={new Date} display='spinner' />
                                <Button title='设置style' onPress={() => { this.setState({ MDDSStyle: STYLES.MDDSStyle }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"style-mode_date-display_compact"}
                        itShould="style属性,mode为'date',display为:'compact'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker testID='DTP14' style={MDDCStyle} mode='date' value={new Date} display='compact' />
                                <Button title='设置style' onPress={() => { this.setState({ MDDCStyle: STYLES.MDDCStyle }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"style-mode_time"}
                        itShould="style属性,mode为'time'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker testID='DTP15' style={MTStyle} mode='time' value={new Date} display='compact' />
                                <Button title='设置style' onPress={() => { this.setState({ MTStyle: STYLES.MTStyle }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"is24Hour"}
                        itShould={`change is24Hour`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker testID='DTP5' style={STYLES.defaultPickerStyle} mode='time' value={new Date} is24Hour={is24Hour} />
                                <Button title='设置is24Hour' onPress={() => { this.setState({ is24Hour: !is24Hour }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"maximumDate"}
                        itShould={`change maximumDate`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker testID='DTP6' style={{ ...STYLES.defaultPickerStyle, height: 200 }} mode='date' value={new Date} maximumDate={maximumDate} />
                                <Button title='设置maximumDate' onPress={() => { this.setState({ maximumDate: new Date('2035-10-01') }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"minimumDate"}
                        itShould={`change minimumDate`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker display='spinner' testID='DTP7' style={{ ...STYLES.defaultPickerStyle, height: 200 }} mode='date' value={new Date} minimumDate={minimumDate} />
                                <Button title='设置minimumDate' onPress={() => { this.setState({ minimumDate: new Date('2019-10-01') }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"disabled-mode_date-display_spinner"}
                        itShould="disabled属性,mode为'date',display为:'spinner'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker display='spinner' testID='DTP8' style={{ width: 300, height: 200 }}
                                    mode='date' value={new Date} disabled={MDDSDisabled} />
                                <Button title='设置disabled' onPress={() => { this.setState({ MDDSDisabled: !MDDSDisabled }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"disabled-mode_date-display_compact"}
                        itShould="disabled属性,mode为'date',display为:'compact'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker display='compact' testID='DTP16' style={{ width: 300, height: 60 }} mode='date'
                                    value={new Date} disabled={MDDCDisabled} />
                                <Button title='设置disabled' onPress={() => { this.setState({ MDDCDisabled: !MDDCDisabled }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"disabled-mode_time"}
                        itShould="disabled属性,mode为'time'"
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker testID='DTP17' style={{ width: 300, height: 200 }} mode='time' value={new Date} disabled={MTDisabled} />
                                <Button title='设置disabled' onPress={() => { this.setState({ MTDisabled: !MTDisabled }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"textColor"}
                        itShould={`change textColor`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View>
                                <DateTimePicker display='compact' testID='DTP9' style={STYLES.defaultPickerStyle} mode='date' value={new Date} textColor={textColor} />
                                <Button title='设置textColor' onPress={() => { this.setState({ textColor: '#00ffff' }); setState(true) }} />
                            </View>;
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>
    }
}
export default DateTimePickerTestDemo