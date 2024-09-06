import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Avatar, Badge, Icon, withBadge} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
class BadgeComponent extends React.Component<{}, {}> {
  render() {
    return (
      <Text style={{fontSize: 28, backgroundColor: 'yellow', color: 'pink'}}>
        Badge
      </Text>
    );
  }
}
const badgeComponent = () => {
  const [onlongPress, setOnlongPress] = useState(false);
  const [onPress, setOnPress] = useState(false);
  const [onPressIn, setOnPressIn] = useState(false);
  const [onPressOut, setonPressOut] = useState(false);
  return (
    <Tester style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView>
        <TestSuite name="Badge属性Component的验证, 这个属性会返回一个新的组件覆盖原始组件">
          <TestCase itShould="Component" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge Component={BadgeComponent} />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性badgeStyle的验证，对Badge的样式设置">
          <TestCase itShould="badgeStyle" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={100}
                badgeStyle={{
                  borderStyle: 'solid',
                  borderColor: 'pink',
                  borderWidth: 2,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性containerStyle的验证，对Badge外部容器的样式设置">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={100}
                containerStyle={{
                  borderStyle: 'solid',
                  borderColor: 'pink',
                  borderWidth: 2,
                  width:100
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性onLongPress的验证，长按点击事件 长按后旁边小方块颜色会切换">
          <TestCase itShould="onLongPress" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={100}
                onLongPress={() => {
                  setOnlongPress(!onlongPress);
                }}
              />
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: onlongPress ? 'yellow' : 'gray',
                }}></View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性onPress的验证，点击事件 点击后旁边小方块颜色会切换">
          <TestCase itShould="onPress" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={100}
                onPress={() => {
                  setOnPress(!onPress);
                }}
              />
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: onPress ? 'yellow' : 'gray',
                }}></View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性onPressIn的验证，点击事件 手指点击上去时触发 触发后旁边小方块颜色会切换">
          <TestCase itShould="onPressIn" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={100}
                onPressIn={() => {
                  setOnPressIn(!onPressIn);
                }}
              />
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: onPressIn ? 'yellow' : 'gray',
                }}></View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性onPressOut的验证，点击事件 手指松开时触发 触发后旁边小方块颜色会切换">
          <TestCase itShould="onPressOut" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={100}
                onPressOut={() => {
                  setonPressOut(!onPressOut);
                }}
              />
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: onPressOut ? 'yellow' : 'gray',
                }}></View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性pressableProps的验证">
          <TestCase itShould="pressableProps" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={100}
                pressableProps={{
                  delayLongPress: 500,
                  android_ripple: {color: 'lightgrey', borderless: true},
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性status的验证，badge的各种状态 error primary success warning">
          <TestCase itShould="status:error" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge value={100} status="error" />
            </View>
          </TestCase>
          <TestCase itShould="status:primary" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge value={100} status="primary" />
            </View>
          </TestCase>
          <TestCase itShould="status:success" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge value={100} status="success" />
            </View>
          </TestCase>
          <TestCase itShould="status:warning" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge value={100} status="warning" />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性textProps的验证, badge上的文字的属性设置">
          <TestCase itShould="textProps" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={1000000}
                textProps={{
                  ellipsizeMode: 'tail',
                  numberOfLines: 0,
                  style: {
                    fontSize: 28,
                    color: 'pink',
                    fontWeight: '700',
                    width: 50,
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性textStyle的验证，badge上的文字的样式设置">
          <TestCase itShould="textStyle" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge
                value={100}
                textStyle={{fontSize: 28, color: 'yellow', textAlign: 'left'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Badge属性value的验证，badge上的文字的值的设置">
          <TestCase itShould="value" tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <View>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/4.jpg',
                  }}
                  size="large"
                />
                <Badge
                  status="error"
                  value={0}
                  containerStyle={{position: 'absolute', top: 5, left: 60}}
                />
              </View>
              <View>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/4.jpg',
                  }}
                  size="large"
                />
                <Badge
                  status="primary"
                  value={20}
                  containerStyle={{position: 'absolute', top: 5, left: 60}}
                />
              </View>
              <View>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/4.jpg',
                  }}
                  size="large"
                />
                <Badge
                  status="success"
                  value={80}
                  containerStyle={{position: 'absolute', top: 5, left: 60}}
                />
              </View>
              <View>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/4.jpg',
                  }}
                  size="large"
                />
                <Badge
                  status="warning"
                  value={100}
                  containerStyle={{position: 'absolute', top: 5, left: 60}}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default badgeComponent;
