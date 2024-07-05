import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ListView } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="ListViewTest">
      <TestCase itShould="render a ListView" tags={['C_API']}>
        <BasicListViewExample />
      </TestCase>
    </TestSuite>
  );
};

const BasicListViewExample = () => {
  const [layout, setLayout] = useState('list');

  const sleep = (time: any) =>
    new Promise(resolve => setTimeout(() => resolve(true), time));

  const onFetch = async (page = 1, startFetch: (rows: any, limit: number) => any, abortFetch: () => void) => {
    try {
      let pageLimit = 30;
      if (layout === 'grid') pageLimit = 60;
      const skip = (page - 1) * pageLimit;
      let rowData = Array.from(
        { length: pageLimit },
        (_, index) => `item -> ${index + skip}`
      );
      if (page === 3) {
        rowData = [];
      }
      await sleep(2000);
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch();
    }
  };

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View>
      <ListView
        onFetch={onFetch}
        keyExtractor={(item: any, index: number) => `${layout} - ${item} - ${index}`}
        renderItem={renderItem}
        numColumns={layout === 'list' ? 1 : 3}
      />
      {/* <Text>11111</Text> */}
    </View>
  );
};

