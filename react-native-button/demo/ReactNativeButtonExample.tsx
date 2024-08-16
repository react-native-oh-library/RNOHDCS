import React, { Component } from 'react';  
import Button from 'react-native-button';
import { View, Text, StyleSheet } from 'react-native';

export default function ReactNativeButtonExample () {
    
    const [disabled, setDisabled] = React.useState(false);
    const [isState, setIsstate] = React.useState(false);

    const _handlePress = () => {
        setDisabled(!disabled);
    };
    
    const _handleLongPress = () => {
        setIsstate(!isState);
    };

    return (
        <View>
            <Button
                style={{ fontSize: 20, color: 'white', backgroundColor: 'green', margin: 20 }}
                containerStyle={{ padding: 15, overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 20 }}
                disabled={false}
                accessibilityLabel="The button is press me"
                childGroupStyle={{backgroundColor: 'black'}}
                onPress={_handlePress}
                onLongPress={_handleLongPress}
            >
                Press me!
            </Button>    
        </View>
  );
};
 