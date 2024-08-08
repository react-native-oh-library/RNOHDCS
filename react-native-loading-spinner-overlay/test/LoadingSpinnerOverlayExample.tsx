/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Button, ScrollView, View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function LoadingSpinnerOverlay() {
  const [isSpinnerVisible, setSpinnerVisible] = useState({
    default: false,
    cancelable: false,
    color: false,
    animation: false,
    overlayColor: false,
    size: false,
    textContent: false,
    textStyle: false,
    indicatorStyle: false,
    customIndicator: false,
    children: false,
  });

  // 切换显示状态
  const toggleSpinner = (type: keyof typeof isSpinnerVisible) => {
    setSpinnerVisible({ ...isSpinnerVisible, [type]: !isSpinnerVisible[type] });
    setTimeout(() => {
      setSpinnerVisible({ ...isSpinnerVisible, [type]: false });
    }, 3000)
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.viewbox}>
        <Button title='default' onPress={() => toggleSpinner('default')} />
        <Spinner
          visible={isSpinnerVisible.default}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      </View>

      <View style={styles.viewbox}>
        <Button title='cancelable' onPress={() => toggleSpinner('cancelable')} />
        <Spinner
          visible={isSpinnerVisible.cancelable}
          cancelable={true}
        />
      </View>

      <View style={styles.viewbox}>
        <Button title='color' onPress={() => toggleSpinner('color')} />
        <Spinner
          visible={isSpinnerVisible.color}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          color='#ff0000'
        />
      </View>

      <View style={styles.viewbox}>
        <Button title='animation' onPress={() => toggleSpinner('animation')} />
        <Spinner
          visible={isSpinnerVisible.animation}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          animation='slide'
        />
      </View>

      <View style={styles.viewbox}>
        <Button title='overlayColor' onPress={() => toggleSpinner('overlayColor')} />
        <Spinner
          visible={isSpinnerVisible.overlayColor}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          overlayColor='#eee'
        />
      </View>

      <View style={styles.viewbox}>
        <Button title='size' onPress={() => toggleSpinner('size')} />
        <Spinner
          visible={isSpinnerVisible.size}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          size='small'
        />
      </View>

      <View style={styles.viewbox}>
        <Button title='indicatorStyle' onPress={() => toggleSpinner('indicatorStyle')} />
        <Spinner
          visible={isSpinnerVisible.indicatorStyle}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          indicatorStyle={styles.indicatorStyle}
        />
      </View>

      <View style={styles.viewbox}>
        <Button title='customIndicator' onPress={() => toggleSpinner('customIndicator')} />
        <Spinner
          visible={isSpinnerVisible.customIndicator}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          customIndicator={
            <View>
              <Text style={{ color: '#fff' }}>test customIndicator</Text>
            </View>
          }
        />
      </View>

      <View style={styles.viewbox}>
        <Button title='children' onPress={() => toggleSpinner('children')} />
        <Spinner
          visible={isSpinnerVisible.children}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          indicatorStyle={styles.indicatorStyle}
        >
          <View style={styles.spinnerChild}>
            <Text style={{ color: '#fff' }}>test children</Text>
          </View>
        </Spinner>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewbox: {
    marginBottom: 20,
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  textContent: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    top: 80
  },
  indicatorStyle: {
    color: '#00ff00',
    opacity: 0.5,
    borderWidth: 5,
    borderRadius: 100,
    borderColor: '#00ff00',
    borderStyle: 'dotted'
  },
  spinnerChild: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});