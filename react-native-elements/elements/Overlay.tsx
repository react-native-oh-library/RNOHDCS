import React, { useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

type OverlayComponentProps = {};

const OverlayComponent: React.FunctionComponent<OverlayComponentProps> = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Tester>
      <TestSuite name='Overlay'>
        <TestCase itShould='Open Overlay' tags={['C_API']}>
          <Button
            title="Open Overlay"
            onPress={toggleOverlay}
            buttonStyle={styles.button}
          />
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Text style={styles.textPrimary}>Hello!</Text>
            <Text style={styles.textSecondary}>
              Welcome to React Native Elements
            </Text>
            <Button
              icon={
                <Icon
                  name="wrench"
                  type="font-awesome"
                  color="white"
                  size={25}
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="Start Building"
              onPress={toggleOverlay}
            />
          </Overlay>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  }
});

export default OverlayComponent;
