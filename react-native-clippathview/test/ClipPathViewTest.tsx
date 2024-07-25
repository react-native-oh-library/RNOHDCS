import { View, StyleSheet, Image, Dimensions, ScrollView, Text, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { ClipPathView } from '@react-native-oh-tpl/react-native-clippathview';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
const circlePath = "M 100, 100 m -75, 0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0"
const myPath1 = 'M 50 350 L 50 250 L 30 80 Q 120 200 200 50 Q 280 200 370 80 L 350 250 L 350 350 L 200 350 L 50 350 Z';
const myPath9 = "M 200 0 L 0 400 L 400 400 Z"
const myPath14 = 'M 100 200 L 300 200';
const myPath5 = 'M 0 0 L 400 0 L 400 50 L 0 50 L 0 100 L 400 100 L 400 150 L 0 150 L 0 200 L 400 200 L 400 250 L 0 250 L 0 300 L 400 300 L 400 350 L 0 350 L 0 400 L 50 400 L 50 0 L 100 0 L 100 400 L 150 400 L 150 0 L 200 0 L 200 0 L 200 400 L 250 400 L 250 400 L 250 0 L 300 0 L 300 400 L 350 400 L 350 0 L 350 0 Z'
// 400*400 米字
const myPath12 = "M 0 0 L 50 0 L 200 200 L 150 0 L 250 0 L 250 0 L 200 200 L 350 0 L 400 0 L 400 50 L 400 50 L 200 200 L 400 150 L 400 250 L 200 200 L 400 350 L 400 350 L 400 400 L 350 400 L 200 200 L 250 400 L 150 400 L 200 200 L 50 400 L 0 400 L 0 350 L 200 200 L 0 250 L 0 250 L 0 150 L 200 200 L 0 50 L 0 50 Z"

const ClipPathViewDemo = () => {
    const [pathD, setPathD] = useState(myPath1);
    const [mVBox, setViewBox] = useState([0, 0, 400, 400]);

    return (
        <Tester style={{ flex: 1, marginTop: 30 }}>
            <ScrollView>
                <TestCase itShould="Attribute: d=circle">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>
                <TestCase itShould="Attribute: mVBox=400x400">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={mVBox}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: aspect=none">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-50, -50, 400, 200]}
                        aspect={"none"}
                        align={"xMinYMin"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: aspect=meet">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-50, -50, 400, 200]}
                        aspect={"meet"}
                        align={"xMinYMin"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>
                <TestCase itShould="Attribute: aspect=slice">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-50, -50, 400, 200]}
                        aspect={"slice"}
                        align={"xMinYMin"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: align=xMidYMid">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-80, 15, 300, 350]}
                        aspect={"slice"}
                        align={"xMidYMid"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: align=xMidYMin">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-80, 15, 300, 350]}
                        aspect={"slice"}
                        align={"xMidYMin"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: align=xMidYMax">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-80, 15, 300, 350]}
                        aspect={"slice"}
                        align={"xMidYMax"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>
                <TestCase itShould="Attribute: align=xMaxYMid">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-20, 15, 400, 300]}
                        aspect={"slice"}
                        align={"xMaxYMid"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: align=xMinYMid">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-20, 15, 400, 300]}
                        aspect={"slice"}
                        align={"xMinYMid"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: align=xMidYMid">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-20, 15, 400, 300]}
                        aspect={"slice"}
                        align={"xMidYMid"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: align=none">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[-20, 15, 400, 300]}
                        aspect={"slice"}
                        align={"none"}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>
                <TestCase itShould="Attribute: translateZ=10">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[0, 0, 400, 350]}
                        translateZ={10}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: fillRule=nonzero">
                    <ClipPathView
                        style={{ width: 280, height: 140, backgroundColor: '#ff0' }}
                        d={"M 100, 100 m -75, 0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0 Z M 100, 150 m -75, 0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0"}
                        viewBox={[0, 0, 400, 350]}
                        fillRule={"nonzero"}>

                    </ClipPathView>
                </TestCase>


                <TestCase itShould="Attribute: fillRule=evenodd">
                    <ClipPathView
                        style={{ width: 280, height: 140, backgroundColor: '#ff0' }}
                        d={"M 100, 100 m -75, 0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0 Z M 100, 150 m -75, 0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0"}
                        viewBox={[0, 0, 400, 350]}
                        fillRule={"evenodd"}>

                    </ClipPathView>
                </TestCase>


                <TestCase itShould="Attribute: strokeWidth=10">
                    <ClipPathView strokeWidth={10} viewBox={[0, 0, 400, 400]} d={"M 200 0 L 0 400 L 400 400 Z"} style={{ width: 280, height: 140, backgroundColor: '#ff0' }} />
                </TestCase>
                <TestCase itShould="Attribute: strokeWidth=30">
                    <ClipPathView strokeWidth={30} viewBox={[0, 0, 400, 400]} d={"M 200 0 L 0 400 L 400 400 Z"} style={{ width: 280, height: 140, backgroundColor: '#ff0' }} />
                </TestCase>

                <TestCase itShould="Attribute: strokeStart=strokeEnd">
                    <ClipPathView
                        style={{ width: 200, height: 200 }}
                        d={circlePath}
                        viewBox={[0, 0, 400, 350]}
                        fillRule={"evenodd"}
                        strokeWidth={30}
                        strokeStart={0.1}
                        strokeEnd={0.8}
                    >
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: strokeCap=butt">
                    <ClipPathView
                        strokeWidth={100}
                        strokeCap="butt"
                        viewBox={[0, 0, 400, 350]}
                        d={myPath14}
                        style={{ width: 280, height: 140, backgroundColor: '#ff0' }} />

                </TestCase>

                <TestCase itShould="Attribute: strokeCap=round">
                    <ClipPathView
                        strokeWidth={100}
                        strokeCap="round"
                        viewBox={[0, 0, 400, 350]}
                        d={myPath14}
                        style={{ width: 280, height: 140, backgroundColor: '#ff0' }} />

                </TestCase>

                <TestCase itShould="Attribute: strokeCap=square">
                    <ClipPathView
                        strokeWidth={100}
                        strokeCap="square"
                        viewBox={[0, 0, 400, 350]}
                        d={myPath14}
                        style={{ width: 280, height: 140, backgroundColor: '#ff0' }} />

                </TestCase>
                <TestCase itShould="Attribute: strokeJoin=miter">
                    <ClipPathView
                        strokeWidth={100}
                        strokeJoin="miter"
                        viewBox={[0, 0, 400, 350]} d={myPath1}
                        style={{ width: 300, height: 300, backgroundColor: '#ff0' }} />

                </TestCase>



                <TestCase itShould="Attribute: strokeJoin=bevel">
                    <ClipPathView
                        strokeWidth={100}
                        strokeJoin="bevel"
                        viewBox={[0, 0, 400, 350]} d={myPath1}
                        style={{ width: 300, height: 300, backgroundColor: '#ff0' }} />

                </TestCase>



                <TestCase itShould="Attribute: strokeJoin=round">
                    <ClipPathView
                        strokeWidth={100}
                        strokeJoin="round"
                        viewBox={[0, 0, 400, 350]} d={myPath1}
                        style={{ width: 300, height: 300, backgroundColor: '#ff0' }} />
                </TestCase>

                <TestCase itShould="Attribute: strokeMiter=0.5">
                    <ClipPathView
                        strokeWidth={100}
                        strokeJoin="miter"
                        strokeMiter={0.5}
                        viewBox={[0, 0, 400, 350]} d={myPath1}
                        style={{ width: 300, height: 300, backgroundColor: '#ff0' }} />

                </TestCase>
                <TestCase itShould="Attribute: strokeMiter=10">
                    <ClipPathView
                        strokeWidth={100}
                        strokeMiter={10}
                        strokeJoin="miter"
                        viewBox={[0, 0, 400, 350]} d={myPath1}
                        style={{ width: 300, height: 300, backgroundColor: '#ff0' }} />


                </TestCase>
                <TestCase itShould="Attribute: transX=40 transY = 30">
                    <ClipPathView
                        transX={40}
                        transY={30}
                        viewBox={[0, 0, 400, 350]}
                        d={circlePath}
                        style={{ width: 200, height: 100, backgroundColor: '#ff0' }} />
                </TestCase>

                <TestCase itShould="Attribute: transX=140 transY = 130">
                    <ClipPathView
                        transX={140}
                        transY={130}
                        viewBox={[0, 0, 400, 350]}
                        d={circlePath}
                        style={{ width: 200, height: 100, backgroundColor: '#ff0' }} />
                </TestCase>


                <TestCase itShould="Attribute: transX=50 transY = 0 transPercentageValue = true">
                    <ClipPathView
                        transX={50}
                        transPercentageValue={true}
                        transY={0}
                        viewBox={[0, 0, 400, 350]}
                        d={circlePath}
                        style={{ width: 200, height: 100, backgroundColor: '#ff0' }} />
                </TestCase>
                <TestCase itShould="Attribute: rot 45 rotOx =80  rotOy =50 ">
                    <ClipPathView
                        rot={45}
                        rotOx={80}
                        rotOy={50}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: rot 90 rotOx =80 rotOy =50">
                    <ClipPathView
                        rot={90}
                        rotOx={80}
                        rotOy={50}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: rot 90  rotOx =80 rotOy =80">
                    <ClipPathView
                        rot={90}
                        rotOx={80}
                        rotOy={80}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>


                <TestCase itShould="Attribute: rot 45 rotOx =0.8  rotOy =0.5 rotPercentageValue =true">
                    <ClipPathView
                        rot={45}
                        rotOx={0.8}
                        rotOy={0.5}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        rotPercentageValue={true}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>
                <TestCase itShould="Attribute: rot 90 rotOx =0.8 rotOy =0.5 rotPercentageValue =true">
                    <ClipPathView
                        rot={90}
                        rotOx={0.8}
                        rotOy={0.5}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        rotPercentageValue={true}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: rot 90  rotOx =0.8 rotOy =0.8 rotPercentageValue =true">
                    <ClipPathView
                        rot={90}
                        rotOx={0.8}
                        rotOy={0.8}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        rotPercentageValue={true}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>


                <TestCase itShould="Attribute: sc 0.9 scOx 80 scOy 80">
                    <ClipPathView
                        sc={0.9}
                        scOx={80}
                        scOy={80}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>



                <TestCase itShould="Attribute: sc 1.5 scOx 80 scOy 80">
                    <ClipPathView
                        sc={1.5}
                        scOx={80}
                        scOy={80}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: sc 1.5 scOx 150 scOy 120">
                    <ClipPathView
                        sc={1.5}
                        scOx={150}
                        scOy={120}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>


                <TestCase itShould="Attribute: scOx 80 scOy 80 scX 0.5 scY 0.5  ">
                    <ClipPathView
                        scX={0.5}
                        scY={0.5}
                        scOx={80}
                        scOy={80}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>


                <TestCase itShould="Attribute: scOx 80 scOy 80 scX 1.5 scY 1.5  ">
                    <ClipPathView
                        scX={1.5}
                        scY={1.5}
                        scOx={80}
                        scOy={80}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

                <TestCase itShould="Attribute: scO 80 scX 1.5 scY 1.5  ">
                    <ClipPathView
                        scX={1.5}
                        scY={1.5}
                        scO={80}
                        viewBox={[0, 0, 400, 350]}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>


                <TestCase itShould="Attribute: sc 0.5 scOx 0.7 scOy 0.6 scX 0.5 scY 0.5 scPercentageValue = true">
                    <ClipPathView
                        sc={0.5}
                        scOx={0.7}
                        scOy={0.6}
                        viewBox={[0, 0, 400, 350]}
                        scPercentageValue={true}
                        d={myPath1}
                        style={{ width: 200, height: 200, backgroundColor: '#ff0' }}>
                        <Animated.View style={{ backgroundColor: "blue" }}>
                            <Image style={{ width: 200, height: 200 }} source={require('./img/jpgSample.jpg')} />
                        </Animated.View>
                    </ClipPathView>
                </TestCase>

            </ScrollView>
        </Tester>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        height: 25,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5
    },
    textBtn: {
        fontSize: 18,
        padding: 5,
        marginLeft: 10,
        backgroundColor: "green"
    }
});

export default ClipPathViewDemo;