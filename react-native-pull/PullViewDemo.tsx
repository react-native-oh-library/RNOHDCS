import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import {PullView} from 'react-native-pull';

const PullViewDemo = () => {

   const [count, setCount] = useState(0);
   let testObj = {
    pulling:null,
    pullok:null,
    pullrelease:null,
    pushing:null,
    refresh:null,
    isPullEnd:null
   };
   const [data, setData] = useState(testObj);
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

    return (
      <View style={[styles.container]}>
		<PullView style={{width: Dimensions.get('window').width}}
              onPulling={onPulling}
              onPullOk={onPullOk}
              isPullEnd={true}
              onPullRelease={onPullRelease}
              onPushing={onPushing}
              topIndicatorRender={topIndicatorRender}
              topIndicatorHeight={60}>
			<View style={{backgroundColor: '#eeeeee'}}>
			    <Text>1***************</Text>
                <Text>onPulling:{data.pulling}</Text>
                <Text>3</Text>
                <Text>onPullOk:{data.pullok}</Text>
                <Text>5</Text>
                <Text>onPullRelease:{data.pullrelease}</Text>
                <Text>7</Text>
                <Text>onPushing:{data.pushing}</Text>
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
      </View>
    );
};
export default PullViewDemo;
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
