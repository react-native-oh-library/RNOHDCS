import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import JSONTree from 'react-native-json-tree';

export default () => {

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
    name: "Charlie",
    age: 22,
  };

  const data2 = {
    name: "Bob",
    age: 35,
    info: {
      height: 180,
      weight: 120
    },
    address: {
      street: "123 Elm St",
      city: "Springfield",
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
    base0F: '#cc6633'
  };

  const shouldExpandNode = (key: any) => {
    const shouldExpandNodeKey = key.some((item: any) => {
      return item === 'address';
    })
    return shouldExpandNodeKey;
  };

  const data3 = {
    name: "Fiona",
    age: 29,
  };

  const data4 = {
    name: "Wx",
    task: {
      weekday: 'ro to work',
      weekend: 'play'
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
        country: 'Wonderland'
      }
    }
  };

  const data6 = {
    users: Array.from({ length: 100 }, (_, i) => ({ id: i, name: `User ${i}` })),
  };

  const data7 = {
    date: new Date(),
    number: 123456.789,
    name: 'moon'
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
    name: "John Doe",
    age: 30,
    job: "Developer",
    salary: 100000
  };

  const isCustomNode = (value: any) => {
    // 如果节点值是数字，则使用自定义渲染
    return typeof value === 'number';
  };

  return (
    <ScrollView style={{ height: '100%', marginBottom: 20, backgroundColor: 'pink' }}>
      <View style={{ marginBottom: 20 }}>
        <Text>要展示的 JSON 数据对象</Text>
        <JSONTree data={data} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>定制树状视图的主题样式</Text>
        <JSONTree data={data1} theme={theme} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>控制节点是否展开的函数</Text>
        <JSONTree data={data2} shouldExpandNode={shouldExpandNode} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>是否隐藏树的根节点</Text>
        <JSONTree data={data2} hideRoot={true} />
        <JSONTree data={data2} hideRoot={false} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>是否反转主题颜色</Text>
        <JSONTree data={data2} theme={theme} invertTheme={true} />
        <JSONTree data={data2} theme={theme} invertTheme={false} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>自定义节点的显示文本</Text>
        <JSONTree data={data3} getItemString={(type, data, itemType, itemString) => { return <Text>{itemType}&&{itemString}</Text> }} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>自定义节点标签的渲染函数</Text>
        <JSONTree data={data3} labelRenderer={(raw: any) => <Text style={{ fontWeight: 'bold' }}>{raw}</Text>} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>自定义节点值的渲染函数</Text>
        <JSONTree data={data3} valueRenderer={(raw: any) => <Text style={{ fontStyle: 'italic' }}>{raw}</Text>} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>对 JSON 对象的键进行排序</Text>
        <JSONTree data={data4} sortObjectKeys={(a: any, b: any) => { return a.localeCompare(b); }} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>用于在 JSON 树中标识和定制特定路径的数据节点</Text>
        <JSONTree data={data5} keyPath={['information']} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>用于控制在 JSON 树中显示的集合的元素最大数量</Text>
        <JSONTree data={data6} collectionLimit={5} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>用于在值渲染之前对其进行自定义处理</Text>
        <JSONTree data={data7} postprocessValue={postprocessValue} />
      </View>
      <View>
        <Text>指定哪些节点应使用自定义渲染的属性</Text>
        <JSONTree data={data8} theme={theme} isCustomNode={isCustomNode} />
      </View>
    </ScrollView>
  );
};


