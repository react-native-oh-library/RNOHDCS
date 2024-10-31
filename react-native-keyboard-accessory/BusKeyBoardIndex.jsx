// App.js
import React from 'react'
import { View, StyleSheet, Button, Text, Keyboard, Platform, SafeAreaView, TextInput, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { KeyboardAwareTabBarTest } from './KeyboardAwareTabBar/KeyboardAwareTabBar'

import { OriginalExample } from './KeyboardAccessory/OriginalExample'
import { Style } from './KeyboardAccessory/Style'
import { AnimateOn } from './KeyboardAccessory/AnimateOn'
import { AnimateOnIos } from './KeyboardAccessory/AnimateOnIos'
import { AlwaysVisible } from './KeyboardAccessory/AlwaysVisible'
import { VisibleOpacity } from './KeyboardAccessory/VisibleOpacity'
import { HideBorders } from './KeyboardAccessory/HideBorders'
import { InSafeAreaView } from './KeyboardAccessory/InSafeAreaView'
import { AndroidAdjustResize } from './KeyboardAccessory/AndroidAdjustResize'
import { AvoidKeyboard } from './KeyboardAccessory/AvoidKeyboard'
import { AvoidKeyboard2 } from './KeyboardAccessory/AvoidKeyboard2'
import { BumperHeight } from './KeyboardAccessory/BumperHeight'
import { BumperHeight2 } from './KeyboardAccessory/BumperHeight2'
import { HeightProperty } from './KeyboardAccessory/HeightProperty'
import { HiddenOpacity } from './KeyboardAccessory/HiddenOpacity'

import { OriginalExamples } from './NavigationView/OriginalExamples'
import { DoneButtonTitle } from './NavigationView/DoneButtonTitle'
import { TintColor } from './NavigationView/TintColor'
import { DoneButton } from './NavigationView/DoneButton'
import { NextButton } from './NavigationView/NextButton'
import { PreviousButton } from './NavigationView/PreviousButton'
import { NextDisabled } from './NavigationView/NextDisabled'
import { PreviousDisabled } from './NavigationView/PreviousDisabled'
import { NextHidden } from './NavigationView/NextHidden'
import { PreviousHidden } from './NavigationView/PreviousHidden'

import { accessoryStyle } from './NavigationView/accessoryStyle'
import { doneButtonHitslop } from './NavigationView/doneButtonHitslop'
import { doneButtonStyle } from './NavigationView/doneButtonStyle'
import { doneButtonTitleStyle } from './NavigationView/doneButtonTitleStyle'
import { nextButtonDirection } from './NavigationView/nextButtonDirection'
import { nextButtonHitslop } from './NavigationView/nextButtonHitslop'
import { nextButtonStyle } from './NavigationView/nextButtonStyle'
import { onDone } from './NavigationView/onDone'
import { onNext } from './NavigationView/onNext'
import { onPrevious } from './NavigationView/onPrevious'
import { previousButtonDirection } from './NavigationView/previousButtonDirection'
import { previousButtonHitslop } from './NavigationView/previousButtonHitslop'
import { previousButtonStyle } from './NavigationView/previousButtonStyle'

function GoPage() {
  const navigate1 = useNavigation()

  const onOriginalExamples = () => {
    return navigate1.navigate('OriginalExamples')
  }

  const onDoneButtonTitle = () => {
    return navigate1.navigate('DoneButtonTitle')
  }

  const onTintColor = () => {
    return navigate1.navigate('TintColor')
  }

  const onDoneButton = () => {
    return navigate1.navigate('DoneButton')
  }

  const onNextButton = () => {
    return navigate1.navigate('NextButton')
  }

  const onPreviousButton = () => {
    return navigate1.navigate('PreviousButton')
  }

  const onNextDisabled = () => {
    return navigate1.navigate('NextDisabled')
  }

  const onPreviousDisabled = () => {
    return navigate1.navigate('PreviousDisabled')
  }

  const onNextHidden = () => {
    return navigate1.navigate('NextHidden')
  }

  const onPreviousHidden = () => {
    return navigate1.navigate('PreviousHidden')
  }

  const onAccessoryStyle = () => {
    return navigate1.navigate('accessoryStyle')
  }
  const onDoneButtonStyle = () => {
    return navigate1.navigate('doneButtonStyle')
  }
  const onDoneButtonTitleStyle = () => {
    return navigate1.navigate('doneButtonTitleStyle')
  }
  const onDoneButtonHitslop = () => {
    return navigate1.navigate('doneButtonHitslop')
  }
  const onPreviousButtonStyle = () => {
    return navigate1.navigate('previousButtonStyle')
  }
  const onNextButtonStyle = () => {
    return navigate1.navigate('nextButtonStyle')
  }
  const onNextButtonDirection = () => {
    return navigate1.navigate('nextButtonDirection')
  }
  const onNextButtonHitslop = () => {
    return navigate1.navigate('nextButtonHitslop')
  }
  const onPreviousButtonDirection = () => {
    return navigate1.navigate('previousButtonDirection')
  }
  const onPreviousButtonHitslop = () => {
    return navigate1.navigate('previousButtonHitslop')
  }
  const onDone = () => {
    return navigate1.navigate('onDone')
  }
  const onNext = () => {
    return navigate1.navigate('onNext')
  }
  const onPrevious = () => {
    return navigate1.navigate('onPrevious')
  }







  const onOriginalExample = () => {
    return navigate1.navigate('OriginalExample')
  }

  const onStyle = () => {
    return navigate1.navigate('Style')
  }


  const onAnimateOn = () => {
    return navigate1.navigate('AnimateOn')
  }

  const onAnimateOnIos = () => {
    return navigate1.navigate('AnimateOnIos')
  }

  const onAlwaysVisible = () => {
    return navigate1.navigate('AlwaysVisible')
  }

  const onVisibleOpacity = () => {
    return navigate1.navigate('VisibleOpacity')
  }

  const onHideBorders = () => {
    return navigate1.navigate('HideBorders')
  }

  const onInSafeAreaView = () => {
    return navigate1.navigate('InSafeAreaView')
  }

  const onAndroidAdjustResize = () => {
    return navigate1.navigate('AndroidAdjustResize')
  }

  const onAvoidKeyboard = () => {
    return navigate1.navigate('AvoidKeyboard')
  }

  const onAvoidKeyboard2 = () => {
    return navigate1.navigate('AvoidKeyboard2')
  }

  const onBumperHeight = () => {
    return navigate1.navigate('BumperHeight')
  }

  const onBumperHeight2 = () => {
    return navigate1.navigate('BumperHeight2')
  }

  const onHeightProperty = () => {
    return navigate1.navigate('HeightProperty')
  }

  const onHiddenOpacity = () => {
    return navigate1.navigate('HiddenOpacity')
  }

  const onKeyboardAwareTabBarTest= () => {
    return navigate1.navigate('KeyboardAwareTabBarTest')
  }
  
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ margin: 20 }}><Text style={{ fontSize: 20 }}>KeyboardAccessoryView</Text></View>

        <View style={{ margin: 10 }}>
            <Button title="默认" onPress={onOriginalExample}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="Style" onPress={onStyle}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="AnimateOn---harmony" onPress={onAnimateOn}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="AnimateOn---ios" onPress={onAnimateOnIos}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="AlwaysVisible" onPress={onAlwaysVisible}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="BumperHeight = 1" onPress={onBumperHeight}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="BumperHeight = 100" onPress={onBumperHeight2}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="VisibleOpacity: {0.5}" onPress={onVisibleOpacity}/>
        </View>

        {/* <View style={{ margin: 10 }}>
            <Button title="HeightProperty" onPress={onHeightProperty}/>
        </View>
        
        <View style={{ margin: 10 }}>
            <Button title="HiddenOpacity" onPress={onHiddenOpacity}/>
        </View> */}

        <View style={{ margin: 10 }}>
            <Button title="HideBorders" onPress={onHideBorders}/>
        </View>

        {/* <View style={{ margin: 10 }}>
            <Button title="InSafeAreaView" onPress={onInSafeAreaView}/>
        </View> */}

        {/* <View style={{ margin: 10 }}>
            <Button title="AndroidAdjustResize" onPress={onAndroidAdjustResize}/>
        </View> */}

        <View style={{ margin: 10 }}>
            <Button title="AvoidKeyboard = true" onPress={onAvoidKeyboard}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="AvoidKeyboard = false" onPress={onAvoidKeyboard2}/>
        </View>

        <View style={{ margin: 20 }}><Text style={{ fontSize: 20 }}>KeyboardAccessoryNavigation</Text></View>

        <View style={{ margin: 10 }}>
            <Button title="默认" onPress={onOriginalExamples}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="DoneButtonTitle" onPress={onDoneButtonTitle}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="TintColor" onPress={onTintColor}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="DoneButton" onPress={onDoneButton}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="NextButton" onPress={onNextButton}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="PreviousButton" onPress={onPreviousButton}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="NextDisabled" onPress={onNextDisabled}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="PreviousDisabled" onPress={onPreviousDisabled}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="NextHidden" onPress={onNextHidden}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="PreviousHidden" onPress={onPreviousHidden}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="accessoryStyle" onPress={onAccessoryStyle}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="doneButtonStyle" onPress={onDoneButtonStyle}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="doneButtonTitleStyle" onPress={onDoneButtonTitleStyle}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="doneButtonHitslop" onPress={onDoneButtonHitslop}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="nextButtonStyle" onPress={onNextButtonStyle}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="nextButtonDirection" onPress={onNextButtonDirection}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="nextButtonHitslop" onPress={onNextButtonHitslop}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="previousButtonStyle" onPress={onPreviousButtonStyle}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="previousButtonDirection" onPress={onPreviousButtonDirection}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="previousButtonHitslop" onPress={onPreviousButtonHitslop}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="onDone" onPress={onDone}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="onNext" onPress={onNext}/>
        </View>

        <View style={{ margin: 10 }}>
            <Button title="onPrevious" onPress={onPrevious}/>
        </View>

        <View style={{ margin: 20 }}><Text style={{ fontSize: 20 }}>KeyboardAwareTabBarComponent</Text></View>
        
        <View style={{ margin: 10 }}>
            <Button title="KeyboardAwareTabBarTest" onPress={onKeyboardAwareTabBarTest}/>
        </View>

      </View>
    </ScrollView>
  );
}
  
