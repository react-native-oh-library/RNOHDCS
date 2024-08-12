
import React from 'react';
import { View } from 'react-native';
import CheckboxExample from './Components/CheckboxGroup'
import RadioExample from './Components/RadioGroup'
import ControlledSwitch from './Components/Switch';
import ToggleButton from './Components/ToggleButton'
import OverlayContainerExample from './Components/OverlayContainer'
import TriggerWrapper from './Components/TriggerWrapper'

export const ReactNativeAria = () => {

    return <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}><CheckboxExample /></View>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}><RadioExample /></View>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}><ControlledSwitch /></View>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}><ToggleButton /></View>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}> <OverlayContainerExample /></View>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}><TriggerWrapper /></View>
    </View>
}

export default ReactNativeAria