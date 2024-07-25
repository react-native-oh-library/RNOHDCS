import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

export function FlashMessageTest() {
  return (
    <Tester>
      <TestSuite name="FlashMessage">
        <TestCase itShould="FlashMessage the theme">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: 'Simple message',
                type: 'info',
                hideOnPress: false,
                animated: false,
                floating: true,
              });
            }}>
            <Text>Simple Floting</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the AutoHide Close">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: 'Floting  AutoHide Close',
                type: 'info',
                onPress: () => {
                  hideMessage();
                },
                autoHide: false,
                hideStatusBar: true,
              });
            }}>
            <Text>AutoHide Close</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderBeforeContent">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: 'show message',
                type: 'info',
                onPress: () => {
                  hideMessage();
                },
                position: 'bottom',
                renderAfterContent: e => {
                  return (
                    <View>
                      <Text>renderBeforeContent</Text>
                    </View>
                  );
                },
              });
            }}>
            <Text>renderBeforeContent</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderCustomContent">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: 'show message',
                type: 'info',
                onPress: () => {
                  hideMessage();
                },
                icon: props => (
                  <Image
                    source={require('./assets/massge_warn.png')}
                    {...props}
                  />
                ),
                renderFlashMessageIcon: (props: any) => (
                  <View style={styles.icon}>
                    <Image
                      source={require('./assets/massge_warn.png')}
                      style={{width: 30, height: 30}}
                      {...props}
                    />
                    <Text>icon title</Text>
                  </View>
                ),
                renderAfterContent: e => {
                  return (
                    <View>
                      <Text>renderCustomContent</Text>
                    </View>
                  );
                },
              });
            }}>
            <Text>renderCustomContent</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderAfterContent">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: 'show message',
                type: 'info',
                onPress: () => {
                  hideMessage();
                },
                titleProps: {
                  style: {color: 'pink', fontSize: 30},
                },
                renderAfterContent: e => {
                  return (
                    <View>
                      <Text>renderAfterContent</Text>
                    </View>
                  );
                },
              });
            }}>
            <Text>renderAfterContent</Text>
          </TouchableOpacity>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 25,
    borderRadius: 5,
    borderWidth: 3,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
