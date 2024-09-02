import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Box, TextArea, Stack, Divider} from 'native-base';

export function TextAreaExample() {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>基础</Text>
          <View style={styles.subSection}>
            <Box alignItems="center" w="100%">
              <TextArea
                h={20}
                placeholder="Text Area Placeholder"
                w="75%"
                maxW="300"
                autoCompleteType
              />
            </Box>
          </View>
        </View>
        <View style={styles.section}>
          <Text> Disabled TextArea</Text>
          <View style={styles.subSection}>
            <Box alignItems="center" w="100%">
              <Stack space={2.5} w="75%" maxW="300">
                <Box>
                  <Text>Invalid TextArea</Text>
                  <TextArea
                    aria-label="t1"
                    numberOfLines={4}
                    placeholder="Invalid TextArea"
                    isInvalid
                    _dark={{
                      placeholderTextColor: 'gray.300',
                    }}
                    mb="5"
                    autoCompleteType
                  />
                  <Divider />
                </Box>
                <Box>
                  <Text>Disabled TextArea</Text>

                  <TextArea
                    aria-label="t1Disabled"
                    placeholder="Disabled TextArea"
                    isDisabled
                    autoCompleteType
                  />
                </Box>
              </Stack>
            </Box>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Value Controlled TextArea</Text>
          <View style={styles.subSection}>
            <Box alignItems="center" w="100%">
              <TextArea
                value={textAreaValue}
                // onChange={e => setTextAreaValue(e.currentTarget.value)} // for web
                onChangeText={text => setTextAreaValue(text)} // for android and ios
                w="75%"
                maxW="300"
                autoCompleteType
              />
            </Box>
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
