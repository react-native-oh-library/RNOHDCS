import React, { Component , useState } from 'react';
import { ScrollView,Text, View, Image } from 'react-native';
import {
  Svg,
  Defs,
  LinearGradient,
  Stop,
  Mask,
  Path,
  Rect,
  G,
  Circle,
  ForeignObject,
} from 'react-native-svg';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';

export default function() {
    const [layoutStr, setLayoutStr] = useState("width:0,height:0")
    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView>
                <TestCase
                    itShould="case 1: test ForeignObject:x = 0; y= 0,width = 100,height = 100">
                    <View style={{ flex:1,height:150 ,flexDirection:'row'}}>
                        <Svg height="100%">
                        <Defs>
                            <LinearGradient
                            id="Gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="0">
                            <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                            <Mask
                            id="Mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="300">
                            <Rect
                                x="0"
                                y="0"
                                width="800"
                                height="300"
                                fill="url(#Gradient)"
                            />
                            </Mask>
                        </Defs>
                        <G mask="url(#Mask)">
                            <Circle cx={50} cy={70} r={65} />
                            <ForeignObject x={0} y={0} width={100} height={100}>
                            <View style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}>
                                <Text style={{ color: 'blue' }}>Testing</Text>
                                <Text style={{ color: 'green' }}>Testing2</Text>
                            </View>
                            </ForeignObject>
                        </G>
                        </Svg>

                    </View>
                </TestCase>

                <TestCase
                    itShould="case 2: test ForeignObject prop x change x : 50">
                    <View style={{ flex:1,height:150 ,flexDirection:'row'}}>
                        <Svg height="100%">
                        <Defs>
                            <LinearGradient
                            id="Gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="0">
                            <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                            <Mask
                            id="Mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="300">
                            <Rect
                                x="0"
                                y="0"
                                width="800"
                                height="300"
                                fill="url(#Gradient)"
                            />
                            </Mask>
                        </Defs>
                        <G mask="url(#Mask)">
                            <Circle cx={50} cy={70} r={65} />
                            <ForeignObject x={50} y={0} width={100} height={100}>
                            <View style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}>
                                <Text style={{ color: 'blue' }}>Testing</Text>
                                <Text style={{ color: 'green' }}>Testing2</Text>
                            </View>
                            </ForeignObject>
                        </G>
                        </Svg>

                    </View>
                </TestCase>

                <TestCase
                    itShould="case 3: test ForeignObject prop x change x : 50, y: 50">
                    <View style={{ flex:1,height:150 ,flexDirection:'row'}}>
                        <Svg height="100%">
                        <Defs>
                            <LinearGradient
                            id="Gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="0">
                            <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                            <Mask
                            id="Mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="300">
                            <Rect
                                x="0"
                                y="0"
                                width="800"
                                height="300"
                                fill="url(#Gradient)"
                            />
                            </Mask>
                        </Defs>
                        <G mask="url(#Mask)">
                            <Circle cx={50} cy={70} r={65} />
                            <ForeignObject x={50} y={50} width={100} height={100}>
                            <View style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}>
                                <Text style={{ color: 'blue' }}>Testing</Text>
                                <Text style={{ color: 'green' }}>Testing2</Text>
                            </View>
                            </ForeignObject>
                        </G>
                        </Svg>

                    </View>
                </TestCase>


                <TestCase
                    itShould="case 4: test ForeignObject prop x change width : 30, height: 30">
                    <View style={{ flex:1,height:150 ,flexDirection:'row'}}>
                        <Svg height="100%">
                        <Defs>
                            <LinearGradient
                            id="Gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="0">
                            <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                            <Mask
                            id="Mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="300">
                            <Rect
                                x="0"
                                y="0"
                                width="800"
                                height="300"
                                fill="url(#Gradient)"
                            />
                            </Mask>
                        </Defs>
                        <G mask="url(#Mask)">
                            <Circle cx={50} cy={70} r={65} />
                            <ForeignObject x={50} y={0} width={30} height={30}>
                            <View style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}>
                                <Text style={{ color: 'blue' }}>Testing</Text>
                                <Text style={{ color: 'green' }}>Testing2</Text>
                            </View>
                            </ForeignObject>
                        </G>
                        </Svg>

                    </View>
                </TestCase>

                <TestCase
                    itShould="case 5: test  rotation: 30">
                    <View style={{ flex:1,height:150 ,flexDirection:'row'}}>
                        <Svg height="100%">
                        <Defs>
                            <LinearGradient
                            id="Gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="0">
                            <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                            <Mask
                            id="Mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="300">
                            <Rect
                                x="0"
                                y="0"
                                width="800"
                                height="300"
                                fill="url(#Gradient)"
                            />
                            </Mask>
                        </Defs>
                        <G rotation={30} mask="url(#Mask)">
                            <Circle cx={50} cy={70} r={65} />
                            <ForeignObject x={50} y={0} width={100} height={100}>
                            <View style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}>
                                <Text style={{ color: 'blue' }}>Testing</Text>
                                <Text style={{ color: 'green' }}>Testing2</Text>
                            </View>
                            </ForeignObject>
                        </G>
                        </Svg>

                    </View>
                </TestCase>    

                <TestCase
                    itShould="case 6: test  scale: 0.5">
                    <View style={{ flex:1,height:150 ,flexDirection:'row'}}>
                        <Svg height="100%">
                        <Defs>
                            <LinearGradient
                            id="Gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="0">
                            <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                            <Mask
                            id="Mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="300">
                            <Rect
                                x="0"
                                y="0"
                                width="800"
                                height="300"
                                fill="url(#Gradient)"
                            />
                            </Mask>
                        </Defs>
                        <G scale={0.5} mask="url(#Mask)">
                            <Circle cx={50} cy={70} r={65} />
                            <ForeignObject x={50} y={0} width={100} height={100}>
                            <View style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}>
                                <Text style={{ color: 'blue' }}>Testing</Text>
                                <Text style={{ color: 'green' }}>Testing2</Text>
                            </View>
                            </ForeignObject>
                        </G>
                        </Svg>

                    </View>
                </TestCase>   

                <TestCase
                    itShould="case 7: test  translate: 30">
                    <View style={{ flex:1,height:150 ,flexDirection:'row'}}>
                        <Svg height="100%">
                        <Defs>
                            <LinearGradient
                            id="Gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="0">
                            <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                            <Mask
                            id="Mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="300">
                            <Rect
                                x="0"
                                y="0"
                                width="800"
                                height="300"
                                fill="url(#Gradient)"
                            />
                            </Mask>
                        </Defs>
                        <G translate={30} mask="url(#Mask)">
                            <Circle cx={50} cy={70} r={65} />
                            <ForeignObject x={50} y={0} width={100} height={100}>
                            <View style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}>
                                <Text style={{ color: 'blue' }}>Testing</Text>
                                <Text style={{ color: 'green' }}>Testing2</Text>
                            </View>
                            </ForeignObject>
                        </G>
                        </Svg>

                    </View>
                </TestCase>  

                <TestCase
                    itShould="case 8: test  onLayout event">
                    <View style={{ flex:1,height:150}}>
                         <Text style={{color:'red'}}>onLayout value:{layoutStr}</Text>   
                        <Svg height="100%">
                        <Defs>
                            <LinearGradient
                            id="Gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="0">
                            <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                            <Mask
                            id="Mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="300">
                            <Rect
                                x="0"
                                y="0"
                                width="800"
                                height="300"
                                fill="url(#Gradient)"
                            />
                            </Mask>
                        </Defs>
                        <G translate={30} mask="url(#Mask)">
                            <Circle cx={50} cy={70} r={65} />
                            <ForeignObject x={50} y={0} width={100} height={100}>
                            <View 
                            style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}
                            onLayout={(e)=>{
                                setLayoutStr(JSON.stringify(e.nativeEvent.layout))
                              }}
                            >
                                <Text style={{ color: 'blue' }}>Testing</Text>
                                <Text style={{ color: 'green' }}>Testing2</Text>
                            </View>
                            </ForeignObject>
                        </G>
                        </Svg>

                    </View>
                </TestCase>  

                <TestCase
                    itShould="case 9: test views that are not wrapped in ForeignObject">
                    <View style={{ flex:1}}>
                        <Svg height="50%">
                            <Defs>
                                <LinearGradient
                                id="Gradient"
                                gradientUnits="userSpaceOnUse"
                                x1="0"
                                y1="0"
                                x2="800"
                                y2="0">
                                <Stop offset="0" stopColor="white" stopOpacity="0.2" />
                                <Stop offset="1" stopColor="white" stopOpacity="1" />
                                </LinearGradient>
                                <Mask
                                id="Mask"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="800"
                                height="300">
                                <Rect
                                    x="0"
                                    y="0"
                                    width="800"
                                    height="300"
                                    fill="url(#Gradient)"
                                />
                                </Mask>
                            </Defs>
                            <G  mask="url(#Mask)">
                                <Circle cx={50} cy={70} r={65} />
                                <ForeignObject x={50} y={0} width={100} height={100}>
                                    <View style={{ width: 100, height: 100, transform: [] ,flexDirection:'column'}}>
                                        <Text style={{ color: 'blue' }}>Testing</Text>
                                        <Text style={{ color: 'green' }}>Testing2</Text>
                                    </View>
                                </ForeignObject>
                            </G>

                            <Text style={{ color: 'blue' }}>测试不用ForeignObject包裹的显示</Text>
                        </Svg>

                    </View>
                </TestCase>  

           
            </ScrollView>
        </Tester>
    )
}