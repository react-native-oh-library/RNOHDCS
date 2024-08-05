import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Block, Accordion } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AccordionExample = () => {
    const [result, setReault] = useState('')
    const data = [
        { title: "1nd Chapter", content: "Lorem ipsum dolor sit amet" },
        { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
        { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
    ];

    const onAccordionClose = (index: any) => {
        setReault(JSON.stringify(index))
    };

    const onAccordionOpen = (index: any) => {
        setReault(JSON.stringify(index));
    };

    return (
        <ScrollView>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <View>
                <Accordion 
                dataArray={data} 
                icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                expandedIcon={<Ionicons name="arrow-down-sharp" size={20} color="red" />}
                onAccordionOpen={onAccordionOpen}
                onAccordionClose={onAccordionClose}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    accordion: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'red'
    },
    listStyle: {
        borderTopWidth: 5,
        borderTopColor: 'red',
        height: 100,
        backgroundColor: 'purple',
        borderBottomColor: 'red',
        borderBottomWidth: 5
    },
    headerStyle: {
        backgroundColor: '#5E72E4',
        padding: 10,
        borderTopWidth: 5,
        borderTopColor: 'red',
    },
    contentStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: 'purple'
    },
    inputArea: {
        width: '100%',
        height: 80,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    baseText: {
        width: '100%',
        height: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14
    },
});
export default AccordionExample