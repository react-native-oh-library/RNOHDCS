import {View, StyleSheet, ScrollView} from 'react-native';

import {
  HStack,
  IconButton,
  Text,
  WarningIcon,
  Box,
  CloseIcon,
  SearchIcon,
  StatusBar,
  AddIcon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function StatusBarTest() {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Basic">
            <TestCase itShould="Basic" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <StatusBar bg="#3700B3" barStyle="light-content" />
                  <Box safeAreaTop bg="violet.600" />
                  <HStack
                    bg="violet.800"
                    px="1"
                    py="3"
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                    maxW="350">
                    <HStack alignItems="center">
                      <IconButton
                        icon={
                          <WarningIcon color="white" name="plus" size="sm" />
                        }
                      />
                      <Text color="white" fontSize="20" fontWeight="bold">
                        Home
                      </Text>
                    </HStack>
                    <HStack>
                      <IconButton icon={<CloseIcon size="3" />} />
                      <IconButton icon={<SearchIcon size="3" />} />
                      <IconButton icon={<AddIcon size="3" />} />
                    </HStack>
                  </HStack>
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
