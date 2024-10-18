// import React from 'react';
// import { FlatList, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
// import { Image } from '@rneui/themed';

// const BASE_URI = 'https://source.unsplash.com/random?sig=';

// const ImageAPI = () => {
// return (
//   <>
//     <SafeAreaView>
//       <FlatList
//         data={[...new Array(10)].map((_, i) => i.toString())}
//         style={styles.list}
//         numColumns={2}
//         keyExtractor={(e) => e}
//         renderItem={({ item }) => (
//           <Image
//             source={{ uri: BASE_URI + item }}
//             containerStyle={styles.item}
//             PlaceholderContent={<ActivityIndicator color={'yellow'} />}
//           />
//         )}
//       />
//     </SafeAreaView>
//   </>
// );
// };

// const styles = StyleSheet.create({
// list: {
//   width: '100%',
//   backgroundColor: '#000',
// },
// item: {
//   aspectRatio: 1,
//   width: '100%',
//   flex: 1,
// },
// });

// export default ImageAPI;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {FAB, Button, Image} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
class ViewComponent extends React.Component<{}, {}> {
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
class ImageComponent extends React.Component<{}, {}> {
  render() {
    return (
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/4.jpg'}}
        style={{width: 100, height: 100}}></Image>
    );
  }
}
export default () => {
  const [onlongPress, setOnlongPress] = useState(false);
  const [onPress, setOnPress] = useState(false);
  const [onPressIn, setOnPressIn] = useState(false);
  const [onPressOut, setonPressOut] = useState(false);
  const [changeImg, setChangeImg] = useState(false);
  const [changeImg1, setChangeImg1] = useState(false);
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Image属性Component 传入一个component">
          <TestCase itShould="传入一个容器组件" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>Component</Text>
              <Image
                Component={ViewComponent}
                source={{uri: 'https://randomuser.me/api/portraits/men/4.jpg'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性ImageComponent 传入一个ImageComponent">
          <TestCase itShould="传入一个Image组件" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>ImageComponent</Text>
              <Image Component={ImageComponent} />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性PlaceholderContent  在未加载出图片时显示占位组件">
          <TestCase itShould="传入一个loading" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>PlaceholderContent</Text>
              <Image
                PlaceholderContent={
                  <ActivityIndicator color={'yellow'} size={100} />
                }
                source={{
                  uri: 'https://randomuser.me/api111/portraits/men/4.jpg1',
                }}
                
                style={{width: 100, height: 100}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性children childrenContainerStyle 设置一个子组件 并设置样式">
          <TestCase
            itShould="children childrenContainerStyle属性验证"
            tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>
                children childrenContainerStyle
              </Text>
              <Image
                children={<Text>{'children组件'}</Text>}
                childrenContainerStyle={{
                  width: 200,
                  height: 40,
                  backgroundColor: 'pink',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={{
                  uri: 'https://randomuser.me/api111/portraits/men/4.jpg1',
                }}
                style={{width: 100, height: 100}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性containerStyle 容器样式设置">
          <TestCase itShould="containerStyle属性验证" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>containerStyle</Text>
              <Image
                containerStyle={{
                  width: 200,
                  height: 200,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                  display: 'flex',
                }}
                source={{uri: 'https://randomuser.me/api/portraits/men/4.jpg'}}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性onLongPress  长按点击事件验证">
          <TestCase itShould="onLongPress属性验证" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>长按点击事件切换图片</Text>
              <Image
                onLongPress={() => setOnlongPress(!onlongPress)}
                source={{
                  uri: onlongPress
                    ? 'https://randomuser.me/api/portraits/men/5.jpg'
                    : 'https://randomuser.me/api/portraits/men/4.jpg',
                }}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性onPress  点击事件验证">
          <TestCase itShould="onPress属性验证" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>点击事件</Text>
              <Image
                onPress={() => setOnPress(!onPress)}
                source={{
                  uri: onPress
                    ? 'https://randomuser.me/api/portraits/men/6.jpg'
                    : 'https://randomuser.me/api/portraits/men/4.jpg',
                }}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性onPressIn  手指按下触发事件验证">
          <TestCase itShould="onPressIn属性验证" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>手指按下去触发</Text>
              <Image
                onPressIn={() => setOnPressIn(!onPressIn)}
                source={{
                  uri: onPressIn
                    ? 'https://randomuser.me/api/portraits/men/7.jpg'
                    : 'https://randomuser.me/api/portraits/men/4.jpg',
                }}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性onPressOut  手指松开触发事件验证">
          <TestCase itShould="onPressOut属性验证" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>手指抬起触发</Text>
              <Image
                onPressOut={() => setonPressOut(!onPressOut)}
                source={{
                  uri: onPressOut
                    ? 'https://randomuser.me/api/portraits/men/9.jpg'
                    : 'https://randomuser.me/api/portraits/men/4.jpg',
                }}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性placeholderStyle  显示PlaceholderContent时候的样式设置">
          <TestCase itShould="placeholderStyle属性验证" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>placeholderStyle</Text>
              <Image
                placeholderStyle={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'pink',
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: 'red',
                }}
                source={{
                  uri: 'https://randomuser.me/api111/portraits/men/4.jpg1',
                }}
                PlaceholderContent={
                  <ActivityIndicator color={'yellow'} size={100} />
                }
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性transition 图片显示时是否需要Fade动画">
          <TestCase
            itShould="transition属性验证 设置为true 图片在显示的时候会带fade动画"
            tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>transition</Text>
              <Image
              transitionDuration={10000}
                transition={true}
                source={{uri: 'https://randomuser.me/api/portraits/men/10.jpg'}}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性transitionDuration 图片显示展示动画的时间">
          <TestCase
            itShould="transition属性验证 设置展示动画的时间"
            tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>transitionDuration</Text>
              <Image
                transitionDuration={10000}
                transition={true}
                source={{uri: 'https://randomuser.me/api/portraits/men/13.jpg'}}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性onLoadStart方法 接收React-Native原生Image组件的onLoadStart">
          <TestCase
            itShould="接收React-Native原生Image组件的onLoadStart"
            tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onLoadStart方法切换图片源</Text>
              <Image
                onLoadStart={()=>{
                  setTimeout(() => {
                    setChangeImg(!changeImg)
                  }, 2000);
                 
                }}
                source={{uri: changeImg ?  'https://randomuser.me/api/portraits/men/13.jpg' : 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'}}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Image属性onLoadEnd方法 接收React-Native原生Image组件的onLoadEnd">
          <TestCase
            itShould="接收React-Native原生Image组件的onLoadEnd"
            tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onLoadEnd方法切换图片源</Text>
              <Image
                onLoadEnd={()=>{
                  setTimeout(() => {
                    setChangeImg1(!changeImg1)
                  }, 2000);
                }}
                source={{uri: changeImg1 ?  'https://randomuser.me/api/portraits/men/13.jpg' : 'https://randomuser.me/api/portraits/men/10.jpg'}}
                style={{width: 100, height: 100, alignSelf: 'center'}}
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
    alignItems: 'center',
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
