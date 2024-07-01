import {Text, ScrollView, View, StyleSheet} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function Shadow2DemoTester() {
  const sidesTypes: string[] = ['start', 'end', 'top', 'bottom'];

  const caseSidesList = sidesTypes.map(s => {
    const otherSides: Record<string, boolean> = {};
    sidesTypes
      .filter(o => o !== s)
      .map(v => {
        otherSides[v] = false;
      });
    return {
      describe: 'sides',
      cn: `阴影边框，${s}`,
      key: `sides_${s}`,
      name: 'sides',
      value: {[s]: true, ...otherSides},
    };
  });

  const caseList = [
    {
      describe: 'base',
      cn: '默认样式',
      key: 'base',
      name: 'base',
      value: '',
    },
    {
      describe: 'startColor',
      cn: '起始样式，#eb9066d8',
      key: 'startColor_1',
      name: 'startColor',
      value: '#eb9066d8',
    },
    {
      describe: 'startColor',
      cn: '起始样式，#eb1166d8',
      key: 'startColor_2',
      name: 'startColor',
      value: '#eb1166d8',
    },
    {
      describe: 'startColor',
      cn: '起始样式，#eb4916d8',
      key: 'startColor_3',
      name: 'startColor',
      value: '#eb4916d8',
    },
    {
      describe: 'endColor',
      cn: '结束样式，#ff00ff10',
      key: 'endColor_1',
      name: 'endColor',
      value: '#ff00ff10',
    },
    {
      describe: 'endColor',
      cn: '结束样式，#00EE76',
      key: 'endColor_2',
      name: 'endColor',
      value: '#00EE76',
    },
    {
      describe: 'endColor',
      cn: '结束样式，#87CEFA',
      key: 'endColor_3',
      name: 'endColor',
      value: '#87CEFA',
    },
    {
      describe: 'distance',
      cn: '阴影距离，50',
      key: 'distance',
      name: 'distance',
      value: 50,
    },
    {
      describe: 'distance',
      cn: '阴影距离，80',
      key: 'distance_2',
      name: 'distance',
      value: 80,
    },
    {
      describe: 'distance',
      cn: '阴影距离，100',
      key: 'distance_3',
      name: 'distance',
      value: 100,
    },
    ...caseSidesList,
    {
      describe: 'style',
      cn: '子容器样式，#00FF7F',
      key: 'style_1',
      name: 'style',
      value: {backgroundColor: '#00FF7F'},
    },
    {
      describe: 'style',
      cn: '子容器样式，	#FFD700',
      key: 'style_2',
      name: 'style',
      value: {backgroundColor: '#FFD700'},
    },
    {
      describe: 'style',
      cn: '子容器样式，#FF6A6A',
      key: 'style_3',
      name: 'style',
      value: {backgroundColor: '#FF6A6A'},
    },
    {
      describe: 'stretch',
      cn: '铺满可用空间，true',
      key: 'stretch_t',
      name: 'stretch',
      value: true,
    },
    {
      describe: 'stretch',
      cn: '铺满可用空间，false',
      key: 'stretch_f',
      name: 'stretch',
      value: false,
    },
    {
      describe: 'safeRender',
      cn: '安装渲染，true',
      key: 'safeRender_t',
      name: 'safeRender',
      value: true,
      dom: (
        <View style={{width: 200, height: 200}} key="safeRender_t">
          <Shadow distance={10} safeRender={true}>
            <Text
              style={{
                width: '100%',
                height: '80%',
                backgroundColor: 'red',
              }}>
              safeRender
            </Text>
          </Shadow>
        </View>
      ),
    },
    {
      describe: 'safeRender',
      cn: '安装渲染，false',
      key: 'safeRender_f',
      name: 'safeRender',
      value: false,
      dom: (
        <View style={{width: 200, height: 200}} key="safeRender_f">
          <Shadow distance={10} safeRender={false}>
            <Text
              style={{
                width: '100%',
                height: '80%',
                backgroundColor: 'red',
              }}>
              safeRender
            </Text>
          </Shadow>
        </View>
      ),
    },
    {
      describe: 'disabled',
      cn: '禁用阴影，true',
      key: 'disabled_t',
      name: 'disabled',
      value: true,
    },
    {
      describe: 'disabled',
      cn: '禁用阴影，false',
      key: 'disabled_f',
      name: 'disabled',
      value: false,
    },
  ];

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-shadow-2">
          <View style={styles.container}>
            <View style={styles.sliders}>
              {caseList.map(item => {
                if ('dom' in item) {
                  return item.dom;
                }
                return (
                  <TestCase
                    tags={['C_API']}
                    itShould={item.describe + `（${item.cn}）`}
                    key={item.key}>
                    <Shadow {...{[item.name]: item.value}}>
                      <Text style={styles.box}>{item.name}</Text>
                    </Shadow>
                  </TestCase>
                );
              })}
            </View>
          </View>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: 20,
    width: 280,
  },
  shadow: {
    marginBottom: 20,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
  },
  box: {
    margin: 20,
    fontSize: 16,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
