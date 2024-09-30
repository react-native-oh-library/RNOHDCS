import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'

export function DatePickerExample() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpen1, setModalOpen1] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)
  const [modalOpen3, setModalOpen3] = useState(false)
  const [modalOpen4, setModalOpen4] = useState(false)
  const [modalOpenText, setModalOpenText] = useState('')
  const [modalOpenText1, setModalOpenText1] = useState('')
  const [modalOpenText2, setModalOpenText2] = useState('')
  const [modalOpenText3, setModalOpenText3] = useState('')
  const [modalOpenText4, setModalOpenText4] = useState('')
  const [modalTimeOpen, setModalTimeOpen] = useState(false)
  const [modalTimeText, setModalTimeText] = useState('')
  const [modalDateTimeOpen, setModalDateTimeOpen] = useState(false)
  const [modalDateTimeOpen1, setModalDateTimeOpen1] = useState(false)
  const [modalDateTimeOpen2, setModalDateTimeOpen2] = useState(false)
  const [modalDateTimeOpen3, setModalDateTimeOpen3] = useState(false)
  const [modalDateTimeOpen4, setModalDateTimeOpen4] = useState(false)
  const [modalDateTimeText, setModalDateTimeText] = useState('')
  const [modalDateTimeText1, setModalDateTimeText1] = useState('')
  const [modalDateTimeText2, setModalDateTimeText2] = useState('')
  const [modalDateTimeText3, setModalDateTimeText3] = useState('')
  const [modalDateTimeText4, setModalDateTimeText4] = useState('')
  const [dateText, setDateText] = useState('')
  const [dateText1, setDateText1] = useState('')
  const [dateText2, setDateText2] = useState('')
  const [dateText3, setDateText3] = useState('')
  const [dateText4, setDateText4] = useState('')
  const [dateTimeText, setDateTimeText] = useState('')
  const [dateTimeText1, setDateTimeText1] = useState('')
  const [dateTimeText2, setDateTimeText2] = useState('')
  const [dateTimeText3, setDateTimeText3] = useState('')
  const [dateTimeText4, setDateTimeText4] = useState('')
  const [timeText, setTimeText] = useState('')
  return (
    <Tester>
      <ScrollView style={styles.container}>
        <TestSuite name='DatePickerDemo'>
          <TestCase itShould='{modal:false,mode:date}'>
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode='date'
                modal={false}
                date={new Date()}
                onDateChange={e => {
                  // time is Change
                  setDateText(e.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateText}</Text>
          <TestCase itShould="{modal:false,mode:'date'. date:'2024-08-03'}">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode='date'
                modal={false}
                date={new Date("2024-08-03")}
                onDateChange={e => {
                  // time is Change
                  setDateText1(e.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateText1}</Text>
          <TestCase itShould="{modal:false,mode:'date', date:'2024-08-08'}">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode='date'
                modal={false}
                date={new Date("2024-08-08")}
                onDateChange={e => {
                  // time is Change
                  setDateText2(e.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateText2}</Text>
          <TestCase itShould="{modal:false,mode:'date',minimumDate:'2024-08-01','maximumDate:'2024-08-08'">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode='date'
                modal={false}
                minimumDate={new Date('2024-08-01')}
                maximumDate={new Date('2024-08-08')}
                onDateChange={e => {
                  // time is Change
                  setDateText3(e.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateText3}</Text>
          <TestCase itShould="{modal:false,mode:'date',minimumDate:'2024-06-07','maximumDate:'2024-07-15'">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode='date'
                modal={false}
                minimumDate={new Date('2024-06-07')}
                maximumDate={new Date('2024-07-15')}
                onDateChange={e => {
                  // time is Change
                  setDateText4(e.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateText4}</Text>
          <TestCase itShould="{modal:false,mode:'datetime'}">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode={'datetime'}
                modal={false}
                onDateChange={e => {
                  // time is Change
                  setDateTimeText(e?.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateTimeText}</Text>
          <TestCase itShould="{modal:false,mode:'datetime', date:'2024-08-05'}">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode={'datetime'}
                modal={false}
                date={new Date("2024-08-05")}
                onDateChange={e => {
                  // time is Change
                  setDateTimeText1(e?.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateTimeText1}</Text>
          <TestCase itShould="{modal:false,mode:'datetime', date:'2024-08-07'}">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode={'datetime'}
                modal={false}
                date={new Date("2024-08-07")}
                onDateChange={e => {
                  // time is Change
                  setDateTimeText2(e?.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateTimeText2}</Text>
          <TestCase itShould="{modal:false,mode:'datetime',minimumDate:'2024-06-07','maximumDate:'2024-07-15'}">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode={'datetime'}
                modal={false}
                minimumDate={new Date('2024-06-07')}
                maximumDate={new Date('2024-07-15')}
                onDateChange={e => {
                  // time is Change
                  setDateTimeText3(e?.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateTimeText3}</Text>
          <TestCase itShould="{modal:false,mode:'datetime',minimumDate:'2024-08-01','maximumDate:'2024-08-05'}">
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%', }}
                mode={'datetime'}
                modal={false}
                minimumDate={new Date('2024-08-01')}
                maximumDate={new Date('2024-08-05')}
                onDateChange={e => {
                  // time is Change
                  setDateTimeText4(e?.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{dateTimeText4}</Text>
          <TestCase itShould='modal:false,mode:time'>
            <ScrollView>
              <DatePicker
                style={{ height: 200, width: '100%' }}
                mode='time'
                modal={false}
                onDateChange={e => {
                  // time is Change
                  setTimeText(e.nativeEvent.timestamp)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{timeText}</Text>

          {/* //modal模式 */}
          <TestCase itShould='{modal:ture,mode:date}'>
            <ScrollView>
              <Button title='打开日期modal,mode:date' onPress={() => {
                setModalOpen(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%', }}
                mode='date'
                modal
                open={modalOpen}
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalOpenText(e?.nativeEvent.timestamp)
                  setModalOpen(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalOpenText(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalOpen(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalOpenText}</Text>
          <TestCase itShould="{modal:ture,mode:date, date:'2024-08-05'}">
            <ScrollView>
              <Button title='打开日期modal,mode:date' onPress={() => {
                setModalOpen1(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%', }}
                mode='date'
                modal
                open={modalOpen1}
                date={new Date("2024-08-05")}
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalOpenText1(e?.nativeEvent.timestamp)
                  setModalOpen1(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalOpenText1(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalOpen1(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalOpenText1}</Text>
          <TestCase itShould="{modal:ture,mode:date, date:'2024-08-10'}">
            <ScrollView>
              <Button title='打开日期modal,mode:date' onPress={() => {
                setModalOpen2(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%', }}
                mode='date'
                modal
                open={modalOpen2}
                date={new Date("2024-08-10")}
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalOpenText2(e?.nativeEvent.timestamp)
                  setModalOpen2(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalOpenText2(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalOpen2(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalOpenText2}</Text>
          <TestCase itShould="{modal:ture,mode:date, minimumDate:'2024-08-01', maximumDate:'2024-08-05'}">
            <ScrollView>
              <Button title='打开日期modal,mode:date' onPress={() => {
                setModalOpen3(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%', }}
                mode='date'
                modal
                open={modalOpen3}
                minimumDate={new Date('2024-08-01')}
                maximumDate={new Date('2024-08-05')}
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalOpenText3(e?.nativeEvent.timestamp)
                  setModalOpen3(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalOpenText3(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalOpen3(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalOpenText3}</Text>
          <TestCase itShould="{modal:ture,mode:date, minimumDate:'2024-07-01', maximumDate:'2024-08-15'}">
            <ScrollView>
              <Button title='打开日期modal,mode:date' onPress={() => {
                setModalOpen4(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%', }}
                mode='date'
                modal
                open={modalOpen4}
                minimumDate={new Date('2024-07-01')}
                maximumDate={new Date('2024-08-15')}
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalOpenText4(e?.nativeEvent.timestamp)
                  setModalOpen4(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalOpenText4(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalOpen4(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalOpenText4}</Text>

          <TestCase itShould='modal:true,mode:datetime'>
            <ScrollView>
              <Button title="打开时间modal,mode:datetime" onPress={() => {
                setModalDateTimeOpen(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%' }}
                mode={'datetime'}
                open={modalDateTimeOpen}
                modal
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalDateTimeText(e.nativeEvent.timestamp)
                  setModalDateTimeOpen(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalDateTimeText(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalDateTimeOpen(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalDateTimeText}</Text>
          <TestCase itShould="modal:true,mode:datetime, date: '2024-08-07'">
            <ScrollView>
              <Button title="打开时间modal,mode:datetime" onPress={() => {
                setModalDateTimeOpen1(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%' }}
                mode={'datetime'}
                open={modalDateTimeOpen1}
                date={new Date('2024-08-07')}
                modal
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalDateTimeText1(e.nativeEvent.timestamp)
                  setModalDateTimeOpen1(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalDateTimeText1(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalDateTimeOpen1(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalDateTimeText1}</Text>
          <TestCase itShould="modal:true,mode:datetime, date: '2024-08-03'">
            <ScrollView>
              <Button title="打开时间modal,mode:datetime" onPress={() => {
                setModalDateTimeOpen2(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%' }}
                mode={'datetime'}
                open={modalDateTimeOpen2}
                date={new Date('2024-08-03')}
                modal
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalDateTimeText2(e.nativeEvent.timestamp)
                  setModalDateTimeOpen2(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalDateTimeText2(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalDateTimeOpen2(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalDateTimeText2}</Text>
          <TestCase itShould="modal:true,mode:datetime, minimumDate: '2024-07-05', maximumDate:'2024-08-05'">
            <ScrollView>
              <Button title="打开时间modal,mode:datetime" onPress={() => {
                setModalDateTimeOpen4(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%' }}
                mode={'datetime'}
                open={modalDateTimeOpen4}
                minimumDate={new Date('2024-07-05')}
                maximumDate={new Date('2024-08-05')}
                modal
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalDateTimeText4(e.nativeEvent.timestamp)
                  setModalDateTimeOpen4(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalDateTimeText4(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalDateTimeOpen4(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalDateTimeText4}</Text>
          <TestCase itShould="modal:true,mode:datetime, minimumDate: '2024-07-05', maximumDate:'2024-07-15'">
            <ScrollView>
              <Button title="打开时间modal,mode:datetime" onPress={() => {
                setModalDateTimeOpen3(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%' }}
                mode={'datetime'}
                open={modalDateTimeOpen3}
                minimumDate={new Date('2024-07-05')}
                maximumDate={new Date('2024-07-15')}
                modal
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalDateTimeText3(e.nativeEvent.timestamp)
                  setModalDateTimeOpen3(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalDateTimeText3(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalDateTimeOpen3(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalDateTimeText3}</Text>
          <TestCase itShould='modal:true,mode:time'>
            <ScrollView>
              <Button title="打开时间modal,mode:time" onPress={() => {
                setModalTimeOpen(true)
              }}></Button>
              <DatePicker
                style={{ height: 'auto', width: '100%' }}
                mode='time'
                modal
                open={modalTimeOpen}
                date={new Date()}
                onConfirm={e => {
                  // onConfirm is clicked。
                  setModalTimeText(e?.nativeEvent?.timestamp)
                  setModalTimeOpen(false)
                }}
                onDateChange={e => {
                  // time is Change
                  setModalTimeText(e.nativeEvent.timestamp)
                }}
                onCancel={() => {
                  // onCancel is clicked。
                  setModalTimeOpen(false)
                }}
              />
            </ScrollView>
          </TestCase>
          <Text style={{ color: '#ffff' }}>{modalTimeText}</Text>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
  },
});