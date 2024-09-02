import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Box,HStack,Text,Badge,Spacer,Pressable } from 'native-base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
export  function PressTest() {
  const creatPresableUI =(props:any)=>{
    const [bg, setBg] = React.useState("coolGray.300");
    
     return  <Pressable {...props} onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor={bg} maxW="96" shadow="3" bg="coolGray.100" p="5">
     <Box>
       <HStack alignItems="center">
         <Badge colorScheme="darkBlue" _text={{
         color: "white"
       }} variant="solid" rounded="4">
           Business
         </Badge>
         <Spacer />
         <Text fontSize={10} color="coolGray.800">
           1 month ago
         </Text>
       </HStack>
       <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
         Marketing License
       </Text>
       <Text mt="2" fontSize="sm" color="coolGray.700">
         Unlock powerfull time-saving tools for creating email delivery and
         collecting marketing data
       </Text>
     </Box>
   </Pressable>
   }
    return <>

        <Tester>
            <ScrollView style={styles.content}>
            <TestSuite name='children'>
                    <TestCase
                        itShould="children"
                        tags={['dev']}
                    >
                       <Box alignItems="center">
                  {creatPresableUI({})}
    </Box>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isDisabled'>
                    <TestCase
                        itShould="isDisabled"
                        tags={['dev']}
                    >
                         {creatPresableUI({isDisabled:true})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='isHovered'>
                    <TestCase
                        itShould="isHovered"
                        tags={['dev']}
                    >
                       {creatPresableUI({isHovered:true})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='isPressed'>
                    <TestCase
                        itShould="isPressed"
                        tags={['dev']}
                    >
                       {creatPresableUI({isPressed:true})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='isFocused'>
                    <TestCase
                        itShould="isFocused"
                        tags={['dev']}
                    >
                    {creatPresableUI({isFocused:true})}
                    </TestCase>
                </TestSuite>
                
                <TestSuite name='isFocusVisible'>
                    <TestCase
                        itShould="isFocusVisible"
                        tags={['dev']}
                    >
                         {creatPresableUI({isFocusVisible:true})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='_hover'>
                    <TestCase
                        itShould="_hover"
                        tags={['dev']}
                    >
                         {creatPresableUI({isHovered:true,_hover:{bg:'amber.600'}})}
                    </TestCase>
                </TestSuite>

                <TestSuite name='_pressed'>
                    <TestCase
                        itShould="_pressed"
                        tags={['dev']}
                    >
                         {creatPresableUI({isPressed:true,_hover:{bg:'red'}})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='_focus'>
                    <TestCase
                        itShould="_focus"
                        tags={['dev']}
                    >
                           {creatPresableUI({isFocused:true,_hover:{bg:'grey'}})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='_disabled'>
                    <TestCase
                        itShould="_disabled"
                        tags={['dev']}
                    >
                          {creatPresableUI({isDisabled:true,_hover:{bg:'blue'}})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='_focusVisible'>
                    <TestCase
                        itShould="_focusVisible"
                        tags={['dev']}
                    >
                       {creatPresableUI({isFocusVisible:true,_hover:{bg:'orange'}})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='onHoverIn'>
                <TestCase
                        itShould="onHoverIn"
                        tags={['dev']}
                    >
                       {creatPresableUI({onHoverIn:()=>{
                          
                       }})}
                    </TestCase>
                </TestSuite>
                <TestSuite name='onHoverOut'>
                    <TestCase
                        itShould='onHoverOut'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <View style={styles.section}>
              
                                </View>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='onFocus'>
                    <TestCase
                        itShould='onFocus'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <View style={styles.section}>
              
                                </View>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='onBlur'>
                    <TestCase
                        itShould='onBlur'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <View style={styles.section}>
              
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
        backgroundColor: '#f2f2f2'
    },
    box: {
        height: 100,
        width: 200,
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