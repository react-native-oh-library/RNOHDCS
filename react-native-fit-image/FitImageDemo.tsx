import React,{useState,useEffect} from 'react'
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
    const [onLoadDatea,setOnLoad] = useState('初始onLoad未执行')
    // 测试onError
    const [onErrorDatea,setOnError] = useState('初始onError未执行')
    // 测试onLoadStart
    const [onLoadStartDatea,setOnLoadStart] = useState('未执行前onLoadStart未执行')
    // 测试onLayOut
    const [onLayOutData,setOnLayout] = useState('未执行前onLayout未执行')
    // 刷新按钮
    const [refLoadData,setRefLoadBtn] = useState(true)
    // 获取本地图片尺寸
    const [imgSizeNum,getImageSizeNum] = useState({width:0,height:0})
    const img1 = require('./assets/expo.png')
    const getImageSize = ()=>{
        let res = Image.resolveAssetSource(img1)
        getImageSizeNum({width:res.width,height:res.height})
    }
    // 获取网络图片尺寸
    const imgHttp={uri:"https://octodex.github.com/images/stormtroopocat.jpg"}
    const [imgHttpSize,getHttpSizeNum] = useState({width:0,height:0})
    // 刷新
    const [reshUiData,setReshUi] = useState(0)
    useEffect(() => {;
        getReloadFres()
      }, []);
      const getReloadFres =()=>{
         // http远程文件
         Image.getSize(imgHttp.uri, (width,height) => {
            getHttpSizeNum({ width,height });
          },
         (failure) => { console.log('failure', failure)});
      }
    //  刷新
    const reLoadFun = () =>{
        setRefLoadBtn(false)
        setReshUi(reshUiData+1)
        getImageSizeNum({width:0,height:0})
        getHttpSizeNum({width:0,height:0})
        setRefLoadBtn(true)
        getReloadFres()
    }
    return (
        <SafeAreaView>
            <ScrollView>
                {/* button刷新按钮方便压力测试 */}
                <View style={{marginTop:50}}></View>
                <Button onPress={()=>{reLoadFun()}} title='刷新'></Button>
                {refLoadData&&(
                    <View style={{width:'100%',height:'100%'}}>
                    <Text>刷新了{reshUiData}次</Text>
                     <View>
                         <Text>测试onLoad</Text>
                         <Text>{onLoadDatea}</Text>
                         <FitImage onLoad={()=>{console.log('执行了onLoad'); setOnLoad('执行了onLoad')}} style={styles.fitImageWithSize} source={require('./assets/expo.png')} />                        
                     </View>
                     <View>
                         <Text>测试base64图片</Text>
                         <FitImage
                              source={{
                                 uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                               }}
                               style={{...styles.fitImageWithSize}}
                             />
                     </View>
                     <View>
                         <Text>测试属性originalWidth，originalHeight（在不加宽度高度的情况下）</Text>
                         <FitImage
                             source={require('./assets/expo.png')}
                             originalWidth={400}
                             originalHeight={400}
                             />
                     </View>
                     <View>
                         <Text>不加originalWidth，originalHeight和不加宽度高度的情况下</Text>
                         <FitImage
                             source={require('./assets/expo.png')}
                             />
                     </View>
                     <View>
                         <Text>不加originalWidth，originalHeight但是加宽度高度的情况下</Text>
                         <FitImage
                             source={require('./assets/expo.png')}
                             style={{...styles.fitImageWithSize}}
                             />
                     </View>
                     <View>
                         <Text>不加originalWidth，originalHeight但是加宽度高度的情况下的网络图片</Text>
                         <FitImage
                             source={{uri:"https://octodex.github.com/images/stormtroopocat.jpg"}}
                             style={{...styles.fitImageWithSize}}
                             />
                     </View>
                     <View>
                         <Text>加originalWidth，originalHeight但是不加宽度高度的情况下的网络图片</Text>
                         <FitImage
                             source={{uri:"https://octodex.github.com/images/stormtroopocat.jpg"}}
                             originalWidth={400}
                             originalHeight={400}
                             />
                     </View>
                     <View>
                         <Text>同时加originalWidth，originalHeight和宽度高度的情况下</Text>
                         <FitImage
                             source={require('./assets/expo.png')}
                             originalWidth={400}
                             originalHeight={400}
                             style={{...styles.fitImageWithSize}}
                             />
                     </View>
                     <View>
                         <View>
                             <Text>indicator(加载器 为true) indicatorColor(加载器颜色) indicatorSize(值：large  small number)</Text>
                             <Text>值为：large</Text>
                             <FitImage indicator={true}  indicatorColor='red' indicatorSize='large' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                            
                         </View>
                         <View>
                             <Text>indicator(加载器 为true) indicatorColor(加载器颜色) indicatorSize(值：large  small number)</Text>
                             <Text>small</Text>
                             <FitImage indicator={true}  indicatorColor='red' indicatorSize='small' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                            
                         </View>
                         <View>
                             <Text>indicator(加载器 为true) indicatorColor(加载器颜色) indicatorSize(值：large  small number)</Text>
                             <Text>number:值越大指示器越大</Text>
                             <FitImage indicator={true}  indicatorColor='red' indicatorSize={100} style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                            
                         </View>
                         <View>
                             <Text>indicator(加载器 为false) </Text>
                             <Text>number:值越大指示器越大</Text>
                             <FitImage indicator={false}   style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                             
                         </View>
                     </View>
                     <View>
                         <Text>验证网络图片</Text>
                         <FitImage  style={styles.fitImageWithSize}  source={{uri:"https://octodex.github.com/images/stormtroopocat.jpg"}} />                        
                     </View>
                     <View>
                         <Text>获取本地图片宽高</Text>
                         <FitImage  style={styles.fitImageWithSize} source={require('./assets/expo.png')} />                        
                         <Text>宽度：{imgSizeNum.width},高度：{imgSizeNum.height}</Text>
                         <Button onPress={()=>{getImageSize()}} title='调用image图片宽高'></Button>
                     </View>
                     <View>
                         <Text>验证网络图片宽高</Text>
                         <Text>宽度：{imgHttpSize.width},高度：{imgHttpSize.height}</Text>
                         <FitImage  style={{...styles.fitImageWithSize,...styles.fitImage}} source={{uri:"https://octodex.github.com/images/stormtroopocat.jpg"}} />                         
                     </View>
                     <View>
                         <Text>验证图片圆角</Text>
                         <FitImage  style={{...styles.fitImageWithSize,...styles.fitImage}} source={require('./assets/expo.png')} />                        
                     </View>
                     <View>
                         <Text>测试resizeMode(cover contain stretch repeat center)，值为cover</Text>
                         <FitImage resizeMode='cover' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                        
                     </View>
                     <View>
                         <Text>测试resizeMode(cover contain stretch repeat center)，值为contain</Text>
                         <FitImage resizeMode='contain' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                        
                     </View>
                     <View>
                         <Text>测试resizeMode(cover contain stretch repeat center)，值为stretch</Text>
                         <FitImage resizeMode='stretch' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                        
                     </View>
                     <View>
                         <Text>测试resizeMode(cover contain stretch repeat center)，值为repeat</Text>
                         <FitImage resizeMode='repeat' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                        
                     </View>
                     <View>
                         <Text>测试resizeMode(cover contain stretch repeat center)，值为center</Text>
                         <FitImage resizeMode='center' style={{...styles.fitImageWithSize}} source={require('./assets/expo.png')} />                        
                     </View>
                    
                     <View>
                         <Text>测试onError</Text>
                         <Text>{onErrorDatea}</Text>
                         <FitImage onError={()=>{console.log('执行了onError'); setOnError('执行了onError')}} style={styles.fitImageWithSize} source={{uri:'https://ok.gitHub.io123.png'}} />    
                     </View>
                     <View>
                         <Text>测试onLoadStart</Text>
                         <Text>{onLoadStartDatea}</Text>
                         <FitImage onLoadStart={()=>{console.log('执行了onLoadStart');setOnLoadStart('执行了onLoadStart')}} style={{...styles.fitImageWithSize,borderRadius:20}} source={require('./assets/expo.png')} />     
                     </View>
                     <View>
                         <Text>测试onLayOut</Text>
                         <Text>{onLayOutData}</Text>
                         <FitImage onLoadStart={()=>{console.log('执行了onLayout');setOnLayout('执行了onLayout')}} style={{...styles.fitImageWithSize,borderRadius:20}} source={require('./assets/expo.png')} />     
                     </View>
                     <View>
                         <Text>测试blurRadius(模糊滤镜，值越大越模糊)</Text>
                         <FitImage
                             source={require('./assets/expo.png')}
                             blurRadius={20}
                             style={{...styles.fitImage,...styles.fitImageWithSize}}
                             />
                     </View>
                 </View>
                )}
               {!refLoadData&&(
                <View style={{width:'100%',height:'100%'}}>
                    <Text>
                        加载中。。。。。。
                    </Text>
                </View>
               )}
            </ScrollView>
        </SafeAreaView>
    )
}
export default FitImageDemo;
