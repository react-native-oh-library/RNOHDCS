import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {BottomNavigation, Icon} from 'react-native-material-ui';

const BottomNavigationDome = () => {
  const [state, setState] = useState({active: 'today'});
  return (
    <>
      <Tester>
        <ScrollView style={{marginBottom:100}}>
          <TestSuite name="Bottom navigation(底部导航栏，该组件是一个整体，需一起验证所有属性)">
            <TestCase itShould="BottomNavigation.ActionProps:key,icon,label,onPress  BottomNavigationProps:active,hidden,style">
              <View style={styles.rowContainer}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{state.active}</Text>
                  <Icon name={state.active} size={54} />
                </View>
                <BottomNavigation
                  active={state.active}
                  style={{container: {backgroundColor: '#666'}}}>
                  <BottomNavigation.Action
                    active
                    key="today"
                    icon="today"
                    label="today"
                    onPress={() => setState({active: 'today'})}
                  />
                  <BottomNavigation.Action
                    key="people"
                    icon="people"
                    label="people"
                    onPress={() => setState({active: 'people'})}
                  />
                  <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="bookmark-border"
                    onPress={() => setState({active: 'bookmark-border'})}
                  />
                  <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="settings"
                    onPress={() => setState({active: 'settings'})}
                  />
                </BottomNavigation>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Bottom navigation(底部导航栏，该组件是一个整体，需一起验证所有属性，该用例验证额外的样式属性)">
            <TestCase itShould="BottomNavigation.ActionProps:key,icon,label,onPress  BottomNavigationProps:active,hidden,style">
              <View style={styles.rowContainer}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{state.active}</Text>
                  <Icon name={state.active} size={54} />
                </View>
                <BottomNavigation
                  active={state.active}
                  style={{container: {backgroundColor: '#566'}}}>
                  <BottomNavigation.Action
                    active
                    key="today"
                    icon="today"
                    label="today"
                    onPress={() => setState({active: 'today'})}
                    style={{container: {backgroundColor: '#666'}}}
                  />
                  <BottomNavigation.Action
                    key="people"
                    icon="people"
                    label="people"
                    onPress={() => setState({active: 'people'})}
                    style={{active: {color: 'blue'}}}
                  />
                  <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="bookmark-border"
                    onPress={() => setState({active: 'bookmark-border'})}
                    style={{disabled: {fontSize: 30}}}
                  />
                  <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="settings"
                    onPress={() => setState({active: 'settings'})}
                    disabled={true}
                  />
                </BottomNavigation>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
  },
  rowContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 500,
    marginTop: 20,
  },
  badgeContainer: {
    paddingLeft: 24,
  },
  scrollView: {
    marginBottom: 70,
  },
});

export default BottomNavigationDome;
