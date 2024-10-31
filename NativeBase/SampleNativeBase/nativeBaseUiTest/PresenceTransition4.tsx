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

const PresenceTransitionTest4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [translateX, setTranslateX] = useState(1);
  const [translateY, setTranslateY] = useState(1);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="exit">
            <TestCase itShould="exit" tags={['dev']}>
              <View style={styles.section}>
                <Text>exit </Text>
                <Text>
                  translateX:{translateX}, translateY:{translateY},
                </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        setTranslateX(translateX === 1 ? 100 : 1),
                          setTranslateY(translateY === 1 ? 100 : 1);
                      }}>
                      设置opacity的值
                    </Button>
                    <Button onPress={() => setIsOpen5(!isOpen5)}>
                      {isOpen5 ? 'Hide' : 'Show'}
                    </Button>
                    <PresenceTransition
                      visible={isOpen5}
                      initial={{
                        opacity: 0,
                      }}
                      exit={{
                        opacity: 1,
                        scale: 2,
                        translateX: translateX,
                        translateY: translateY,
                      }}>
                      <Center
                        mt="7"
                        bg="teal.500"
                        rounded="md"
                        w="200"
                        h="100"
                        _text={{
                          color: 'white',
                        }}>
                        Fade
                      </Center>
                    </PresenceTransition>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          {/* <TestSuite name="exit">
            <TestCase itShould="exit" tags={['dev']}>
              <View style={styles.section}>
                <Text>exit </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen6(!isOpen6)}>
                      {isOpen6 ? 'Hide' : 'Show'}
                    </Button>
                    <PresenceTransition
                      visible={isOpen6}
                      initial={{
                        opacity: 0,
                      }}
                      exit={{
                        opacity: 0.5,
                        scale: 5,
                        // translateX: 200,
                        // translateY: 200,
                      }}>
                      <Center
                        mt="7"
                        bg="teal.500"
                        rounded="md"
                        w="200"
                        h="100"
                        _text={{
                          color: 'white',
                        }}>
                        Fade
                      </Center>
                    </PresenceTransition>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite> */}
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

export default PresenceTransitionTest4;
