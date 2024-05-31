import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet ,TouchableOpacity} from 'react-native';
import { SmartRefreshControl,AnyHeader} from 'react-native-smartrefreshlayout';

const App = () => {
  const [text, setText] = useState("状态");
  const [text1, setText1] = useState("刷新时间");

  const [headerHeight, setHeaderHeight] = useState(66);
  const [color, setColor] = useState('#fff000');


  const [data, setData] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 2' },

    { id: 4, text: 'Item 2' },
    { id: 5, text: 'Item 2' },
    { id: 6, text: 'Item 2' },
    { id: 7, text: 'Item 7' },
    { id: 8, text: 'Item 7' },
    { id: 9, text: 'Item 7' },
    { id: 10, text: 'Item 7' },
    { id: 11, text: 'Item 11' },

    // ... more data ...
  ]);

  const onLoadMore = () => {
    // Simulate loading more data
    setTimeout(() => {
      setData([
        ...data,
        { id: data.length + 1, text: `New Item ${data.length + 1}` },
        // ... more loaded data ...
      ]);
    }, 1000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.item}>{item.text}</Text>
    </View>
  );
  let smartRefreshControlRef:React.RefObject<SmartRefreshControl>;
  return (
    <View >
      <TouchableOpacity onPress={() => {smartRefreshControlRef.finishRefresh({delayed:-1,success:true})}}>
      <Text style={{height:40,width:'100%',backgroundColor:"red"}} >finish</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setHeaderHeight(headerHeight == 66?132:66)}}>
          <Text style={{height:40,width:'100%',backgroundColor:"pink"}} >切换高度 66/132</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setColor(color === "#fff000"?"red":"#fff000")}}>
          <Text style={{height:40,width:'100%',backgroundColor:"green"}} >切换颜色（正在刷新中不支持切换背景色）</Text>
        </TouchableOpacity>

      <Text style={{height:40,width:'100%',backgroundColor:""}}>
        {text}
        </Text>
        <Text style={{height:40,width:'100%',backgroundColor:""}}>
        {text1}
        </Text>
    <SmartRefreshControl
    ref={(ref)=>smartRefreshControlRef=ref}
      primaryColor={color}
      headerHeight={headerHeight}
      style={{ height:500,width:'100%',backgroundColor:"#ffcc00"}}
      onReleaseToRefresh={(e)=>{
        setText('onPullDownToRefresh' + JSON.stringify(e.nativeEvent))
      }}
      onRefresh={
        ()=>{
          setText1('时间：' + new Date().getTime() + "onRefresh触发刷新")
        }
      }
      HeaderComponent={
        <AnyHeader ><Text style={{height:66,width:'100%'}}>{text}</Text></AnyHeader>
      }

    >
      <FlatList
      style={{ flex: 1 ,height:'100%',width:'100%'}}

        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SmartRefreshControl>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width:100,
    height:100,
  },
});

export default App;