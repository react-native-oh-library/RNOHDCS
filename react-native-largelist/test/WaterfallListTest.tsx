import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { WaterfallList } from 'react-native-largelist';

export default class WaterfallListTest extends Component {
  state = { data: [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data] };
  _list: WaterfallList;

  render() {
    return (
      <Tester>
        <TestSuite name="WaterfallList">
          <TestCase itShould="WaterfallList view">
            <WaterfallList
              data={this.state.data}
              ref={ref => (this._list = ref)}
              heightForItem={item => item.height}
              preferColumnWidth={120}
              numColumns={2}
              renderItem={this._renderItem}
              renderHeader={this._renderHeader}
              renderFooter={this._renderFooter}
              onRefresh={() => {
                setTimeout(() => this._list.endRefresh(), 2000);
              }}
              onLoading={() => {
                setTimeout(() => this._list.endLoading(), 2000);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    );
  }

  _renderItem = (item: any, index: any) => {
    return (
      <View
        style={{
          flex: 1,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: item.color,
        }}>
        <Text>
          index:{index}, height:{item.height}
        </Text>
      </View>
    );
  };

  _renderHeader = () => {
    return (
      <View style={{ padding: 20, alignItems: 'center', backgroundColor: 'red' }}>
        <Text>I am header</Text>
      </View>
    );
  };

  _renderFooter = () => {
    return (
      <View style={{ padding: 20, alignItems: 'center', backgroundColor: 'red' }}>
        <Text>I am footer</Text>
      </View>
    );
  };
}

const data = [
  { height: 40, color: 'aliceblue' },
  { height: 60, color: 'antiquewhite' },
  { height: 80, color: 'aqua' },
  { height: 100, color: 'aquamarine' },
  { height: 120, color: 'azure' },
  { height: 140, color: 'beige' },
  { height: 160, color: 'bisque' },
  { height: 40, color: 'blue' },
  { height: 60, color: 'blueviolet' },
  { height: 80, color: 'brown' },
  { height: 100, color: 'burlywood' },
  { height: 120, color: 'cadetblue' },
  { height: 140, color: 'chartreuse' },
  { height: 160, color: 'chocolate' },
  { height: 40, color: 'coral' },
  { height: 60, color: 'cornflowerblue' },
  { height: 80, color: 'cornsilk' },
  { height: 100, color: 'crimson' },
  { height: 120, color: 'cyan' },
  { height: 140, color: 'darkblue' },
  { height: 160, color: 'darkcyan' },
  { height: 40, color: 'aliceblue' },
  { height: 60, color: 'antiquewhite' },
  { height: 80, color: 'aqua' },
  { height: 100, color: 'aquamarine' },
  { height: 120, color: 'azure' },
  { height: 140, color: 'beige' },
  { height: 160, color: 'bisque' },
  { height: 40, color: 'blue' },
  { height: 60, color: 'blueviolet' },
  { height: 80, color: 'brown' },
  { height: 100, color: 'burlywood' },
  { height: 120, color: 'cadetblue' },
  { height: 140, color: 'chartreuse' },
  { height: 160, color: 'chocolate' },
  { height: 40, color: 'coral' },
  { height: 60, color: 'cornflowerblue' },
  { height: 80, color: 'cornsilk' },
  { height: 100, color: 'crimson' },
  { height: 120, color: 'cyan' },
  { height: 140, color: 'darkblue' },
  { height: 160, color: 'darkcyan' },
];