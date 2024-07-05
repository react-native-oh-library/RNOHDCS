import { RootSiblingParent } from 'react-native-root-siblings';
import React, { useState } from 'react';
import {StyleSheet, Button, ScrollView, View } from 'react-native';
import Toast from 'react-native-root-toast';
import {TestSuite,Tester,TestCase} from '@rnoh/testerino';

const messages = [
    'Mr. and Mrs. Dursley, of number four Privet Drive, were proud to say that they were perfectly normal, thank you very much.',
    '“I am not worried, Harry,” said Dumbledore, his voice a little stronger despite the freezing water. “I am with you.”',
    'You’re a wizard, Harry.',
    'But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
    'Ah, music,” he said, wiping his eyes. “A magic beyond all we do here!”',
    'I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.',
    'Never trust anything that can think for itself if you can’t see where it keeps its brain.',
    'There are some things you can’t share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.',
    'It’s wingardium leviOsa, not leviosAH.',
    'There is no need to call me Sir, Professor.',
    '’I’m not going to be murdered,’ Harry said out loud.‘That’s the spirit, dear,’ said his mirror sleepily.',
    'You sort of start thinking anything’s possible if you’ve got enough nerve.',
    'It is our choices, Harry, that show what we truly are, far more than our abilities.',
    'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
    'Just because you have the emotional range of a teaspoon doesn’t mean we all have.',
    '‘He is dead!’ Narcissa Malfoy called to the watchers.',
    'Really Hagrid, if you are holding out for universal popularity, I’m afraid you will be in this cabin for a very long time',
    'Chaos reigned.',
    'Give her hell from us, Peeves!',
    'Until the very end.',
    'Oculus Reparo!',
    '“After all this time?”“Always,” said Snape.'
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    content: {
        paddingTop: 40,
        alignItems: 'center'
    },
    button: {
        borderRadius: 3,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'green',
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    prop: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'skyblue',
        borderBottomWidth: 1,
        borderBottomColor: '#666'
    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    fieldText: {
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'skyblue'
    },
    input: {
        width: 100,
        height: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        color: '#333'
    },
    code: {
        alignSelf: 'stretch',
        backgroundColor: '#f0f0f0',
        padding: 10,
        height: 200
    },
    codeText: {
        fontSize: 10
    },
    codeTittle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    value: {
        color: 'blue'
    },
    string: {
        color: 'grey'
    },
    api: {
        fontSize: 12,
        textAlign: 'center',
        marginRight: 10
    }
});

