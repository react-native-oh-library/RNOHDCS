import React from 'react';  
import { View, Text, ScrollView } from 'react-native';  
// import Icon from 'react-native-vector-icons/Feather'; 
import * as Icon from "react-native-feather";


const FeatherExample = () => {  
  return (
  <ScrollView>
  <Text style={{color:"blue"}}>react-native-feather库只是对svg图进行处理的库,以下展示的demo,均只有图片,没有绑定点击事件</Text>
  <Text style={{color:"blue"}}>电池,边线红色,绿色填充,width150,height=150</Text>
  <Icon.Battery stroke = 'red' width={150} height={150}  fill="green"/>
  <Text style={{color:"blue"}}>菜单栏,边线绿色,宽高默认为25</Text>
  <Icon.Menu stroke = 'green'/>
  <Text style={{color:"blue"}}>播放图标,边线默认为当前颜色,填充色为蓝色,宽高为50</Text>
  <Icon.Video fill="blue" width={50} height={50} />
  </ScrollView>
  );
};  
  
export default FeatherExample;