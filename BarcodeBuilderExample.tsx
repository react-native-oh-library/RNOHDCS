import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Barcode from "react-native-barcode-builder";
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
export const BarcodeBuilderExample = () => {
    const styles = StyleSheet.create({
        scrollView: {
            backgroundColor: Colors.lighter,
        },
        body: {
            backgroundColor: Colors.white,
        },
        sectionContainer: {
            marginTop: 32,
            paddingHorizontal: 24,
        },
    });
    useEffect(() => {

    }, [])
    const error = (e) => {
        console.log(e, "click")
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF"
        }} >

            <Text style={{ fontSize: 50 }} >
                This is a Barcode Builder
            </Text>
            <Barcode
                value=" hello~~~" //条形码扫描结果
                format="CODE128"  //条形码编码类型
                text="hello world" //条形码下方字体
                // textColor='red'  //条形码下方字体颜色
                // lineColor='blue' //条形码颜色
                // background="red"  //条形码背景颜色
                onError={error}  //扫描失败回调
                width={5} // 条形码单条宽度
                height={200}  //条形码单条高度
            />;

        </View>
    )
}


