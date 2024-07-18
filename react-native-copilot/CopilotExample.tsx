import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CopilotProvider,
  CopilotStep,
  walkthroughable,
  useCopilot,
} from "react-native-copilot";
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

const WalkthroughableText = walkthroughable(Text);
const WalkthroughableImage = walkthroughable(Image);
function App() {
  const { start, copilotEvents } = useCopilot();
  const [secondStepActive, setSecondStepActive] = useState(true);
  const [lastEvent, setLastEvent] = useState(null);
  useEffect(() => {
    copilotEvents.on("stepChange", (step) => {
      setLastEvent(`stepChange: ${step.name}`);
    });
    copilotEvents.on("start", () => {
      setLastEvent(`start`);
    });
    copilotEvents.on("stop", () => {
      setLastEvent(`stop`);
    });
  }, [copilotEvents]);
  return (
    <SafeAreaView style={styles.container}>
      <CopilotStep
        text="Hey! This is the first step of the tour!"
        order={1}
        name="openApp">
        <WalkthroughableText style={styles.title}>
          {'Welcome to the demo of\n"React Native Copilot"'}
        </WalkthroughableText>
      </CopilotStep>
      <View style={styles.middleView}>
        <CopilotStep
          active={secondStepActive}
          text="Here goes your profile picture!"
          order={2}
          name="secondText">
          <WalkthroughableImage
            source={require('../assets/react-native-copilot-man.jpeg')}
            style={styles.profilePhoto}
          />
        </CopilotStep>
        <View style={styles.activeSwitchContainer}>
          <Text>Profile photo step activated?</Text>
          <View style={{ flexGrow: 1 }} />
          <Switch
            onValueChange={(secondStepActive) =>
              setSecondStepActive(secondStepActive)
            }
            value={secondStepActive}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => start()}>
          <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
        </TouchableOpacity>
        <View style={styles.eventContainer}>
          <Text>{lastEvent && `Last event: ${lastEvent}`}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <CopilotStep
          text="Here is an item in the corner of the screen."
          order={3}
          name="thirdText"
        >
          <WalkthroughableText >
            <View style={styles.imageView}><Image source={require('../assets/react-native-copilot-nickname.png')} /></View>
          </WalkthroughableText>
        </CopilotStep>
        <View style={styles.imageView}><Image source={require('../assets/react-native-copilot-earphone.png')} /></View>
        <View style={styles.imageView}><Image source={require('../assets/react-native-copilot-glass.png')} /></View>
        <View style={styles.imageView}><Image source={require('../assets/react-native-copilot-scan.png')} /></View>
        <View style={styles.imageView}><Image source={require('../assets/react-native-copilot-todo.png')} /></View>
      </View>
    </SafeAreaView>
  );
}
const AppwithProvider = () => (
  <ScrollView>
  <Tester>
    <TestSuite name="Copilot">
      <TestCase tags={['C_API']} itShould="Test Copilot CopilotOptions={arrowColor{'red'}}">
        <View style={{ height: 500, width: '100%' }}>
          <CopilotProvider stopOnOutsideClick androidStatusBarVisible arrowColor={'red'} >
            <App />
          </CopilotProvider>
        </View>
      </TestCase>
      <TestCase tags={['C_API']} itShould="Test Copilot  CopilotOptions={tipStyle={{backgroundColor:'yellow'}}}">
        <View style={{ height: 500, width: '100%' }}>
          <CopilotProvider stopOnOutsideClick androidStatusBarVisible tooltipStyle={{backgroundColor:'yellow'}}>
            <App />
          </CopilotProvider>
        </View>
      </TestCase>
      <TestCase tags={['C_API']} itShould="Test Copilot CopilotOptions={animated={false}}">
        <View style={{ height: 500, width: '100%' }}>
          <CopilotProvider stopOnOutsideClick androidStatusBarVisible animated={false} >
            <App />
          </CopilotProvider>
        </View>
      </TestCase>
      <TestCase tags={['C_API']} itShould="Test Copilot CopilotOptions={animated={true} ,animationDuration={1000}}">
        <View style={{ height: 500, width: '100%' }}>
          <CopilotProvider stopOnOutsideClick androidStatusBarVisible animated={true} animationDuration={1000}>
            <App />
          </CopilotProvider>
        </View>
      </TestCase>
    </TestSuite>
  </Tester >
  </ScrollView>
);
const styles = StyleSheet.create({
  imageView: {
    width: 50,
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 25,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  middleView: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2980b9",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  tabItem: {
    flex: 1,
    textAlign: "center",
  },
  activeSwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  eventContainer: {
    marginTop: 20,
  },
});
export default AppwithProvider;