import * as React from 'react';
import {  View,StyleSheet} from 'react-native';
import {Menu,Divider,Button} from 'react-native-paper';
type MenuVisibility = {
  [key: string]: boolean | undefined;
};

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function MenuDemo() { 
  const [visible, setVisible] = React.useState<MenuVisibility>({});
  const _toggleMenu = (name: string) => () =>
  setVisible({ ...visible, [name]: !visible[name] });
  const _getVisible = (name: string) => !!visible[name];

  return (
    <Tester>
    <TestSuite name='MenuDemo' >
        <TestCase itShould='default'>
           <View style={styles.alignCenter}>
            <Menu
                visible={_getVisible('menu1')}
                onDismiss={_toggleMenu('menu1')}
                anchor={
                  <Button mode="outlined" onPress={_toggleMenu('menu1')}>
                                    default Menu
                                  </Button>
                }
              >
                <Menu.Item onPress={() => {}} title="Undo" />
                <Menu.Item onPress={() => {}} title="Redo" />
                <Divider style={styles.md3Divider} />
                <Menu.Item onPress={() => {}} title="Cut" disabled />
                <Menu.Item onPress={() => {}} title="Copy" disabled />
                <Menu.Item onPress={() => {}} title="Paste" />
              </Menu>
           </View>

        </TestCase>
        <TestCase itShould='Menu with icons'>
        <View style={styles.alignCenter}>
            <Menu
              visible={_getVisible('menu2')}
              onDismiss={_toggleMenu('menu2')}
              anchor={
                <Button mode="outlined" onPress={_toggleMenu('menu2')}>
                  Menu with icons
                </Button>
              }
            >
              <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
              <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
              <Divider style={styles.md3Divider} />
              <Menu.Item
                leadingIcon="content-cut"
                onPress={() => {}}
                title="Cut"
                disabled
              />
              <Menu.Item
                leadingIcon="content-copy"
                onPress={() => {}}
                title="Copy"
                disabled
              />
              <Menu.Item
                leadingIcon="content-paste"
                onPress={() => {}}
                title="Paste"
              />
            </Menu>
          </View>
        </TestCase>
     </TestSuite>
    </Tester>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor:'#fff',
    flex: 1,
  },
  container: {
    paddingTop: 48,
  },
  list: {
    marginTop: 48,
  },
  alignCenter: {
    alignItems: 'center',
  },
  md3Divider: {
    marginVertical: 8,
  },
  bottomMenu: { width: '40%' },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default MenuDemo;