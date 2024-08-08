<!-- 方法 -->
import { Text, View } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
<!-- 别名方法 -->
import { s, vs, ms, mvs } from 'react-native-size-matters';

let scale = () =>{
    return (
        <View style={{
            width: scale(100),
            height: 100,
            padding: 5,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'blue'
        }} >
            <Text>{scale(100}</Text>
        </View>
    )
}

let verticalScale = () =>{
    return (
        <View style={{
            width: 100,
            height: verticalScale(100),
            padding: 5,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'blue'
        }} >
            <Text>{verticalScale(100}</Text>
        </View>
    )
}

let moderateScale = () =>{
    return (
    <View style={{
        width: 100,
        height: 100,
        padding: 5,
        borderWidth:moderateScale(10),
        borderColor: 'red',
        backgroundColor: 'blue'
    }} >
        <Text>borderWidth{moderateScale(10)}</Text>
    </View>
    )
}


let moderateVerticalScale = ()=>{
    return (
        <View style={{
            width: 100,
            height: moderateVerticalScale(100),
            padding: 5,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'blue'
        }} >
            <Text>{moderateVerticalScale(100}</Text>
        </View>
    )
}

let s = () =>{
    return (
        <View style={{
            width: s(100),
            height: 100,
            padding: 5,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'blue'
        }} >
            <Text>{s(100}</Text>
        </View>
    )
}

let vs = () =>{
    return (
        <View style={{
            width: 100,
            height: vs(100),
            padding: 5,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'blue'
        }} >
            <Text>{vs(100}</Text>
        </View>
    )
}

let ms = () =>{
    return (
    <View style={{
        width: 100,
        height: 100,
        padding: 5,
        borderWidth:ms(10),
        borderColor: 'red',
        backgroundColor: 'blue'
    }} >
        <Text>borderWidth{ms(10)}</Text>
    </View>
    )
}


let mvs = ()=>{
    return (
        <View style={{
            width: 100,
            height: mvs(100),
            padding: 5,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'blue'
        }} >
            <Text>{mvs(100}</Text>
        </View>
    )
}

export default class sizeMattersDemo {
  render() {
    return (
        <>
            <Scale />
            <VerticalScale />
            <ModerateScale />
            <ModerateVerticalScale />
            <S />
            <Vs />
            <Ms />
            <Mvs />
        </>
    );
  }
}