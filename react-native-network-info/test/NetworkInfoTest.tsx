import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NetworkInfo} from 'react-native-network-info';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function NetworkInfoTest() {
  const propsArr = [
    {
      name: 'getIPAddress',
      fn: NetworkInfo.getIPAddress,
      type: 'string',
      des: '获取设备的 IP 地址',
    },
    {
      name: 'getIPV4Address',
      fn: NetworkInfo.getIPV4Address,
      type: 'string',
      des: '获取设备的 IPv4 地址',
    },
    {
      name: 'getBroadcast',
      fn: NetworkInfo.getBroadcast,
      type: 'string',
      des: '获取设备的广播 IP 地址',
    },
    {
      name: 'getSSID',
      fn: NetworkInfo.getSSID,
      type: 'string',
      des: '获取连接的 WiFi 网络的 SSID',
    },
    {
      name: 'getBSSID',
      fn: NetworkInfo.getBSSID,
      type: 'string',
      des: '获取连接的 WiFi 网络的 BSSID',
    },
    {
      name: 'getSubnet',
      fn: NetworkInfo.getSubnet,
      type: 'string',
      des: '获取设备的子网掩码',
    },
    {
      name: 'getGatewayIPAddress',
      fn: NetworkInfo.getGatewayIPAddress,
      type: 'string',
      des: '获取设备的网关 IP 地址',
    },
    {
      name: 'getFrequency',
      fn: NetworkInfo.getFrequency,
      type: 'number',
      des: '获取当前 Wi-Fi 连接的频率',
    },
  ];

  return (
    <Tester>
      <TestSuite name="network-info">
        {propsArr.map(item => (
          <TestCase
            key={item.name}
            itShould={item.name + `（${item.des}）`}
            initialState={''}
            arrange={({setState, state}) => {
              return (
                <View style={styles.infoContainer}>
                  <TouchableOpacity
                    onPress={async () => {
                      const value = await item.fn();
                      if(!value){
                        setState('null');
                      }else{
                        setState(value as any);
                      }
                    }}>
                    <Text style={styles.button}>{item.name}</Text>
                  </TouchableOpacity>
                  <Text style={styles.infoText}>{`${state || ''}`}</Text>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.a(item.type)
            }}
          />
        ))}
      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'hsl(193, 95%, 68%)',
    borderWidth: 2,
    borderColor: 'hsl(193, 95%, 30%)',
    borderRadius: 4,
  },
});