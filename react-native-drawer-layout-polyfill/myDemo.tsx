import React, { useState, useRef } from "react";
import { Button, Text, StyleSheet, View, TextInput } from "react-native";
import DrawerLayout from 'react-native-drawer-layout-polyfill';

const App = () => {
  const drawerLayoutRef = useRef(null)
  const [drawerPosition, setDrawerPosition] = useState("left");
  const [keyboardDismissMode, setKeyboardDismissMode] = useState("none");
  const [drawerLockMode, setDrawerLockMode] = useState("unlocked ");
  const [isOpen, setIsOpen] = useState("关闭 ");
  const [drawerSlideOutput, setDrawerSlideOutput] = useState("");
  const [drawerStateChangedOutput, setDrawerStateChangedOutput] = useState("");
  const [drawerWidth, setDrawerWidth] = useState(300);
  const [value, onChangeText] = useState("");


  const open = () =>{
    drawerLayoutRef.current.openDrawer()
  }

  const close = () =>{
    drawerLayoutRef.current.closeDrawer()
  }

  const changeDrawerPosition = () => {
    console.log('drawerPosition-修改弹框位置', drawerPosition);
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const changeDrawerHideKeyboard = () => {
    console.log('keyboardDismissMode-是否隐藏软键盘', keyboardDismissMode);
    if (keyboardDismissMode === "none") {
      setKeyboardDismissMode("on-drag");
    } else {
      setKeyboardDismissMode("none");
    }
  };

  const changeDrawerWidth = () => {
    console.log('drawerWidth-修改弹框宽度', drawerWidth);
    if(value && Number(value) >=  100 ) {
      setDrawerWidth(Number(value))
    }
  }

  const changeDrawerLockMode = (type) => {
    console.log('drawerLockMode-修改弹框锁定模式', type);
    setDrawerLockMode(type)
  };


  const handleDrawerOpen = (e) =>{
    console.log('onDrawerOpen-打开弹框的回调');
    setIsOpen('打开')
  }

  const handleDrawerClose = (e) =>{
    console.log('onDrawerClose-关闭弹框的回调');
    setIsOpen('关闭')
  }

  const handleDrawerSlide = (e) =>{
    console.log('onDrawerSlide-导航视图发生交互时的回调函数');
    setDrawerSlideOutput(JSON.stringify(e.nativeEvent))
  }

  const handleDrawerStateChanged = (e) =>{
    console.log('onDrawerStateChanged-导航视图的状态发生变化时的回调函数');
    setDrawerStateChangedOutput(JSON.stringify(e))
  }


  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text  style={styles.textCommon}>I'm in the Drawer!</Text>
      <Text style={styles.textCommon}>弹框状态:{isOpen}</Text>
      <Text style={styles.textCommon}>弹框打开关闭过程中触发:{drawerSlideOutput}</Text>
      <Text style={styles.textCommon}>弹框状态切换触发:{drawerStateChangedOutput}</Text>
      <Button style={styles.buttonMargin} title="关闭弹框" onPress={() => close()}/>
    </View>
  );

  return (
    <DrawerLayout
      ref={drawerLayoutRef}
      drawerWidth={drawerWidth}
      drawerPosition={drawerPosition}
      renderNavigationView={() => navigationView}
      keyboardDismissMode={keyboardDismissMode}
      drawerLockMode={drawerLockMode}
      drawerBackgroundColor="red"
      statusBarBackgroundColor="blue"
      onDrawerOpen={handleDrawerOpen}
      onDrawerClose={handleDrawerClose}
      onDrawerSlide={handleDrawerSlide}
      onDrawerStateChanged={handleDrawerStateChanged}
    >
      <View style={styles.container}>
        <Text style={styles.textCommon}>设置导航视图的锁定模式:{drawerLockMode}</Text>
        <Text style={styles.textCommon}>是否隐藏软键盘:{keyboardDismissMode}</Text>
        <Text style={styles.textCommon}>弹框状态:{isOpen}</Text>
        <Text style={styles.textCommon}>弹框打开关闭过程中触发:{drawerSlideOutput}</Text>
        <Text style={styles.textCommon}>弹框状态切换触发:{drawerStateChangedOutput}</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:300 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <View style={styles.buttonMargin}></View>
        <Button title="修改弹框宽度" onPress={() => changeDrawerWidth()}/>
        <View style={styles.buttonMargin}></View>
        <Button title="打开弹框" onPress={() => open()}/>
        <View style={styles.buttonMargin}></View>
        <Button title="改变弹框位置" onPress={() => changeDrawerPosition()}/>
        <View style={styles.buttonMargin}></View>
        <Button title="弹框动画过程中是否隐藏键盘" onPress={() => changeDrawerHideKeyboard()}/>
        <View style={styles.buttonMargin}></View>
        <Button title="设置导航视图的锁定模式- unlocked " onPress={() => changeDrawerLockMode("unlocked")}/>
        <View style={styles.buttonMargin}></View>
        <Button title="设置导航视图的锁定模式- locked-closed" onPress={() => changeDrawerLockMode("locked-closed")}/>
        <View style={styles.buttonMargin}></View>
        <Button title="设置导航视图的锁定模式- locked-open" onPress={() => changeDrawerLockMode("locked-open")}/>
        <View style={styles.buttonMargin}></View>
      </View>
    </DrawerLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    padding: 8
  },
  textCommon: {
    marginBottom:10,
    fontSize:15
  },
  buttonMargin:{
    marginBottom:5,
  },

});

export default App;
