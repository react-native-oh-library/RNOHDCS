import * as React from 'react';
import { Alert, ScrollView, View, Button } from 'react-native';
import { Portal, Text, TouchableRipple, Dialog, MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';

import { TestSuite, TestCase, Tester } from '@rnoh/testerino';

function PortalDemo() {

  const [dialogVisible, setdialogVisible] = React.useState(false);

  const [theme, setTheme] = React.useState<MD3Theme>(MD3LightTheme);

  const toggleTheme = () => {
    if (!theme.dark) {
      setTheme(MD3DarkTheme)
    } else {
      setTheme(MD3LightTheme)
    }
  }
  
  const isDark = theme.dark;

  return (
    <Portal.Host>
      <ScrollView>
        <Tester>
          <TestSuite name='Portal'>
            <TestCase itShould={"Portal style: theme=" + (isDark ? ' MD3DarkTheme' : ' MD3LightTheme')}>
              <Portal theme={theme}>
                <Dialog onDismiss={() => {
                  setdialogVisible(false)
                }} visible={dialogVisible} style={{
                  position: 'absolute',
                  top: '10%',
                  left: 0,
                  right: 0,
                }}>
                  <Dialog.Title>Invote Code</Dialog.Title>
                  <Dialog.Content>
                    <Text>HHFDF-FJJF-OOP0</Text>
                    <Button title='close' onPress={() => setdialogVisible(false)}></Button>
                  </Dialog.Content>
                </Dialog>
              </Portal>

              <View style={{ gap: 20, padding: 10 }}>
                <Text style={{color: 'red', fontWeight: '600'}}>说明：Portal.Host 与 portal 组件需组合一起使用, 外层已包裹Portal.Host组件</Text>
                {/* <Text style={{color: 'red', fontWeight: '600'}}>portal.Host</Text> */}
                <Text>点击 toggleTheme 可以切换portal theme主题，当前主题:  {isDark ? ' MD3DarkTheme' : ' MD3LightTheme'}</Text>
                <Button title='toggleTheme' onPress={toggleTheme}></Button>
                <Button title='openDialog' onPress={() => {
                  setdialogVisible(!dialogVisible)
                }}></Button>
              </View>
            </TestCase>
          </TestSuite>

        </Tester>
      </ScrollView>
    </Portal.Host>
  )

}


export default PortalDemo;