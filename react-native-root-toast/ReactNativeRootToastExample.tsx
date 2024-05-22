import { RootSiblingParent } from 'react-native-root-siblings';
import React,{ useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableHighlight, TextInput, Switch, Button, Alert } from 'react-native';
import Toast from 'react-native-root-toast';

export function ReactNativeRootToastExample() {
    let { durations, positions } = Toast;
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

    let toast: any = null;

    const [dataState, setDataState] = useState(
        {
            duration: durations.LONG,//弹窗持续时间
            position: positions.TOP,//正数与顶部 负数为底部的距离
            shadow: true,//弹窗背景阴影
            animation: true,//弹窗消失和出现的时候的过度动画
            hideOnPress: true,//点击弹窗时,弹窗是否立刻消失
            delay: 0,//延时多长时间显示 (ms)
            message: messages[~~(messages.length * Math.random())],//弹窗消息文本
            backgroundColor: false,//弹窗的背景颜色
            shadowColor: false,//弹窗框体下的阴影颜色
            textColor: false,//通知字体颜色
            opacity:false,//透明度
        }
    );

    function show() {
        let message = messages[~~(messages.length * Math.random())];
        toast && toast.destroy();
        dataState.message = message;
        toast = Toast.show(message, {
            duration: dataState.duration,
            position: dataState.position,
            shadow: dataState.shadow,
            animation: dataState.animation,
            hideOnPress: dataState.hideOnPress,
            delay: dataState.delay,
            backgroundColor: dataState.backgroundColor ? 'blue' : '',
            shadowColor: dataState.shadowColor ? 'yellow' : '',
            textColor: dataState.textColor ? 'purple' : '',
            opacity:dataState.opacity?1.0:0.1,
            onPress: () => {
                Alert.alert('You clicked me!')
            },
            onShow: () => {
                // calls on toast\`s appear animation start
                setToPtext("弹窗显示动画开始");
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
                setToPtext("弹窗显示动画结束");
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
                setToPtext("弹窗隐藏动画开始");
            },
            onHidden: () => {
                toast.destroy();
                toast = null;
                setToPtext("");
            },
        });
    }

    let text_durtion = dataState.duration == durations.LONG ?"长":"短";
    
    const [ptext,setPtext] = useState("顶部");
    const [totext,setToPtext] = useState("");
    function a(){
        switch(dataState.position){
            case positions.TOP: dataState.position = positions.BOTTOM; setPtext("底部"); break;
            case positions.BOTTOM: dataState.position = positions.TOP; setPtext("顶部");break;
        }
    }
    let PToast :any = null;
    function startPToast(){
        PToast = Toast.show("超长待机弹窗实例", {
            duration: 99999999,
            position: 20,
            shadow: true,
            animation: true,
            hideOnPress: false,
            delay: 0,
            onHidden: () => {
                PToast.destroy();
                PToast = null;
            },
        });
    }

    function hidePToast(){ Toast.hide(PToast); }

    return (
        <RootSiblingParent>
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <View style={styles.fieldContainer}>
                    <Button title = "开一个弹窗" onPress = {startPToast} />
                    <Button title = "关掉这个弹窗" onPress = {hidePToast} />
                </View>
                <View style={styles.fieldContainer}>
                    <Button title = "弹窗高度" onPress = {a} />
                    <Text style={styles.fieldText}> {ptext}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>弹窗持续时间 {text_durtion}</Text>
                    <Switch 
                        onValueChange={value_ => setDataState({...dataState,duration:value_ ? durations.LONG:durations.SHORT })} 
                        value={dataState.duration == durations.LONG} 
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>弹窗延时 (ms)</Text>
                    <TextInput
                        style={styles.input}
                        onChange={({ nativeEvent: { text } }) => { dataState.delay = parseInt(text); setDataState(dataState) }}
                        value={(dataState.delay + '')}
                        keyboardType={'decimal-pad'}
                    />
                </View>

                <View style={styles.fieldContainer} >
                    <Text style={styles.fieldText}>背景阴影</Text>
                    <Switch onValueChange={value => setDataState({...dataState,shadow:value})} value={dataState.shadow} />
                </View>
                <View style={styles.fieldContainer} >
                    <Text style={styles.fieldText}>出现/消失动画</Text>
                    <Switch onValueChange={value => setDataState({...dataState,animation:value})} value={dataState.animation} />
                </View>
                <View style={styles.fieldContainer} >
                    <Text style={styles.fieldText}>点击消失</Text>
                    <Switch onValueChange={value => setDataState({...dataState,hideOnPress:value})} value={dataState.hideOnPress} />
                </View>
                <View style={styles.fieldContainer} >
                    <Text style={styles.fieldText}>背景颜色</Text>
                    <Switch onValueChange={value => setDataState({...dataState,backgroundColor:value})} value={dataState.backgroundColor} />
                </View>
                <View style={styles.fieldContainer} >
                    <Text style={styles.fieldText}>背景阴影颜色</Text>
                    <Switch onValueChange={value => setDataState({...dataState,shadowColor:value})} value={dataState.shadowColor} />
                </View>
                <View style={styles.fieldContainer} >
                    <Text style={styles.fieldText}>字体颜色</Text>
                    <Switch onValueChange={value => setDataState({...dataState,textColor:value})} value={dataState.textColor} />
                </View>
                <View style={styles.fieldContainer} >
                    <Text style={styles.fieldText}>透明度</Text>
                    <Switch onValueChange={value => setDataState({...dataState,opacity:value})} value={dataState.opacity} />
                </View>

                <TouchableHighlight style={styles.button} underlayColor="green" onPress={show} >
                    <Text style={styles.buttonText}>显示弹窗 {totext}</Text>
                </TouchableHighlight>
                <View style={styles.code}>
                    <Text style={styles.codeTittle}>CODE:</Text>
                    <Text style={styles.codeText}>
                        {`Toast.show(`}
                        <Text style={styles.string}>'{dataState.message}'</Text>{`,
                            {
                                position:`} <Text style={styles.value}>{dataState.position}</Text>{`,
                                delay:`} <Text style={styles.value}>{dataState.delay}</Text>{`,
                                shadow:`} <Text style={styles.value}>{dataState.shadow ? 'true' : 'false'}</Text>{`,
                                animation:`} <Text style={styles.value}>{dataState.animation ? 'true' : 'false'}</Text>{`,
                                hideOnPress:`} <Text style={styles.value}>{dataState.hideOnPress ? 'true' : 'false'}</Text>{`,
                                backgroundColor:`} <Text style={styles.value}>{dataState.backgroundColor ? 'true' : 'false'}</Text>{`,
                                shadowColor:`} <Text style={styles.value}>{dataState.shadowColor ? 'true' : 'false'}</Text>{`,
                                opacity:`} <Text style={styles.value}>{dataState.opacity ? '1.0' : '0.1'}</Text>{`,
                                textColor:`} <Text style={styles.value}>{dataState.textColor ? 'true' : 'false'}</Text>{`
                            }
                        );`}
                    </Text>
                </View>
            </ScrollView>
        </RootSiblingParent>
    );
}
