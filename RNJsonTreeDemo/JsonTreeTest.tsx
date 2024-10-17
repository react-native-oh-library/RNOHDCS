import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import JSONTree from 'react-native-json-tree';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export const App = () => {
  const data = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
    hobbies: ['reading', 'gaming', 'hiking'],
  };

  const data1 = {
    name: 'Charlie',
    age: 22,
  };

  const data2 = {
    name: 'Bob',
    age: 35,
    info: {
      height: 180,
      weight: 120,
    },
    address: {
      street: '123 Elm St',
      city: 'Springfield',
    },
  };

  const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };

  const shouldExpandNode = (key: any) => {
    const shouldExpandNodeKey = key.some((item: any) => {
      return item === 'address';
    });
    return shouldExpandNodeKey;
  };

  const data3 = {
    name: 'Fiona',
    age: 29,
  };

  const data4 = {
    name: 'Wx',
    task: {
      weekday: 'ro to work',
      weekend: 'play',
    },
    beliked: 'xiao mei',
    age: 18,
  };

  const data5 = {
    user: {
      name: 'Alice',
      age: 25,
      address: {
        street: '123 Main St',
        city: 'Somewhere',
        country: 'Wonderland',
      },
    },
  };

  const data6 = {
    users: Array.from({length: 100}, (_, i) => ({id: i, name: `User ${i}`})),
  };

  const data7 = {
    date: new Date(),
    number: 123456.789,
    name: 'moon',
  };

  // 格式化日期
  const formatDate = (date: any) => {
    if (!(date instanceof Date)) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 根据数据类型格式化, 展示经过处理的数据
  const postprocessValue = (value: any) => {
    if (value instanceof Date) {
      return formatDate(value);
    }
    if (typeof value === 'number') {
      return value.toFixed(2);
    }
    return value;
  };

  const data8 = {
    name: 'John Doe',
    age: 30,
    job: 'Developer',
    salary: 100000,
  };

  const isCustomNode = (value: any) => {
    // 如果节点值是数字，则使用自定义渲染
    return typeof value === 'number';
  };

  return (
    <ScrollView style={{height: '100%', marginBottom: 20}}>
      <Tester>
        <TestSuite name="JsonTreeTest">
          <TestCase itShould="JsonTree data" tags={['C_API']}>
            <View>
              <JSONTree data={data} />
            </View>
          </TestCase>
          <TestCase itShould="JsonTree theme" tags={['C_API']}>
            <View>
              <JSONTree data={data1} theme={theme} />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree shouldExpandNode='address', 默认展开address"
            tags={['C_API']}>
            <View>
              <JSONTree data={data2} shouldExpandNode={shouldExpandNode} />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree no shouldExpandNode"
            tags={['C_API']}>
            <View>
              <JSONTree data={data2} />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree hideRoot={true}, hideRoot={false}"
            tags={['C_API']}>
            <View>
              <JSONTree data={data2} hideRoot={true} />
              <JSONTree data={data2} hideRoot={false} />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree invertTheme={true}, invertTheme={false}"
            tags={['C_API']}>
            <View>
              <JSONTree data={data2} theme={theme} invertTheme={true} />
              <JSONTree data={data2} theme={theme} invertTheme={false} />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree getItemString={ {}&&2 keys}"
            tags={['C_API']}>
            <View>
              <JSONTree
                data={data3}
                getItemString={(type, data, itemType, itemString) => {
                  return (
                    <Text>
                      {itemType}&&{itemString}
                    </Text>
                  );
                }}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree labelRenderer 标签字体样式为加粗"
            tags={['C_API']}>
            <View>
              <JSONTree
                data={data3}
                labelRenderer={(raw: any) => (
                  <Text style={{fontWeight: 'bold'}}>{raw}</Text>
                )}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree valueRenderer 标签值字体样式为斜体"
            tags={['C_API']}>
            <View>
              <JSONTree
                data={data3}
                valueRenderer={(raw: any) => (
                  <Text style={{fontStyle: 'italic'}}>{raw}</Text>
                )}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree sortObjectKeys 定义键的排序方式(按照英文字母顺序排序)"
            tags={['C_API']}>
            <View>
              <JSONTree
                data={data4}
                sortObjectKeys={(a: any, b: any) => {
                  return a.localeCompare(b);
                }}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree keyPath=['information']"
            tags={['C_API']}>
            <View>
              <JSONTree data={data5} keyPath={['information']} />
            </View>
          </TestCase>
          <TestCase itShould="JsonTree collectionLimit={5}" tags={['C_API']}>
            <View>
              <JSONTree data={data6} collectionLimit={5} />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree No postprocessValue"
            tags={['C_API']}>
            <View>
              <JSONTree data={data7} />
            </View>
          </TestCase>
          <TestCase
            itShould="
            JsonTree postprocessValue=(value: any) => {
    if (value instanceof Date) {
      return formatDate(value)
    }
    if (typeof value === 'number') {
      return value.toFixed(2);
    }
    return value
  } 根据数据类型格式化, 展示经过处理的数据"
            tags={['C_API']}>
            <View>
              <JSONTree data={data7} postprocessValue={postprocessValue} />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree No postprocessValue 不设置postprocessValue默认效果"
            tags={['C_API']}>
            <View>
              <JSONTree data={data7} />
            </View>
          </TestCase>
          <TestCase
            itShould="JsonTree isCustomNode 如果节点值是数字，则使用自定义渲染"
            tags={['C_API']}>
            <View>
              <JSONTree
                data={data8}
                theme={theme}
                isCustomNode={isCustomNode}
              />
            </View>
            <View>
              <JSONTree data={data8} theme={theme} />
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};
export const displayName = 'RNJsonTree';
export const framework = 'React';
export const category = 'UI';
export const title = 'JsonTree';
export const documentationURL =
  'https://github.com/Dean177/react-native-json-tree';
export const description = 'React Native json tree';

export const examples = [
  {
    title: 'React Native json tree',
    render: function () {
      return <App />;
    },
  },
];
