import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { legacy_createStore as createStore, combineReducers } from 'redux';

// 计数器的初始state
const defaultState = {
  number: 100,
}
// 编写子reducer，负责计数器state具体变化的过程
const counterReducer = (state = defaultState, action: { type: any; }) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        number: state.number + 1
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({// 这个对象就是应用State
  // 应用State赋值
  counterState: counterReducer,
});
// 接下来第3步，就是结合该组件reducer里action.type的规定，为该组件创建对应的action，预备好action，到时候组件一被触摸就dispatch一个action


// 第1步：
// 创建项目唯一的store，此时应用State也跟着创建好了
// 发现需要一个reducer，所以接下来第2步，我们去创建一个reducer，回过头来填在这里
const store = createStore(rootReducer);

// 第3步：
// 为该组件创建对应的action，预备好action，到时候组件一被触摸就dispatch一个action
// 负责描述state要做什么变化以及变化所需的原料，用来dispatch
const addNumberAction = { type: 'ADD_NUMBER' };


// 编写UI组件
class Counter extends Component {

  state = {
    number: store.getState().counterState.number,
  }

  render() {
    return (
      <View style={styles.counterViewStyle}>
        <Text style={{ fontSize: 24 }}>{this.state.number}</Text>

        <View>
          <Text
            style={{ color: 'black', fontSize: 20 }}
            // 第5步：点击组件的时候发出一个action
            onPress={() => store.dispatch(addNumberAction)}
          >{'+'}</Text>
        </View>
      </View>
    );
  };

  componentDidMount() {
    // 第4步：设置监听
    store.subscribe(() => {
      this.setState({
        number: store.getState().counterState.number,
      });
    });
  }
}

// 导出组件
export default class TestPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  counterViewStyle: {
    backgroundColor: 'pink',
    width: 200,
    height: 60,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});