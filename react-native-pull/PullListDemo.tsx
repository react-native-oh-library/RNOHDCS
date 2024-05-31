import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
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
    const [stateList, setStateList] = useState([
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2cba',
        title: 'First Item1',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a397f63',
        title: 'Second Item2',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145573e29d72',
        title: 'Third Item3',
      },
      {
        id: 'bd7acbea-c1b1-26c2-aed5-3ad53abb2cba',
        title: 'First Item4',
      },
      {
        id: '3ac68afc-c605-4843-a4f8-fbd91a397f63',
        title: 'Second Item5',
      },
      {
        id: '58694a0f-3da1-451f-bd96-145573e29d72',
        title: 'Third Item6',
      },
    ]);

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
            resolve();
        }, 3000);
    };


    const onPushing = (gesturePosition) => {
        testObj.pushing= 'x:' + gesturePosition.x + '------' + 'y：' + gesturePosition.y
        setData(testObj)
    };

    const topIndicatorRender = (pulling, pullok, pullrelease) => {
      if (pulling) {
          setCount('下拉刷新pulling...')
      } else if (pullok) {
          setCount('松开刷新pullok......')
      } else if (pullrelease) {
          setCount('玩命刷新中pullrelease......')
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
      const list = [ {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      }]
        for(var i = 0; i < 5; i++) {
            list.push({
                id: (i + 1) + '',
                title: `this is ${i}`,
            })
        }
       setTimeout(() => {
          setStateList([...stateList,...list]);
        }, 1000);
    }
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
          initialListSize={5}
          onEndReached={loadMore}
          onEndReachedThreshold={60}
          renderItem={renderRow}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={renderHeader}
          data={stateList}
          keyExtractor={(item:any) => item.id}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
