import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Center, Box, VStack, HStack, Button, Skeleton, Text} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function SkeletonExample() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState('');
  setTimeout(() => {
    setIsLoaded(true);
    setText(
      'Lose yourself in the greens of nature, the ones that make you strong. Come visit us at the Greenway Park, and we will be happy to show you around.',
    );
  }, 5000);
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
          <View style={styles.subSection}>
            <Center w="100%">
              <VStack
                w="90%"
                maxW="400"
                borderWidth="1"
                space={8}
                overflow="hidden"
                rounded="md"
                _dark={{
                  borderColor: 'coolGray.500',
                }}
                _light={{
                  borderColor: 'coolGray.200',
                }}>
                <Skeleton h="40" />
                <Skeleton.Text px="4" />
                <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
              </VStack>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>位置</Text>
          <View style={styles.subSection}>
            <Center w="100%">
              <HStack
                w="90%"
                maxW="400"
                borderWidth="1"
                space={8}
                rounded="md"
                _dark={{
                  borderColor: 'coolGray.500',
                }}
                _light={{
                  borderColor: 'coolGray.200',
                }}
                p="4">
                <Skeleton
                  flex="1"
                  h="150"
                  rounded="md"
                  startColor="coolGray.100"
                />
                <VStack flex="3" space="4">
                  <Skeleton startColor="amber.300" />
                  <Skeleton.Text />
                  <HStack space="2" alignItems="center">
                    <Skeleton size="5" rounded="full" />
                    <Skeleton h="3" flex="2" rounded="full" />
                    <Skeleton
                      h="3"
                      flex="1"
                      rounded="full"
                      startColor="indigo.300"
                    />
                  </HStack>
                </VStack>
              </HStack>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Composition</Text>
          <View style={styles.subSection}>
            <Center w="100%">
              <VStack
                w="90%"
                maxW="400"
                borderWidth="1"
                space={6}
                rounded="md"
                alignItems="center"
                _dark={{
                  borderColor: 'coolGray.500',
                }}
                _light={{
                  borderColor: 'coolGray.200',
                }}>
                <Skeleton h="40" />
                <Skeleton
                  borderWidth={1}
                  borderColor="coolGray.200"
                  endColor="warmGray.50"
                  size="20"
                  rounded="full"
                  mt="-70"
                />
                <HStack space="2">
                  <Skeleton size="5" rounded="full" />
                  <Skeleton size="5" rounded="full" />
                  <Skeleton size="5" rounded="full" />
                  <Skeleton size="5" rounded="full" />
                  <Skeleton size="5" rounded="full" />
                </HStack>
                <Skeleton.Text lines={3} alignItems="center" px="12" />
                <Skeleton mb="3" w="40" rounded="20" />
              </VStack>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>IsLoaded</Text>
          <View style={styles.subSection}>
            <Center w="100%">
              <Box w="90%" maxWidth="400">
                <VStack
                  maxWidth="400"
                  borderWidth="1"
                  space={8}
                  overflow="hidden"
                  rounded="md"
                  _dark={{
                    borderColor: 'coolGray.500',
                  }}
                  _light={{
                    borderColor: 'coolGray.200',
                  }}>
                  <Skeleton h="40" isLoaded={isLoaded}></Skeleton>
                  <Skeleton.Text lines={4} px="4" isLoaded={isLoaded}>
                    <Text px="4" fontSize={'md'} lineHeight={'20px'}>
                      {text}
                    </Text>
                  </Skeleton.Text>
                  <Skeleton
                    px="4"
                    mb="4"
                    rounded="md"
                    startColor="primary.100"
                    isLoaded={isLoaded}>
                    <Button m="4">Explore</Button>
                  </Skeleton>
                </VStack>
              </Box>
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
