import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {AspectRatio, Image} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const AspectRatioTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="测试ratio属性">
            <TestCase
              itShould="测试ratio属性- height={{
                      base: 200,
                      md: 400,
                    }}"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>测试ratio属性</Text>
                <View style={styles.subSection}>
                  <AspectRatio
                    ratio={{
                      base: 3 / 4,
                      md: 9 / 10,
                    }}
                    height={{
                      base: 200,
                      md: 400,
                    }}>
                    <Image
                      resizeMode="cover"
                      source={{
                        uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                      }}
                      alt="Picture of a Flower"
                    />
                  </AspectRatio>
                </View>
              </View>
            </TestCase>
            <TestCase
              itShould="测试ratio属性-height={{
                      base: 100,
                      md: 400,
                    }}"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>测试ratio属性</Text>
                <View style={styles.subSection}>
                  <AspectRatio
                    ratio={{
                      base: 3 / 4,
                      md: 9 / 10,
                    }}
                    height={{
                      base: 100,
                      md: 400,
                    }}>
                    <Image
                      resizeMode="cover"
                      source={{
                        uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                      }}
                      alt="Picture of a Flower"
                    />
                  </AspectRatio>
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

export default AspectRatioTest;
