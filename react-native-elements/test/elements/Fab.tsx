import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FAB, Button } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="FAB属性color 设置多个颜色的FAB">
          <TestCase itShould="设置颜色的FAB" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置为黑色</Text>
              <FAB
                visible={visible}
                color="black"
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>设置为蓝色</Text>
              <FAB
                visible={visible}
                color="blue"
                icon={{ name: 'heartbeat', type: 'font-awesome', color: 'white' }}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>设置为红色</Text>
              <FAB
                visible={visible}
                color="red"
                icon={{
                  name: 'map-marker',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="FAB属性placement 的枚举验证">
          <TestCase itShould="placement的枚举验证" tags={['C_API']}>
            <View
              style={[
                styles.container,
                { height: 80, justifyContent: 'flex-start' },
              ]}>
              <Text style={styles.subText}>left靠左显示</Text>
              <FAB
                style={{ top: 40 }}
                placement="left"
                visible={visible}
                title="Navigate"
                upperCase
                icon={{
                  name: 'map-marker',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </View>
            <View
              style={[
                styles.container,
                { height: 80, justifyContent: 'flex-start' },
              ]}>
              <Text style={styles.subText}>right靠右显示</Text>
              <FAB
                style={{ top: 40 }}
                visible={visible}
                onPress={() => setVisible(!visible)}
                placement="right"
                title="Hide"
                icon={{ name: 'heartbeat', type: 'font-awesome', color: 'white' }}
                color="red"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="FAB属性size 的枚举验证">
          <TestCase itShould="设置颜色的FAB" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置为small</Text>
              <FAB
                size="small"
                visible={visible}
                color="black"
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>设置为large</Text>
              <FAB
                size="large"
                visible={visible}
                color="black"
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="FAB属性style 样式设置">
          <TestCase itShould="添加自定义样式" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>自定义颜色</Text>
              <FAB
                style={{
                  borderRadius: 0,
                  width: 100,
                  height: 50,
                  backgroundColor: 'yellow',
                  alignSelf: 'center',
                }}
                size="small"
                visible={visible}
                color="red"
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="FAB属性upperCase 小写转大写">
          <TestCase itShould="upperCase小写转大写" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>upperCase转为大写</Text>
              <FAB
                title={'upperCase'}
                size="small"
                visible={visible}
                color="red"
                upperCase
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="FAB属性visible 控制显示和隐藏">
          <TestCase itShould="visible为true显示 false隐藏" tags={['C_API']}>
            <View style={styles.container}>
              <Button
                onPress={() => setVisible(!visible)}
                style={styles.subText}>
                设置点击事件 点击切换visible的值 来控制显示和隐藏
              </Button>
              <FAB
                size="small"
                visible={visible}
                color="red"
                upperCase
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="FAB属性disable 接收Button的disable属性">
          <TestCase itShould="设置disable属性为ture" tags={['C_API']}>
            <View style={styles.container}>
              <FAB
                disabled={true}
                size="small"
                visible={visible}
                color="red"
                upperCase
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
          </TestCase>
          <TestCase itShould="设置disable属性为false" tags={['C_API']}>
            <View style={styles.container}>
              <FAB
                disabled={false}
                size="small"
                visible={visible}
                color="red"
                upperCase
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="FAB属性disableStyle 接收Button的disableStyle属性">
          <TestCase itShould="Button的disableStyle" tags={['C_API']}>
            <View style={styles.container}>
              <FAB
                disabledStyle={{width:100,height:100,backgroundColor:'green'}}
                disabled={true}
                size="small"
                visible={visible}
                color="red"
                upperCase
                icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#222',
  },
  vertical: {
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#222',
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
{
  /* <TestSuite name='FAB'>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 5,
            flexGrow: 1,
            height: '80%'
          }}
        >
          <TestCase itShould='Small Size' tags={['C_API']}>
            <FAB
              loading
              visible={visible}
              icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              size="small"
            />
          </TestCase>
          <TestCase itShould='Large Size' tags={['C_API']}>
            <FAB
              visible={visible}
              icon={{ name: 'heartbeat', type: 'font-awesome', color: 'white' }}
              color="green"
            />
          </TestCase>
          <TestCase itShould='Primary Color' tags={['C_API']}>
            <FAB
              visible={visible}
              title="Navigate"
              icon={{ name: 'map-marker', type: 'font-awesome', color: 'white' }}
              size="small"
            />
          </TestCase>
          <TestCase itShould='Disabled' tags={['C_API']}>
            <FAB
              visible={visible}
              disabled
              title="Extended"
              icon={{
                name: 'map-marker',
                type: 'font-awesome',
                color: 'white',
              }}
            />
          </TestCase>
          <TestCase itShould='Visible' tags={['C_API']}>
            <View style={{height:80}}></View>
            <FAB
              visible={visible}
              onPress={() => setVisible(!visible)}
              placement="right"
              title="Hide"
              icon={{ name: 'remove', type: 'font-awesome', color: 'white' }}
              color="red"
            />
            <FAB
              visible={!visible}
              onPress={() => setVisible(!visible)}
              placement="left"
              title="Show"
              icon={{ name: 'pencil', type: 'font-awesome', color: 'white' }}
              color="green"
            />
          </TestCase>
        </View>
      </TestSuite> */
}
