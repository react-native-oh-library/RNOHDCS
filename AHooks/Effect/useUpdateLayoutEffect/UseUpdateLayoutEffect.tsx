/**
 * title: Basic usage
 * desc: This hook is exactly the same as useLayoutEffect, except it skips running the effect for the first time.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 使用上与 useLayoutEffect 完全相同，只是它忽略了首次执行，且只在依赖项更新时执行。
 */

import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useUpdateLayoutEffect } from 'ahooks';

export function UseUpdateLayoutEffect() {

    const [count, setCount] = useState(0);
    const [layoutEffectCount, setLayoutEffectCount] = useState(0);
    const [updateLayoutEffectCount, setUpdateLayoutEffectCount] = useState(0);

    useLayoutEffect(() => {
        setLayoutEffectCount((c) => c + 1);
    }, [count]);

    useUpdateLayoutEffect(() => {
        setUpdateLayoutEffectCount((c) => c + 1);
        return () => {
            // do something
        };
    }, [count]); // you can include deps array if necessary

    return (
        <View>
            <Text>layoutEffectCount: {layoutEffectCount}</Text>
            <Text>updateLayoutEffectCount: {updateLayoutEffectCount}</Text>
            <Text>
                <Button title="reRender" onPress={() => setCount((c) => c + 1)} />
            </Text>
        </View>
    );
}
