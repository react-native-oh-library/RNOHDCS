import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View,
  ScrollView,
  ViewProps,
  Image,
} from 'react-native';
import {
  Dropdown,
  MultiSelect,
  SelectCountry,
  IDropdownRef,
} from 'react-native-element-dropdown';
import {TestSuite} from '@rnoh/testerino';
import {Button, TestCase} from '../components';

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
        padding: 10,
        paddingHorizontal: 50,
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
          label="Open dropdown list"
        />
        <Button
          onPress={() => {
            ref.current?.close();
          }}
          label="Close dropdown list"
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
          label="Open dropdown list"
        />
        <Button
          onPress={() => {
            ref.current?.close();
          }}
          label="Close dropdown list"
        />
      </Row>

      <MultiSelect
        ref={ref}
        excludeItems={[{label: 'Item 1', value: '1', image: imageSource}]}
        maxSelect={3}
        activeColor="#FF8A2D2D"
        mode="auto"
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
        renderLeftIcon={() => <Text style={{color: 'blue'}}>icon</Text>}
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
          label="Open dropdown list"
        />
        <Button
          onPress={() => {
            ref.current?.close();
          }}
          label="Close dropdown list"
        />
      </Row>
      <SelectCountry
        confirmSelectItem
        onConfirmSelectItem={() => {}}
        ref={ref}
        activeColor="#FF8A2D2D"
        mode="modal"
        disable={disabled}
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
        labelField="label"
        imageField="image"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={(e: any) => {
          setCountry(e.value);
        }}
        imageStyle={{width: 15, height: 15}}
        {...props}
      />
    </>
  );
};
export const DropdownTest = () => {
  return (
    <ScrollView>
      <TestSuite name="Dropdown Demo ">
        <TestCase.Example itShould="dropdownPosition='auto'">
          <DropdownDemo />
        </TestCase.Example>
        <TestCase.Example itShould="dropdownPosition='top'">
          <DropdownDemo dropdownPosition="top" />
        </TestCase.Example>
        <TestCase.Example itShould="dropdownPosition='bottom'">
          <DropdownDemo dropdownPosition="bottom" />
        </TestCase.Example>
      </TestSuite>
      <TestSuite name="MultiSelect Demo">
        <TestCase.Example itShould="maxSelect=3 excludeItems=item1">
          <MultiSelectDemo />
        </TestCase.Example>
      </TestSuite>
      <TestSuite name="SelectCountry Demo">
        <TestCase.Example itShould="modal mode">
          <SelectCountryDemo />
        </TestCase.Example>
      </TestSuite>
    </ScrollView>
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
