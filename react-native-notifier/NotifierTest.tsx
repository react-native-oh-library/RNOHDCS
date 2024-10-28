import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import { Easing, Notifier, NotifierComponents, NotifierWrapper, NotifierRoot } from 'react-native-notifier';
import Button from './Button';
import CustomComponent from './CustomComponent';
import Component from './Component';

import {
  getContainerStyleBottomPosition,
  getContainerStyleClassicWithOverSwipe,
  getContainerStyleOpacityOnly,
  getContainerStyleScaleAndRotation,
  getContainerStyleScaleOnly,
} from './customAnimations';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TestCase, Tester } from '@rnoh/testerino';

export default function App() {
  const notifierRef = React.useRef<NotifierRoot>(null);
  const [texts, setText] = React.useState('');

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NotifierWrapper >
            <ScrollView>
              <Tester>
                <TestCase itShould='基本测试'>
                  <Button
                    title="基本测试"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'John Doe',
                        description: '基本测试',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='description属性测试，设置通知一秒后关闭（默认三秒）'>
                  <Button
                    title="duration"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'New request',
                        duration: 1000,
                        description:
                          '测试duration属性，1秒后关闭提示',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试Component.Alert属性'>
                  <Button
                    title="Component.Alert"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'The request was failed The request was failed The request was failed',
                        description: 'Check your internet connection, please Check your internet connection, please Check your internet connection, please',
                        Component: NotifierComponents.Alert,
                        componentProps: {
                          titleStyle: { color: 'blue' },
                          descriptionStyle: { color: 'green' },
                          alertType: 'error',
                          backgroundColor:'red',
                          textColor:'black',
                          maxTitleLines:1,
                          maxDescriptionLines:1,
                        },
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试Component.Alert属性'>
                  <Button
                    title="Component.Alert"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'The request was failed The request was failed The request was failed',
                        description: 'Check your internet connection, please Check your internet connection, please Check your internet connection, please',
                        Component: NotifierComponents.Alert,
                        componentProps: {
                          titleStyle: { color: 'yellow' },
                          descriptionStyle: { color: 'blue' },
                          alertType: 'success',
                          backgroundColor:'pink',
                          maxTitleLines:2,
                          maxDescriptionLines:2,
                        },
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试Component.Alert属性'>
                  <Button
                    title="Component.Alert"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'The request was failed The request was failed The request was failed',
                        description: 'Check your internet connection, please Check your internet connection, please Check your internet connection, please',
                        Component: NotifierComponents.Alert,
                        componentProps: {
                          titleStyle: { color: 'yellow' },
                          descriptionStyle: { color: 'blue' },
                          alertType: 'success',
                          backgroundColor:'pink',
                          maxTitleLines:2,
                          maxDescriptionLines:2,
                          ContainerComponent:Component
                        },
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试Component.Notification属性'>
                  <Button
                    title="Component.Notification"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'The request was failed The request was failed The request was failed',
                        description: 'Check your internet connection, please Check your internet connection, please Check your internet connection, please',
                        Component: NotifierComponents.Notification,
                        componentProps: {
                          titleStyle: { color: 'red' },
                          descriptionStyle: { color: 'blue', },
                          imageSource: require('./react.jpg'),
                          imageStyle: { width: 30 },
                          containerStyle:{backgroundColor:"yellow"},
                          maxTitleLines:1,
                          maxDescriptionLines:1,
                        },
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试Component.Notification属性'>
                  <Button
                    title="Component.Notification"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'The request was failed The request was failed The request was failedThe request was failed',
                        description: 'Check your internet connection, please Check your internet connection, please Check your internet connection, please',
                        Component: NotifierComponents.Notification,
                        componentProps: {
                          titleStyle: { color: 'blue' },
                          descriptionStyle: { color: 'red', },
                          imageSource: require('./kunkun.png'),
                          imageStyle: { width: 50 },
                          containerStyle:{backgroundColor:"green"},
                          maxTitleLines:2,
                          maxDescriptionLines:2,
                        },
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试Component.Notification属性'>
                  <Button
                    title="Component.Notification"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'The request was failed The request was failed The request was failedThe request was failed',
                        description: 'Check your internet connection, please Check your internet connection, please Check your internet connection, please',
                        Component: NotifierComponents.Notification,
                        componentProps: {
                          titleStyle: { color: 'blue' },
                          descriptionStyle: { color: 'red', },
                          imageStyle: { width: 50 },
                          containerStyle:{backgroundColor:"green"},
                          maxTitleLines:2,
                          maxDescriptionLines:2,
                          ContainerComponent:Component

                        },
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试Component属性，自定义组件'>
                  <Button
                    title="Component"
                    onPress={() =>
                      Notifier.showNotification({
                        title: '自定义组件',
                        description: '自定义组件',
                        Component: CustomComponent,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试containerStyle，动画样式getContainerStyleClassicWithOverSwipe'>
                  <Button
                    title="动画样式"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'Pulldown',
                        description: 'Pulldown动画样式',
                        containerStyle: getContainerStyleClassicWithOverSwipe,
                        queueMode: 'standby',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试containerProps属性'>
                  <Button
                    title="containerProps"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'containerProps',
                        description: '测试containerProps属性',
                        containerStyle: getContainerStyleOpacityOnly,
                        containerProps: { needsOffscreenAlphaCompositing: true },
                        queueMode: 'standby',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould=' 测试containerStyle设置In/Out动画样式'>
                  <Button
                    title="动画样式"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'In/Out动',
                        description: 'In/Out动画样式',
                        containerStyle: getContainerStyleScaleOnly,
                        queueMode: 'standby',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试containerStyle设置Rotation动画样式'>
                  <Button
                    title="动画样式"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'Rotation',
                        description: 'Rotation动画样式',
                        containerStyle: getContainerStyleScaleAndRotation,
                        queueMode: 'standby',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试 containerStyle设置Bottom Position 动画样式'>
                  <Button
                    title="动画样式"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'Bottom Position',
                        description: 'Bottom Position 动画样式',
                        containerStyle: getContainerStyleBottomPosition,
                        swipeEnabled: false,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试queueMode-standby属性，将通知添加到队列末尾，默认为reset，清除通知队列并立即显示新通知。默认使用'>
                  <Button
                    title="queueMode-standby"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'queueMode-standby',
                        description: '测试queueMode-standby属性?',
                        queueMode: 'standby',
                        componentProps: {
                          imageSource: require('./react.jpg'),
                        },
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试queueMode-next属性，将通知置于队列的第一位。当前通知消失后将立即显示。'>
                  <Button
                    title="queueMode-next"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'queueMode-next',
                        description: '测试queueMode-next属性?',
                        queueMode: 'next',
                        componentProps: {
                          imageSource: require('./react.jpg'),
                        },
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试queueMode-immediate属性与类似next，但它也会隐藏当前显示的通知'>
                  <Button
                    title="queueMode-immediate"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'queueMode-immediate',
                        description: '测试queueMode-immediate属性',
                        queueMode: 'immediate',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试clearQueueAPI，清楚队列通知'>
                  <Button title="clearQueue" onPress={() => Notifier.clearQueue()} />
                </TestCase>
                <TestCase itShould='测试swipeEnabled,滑动隐藏通知'>
                  <Button
                    title="swipeEnabled"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'swipeEnabled',
                        description: '测试swipeEnabled属性，默认为true',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试swipeEnabled,不能滑动隐藏通知'>
                  <Button
                    title="swipeEnabled"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'swipeEnabled-false',
                        description: '测试swipeEnabled属性，设置false',
                        swipeEnabled: false
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试animationDuration属性,通知出现/消失的速度'>
                  <Button
                    title="animationDuration属"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'animationDuration',
                        description: '测试animationDuration属性,默认300',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试animationDuration属性,通知出现/消失的速度'>
                  <Button
                    title="animationDuration"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'animationDuration-100',
                        description: '测试animationDuration属性,设置100',
                        animationDuration: 100
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试animationDuration属性,通知出现的速度'>
                  <Button
                    title="showAnimationDuration"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'showAnimationDuration-300',
                        description: '测试showAnimationDuration属性，默认300',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试animationDuration属性,通知出现的速度'>
                  <Button
                    title="showAnimationDuration"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'showAnimationDuration-1000',
                        description: '测试showAnimationDuration属性，设置1000',
                        showAnimationDuration: 1000,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试hideAnimationDuration属性,通知消失的速度'>
                  <Button
                    title="hideAnimationDuration"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'hideAnimationDuration-300',
                        description: '测试hideAnimationDuration属性，默认300',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试hideAnimationDuration属性,通知消失的速度'>
                  <Button
                    title="hideAnimationDuration"
                    onPress={() =>
                      notifierRef.current?.showNotification({
                        title: 'hideAnimationDuration-1000',
                        description: '测试hideAnimationDuration属性，设置1000',
                        hideAnimationDuration: 1000,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试easing属性,easing-Easing.bounce'>
                  <Button
                    title="easing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'easing-Easing.bounce',
                        description: '测试easing-Easing.bounce属性',
                        easing: Easing.bounce,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试easing属性,easing-Easing.ease'>
                  <Button
                    title="easing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'easing-Easing.ease',
                        description: '测试easing-Easing.ease属性',
                        easing: Easing.ease,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试easing属性,Easing.elastic(4)'>
                  <Button
                    title="easing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'easing-Easing.elastic(4)',
                        description: '测试easing-Easing.elastic(4)属性',
                        easing: Easing.elastic(4),
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试showEasing属性,showEasing-Easing.bounce'>
                  <Button
                    title="showEasing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'easing-Easing.bounce',
                        description: '测试easing-Easing.bounce属性',
                        showEasing: Easing.bounce,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试showEasing属性,showEasing-Easing.circle'>
                  <Button
                    title="showEasing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'showEasing-Easing.circle',
                        description: '测试showEasing-Easing.circle属性',
                        showEasing: Easing.circle,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试hideEasing属性,hideEasing-Easing.bounce'>
                  <Button
                    title="hideEasing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'hideEasing-Easing.bounce',
                        description: '测试hideEasing-Easing.bounce属性?',
                        hideEasing: Easing.bounce,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试hideEasing属性,hideEasing-Easing.circle'>
                  <Button
                    title="hideEasing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'hideEasing-Easing.circle',
                        description: '测试hideEasing-Easing.circle属性?',
                        hideEasing: Easing.circle,
                      })
                    }
                  />
                </TestCase>
                <Text style={{ textAlign: 'center', marginTop: 10, color: 'red' }}><Text>函数回调log：</Text>{texts}</Text>
                <TestCase itShould='测试onShown方法'>
                  <Button
                    title="onShown"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'onShown',
                        description: '测试onShown方法?',
                        onShown: () => setText('进入动画完成时调用的函数'),
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试onStartHiding方法'>
                  <Button
                    title="onStartHiding"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'onStartHiding',
                        description: '测试onStartHiding方法',
                        onStartHiding: () => setText('开始隐藏时调用的函数'),
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试onHidden方法'>
                  <Button
                    title="onHidden"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'onHidden',
                        description: '测试onHidden方法',
                        onHidden: () => setText('进入完全隐藏时调用的函数'),
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试onPress方法'>
                  <Button
                    title="onPress"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'onPress',
                        description: '测试onPress方法',
                        onPress: () => setText('用户按下通知时调用的函数'),
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试hideOnPress属性，按下隐藏通知'>
                  <Button
                    title="hideOnPress"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'hideOnPress',
                        description: '默认为true，按下隐藏通知',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试hideOnPress属性，按下不隐藏通知'>
                  <Button
                    title="hideOnPress"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'hideOnPress',
                        description: '设置false，按下不隐藏通知',
                        hideOnPress: false
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试swipePixelsToClose属性，用户滑动关闭通知，默认20像素'>
                  <Button
                    title="swipePixelsToClose"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'swipePixelsToClose',
                        description: '用户滑动关闭通知，默认20像素',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试swipePixelsToClose属性，用户滑动关闭通知，设置10像素'>
                  <Button
                    title="swipePixelsToClose"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'swipePixelsToClose',
                        description: '用户滑动关闭通知，设置10像素',
                        swipePixelsToClose: 10
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试swipeEasing属性， Easing.bounce'>
                  <Button
                    title="swipeEasing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'swipeEasing',
                        description: 'swipeEasing:Easing.bounce',
                        swipeEasing: Easing.bounce,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试swipeEasing属性， Easing.circle'>
                  <Button
                    title="swipeEasing"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'swipeEasing',
                        description: 'swipeEasing:Easing.circle',
                        swipeEasing: Easing.circle,
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试swipeAnimationDuration属性， 用户滑动动画速度，默认200'>
                  <Button
                    title="swipeAnimationDuration"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'swipeAnimationDuration',
                        description: '用户滑动动画速度，默认200',
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试swipeAnimationDuration属性， 用户滑动动画速度，设置1000'>
                  <Button
                    title="swipeAnimationDuration"
                    onPress={() =>
                      Notifier.showNotification({
                        title: 'swipeAnimationDuration',
                        description: '用户滑动动画速度，设置1000',
                        swipeAnimationDuration: 1000
                      })
                    }
                  />
                </TestCase>
                <TestCase itShould='测试hideNotificationAPI，清楚通知'>
                  <Button title="Hide" onPress={() => Notifier.hideNotification()} />
                </TestCase>
              </Tester>
            </ScrollView>
          </NotifierWrapper>
         <NotifierRoot ref={notifierRef} />
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});