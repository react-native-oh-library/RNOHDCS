import React from 'react';
import { View } from 'react-native';
import { ProgressView } from "@react-native-community/progress-view";

export default function ProgressViewDemo() {
    return (
        <View>
            <ProgressView
                progressTintColor="orange"
                trackTintColor="blue"
                progress={0.7}
            />
        </View>
    );
}


