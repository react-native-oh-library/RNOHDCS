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
        <TestCase itShould='Props:image,style'>
         <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  image={imageComponent} style={{container:styles.container}} size={75}/> 
            <Avatar  image={imageComponentTwo} style={{container:styles.container}} size={75}/> 
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name='Avatar icon(图标)'>
        <TestCase itShould='Props:icon,style'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}}/> 
            <Avatar  icon='home' style={{container:{marginTop:20,marginLeft:10}}}/> 
          </View>
        </TestCase>
          
      </TestSuite>
      <TestSuite name='Props:iconColor(图标颜色)'>
        <TestCase itShould='Props:iconColor,style'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}}  iconColor={'red'}/> 
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}}  iconColor={'blue'}/> 
          </View>
        </TestCase>
          
      </TestSuite>
      <TestSuite name='Props:iconSize(图标大小)'>
        <TestCase itShould='Props:iconSize,style'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}} iconSize={10}/> 
            <Avatar  icon='person' style={{container:{marginTop:20,marginLeft:10}}} iconSize={20}/> 
          </View>
        </TestCase>
          
      </TestSuite>
      <TestSuite name='Props:text(文字)'>
        <TestCase itShould='Props:text,style'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar  text='A' style={{container:{marginTop:20,marginLeft:10}}}/> 
            <Avatar  text='B' style={{container:{marginTop:20,marginLeft:10}}}/> 
          </View>
        </TestCase>
          
      </TestSuite>

      <TestSuite name='Props:size(大小)'>
        <TestCase itShould='Props:size,style'>
        <View style={{backgroundColor:'#fff',width:'100%',height:100,flexDirection:'row'}}>
            <Avatar icon='person' style={{container:{marginTop:20,marginLeft:10}}} size={30} iconSize={10}/> 
            <Avatar icon='person' style={{container:{marginTop:20,marginLeft:10}}} size={20} iconSize={10}/> 
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