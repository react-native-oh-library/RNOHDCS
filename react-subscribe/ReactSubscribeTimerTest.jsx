import React from 'react';
import { Timer } from 'react-subscribe';
import { Text, View,Button} from 'react-native'

export class ReactSubscribeTimerTest extends React.Component {
  state = {
    cd: this.props.cd,
    listening:false
  };
  onTimer = () => {
    this.setState({ cd: this.state.cd - this.props.interval/1000,listening:true });
  };
  timeClick = () => {
    this.setState({cd: this.props.cd,listening: true});
  };
  render() {
    if (this.state.cd <= 0) {
      return (
        <View>
          <Button title='点击' onPress={() => this.timeClick()}>点击</Button>
          <Text>Cooldown is over and onTimer will not be called again!</Text>
        </View>
      );
    }
    return (
      <View>
        <Button title='点击' onPress={() => this.timeClick()}>点击</Button>
        {this.state.listening && <Timer interval={this.props.interval} onTimer={this.onTimer}><Text>There is still {this.state.cd} seconds to go.</Text></Timer>}
        <Text>点击按钮启动倒计时</Text>
      </View>
    );
  }
}