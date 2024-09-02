import {StyleSheet} from 'react-native';
import {
  ScrollView,
  Center,
  Heading,
  VStack,
  useTheme,
  View,
  Text,
} from 'native-base';

export function ScrollViewExample() {
  const {colors} = useTheme();
  return (
    <>
      <View style={styles.section}>
        <Text>ScrollView</Text>
        <ScrollView w={['200', '300']} h="80">
          <Center mt="3" mb="4">
            <Heading fontSize="xl">Cyan</Heading>
          </Center>
          <VStack flex="1">
            {Object.keys(colors.cyan).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py="4" bg={`cyan.${key}`}>
                    {key}
                  </Center>
                );
            })}
          </VStack>
          <Center mt="8" mb="4">
            <Heading fontSize="xl">Yellow</Heading>
          </Center>
          <VStack flex="1">
            {Object.keys(colors.cyan).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py="4" bg={`yellow.${key}`}>
                    {key}
                  </Center>
                );
            })}
          </VStack>
          <Center mt="8" mb="4">
            <Heading fontSize="xl"> Violet</Heading>
          </Center>
          <VStack flex="1">
            {Object.keys(colors.violet).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py="4" bg={`violet.${key}`}>
                    {key}
                  </Center>
                );
            })}
          </VStack>
        </ScrollView>
      </View>
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
