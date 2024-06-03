import React, { useState } from "react";
import { View, Text } from 'react-native';
import { AutoDragSortableView } from "react-native-drag-sort";

const AutomaticSlidingThreePage = () => {
  const [data, setData] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
    { id: '6', text: 'Item 6' },
    { id: '7', text: 'Item 7' },
    { id: '8', text: 'Item 8' },
    { id: '9', text: 'Item 9' },
    { id: '10', text: 'Item 10' },
    { id: '11', text: 'Item 11' },
    { id: '12', text: 'Item 12' },
    { id: '13', text: 'Item 13' },
    { id: '14', text: 'Item 14' },
    { id: '15', text: 'Item 15' },
    { id: '16', text: 'Item 16' },
    { id: '17', text: 'Item 17' },
    { id: '18', text: 'Item 18' },
    { id: '19', text: 'Item 19' },
    { id: '20', text: 'Item 20' },
    { id: '21', text: 'Item 21' },
    { id: '22', text: 'Item 22' },
    { id: '23', text: 'Item 23' },
    { id: '24', text: 'Item 24' },
    { id: '25', text: 'Item 25' },
    { id: '26', text: 'Item 26' },
    { id: '27', text: 'Item 27' },
    { id: '28', text: 'Item 28' },
  ]);
  const renderHeaderView=(
    <View style={{ height: 50, backgroundColor: "#ff4d4d" }}>
      <Text style={{ fontSize: 18, color: "#fff", textAlign: "center" }}>标题</Text>
    </View>
  ) 
  const renderBottomView=(
    <View style={{ height: 50, backgroundColor: "#ff4d4d" }}>
      <Text style={{ fontSize: 18, color: "#fff", textAlign: "center" }}>底部</Text>
    </View>
  )
  
  return (
    <AutoDragSortableView
      dataSource={data}
      parentWidth={500}
      childrenWidth={100}
      childrenHeight={100}
      marginChildrenTop={20}
      marginChildrenBottom={20}
      marginChildrenLeft={20}
      marginChildrenRight={20}
      onDataChange={(data) => {
        console.log("数据发生变化");
      }}
      keyExtractor={(item, index) => item.id}
      onClickItem={(data, item, index) => {
        console.log("点击了第", index, "个元素");
      }}
      renderItem={(item, index) => {
        return (
          <View
            key={item.id}
            style={{
              width: 100,
              height: 50,
              borderRadius: 5,
              margin: 5,
              backgroundColor: "#4e71f2",
              // flex: 1,
              // justifyContent: "space-between",
            //   alignContent: "center",
            }}
           
          >
            <Text style={{ fontSize: 18, color: "#fff" }}>{item.text}</Text>
          </View>
        );
      }}
      scaleDuration={500}  //拖拽项缩放效果的持续时间
      slideDuration={200}  //拖拽项滑动效果的持续时间
      autoThrottle={100}  //自动滑动到目的地的间隔时间
      autoThrottleDuration={500}  //自动滑动到目的地的持续时间
      sortable={true}
      isDragFreely={false}
      fixedItems={[0, 1]}
      delayLongPress={100}
      onDragStart={() => console.log('Drag started')}
      onDragEnd={() => console.log('Drag end')}
      renderHeaderView={renderHeaderView}
      headerViewHeight={50}
      scrollIndicatorInsets={{ top: 0, left: 0, bottom: 0, right: 0 }}
      renderBottomView={renderBottomView}
      bottomViewHeight={50}
      onScrollListener={(event) => {
        console.log("滚动事件", event);
      }}
      onScrollRef={(ref) => {
        console.log("滚动容器", ref);
      }}

    />
  );
};

export default AutomaticSlidingThreePage;