import React, {useState} from 'react';
import FlipCard from 'react-native-flip-card';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
export const FlipCardExample = () => {
  const [flip, setFlip] = useState(false);
  const [clickable, setClickable] = useState(true);
  const [friction, setFriction] = useState(6);
  const [perspective, setPerspective] = useState(1000);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const [flipVertical, setFlipVertical] = useState(true);
  const [onFlipStartText, setonFlipStartText] = useState('');
  const [useNativeDriver, setuseNativeDriver] = useState(true);
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestSuite name="FlipCard">
          <TestCase itShould="默认显示面false默认The Face" tags={['C_API']}>
            <View style={{height: 100}}>
              <Button
                title={`点击设置默认显示面 当前:${flip}`}
                onPress={() => setFlip(true)}
              />
              <FlipCard flip={flip}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="是否可以点击翻转" tags={['C_API']}>
            <View style={{height: 100}}>
              <Button
                title={`点击设置是否点击翻转 ${clickable}`}
                onPress={() => {
                  if (clickable) {
                    setClickable(false);
                  } else {
                    setClickable(true);
                  }
                }}
              />
              <FlipCard clickable={clickable}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="设置摩擦力系数" tags={['C_API']}>
            <View style={{height: 100}}>
              <Button
                title={`设置摩擦力系数: ${friction}`}
                onPress={() => {
                  setFriction(3);
                }}
              />
              <FlipCard friction={friction}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="设置视角偏移量" tags={['C_API']}>
            <View style={{height: 100}}>
              <Button
                title={`设置视角偏移量: ${perspective}`}
                onPress={() => {
                  setPerspective(2000);
                }}
              />
              <FlipCard perspective={perspective}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="设置卡片横向翻转" tags={['C_API']}>
            <View style={{height: 100}}>
              <Button
                title={`设置卡片横向翻转: ${flipHorizontal}`}
                onPress={() => {
                  setFlipHorizontal(true);
                  setFlipVertical(false);
                }}
              />
              <FlipCard
                flipHorizontal={flipHorizontal}
                flipVertical={flipVertical}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="设置卡片竖向翻转" tags={['C_API']}>
            <View style={{height: 100}}>
              <Button
                title={`设置卡片竖向翻转: ${flipVertical}`}
                onPress={() => {
                  setFlipHorizontal(false);
                  setFlipVertical(true);
                }}
              />
              <FlipCard
                flipVertical={flipVertical}
                flipHorizontal={flipHorizontal}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="设置卡片对角翻转" tags={['C_API']}>
            <View style={{height: 100}}>
              <Button
                title={`设置卡片对角翻转`}
                onPress={() => {
                  setFlipHorizontal(true);
                  setFlipVertical(true);
                }}
              />
              <FlipCard
                flipVertical={flipVertical}
                flipHorizontal={flipHorizontal}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="卡片开始翻转的回调函数" tags={['C_API']}>
            <View style={{height: 100}}>
              <Text>{onFlipStartText}</Text>
              <FlipCard
                onFlipStart={() => {
                  setonFlipStartText('onFlipStart');
                }}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="卡片翻转结束的回调函数" tags={['C_API']}>
            <View style={{height: 100}}>
              <Text>{onFlipStartText}</Text>
              <FlipCard
                onFlipEnd={() => {
                  setonFlipStartText('onFlipEnd');
                }}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>

          <TestCase itShould="以卡片的最大高度为高度" tags={['C_API']}>
            <View>
              <FlipCard alignHeight={true}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>T</Text>
                  <Text>h</Text>
                  <Text>e</Text>
                  <Text></Text>
                  <Text>B</Text>
                  <Text>a</Text>
                  <Text>c</Text>
                  <Text>k</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="以卡片的最大宽度为宽度" tags={['C_API']}>
            <View style={{width: 200}}>
              <FlipCard alignWidth={true}>
                <View style={styles.face}>
                  <Text>The Face_____________________________</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
          <TestCase itShould="启用原生动画" tags={['C_API']}>
            <View style={{height: 100}}>
              <Button
                title={`启用原生动画${useNativeDriver}`}
                onPress={() => {
                  if (useNativeDriver) {
                    setuseNativeDriver(false);
                  } else {
                    setuseNativeDriver(true);
                  }
                }}
              />
              <FlipCard useNativeDriver={useNativeDriver}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                </View>
                <View style={styles.back}>
                  <Text>The Back</Text>
                </View>
              </FlipCard>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    width: 200,
    marginTop: 20,
  },
  face: {
    flex: 1,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex: 1,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
    marginTop: 30,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#007AFF',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    height: 64,
  },
});
