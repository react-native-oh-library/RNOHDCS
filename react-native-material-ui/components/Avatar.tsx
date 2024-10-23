import { Avatar } from 'react-native-material-ui';
import { View, StyleSheet, Image,ScrollView } from 'react-native'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
 const AvatarDemo = () => {
  const imageComponent = <Image  source={require('../image/avatar1.png')}  style={{width:75,height:75,borderRadius:50}}></Image>
  const imageComponentTwo = <Image  source={require('../image/avatar2.jpg')}  style={{width:75,height:75,borderRadius:50}}></Image>
  return (
    <Tester >
      <ScrollView style={styles.scrollView}>
      <TestSuite name='Avatar image (图片)'>
        <TestCase itShould='Props:image,style 头像为图片'>
         <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  image={imageComponent} style={{container:styles.container}} size={75}/> 
            <Avatar  image={imageComponentTwo} style={{container:styles.container}} size={75}/> 
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name='Avatar icon(图标)'>
        <TestCase itShould='Props:icon,style 头像为图标'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}}/> 
            <Avatar  icon='home' style={{container:{marginTop:20,marginLeft:10}}}/> 
          </View>
        </TestCase>
          
      </TestSuite>
      <TestSuite name='Props:iconColor(图标颜色)'>
        <TestCase itShould='Props:iconColor,style 设置图标的颜色 第一个为红色，第二个为蓝色'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}}  iconColor={'red'}/> 
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}}  iconColor={'blue'}/> 
          </View>
        </TestCase>
          
      </TestSuite>
      <TestSuite name='Props:iconSize(图标大小)'>
        <TestCase itShould='Props:iconSize,style 设置图标的大小'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}} iconSize={10}/> 
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}} iconSize={20}/> 
          </View>
        </TestCase>
          
      </TestSuite>
      <TestSuite name='Props:text(文字)'>
        <TestCase itShould='Props:text,style 设置头像为文字'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  text='A' style={{container:{marginTop:20,marginLeft:10}}}/> 
            <Avatar  text='B' style={{container:{marginTop:20,marginLeft:10}}}/> 
          </View>
        </TestCase>
          
      </TestSuite>

      <TestSuite name='Props:size(大小)'>
        <TestCase itShould='Props:size,style 设置头像的大小 第一个为30 第二个为20'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar icon='person' style={{container:{marginTop:20,marginLeft:10}}} size={30} iconSize={10}/> 
            <Avatar icon='person' style={{container:{marginTop:20,marginLeft:10}}} size={20} iconSize={10}/> 
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Props:style(头像样式)'>
        <TestCase itShould='Props:style 设置头像的样式 marginTop:20,marginLeft:10,backgroundColor:"red"'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar icon='person' style={{container:{marginTop:20,marginLeft:10,backgroundColor:"red"}}} size={30} iconSize={10}/> 
            <Avatar icon='person' style={{container:{marginTop:20,marginLeft:10,backgroundColor:"blue"}}} size={20} iconSize={10}/> 
          </View>
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
      
  )
}
const styles = StyleSheet.create({
container:{
  marginTop:10,
  marginLeft:10,
 
},
scrollView:{
  marginBottom:70
}
});

export default  AvatarDemo