import {View, StyleSheet, ScrollView} from 'react-native';
import {Avatar, Center, Text, VStack, HStack} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React, {useEffect} from 'react';

const AvatarTest = () => {
  const myRef = React.useRef();
  useEffect(() => {
    console.log(myRef)
  }, []);

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="source">
            <TestCase itShould="source" tags={['dev']}>
              <View style={styles.section}>
                <Text>source </Text>
                <View style={styles.subSection}>
                  <HStack justifyContent="center" space={2}>
                    <Avatar
                      bg="green.900"
                      // _image={{width: 50}}
                      source={{
                        uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                      }}>
                      AJ
                    </Avatar>
                    <Avatar
                      bg="cyan.500"
                      source={{
                        uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                      }}>
                      TE
                    </Avatar>
                    <Avatar
                      bg="indigo.500"
                      source={{
                        uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                      }}>
                      JB
                    </Avatar>
                    <Avatar
                      bg="amber.500"
                      source={{
                        uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                      }}>
                      TS
                    </Avatar>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_image">
            <TestCase itShould="_image" tags={['dev']}>
              <View style={styles.section}>
                <Text>_image </Text>
                <View style={styles.subSection}>
                  <HStack justifyContent="center" space={2}>
                    <Avatar
                      bg="green.900"
                      _image={{width: 100}}
                      source={{
                        uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                      }}>
                      AJ
                    </Avatar>
                    <Avatar
                      bg="cyan.500"
                      _image={{width: 100}}
                      source={{
                        uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                      }}>
                      TE
                    </Avatar>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <Center>
                <VStack
                  space={2}
                  alignItems={{
                    base: 'center',
                    md: 'flex-start',
                  }}>
                  <Avatar
                    bg="green.500"
                    alignSelf="center"
                    size="xs"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    }}>
                    AJ
                  </Avatar>
                  <Avatar
                    bg="cyan.500"
                    alignSelf="center"
                    size="sm"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                    }}>
                    HS
                  </Avatar>
                  <Avatar
                    bg="indigo.500"
                    alignSelf="center"
                    size="md"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    }}>
                    RS
                  </Avatar>
                  <Avatar
                    alignSelf="center"
                    bg="amber.500"
                    size="lg"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                    }}>
                    AK
                  </Avatar>
                  <Avatar
                    bg="pink.600"
                    alignSelf="center"
                    size="xl"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
                    }}>
                    GG
                  </Avatar>
                  <Avatar
                    bg="purple.600"
                    alignSelf="center"
                    size="2xl"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
                    }}>
                    RB
                  </Avatar>
                </VStack>
              </Center>
            </TestCase>
          </TestSuite>

          <TestSuite name="wrapperRef">
            <TestCase itShould="wrapperRef" tags={['dev']}>
              <HStack
                justifyContent="center"
                mx={{
                  base: 'auto',
                  md: '0',
                }}
                space={2}>
                <Avatar
                  wrapperRef={myRef}
                  bg="green.500"
                  mr="1"
                  source={{
                    uri: 'https://bit.ly/broken-link',
                  }}>
                  RS
                </Avatar>
                <Avatar
                  bg="amber.500"
                  source={{
                    uri: 'https://bit.ly/broken-link',
                  }}>
                  MR
                </Avatar>
                <Avatar
                  bg="lightBlue.400"
                  source={{
                    uri: 'https://bit.ly/broken-link',
                  }}>
                  --
                </Avatar>
              </HStack>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
});

export default AvatarTest;
