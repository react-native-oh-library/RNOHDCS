import React, { useRef } from 'react';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { Appbar, Button, MD2Colors, Text, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type mode = 'small' | 'medium' | 'large' | 'center-aligned';


export function AppbarDemo() {
  const { bottom } = useSafeAreaInsets();
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleContent = () => console.log('Content');

  const AppbarProps = [
    {
      key: 'Appbar style:mode is small',
      value: {
        mode: 'small' as mode,
      }
    },
    {
      key: 'Appbar style:mode is medium',
      value: {
        mode: 'medium' as mode,
      }
    },
    {
      key: 'Appbar style:mode is large',
      value: {
        mode: 'large' as mode,
      }
    },
    {
      key: 'Appbar style:mode is center-aligned',
      value: {
        mode: 'center-aligned' as mode,
      }
    },
    {
      key: 'Appbar style:elevated is true',
      value: {
        elevated: true,
      }
    },
    {
      key: 'Appbar style:elevated is false',
      value: {
        elevated: false,
      }
    },
    {
      key: 'Appbar style:  theme: {colors : {surface : green}',
      value: {
        title: 'Title',
        theme: { colors: { surface: 'green' } }
      }
    },
    {
      key: 'Appbar style:  theme: {colors : {surface : pink} }',
      value: {
        title: 'Title',
        theme: { colors: { surface: 'pink' } }
      }
    },
    {
      key: 'Appbar style: {backgroundColor is MD2Colors.blue100}',
      value: {
        icon: "magnify",
        style: { backgroundColor: MD2Colors.blue100 }
      }
    }
  ]

  const AppbarActionProps = [
    {
      key: 'Appbar.Action style:icon= calendar',
      value: {
        icon: "calendar"
      }
    },
    {
      key: 'Appbar.Action style:color is MD2Colors.blue100',
      value: {
        color: MD2Colors.blue100,
        icon: "calendar"
      }
    },
    {
      key: 'Appbar.Action style:color is MD2Colors.red500',
      value: {
        color: MD2Colors.red500,
        icon: "calendar"
      }
    },
    {
      key: 'Appbar.Action style:icon is magnify',
      value: {
        icon: "magnify",
        rippleColor: MD2Colors.red500
      }
    },
    {
      key: 'Appbar.Action style:size is 30',
      value: {
        icon: "magnify",
        rippleColor: MD2Colors.red500,
        size: 30
      }
    },
    {
      key: 'Appbar.Action style:size is 40',
      value: {
        icon: "magnify",
        rippleColor: MD2Colors.red500,
        size: 40
      }
    },
    {
      key: 'Appbar.Action style: isLeading : false',
      value: {
        icon: "magnify",
        theme: {colors: { onSurface: 'green'}},
        isLeading : false,
      }
    },
    {
      key: 'Appbar.Action style: isLeading : true',
      value: {
        icon: "magnify",
        theme: {colors: { onSurface: 'green'}},
        isLeading : true,
      }
    },
    {
      key: 'Appbar.Action style:disabled is false',
      value: {
        icon: "magnify",
        size: 30,
        disabled: false,
        onPress: _handleSearch,
      }
    },
    {
      key: 'Appbar.Action style:disabled is true',
      value: {
        icon: "magnify",
        size: 30,
        disabled: true,
        onPress: _handleSearch,
      }
    },
    {
      key: 'Appbar.Action style:accessibilityLabel is accessibility(accessibilityLabel 属性，这是为了增强应用的无障碍性,该属性为屏幕阅读器提供了一个标签，这样视力障碍的用户就能通过语音助手了解界面上各个元素的功能)',
      value: {
        icon: "magnify",
        accessibilityLabel: 'accessibility'
      }
    },
    {
      key: 'Appbar.Action style:backgroundColor is MD2Colors.blue100',
      value: {
        icon: "magnify",
        style: { backgroundColor: MD2Colors.blue100 }
      }
    },

    {
      key: 'Appbar.Action style: theme: {colors: { onSurface: green}}',
      value: {
        icon: "magnify",
        isLeading : true,
        theme: {colors: { onSurface: 'green'}},
      }
    },
    {
      key: 'Appbar.Action style: theme: {colors: { onSurface: green}},',
      value: {
        isLeading : true,
        icon: "magnify",
        theme: {colors: { onSurface: 'red'}},
      }
    },

  ]


  const viewRef = useRef(null);
  // 你可以使用这个ref来访问View组件，例如测量其尺寸  
  const measureView = () => {
    if (viewRef.current) {
      // 这里只是为了演示如何访问ref  
      console.log('View is referenced');
    }
    console.log('View is viewRef');
  };

  const AppbarBackActionProps = [
    {
      key: 'Appbar.BackAction style:color is MD2Colors.blue100',
      value: {
        color: MD2Colors.blue100,
      }
    },
    {
      key: 'Appbar.BackAction style:color is MD2Colors.red100',
      value: {
        color: MD2Colors.red100,
      }
    },
    {
      key: 'Appbar.BackAction style:size is 20',
      value: {
        size: 20,
      }
    },
    {
      key: 'Appbar.BackAction style:size is 40',
      value: {
        size: 40,
      }
    },
    {
      key: 'Appbar.BackAction style:disabled is true',
      value: {
        disabled: true,
      }
    },
    {
      key: 'Appbar.BackAction style:disabled is false',
      value: {
        disabled: false,
      }
    },
    {
      key: 'Appbar.BackAction style:accessibilityLabel is Appbar.BackAction(这样视力障碍的用户就能通过语音助手了解界面上各个元素的功能)',
      value: {
        accessibilityLabel: 'Appbar.BackAction',
      }
    },
    {
      key: 'Appbar.BackAction style:style is backgroundColor:MD2Colors.blue100',
      value: {
        style: { backgroundColor: MD2Colors.blue100 }
      }
    },
  ]

  const AppbarContentActionProps = [
    {
      key: 'AppbarContent style:title is Title)',
      value: {
        title: 'Title',
      }
    },
    {
      key: 'AppbarContent style:titleStyle is {color:"red"})',
      value: {
        title: 'Title',
        titleStyle: { color: 'red' },
      }
    },
    {
      key: 'AppbarContent style:disabled:true',
      value: {
        title: 'Title',
        disabled: true,
        onPress: _handleSearch
      }
    },
    {
      key: 'AppbarContent style:disabled:false',
      value: {
        title: 'Title',
        disabled: false,
        onPress: _handleSearch
      }
    },
    {
      key: 'AppbarContent style:titleMaxFontSizeMultiplier is 2',
      value: {
        title: 'Title',
        titleMaxFontSizeMultiplier: 2
      }
    },
    {
      key: 'AppbarContent style: style is backgroundColor:MD2Colors.blue100',
      value: {
        title: 'Title',
        style: { backgroundColor: MD2Colors.blue100 }
      }
    },
    {
      key: 'AppbarContent style: testID is "test1"',
      value: {
        title: 'Title',
        testID: 'test1'
      }
    },
    {
      key: 'AppbarContent color: MD2Colors.pink700"})',
      value: {
        title: 'Title',
        color: MD2Colors.pink700,
      }
    },
    {
      key: 'AppbarContent color: MD2Colors.cyan500"})',
      value: {
        title: 'Title',
        color: MD2Colors.cyan500,
      }
    },
  ]

  const AppbarHeaderActionProps = [
    {
      key: 'AppbarHeader style:dark is true',
      value: {
        dark: true,
        style: { backgroundColor: MD2Colors.black }
      }
    },
    {
      key: 'AppbarHeader style:dark is flase',
      value: {
        dark: false,
        style: { backgroundColor: MD2Colors.white }
      }
    },
    {
      key: 'AppbarHeader style:statusBarHeight is 60',
      value: {
        statusBarHeight: 60,
      }
    },
    {
      key: 'AppbarHeader style:mode is small',
      value: {
        mode: 'small' as mode,
      }
    },
    {
      key: 'AppbarHeader style:mode is medium',
      value: {
        mode: 'medium' as mode,
      }
    },
    {
      key: 'AppbarHeader style:mode is large',
      value: {
        mode: 'large' as mode,
      }
    },
    {
      key: 'AppbarHeader style:mode is center-aligned',
      value: {
        mode: 'center-aligned' as mode,
      }
    },
    {
      key: 'AppbarHeader style:style is backgroundColor:MD2Colors.blue100',
      value: {
        mode: 'center-aligned' as mode,
        style: { backgroundColor: MD2Colors.blue100 }
      }
    },
    {
      key: 'AppbarHeader style:theme: { colors: { surface: yellow}}',
      value: {
        theme: { colors: { surface: 'yellow' } }
      }
    },
    {
      key: 'AppbarHeader style:theme: { colors: { surface: green}}',
      value: {
        theme: { colors: { surface: 'green' } }
      }
    },
    {
      key: 'AppbarHeader style:testID is AppbarHeader',
      value: {
        testID: 'AppbarHeader'
      }
    },
    {
      key: 'AppbarHeader style:elevated is true',
      value: {
        elevated: true
      }
    },
    {
      key: 'AppbarHeader style:elevated is false',
      value: {
        elevated: false
      }
    },
  ]

  return (
    <Tester>
      <ScrollView>
        <TestSuite name='Appbar'>
          <TestCase itShould='Appbar style safeAreaInsets = {bottom:30}'>
            <Appbar safeAreaInsets={{ bottom: 30 }}>
              <Appbar.Action icon="archive" onPress={() => { }} />
              <Appbar.Action icon="email" onPress={() => { }} />
              <Appbar.Action icon="label" onPress={() => { }} />
              <Appbar.Action icon="delete" onPress={() => { }} />
            </Appbar>
          </TestCase>

          <TestCase itShould='Appbar style safeAreaInsets = { top: 30}'>
            <Appbar safeAreaInsets={{ top: 30 }}>
              <Appbar.Action icon="archive" onPress={() => { }} />
              <Appbar.Action icon="email" onPress={() => { }} />
              <Appbar.Action icon="label" onPress={() => { }} />
              <Appbar.Action icon="delete" onPress={() => { }} />
            </Appbar>
          </TestCase>

          <TestCase itShould={"Appbar style children"} key={"Appbar style children"}>
            <Appbar
              children={<>
                <Appbar.BackAction onPress={() => { console.log('test Appbar children') }} />
                <Appbar.Content title="Title" />
                <Appbar.Action icon="magnify" rippleColor={MD2Colors.red500} />
              </>} />
          </TestCase>

          {AppbarProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} >
                <Appbar {...item.value}>
                  <Appbar.BackAction />
                  <Appbar.Content title="Title" />
                  <Appbar.Action icon="magnify" />
                  <Appbar.Action icon="dots-vertical" />
                </Appbar>
                <Text style={{ height: 20 }} children={undefined}></Text>
              </TestCase>
            );
          })}

          <TestCase itShould='Appbar.Action style rippleColor is MD2Colors.red500'>
            <Appbar.Header>
              <Appbar.BackAction onPress={() => { }} />
              <Appbar.Content title="Title" />
              <Appbar.Action icon="magnify" rippleColor={MD2Colors.red500} onPress={() => { }} />
            </Appbar.Header>
          </TestCase>

          <TestCase itShould='Appbar.BackAction fuction: onPress={_goBack}'>
            <Appbar.Header>
              <Appbar.BackAction onPress={_goBack} />
              <Appbar.Content title="Title" />
              <Appbar.Action icon="magnify" rippleColor={MD2Colors.red500} />
            </Appbar.Header>
          </TestCase>

          <TestCase itShould='Appbar.Action fuction: onPress = {_handleSearch}'>
            <Appbar.Header>
              <Appbar.BackAction onPress={() => { }} />
              <Appbar.Content title="Title" />
              <Appbar.Action icon="magnify" onPress={_handleSearch} />
            </Appbar.Header>
          </TestCase>

          <TestCase itShould='Appbar.Content fuction: onPress'>
            <Appbar.Header>
              <Appbar.BackAction onPress={() => { }} />
              <Appbar.Content title="Title" onPress={_handleContent} />
              <Appbar.Action icon="magnify" />
            </Appbar.Header>
          </TestCase>

          {AppbarActionProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} >
                <View style={styles.right}>
                  <Appbar.Action  {...item.value} />
                </View>
              </TestCase>
            );
          })}

          <TestCase itShould={'Appbar.BackAction style:ref={viewRef}'}  >
            <Appbar.Header>
              <Appbar.BackAction onPress={() => { }} ref={viewRef} />
            </Appbar.Header>
            <Button onPress={measureView} >Press me</Button>
          </TestCase>

          <TestCase itShould='Appbar.Action style:ref={viewRef}'>
            <Appbar.Header>
              <Appbar.BackAction onPress={() => { }} />
              <Appbar.Action icon="magnify" ref={viewRef} />
            </Appbar.Header>
            <Button onPress={measureView} >Press me</Button>
          </TestCase>


          <TestCase itShould={'Appbar.Header style:ref={viewRef}'}  >
            <Appbar.Header ref={viewRef}>
              <Appbar.BackAction onPress={() => { }} />
            </Appbar.Header>
            <Button onPress={measureView} >Press me</Button>
          </TestCase>

          <TestCase itShould={'Appbar.Content style:titleRef={viewRef}'}  >
            <Appbar.Header>
              <Appbar.Content title="Title" titleRef={viewRef} />
            </Appbar.Header>
            <Button onPress={measureView} >Press me</Button>
          </TestCase>

          {AppbarBackActionProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} >
                <Appbar.Header>
                  <Appbar.BackAction {...item.value} onPress={_goBack} />
                </Appbar.Header>
              </TestCase>
            );
          })}

          {AppbarContentActionProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} >
                <Appbar.Header>
                  <Appbar.Content {...item.value} />
                </Appbar.Header>
              </TestCase>
            );
          })}

          <TestCase itShould={'Appbar.Content style:theme={colors: { onSurface: green}'}  >
            <View style={styles.center}>
              <Appbar.Content theme={{ colors: { onSurface: 'green' } }} title="Title" />
            </View>
          </TestCase>

          <TestCase itShould={'Appbar.Content style:theme={colors: { onSurface: red}'}  >
            <View style={styles.center}>
              <Appbar.Content theme={{ colors: { onSurface: 'red' } }} title="Title" />
            </View>
          </TestCase>


          <TestCase itShould={'AppbarHeader style:children:<Appbar.BackAction/><Appbar.Action/>'} >
            <Appbar.Header >
              <Appbar.BackAction />
              <Appbar.Content title="Title" />
              <Appbar.Action icon="magnify" />
              <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>
          </TestCase>

          {AppbarHeaderActionProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} >
                <Appbar.Header  {...item.value}>
                  <Appbar.BackAction />
                  <Appbar.Content title="Title" />
                  <Appbar.Action icon="magnify" />
                  <Appbar.Action icon="dots-vertical" />
                </Appbar.Header>
                <Text style={{ height: 20 }} children={undefined}></Text>
              </TestCase>
            );
          })}
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

const styles = StyleSheet.create({
  container: {
    // 这里你可以尝试一些样式变化，但请注意 React Native 不支持直接的阴影效果  
    // 如果你需要阴影，你可能需要使用额外的库  
    // 例如，你可以尝试给 Appbar 添加一个背景色和边框来模拟提升效果（但这不是真正的阴影）  
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    height: 160,
  },

  center: {
    flex: 1,
    justifyContent: 'center', // 垂直居中
    alignItems: 'flex-start',  // 水平靠左
    padding: 15,
  },

  right: {
    flex: 1,
    flexDirection: 'row',      // 水平布局
    justifyContent: 'flex-end', // 靠右对齐
    alignItems: 'center',       // 垂直居中
    width: '100%',
    height: 70
  },

  content: {
    flex: 1,
    // 页面内容的样式  
  },
  appbar: {
    elevation: 50, // 调整阴影深度
    backgroundColor: '#6200ee',
  },
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default AppbarDemo;