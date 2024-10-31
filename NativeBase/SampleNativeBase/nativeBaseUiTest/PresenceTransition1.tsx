import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {PresenceTransition, Center, Button} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {useState} from 'react';
import React from 'react';
// import Svg, {Path} from 'react-native-svg';
function Example() {
  return (
    <View>
      <Text>as</Text>
    </View>
  );
}

const PresenceTransitionTest1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="initial">
            <TestCase itShould="initial" tags={['dev']}>
              <View style={styles.section}>
                <Text>initial-未设置translateX:200, translateY:200, </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        setIsOpen(false), setIsOpen1(!isOpen1);
                      }}>
                      {isOpen1 ? 'Hide' : 'Show'}
                    </Button>
                    <PresenceTransition
                      visible={isOpen1}
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      onTransitionComplete={e => {
                        console.log(e);
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 250,
                        },
                      }}>
                      <Center w="200" h="100" mt="7" bg="teal.500" rounded="md">
                        ScaleFade
                      </Center>
                    </PresenceTransition>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="initial">
            <TestCase
              itShould="initial-设置了translateX:200,
                        translateY:200,"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>initial </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        setIsOpen3(!isOpen3);
                      }}>
                      {isOpen3 ? 'Hide' : 'Show'}
                    </Button>
                    <PresenceTransition
                      visible={isOpen3}
                      initial={{
                        opacity: 1,
                        scale: 0,
                        translateX: 200,
                        translateY: 200,
                      }}
                      onTransitionComplete={e => {
                        console.log(e);
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 250,
                        },
                      }}>
                      <Center w="200" h="100" mt="7" bg="teal.500" rounded="md">
                        ScaleFade
                      </Center>
                    </PresenceTransition>
                  </Center>
                </View>
              </View>
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

export default PresenceTransitionTest1;
