import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {
  VStack,
  FormControl,
  Input,
  Center,
  Box,
  Stack,
  Button,
  AddIcon,
  ArrowBackIcon,
  WarningOutlineIcon,
  CheckIcon,
  Select,
  Icon,
} from 'native-base';
import {useState} from 'react';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

function BuildingAFormExample() {
  const [formData, setData] = useState({});
  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl nativeID="nativeID">
        <FormControl.Label _text={{bold: true}}>Name</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={value => setData({...formData, name: value})}
        />
        <FormControl.HelperText
          _text={{
            fontSize: 'xs',
          }}>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage
          _text={{
            fontSize: 'xs',
          }}>
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}

const FormControlTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Basic">
            <TestCase itShould="测试nativeID" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试nativeID</Text>
                <View style={styles.subSection}>
                  <Center flex={1} px="3">
                    <BuildingAFormExample />
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试isRequired">
            <TestCase itShould="测试isRequired:true" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isRequired</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isRequired width={200}>
                        <Stack mx="4">
                          <FormControl.Label>Password</FormControl.Label>
                          <Input
                            type="password"
                            defaultValue="12345"
                            placeholder="password"
                          />
                        </Stack>
                      </FormControl>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试isRequired">
            <TestCase itShould="测试isRequired:false" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isRequired</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isRequired={false} width={200}>
                        <Stack mx="4">
                          <FormControl.Label>Password</FormControl.Label>
                          <Input
                            type="password"
                            defaultValue="12345"
                            placeholder="password"
                          />
                        </Stack>
                      </FormControl>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试isInvalid">
            <TestCase itShould="测试isInvalid:true" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isInvalid</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isInvalid>
                        <FormControl.Label>Project Title</FormControl.Label>
                        <Input placeholder="Title" />
                        <FormControl.ErrorMessage
                          leftIcon={<AddIcon size={5}></AddIcon>}>
                          Something is wrong.
                        </FormControl.ErrorMessage>
                      </FormControl>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试isInvalid">
            <TestCase itShould="测试isInvalid:false" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isInvalid</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isInvalid={false}>
                        <FormControl.Label>Project Title</FormControl.Label>
                        <Input placeholder="Title" />
                        <FormControl.ErrorMessage
                          leftIcon={<AddIcon size={5}></AddIcon>}>
                          Something is wrong.
                        </FormControl.ErrorMessage>
                      </FormControl>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试_invalid">
            <TestCase itShould="测试_invalid" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试_invalid</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isInvalid>
                        <FormControl.Label
                          _invalid={{
                            _text: {
                              color: 'gray.900',
                              fontWeight: 'bold',
                            },
                          }}>
                          Project Title
                        </FormControl.Label>
                        <Input placeholder="Title" />
                        <FormControl.ErrorMessage
                          leftIcon={<AddIcon size={5}></AddIcon>}>
                          Something is wrong.
                        </FormControl.ErrorMessage>
                      </FormControl>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试_disabled">
            <TestCase itShould="测试_disabled" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试_disabled</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isDisabled mb="5">
                        <FormControl.Label
                          _disabled={{
                            _text: {
                              color: 'gray.900',
                              fontWeight: 'bold',
                            },
                          }}>
                          Project Title
                        </FormControl.Label>
                        <Input placeholder="Title" />
                        <FormControl.HelperText>
                          Give your project a title.
                        </FormControl.HelperText>
                      </FormControl>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试isReadOnly">
            <TestCase itShould="测试isReadOnly:true" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isReadOnly</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isReadOnly mb="5">
                        <FormControl.Label>Project Title</FormControl.Label>
                        <Input placeholder="Title" />
                        <FormControl.HelperText>
                          Give your project a title.
                        </FormControl.HelperText>
                      </FormControl>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试isReadOnly">
            <TestCase itShould="测试isReadOnly:false" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isReadOnly</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isReadOnly={false} mb="5">
                        <FormControl.Label>Project Title</FormControl.Label>
                        <Input placeholder="Title" />
                        <FormControl.HelperText>
                          Give your project a title.
                        </FormControl.HelperText>
                      </FormControl>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试leftIcon">
            <TestCase itShould="测试leftIcon" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试leftIcon</Text>
                <View style={styles.subSection}>
                  <FormControl w="3/4" maxW="300" isRequired isInvalid>
                    <Input type="text" />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      icon
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试rightIcon">
            <TestCase itShould="测试rightIcon" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试rightIcon</Text>
                <View style={styles.subSection}>
                  <FormControl w="3/4" maxW="300" isRequired isInvalid>
                    <Input type="text" />
                    <FormControl.ErrorMessage
                      rightIcon={<WarningOutlineIcon size="xs" />}>
                      icon
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试startIcon">
            <TestCase itShould="测试startIcon" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试startIcon</Text>
                <View style={styles.subSection}>
                  <FormControl w="3/4" maxW="300" isRequired isInvalid>
                    <Input type="text" />
                    <FormControl.ErrorMessage
                      startIcon={<WarningOutlineIcon size="xs" />}>
                      icon
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试endIcon">
            <TestCase itShould="测试endIcon" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试endIcon</Text>
                <View style={styles.subSection}>
                  <FormControl w="3/4" maxW="300" isRequired isInvalid>
                    <Input type="text" />
                    <FormControl.ErrorMessage
                      endIcon={<WarningOutlineIcon size="xs" />}>
                      icon
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试htmlFor">
            <TestCase itShould="测试htmlFor-不生效" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <FormControl w="3/4" maxW="300">
                    <FormControl.Label htmlFor="myInput">
                      My Label
                    </FormControl.Label>
                    <Input id="myInput" />
                    <FormControl.ErrorMessage
                      endIcon={<WarningOutlineIcon size="xs" />}>
                      icon
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试_astrick">
            <TestCase itShould="测试_astrick-不生效" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <FormControl w="3/4" maxW="300">
                    <FormControl.Label
                      htmlFor="username"
                      _astrick={{
                        color: 'red.100',
                        fontWeight: 'bold',
                        backgroundColor: 'yellow.200',
                        fontSize: 100,
                      }}>
                      用户名
                    </FormControl.Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="请输入用户名"
                    />
                    <FormControl.ErrorMessage
                      endIcon={<WarningOutlineIcon size="xs" />}>
                      icon
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_stack">
            <TestCase itShould="_stack 添加背景色" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <FormControl w="3/4" maxW="300" isRequired isInvalid>
                    <Input type="text" />
                    <FormControl.ErrorMessage
                      _stack={{backgroundColor: 'red.200'}}
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      icon
                    </FormControl.ErrorMessage>
                  </FormControl>
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

export default FormControlTest;
