import * as React from 'react';
import {Button, View, Text, Alert, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AutoClear,
  GetbackgroundColor,
  BgInfo,
  ClearText,
  ConfirmText,
  CustomHtml,
  DataURL,
  DescriptionText,
  DotSize,
  ImageType,
  MinWidth,
  MaxWidth,
  OnOK,
  OnEmpty,
  OnClear,
  OnGetData,
  OnBegin,
  OnEnd,
  OnLoadEnd,
  OnUndo,
  OnRedo,
  OnDraw,
  OnErase,
  OnChangePenColor,
  OnChangePenSize,
  Overlay,
  PenColor,
  Rotated,
  Onstyle,
  TrimWhitespace,
  ClearSignature,
  WebStyle,
  ChangePenColor,
  ChangePenSize,
  Draw,
  GetData,
  ReadSignature,
  Undo,
  Redo
} from './signatureCanvasDemo';
const Stack = createStackNavigator();
function HomePage({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Text>属性</Text>
      <Button
        title="自动清除"
        onPress={() => {
          navigation.navigate('AutoClear');
        }}
      />
      <Button
        title="背景颜色"
        onPress={() => {
          navigation.navigate('GetbackgroundColor');
        }}
      />
      <Button
        title="背景图像的高度/宽度/url"
        onPress={() => {
          navigation.navigate('BgInfo');
        }}
      />
      <Button
        title="清除按钮文字"
        onPress={() => {
          navigation.navigate('ClearText');
        }}
      />
      <Button
        title="保存按钮文字 "
        onPress={() => {
          navigation.navigate('ConfirmText');
        }}
      />
      <Button
        title="自定义 HTML "
        onPress={() => {
          navigation.navigate('CustomHtml');
        }}
      />
      <Button
        title="数据URL"
        onPress={() => {
          navigation.navigate('DataURL');
        }}
      />
      <Button
        title="描述文本"
        onPress={() => {
          navigation.navigate('DescriptionText');
        }}
      />
      <Button
        title="单个点的半径"
        onPress={() => {
          navigation.navigate('DotSize');
        }}
      />
      <Button
        title="图像类型"
        onPress={() => {
          navigation.navigate('ImageType');
        }}
      />
      <Button
        title="最小宽度"
        onPress={() => {
          navigation.navigate('MinWidth');
        }}
      />
      <Button
        title="最大宽度"
        onPress={() => {
          navigation.navigate('MaxWidth');
        }}
      />
      <Button
        title="保存非空签名后的回调函数"
        onPress={() => {
          navigation.navigate('OnOK');
        }}
      />
      <Button
        title="尝试保存空签名后的回调函数"
        onPress={() => {
          navigation.navigate('OnEmpty');
        }}
      />
      <Button
        title="清除签名后的回调函数"
        onPress={() => {
          navigation.navigate('OnClear');
        }}
      />
      <Button
        title="getData() 调用时的回调函数"
        onPress={() => {
          navigation.navigate('OnGetData');
        }}
      />
      <Button
        title="新笔画开始时的回调函数"
        onPress={() => {
          navigation.navigate('OnBegin');
        }}
      />
      <Button
        title="笔画结束时的回调函数"
        onPress={() => {
          navigation.navigate('OnEnd');
        }}
      />
      <Button
        title="webview 画布加载结束时的回调函数"
        onPress={() => {
          navigation.navigate('OnLoadEnd');
        }}
      />
      <Button
        title="调用 undo() 时的回调函数"
        onPress={() => {
          navigation.navigate('OnUndo');
        }}
      />
      <Button
        title="调用 redo() 时的回调函数"
        onPress={() => {
          navigation.navigate('OnRedo');
        }}
      />
      <Button
        title="	启用绘图时的回调函数"
        onPress={() => {
          navigation.navigate('OnDraw');
        }}
      />
      <Button
        title="启用擦除时的回调函数"
        onPress={() => {
          navigation.navigate('OnErase');
        }}
      />
      <Button
        title="改变笔颜色后的回调函数"
        onPress={() => {
          navigation.navigate('OnChangePenColor');
        }}
      />
      <Button
        title="改变笔尺寸后的回调函数"
        onPress={() => {
          navigation.navigate('OnChangePenSize');
        }}
      />
      <Button
        title="覆盖图像的高度/宽度/图像源 uri"
        onPress={() => {
          navigation.navigate('Overlay');
        }}
      />
      <Button
        title="笔的颜色"
        onPress={() => {
          navigation.navigate('PenColor');
        }}
      />
      <Button
        title="将签名板旋转 90 度"
        onPress={() => {
          navigation.navigate('Rotated');
        }}
      />
      <Button
        title="包装视图的样式"
        onPress={() => {
          navigation.navigate('Onstyle');
        }}
      />
      <Button
        title="修剪图像空白"
        onPress={() => {
          navigation.navigate('TrimWhitespace');
        }}
      />
      <Button
        title="webview 样式用于覆盖默认样式"
        onPress={() => {
          navigation.navigate('WebStyle');
        }}
      />
      <Text>方法</Text>
      <Button
        title="清除当前签名"
        onPress={() => {
          navigation.navigate('ClearSignature');
        }}
      />
      <Button
        title="改变笔颜色"
        onPress={() => {
          navigation.navigate('ChangePenColor');
        }}
      />
      <Button
        title="更改笔大小"
        onPress={() => {
          navigation.navigate('ChangePenSize');
        }}
      />
      <Button
        title="启用绘图/擦除签名"
        onPress={() => {
          navigation.navigate('Draw');
        }}
      />
      <Button
        title="获取数据"
        onPress={() => {
          navigation.navigate('GetData');
        }}
      />
      <Button
        title="读取签名"
        onPress={() => {
          navigation.navigate('ReadSignature');
        }}
      />
      <Button
        title="撤消"
        onPress={() => {
          navigation.navigate('Undo');
        }}
      />
      <Button
        title="重做(恢复上一笔撤销)"
        onPress={() => {
          navigation.navigate('Redo');
        }}
      />
    </ScrollView>
  );
}

