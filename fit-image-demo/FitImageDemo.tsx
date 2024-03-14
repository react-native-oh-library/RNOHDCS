import React,{useState} from 'react'
import {View,StyleSheet,Text,ScrollView,SafeAreaView,Image,Button} from "react-native"
import FitImage from "react-native-fit-image"
var styles = StyleSheet.create({
    fitImage:{
        borderRadius:20,
        borderColor:'red',
        borderWidth:1
    },
    fitImageWithSize:{
        height:200,
        width:'100%'
    }
});
const FitImageDemo=()=>{
    // 测试onLoad
    const [onLoadDatea,setOnLoad] = useState('初始onLoad值111')
    // 获取图片尺寸
    const [imgSizeNum,getImageSizeNum] = useState(0)
    const img1 = require('./assets/expo.png')
    const getImageSize = ()=>{
        let res = Image.resolveAssetSource(img1)
        getImageSizeNum(res.width)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>验证网略图片</Text>
                    <FitImage  style={styles.fitImageWithSize} source={{uri:"https://octodex.github.com/images/stormtroopocat.jpg"}}>
                    </FitImage>
                </View>
                <View>
                    <Text>获取图片宽度</Text>
                    <FitImage  style={styles.fitImageWithSize} source={require('./assets/expo.png')}>
                    </FitImage>
                    <Text>宽度：{imgSizeNum}</Text>
                    <Button onPress={()=>{getImageSize()}} title='调用image图片宽高'></Button>
                </View>
                <View>
                    <Text>验证图片圆角</Text>
                    <FitImage  style={{...styles.fitImageWithSize,...styles.fitImage}} source={require('./assets/expo.png')}>
                    </FitImage>
                    <Text>宽度：{imgSizeNum}</Text>
                    <Button onPress={()=>{getImageSize()}} title='调用image图片宽高'></Button>
                </View>
                <View style={{width:'100%',height:100}}>
                    <Text>测试resizeMode(cover contain stretch repeat center)，值为cover</Text>
                    <FitImage resizeMode='cover' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')}>
                    </FitImage>
                </View>
                <View style={{width:'100%',height:100}}>
                    <Text>测试resizeMode(cover contain stretch repeat center)，值为contain</Text>
                    <FitImage resizeMode='contain' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')}>
                    </FitImage>
                </View>
                <View style={{width:'100%',height:100}}>
                    <Text>测试resizeMode(cover contain stretch repeat center)，值为stretch</Text>
                    <FitImage resizeMode='stretch' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')}>
                    </FitImage>
                </View>
                <View style={{width:'100%',height:100}}>
                    <Text>测试resizeMode(cover contain stretch repeat center)，值为repeat</Text>
                    <FitImage resizeMode='repeat' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')}>
                    </FitImage>
                </View>
                <View style={{width:'100%',height:100}}>
                    <Text>测试resizeMode(cover contain stretch repeat center)，值为center</Text>
                    <FitImage resizeMode='center' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')}>
                    </FitImage>
                </View>
                <View>
                    <Text>第一个测试onLoad</Text>
                    <Text>{onLoadDatea}</Text>
                    <FitImage onLoad={()=>{setTimeout(()=>{setOnLoad('改变后onLoad值222')},2000)}} style={styles.fitImageWithSize} source={require('./assets/expo.png')}>
                    </FitImage>
                </View>
                <View>
                    <Text>第五个测试属性indicator(加载器  true/false)，indicatorColor(加载器颜色)，indicatorSize(加载器大小(small | large)) =====》indicator值为true，indicatorSize值为large  网络图片</Text>
                    <FitImage
                        indicator={true} // disable loading indicator
                        indicatorColor="red" // react native colors or color codes like #919191
                        indicatorSize="large" // (small | large) or integer
                        source={{uri:"https://octodex.github.com/images/stormtroopocat.jpg"}}
                        style={{...styles.fitImage,...styles.fitImageWithSize}}
                        />
                </View>
                <View>
                    <Text>第六个测试属性indicator(加载器  true/false)，indicatorColor(加载器颜色)，indicatorSize(加载器大小(small | large | number)) =====》indicator值为true，indicatorSize值为small</Text>
                    <FitImage
                        indicator={true} // disable loading indicator
                        indicatorColor="red" // react native colors or color codes like #919191
                        indicatorSize="small" // (small | large) or integer
                        source={require('./assets/expo.png')}
                        style={{...styles.fitImage,...styles.fitImageWithSize}}
                        />
                </View>
                <View>
                    <Text>第七个测试属性indicator(加载器  true/false)，indicatorColor(加载器颜色)，indicatorSize(加载器大小(small | large | number)) =====》indicator值为true，indicatorSize值为number</Text>
                    <FitImage
                        indicator={true} // disable loading indicator
                        indicatorColor="red" // react native colors or color codes like #919191
                        indicatorSize={20} // (small | large) or integer
                        source={require('./assets/expo.png')}
                        style={{...styles.fitImage,...styles.fitImageWithSize}}
                        />
                </View>
                <View>
                    <Text>第八个测试属性indicator(加载器  true/false)，indicatorColor(加载器颜色)，indicatorSize(加载器大小(small | large | number)) =====》indicator值为false，indicatorSize值为number</Text>
                    <Text>为false预加载器不显示</Text>
                    <FitImage
                        indicator={false} // disable loading indicator
                        indicatorColor="red" // react native colors or color codes like #919191
                        indicatorSize={20} // (small | large) or integer
                        source={require('./assets/expo.png')}
                        style={{...styles.fitImage,...styles.fitImageWithSize}}
                        />
                </View>
                <View>
                    <Text>不加宽高，看图片是否能出来</Text>
                    <FitImage
                        source={require('./assets/expo.png')}
                        />
                </View>
                <View>
                    <Text>测试blurRadius(模糊滤镜，值越大越模糊)</Text>
                    <FitImage
                        source={require('./assets/expo.png')}
                        style={{...styles.fitImage,...styles.fitImageWithSize}}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default FitImageDemo;