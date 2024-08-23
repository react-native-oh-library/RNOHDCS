import React, { Component } from 'react';
import Button from 'react-native-button';
import { View } from 'react-native';

export default class ReactNativeButtonExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isState: false
        };
      }

    _handlePress() {
        this.setState(prevstate => ({
            isState: !prevstate.isState,
        })
        );
    }

    render() {
        const { isState } = this.state;
        const currentStylestate = isState ? { padding: 15, overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink', margin: 20 } : null;
        return (
            <View>
                <Button
                    style={{ fontSize: 20, color: 'white', backgroundColor: 'green', margin: 20 }}
                    containerStyle={currentStylestate}
                    disabled={false}
                    accessibilityLabel="The button is press me"
                    childGroupStyle={{backgroundColor: 'black'}}
                    onPress={() => this._handlePress()}
                >
                    Press me!
                </Button>
            </View>
        );
    }
};