export function ReactNativeRootToastExample() {
    let { durations, positions } = Toast;
    const [visible,setVisible] = useState(false);
    let toast: any = null;
    function show(obj = {}) {
        let defaultObj = {
            duration: 3000,
            position:  positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: '',
            shadowColor: '',
            textColor: '' ,
            opacity:1.0,
            _onPress:()=>{},
            _onShow: ()=>{},
            _onShown:()=>{},
            _onHide:()=>{},
            _onHidden:()=>{}
        }
        
        let result = Object.assign(defaultObj, obj);
        let message = messages[~~(messages.length * Math.random())];
        toast && toast.destroy();
        toast = Toast.show(message, {
            duration: result.duration,
            position: result.position,
            shadow: result.shadow,
            animation: result.animation,
            hideOnPress: result.hideOnPress,
            delay: result.delay,
            backgroundColor: result.backgroundColor ,
            shadowColor: result.shadowColor ,
            textColor: result.textColor,
            opacity:result.opacity,
            onPress: () => {
                result._onPress();
            },
            onShow: () => {
                result._onShow();
            },
            onShown: () => {
                result._onShown();
            },
            onHide: () => {
                result._onHide();
            },
            onHidden: () => {
                toast.destroy();
                toast = null;
                result._onHidden();
            },
        });
    }

    return (
        <RootSiblingParent>
            <ScrollView>
            <Tester>
                <TestSuite name = "react-native-root-toast">
                    <TestCase itShould='弹窗持续时间 duration LONG'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`LONG`} onPress={() => {show({duration:durations.LONG});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹窗持续时间duration SHORT'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={ ({setState}) => (<Button title={`SHORT`} onPress={() => {show({duration:durations.SHORT});setState(true)}} /> )  }
                    >
                    </TestCase>
                    <TestCase itShould='弹窗出现位置 position TOP'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`TOP`} onPress={() => {show({position:positions.TOP});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹窗出现位置 position BOTTOM'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => (  <Button title={`BOTTOM`} onPress={() => {show({position:positions.BOTTOM});setState(true)}} />  )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='边框阴影 shadow true'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`shadow true`} onPress={() => {show({shadow:true,shadowColor:'yellow'});setState(true)}} />)
                        }
                    >
                    </TestCase>
                    <TestCase itShould='边框阴影 shadow false'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`shadow false`} onPress={() => {show({shadow:false,shadowColor:'yellow'});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='边框阴影颜色 shadowColor blue'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) =>(  <Button title={`shadowColor blue`} onPress={() => {show({shadow:true,shadowColor:'blue'});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='边框阴影颜色 shadowColor red'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) =>( <Button title={`shadowColor red`} onPress={() => {show({shadow:true,shadowColor:'red'});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='出现动画 animation false（400ms）'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`animation false`} onPress={() => {show({animation:false});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='出现动画 animation true（400ms）'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`animation true`} onPress={() => {show({animation:true});setState(true)}} />  )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='点击弹窗弹窗消失 hideOnPress false'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`hideOnPress false`} onPress={() => {show({duration:7000,hideOnPress:false});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='点击弹窗弹窗消失 hideOnPress true'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`hideOnPress true`} onPress={() => {show({duration:7000,hideOnPress:true});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹窗出现延迟 delay 4000'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`delay 4000`} onPress={() => {show({delay:4000});setState(true)}} />  )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹窗出现延迟 delay 400'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`delay 400`} onPress={() => {show({delay:400});setState(true)}} />  )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹窗文本框背景颜色 backgroundColor blue'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`backgroundColor blue`} onPress={() => {show({backgroundColor:'blue'});setState(true)}} />  )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹窗文本框背景颜色 backgroundColor red'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`backgroundColor red`} onPress={() => {show({backgroundColor:'red'});setState(true)}} />  )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='文字颜色 textColor blue'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`textColor blue`} onPress={() => {show({textColor:'blue'});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='文字颜色 textColor purple'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`textColor purple`} onPress={() => {show({textColor:'purple'});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹框透明度 opacity 1'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`opacity 1`} onPress={() => {show({opacity:1});setState(true)}} />  )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹框透明度 opacity 0.1'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`opacity 0.1`} onPress={() => {show({opacity:0.1});setState(true)}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='点击弹框回调 onPress'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`onPress`} onPress={() => {show({_onPress:()=>{setState(true)}});}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹框出现动画回调(前) onShow'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`onShow`} onPress={() => {show({_onShow:()=>{setState(true)}});}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹框出现动画回调(后) onShown'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`onShown`} onPress={() => {show({_onShown:()=>{setState(true)}});}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹框消失动画回调（前） onHide'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`onHide`} onPress={() => {show({_onHide:()=>{setState(true)}});}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='弹框消失动画回调（后）onHidden'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`onHidden`} onPress={() => {show({_onHidden:()=>{setState(true)}})}} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='组件式弹框显隐 visible true'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`visible true`} onPress={() => { setVisible(true);setState(true) }} /> )
                        }
                    >
                    </TestCase>
                    <TestCase itShould='组件式弹框显隐 visible false'
                        initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
                        arrange={
                            ({setState}) => ( <Button title={`visible false`} onPress={() => { setVisible(false);setState(true) }} /> )
                        }
                    >
                    </TestCase>
                </TestSuite>
            </Tester>

            <Toast
            visible={visible}
            position={positions.TOP}
            shadow={false}
            animation={false}
            hideOnPress={false}
                >This is a message</Toast>
            </ScrollView>
        </RootSiblingParent>
    );
}
