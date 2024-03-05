import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { polyfill } from 'react-lifecycles-compat';
import { State } from 'react-native-gesture-handler';
class ShowComponent extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ width: '95%', textAlign: 'center', height: 60, lineHeight: 55, backgroundColor: 'pink', fontSize: 40, borderRadius: 30 }}>新组件</Text>
      </View>
    )
  }
}
class ExampleComponent extends React.Component {
  state = {
    Text1: '未执行',
    count1: 0,
    Text2: '未执行',
    visible: false
  };
  static getDerivedStateFromProps = (nextProps, prevState) => {
    // Normally this method would only work for React 16.3 and newer,
    // But the polyfill will make it work for older versions also!
    return { Text1: '已执行', count1: prevState.count1 + 1 }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Normally this method would only work for React 16.3 and newer,
    // But the polyfill will make it work for older versions also!
    return true
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      if (this.state.Text2 !== '已执行') {
        this.setState({
          Text2: '已执行'
        })
      }

    }
  }
  // render() and other methods ...
  handleClick = () => {
    this.setState({ visible: true })
  }
  render() {
    const { visible, Text1, Text2, count1 } = this.state
    return (
      <View>
        <View style={{ width: '100%', height: 60, margin: 10 }}>{visible ? <ShowComponent></ShowComponent> : <Text>{visible}</Text>}</View>
        <Text style={{ backgroundColor: '#F5F5F5', margin: 5 }}>getDerivedStateFromProps生命周期会在React初始化挂载和后续更新时调用render之前调用，返回一个对象来更新state，或者返回null就不更新任何内容</Text>
        <Text style={{ backgroundColor: '#F5F5F5', margin: 5 }}>getSnapshotBeforeUpdate生命周期会在React更新DOM之前时直接调用，使你的组件能够在DOM发生更改之前捕获一些信息</Text>
        <Button title='点击创建组件！' onPress={this.handleClick} />
        <Text style={{ width: '100%', textAlign: 'center', lineHeight: 40, height: 40, backgroundColor: "green", margin: 5, fontSize: 16 }}>生命周期getDerivedStateFromProps{this.state.Text1}+{this.state.count1}</Text>
        <Text style={{ width: '100%', textAlign: 'center', lineHeight: 40, height: 40, backgroundColor: "green", margin: 5, fontSize: 16 }}>生命周期getSnapshotBeforeUpdate{this.state.Text2}</Text>
      </View>
    )
  }

}

// Polyfill your component so the new lifecycles will work with older versions of React:
polyfill(ExampleComponent);

export default ExampleComponent;