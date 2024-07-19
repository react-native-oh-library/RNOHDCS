import React, { useRef, useState } from 'react';




import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  Image,
  Button
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import ActionButton from 'react-native-action-button';




export const ActionBtnTest = () => {
  const [buttonSize, setButtonSize] = useState(40)
  const [active, setActive] = useState(true)
  const [position, setPosition] = useState("left")
  const [hideShadow, setHideShadow] = useState(true)
  const [shadowStyle, setShadowStyle] = useState("skyblue")
  const [bgColor, setBgColor] = useState("red")
  const [bgOpacity, setBgOpacity] = useState(1)
  const [buttonColor, setButtonColor] = useState("rgba(231,76,60,1)")
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [spacing, setSpacing] = useState(10)
  const [buttonText, setButtonText] = useState("+")
  const [autoInactive, setAutoInactive] = useState(false)
  const [verticalOrientation, setVerticalOrientation] = useState<"up" | "down">("up")
  const [buttonTextStyle, setButtonTextStyle] = useState("red")
  const [activeOpacity, setActiveOpacity] = useState(1)
  const [onPressnumber, setOnPressnumber] = useState(0)
  const [degrees, setDegrees] = useState(0)
  const [itemSize, setItemSize] = useState(40)
  const [itemTitle, setItemTitle] = useState("text")
  const [itemPressNumber, setItemPressNumber] = useState(0)
  const [itemTextStyle, setTextStyle] = useState("red")
  const [itemTextContainer, setTextConter] = useState("red")
  const [itemColor, setColor] = useState("red")
  const [itemBetween, setBetween] = useState(10)
  const [itemOpcity, setOpcity] = useState(0)
  const [itemHide, setItemHide] = useState(false)
  const [itemShadow, setItemShadow] = useState("red")



  const styles = StyleSheet.create({
    btnShow: {
      shadowColor: "red",
      shadowOffset: {
        width: 20,
        height: 20
      },
      shadowRadius: 20

    }
  })

  return (
    <View style={{ flex: 1 }}>
    <Tester>

      <ScrollView >
        <TestSuite name="react-native-action-button">
          <TestCase
            key={`getInitStatus_1`}
            itShould={"改变外侧按钮的大小"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                  <ActionButton size={buttonSize}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    <ActionButton.Item
                      buttonColor="#3498db"
                      title="Notifications"
                    >
                      <Text>2</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setButtonSize(20)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          
          <TestCase
            key={`getInitStatus_2`}
            itShould={"改变悬浮按钮的状态"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [isShow,setIsShow] = useState(true)
              return (
                <View style={{ flex: 1,height:200 }}>
                  {
                    isShow &&  <ActionButton active={active}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                     
                    </ActionButton.Item>
                    <ActionButton.Item
                      buttonColor="#3498db"
                      title="Notifications"
                    >
                      <Text>2</Text>
                      
                    </ActionButton.Item>
                  </ActionButton>
                  }
                  <Button title={"active"} onPress={() => {
                    setIsShow(false)
                    
                    setActive(false)
                   setTimeout(()=> { setIsShow(true)},0)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={`getInitStatus_3`}
            itShould={"改变按钮的位置"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                     <ActionButton position={position}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                     
                    </ActionButton.Item>
                    <ActionButton.Item
                      buttonColor="#3498db"
                      title="Notifications"
                    >
                      <Text>2</Text>
                     
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setPosition("right")
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_4`}
            itShould={"按钮阴影是否显示"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [isShow,setIsShow] = useState(true)
              return (
                <View style={{ flex: 1 ,height:200}}>
                   {
                     isShow&&<ActionButton 
                     hideShadow={hideShadow} 
                     shadowStyle={{ shadowOffset: { width: 10, height: 10 }, shadowColor: "red", shadowOpacity: 1,elevation:5, shadowRadius:3 }}
                     buttonColor='red'>
                       <ActionButton.Item
                         buttonColor="#9b59b6"
                         title="New Task"
                         onPress={() => console.log("notes tapped!")}
                       >
                         <Text>1</Text>
                       </ActionButton.Item>
                     </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                    setIsShow(false)
                    setHideShadow(false)
                    setTimeout(()=> {setIsShow(true)},300)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={`getInitStatus_5`}
            itShould={"设置ActionButton的的颜色"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                    <ActionButton buttonColor={buttonColor}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setButtonColor("red")
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_6`}
            itShould={"子按钮展开时的背景色透明度"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                  <ActionButton style={{zIndex:10}} bgOpacity={bgOpacity}  buttonColor="green" bgColor={"#ff0000"} autoInactive={false}>
                    <ActionButton.Item
                      
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setBgOpacity(0.3)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={`getInitStatus_7`}
            itShould={"子按钮展开时的背景色"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                  <ActionButton bgColor={bgColor}  autoInactive={false}>
                    <ActionButton.Item
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setBgColor("green")
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={`getInitStatus_8`}
            itShould={"按钮X轴的偏移量"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   <ActionButton  offsetX={offsetX}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setOffsetX(20)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={`getInitStatus_9`}
            itShould={"按钮Y轴的偏移量"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   <ActionButton offsetY={offsetY}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setOffsetY(5)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={`getInitStatus_10`}
            itShould={"设置ActionButton子按钮之间的间距 "}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   <ActionButton  spacing={spacing}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task2"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>2</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setSpacing(0)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={`getInitStatus_11`}
            itShould={"设置ActionButton的文字"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   <ActionButton buttonText={buttonText}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                    setButtonText("5")
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_12`}
            itShould={"按下ActionButton的子按钮是否自动隐藏"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [isShow,setIsShow] = useState(true)
              return (
                <View style={{ flex: 1,height:200 }}>
                    {
                      isShow && 
                      <ActionButton autoInactive={autoInactive}>
                       <ActionButton.Item
                         buttonColor="#9b59b6"
                         title="New Task"
                         onPress={() => console.log("notes tapped!")}
                       >
                         <Text>1</Text>
                       </ActionButton.Item>
                     </ActionButton>
                    }
                  <Button title={"active"} onPress={() => {
                    setIsShow(false)
                   setAutoInactive(true)
                 setTimeout(() => {
                  setIsShow(true)
                 }, 1000);
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
            <TestCase
            key={`getInitStatus_13`}
            itShould={"设置ActionButton子按钮展开的方向(up/down) "}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   <ActionButton   verticalOrientation={verticalOrientation}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                   setVerticalOrientation("down")
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_14`}
            itShould={"设置ActionButton的文字样式"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   <ActionButton  buttonText='5' buttonTextStyle={{color:buttonTextStyle}}>
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                   setButtonTextStyle("green")
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_15`}
            itShould={"ActionButton按下透明度的改变"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   <ActionButton  activeOpacity={activeOpacity}>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                  setActiveOpacity(0)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
            <TestCase
            key={`getInitStatus_16`}
            itShould={"点击事件"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   <ActionButton  onPress={()=> {setOnPressnumber(2)}}>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                   if(onPressnumber) {
                    setState(true)
                   }
                    
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
            <TestCase
            key={`getInitStatus_17`}
            itShould={"图标旋转角度的改变"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [isShow,setIsShow] = useState(true)
              return (
                <View style={{ flex: 1,height:200 }}>
                   {
                    isShow && <ActionButton  degrees={degrees}>
                       <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                    setIsShow(false)
                    setDegrees(60)
                    setTimeout(()=> {setIsShow(true)},0)
                
                    setState(true)
                   
                    
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
         <TestCase
            key={`getInitStatus_18`}
            itShould={"子按钮展开外层按钮文字的变化"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
             const [isactive,setIstive] = useState(false)
              return (
                <View style={{ flex: 1,height:200 }}>
                  {
                    <ActionButton renderIcon={(active) => {
                     
                      if (isactive) {
                        return <Text style={{ color: "#fff" }}>1</Text>
                      } else {
                        return <Text style={{ color: "#fff" }}>2</Text>
                      }
                    }}>
                      <ActionButton.Item
                        buttonColor="#9b59b6"
                        title="New Task"
                        onPress={() => console.log("notes tapped!")}
                      >
                        <Text>1</Text>
                      </ActionButton.Item>
                    </ActionButton>
                  }
                  <Button title={"active"} onPress={() => {
                    setIstive(!isactive)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
             <TestCase
            key={`getInitStatus_20`}
            itShould={"阴影颜色的变化"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 ,height:200}}>
                  <ActionButton 
                   
                  
                  // shadowStyle={{shadowColor: "green"}} 
                  shadowStyle={{ shadowOffset: { width: 10, height: 10 }, shadowColor: shadowStyle, shadowOpacity: 1,elevation:5, shadowRadius:3 }}
                  >
                    <ActionButton.Item
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                  </ActionButton>
                  <Button title={"active"} onPress={() => {
                  setShadowStyle("green")
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_21`}
            itShould={"子按钮大小的改变"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   {
                  <ActionButton  >
                       <ActionButton.Item
                      size={itemSize}
                      buttonColor="#9b59b6"
                      title="New Task"
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                     setItemSize(60)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
             <TestCase
            key={`getInitStatus_22`}
            itShould={"子按钮旁边文字的改变"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   {
                  <ActionButton  >
                       <ActionButton.Item
                      size={itemSize}
                      buttonColor="#9b59b6"
                      title={itemTitle}
                      onPress={() => console.log("notes tapped!")}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                    setItemTitle("change")
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_23`}
            itShould={"点击事件"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   {
                  <ActionButton  >
                       <ActionButton.Item
                      size={itemSize}
                      buttonColor="#9b59b6"
                      title="text"
                      onPress={() =>setItemPressNumber(2)}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                   if(itemPressNumber) {  setState(true)}
                  
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_24`}
            itShould={"子按钮文字样式"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   {
                  <ActionButton  >
                       <ActionButton.Item
                      size={itemSize}
                      buttonColor="#9b59b6"
                      title={itemTitle}
                      textStyle={{color:itemTextStyle}}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                   setTextStyle("green")
                    setState(true)
                
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
            
            <TestCase
            key={`getInitStatus_25`}
            itShould={"子按钮文字容器的样式"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   {
                  <ActionButton  >
                       <ActionButton.Item
                      size={itemSize}
                      buttonColor="#9b59b6"
                      title={itemTitle}
                      textContainerStyle={{backgroundColor:itemTextContainer}}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                   setTextConter("green")
                    setState(true)
                
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={`getInitStatus_26`}
            itShould={"子按钮与文本之间的间距"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   {
                  <ActionButton  >
                       <ActionButton.Item
                      size={itemSize}
                      buttonColor="#9b59b6"
                      title={itemTitle}
                      spaceBetween={itemBetween}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    <ActionButton.Item
                      size={itemSize}
                      buttonColor="red"
                      title={itemTitle}
                      spaceBetween={itemBetween}
                    >
                      <Text>2</Text>
                    </ActionButton.Item>
                    </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                  setBetween(0)
                    setState(true)
                
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase
            key={`getInitStatus_27`}
            itShould={"点击子按钮背景透明度的改变"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                  {
                    <ActionButton autoInactive={false} >
                      <ActionButton.Item
                        size={itemSize}
                        buttonColor="#9b59b6"
                        title={itemTitle}
                        // activeOpacity={itemOpcity}
                        activeOpacity={itemOpcity}
                        onPress={() => { }}
                      >
                        <Text>1</Text>
                      </ActionButton.Item>
                    </ActionButton>
                  }
                  <Button title={"active"} onPress={() => {
                    setOpcity(1)
                    setState(true)

                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={`getInitStatus_28`}
            itShould={"展示与隐藏子按钮阴影"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [isShow,setIsShow] = useState(true)
              return (
                <View style={{ flex: 1 ,height:200}}>
                  {
                    isShow&&<ActionButton  >
                      <ActionButton.Item
                        size={40}
                        buttonColor="#9b59b6"
                        title={itemTitle}
                        hideLabelShadow={itemHide}
                        
                        shadowStyle={{ shadowOffset: { width: 10, height: 10 }, shadowColor: "red", shadowOpacity: 1,elevation:5, shadowRadius:3 }}
                      >
                        <Text>1</Text>
                      </ActionButton.Item>
                    </ActionButton>
                  }
                  <Button title={"active"} onPress={() => {
                    setIsShow(false)
                    
                    setItemHide(true)
                    setTimeout(()=> {setIsShow(true)},1000)
                    setState(true)

                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={`getInitStatus_29`}
            itShould={"子按钮阴影的改变"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1,height:200 }}>
                   {
                  <ActionButton  >
                       <ActionButton.Item
                      size={itemSize}
                      buttonColor="#9b59b6"
                      title={itemTitle}
                      shadowStyle={{ shadowOffset: { width: 50, height: 50 }, shadowColor: itemShadow, shadowOpacity: 1,elevation:20 }}
                    >
                      <Text>1</Text>
                    </ActionButton.Item>
                    </ActionButton>
                   }
                  <Button title={"active"} onPress={() => {
                  setItemShadow("green")
                    setState(true)
                
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          
        </TestSuite>
      
      </ScrollView>
    </Tester>
  </View>



  );
}



