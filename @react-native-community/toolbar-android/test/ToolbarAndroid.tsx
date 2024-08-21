import React, { useState } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import ToolbarAndroid from "@react-native-community/toolbar-android";
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

function App({}): JSX.Element {
  const [state, setState] = useState<{
    message?: string;
  }>({
    message: undefined,
  });

  const { message } = state;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Tester>
          <TestSuite name={'toolbarAndroidTest'}>
            <TestCase itShould={'set nav image'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../assets/ic_menu_black_24dp.png')}
              />
            </TestCase>
			      <TestCase itShould={'set nav image like {uri, width, height}'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={{uri: 'asset://assets/ic_menu_black_24dp.png', width: 35, height: 35}}
              />
            </TestCase>

            <TestCase itShould={'set logo image like {uri, width, height}'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={{uri: 'asset://assets/ic_menu_black_24dp.png', width: 35, height: 35}}
                logo={{uri: 'asset://assets/logo.png', width: 35, height: 35}}
              />
            </TestCase>

            <TestCase itShould={'set title and subtitle'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../assets/ic_menu_black_24dp.png')}
                logo={require("../assets/logo.png")}
                title={"Title"}
                subtitle={"Subtitle"}
              />
            </TestCase>

            <TestCase itShould={'set title color and subtitle color'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../assets/ic_menu_black_24dp.png')}
                title={"Title"}
                subtitle={"Subtitle"}
                titleColor={"#FF0000"}
                subtitleColor={"#FF00FF"}
              />
            </TestCase>

            <TestCase itShould={'set contentInsetStart'}>
              <ToolbarAndroid
                style={styles.toolbar}
                title={"Title"}
                titleColor={"#000000"}
                subtitle={"Subtitle"}
                subtitleColor={"#000000"}
                contentInsetStart={100}
              />
            </TestCase>

            <TestCase itShould={'set contentInsetEnd'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../assets/ic_menu_black_24dp.png')}
                title={"Title"}
                titleColor={"#000000"}
                subtitle={"Subtitle 测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"}
                subtitleColor={"#000000"}
                contentInsetEnd={100}
              />
            </TestCase>

            <TestCase itShould={'set rtl'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../assets/ic_menu_black_24dp.png')}
                logo={require("../assets/logo.png")}
                title={"Title"}
                titleColor={"#000000"}
                subtitle={"Subtitle"}
                subtitleColor={"#000000"}
                contentInsetStart={10}
                contentInsetEnd={10}
                rtl={true}
              />
            </TestCase>

            <TestCase itShould={'set overflowIcon and actions’s show is always'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../assets/ic_menu_black_24dp.png')}
                logo={require("../assets/logo.png")}
                title={"Title"}
                titleColor={"#000000"}
                subtitle={"Subtitle"}
                subtitleColor={"#000000"}
                contentInsetStart={10}
                contentInsetEnd={10}
                rtl={false}
                overflowIcon={require("../assets/relay.png")}
                actions={[
                  {
                    title: "Action1",
                    icon: require("../assets/setting.png"),
                    show: "always",
                    showWithText: true,
                  },
                  {
                    title: "Action2",
                    icon: require("../assets/setting.png"),
                    show: "always",
                    showWithText: true,
                  },
                  {
                    title: "Action3",
                    icon: require("../assets/setting.png"),
                    show: "always",
                    showWithText: true,
                  },
                  {
                    title: "Action4",
                    icon: require("../assets/setting.png"),
                    show: "always",
                    showWithText: true,
                  },
                ]}
              />
            </TestCase>

            <TestCase itShould={'set actions’s show is never'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../assets/ic_menu_black_24dp.png')}
                logo={require("../assets/logo.png")}
                title={"Title"}
                titleColor={"#000000"}
                subtitle={"Subtitle"}
                subtitleColor={"#000000"}
                contentInsetStart={10}
                contentInsetEnd={10}
                rtl={false}
                actions={[
                  {
                    title: "Action1",
                    icon: require("../assets/setting.png"),
                    show: "never",
                    showWithText: true,
                  },
                  {
                    title: "Action2",
                    icon: require("../assets/setting.png"),
                    show: "never",
                    showWithText: true,
                  },
                  {
                    title: "Action3",
                    icon: require("../assets/setting.png"),
                    show: "never",
                    showWithText: true,
                  },
                  {
                    title: "Action4",
                    icon: require("../assets/setting.png"),
                    show: "never",
                    showWithText: true,
                  },
                ]}
              />
            </TestCase>

            <TestCase itShould={'set actions’s show is ifRoom and onIconClicked callback and onActionSelected callback'}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../assets/ic_menu_black_24dp.png')}
                logo={require("../assets/logo.png")}
                title={"Title"}
                titleColor={"#000000"}
                subtitle={"Subtitle"}
                subtitleColor={"#000000"}
                contentInsetStart={10}
                contentInsetEnd={10}
                rtl={false}
                actions={[
                  {
                    title: "Action1",
                    icon: require("../assets/setting.png"),
                    show: "ifRoom",
                    showWithText: true,
                  },
                  {
                    title: "Action2",
                    icon: require("../assets/setting.png"),
                    show: "ifRoom",
                    showWithText: true,
                  },
                  {
                    title: "Action3",
                    icon: require("../assets/setting.png"),
                    show: "ifRoom",
                    showWithText: true,
                  },
                  {
                    title: "Action4",
                    icon: require("../assets/setting.png"),
                    show: "ifRoom",
                    showWithText: true,
                  },
                  {
                    title: "Action5",
                    icon: require("../assets/setting.png"),
                    show: "ifRoom",
                    showWithText: true,
                  },
                  {
                    title: "Action6",
                    icon: require("../assets/setting.png"),
                    show: "ifRoom",
                    showWithText: true,
                  }
                ]}
                onIconClicked={() => 
                  setState({ message: "Clicked nav icon" })
                }
                onActionSelected={(position: number) =>
                  setState({ message: `Clicked Menu - ${position + 1}` })
                }
              />
              <View style={styles.centerContainer}>
                <Text style={styles.headText}>
                  Click nav icon or action icon will trigger some events!
                </Text>
                <Text style={styles.contentText}>
                  {message}
                </Text>
              </View>
            </TestCase>
          </TestSuite>  
        </Tester>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: "#E9EAED",
    height: 56,
    margin: 10
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    height: 100,
    padding: 20
  },
  headText: {
    fontSize: 16,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff681f",
  },
});

export default App;


