import { usePagination } from 'ahooks';
import { useUpdateEffect } from 'ahooks';
import { Pagination, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import Mock from 'mockjs';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';

interface UserListItem {
  id: string;
  name: string;
  gender: 'male' | 'female';
  email: string;
  disabled: boolean;
}

const userList = (current: number, pageSize: number) =>
  Mock.mock({
    total: 55,
    [`list|${pageSize}`]: [
      {
        id: '@guid',
        name: '@name',
        'gender|1': ['male', 'female'],
        email: '@email',
        disabled: false,
      },
    ],
  });

async function getUserList(params: {
  current: number;
  pageSize: number;
  gender: string;
}): Promise<{ total: number; list: UserListItem[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList(params.current, params.pageSize));
    }, 1000);
  });
}

export function Pagination3(){
  const [gender, setGender] = useState<string>('male');

  const { data, loading, pagination } = usePagination(
    ({ current, pageSize }) => {
      return getUserList({
        current,
        pageSize,
        gender,
      });
    },
    {
      refreshDeps: [gender],
    },
  );

  return (
    <View>
      <Select
        value={gender}
        style={{ width: 180, marginBottom: 24 }}
        onChange={(text) => setGender(text)}
        placeholder="select gender"
      >
        <Option value="male">male</Option>
        <Option value="female">female</Option>
      </Select>
      {loading ? (
        <Text>loading</Text>
      ) : (
        <View>
          {data?.list?.map((item) => (
            <View key={item.email}>
              {item.name} - {item.email}
            </View>
          ))}
        </View>
      )}
      <Pagination
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={data?.total}
        onChange={pagination.onChange}
        onShowSizeChange={pagination.onChange}
        showQuickJumper
        showSizeChanger
        style={{ marginTop: 16, textAlign: 'right' }}
      />
    </View>
  );
};