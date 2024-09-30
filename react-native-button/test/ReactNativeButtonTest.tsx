import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Button from 'react-native-button';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export const ReactNativeButtonTest = () => {
  return (
    <Tester>
    <ScrollView>
      <TestSuite name="Button">
        <TestCase itShould="render a button that should be disabled">
            <ButtonDisabled />
        </TestCase>

        <TestCase itShould="render a button with style ">
            <ButtonwithStyleView />
        </TestCase>

        <TestCase itShould="render a button with ContainerStyle ">
            <ButtonwithContainerStyleView />
        </TestCase>

        <TestCase itShould="render a button with styleDisabled ">
            <ButtonwithStyleDisabledView />
        </TestCase>

        <TestCase itShould="render a button with ContainerStyleDisabled ">
            <ButtonwithContainerStyleDisabledView />
        </TestCase>
        
        <TestCase itShould="render a button with childGroupStyle">
            <ButtonwithchildGroupStyle />
        </TestCase>

        <TestCase itShould="render a button with accessibilitylabel">
            <ButtonAccessibilityLabel />
        </TestCase>

        <TestCase itShould="render a button with pressIn and pressOut">
            <ButtonwithPressInandPressOut />
        </TestCase>

        <TestCase itShould="render a button with LongPress">
            <ButtonwithLongPress />
        </TestCase>

        <TestCase itShould="render a button with allowFontScaling=false">
            <ButtonwithAllowFontScaling />
        </TestCase>

      </TestSuite>
    </ScrollView>
    </Tester>
  );
};
function ButtonwithStyleView() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const [textwithStyle, settextwithStyle] = React.useState(false);
  
    const Styletitle = [
      textwithStyle ? 'Style:true':'Style:false',
    ];
  
    const incrementPressCounter = () => {
      setPressCounter(count => count + 1);
    };
  
    const style = textwithStyle ? { color: 'red', backgroundColor: 'green'}:null;
  
    const togglewithStyle = () => {
      settextwithStyle(!textwithStyle);
    };
  
    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Button
                    style={style}
                    onPress={incrementPressCounter}
                >
                    Press me!
                </Button>

                <Button
                    style={{color:"#A4A4A4"}}
                    onPress={togglewithStyle}
                >
                    {Styletitle}
                </Button>

            </View>
            <Text style={styles.text}>Pressed {pressCounter} times</Text>
        </View>
    );
}

function ButtonwithContainerStyleView() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const [textwithContainerStyle, settextwithContainerStyle] = React.useState(false);

    const ContainerStyleTitle = [
        textwithContainerStyle ? 'ContainerStyle:true':'ContainerStyle:false',
    ];

    const incrementPressCounter = () => {
        setPressCounter(count => count + 1);
    };

    const containerStyle = textwithContainerStyle ? { backgroundColor: 'pink'}:null;

    const togglewithContainerStyle = () => {
        settextwithContainerStyle(!textwithContainerStyle);
    };

    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Button
                    containerStyle={containerStyle}
                    onPress={incrementPressCounter}
                >
                    Press me!
                </Button>

                <Button
                    style={{color:"#A4A4A4"}}
                    onPress={togglewithContainerStyle}
                >
                    {ContainerStyleTitle}
                </Button>

            </View>
            <Text style={styles.text}>Pressed {pressCounter} times</Text>
        </View>
    );
}

function ButtonwithStyleDisabledView() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const [textwithStyleDisabled, settextwithStyleDisabled] = React.useState(false);

    const StyletitleDisabled = [
        textwithStyleDisabled ? 'StyleDisabled:true':'StyleDisabled:false',
    ];

    const incrementPressCounter = () => {
        setPressCounter(count => count + 1);
    };

    const styleDisabled = textwithStyleDisabled ? { color: 'red', backgroundColor: 'green'}:null;

    const togglewithStyle = () => {
        settextwithStyleDisabled(!textwithStyleDisabled);
    };

    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Button
                    disabled={true}
                    styleDisabled={styleDisabled}
                    onPress={incrementPressCounter}
                >
                    (disabled)
                </Button>

                <Button
                    style={{color:"#A4A4A4"}}
                    onPress={togglewithStyle}
                >
                    {StyletitleDisabled}
                </Button>

            </View>
            <Text style={styles.text}>Pressed {pressCounter} times</Text>
        </View>
    );
}

