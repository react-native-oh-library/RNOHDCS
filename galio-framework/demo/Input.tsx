import {Input} from 'galio-framework';
import React from 'react';
import {View } from 'react-native';

const InputExample = () => {
    return (
        <View>
            <Input
               placeholder="Input with Icon on right"
               right
               icon="heart"
               family="antdesign"
               iconSize={14}
               iconColor="red"
               placeholderTextColor="#4F8EC9"
            />
        </View>
    )
}

export default InputExample