import { useBoolean, useUpdateEffect } from 'ahooks';
import { Pagination, Select } from 'antd';
import Mock from 'mockjs';
import React, { useState } from 'react';
import { usePagination } from 'ahooks';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native';
import { Option } from 'antd/es/mentions';

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
  console.log('cache demo', params.current, params.pageSize, params.gender);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList(params.current, params.pageSize));
    }, 1000);
  });
}

const PaginationComponent: React.FC = () => {
  const { data, loading, pagination, run, params } = usePagination(
    ({ current, pageSize }, g: string) => {
      return getUserList({
        current,
        pageSize,
        gender: g,
      });
    },
    {
      cacheKey: 'userList',
    },
  );

  const [gender, setGender] = useState<string>(params[1] || 'male');

  useUpdateEffect(() => {
    run(
      {
        current: 1,
        pageSize: params[0]?.pageSize || 10,
      },
      gender,
    );
  }, [gender]);

  return (
    <View>
      <Select
        value={gender}
        style={{ width: 180, marginBottom: 24 }}
        onChange={(text) => setGender(text)}
        placeholder="Select gender"
      >
        <Option value="male">male</Option>
        <Option value="female">female</Option>
      </Select>
      {loading && !data ? (
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

export function Pagination4(){
  const [state, { toggle }] = useBoolean();
  return (
    <View>
      <Text>You can click the Button multiple times, the conditions of pagination will be cached.</Text>
      <Text>
        <Button title="show/hide" onPress={() => toggle()}/>
      </Text>
      {state && <PaginationComponent />}
    </View>
  );
};