function ButtonwithContainerStyleDisabledView() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const [textwithContainerStyleDisabled, settextwithContainerStyleDisabled] = React.useState(false);

    const ContainerStyleDisabledTitle = [
        textwithContainerStyleDisabled ? 'ContainerStyleDisabled:true':'ContainerStyleDisabled:false',
    ];

    const incrementPressCounter = () => {
        setPressCounter(count => count + 1);
    };

    const containerStyleDisabled = textwithContainerStyleDisabled ? { backgroundColor: 'pink'}:null;

    const togglewithContainerStyle = () => {
        settextwithContainerStyleDisabled(!textwithContainerStyleDisabled);
    };

    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Button
                    disabled={true}
                    disabledContainerStyle={containerStyleDisabled}
                    onPress={incrementPressCounter}
                >
                    (disabled)
                </Button>

                <Button
                    style={{color:"#A4A4A4"}}
                    onPress={togglewithContainerStyle}
                >
                    {ContainerStyleDisabledTitle}
                </Button>

            </View>
            <Text style={styles.text}>Pressed {pressCounter} times</Text>
        </View>
    );
}

function ButtonDisabled() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const [disabled, setDisabled] = React.useState(false);

    const incrementPressCounter = () => {
        setPressCounter(count => count + 1);
    };

    const toggle = () => {
        setDisabled(!disabled);
    };

    const title1 = [
        disabled ? '(disabled)' : 'Press Me',
    ];

    const title2 = [
        disabled ? 'Enable button click' : 'Disable button click',
    ];

    return (
    <View>
        <View style={styles.buttonsContainer}>
            <Button
                onPress={incrementPressCounter}
                disabled={disabled}
            >
                {title1}
            </Button>

            <Button
                style={{color:"#A4A4A4"}}
                onPress={toggle}
            >
                {title2}
            </Button>
        </View>
        <Text style={styles.text}>Pressed {pressCounter} times</Text>
    </View>
    );
}

function ButtonAccessibilityLabel() {
    const [pressCounter, setPressCounter] = React.useState(0);

    const incrementPressCounter = () => {
    setPressCounter(count => count + 1);
    };

    return (
    <View>
        <View style={styles.buttonsContainer}>
            <Button
                onPress={incrementPressCounter}
                accessibilityLabel="Increment the count"
            >
                Increment the count
            </Button>
        </View>
        <Text style={styles.text}>Pressed {pressCounter} times</Text>
    </View>
    );
}

function ButtonwithPressInandPressOut() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const incrementPressCounter = () => {
      setPressCounter(count => count + 1);
    };
  
    return (
      <View>
        <View style={styles.buttonsContainer}>
          <Button
            onPressIn={incrementPressCounter}
            onPressOut={incrementPressCounter}
          >
              Press me!
          </Button>
        </View>
        <Text style={styles.text}>Pressed {pressCounter} times</Text>
      </View>
    );
  }

function ButtonwithLongPress() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const incrementPressCounter = () => {
        setPressCounter(count => count + 1);
    };

    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Button
                onLongPress={incrementPressCounter}
                delayLongPress={2000}
                >
                    Press me!
                </Button>
            </View>
            <Text style={styles.text}>Pressed {pressCounter} times</Text>
        </View>
    );
}

function ButtonwithAllowFontScaling() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const incrementPressCounter = () => {
        setPressCounter(count => count + 1);
    };
    
    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Button
                onPress={incrementPressCounter}
                allowFontScaling={false}
                >
                    Press me!
                </Button>
        
            </View>
            <Text style={styles.text}>Pressed {pressCounter} times</Text>
        </View>
    );
}

function ButtonwithchildGroupStyle() {
    const [pressCounter, setPressCounter] = React.useState(0);
    const [childGroupStyleDisabled, setchildGroupStyle] = React.useState(false);
    const childGroupStyleTitle = [
        childGroupStyleDisabled ? 'childGroupStyle:true':'childGroupStyle:false',
    ];

    const childGroupStyle = [
        childGroupStyleDisabled ? {backgroundColor: 'black'}:null,
    ];

    const incrementPressCounter = () => {
        setPressCounter(count => count + 1);
    };

    const toggle = () => {
        setchildGroupStyle(!childGroupStyleDisabled);
    };

    return (
        <View>
            <View style={styles.buttonsContainer}>

                <Button
                    style={{ color: 'white', backgroundColor: 'green'}}
                    containerStyle={{ padding: 5, overflow: 'hidden', borderRadius: 5, backgroundColor: 'pink', margin: 5 }}
                    childGroupStyle={childGroupStyle}
                    onPress={incrementPressCounter}
                >
                    father!
                    <Button
                        style={{color: 'red'}}
                        onPress={incrementPressCounter}
                    >
                        children1!
                    </Button>

                    <Button
                        style={{color: 'white'}}
                        onPress={incrementPressCounter}
                    >
                        children2!
                    </Button>
                </Button>

                <Button
                    style={{color:"#A4A4A4", height: 40, width: 80}}
                    onPress={toggle}
                >
                    {childGroupStyleTitle}
                </Button>
            </View>
            <Text style={styles.text}>Pressed {pressCounter} times</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    height: 20,
    width: 200,
    fontSize: 14,
  },
});
