import { RNHole, RNHoleView, ERNHoleViewTimingFunction, IRNHoleViewAnimation } from 'react-native-hole-view';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, ToastAndroid as Toast } from 'react-native';
import Video from 'react-native-video';
import { useEffect, useState, useCallback } from 'react';


const animationSettings: IRNHoleViewAnimation = {timingFunction: ERNHoleViewTimingFunction.EASE_IN_OUT, duration: 200};

function HoleViewDemo() {
    // const firstHole: RNHole = {x: 100, y: 300, width: 160, height: 160, borderRadius: 80, borderTopLeftRadius: 30, isRTL: true};
    const firstHole: RNHole = {x: 100, y: 300, width: 160, height: 160, borderRadius: 80};
    const secondHole: RNHole = {x: 100, y: 40, width: 140, height: 140, borderRadius: 40};
    const thirdHole: RNHole = {x: 130, y: 40, width: 80, height: 80, borderRadius: 40};
    const [holes, setHoles] = useState<RNHole[]>([firstHole]);
    
    const [animated, setAnimated] = useState<boolean>(false);
    const [animation, setAnimation] = useState<IRNHoleViewAnimation | undefined>(undefined);
    
    const onPress = useCallback(() => {
        if (animated) {
            setHoles([firstHole]);
        } else {
            setHoles([secondHole])
        }

        setAnimation({...animationSettings});
        setAnimated(!animated);
    }, [animated, animation])
    
    let i = 0;

    useEffect(() => {
       const id = setInterval(() => {
            if (i % 2 === 1) {
                setHoles([firstHole])
                console.log("js porps: ", firstHole.y);
            } else {
                setHoles([secondHole])
                console.log("js porps: ", secondHole.y);
            }
            i +=1;
       }, 3000); 
       return () => clearInterval(id);
    }, []);
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Text style={{ flexGrow: 0, flex: 0, padding: 10 }} onPress={() => {
                console.log('press text');
                Toast.show('Text press!', 500);
            }}>{"Wow! I'm a text inside a hole!"}</Text>
            <ScrollView style={{ flexGrow: 0, flex: 0, padding: 10 }} horizontal={true}>
                <Text numberOfLines={1}>
                    {
                        "Wow! I'm a ScrollView inside a hole! Wow! I'm a ScrollView inside a hole! Wow! I'm a ScrollView inside a hole!"
                    }
                </Text>
            </ScrollView>
            <TouchableOpacity onPress={() => {
                console.log("buttom press");
                Toast.show('Buttom press!', 500);
            }} style={{ backgroundColor: 'pink', padding: 10, borderRadius: 5 }}>
                <Text>{"Wow! I'm a button inside a hole!"}</Text>
            </TouchableOpacity>
            <RNHoleView
                pointerEvents="none"
                style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(34,146,231,0.4)'  }}
                holes={holes}
                animation={{duration: 1000, timingFunction: 'EASE_IN_OUT'}}
                onAnimationFinished={() => {
                    console.log('animation finished !');
                    setAnimation(undefined);
                }}
                >
                <Image source={{uri: "https://img.zcool.cn/community/01cecb5d390484a80120695c1d523e.jpg@2o.jpg"}} style={{marginTop: 200, width: "100%", height: 300}}></Image>
            </RNHoleView>
            <View
                pointerEvents={'box-none'}
                style={{
                    position: 'absolute',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'center'

                }}>
                <TouchableOpacity onPress={onPress}
                                  style={{backgroundColor: 'pink', padding: 10, borderRadius: 5, bottom: 50}}>
                    <Text>{"Animate!"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HoleViewDemo;
