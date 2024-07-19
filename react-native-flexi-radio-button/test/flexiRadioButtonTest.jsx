import { TestSuite } from '@rnoh/testerino';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TestCase } from '../../components';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

export default class RadioButtonTest extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    render() {
        return (
            <TestSuite name="RadioButton">
                <TestCase.Example itShould="Basic RadioButton View">
                    <View style={basicStyles.container}>
                        <RadioGroup
                            onSelect={(index, value) => this.onSelect(index, value)}
                            activeColor='blue'
                        >
                            <RadioButton value={'item1'}>
                                <Text>This is item #1</Text>
                            </RadioButton>

                            <RadioButton value={'item2'} disabled={true}>
                                <Text>This is item #2</Text>
                            </RadioButton>

                            <RadioButton value={'item3'}>
                                <Text>This is item #3</Text>
                            </RadioButton>
                        </RadioGroup>

                        <Text style={basicStyles.text}>{this.state.text}</Text>
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Custom RadioButton View">
                    <View style={customStyles.container}>
                        <RadioGroup
                            size={24}
                            thickness={2}
                            color="#9575b2"
                            highlightColor="#ccc8b9"
                            selectedIndex={1}
                            onSelect={(index, value) => this.onSelect(index, value)}>
                            <RadioButton
                                style={{ alignItems: 'center' }}
                                value="Yo!! I am a cat."
                                disabled={false}>
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{
                                        uri: 'https://cloud.githubusercontent.com/assets/21040043/18446298/fa576974-794b-11e6-8430-b31b30846084.jpg',
                                    }}
                                />
                            </RadioButton>

                            <RadioButton value="index1">
                                <Text>Start from item index #1</Text>
                            </RadioButton>

                            <RadioButton value="red color" color="red">
                                <Text>Red Dot</Text>
                            </RadioButton>

                            <RadioButton value="green color" color="green">
                                <Text>Green Dot</Text>
                            </RadioButton>

                            <RadioButton value="blue color" color="blue">
                                <Text>Blue Dot</Text>
                            </RadioButton>
                        </RadioGroup>

                        <Text style={customStyles.text}>{this.state.text}</Text>
                    </View>
                </TestCase.Example>
            </TestSuite>
        );
    }
}
let basicStyles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },
    text: {
        padding: 10,
        fontSize: 14,
    },
});

let customStyles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    text: {
        padding: 10,
        fontSize: 14,
    },
})
