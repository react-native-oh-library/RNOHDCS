import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import NetInfo, { useNetInfo, useNetInfoInstance } from "@react-native-community/netinfo";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export const NetInfoTest = () => {
  const [InstanceState, setInstanceState] = React.useState({});

  const netInfoInstance = useNetInfoInstance(false);
  const getInstanceState = () => {
    setInstanceState(netInfoInstance.netInfo)
  }
  const instanceRefrech = () => {
    netInfoInstance.refresh()
    setInstanceState(netInfoInstance.netInfo)
  }

  const [netInfoState, setNetInfoState] = React.useState({});
  const fetch = async () => {
    console.log('拿到数据啦！！！！！');
    const fetchState = await NetInfo.fetch()
    setNetInfoState(fetchState)
  }
  const refresh = async () => {
    console.log('数据刷新啦！！！！！');
    const refreshState = await NetInfo.refresh();
    setNetInfoState(refreshState)
  }
  const toListen = () => {
    let listener = NetInfo.addEventListener((listenerState) => {
      console.log('监听到数据更新啦！！！！！');
      setNetInfoState(listenerState)
    });
  }

  const [netUseInfoState, setUseNetInfoState] = React.useState({});
  let netInfo = useNetInfo();
  const getUseNetInfo = () => {
    setUseNetInfoState(netInfo);
  }

  return (
    <ScrollView>
      <View>
        <Tester>
          <TestSuite name={'NetInfo'}>
            <View>
              <Button title="addEventListener" onPress={() => toListen()} />
              <Button title="fetch" onPress={() => fetch()} />
              <Button title="refresh" onPress={() => refresh()} />
            </View>
            <TestCase itShould={'NetInfoState(public)'}>
              <View>
                <Text>Type: {netInfoState?.type}</Text>
              </View>
              <View>
                <Text>isConnected: {JSON.stringify(netInfoState?.isConnected)}</Text>
              </View>
              <View>
                <Text>isInternetReachable: {JSON.stringify(netInfoState?.isInternetReachable)}</Text>
              </View>
              <View>
                <Text>isWifiEnabled: {JSON.stringify(netInfoState?.isWifiEnabled)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-wifi)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(netInfoState?.details?.isConnectionExpensive)}</Text>
              </View>
              <View>
                <Text>ssid: {JSON.stringify(netInfoState?.details?.ssid)}</Text>
              </View>
              <View>
                <Text>bssid: {JSON.stringify(netInfoState?.details?.bssid)}</Text>
              </View>
              <View>
                <Text>strength: {JSON.stringify(netInfoState?.details?.strength)}</Text>
              </View>
              <View>
                <Text>ipAddress: {JSON.stringify(netInfoState?.details?.ipAddress)}</Text>
              </View>
              <View>
                <Text>subnet: {JSON.stringify(netInfoState?.details?.subnet)}</Text>
              </View>
              <View>
                <Text>frequency: {JSON.stringify(netInfoState?.details?.frequency)}</Text>
              </View>
              <View>
                <Text>linkSpeed: {JSON.stringify(netInfoState?.details?.linkSpeed)}</Text>
              </View>
              <View>
                <Text>rxLinkSpeed: {JSON.stringify(netInfoState?.details?.rxLinkSpeed)}</Text>
              </View>
              <View>
                <Text>txLinkSpeed: {JSON.stringify(netInfoState?.details?.txLinkSpeed)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-cellular)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(netInfoState?.details?.isConnectionExpensive)}</Text>
              </View>
              <View>
                <Text>cellularGeneration: {JSON.stringify(netInfoState?.details?.cellularGeneration)}</Text>
              </View>
              <View>
                <Text>carrier: {JSON.stringify(netInfoState?.details?.carrier)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-bluetooth, ethernet, wimax, vpn, or other)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(netInfoState?.details?.isConnectionExpensive)}</Text>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name={'useNetInfo'}>
            <View>
              <Button title="getUseNetInfo" onPress={() => getUseNetInfo()} />
            </View>
            <TestCase itShould={'NetInfoState(public)'}>
              <View>
                <Text>Type: {netUseInfoState?.type}</Text>
              </View>
              <View>
                <Text>isConnected: {JSON.stringify(netUseInfoState?.isConnected)}</Text>
              </View>
              <View>
                <Text>isInternetReachable: {JSON.stringify(netUseInfoState?.isInternetReachable)}</Text>
              </View>
              <View>
                <Text>isWifiEnabled: {JSON.stringify(netUseInfoState?.isWifiEnabled)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-wifi)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(netUseInfoState?.details?.isConnectionExpensive)}</Text>
              </View>
              <View>
                <Text>ssid: {JSON.stringify(netUseInfoState?.details?.ssid)}</Text>
              </View>
              <View>
                <Text>bssid: {JSON.stringify(netUseInfoState?.details?.bssid)}</Text>
              </View>
              <View>
                <Text>strength: {JSON.stringify(netUseInfoState?.details?.strength)}</Text>
              </View>
              <View>
                <Text>ipAddress: {JSON.stringify(netUseInfoState?.details?.ipAddress)}</Text>
              </View>
              <View>
                <Text>subnet: {JSON.stringify(netUseInfoState?.details?.subnet)}</Text>
              </View>
              <View>
                <Text>frequency: {JSON.stringify(netUseInfoState?.details?.frequency)}</Text>
              </View>
              <View>
                <Text>linkSpeed: {JSON.stringify(netUseInfoState?.details?.linkSpeed)}</Text>
              </View>
              <View>
                <Text>rxLinkSpeed: {JSON.stringify(netUseInfoState?.details?.rxLinkSpeed)}</Text>
              </View>
              <View>
                <Text>txLinkSpeed: {JSON.stringify(netUseInfoState?.details?.txLinkSpeed)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-cellular)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(netUseInfoState?.details?.isConnectionExpensive)}</Text>
              </View>
              <View>
                <Text>cellularGeneration: {JSON.stringify(netUseInfoState?.details?.cellularGeneration)}</Text>
              </View>
              <View>
                <Text>carrier: {JSON.stringify(netUseInfoState?.details?.carrier)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-bluetooth, ethernet, wimax, vpn, or other)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(netUseInfoState?.details?.isConnectionExpensive)}</Text>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name={'useNetInfoInstance'}>
            <View>
              <Button title="getInstanceState" onPress={() => getInstanceState()} />
              <Button title="instanceRefrech" onPress={() => instanceRefrech()} />
            </View>
            <TestCase itShould={'NetInfoState(public)'}>
              <View>
                <Text>Type: {InstanceState?.type}</Text>
              </View>
              <View>
                <Text>isConnected: {JSON.stringify(InstanceState?.isConnected)}</Text>
              </View>
              <View>
                <Text>isInternetReachable: {JSON.stringify(InstanceState?.isInternetReachable)}</Text>
              </View>
              <View>
                <Text>isWifiEnabled: {JSON.stringify(InstanceState?.isWifiEnabled)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-wifi)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(InstanceState?.details?.isConnectionExpensive)}</Text>
              </View>
              <View>
                <Text>ssid: {JSON.stringify(InstanceState?.details?.ssid)}</Text>
              </View>
              <View>
                <Text>bssid: {JSON.stringify(InstanceState?.details?.bssid)}</Text>
              </View>
              <View>
                <Text>strength: {JSON.stringify(InstanceState?.details?.strength)}</Text>
              </View>
              <View>
                <Text>ipAddress: {JSON.stringify(InstanceState?.details?.ipAddress)}</Text>
              </View>
              <View>
                <Text>subnet: {JSON.stringify(InstanceState?.details?.subnet)}</Text>
              </View>
              <View>
                <Text>frequency: {JSON.stringify(InstanceState?.details?.frequency)}</Text>
              </View>
              <View>
                <Text>linkSpeed: {JSON.stringify(InstanceState?.details?.linkSpeed)}</Text>
              </View>
              <View>
                <Text>rxLinkSpeed: {JSON.stringify(InstanceState?.details?.rxLinkSpeed)}</Text>
              </View>
              <View>
                <Text>txLinkSpeed: {JSON.stringify(InstanceState?.details?.txLinkSpeed)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-cellular)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(InstanceState?.details?.isConnectionExpensive)}</Text>
              </View>
              <View>
                <Text>cellularGeneration: {JSON.stringify(InstanceState?.details?.cellularGeneration)}</Text>
              </View>
              <View>
                <Text>carrier: {JSON.stringify(InstanceState?.details?.carrier)}</Text>
              </View>
            </TestCase>
            <TestCase itShould={'NetInfoState(details-bluetooth, ethernet, wimax, vpn, or other)'}>
              <View>
                <Text>isConnectionExpensive: {JSON.stringify(InstanceState?.details?.isConnectionExpensive)}</Text>
              </View>
            </TestCase>
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
};
