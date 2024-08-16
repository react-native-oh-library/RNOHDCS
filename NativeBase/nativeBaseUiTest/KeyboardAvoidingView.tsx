import {View, StyleSheet, ScrollView} from 'react-native';
import {
  KeyboardAvoidingView,
  Center,
  VStack,
  Heading,
  Text,
  Input,
  Button,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import { Platform } from "react-native";

export function KeyboardAvoidingViewTest() {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="KeyboardAvoidingView">
            <TestCase itShould="KeyboardAvoidingView" tags={['dev']}>
              <View style={styles.section}>
                <Text>KeyboardAvoidingView</Text>
                <View style={styles.subSection}>
                  <KeyboardAvoidingView
                    h={{
                      base: '400px',
                      lg: 'auto',
                    }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Center>
                      <VStack
                        flex="1"
                        justifyContent="flex-end"
                        w="100%"
                        maxW="300">
                        <Heading mb="3">Forgot Password</Heading>
                        <Text color="muted.400">
                          Not to worry! Enter email address associated with your
                          account and we’ll send a link to reset your password.
                        </Text>
                        <Input placeholder="Email Address" mt="10" mb="4" />
                        <Button mb="4">Proceed</Button>
                      </VStack>
                    </Center>
                  </KeyboardAvoidingView>
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
