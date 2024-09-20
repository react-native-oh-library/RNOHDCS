import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { List } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

const Item = List.Item;
const Brief = Item.Brief;

export default () => {
  const [count, setCount] = useState(0);
  const extraAndArrowList: any = [
    {
      text: '我是第一个',
      extra: '箭头向右',
      arrow: 'horizontal'
    },
    {
      text: '我是第二个',
      extra: '箭头向下',
      arrow: 'down'
    },
    {
      text: '我是第三个',
      extra: '箭头向上',
      arrow: 'up'
    },
    {
      text: '我是第四个',
      extra: '没有箭头',
      arrow: 'empty'
    }
  ];

  return (
    <TestSuite name="ListTest">
      <TestCase itShould="list renderHeader={<Text>头部渲染</Text>}" tags={['C_API']}>
        <List renderHeader={<Text>头部渲染</Text>}><Item><Text>头部渲染</Text></Item></List>
      </TestCase>
      <TestCase itShould="list renderHeader={<Text>底部渲染</Text>}" tags={['C_API']}>
        <List renderFooter={<Text>底部渲染</Text>}><Item><Text>底部渲染</Text></Item></List>
      </TestCase>
      <TestCase itShould="list styles={{ List: { backgroundColor: 'pink' } }}" tags={['C_API']}>
        <List renderHeader={<Text>头部样式</Text>} styles={{ List: { backgroundColor: 'pink' } }}><Item><Text>头部样式</Text></Item></List>
      </TestCase>
      <TestCase itShould="list wrap=false" tags={['C_API']}>
        <List>
          <Item>
            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏 标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏 标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
          </Item>
        </List>
      </TestCase>
      <TestCase itShould="list wrap=true" tags={['C_API']}>
        <List>
          <List.Item wrap>
            文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
          </List.Item>
        </List>
      </TestCase>
      <TestCase itShould="list arrow" tags={['C_API']}>
        {extraAndArrowList.map((item: any, index: number) => {
          return (
            <List key={index}>
              <Item wrap arrow={item.arrow}>
                {item?.text}
              </Item>
            </List>
          )
        })}
      </TestCase>
      <TestCase itShould="list extra='没有箭头'" tags={['C_API']}>
        <List>
          <Item wrap arrow='empty' extra='没有箭头'>
            没有箭头
          </Item>
        </List>
      </TestCase>
      <TestCase itShould="List.Item styles={{Content:{backgroundColor:'pink'}}}" tags={['C_API']}>
        <List>
          <Item styles={{ Content: { backgroundColor: 'pink' } }}>
            List.Item样式
          </Item>
        </List>
      </TestCase>
      <TestCase itShould="list multipleLine={true}, multipleLine={false}" tags={['C_API']}>
        <List>
          <Item multipleLine={true} wrap extra="文字超长折行文字超长折行文字超长折行">
            多行展示
          </Item>
        </List>
        <List>
          <Item multipleLine={false} extra="单行省略单行省略单行省略单行省略">
            单行省略
          </Item>
        </List>
      </TestCase>
      <TestCase itShould="list <Brief>辅助文字内容辅助文字内容辅助文字内容</Brief>" tags={['C_API']}>
        <List>
          <Item
            extra={
              <View>
                <Brief style={{ textAlign: 'right' }}>辅助文字内容辅助文字内容辅助文字内容</Brief>
              </View>
            }
            multipleLine
          >
            <Brief>辅助组件</Brief>
          </Item>
        </List>
      </TestCase>
      <TestCase itShould="list align 顶部对齐" tags={['C_API']}>
        <List>
          <Item
            wrap
            align="top"
            extra={
              <View>
                内容内容
                <Brief>辅助文字内容</Brief>
              </View>
            }
          >
            顶部对齐
          </Item>
        </List>
      </TestCase>
      <TestCase itShould="list align 底部对齐" tags={['C_API']}>
        <List>
          <Item
            extra={
              <View>
                内容内容
                <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
              </View>
            }
            multipleLine
            align="bottom">
            底部对齐
          </Item>
        </List>
      </TestCase>
      <TestCase itShould="list thumb" tags={['C_API']}>
        <List>
          <Item thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg">
            thumb
          </Item>
        </List>
      </TestCase>
      <TestCase itShould="list onPress()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <Item onPress={() => {
              setCount(count + 1);
              setState(true);
            }}>{`被点击${count}次`}</Item>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
    </TestSuite>
  );
};

const styles = StyleSheet.create({
  bcak: {
    backgroundColor: '#888',
  },
});
