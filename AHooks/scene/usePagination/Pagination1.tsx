import { usePagination } from 'ahooks';
import { Pagination } from 'antd';
import Mock from 'mockjs';
import React from 'react';
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
}): Promise<{ total: number; list: UserListItem[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList(params.current, params.pageSize));
    }, 1000);
  });
}

export function Pagination1(){
  const { data, loading, pagination } = usePagination(getUserList);
  return (
    <View>
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