import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Platform, TouchableOpacity, Alert, processColor, ScrollView } from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

//DevEco Studio\sdk\HarmonyOS-NEXT-DB5\openharmony\ets\build-tools\ets-loader\sysResource.js这里面有系统图标
const Icons = {
  //sys.symbol.paintbrush_fill为填充画笔
  changeColor: 'sys.symbol.paintbrush',
  transparent: 'sys.symbol.ohos_trash',
  toggleCircle: 'sys.symbol.ohos_circle'
}


export const ContextMenuViewTest = () => {
  const [color, setColor] = useState('red');
  const [previousColor, setPreviousColor] = useState('blue');
  const [circle, setCircle] = useState(false)

  return (
    <Tester>
      <TestSuite name="ContextMenuViewTest">
        <TestCase
          tags={['C_API']}
          itShould="整体效果">
          <SafeAreaView >
            <ContextMenu
              //ContextMenu的范围由view撑开
              title={'Customize'}
              //设置为true表示只会单击生效，没有动效等
              // dropdownMenuMode={true}
              actions={[
                {
                  title: 'Change Color',
                  systemIcon: Icons.changeColor,
                  subtitle: '改变颜色',
                  iconColor: 'green',
                  // inlineChildren: true,
                  actions: [
                    {
                      title: 'Blue',
                      subtitle: '点击会变蓝色',
                      systemIcon: color === 'blue' ? 'sys.symbol.paintbrush_fill' : 'sys.symbol.paintbrush',
                    },
                    {
                      title: 'Red',
                      subtitle: '点击会变红色',
                      systemIcon: color === 'red' ? 'sys.symbol.paintbrush_fill' : 'sys.symbol.paintbrush',
                    },
                  ]
                },
                {
                  title: 'Transparent',
                  systemIcon: Icons.transparent,
                  destructive: true,
                  iconColor: 'red',
                },
                {
                  title: 'Toggle Circle',
                  systemIcon: Icons.toggleCircle,
                  subtitle: '点击变圈圈',
                  iconColor: 'blue',
                  disabled:false
                },
                {
                  title: 'Disabled Item',
                  disabled: true,
                },
                {
                  title: '凑热闹的',
                  actions: [
                    {
                      title: 'yellow',
                      subtitle: '点我变黄色',
                      systemIcon: color === 'yellow' ? 'sys.symbol.paintbrush_fill' : 'sys.symbol.paintbrush',
                    },
                    {
                      title: 'black',
                      subtitle: '点我变黑色',
                      systemIcon: color === 'black' ? 'sys.symbol.paintbrush_fill' : 'sys.symbol.paintbrush',
                    },
                    {
                      title: 'green',
                      subtitle: '点我变绿色',
                      systemIcon: color === 'green' ? 'sys.symbol.paintbrush_fill' : 'sys.symbol.paintbrush',
                    },
                    {
                      title: '让我康康你还有没有下一级目录',
                      actions: [
                        {
                          title: '你猜',
                          actions: [
                            { title: '你再猜猜？' }
                          ]
                        },
                        {
                          title: '我要是不呢',
                        },
                      ]
                    },

                  ]
                },
              ]}
              // dropdownMenuMode={true}
              onPress={(event) => {
                const { index, indexPath, name } = event.nativeEvent;
                console.log("index:", index)
                console.log("indexPath:", indexPath)
                console.log("name:", name)
                if (indexPath?.at(0) == 0) {
                  // The first item is nested in a submenu
                  console.log("00000000")
                  setColor(name.toLowerCase());
                } else if (index == 1) {
                  console.log("111111111")
                  if (color !== 'transparent') {
                    setPreviousColor(color);
                    setColor('transparent');
                  } else {
                    setColor(previousColor);
                  }
                } else if (index == 2) {
                  console.log("2222222")
                  setCircle(!circle)
                }
              }}
              onCancel={() => {
                console.log('CANCELLED')
                setColor('white');
              }}
            >
              <View style={[styles.rectangle, { backgroundColor: color, borderRadius: circle ? 999 : 0 }]} />
            </ContextMenu>
          </SafeAreaView >
        </TestCase>
      </TestSuite>

      <TestSuite name="ContextMenuViewTest2">
        <TestCase
          tags={['C_API']}
          itShould="整体效果2">
          <SafeAreaView >
            <ContextMenu
              title={'Dropdown Menu'}
              actions={[
                {
                  title: 'Test Item',
                  subtitle: '副标题',
                  actions: [
                    {
                      title: '二级目录',
                    }
                  ]
                },
                {
                  title: '凑热闹',
                  subtitle: '凑热闹',
                  selected:false,
                  actions: [
                    {
                      title: '凑热闹',
                    }
                  ]
                },
                {
                  title: 'Test Item',
                  subtitle: '副标题',
                  selected:true,
                  actions: [
                    {
                      title: '二级目录',
                      selected:true,
                    }
                  ]
                }
              ]}
              dropdownMenuMode={true}
            >
              <View style={[styles.rectangle, { backgroundColor: 'purple' }]} />
            </ContextMenu>
          </SafeAreaView >
        </TestCase>
      </TestSuite>
    </Tester>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  rectangle: {
    marginLeft: 80,
    width: 200,
    height: 200,
  },
  spacer: {
    height: 50,
  },
  rectangl2: {
    marginLeft: 50,
    width: 100,
    height: 100,
    //999为圆，0为正方形
    borderRadius: 0
  },
});