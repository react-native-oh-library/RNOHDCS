import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {PresenceTransition, Center, Button} from 'native-base';
import {useState} from 'react';

export function PresenceTransitionExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>PresenceTransition </Text>
          <View style={styles.subSection}>
            <Center>
              <Button onPress={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Hide' : 'Show'}
              </Button>
              <PresenceTransition
                visible={isOpen}
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
        <View style={styles.section}>
          <Text>ScaleFssdfsadfade </Text>
          <View style={styles.subSection}>
            <Center>
              <Button onPress={() => setIsOpen1(!isOpen1)}>
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
      </ScrollView>
    </>
  );
}

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
