import React from 'react';
import { View, Text } from 'react-native';
import { ListView } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="ListViewTest">
      <TestCase itShould="render a ListView" tags={['C_API']}>
        <BasicListExample />
      </TestCase>
    </TestSuite>
  );
};

class BasicListExample extends React.Component<any, any> {
  state = {
    layout: 'list',
  }
  sleep = (time: any) =>
    new Promise((resolve) => setTimeout(() => resolve(''), time))
  onFetch = async (
    page = 1,
    startFetch: (arg0: string[], arg1: number) => void,
    abortFetch: () => void,
  ) => {
    try {
      let pageLimit = 30
      if (this.state.layout === 'grid') {
        pageLimit = 60
      }
      const skip = (page - 1) * pageLimit

      let rowData = Array.from(
        { length: pageLimit },
        (_, index) => `item -> ${index + skip}`,
      )

      if (page === 3) {
        rowData = []
      }

      await this.sleep(2000)
      startFetch(rowData, pageLimit)
    } catch (err) {
      abortFetch()
    }
  }

  renderItem = (item: any) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item}</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item: any, index: any) =>
          `${this.state.layout} - ${item} - ${index}`
        }
        renderItem={this.renderItem}
        numColumns={this.state.layout === 'list' ? 1 : 3}
      />
    )
  }
}

