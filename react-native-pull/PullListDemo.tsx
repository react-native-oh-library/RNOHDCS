
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  RefreshControl
} from 'react-native';
import {PullList} from 'react-native-pull';

const PullListDemo = () => {
  let testObj = {
    pulling:null,
    pullok:null,
    pullrelease:null,
    pushing:null,
    refresh:null,
    isPullEnd:null
   };

   const [count, setCount] = useState(0);
   const [data, setData] = useState(testObj);
    const [stateList, setStateList] = useState(
         [
                 {
                   id: 1,
                   title: '------>Item1',
                 },
                 {
                   id: 2,
                   title: '------>Item2',
                 },
                 {
                   id: 3,
                   title: '------>Item3',
                 },
                 {
                   id: 4,
                   title: '------>Item4',
                 },
                 {
                   id: 5,
                   title: '------>Item5',
                 },
                 {
                   id: 6,
                   title: '------>Item6',
                 },
                 {
                   id: 7,
                   title: '------>Item7',
                 },
                 {
                   id: 8,
                   title: '------>Item8',
                 },
                 {
                   id: 9,
                   title: '------>Item9',
                 },
                  {
                    id: 10,
                    title: '------>Item10',
                  },
                  {
                    id: 11,
                    title: '------>Item11',
                  },
                  {
                    id: 12,
                    title: '------>Item12',
                  },
               ]
    );

   const onPulling = () => {
      testObj.pulling='pulling--------->'
      setData(testObj)
   };

   const onPullOk = () => {
      testObj.pullok='pullok--------->'
      setData(testObj)
   };

   const onPullRelease = (resolve) => {
        //do something
        testObj.pullrelease='pullrelease--------->'
        setData(testObj)
        setTimeout(() => {
         setStateList([
                                       {
                                         id: 1,
                                         title: '------>Item1',
                                       },
                                       {
                                         id: 2,
                                         title: '------>Item2',
                                       },
                                       {
                                         id: 3,
                                         title: '------>Item3',
                                       },
                                       {
                                         id: 4,
                                         title: '------>Item4',
                                       },
                                       {
                                         id: 5,
                                         title: '------>Item5',
                                       },
                                       {
                                         id: 6,
                                         title: '------>Item6',
                                       },
                                       {
                                         id: 7,
                                         title: '------>Item7',
                                       },
                                       {
                                         id: 8,
                                         title: '------>Item8',
                                       },
                                       {
                                         id: 9,
                                         title: '------>Item9',
                                       },
                                        {
                                          id: 10,
                                          title: '------>Item10',
                                        },
                                        {
                                          id: 11,
                                          title: '------>Item11',
                                        },
                                        {
                                          id: 12,
                                          title: '------>Item12',
                                        },
                                     ]);
            resolve();
        }, 3000);
    };


    const onPushing = (gesturePosition) => {
        testObj.pushing= 'x:' + gesturePosition.x + '------' + 'y：' + gesturePosition.y
        setData(testObj)
    };

    const topIndicatorRender = (pulling, pullok, pullrelease) => {
      if (pulling) {
          setCount('当前PullList状态: pulling...')
      } else if (pullok) {
          setCount('当前PullList状态: pullok......')
      } else if (pullrelease) {
          setCount('当前PullList状态: pullrelease......')
      }

  return (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
          <ActivityIndicator size="small" color="gray" />
          {pulling ? <Text>{count}</Text> : null}
          {pullok ? <Text>{count}</Text> : null}
          {pullrelease ? <Text>{count}</Text> : null}
      </View>
  );
};


    const renderHeader = () => {
      return (
          <View style={{height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>This is header</Text>
          </View>
      );
    }

   const renderRow = ({item}) => {
//     console.log('renderRow', item.title)
      return (
          <View style={{height: 50, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
              <Text>{item.title}</Text>
          </View>
      );
    }

   const renderFooter = () => {
      //if(this.state.nomore) {
       //   return null;
      //}
      return (
          <View style={{height: 100}}>
              <ActivityIndicator />
          </View>
      );
    }

   const loadMore = () => {
      const list = []
      const num = stateList.length
        for(var i = 0; i < 5; i++) {
            list.push({
                id: (i + 1 + num) + '',
                title: `------>Item${(i+num+1)}`,
            })
        }
       setTimeout(() => {
          setStateList([...stateList,...list]);
        }, 1000);
    }

    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
      // 加载数据的逻辑
      setRefreshing(true)
      // 数据加载完成后
      setTimeout(() => {
        setRefreshing(false)
      }, 2000); // 假设数据加载需要2秒
    };
    const refreshControl = (
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        tintColor="#ff0000" // 可选，设置刷新指示器的颜色
        title="Loading..." // 可选，设置刷新时显示的文本
        colors={['#ff0000', '#00ff00', '#0000ff']} // 可选，设置刷新指示器的颜色数组
        progressBackgroundColor="#ffffff" // 可选，设置进度背景色
      />
    );

    return (
      <View style={[styles.container]}>
      <PullList style={{width: Dimensions.get('window').width}}
            onPulling={onPulling}
            onPullOk={onPullOk}
            isPullEnd={true}
            onPullRelease={onPullRelease}
            onPushing={onPushing}
            topIndicatorRender={topIndicatorRender}
            topIndicatorHeight={60}
            pageSize={5}
            scrollViewProps={{
                scrollEventThrottle: 16, // 减少滚动事件的延迟，提高滚动的响应性
              }}
            initialListSize={5}
            onEndReached={loadMore}
            onEndReachedThreshold={60}
            renderItem={renderRow}
            ListFooterComponent={renderFooter}
            ListHeaderComponent={renderHeader}
            data={stateList}
            keyExtractor={(item:any) => item.id}
           //  refreshControl={refreshControl}
          />
      </View>
    );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    width:'100%',
    height:'100%',
    overflow: 'scroll'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default PullListDemo;
