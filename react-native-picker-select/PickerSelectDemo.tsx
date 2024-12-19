import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Tester, TestSuite, TestCase as _TestCase } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

// 随机颜色获取
const colorRange = ['red', 'yellow', 'blue', 'orange', 'purple'];
// picker select items
const sports = [
  {
    label: 'Orange',
    value: 'orange',
    key: 'orange',
    inputLabel: 'Orange!',
    testID: 'e2e-orange'
  },
  {
    label: 'Football',
    value: 'football',
    key: 'football'
  },
  {
    label: 'Baseball',
    value: 'baseball',
    key: 'baseball'
  },
  {
    label: 'Hockey',
    value: 'hockey',
    key: 'hockey'
  }
];

export default function PickerSelectDemo() {
  const favSport5 = useRef<RNPickerSelect | null>(null);
  const [placeholder, setPlaceholder] = useState({
    label: 'Select a sport...',
    value: null,
    color: '#9EA0A4'
  })
  const [selectVal, setSelectVal] = useState({
    previousFavSport5: null,
    favSport5: null,
    disabled: false,
    value: "",
    itemKey: "baseball",
    style: "",
    darkTheme: false,
    pickerProps: {
      itemStyle: { color: "yellow" }
    },
    Icon: "",
    textInputProps: { secureTextEntry: false },
    touchableWrapperProps: { style: { backgroundColor: "#fff" } },
    onOpen: "onOpen",
    useNativeAndroidPickerStyle: false,
    fixAndroidTouchableBug: false,
    doneText: "Done",
    onUpArrow: "",
    onDownArrow: "",
    onDonePress: "",
    onClose: "",
    modalProps: { transparent: false },
    touchableDoneProps: { style: { opacity: 0.2 } }
  });


  const InputAccessoryView = () => {
    return (
      <View style={defaultStyles.modalViewMiddle}>
        <TouchableWithoutFeedback
          onPress={() => {
            setSelectVal({ ...selectVal, favSport5: selectVal.previousFavSport5 });
            favSport5.current!.togglePicker(true);
          }}
          hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <View testID="needed_for_touchable">
            <Text
              style={[
                defaultStyles.done,
                { fontWeight: 'normal', color: 'red' },
              ]}>
              Cancel
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Text>Name | Prefer</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            favSport5.current!.togglePicker(true);
          }}
          hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <View testID="needed_for_touchable">
            <Text style={defaultStyles.done}>Done</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  return (
    <ScrollView style={{ height: '100%' }}>
      <Tester>
        <TestSuite name="PickerSelectDemo">
          <_TestCase itShould="show items">
            <View>
              <RNPickerSelect
                items={[{
                  label: '123', value: '123', key: '123',
                }, {
                  label: '456', value: '456', key: '456',
                }, {
                  label: '789', value: '789', key: '789',
                }]}
                onValueChange={value => { }}
              />
            </View>
          </_TestCase>
          <TestCase
            itShould="show placeholder onValueChange change value"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{placeholder.label}</Text>
                  <RNPickerSelect
                    placeholder={placeholder}
                    items={sports}
                    onValueChange={value => {
                      setPlaceholder({ ...placeholder, label: value + '-placeholder', value });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="toggle disabled"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{selectVal.disabled}</Text>
                  <RNPickerSelect
                    items={sports}
                    onValueChange={value => {
                      setSelectVal({ ...selectVal, disabled: !selectVal.disabled });
                      setState(true);
                    }}
                    disabled={selectVal.disabled}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="change value"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{selectVal.value}</Text>
                  <RNPickerSelect
                    items={sports}
                    value={selectVal.value}
                    onValueChange={value => {
                      setSelectVal({ ...selectVal, value: value });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="change itemKey"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{selectVal.itemKey}</Text>
                  <RNPickerSelect
                    items={sports}
                    itemKey={selectVal.itemKey}
                    onValueChange={(value: string, index: number) => {
                      const curKey = sports.find(ite => ite.value === value)?.key || '';
                      setSelectVal({ ...selectVal, itemKey: curKey });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <_TestCase itShould="default style">
            <View style={{ padding: 10 }}>
              <Text style={{ color: "#000" }}>default style</Text>
              <RNPickerSelect
                items={sports}
                onValueChange={value => { }}
              />
            </View>
          </_TestCase>
          <_TestCase itShould="custom style">
            <View style={{ padding: 10 }}>
              <Text style={{ color: "#000" }}>custom style</Text>
              <View>
                <RNPickerSelect
                  style={styles}
                  items={sports}
                  onValueChange={value => { }}
                />
              </View>
              <View>
                <RNPickerSelect
                  style={styles2}
                  items={sports}
                  onValueChange={value => { }}
                />
              </View>
            </View>
          </_TestCase>
          <TestCase
            itShould="toggle darkTheme"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{selectVal.darkTheme}</Text>
                  <RNPickerSelect
                    items={sports}
                    darkTheme={selectVal.darkTheme}
                    onValueChange={(value) => {
                      setSelectVal({ ...selectVal, darkTheme: !selectVal.darkTheme });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="change pickerProps"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{JSON.stringify(selectVal.pickerProps)}</Text>
                  <RNPickerSelect
                    items={sports}
                    pickerProps={selectVal.pickerProps}
                    onValueChange={(value) => {
                      const num = Math.round(Math.random() * 5);
                      setSelectVal({ ...selectVal, pickerProps: { itemStyle: { color: colorRange[num] } } });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <_TestCase itShould="change Icon">
            <View>
              <Text style={{ color: "#000" }}>icon 1</Text>
              <RNPickerSelect
                items={sports}
                Icon={() => {
                  return <Image source={require('./assets/expo.png')} style={{ width: 16, height: 16 }} />;
                }}
                onValueChange={(value) => { }}
              />
            </View>
          </_TestCase>
          <_TestCase itShould="change Icon2">
            <View>
              <Text style={{ color: "#000" }}>icon 2</Text>
              <RNPickerSelect
                items={sports}
                Icon={() => {
                  return <Image source={require('./assets/react-native-logo.png')} style={{ width: 16, height: 16 }} />;
                }}
                onValueChange={(value) => { }}
              />
            </View>
          </_TestCase>
          <TestCase
            itShould="toggle textInputProps"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{JSON.stringify(selectVal.textInputProps)}</Text>
                  <RNPickerSelect
                    items={sports}
                    textInputProps={selectVal.textInputProps}
                    onValueChange={(value) => { }}
                    onDonePress={() => {
                      setSelectVal({ ...selectVal, textInputProps: { secureTextEntry: !selectVal.textInputProps.secureTextEntry } });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="toggle touchableWrapperProps"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{JSON.stringify(selectVal.touchableWrapperProps)}</Text>
                  <RNPickerSelect
                    items={sports}
                    touchableWrapperProps={selectVal.touchableWrapperProps}
                    onValueChange={(value) => {
                      const num = Math.round(Math.random() * 5);
                      setSelectVal({ ...selectVal, touchableWrapperProps: { style: { backgroundColor: colorRange[num] } } });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="onOpen callback"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{selectVal.onOpen}</Text>
                  <RNPickerSelect
                    items={sports}
                    onOpen={() => {
                      setSelectVal({ ...selectVal, onOpen: Math.random() + ' aaaaaa' });
                      setState(true);
                    }}
                    onValueChange={(value) => { }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <_TestCase itShould="InputAccessoryView custom component">
            <View>
              <RNPickerSelect
                ref={favSport5}
                items={sports}
                InputAccessoryView={InputAccessoryView}
                onValueChange={value => {
                  setSelectVal({ ...selectVal, favSport5: value });
                }}
                onOpen={() => {
                  setSelectVal({ ...selectVal, previousFavSport5: selectVal.favSport5 });
                }}
              />
            </View>
          </_TestCase>
          <_TestCase itShould="InputAccessoryView return null">
            <View>
              <RNPickerSelect
                items={sports}
                InputAccessoryView={() => null}
                onValueChange={(value) => { }}
              />
            </View>
          </_TestCase>
          <TestCase
            itShould="change doneText"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{selectVal.doneText}</Text>
                  <RNPickerSelect
                    items={sports}
                    doneText={selectVal.doneText}
                    onValueChange={(value) => {
                      setSelectVal({ ...selectVal, doneText: value.substr(0, 5) });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="onUpArrow callback"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <RNPickerSelect
                    items={sports}
                    onUpArrow={() => { setState(true) }}
                    onValueChange={(value) => { }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="onDownArrow callback"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <RNPickerSelect
                    items={sports}
                    onDownArrow={() => { setState(true) }}
                    onValueChange={(value) => { }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="onDonePress callback"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <RNPickerSelect
                    items={sports}
                    onDonePress={() => { setState(true) }}
                    onValueChange={(value) => { }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="onClose callback"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <RNPickerSelect
                    items={sports}
                    onClose={() => { setState(true) }}
                    onValueChange={(value) => { }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="change modalProps transparent"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{JSON.stringify(selectVal.modalProps)}</Text>
                  <RNPickerSelect
                    items={sports}
                    modalProps={selectVal.modalProps}
                    onValueChange={(value) => {
                      setSelectVal({ ...selectVal, modalProps: { transparent: !selectVal.modalProps.transparent } });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="change touchableDoneProps color"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={{ color: "#000" }}>{JSON.stringify(selectVal.touchableDoneProps)}</Text>
                  <RNPickerSelect
                    items={sports}
                    touchableDoneProps={selectVal.touchableDoneProps}
                    onValueChange={(value) => {
                      setSelectVal({ ...selectVal, touchableDoneProps: { style: { opacity: Math.random() } } });
                      setState(true);
                    }}
                  />
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <View style={{ width: 'auto', height: 60 }}></View>

        </TestSuite>
      </Tester>
    </ScrollView >
  );
}

// TestCase
function TestCase<TState = undefined>({
  itShould,
  modal,
  initialState,
  arrange,
  assert,
}: {
  itShould: string;
  modal?: boolean;
  initialState: TState;
  arrange: SmartManualTestCaseProps<TState>['arrange'];
  assert: SmartManualTestCaseProps<TState>['assert'];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      initialState={initialState}
      arrange={arrange}
      assert={assert}
    />
  );
}

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    width: 200,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  }
});
const styles2 = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    color: 'green',
    paddingRight: 30,
  },
  inputAndroid: {
    width: 200,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 8,
    color: 'green',
    paddingRight: 30,
  }
});
