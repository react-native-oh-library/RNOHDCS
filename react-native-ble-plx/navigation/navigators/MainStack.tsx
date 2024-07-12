/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as screenComponents from '../../screens';
import { useCommonScreenOptions } from '../components';

export type MainStackParamList = {
  DASHBOARD_SCREEN: undefined
  DEVICE_DETAILS_SCREEN: undefined
  DEVICE_NRF_TEST_SCREEN: undefined
  DEVICE_CONNECT_DISCONNECT_TEST_SCREEN: undefined
  DEVICE_ON_DISCONNECT_TEST_SCREEN: undefined
}

const MainStack = createStackNavigator<MainStackParamList>();

export function MainStackComponent() {
  const commonScreenOptions = useCommonScreenOptions();

  return (
    <MainStack.Navigator screenOptions={commonScreenOptions}>
      <MainStack.Screen
        name="DASHBOARD_SCREEN"
        component={screenComponents.DashboardScreen}
        options={{
          headerTitle: 'Dashboard'
        }}
      />
      <MainStack.Screen
        name="DEVICE_DETAILS_SCREEN"
        component={screenComponents.DeviceScreen}
        options={{
          headerTitle: 'Dashboard'
        }}
      />
      <MainStack.Screen
        name="DEVICE_NRF_TEST_SCREEN"
        component={screenComponents.DevicenRFTestScreen}
        options={{
          headerTitle: 'nRF device test'
        }}
      />
      <MainStack.Screen
        name="DEVICE_CONNECT_DISCONNECT_TEST_SCREEN"
        component={screenComponents.DeviceConnectDisconnectTestScreen}
        options={{
          headerTitle: 'Connect/disconnect'
        }}
      />
      <MainStack.Screen
        name="DEVICE_ON_DISCONNECT_TEST_SCREEN"
        component={screenComponents.DeviceOnDisconnectTestScreen}
        options={{
          headerTitle: 'On disconnect test'
        }}
      />
    </MainStack.Navigator>
  );
}