const HomeStack = createStackNavigator();

export default function BusKeyBoardIndexDemo() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack.Navigator >
          <HomeStack.Screen name="GoPage" component={GoPage} />
          <HomeStack.Screen name="OriginalExample" component={OriginalExample} />
          <HomeStack.Screen name="Style" component={Style} />
          <HomeStack.Screen name="AnimateOn" component={AnimateOn} />
          <HomeStack.Screen name="AnimateOnIos" component={AnimateOnIos} />
          <HomeStack.Screen name="AlwaysVisible" component={AlwaysVisible} />
          <HomeStack.Screen name="VisibleOpacity" component={VisibleOpacity} />
          <HomeStack.Screen name="HideBorders" component={HideBorders} />
          <HomeStack.Screen name="InSafeAreaView" component={InSafeAreaView} />
          <HomeStack.Screen name="AndroidAdjustResize" component={AndroidAdjustResize} />
          <HomeStack.Screen name="AvoidKeyboard" component={AvoidKeyboard} />
          <HomeStack.Screen name="AvoidKeyboard2" component={AvoidKeyboard2} />
          <HomeStack.Screen name="BumperHeight" component={BumperHeight} />
          <HomeStack.Screen name="BumperHeight2" component={BumperHeight2} />
          <HomeStack.Screen name="HeightProperty" component={HeightProperty} />
          <HomeStack.Screen name="HiddenOpacity" component={HiddenOpacity} />
          
          <HomeStack.Screen name="OriginalExamples" component={OriginalExamples} />
          <HomeStack.Screen name="DoneButtonTitle" component={DoneButtonTitle} />
          <HomeStack.Screen name="TintColor" component={TintColor} />
          <HomeStack.Screen name="DoneButton" component={DoneButton} />
          <HomeStack.Screen name="NextButton" component={NextButton} />
          <HomeStack.Screen name="PreviousButton" component={PreviousButton} />
          <HomeStack.Screen name="NextDisabled" component={NextDisabled} />
          <HomeStack.Screen name="PreviousDisabled" component={PreviousDisabled} />
          <HomeStack.Screen name="NextHidden" component={NextHidden} />
          <HomeStack.Screen name="PreviousHidden" component={PreviousHidden} />

          <HomeStack.Screen name="accessoryStyle" component={accessoryStyle} />
          <HomeStack.Screen name="doneButtonStyle" component={doneButtonStyle} />
          <HomeStack.Screen name="doneButtonTitleStyle" component={doneButtonTitleStyle} />
          <HomeStack.Screen name="doneButtonHitslop" component={doneButtonHitslop} />
          <HomeStack.Screen name="previousButtonStyle" component={previousButtonStyle} />
          <HomeStack.Screen name="nextButtonStyle" component={nextButtonStyle} />
          <HomeStack.Screen name="nextButtonDirection" component={nextButtonDirection} />
          <HomeStack.Screen name="nextButtonHitslop" component={nextButtonHitslop} />
          <HomeStack.Screen name="previousButtonDirection" component={previousButtonDirection} />
          <HomeStack.Screen name="previousButtonHitslop" component={previousButtonHitslop} />
          <HomeStack.Screen name="onDone" component={onDone} />
          <HomeStack.Screen name="onNext" component={onNext} />
          <HomeStack.Screen name="onPrevious" component={onPrevious} />
          
          
          <HomeStack.Screen name="KeyboardAwareTabBarTest" component={KeyboardAwareTabBarTest} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export {BusKeyBoardIndexDemo}