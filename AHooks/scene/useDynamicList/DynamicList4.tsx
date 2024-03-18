/**
 * title: Draggable dynamic table
 * desc: Using antd Table to build dynamic table form.
 *
 * title.zh-CN: 可拖拽的动态表格
 * desc.zh-CN: 使用 antd table 构建动态表格
 */

import { DragOutlined } from '@ant-design/icons';
import {  Button, Form, Input, Table } from 'antd';
import React, { useState } from 'react';
import ReactDragListView from 'react-drag-listview';
import { useDynamicList } from 'ahooks';
import { View } from 'react-native';

interface Item {
  name?: string;
  age?: string;
  memo?: string;
}

export function DynamicList4(){
  const { list, remove, getKey, move, push, sortList } = useDynamicList<Item>([
    { name: 'my bro', age: '23', memo: "he's my bro" },
    { name: 'my sis', age: '21', memo: "she's my sis" },
    {},
  ]);

  const [form] = Form.useForm();

  const [result, setResult] = useState('');

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, row: Item, index: number) => (
        <View>
          <DragOutlined style={{ cursor: 'move', marginRight: 8 }} />
          <Form.Item name={['params', getKey(index), 'name']} initialValue={text} noStyle>
            <Input style={{ width: 120, marginRight: 16 }} placeholder="name" />
          </Form.Item>
        </View>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (text: string, row: Item, index: number) => (
        <Form.Item name={['params', getKey(index), 'age']} initialValue={text} noStyle>
          <Input style={{ width: 120, marginRight: 16 }} placeholder="age" />
        </Form.Item>
      ),
    },
    {
      key: 'memo',
      title: 'Memo',
      dataIndex: 'memo',
      render: (text: string, row: Item, index: number) => (
        <View>
          <Form.Item name={['params', getKey(index), 'memo']} initialValue={text} noStyle>
            <Input style={{ width: 300, marginRight: 16 }} placeholder="please input the memo" />
          </Form.Item>
          <Button.Group>
            <Button danger onClick={() => remove(index)}>
              Delete
            </Button>
          </Button.Group>
        </View>
      ),
    },
  ];

  return (
    <View>
      <Form form={form}>
        <ReactDragListView
          onDragEnd={(oldIndex: number, newIndex: number) => move(oldIndex, newIndex)}
          handleSelector={'span[aria-label="drag"]'}
        >
          <Table
            columns={columns}
            dataSource={list}
            rowKey={(r: any, index: any) => getKey(index).toString()}
            pagination={false}
            style={{ overflow: 'auto' }}
          />
        </ReactDragListView>
      </Form>
      <Button
        style={{ marginTop: 8 }}
        block
        type="dashed"
        onClick={() => push({ name: 'new row', age: '25' })}
      >
        + Add row
      </Button>
      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={() => {
          form
            .validateFields()
            .then((val) => {
              console.log(val, val.params);
              const sortedResult = sortList(val.params);
              setResult(JSON.stringify(sortedResult, null, 2));
            })
            .catch(() => {});
        }}
      >
        Submit
      </Button>
      <View >{result && `content: ${result}`}</View>
    </View>
  );
};