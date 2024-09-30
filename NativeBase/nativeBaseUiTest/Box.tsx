import React, { useEffect, useRef, useState } from 'react';
import { Button, View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { Box } from 'native-base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export function BoxTest() {
  const ref = useRef(null);
  
    return <>

        <Tester>
            <ScrollView style={styles.content}>
                <TestSuite name='children'>
                    <TestCase
                        itShould="children"
                        children={(<View style={styles.section}>
                            <Box  style={styles.box}>
                                <Button key='button001' title='button'></Button>
                                <Text>测试Text</Text>
                                <View>测试View</View>
                            </Box>
                        </View>)}
                        tags={['dev']}
                    />
                </TestSuite>
                <TestSuite name='_text'>
                    <TestCase
                        itShould="_text"
                        children={(<View style={styles.section}>
                            <Box style={styles.box} _text={{color:'red'}}>
                            测试text
                            </Box>
                        </View>)}
                        tags={['dev']}
                    />
                </TestSuite>
                <TestSuite name='bg'>
                    <TestCase
                        itShould="bg"
                        children={(<View style={styles.section}>
                            <Box style={styles.box} bg='#87CEFA'>
                            </Box>
                        </View>)}
                        tags={['dev']}
                    />
                </TestSuite>
                <TestSuite name='background'>
                    <TestCase
                        itShould="background"
                        children={(<View style={styles.section}>
                            <Box style={styles.box} background='#87CEFA'>
                            </Box>
                        </View>)}
                        tags={['dev']}
                    />
                </TestSuite>
                <TestSuite name='bgColor'>
                    <TestCase
                        itShould="bgColor"
                        children={(<View style={styles.section}>
                            <Box style={styles.box} bgColor='#87CEFA'>
                            </Box>
                        </View>)}
                        tags={['dev']}
                    />
                </TestSuite>
                <TestSuite name='backgroundColor'>
                    <TestCase
                        itShould="backgroundColor"
                        children={(<View style={styles.section}>
                            <Box style={styles.box} backgroundColor='#87CEFA'>
                            </Box>
                        </View>)}
                        tags={['dev']}
                    />
                </TestSuite>
                <TestSuite name='linearGradient'>
                    <TestCase
                        itShould="linearGradient"
                        children={(<View style={styles.section}>
                            <Box  style={styles.box} backgroundColor={{ linearGradient: { colors: ['#fff', '#000'], start: [0, 0], end: [1, 0] }, locations: [0.2, 0.6]}}>
                            </Box>
                        </View>)}
                        tags={['dev']}
                    />
                </TestSuite>
                <TestSuite name='safeAreaProps'>
                    <TestCase
                        itShould="safeAreaProps"
                    
                        children={(<View style={styles.section}>
                            <Box  style={styles.box} backgroundColor='#87CEFA' safeAreaProps={{ safeAreaTop: 10, safeAreaBottom: 10, safeAreaLeft: 20, safeAreaRight: 20 }}>
                                
                            </Box>
                        </View>)}
                        tags={['dev']}
                    />
                </TestSuite>
                <TestSuite name=''>
                    <TestCase
                        itShould=''
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <View style={styles.section}>
                                    <Box ref={ref}>
                                        
                                    </Box>
                                </View>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>

    </>

}
const styles = StyleSheet.create({
    btn: {
        width: 60,
        height: 60,
        aspectRatio: 1,
    },
    content: {
        width: '100%',
        height: '100%',
    },
    section: {
        backgroundColor:'#f2f2f2'
    },
    box: {
       height:100,
       width:200,
    },
    tipText: {
        fontSize: 12,
        color: '#999',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
        color: '#fff'
    },
    colText: {
        padding: 5,
    },
    col: {
        backgroundColor: '#FFB6C1'
    },
    row: {
        backgroundColor: '#00BFFF'
    },

});