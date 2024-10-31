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

const PresenceTransitionTest6 = () => {
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
          <TestSuite name="as">
            <TestCase
              itShould="as-值<View>
                            <Text>as</Text>
                          </View>"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>as </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen7(!isOpen7)}>
                      {isOpen7 ? 'Hide' : 'Show'}
                    </Button>
                    <PresenceTransition
                      // @ts-ignore
                      as={() => {
                        return (
                          <View>
                            <Text>as 文字</Text>
                          </View>
                        );
                      }}
                      visible={isOpen7}
                      initial={{
                        opacity: 0,
                      }}
                      exit={{
                        opacity: 0.5,
                        scale: 2,
                      }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 250,
                        },
                      }}
                      children={
                        <Center
                          mt="7"
                          bg="teal.500"
                          rounded="md"
                          w="200"
                          h="100"
                          _text={{
                            color: 'white',
                          }}>
                          children
                        </Center>
                      }></PresenceTransition>
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

export default PresenceTransitionTest6;
