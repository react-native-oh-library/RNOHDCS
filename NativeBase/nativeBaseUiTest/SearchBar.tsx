import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Box,
  Text,
  Heading,
  VStack,
  Input,
  Center,
  Divider,
  Icon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchBar() {
  return (
    <VStack
      my="4"
      space={5}
      w="100%"
      maxW="300px"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Cupertino</Heading>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<MaterialIcons name="mic" size={20} />}
            />
          }
        />
      </VStack>

      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Material</Heading>
        <Input
          placeholder="Search People & Places"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            // <Icon
            //   m="2"
            //   ml="3"
            //   size="6"
            //   color="gray.400"
            //   as={<MaterialIcons name="search" size={20} color="red" />}
            // />
            <Icon
              as={MaterialIcons}
              name="search"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
          InputRightElement={
            <Icon
              as={MaterialCommunityIcons}
              name="web"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
        />
      </VStack>
    </VStack>
  );
}
export function SearchBarTest() {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="SearchBar">
            <TestCase itShould="SearchBar" tags={['dev']}>
              <View style={styles.section}>
                <Text>SearchBar</Text>
                <View style={styles.subSection}>
                  <Center flex={1} px="3">
                    <SearchBar />
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
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