export default function SignatureCanvasExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="react-native-signature-canvas">
        <Stack.Screen
          name="react-native-signature-canvas"
          component={HomePage}
        />
        <Stack.Screen name="AutoClear" component={AutoClear} />
        <Stack.Screen
          name="GetbackgroundColor"
          component={GetbackgroundColor}
        />
        <Stack.Screen name="BgInfo" component={BgInfo} />
        <Stack.Screen name="ClearText" component={ClearText} />
        <Stack.Screen name="ConfirmText" component={ConfirmText} />
        <Stack.Screen name="CustomHtml" component={CustomHtml} />
        <Stack.Screen name="DataURL" component={DataURL} />
        <Stack.Screen name="DescriptionText" component={DescriptionText} />
        <Stack.Screen name="DotSize" component={DotSize} />
        <Stack.Screen name="ImageType" component={ImageType} />
        <Stack.Screen name="MinWidth" component={MinWidth} />
        <Stack.Screen name="MaxWidth" component={MaxWidth} />
        <Stack.Screen name="OnOK" component={OnOK} />
        <Stack.Screen name="OnEmpty" component={OnEmpty} />
        <Stack.Screen name="OnClear" component={OnClear} />
        <Stack.Screen name="OnGetData" component={OnGetData} />
        <Stack.Screen name="OnBegin" component={OnBegin} />
        <Stack.Screen name="OnEnd" component={OnEnd} />
        <Stack.Screen name="OnLoadEnd" component={OnLoadEnd} />
        <Stack.Screen name="OnUndo" component={OnUndo} />
        <Stack.Screen name="OnRedo" component={OnRedo} />
        <Stack.Screen name="OnDraw" component={OnDraw} />
        <Stack.Screen name="OnErase" component={OnErase} />
        <Stack.Screen name="OnChangePenColor" component={OnChangePenColor} />
        <Stack.Screen name="OnChangePenSize" component={OnChangePenSize} />
        <Stack.Screen name="Overlay" component={Overlay} />
        <Stack.Screen name="PenColor" component={PenColor} />
        <Stack.Screen name="Rotated" component={Rotated} />
        <Stack.Screen name="Onstyle" component={Onstyle} />
        <Stack.Screen name="TrimWhitespace" component={TrimWhitespace} />
        <Stack.Screen name="ClearSignature" component={ClearSignature} />
        <Stack.Screen name="WebStyle" component={WebStyle} />
        <Stack.Screen name="ChangePenColor" component={ChangePenColor} />
        <Stack.Screen name="ChangePenSize" component={ChangePenSize} />
        <Stack.Screen name="Draw" component={Draw} />
        <Stack.Screen name="GetData" component={GetData} />
        <Stack.Screen name="ReadSignature" component={ReadSignature} />
        <Stack.Screen name="Undo" component={Undo} />
        <Stack.Screen name="Redo" component={Redo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}