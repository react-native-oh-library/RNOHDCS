import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="CardTest">
      <TestCase itShould="Card full" tags={['C_API']}>
        <View style={{ width: '100%', height: 50 }}>
          <Card full style={{ backgroundColor: 'pink', height: 20, marginBottom: 5 }}></Card>
          <Card style={{ backgroundColor: 'aqua', height: 20 }}></Card>
        </View>
      </TestCase>
      <TestCase itShould="Card.Header title='我是头部'" tags={['C_API']}>
        <Card full>
          <Card.Header
            title="我是头部"
          />
        </Card>
      </TestCase>
      <TestCase itShould="Card.Header thumb and thumbStyle={{ width: 50, height: 50 }}" tags={['C_API']}>
        <Card full>
          <Card.Header
            title="我是头部"
            thumbStyle={{ width: 50, height: 50 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          />
        </Card>
      </TestCase>
      <TestCase itShould="Card.Header extra='我是辅助内容'" tags={['C_API']}>
        <Card full>
          <Card.Header
            title="我是头部"
            thumbStyle={{ width: 20, height: 20 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="我是辅助内容"
          />
        </Card>
      </TestCase>
      <TestCase itShould="Card.Footer content='我是底部'" tags={['C_API']}>
        <Card full>
          <Card.Header
            title="我是头部"
            thumbStyle={{ width: 20, height: 20 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="我是辅助内容"
          />
          <Card.Footer
            content='我是底部'
          />
        </Card>
      </TestCase>
      <TestCase itShould="Card.Footer extra='我是底部辅助内容'" tags={['C_API']}>
        <Card full>
          <Card.Header
            title="我是头部"
            thumbStyle={{ width: 20, height: 20 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="我是辅助内容"
          />
          <Card.Footer
            content='我是底部'
            extra='我是底部辅助内容'
          />
        </Card>
      </TestCase>
    </TestSuite>
  );
};