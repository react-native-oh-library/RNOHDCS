import React, { Component } from 'react';  
import Button from 'react-native-button';
import { View, Text, StyleSheet } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

export function ReactNativeButtonTest() {

    const [disabled, setDisabled] = React.useState(false);
    const [isState, setIsstate] = React.useState(false);

    const _handlePress = () => {
        setDisabled(!disabled);
    };

    const _handleLongPress = () => {
        setIsstate(!isState);
    };

    const buttonStyle={ fontSize: 30, color: 'white', backgroundColor: 'green', margin: 20 }
    const disabledButtonStyle={ fontSize: 30, color: 'grey', backgroundColor: 'lightgrey', margin: 20 }

    const currentStylestate = isState ? disabledButtonStyle : buttonStyle;
    const title = [
        disabled ? 'hello':'nihao',
      ];

    return (
            <Tester>
                <Button
                    style={{ fontSize: 16, color: 'red' }}
                    containerStyle={{padding: 15, height: 80, width: 80, borderRadius: 40, overflow: 'hidden', backgroundColor: 'pink', margin: 20,
                    }}
                >
                    默认Button
                </Button>

                <Button
                    style={{fontSize: 30, color: 'white', margin: 20}}
                    containerStyle={{ padding: 15, overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 20 }}
                    disabled={true} 
                    styleDisabled={{fontSize: 40, color: 'red', margin: 20}}
                    disabledContainerStyle={{ padding: 15, overflow: 'hidden', borderRadius: 60, backgroundColor: 'blue' }}
                >
                    {title}
                </Button>

                <Button
                    style={currentStylestate}
                    containerStyle={{ padding: 15, overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 20 }}
                    allowFontScaling={true}
                    disabled={false} 
                    onPress={_handlePress}
                >
                    {title}
                </Button>

                <Button
                    style={currentStylestate}
                    containerStyle={{ padding: 15, overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 20 }}
                    allowFontScaling={true}
                    disabled={false} 
                    onLongPress={_handleLongPress}
                >
                    {title}
                </Button>

                <Button
                    style={{ fontSize: 20, color: 'white', backgroundColor: 'green', margin: 20 }}
                    containerStyle={{ padding: 15, overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 20 }}
                    disabled={false}
                    accessibilityLabel="The button is press me"
                    childGroupStyle={{backgroundColor: 'black'}}
                    onPress={() => _handlePress()}
                    onLongPress={() => _handleLongPress()}
                >
                    father!
                    <Button
                        style={{color: 'red'}}
                    >
                        children1!
                    </Button>

                    <Button
                        style={{color: 'white'}}
                    >
                        children2!
                    </Button>
                </Button>

            </Tester>
    );
  };