import React, { useState } from 'react'
import { SafeAreaView, Button, Text, Modal, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

export const DatetimepickerDemo = () => {
    const [date, setDate] = useState(new Date);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(false)

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode: React.SetStateAction<string>) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView>
            <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={showTimepicker} title="Show time picker!" />
            <Text>selected: {date.toLocaleString()}</Text>
            <Modal visible={show} onRequestClose={() => setShow(false)}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <DateTimePicker
                        mode={mode as any}//partially (仅支持 date/time 模式)
                        style={{ width: 300, height: 150, backgroundColor: '#FFFFDD' }}
                        display='default' //partially (支持"default"，"spinner"，"compact"，"inline")
                        onChange={onChange}//partially (仅支持 type 为 set 类型)
                        value={date}
                        textColor='#ff00ff'
                        disabled={disabled}
                    />
                </View>
            </Modal>
        </SafeAreaView>
    );
};
export default DatetimepickerDemo