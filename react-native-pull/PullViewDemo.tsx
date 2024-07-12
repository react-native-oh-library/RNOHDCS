import React,{ Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  Button
} from 'react-native';

import {PullView} from 'react-native-pull';

const PullViewDemo = () => {
  const [ count, setCount ] = useState(0)
     let testObj={
        pulling:null,
        pullOK:null,
        pushIng:null,
        refresh:null,
        pullRelease:null,
        isPullEnd:null
     }
     const [data, setData] = useState(testObj);
     const [topIndicatorHeight, setTopIndicatorHeight] = useState(60);
       const changeTopIndicatorHeight = (num) => {
         setTopIndicatorHeight(num);
       };

   const onPullRelease =(resolve) => {
		//do something
        testObj.pullRelease='onPullRelease---'
        setData(testObj)
		setTimeout(() => {
		testObj.isPullEnd=true
		setData(testObj)
            resolve();
        }, 2000);
    }
	const topIndicatorRender = (pulling, pullok, pullrelease, gesturePosition) => {
            if (pulling) {
               setCount("下拉刷新pulling")
            } else if (pullok) {
                setCount("松开刷新pullok......")
            } else if (pullrelease) {
               setCount("玩命刷新中pullrelease......")
            }
		return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60, }}>
                <ActivityIndicator size="small" color="gray" />
                       {pulling ? <Text>{count}</Text> : null}
                        {pullok ? <Text>{count}</Text> : null}
                        {pullrelease ? <Text>{count}</Text> : null}
    		</View>
        );
        }
      const onPulling =(resolve) => {
        testObj.pulling='onPulling'
        setData(testObj)
        }
        const onPullOk = () => {
        testObj.pullOK='pullOK'
        setData(testObj)
        }
        const onPushing = (gesturePosition) => {
        testObj.pushIng='x: '+gesturePosition.x+'---'+'y: '+gesturePosition.y
        setData(testObj)
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
    		<PullView
        style={{width: Dimensions.get('window').width}}
             onPullRelease={onPullRelease}
             onPulling={onPulling}
             onPullOk={onPullOk}
             onPushing={onPushing}
             topIndicatorRender={topIndicatorRender}
             topIndicatorHeight={topIndicatorHeight}
             duration={300}
             pullOkMargin={100}
            //  refreshControl={refreshControl}
             isPullEnd={data.isPullEnd}
             refreshing={refreshing}
		 >
			<View  style={{ backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
			   <Text>1***************</Text>
                <Text>onPulling:{data.pulling}</Text>
                <Text>3</Text>
                <Text>onPullOk:{data.pullOK}</Text>
                <Text>5</Text>
                 <Text>onPullRelease:{data.pullRelease}</Text>
                <Text>7</Text>
                <Text>refreshing:{refreshing}</Text>
                <Text>9</Text>
                <Text>onPushing:{data.pushIng}</Text>
                <Text>11</Text>
                <Text>
                 <Button
                  title="topIndicatorHeight60"
                  onPress={() => changeTopIndicatorHeight(60)}
                />
                </Text>
                <Text>13</Text>
                <Text>
                  <Button
                      title="topIndicatorHeight30"
                      onPress={() => changeTopIndicatorHeight(30)}
                    />
                </Text>
                <Text>15</Text>
                <Text>topIndicatorHeight:{topIndicatorHeight}</Text>
                  <Text>2</Text>
                  <Text>4</Text>
                  <Text>5</Text>
                  <Text>6</Text>
                  <Text>7</Text>
                  <Text>8</Text>
                  <Text>9</Text>
                  <Text>10</Text>
                  <Text>11</Text>
                  <Text>12</Text>
                  <Text>13</Text>
                  <Text>14</Text>
                  <Text>15</Text>
                <Text>1***************</Text>
                 <Text>2</Text>
                 <Text>3</Text>
                 <Text>4</Text>
                 <Text>5</Text>
                 <Text>6</Text>
                 <Text>7</Text>
                 <Text>8</Text>
                 <Text>9</Text>
                 <Text>10</Text>
                 <Text>11</Text>
                 <Text>12</Text>
                 <Text>13</Text>
                 <Text>14</Text>
                 <Text>15</Text>
            </View>
        </PullView>
    );
}
export default PullViewDemo;
