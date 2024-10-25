import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CopilotProvider,
  CopilotStep,
  DefaultUI,
  useCopilot,
  walkthroughable,
} from "react-native-copilot";
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { StepNumber } from './default-ui/StepNumber'
import { Tooltip } from './default-ui/Tooltip'

const WalkthroughableText = walkthroughable(Text);
const WalkthroughableImage = walkthroughable(Image);

function App() {
  const { 
    start,
    visible,
    copilotEvents,
    totalStepsNumber,
  } = useCopilot();

  const [secondStepActive, setSecondStepActive] = useState(true);
  const [lastEvent, setLastEvent] = useState('');
  const [measure, setMeasure] = useState('');
  const [myTotalStepsNumber, setTotalStepsNumber] = useState(0);
  const [myVisible, setVisible] = useState(true);

  function setTotalSteps(totalSteps: number) {
    setTotalStepsNumber(totalSteps)
  }

  function setVisibleFn(visible: boolean) {
    setVisible(visible)
  }

  useEffect(() => {
    copilotEvents.on("stepChange", (step: any) => {
      setLastEvent(`stepChange: ${step.name}+${step.order}+${step.visible}+${step.text}`);
      step.measure().then(res => {
        setMeasure(`measure: ${res.x}+${res.y}+${res.width}+${res.height}`);
      })
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
            source={require('../../assets/react-native-copilot-man.jpeg')}
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
        <TouchableOpacity style={styles.button} onPress={() => {
          start()
          setTotalSteps(totalStepsNumber)
          setVisibleFn(visible)
        }}>
          <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
        </TouchableOpacity>
        <View style={styles.eventContainer}>
          <Text>{lastEvent && `Last event: ${lastEvent}`}</Text>
          <Text>{measure && `measure: ${measure}`}</Text>
          <Text>{myTotalStepsNumber && `totalStepsNumber: ${myTotalStepsNumber}`}</Text>
          <Text>{`visible: ${myVisible}`}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <CopilotStep
          text="Here is an item in the corner of the screen."
          order={3}
          name="thirdText"
        >
          <WalkthroughableText >
            <View style={styles.imageView}><Image source={require('../../assets/react-native-copilot-nickname.png')} /></View>
          </WalkthroughableText>
        </CopilotStep>
        <View style={styles.imageView}><Image source={require('../../assets/react-native-copilot-earphone.png')} /></View>
        <View style={styles.imageView}><Image source={require('../../assets/react-native-copilot-glass.png')} /></View>
        <View style={styles.imageView}><Image source={require('../../assets/react-native-copilot-scan.png')} /></View>
        <View style={styles.imageView}><Image source={require('../../assets/react-native-copilot-todo.png')} /></View>
      </View>
    </SafeAreaView>
  );
}

const circleSvgPath = ({ size, position, canvasSize, step }) => {
  switch (step.order) {
    case 1:
      return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${size.x._value},${size.y._value}Za50 50 0 1 0 100 0 50 50 0 1 0-100 0`;
    case 2:
      return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${position.x._value},${position.y._value}Za50 50 0 1 0 100 0 50 50 0 1 0-100 0`;
    default:
      return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${position.x._value},${position.y._value}Za50 50 0 1 0 100 0 50 50 0 1 0-100 0`;
  }
}

const AppWithProvider = () => (
  <ScrollView>
    <Tester>
      <TestSuite name="Copilot">

        <TestCase tags={['C_API']} itShould="Test Copilot CopilotProps 中 stopOnOutsideClick 为 true">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick >
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot CopilotProps 中 stopOnOutsideClick 为 false">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick={false} >
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 easing={(value) => value}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick easing={(value) => value}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 easing={undefined}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick easing={undefined}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 overlay='svg'">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick overlay="svg">
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 overlay='view'">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick overlay="view">
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 tooltipComponent={DefaultUI.Tooltip} stepNumberComponent={DefaultUI.StepNumber}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick tooltipComponent={DefaultUI.Tooltip} stepNumberComponent={DefaultUI.StepNumber}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 tooltipComponent={Tooltip} stepNumberComponent={StepNumber}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick tooltipComponent={Tooltip} stepNumberComponent={StepNumber}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 tooltipComponent={Tooltip} stepNumberComponent={StepNumber} labels={{ skip: '跳过', previous: '上一步', next: '下一步', finish: '完成'}}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick labels={{ skip: '跳过', previous: '上一步', next: '下一步', finish: '完成'}} tooltipComponent={Tooltip} stepNumberComponent={StepNumber}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot CopilotProps 中 arrowSize={7}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick arrowSize={7}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot CopilotProps 中 arrowSize={10}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick arrowSize={10}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot CopilotProps 中 arrowColor={'red'}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick  arrowColor={'red'} >
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot CopilotProps 中 arrowColor={'blue'}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick  arrowColor={'blue'} >
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 tooltipStyle={{backgroundColor:'pink'}}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick tooltipStyle={{backgroundColor:'pink'}}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 {tipStyle={{backgroundColor:'yellow'}}}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick  tooltipStyle={{backgroundColor:'yellow'}}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 labels={{ skip: '跳过', previous: '上一步', next: '下一步', finish: '完成'}}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick labels={{ skip: '跳过', previous: '上一步', next: '下一步', finish: '完成'}} >
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 labels={{ previous: 'Vorheriger', next: 'Nächster', skip: 'Überspringen', finish: 'Beenden' }}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick labels={{ previous: "Vorheriger", next: "Nächster", skip: "Überspringen", finish: "Beenden" }} >
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中  svgMaskPath={circleSvgPath}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick svgMaskPath={circleSvgPath}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 verticalOffset={36}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick verticalOffset={36}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中 verticalOffset={63}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick verticalOffset={63}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中  margin={10}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick margin={10}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中  margin={50}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick margin={50}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中  backdropColor='white'">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick backdropColor="white">
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot  CopilotProps 中  backdropColor='pink'">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick backdropColor="pink">
              <App />
            </CopilotProvider>
          </View>
        </TestCase>

        <TestCase tags={['C_API']} itShould="Test Copilot CopilotProps={animated={false}} animationDuration={1000}">
          <View style={{ height: 500, width: '100%' }}>
            <CopilotProvider stopOnOutsideClick androidStatusBarVisible animated={false} animationDuration={1000}>
              <App />
            </CopilotProvider>
          </View>
        </TestCase>
        <TestCase tags={['C_API']} itShould="Test Copilot CopilotProps={animated={true} ,animationDuration={1000}}">
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

export default AppWithProvider;