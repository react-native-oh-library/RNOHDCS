import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { List } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';


export function ListAccordionBox() {
    const [AccordionText, setAccordionText] = useState('');
    return (
        <ScrollView>
            <Tester>
                <TestSuite name='List.Accordion' >
                    <TestCase itShould={'box-only:设置在子组件的view上面,可以使子组件无法响应点击事件;box-none:设置在子组件的view上面,可以使子组件响应点击事件'} >
                        <List.Accordion
                            title="点击展开"
                        >
                            <View pointerEvents="box-only">
                                <Text style={{ backgroundColor: 'red', height: 100 }} onPress={() =>setAccordionText( 'box-only')}>
                                box-only:设置在子组件的view上面,可以使子组件无法响应点击事件
                                </Text>
                            </View>
                            <View pointerEvents="box-none">
                                <Text style={{ backgroundColor: 'green', height: 100 }} onPress={() =>setAccordionText('box-none')}>
                                box-none:设置在子组件的view上面,可以使子组件响应点击事件
                                </Text>
                            </View>
                        </List.Accordion>
                    </TestCase>

                    <View>
                        <Text style={{backgroundColor:'white'}}>此时响应的是:{AccordionText}</Text>
                    </View>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
};

export default ListAccordionBox;