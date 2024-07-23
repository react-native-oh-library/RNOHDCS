import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View,
  ScrollView,
  ViewProps,
  Button,
  Image,
} from 'react-native';
import {
  Dropdown,
  MultiSelect,
  SelectCountry,
  IDropdownRef,
} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('./assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];

const Row = (
  props: ViewProps & {children?: React.ReactNode; fullWidth?: boolean},
) => (
  <View
    {...props}
    style={[
      styles.row,
      props.style,
      props.fullWidth && {
        width: '100%',
        justifyContent: 'space-between',
      },
    ]}
  />
);

const DropdownDemo = (props?: any) => {
  const [value, setValue] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [disabled, setDisable] = useState<boolean>(false);
  const ref = useRef<IDropdownRef>(null);

  return (
    <>
      <Row fullWidth>
        <Text>disable select</Text>
        <Switch
          value={disabled}
          onChange={() => {
            setDisable(!disabled);
          }}
        />
      </Row>
      <Row fullWidth>
        <Button
          onPress={() => {
            ref.current?.open();
          }}
          title="Open dropdown list"
        />
        <Button
          onPress={() => {
            ref.current?.close();
          }}
          title="Close dropdown list"
        />
      </Row>
      <Dropdown
        showsVerticalScrollIndicator
        ref={ref}
        activeColor="#FF8A2D2D"
        mode="default"
        disable={disabled}
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: any) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        {...props}
      />
    </>
  );
};

const MultiSelectDemo = (props?: any) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [disabled, setDisable] = useState<boolean>(false);
  const ref = useRef<IDropdownRef>(null);
  const [search, setSearch] = useState<boolean>(false);

  return (
    <>
      <Row fullWidth>
        <Text>disable select</Text>
        <Switch
          value={disabled}
          onChange={() => {
            setDisable(!disabled);
          }}
        />
      </Row>
      <Row>
        <Text>Show or hide input search</Text>
        <Switch
          value={search}
          onChange={() => {
            setSearch(pre => !pre);
          }}
        />
      </Row>
      <Row fullWidth>
        <Button
          onPress={() => {
            ref.current?.open();
          }}
          title="Open dropdown list"
        />
        <Button
          onPress={() => {
            ref.current?.close();
          }}
          title="Close dropdown list"
        />
      </Row>

      <MultiSelect
        ref={ref}
        excludeItems={[{label: 'Item 1', value: '1', image: imageSource}]}
        maxSelect={3}
        activeColor="#FF8A2D2D"
        mode="modal"
        disable={disabled}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search={search}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        selectedStyle={styles.selectedStyle}
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() =><Image style={{width:15,height:15}} source={imageSource}/>}
        {...props}
      />
    </>
  );
};

const SelectCountryDemo = (props?: any) => {
  const [country, setCountry] = useState<string>('');
  const [disabled, setDisable] = useState<boolean>(false);
  const ref = useRef<IDropdownRef>(null);

  return (
    <>
      <Row fullWidth>
        <Text>disable select</Text>
        <Switch
          value={disabled}
          onChange={() => {
            setDisable(!disabled);
          }}
        />
      </Row>
      <Row fullWidth>
        <Button
          onPress={() => {
            ref.current?.open();
          }}
          title="Open dropdown list"
        />
        <Button
          onPress={() => {
            ref.current?.close();
          }}
          title="Close dropdown list"
        />
      </Row>
      <SelectCountry
        disable={disabled}
        ref={ref}
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        maxHeight={200}
        value={country}
        data={data}
        valueField="value"
        imageField="image"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={e => {
          setCountry(e.value);
        }}
        labelField={'label'}
      />
    </>
  );
};
export const DropdownTest = () => {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Dropdown Demo ">
          <TestCase itShould="dropdownPosition='auto'">
            <DropdownDemo />
          </TestCase>
          <TestCase itShould="dropdownPosition='top'">
            <DropdownDemo dropdownPosition="top" />
          </TestCase>
          <TestCase itShould="dropdownPosition='bottom'">
            <DropdownDemo dropdownPosition="bottom" />
          </TestCase>
        </TestSuite>
        <TestSuite name="MultiSelect Demo">
          <TestCase itShould="maxSelect=3 excludeItems=item1">
            <MultiSelectDemo />
          </TestCase>
        </TestSuite>
        <TestSuite name="SelectCountry Demo">
          <TestCase itShould="">
            <SelectCountryDemo />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'red',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedStyle: {
    borderRadius: 12,
    backgroundColor: '#FF2D3B36',
  },
});
