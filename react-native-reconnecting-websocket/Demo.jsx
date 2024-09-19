import React, { useEffect, useState } from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';

const ws = new ReconnectingWebSocket('ws://121.196.235.57/ws');

const ReconnectingWebsocketDemo = () => {
    const [html, innerHTML] = useState('');

    useEffect(() => {
        return () => {
            ws.close();
        }
    }, [])

    useEffect(() => {
        ws.onopen = e => {
            console.log('onopen:' + JSON.stringify(e));
            innerHTML('onopen:' + JSON.stringify(e) + '\n' + '\n' + html);
        }
        ws.onmessage = e => {
            console.log('onmessage:' + JSON.stringify(e));
            innerHTML('onmessage:' + JSON.stringify(e) + '\n' + '\n' + html);
        }
        ws.onclose = e => {
            console.log('onclose:' + JSON.stringify(e));
            innerHTML('onclose:' + JSON.stringify(e) + '\n' + '\n' + html);
        }
        ws.onerror = e => {
            console.log('onerror:' + JSON.stringify(e));
            innerHTML('onerror:' + JSON.stringify(e) + '\n' + '\n' + html);
        }
        ws.onconnecting = e => {
            console.log("onconnecting:" + JSON.stringify(e));
            innerHTML("onconnecting:" + JSON.stringify(e) + '\n' + '\n' + html);
        }
    }, [html])
    return (
        <>
            <View style={{ height: '100%' }}>
                <Text style={{ lineHeight: 30, textAlign: 'center' }}>进入页面自动连通服务器</Text>
                <Button
                    title='ws.close( )-----关闭连接'
                    onPress={() => {
                        ws.close()
                    }}
                />
                <View style={{ height: 30 }} />
                <Button
                    title='ws.send(可口可乐)-----发送信息'
                    onPress={() => {
                        ws.send('可口可乐')
                    }}
                />
                <View style={{ height: 30 }} />
                <Button
                    title='ws.ping( )-----是否联通'
                    onPress={() => {
                        ws.ping()
                    }}
                />
                <View style={{ height: 30 }} />
                <Button
                    title='ws.reconnect( )-----刷新连接'
                    onPress={() => {
                        ws.reconnect()
                    }}
                />
                <ScrollView style={{ flex: 1 }}>
                    <Text>{html}</Text>
                </ScrollView>
            </View>
        </>
    )
}

export default ReconnectingWebsocketDemo;