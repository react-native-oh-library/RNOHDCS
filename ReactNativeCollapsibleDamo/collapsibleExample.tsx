
import React, { useState } from 'react';
import { Switch, ScrollView, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

export function collapsibleExample() {
    const [activeSections, setActiveSections] = useState([0]);
    
    const [collapsed, setCollapsed] = useState(true);
    const [multipleSelect, setMultipleSelect] = useState(false);
    
    function toggleExpanded() {
        setCollapsed(!collapsed)
    };

    function setSections(b :number|number[]){
        if(typeof b === 'number' ){
            if(multipleSelect){
                for (const key of activeSections) {
                    if(key == b)
                       return;
               }
               setActiveSections([...activeSections,b]);
               
            }else{
                setActiveSections([b]);
            }
        }else{
            setActiveSections(b);
        }
    }

    function renderHeader(section: any, _: any, isActive: any) {
        return (
            <Animatable.View
                duration={400}
                style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor" >
                <Pressable  onPress = {()=>{ setSections(_);}} >
                     <Text style={styles.headerText}>{section.title}</Text>
                </Pressable >
            </Animatable.View>
        );
    };

    function renderContent(section: any, _: any, isActive: any) {
        return (
            <Animatable.View
                duration={400}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor" >
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    }

    const [r, setr] = useState([0]);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
                <Text style={styles.title}>Accordion Example</Text>
                <View style={styles.multipleToggle}>
                    <Text style={styles.multipleToggle__title}>Multiple Select?</Text>
                    <Switch value={multipleSelect} onValueChange={(a) => setMultipleSelect(a)} />
                </View>
                <View style={styles.selectors}>
                    <Text style={styles.selectTitle}>Select:</Text>

                    {SELECTORS.map((selector) => (
                        <TouchableOpacity
                            key={selector.title}
                            onPress={() => {
                                if(selector.value != undefined){
                                    setSections(selector.value)
                                }else{ setActiveSections([]); }
                            }}>
                            <View style={styles.selector}>
                                <Text style={ selector.value != undefined && activeSections.includes(selector.value) && styles.activeSelector } >
                                    {selector.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity onPress={toggleExpanded}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Single Collapsible</Text>
                    </View>
                </TouchableOpacity>
                <Collapsible 
                    collapsed={collapsed} align="center"
                    onAnimationEnd = { ()=>{ console.log("log:动画结束") } }
                    duration = { 1000 }
                    collapsedHeight = { 0 }
                >
                    <View style={styles.content}>
                        <Text>
                            Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                            ribs
                        </Text>
                    </View>
                </Collapsible>
                <Accordion
                    activeSections={activeSections}
                    sections={CONTENT}
                    touchableComponent={TouchableOpacity}
                    expandMultiple={multipleSelect}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    duration={400}
                    onChange={setActiveSections}
                    renderAsFlatList={false}
                />
            </ScrollView>
        </View>
    );
}

const BACON_IPSUM =
'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
    { title: 'First', feet: '1', content: BACON_IPSUM},
    { title: 'Second', feet: '2', content: BACON_IPSUM},
    { title: 'Third', feet: '3', content: BACON_IPSUM },
    { title: 'Fourth', feet: '4', content: BACON_IPSUM},
    { title: 'Fifth', feet: '5', content: BACON_IPSUM },
];

const SELECTORS = [
    { title: 'First', value: 0, },
    { title: 'Second', value: 1, },
    { title: 'Third', value: 2, },
    { title: 'Fourth', value: 3, },
    { title: 'Fifth', value: 4, },
    { title: 'None' },
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    feet :{
        backgroundColor: '#00FCFF',
        padding: 1,
    },
    stitle:{
        backgroundColor: '#0000FF',
        padding: 1,
    },
    feetText: {
        textAlign: 'right',
        fontSize: 7,
        fontWeight: '500',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});
