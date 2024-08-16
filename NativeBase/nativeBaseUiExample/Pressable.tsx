import React, {useEffect, useState} from 'react';
import {Button, View, StyleSheet, ScrollView, TextInput} from 'react-native';
import {Box, HStack, Text, Badge, Spacer, Pressable} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
export function PressExample() {
  const creatPresableUI = (props: any) => {
    const [bg, setBg] = React.useState('coolGray.300');

    return (
      <Pressable
        {...props}
        onPress={() => console.log("I'm Pressed")}
        rounded="8"
        overflow="hidden"
        borderWidth="1"
        borderColor={bg}
        maxW="96"
        shadow="3"
        bg="coolGray.100"
        p="5">
        <Box>
          <HStack alignItems="center">
            <Badge
              colorScheme="darkBlue"
              _text={{
                color: 'white',
              }}
              variant="solid"
              rounded="4">
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
    );
  };
  return (
    <>
      <ScrollView style={styles.content}>
        <Box alignItems="center">{creatPresableUI({})}</Box>
        {creatPresableUI({isDisabled: true})}
        {creatPresableUI({isHovered: true})}
        {creatPresableUI({isPressed: true})}
        {creatPresableUI({isFocused: true})}
        {creatPresableUI({isFocusVisible: true})}
        {creatPresableUI({isHovered: true, _hover: {bg: 'amber.600'}})}
        {creatPresableUI({isPressed: true, _hover: {bg: 'red'}})}
        {creatPresableUI({isFocused: true, _hover: {bg: 'grey'}})}
        {creatPresableUI({isDisabled: true, _hover: {bg: 'blue'}})}
        {creatPresableUI({isFocusVisible: true, _hover: {bg: 'orange'}})}
        {creatPresableUI({onHoverIn: () => {}})}
      </ScrollView>
    </>
  );
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
    backgroundColor: '#f2f2f2',
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
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  colText: {
    padding: 5,
  },
  col: {
    backgroundColor: '#FFB6C1',
  },
  row: {
    backgroundColor: '#00BFFF',
  },
});
