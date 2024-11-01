import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';


export function ListAccordion() {
    const [AccordionText, setAccordionText] = useState('');
    return (
        <ScrollView>
            <Tester>
                <TestSuite name='List.Accordion' >
                    <TestCase itShould={'auto:可以响应;none:无法响应'} >
                        <List.Accordion
                            title="点击展开"
                        >
                            <List.Item title="none,点击无响应" pointerEvents='none' onPress={() => setAccordionText('none')}/>
                            <List.Item title="auto,允许点击" pointerEvents='auto' onPress={() => setAccordionText('auto')}/>
                        </List.Accordion>
                    </TestCase>
                    <View style={{backgroundColor:'white'}}>
                    <Text>响应的属性为:{AccordionText}</Text>
                    </View>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
};

export default ListAccordion;