import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import Hyperlink from 'react-native-hyperlink'
export function NativeHyperlinkDemoCom() {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)

  return (
    <Tester>
      <ScrollView style={styles.container}>
        <TestSuite name='HyperlinkDemo'>
          <TestCase itShould='{injectViewProps}'>
            <Hyperlink
              style={{ height: 150, width: '100%' }}
              linkDefault
              injectViewProps={url => ({
                testID: url === 'http://link.com' ? 'id1' : 'id2',
                style: url === 'https://link.com' ? { color: 'red' } : { color: 'blue' },
                //any other props you wish to pass to the component
              })}
            >
              <Text>You can pass props to clickable components matched by url.
                <Text>This url looks red https://link.com
                </Text> and this url looks blue https://link2.com </Text>
            </Hyperlink>
          </TestCase>

          <TestCase itShould='{defalut"}'>
            <Hyperlink
              style={{ height: 150, width: '100%' }}
              linkDefault
            >
              <Text>You can pass props to clickable components matched by url.
                <Text>This url looks red https://link.com
                </Text> and this url looks blue https://link2.com </Text>
            </Hyperlink>
          </TestCase>
          <TestCase itShould='{style"}'>
            <Hyperlink
              style={{ height: 150, width: '100%', backgroundColor: 'red' }}
              linkDefault
            >
              <Text>You can pass props to clickable components matched by url.
                <Text>This url looks red 10.2.22.2
                </Text> and this url looks blue https://10.2.22.2 </Text>
            </Hyperlink>
          </TestCase>
          <TestCase itShould='{linkText"}'>
            <Hyperlink
              style={{ height: 150, width: '100%', backgroundColor: 'red' }}
              linkDefault
              linkText="You"
              linkStyle={{ fontWeight: '900' }}
            >
              <Text>You can pass props to clickable components matched by url.
                <Text>This url looks red 10.2.22.2
                </Text> and this url looks blue https://10.2.22.2 </Text>
            </Hyperlink>
          </TestCase>
          <TestCase itShould='{onPress"}'>
            <Hyperlink
              style={{ height: 150, width: '100%', backgroundColor: 'red' }}
              linkDefault
              linkText="You"
              linkStyle={{ fontWeight: '900' }}
            >
              <Text onPress={() => {
                setOpen(true)
              }}>You can pass props to clickable components matched by url.
                <Text>This url looks red 10.2.22.2
                </Text> and this url looks blue https://10.2.22.2
                {
                  open && <Text > 点击事件触发了</Text>
                }
              </Text>
            </Hyperlink>
          </TestCase>
          <TestCase itShould='{onLongPress"}'>
            <Hyperlink
              style={{ height: 150, width: '100%', backgroundColor: 'red' }}
              linkDefault
              linkText="You"
              linkStyle={{ fontWeight: '900' }}
            >

              <Text onLongPress={() => {
                setOpen1(true)
              }}>You can pass props to clickable components matched by url.
                This url looks red 10.2.22.2
                and this url looks blue https://10.2.22.2
                {
                  open1 && <Text> 点击事件触发了</Text>
                }
              </Text>
            </Hyperlink>
          </TestCase>
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

