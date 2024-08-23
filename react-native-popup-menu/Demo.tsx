import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useMemo, useCallback } from 'react'
import BasicExample from './BasicExample'
import AdvancedExample from './Example'
import ControlledExample from './ControlledExample'
import MenuMethodsExample from './MenuMethodsExample'
import ExtensionExample from './ExtensionExample'
import ModalExample from './ModalExample'
import StylingExample from './StylingExample'
import TouchableExample from './TouchableExample'
import NonRootExample from './NonRootExample'
import CloseOnBackExample from './CloseOnBackExample'
import FlatListExample from './FlatListExample'
import InFlatListExample from './InFlatListExample'
import PopoverExample from './PopoverExample'

const demos = [
    { Component: BasicExample, name: 'MenuTrigger example', key: "BasicExample" },
    { Component: AdvancedExample, name: 'Advanced example', key: 'AdvancedExample' },
    { Component: ControlledExample, name: 'Controlled example', key: 'ControlledExample' },
    { Component: MenuMethodsExample, name: 'Controlling menu using menu methods', key: 'MenuMethodsExample' },
    { Component: ExtensionExample, name: 'Extensions example', key: 'ExtensionExample' },
    { Component: ModalExample, name: 'Modal example', key: 'ModalExample' },
    { Component: StylingExample, name: 'Styling example', key: 'StylingExample' },
    { Component: TouchableExample, name: 'Touchable config example', key: 'TouchableExample' },
    { Component: NonRootExample, name: 'Non root example', key: 'NonRootExample' },
    { Component: CloseOnBackExample, name: 'Close on back button press example', key: 'CloseOnBackExample' },
    { Component: FlatListExample, name: 'Using FlatList', key: 'FlatListExample' },
    { Component: InFlatListExample, name: 'Menu in FlatList', key: 'InFlatListExample' },
    { Component: PopoverExample, name: 'Popover renderer', key: 'PopoverExample' },
];

export default function Demo() {
    const [currentDemoKey, setCurrentDemoKey] = useState('')

    const demoNavClickHandle = useCallback((item) => setCurrentDemoKey(item.key), [])
    const backClickHandle = useCallback(() => setCurrentDemoKey(''), [])

    const currentDemo = useMemo(() => {
        const target = demos.find(item => item.key === currentDemoKey)
        console.log(target && target.key)
        if(target) return <target.Component />
        return <Text>Select Demo</Text> 
    }, [currentDemoKey])
    const demoMenu = useMemo(() => demos.map((item, index) => (
      <Text style={styles.navItem} key={item.key} onPress={() => demoNavClickHandle(item)}>{index+1}. {item.name}</Text>
    )), [])
  
    return (
        <View style={styles.container}>
            <View style={styles.demoNav}>{demoMenu}</View>
            {currentDemoKey && (<View style={styles.demoPanel}>{currentDemo}</View>)}
            {currentDemoKey && (<View style={styles.backButtonPanel}><Button title='Back' onPress={() => backClickHandle()}></Button></View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        width: '100%',
        height: '100%'
    },
    demoNav: {
        padding: 30,
        paddingTop: 60

    },
    navItem: {
      fontSize: 18,
      color: '#00f'
    },
    demoPanel: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 99,
        elevation: 99,
        backgroundColor: 'rgba(255,255,255, 1)',
        paddingTop: 60
    },
    backButtonPanel: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 100,
        elevation: 100,
        width: '100%',
        paddingBottom: 10,
        alignItems: 'center'
    }
})
