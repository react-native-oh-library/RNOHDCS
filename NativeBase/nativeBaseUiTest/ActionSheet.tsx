import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Actionsheet,
  useDisclose,
  Center,
  Button,
  Box,
  Text,
  Icon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {Path} from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export function ActionSheetTest() {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="size">
            <TestCase itShould="Svg" tags={['dev']}>
              <View style={styles.section}>
                <Text>Text</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={onOpen}>Actionsheet</Button>
                    <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
                      <Actionsheet.Content>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item
                        startIcon={
                          <Icon as={MaterialIcons} size="6" name="delete" />
                        }
                        >
                          Delete
                        </Actionsheet.Item>
                        <Actionsheet.Item
                        startIcon={
                          <Icon as={MaterialIcons} name="favorite" size="6" />
                        }
                        >
                          Share
                        </Actionsheet.Item>
                        <Actionsheet.Item
                        startIcon={
                          <Icon as={Ionicons} name="play-circle" size="6" />
                        }
                        >
                          Play
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={MaterialIcons} size="6" name="favorite" />
                          }
                          onPress={onClose}>
                          Favourite colick close
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          isDisabled
                          startIcon={
                            <Icon viewBox="0 0 24 24" size="6" fill="none">
                              <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
                            </Icon>
                          }>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
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
