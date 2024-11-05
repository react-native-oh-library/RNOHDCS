import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, List } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';


export function ListAccordion() {
    const [AccordionText, setAccordionText] = useState('');
    const [isV3Boolean, setisV3Boolean] = useState(false);
    return (
        <ScrollView>
            <Tester>
                <TestSuite name='List.Accordion' >
                    <TestCase itShould={'auto:可以响应;none:无法响应,theme用来切换V3模式，默认为取消V3'} >
                        <List.Accordion
                            title="点击展开"
                            theme={{
                                isV3:isV3Boolean,
                                //此处修改颜色
                                colors:{background:'green'}
                                
                            }}
                        >
                            <List.Item title="none,点击无响应" pointerEvents='none' onPress={() => setAccordionText('none')}/>
                            <List.Item title="auto,允许点击" pointerEvents='auto' onPress={() => setAccordionText('auto')}/>
                        </List.Accordion>
                    </TestCase>
                    <View style={{backgroundColor:'white'}}>
                    <Text>响应的属性为:{AccordionText}</Text>
                    </View>
                    <Button onPress={()=>setisV3Boolean(true)}>
                        切换成V3显示
                    </Button>
                    <Button onPress={()=>setisV3Boolean(false)}>
                        取消V3显示
                    </Button>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
};

export default ListAccordion;