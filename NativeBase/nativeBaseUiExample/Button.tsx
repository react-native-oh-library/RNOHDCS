import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button, Flex, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
export function ButtonExample() {
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>颜色按钮</Text>
          <View style={styles.BtnSection}>
            <Button colorScheme="blue">blue</Button>
            <Button colorScheme="amber">amber</Button>
            <Button colorScheme="red">black</Button>
            <Button colorScheme="blueGray">blueGray</Button>
            <Button colorScheme="coolGray">coolGray</Button>
            <Button colorScheme="cyan">cyan</Button>
            <Button colorScheme="dark">dark</Button>
            <Button colorScheme="emerald">emerald</Button>
            <Button colorScheme="fuchsia">fuchsia</Button>
            <Button colorScheme="green">green</Button>
          </View>
          <Text>状态按钮</Text>
          <View style={styles.BtnSection}>
            <Button colorScheme="danger">danger</Button>
            <Button colorScheme="error">error</Button>
            <Button colorScheme="info">info</Button>
            <Button colorScheme="success">success</Button>
          </View>
        </View>
        <View style={styles.BtnSection}>
          <Button colorScheme="blue" variant="ghost">
            ghost
          </Button>
          <Button colorScheme="blue" variant="link">
            link
          </Button>
          <Button colorScheme="blue" variant="outline">
            outline
          </Button>
          <Button colorScheme="blue" variant="solid">
            solid
          </Button>
          <Button colorScheme="blue" variant="subtle">
            subtle
          </Button>
          <Button colorScheme="blue" variant="unstyled">
            unstyled
          </Button>
        </View>

        <View style={styles.BtnSection}>
          <Button isDisabled>isDisabled</Button>
          <Button isFocusVisible>isFocusVisible</Button>
          <Button isHovered>isHovered</Button>
          <Button isPressed>isPressed</Button>
          <Button isFocused>isFocused</Button>
          <Button
            isDisabled
            _disabled={{
              backgroundColor: 'amber.400:alpha.70',
              _text: {
                color: 'orange.800',
                fontSize: '20',
              },
            }}>
            isDisabled
          </Button>
          <Button
            isLoading
            isLoadingText="正在加载中..."
            _loading={{
              backgroundColor: 'amber.400:alpha.70',
              _text: {
                color: 'orange.800',
                fontSize: '20',
              },
            }}></Button>
          <Button
            _hover={{
              backgroundColor: 'amber.400:alpha.70',
              _text: {
                color: 'orange.800',
                fontSize: '20',
              },
            }}>
            isHovered
          </Button>
          <Button
            _pressed={{
              backgroundColor: 'amber.400:alpha.70',
              _text: {
                color: 'orange.800',
                fontSize: '20',
              },
            }}>
            isPressed
          </Button>
          <Button
            _focus={{
              backgroundColor: 'amber.400:alpha.70',
              _text: {
                color: 'orange.800',
                fontSize: '20',
              },
            }}>
            isFocused
          </Button>
          <Button
            _focusVisible={{
              backgroundColor: 'amber.400:alpha.70',
              _text: {
                color: 'orange.800',
                fontSize: '20',
              },
            }}>
            isFocusVisible
          </Button>
        </View>

        <View style={styles.BtnSection}>
          <Button size="lg">lg</Button>
          <Button size="md">md</Button>
          <Button size="sm">sm</Button>
          <Button size="xs">xs</Button>
        </View>

        <Flex
          direction="row"
          wrap="wrap"
          alignItems="center"
          justifyContent="flex-start">
          <Button
            startIcon={
              <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
            }
            _icon={{width: 20, height: 20}}>
            startIcon
          </Button>
          <Button
            endIcon={
              <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
            }
            _icon={{width: 20, height: 20}}>
            endIcon
          </Button>
          <Button
            variant="subtle"
            endIcon={
              <Icon as={Ionicons} name="cloud-download-outline" size="sm" />
            }
            _icon={{width: 20, height: 20}}>
            rightIcon
          </Button>
          <Button
            leftIcon={
              <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
            }
            _icon={{width: 20, height: 20}}>
            leftIcon
          </Button>
        </Flex>

        <View style={styles.BtnSection}>
          <Button
            backgroundColor="orange.100"
            _text={{
              color: 'orange.800',
              fontSize: '20',
            }}>
            button内部文本显示
          </Button>
          <Button
            backgroundColor="blue.100"
            _text={{
              color: 'blue.500',
              fontSize: '20',
            }}>
            button内部文本显示
          </Button>
          <Button
            _text={{
              color: 'gray.600',
              fontSize: '20',
              backgroundColor: 'gray.100',
            }}>
            button内部文本显示
          </Button>
        </View>

        <Button
          isLoading
          isLoadingText="Loading文本"
          _text={{
            color: 'orange.800',
            fontSize: '20',
            backgroundColor: 'amber',
          }}>
          _text
        </Button>
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
  BtnSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
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
