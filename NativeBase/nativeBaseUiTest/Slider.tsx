import {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import {Slider, FormControl, Icon, Box} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function SliderTest() {
  const [onChangeValue, setOnChangeValue] = useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = useState(70);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="事件">
            <TestCase itShould="change" tags={['dev']}>
              <View style={styles.section}>
                <Text>事件</Text>
                <Text style={{textAlign: 'center'}}>
                  onChangeValue - {onChangeValue}
                </Text>
                <Text style={{textAlign: 'center'}}>
                  onChangeEndValue - {onChangeEndValue}
                </Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={70}
                    colorScheme="cyan"
                    onChange={v => {
                      setOnChangeValue(Math.floor(v));
                    }}
                    onChangeEnd={v => {
                      v && setOnChangeEndValue(Math.floor(v));
                    }}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="颜色">
            <TestCase itShould="Color" tags={['dev']}>
              <View style={styles.section}>
                <Text>颜色</Text>
                <View style={styles.subSection}>
                  <Slider defaultValue={70} colorScheme="orange">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Slider defaultValue={70} colorScheme="emerald">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Slider defaultValue={70} colorScheme="indigo">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="大小">
            <TestCase itShould="Size" tags={['dev']}>
              <View style={styles.section}>
                <Text>大小</Text>
                <View style={styles.subSection}>
                  <Slider defaultValue={40} size="sm">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Slider defaultValue={60} size="md">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Slider defaultValue={80} size="lg">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="表单控制">
            <TestCase itShould="Form Controlled" tags={['dev']}>
              <View style={styles.section}>
                <Text>表单控制</Text>
                <View style={styles.subSection}>
                  <FormControl isInvalid>
                    <FormControl.Label>Set your budget</FormControl.Label>
                    <Slider defaultValue={50}>
                      <Slider.Track>
                        <Slider.FilledTrack />
                      </Slider.Track>
                      <Slider.Thumb />
                    </Slider>
                    <FormControl.ErrorMessage>
                      Something is wrong.
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="自定义">
            <TestCase itShould="Customised" tags={['dev']}>
              <View style={styles.section}>
                <Text>自定义</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <Slider
                      defaultValue={70}
                      size="sm"
                      colorScheme="green"
                      w="75%"
                      maxW="300">
                      <Slider.Track bg="green.100">
                        <Slider.FilledTrack bg="green.600" />
                      </Slider.Track>
                      <Slider.Thumb borderWidth="0" bg="transparent">
                        <Icon
                          as={<MaterialIcons name="person" />}
                          name="park"
                          color="green.600"
                          size="sm"
                        />
                      </Slider.Thumb>
                    </Slider>
                  </Box>
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
