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

    const buttonStyle={ fontSize: 30, color: 'white', backgroundColor: 'green', margin: 10 }
    const disabledButtonStyle={ fontSize: 30, color: 'grey', backgroundColor: 'lightgrey', margin: 10 }

    const currentStylestate = isState ? disabledButtonStyle : buttonStyle;
    const title = [
        disabled ? 'hello':'nihao',
      ];

    return (
            <Tester>
                <Text allowFontScaling={false} style={{color: 'red'}}>Default Button：</Text>
                <Button>
                    默认Button
                </Button>

                <Text allowFontScaling={false} style={{color: 'red'}}>Cycle Button：</Text>
                <Button
                    style={{ fontSize: 16, color: 'red' }}
                    containerStyle={{ padding: 25, height: 80, width: 80, borderRadius: 40, overflow: 'hidden', backgroundColor: 'pink' }}
                >
                    Button
                </Button>

                <Text allowFontScaling={false} style={{color: 'red'}}>disabled=true， allowFontScaling=true:</Text>
                <Button
                    style={{fontSize: 30, color: 'white'}}
                    containerStyle={{ overflow: 'hidden', borderRadius: 15, backgroundColor: 'pink'}}
                    disabled={true}   
                    styleDisabled={{fontSize: 40, color: 'red'}}
                    disabledContainerStyle={{ overflow: 'hidden', borderRadius: 20, backgroundColor: 'blue', margin: 10 }}
                >
                    {title}
                </Button>

                <Text allowFontScaling={false} style={{color: 'red'}}>disabled=false， allowFontScaling=true, support onPress：</Text>
                <Button
                    style={currentStylestate}
                    containerStyle={{ overflow: 'hidden', borderRadius: 15, backgroundColor: 'pink', margin: 10 }}
                    allowFontScaling={true}
                    disabled={false} 
                    onPress={_handlePress}
                >
                    {title}
                </Button>

                <Text allowFontScaling={false} style={{color: 'red'}}>disabled=false, allowFontScaling=false, support onPress：</Text>
                <Button
                    style={currentStylestate}
                    containerStyle={{ overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 10 }}
                    allowFontScaling={false}
                    disabled={false} 
                    onPress={_handlePress}
                >
                    {title}
                </Button>

                <Text allowFontScaling={false} style={{color: 'red'}}>disabled=false, allowFontScaling=false, support onLongPress/onPressIn/onPressOut：</Text>
                <Button
                    style={currentStylestate}
                    containerStyle={{ overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 10 }}
                    allowFontScaling={false}
                    disabled={false} 
                    onLongPress={_handleLongPress}
                    onPressIn={_handlePress}
                    onPressOut={_handlePress}
                    delayPressIn={50}
                    delayLongPress={2000}
                >
                    {title}
                </Button>

                <Text allowFontScaling={false} style={{color: 'red'}}>disabled=false, father support onPress/onLongPress：</Text>
                <Button
                    style={{ fontSize: 20, color: 'white', backgroundColor: 'green', margin: 20 }}
                    containerStyle={{ padding: 15, overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 20 }}
                    disabled={false}
                    accessibilityLabel="The button is press me"
                    childGroupStyle={{backgroundColor: 'black'}}
                    onPress={_handlePress}
                    onLongPress={ _handleLongPress }
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