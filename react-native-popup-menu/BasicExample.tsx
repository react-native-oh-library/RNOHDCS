import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const BasicExample = () => (
  <MenuProvider style={{flexDirection: 'column', padding: 30}}>
    <Text style={css.title}>MenuTrigger</Text>
    <Menu onSelect={value => alert(`Selected number: ${value}`)} style={css.menu}>
      <MenuTrigger text='Select option' />
      <MenuOptions>
        <MenuOption value={1} text='One' />
        <MenuOption value={2}>
          <Text style={{color: 'red'}}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text='Three' />
      </MenuOptions>
    </Menu>

    <Text style={css.title}>MenuTrigger disabled = true</Text>
    <Menu onSelect={value => alert(`Selected number: ${value}`)} style={css.menu}>
      <MenuTrigger text='Select option' disabled />
      <MenuOptions>
        <MenuOption value={1} text='One' />
        <MenuOption value={2}>
          <Text style={{color: 'red'}}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text='Three' />
      </MenuOptions>
    </Menu>

    <Text style={css.title}>MenuTrigger triggerOnLongPress = true</Text>
    <Menu onSelect={value => alert(`Selected number: ${value}`)} style={css.menu}>
      <MenuTrigger text='Select option' triggerOnLongPress />
      <MenuOptions>
        <MenuOption value={1} text='One' />
        <MenuOption value={2}>
          <Text style={{color: 'red'}}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text='Three' />
      </MenuOptions>
    </Menu>

    <Text style={css.title}>MenuTrigger onAlternativeAction callback</Text>
    <Menu onSelect={value => alert(`Selected number: ${value}`)} style={css.menu}>
      <MenuTrigger text='Select option' onAlternativeAction={() => {
        console.log(` MenuTrigger onAlternativeAction runing`)
      }} />
      <MenuOptions>
        <MenuOption value={1} text='One' />
        <MenuOption value={2}>
          <Text style={{color: 'red'}}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text='Three' />
      </MenuOptions>
    </Menu>

    <Text style={css.title}>MenuTrigger testID = menuTest</Text>
    <Menu onSelect={value => alert(`Selected number: ${value}`)} style={css.menu}>
      <MenuTrigger text='Select option' testID="menuTest" onAlternativeAction={() => {
        console.log(` MenuTrigger onAlternativeAction runing`)
      }} />
      <MenuOptions>
        <MenuOption value={1} text='One' />
        <MenuOption value={2}>
          <Text style={{color: 'red'}}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text='Three' />
      </MenuOptions>
    </Menu>
  </MenuProvider>
);
const css = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  menu: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  }
})
export default BasicExample;