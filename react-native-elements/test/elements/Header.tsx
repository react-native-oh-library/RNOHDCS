import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header as HeaderRNE, HeaderProps, Icon} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider} from '@react-native-oh-tpl/react-native-safe-area-context';
class ViewComponent extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'pink',
            borderRadius: 20,
          }}>
          <Text
            style={{fontSize: 28, backgroundColor: 'yellow', color: 'pink'}}>
            ViewComponent
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default function HeaderComponent(): JSX.Element{
  const [visible, setVisible] = React.useState(true);

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Header属性ViewComponent 设置一个容器组件">
          <TestCase itShould="为Header设置一个容器组件" tags={['C_API']}>
            <View style={styles.container}>
              <HeaderRNE
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ['red', 'pink'],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性backgroundColor 设置背景颜色">
          <TestCase itShould="为Header设置一个容器组件" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置为黄色</Text>
              <HeaderRNE
                containerStyle={{height: 40}}
                backgroundColor="yellow"
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>设置为粉色</Text>
              <HeaderRNE
                containerStyle={{height: 40}}
                backgroundColor="pink"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性backgroundImage 设置背景图片">
          <TestCase itShould="为Header设置一个背景图片" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置背景图片</Text>
              <HeaderRNE
                containerStyle={{height: 200}}
                backgroundImage={{
                  uri: 'https://randomuser.me/api/portraits/men/4.jpg',
                  width: 280,
                  height: 100,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性backgroundImageStyle 设置背景图片样式">
          <TestCase itShould="设置背景图片样式" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置背景图片</Text>
              <HeaderRNE
                containerStyle={{height: 200, backgroundColor: '#fff'}}
                backgroundImageStyle={{
                  width: 200,
                  height: 200,
                  resizeMode: 'cover',
                  alignSelf: 'center',
                  borderRadius: 40,
                }}
                backgroundImage={{
                  uri: 'https://randomuser.me/api/portraits/men/4.jpg',
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Header属性barStyle 枚举验证 全部设置无效">
          <TestCase itShould="设置barStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>dark-content</Text>
              <HeaderRNE
                barStyle="dark-content"
                containerStyle={{width: 280, height: 40}}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>light-content</Text>
              <HeaderRNE
                barStyle="light-content"
                containerStyle={{width: 280, height: 40}}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>default</Text>
              <HeaderRNE
                barStyle="default"
                containerStyle={{width: 280, height: 40}}
              />
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Header属性centerComponent验证  ">
          <TestCase itShould="设置centerComponent" tags={['C_API']}>
            <SafeAreaProvider>
              <HeaderRNE
                containerStyle={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'pink',
                }}
                centerComponent={{
                  icon: 'save',
                  color: 'yellow',
                  // text: "MY TITLE",
                  type: 'font-awesome',
                  size: 20,
                }}
              />
            </SafeAreaProvider>
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性centerContainerStyle验证 设置centerComponent容器样式 ">
          <TestCase itShould="设置centerContainerStyle" tags={['C_API']}>
            <HeaderRNE
              containerStyle={{
                width: '100%',
                height: 400,
                backgroundColor: 'black',
              }}
              centerComponent={{
                icon: 'save',
                color: 'yellow',
                // text: "MY TITLE",
                type: 'font-awesome',
                size: 20,
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性children验证 设置children ">
          <TestCase itShould="设置children" tags={['C_API']}>
            <HeaderRNE
              children={
                <View
                  style={{
                    width: 300,
                    height: 100,
                    backgroundColor: 'black',
                  }}></View>
              }
              containerStyle={{width: '100%', height: 200}}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性containerStyle验证 设置容器样式 ">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <HeaderRNE
              containerStyle={{
                width: '100%',
                height: 200,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Header属性edges验证 设置edges  没有这个属性 设置会报错 ">
          <TestCase itShould="设置edges" tags={['C_API']}>
            <HeaderRNE
              containerStyle={{
                width: '100%',
                height: 200,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'save',
                color: 'yellow',
                // text: "MY TITLE",
                type: 'font-awesome',
                size: 20,
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
              
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="Header属性elevated验证 设置elevated 无效 ">
          <TestCase itShould="elevated" tags={['C_API']}>
            <HeaderRNE
              elevated={false}
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'save',
                color: 'yellow',
                // text: "MY TITLE",
                type: 'font-awesome',
                size: 20,
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="Header属性hideStatusBar验证 设置hideStatusBar无效 会报错没有这个属性 ">
          <TestCase itShould="hideStatusBar" tags={['C_API']}>
            <HeaderRNE
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'save',
                color: 'yellow',
                // text: "MY TITLE",
                type: 'font-awesome',
                size: 20,
              }}
              
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Header属性leftComponent 验证 设置左边子组件">
          <TestCase
            itShould="leftComponent"
            tags={['C_API']}>
            <HeaderRNE
              leftComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性leftContainerStyle验证 设置左边子组件的样式">
          <TestCase
            itShould="leftContainerStyle"
            tags={['C_API']}>
            <HeaderRNE
              leftContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
              leftComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Header属性linearGradientProps验证 设置linearGradientProps无效  ">
          <TestCase itShould="linearGradientProps" tags={['C_API']}>
            <HeaderRNE
              linearGradientProps={{
                colors: '#F44336',
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Header属性placement验证 placement的枚举验证 left center right  ">
          <TestCase itShould="left" tags={['C_API']}>
            <HeaderRNE
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
              placement={'left'}
            />
          </TestCase>
          <TestCase itShould="center" tags={['C_API']}>
            <HeaderRNE
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
              placement={'center'}
            />
          </TestCase>
          <TestCase itShould="right" tags={['C_API']}>
            <HeaderRNE
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
              placement={'right'}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性rightComponent rightContainerStyle验证 设置右边子组件和样式">
          <TestCase
            itShould="rightComponent rightContainerStyle"
            tags={['C_API']}>
            <HeaderRNE
              rightContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
              rightComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'right',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              // leftContainerStyle={{ backgroundColor: 'pink', borderRadius: 5, height: 40 }}
              // leftComponent={{
              //     icon: "menu",
              //     color: 'yellow',
              //     text: "left",
              //     type: 'font-awesome',
              //     style: { color: "yellow", alignSelf: 'center' }
              // }}
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              // centerComponent={{
              //     icon: "menu",
              //     color: 'yellow',
              //     text: "center",
              //     type: 'font-awesome',
              //     style: { color: "yellow", alignSelf: 'center' }
              // }}
              // centerContainerStyle={{ backgroundColor: 'pink', borderRadius: 5, height: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性statusBarProps验证 设置顶部状态栏 ">
          <TestCase itShould="statusBarProps" tags={['C_API']}>
            <HeaderRNE
              statusBarProps={{
                animated: true,
                barStyle: 'dark-content',
                backgroundColor: 'green',
              }}
              linearGradientProps={{
                colors: '#F44336',
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              containerStyle={{
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: 'MY TITLE',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
          </TestCase>
        </TestSuite>

        <TestSuite name="Header属性style 接收View的style属性 ">
        <TestCase itShould="View的style属性" tags={['C_API']}>
            <HeaderRNE
              style={{width:100,backgroundColor:'yellow',height:50}}
              statusBarProps={{
                animated: true,
                barStyle: 'dark-content',
                backgroundColor: 'green',
              }}
              linearGradientProps={{
                colors: '#F44336',
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              containerStyle={{ 
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: '接收View的style属性',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Header属性testId 接收View的testId属性 ">
        <TestCase itShould="View的testId属性" tags={['C_API']}>
            <HeaderRNE
              testID='headerTest'
              style={{width:100,backgroundColor:'yellow',height:50}}
              statusBarProps={{
                animated: true,
                barStyle: 'dark-content',
                backgroundColor: 'green',
              }}
              linearGradientProps={{
                colors: '#F44336',
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              containerStyle={{ 
                width: '100%',
                height: 100,
                borderRadius: 20,
                backgroundColor: 'yellow',
              }}
              centerComponent={{
                icon: 'menu',
                color: 'yellow',
                text: '接收View的testId属性',
                type: 'font-awesome',
                style: {color: 'yellow', alignSelf: 'center'},
              }}
              centerContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 5,
                height: 40,
              }}
            />
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
    alignItems: 'center',
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
