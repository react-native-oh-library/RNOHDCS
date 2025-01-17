import LottieView from '@react-native-oh-tpl/lottie-react-native';
import React, {Component} from 'react';
import {View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lottieJson: undefined,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://appdynamiccontainer-1304574412.cos.ap-beijing.myqcloud.com/animation/memberCarSku/member_card_sku_monthly.json',
    );
    console.log('componentDidMount', response.ok);
    this.setState({
      lottieJson: await response.json(),
    });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        {this.state.lottieJson ? (
          <LottieView
            style={{flex: 1}}
            source={this.state.lottieJson}
            autoPlay
            loop
          />
        ) : null}

        {/* <LottieView
          style={{flex: 1}}
          source={{
            uri: 'https://appdynamiccontainer-1304574412.cos.ap-beijing.myqcloud.com/animation/memberCarSku/member_card_sku_monthly.json',
          }}
          autoPlay
          loop
        /> */}
      </View>
    );
  }
}

export default App;