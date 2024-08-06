import React, {useState } from 'react';

import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

import {
  View,
  ScrollView,
  Button,
  Text
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export const QrcodeSvgDemo = () => {
   const [value,setValue] = useState("value")
   const [size,setSize] = useState(100)
   const [color,setColor] = useState("#000")
   const [bgColor,setBgColor] = useState("#fff")
   const [logo,setLogo] = useState(require("../assets/react-native-logo.png"))
   const [logoSize,setLogoSize] = useState(40)
   const [logoBgColor,setLogoBgColor] = useState("red")
   const [logoMargin,setLogoMargin] = useState(2)
   const [qrRef,setQrRef] = useState("")
   const [ecl,setEcl] = useState<"L" | "M" | "Q" | "H" | undefined>("L")
   const [quietZone,setQuietZone] = useState(0) 
   const [enableLinearGradient,setEnableLinearGradient] = useState(false)
   const [linearGradient,setLinearGradient] =useState(["rgb(255,0,0)","rgb(0,255,0)"])
   const [gradientDirection,setGradientDirection] =useState( ['0%', '0%', '100%', '100%'])
   const [logoBorderRadius,setLogoBorderRadius] = useState(10)
   const [error,setError] = useState("")

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-qrcode-svg">
          <TestCase
            key={"getInitStatus_1"}
            itShould={`更改value属性值 value`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
            
              return (
                <View style={{ flex: 1}}>
                   <QRCode value={value}></QRCode>
                  <Button title={"start"} onPress={() => {
                   
                  setValue("changevalue")
                 
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
            key={"getInitStatus_2"}
            itShould={`改变二维码大小 size`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode size={size}  value={value}></QRCode>
                  <Button title={"start"} onPress={() => {
                    setSize(200)
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
            key={"getInitStatus_3"}
            itShould={`改变二维码颜色 color`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode color={color} value={value}></QRCode>
                  <Button title={"start"} onPress={() => {
                    setColor("green")
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
            key={"getInitStatus_4"}
            itShould={`改变二维码背景颜色 backgroundColor`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode backgroundColor={bgColor} value={value}></QRCode>
                  <Button title={"start"} onPress={() => {
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
            key={"getInitStatus_5"}
            itShould={`改变logo logo`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
            
              return (
                <View style={{ flex: 1 }}>
                  
                   <QRCode logo={logo} logoSize={20} value={value}></QRCode>
                  
                  <Button title={"start"} onPress={() => {
                   
                   setLogo(require("../assets/pravatar-131.jpg"))  
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
            key={"getInitStatus_6 "}
            itShould={`改变logo大小 logoSize`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode logo={require("../assets/react-native-logo.png")} value={value} logoSize={logoSize}></QRCode>
                  <Button title={"start"} onPress={() => {
                  setLogoSize(80)
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
            key={"getInitStatus_7"}
            itShould={`改变logo背景色 logoBackgroundColor`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode logo={require("../assets/react-native-logo.png")} value={value} logoBackgroundColor={logoBgColor}></QRCode>
                  <Button title={"start"} onPress={() => {
                    setLogoBgColor("green")
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
            key={"getInitStatus_8"}
            itShould={`改变logo外边距 logoMargin`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode logo={require("../assets/react-native-logo.png")} value={value} logoBackgroundColor={logoBgColor} logoMargin={logoMargin}></QRCode>
                  <Button title={"start"} onPress={() => {
                   setLogoMargin(10)
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
            key={"getInitStatus_16"}
            itShould={`设置二维码logo的BorderRadius  logoBorderRadius`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [isRadio,setIsRadio] = useState(false)
              return (
                <View style={{ flex: 1 }}>
                  {
                    isRadio?
                    <QRCode value='123456' logo={require("../assets/react-native-logo.png")} logoBackgroundColor='red'></QRCode>
                    :
                 <QRCode value='123456' logo={require("../assets/react-native-logo.png")} logoBackgroundColor='red' logoBorderRadius={logoBorderRadius}></QRCode>

                  }
                  <Button title={"start"} onPress={() => {
                      setIsRadio(true)
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
            key={"getInitStatus_9"}
            itShould={`获取QRcode的ref（显示触发触发getRef 则证明getRef触发）  getRef`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                    <Text>ref:{qrRef}</Text>
                 <QRCode  getRef={(c)=>setQrRef("触发getRef")} value={value}></QRCode>
                  <Button title={"start"} onPress={() => {
                     if(qrRef) {
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
            key={"getInitStatus_10"}
            itShould={`设置纠错级别  ecl`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1}}>
                 <QRCode value='123456' ecl={ecl}></QRCode>
                  <Button title={"start"} onPress={() => {
                        setEcl("M")
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
            key={"getInitStatus_11"}
            itShould={`显示错误信息则证明触发onError事件`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                  <Text>{`错误信息:${error}`}</Text>
                 <QRCode value={666}  onError={(err:string)=> {
                        setError(err)
                 }}></QRCode>
                  <Button title={"start"} onPress={() => {
                      if(error) {
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
            key={"getInitStatus_12"}
            itShould={`设置二维码周围的安静区域的大小  quietZone`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode value='123456'  quietZone={quietZone}></QRCode>
                  <Button title={"start"} onPress={() => {
                       setQuietZone(100)
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
            key={"getInitStatus_13"}
            itShould={`设置二维码的颜色是否渐变  enableLinearGradient`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode value='123456'  enableLinearGradient={enableLinearGradient}></QRCode>
                  <Button title={"start"} onPress={() => {
                       setEnableLinearGradient(true)
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
            key={"getInitStatus_14"}
            itShould={`设置二维码渐变的颜色  linearGradient`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [isShow,setIsShow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                {
                  isShow&& <QRCode value='123456'  enableLinearGradient={true} linearGradient={linearGradient}></QRCode>
                }
                  <Button title={"start"} onPress={() => {
                    setIsShow(false)
                      setLinearGradient(["rgb(0,255,0)","rgb(0,0,255)"])
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
            key={"getInitStatus_15"}
            itShould={`设置二维码渐变的线性梯度  linearGradient`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                 <QRCode value='123456'  enableLinearGradient={true} linearGradient={linearGradient} gradientDirection={gradientDirection}></QRCode>
                  <Button title={"start"} onPress={() => {
                      setGradientDirection(["100%","100%","0%","0%"])
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
  );
}




