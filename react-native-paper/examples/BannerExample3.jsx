import * as React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    Animated
} from 'react-native';

import {
    Banner, Button, MD2Colors,
} from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { useRef, useState, forwardRef, useImperativeHandle } from 'react';

const ForwardedBanner = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(true);

    useImperativeHandle(ref, () => ({
        hide: () => setVisible(false), // 暴露关闭方法
    }));

    return (
        <Banner
            visible={visible}
            //theme属性，使点击的按键变成紫色
            theme={{colors:{
                primary: "rgb(220, 184, 255)"
              }}}
            actions={[{ label: '关闭', onPress: () => setVisible(false) }]}
        >
            {props.children}
        </Banner>
    );
});

export function BannerTest() {
    const bannerRef = useRef(null); // 创建一个 ref

    const hideBanner = () => {
        if (bannerRef.current) {
            bannerRef.current.hide(); // 调用子组件的关闭方法
        }
    };

    return (
        <ScrollView>
            <Tester>
                <TestSuite name='Banner' >
                    <TestCase itShould={'ref组件是属于Banner的子组件,可以通过ref调用Banner的内部方法,例如这里通过ref组件来管理其可见性'} >
                        <View style={{ padding: 16 }}>
                            <ForwardedBanner ref={bannerRef}>ref组件是属于Banner的子组件,可以通过ref调用Banner的内部方法,例如这里通过ref组件来管理其可见性</ForwardedBanner>
                            <Button title="手动关闭" onPress={hideBanner} /> {/* 手动关闭按钮 */}
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    )
}

export default BannerTest;
