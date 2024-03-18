/**
 * title: Multi-state management (split)
 * desc: useUrlState can handle multiple useUrlState updates simultaneously
 *
 * title.zh-CN: 多状态管理 (拆分)
 * desc.zh-CN: useUrlState 可以同时处理多个 useUrlState 更新
 */

import React from 'react';
import useUrlState from '@ahooksjs/use-url-state';
import { Button,View } from 'react-native';

export function UseUrlState4() {
  const [page, setPage] = useUrlState({ page: '1' });
  const [pageSize, setPageSize] = useUrlState({ pageSize: '10' });

  return (
    <View >
      <View>
        page: {page.page}
        <View style={{ paddingLeft: 8 }}>
          <Button
          title='+'
            onPress={() => {
              setPage((s) => ({ page: Number(s.page) + 1 }));
            }}
          />
          <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
          <Button
          title='-'
            onPress={() => {
              setPage((s) => ({ page: Number(s.page) - 1 }));
            }}
          />
          </View>
          <Button
          title='reset'
            onPress={() => {
              setPage({ page: undefined });
            }}
          />
        </View>
      </View>
      <View>
        pageSize: {pageSize.pageSize}
        <View style={{ paddingLeft: 8 }}>
          <Button
          title='+'
            onPress={() => {
              setPageSize((s) => ({ pageSize: Number(s.pageSize) + 1 }));
            }}
          />
          <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
          <Button
          title='-'
            onPress={() => {
              setPageSize((s) => ({ pageSize: Number(s.pageSize) - 1 }));
            }}
          />
          </View>
          <Button
          title='reset'
            onPress={() => {
              setPageSize({ pageSize: undefined });
            }}
          />
        </View>
      </View>
      <View>
        <Button
        title='reset all'
          onPress={async () => {
            await setPageSize({ pageSize: undefined });
            await setPage({ page: undefined });
          }}
        />
      </View>
    </View>
  );
};