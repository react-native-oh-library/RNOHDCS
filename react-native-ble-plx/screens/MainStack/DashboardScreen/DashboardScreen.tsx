/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { Button, FlatList ,SafeAreaView, StyleSheet, Text, View} from 'react-native'
import { Device } from 'react-native-ble-plx'
import { AppButton, ScreenDefaultContainer } from '../../../components/atoms'
import type { MainStackParamList } from '../../../navigation/navigators'
import { BLEService } from '../../../services'
import { BleDevice } from '../../../components/molecules'
import { cloneDeep } from '../../../utils/cloneDeep'
import { DropDown } from './DashboardScreen.styled'

type DashboardScreenProps = StackScreenProps<MainStackParamList, 'DASHBOARD_SCREEN'>
type DeviceExtendedByUpdateTime = Device & { updateTimestamp: number }

const MIN_TIME_BEFORE_UPDATE_IN_MILLISECONDS = 5000

export function DashboardScreen({ navigation }: DashboardScreenProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [foundDevices, setFoundDevices] = useState<DeviceExtendedByUpdateTime[]>([])

  const addFoundDevice = (device: Device) =>
    setFoundDevices(prevState => {
      if (!isFoundDeviceUpdateNecessary(prevState, device)) {
        return prevState
      }
      // deep clone
      const nextState = cloneDeep(prevState)
      const extendedDevice: DeviceExtendedByUpdateTime = {
        ...device,
        updateTimestamp: Date.now() + MIN_TIME_BEFORE_UPDATE_IN_MILLISECONDS
      } as DeviceExtendedByUpdateTime

      const indexToReplace = nextState.findIndex(currentDevice => currentDevice.id === device.id)
      if (indexToReplace === -1) {
        return nextState.concat(extendedDevice)
      }
      nextState[indexToReplace] = extendedDevice
      return nextState
    })

  const isFoundDeviceUpdateNecessary = (currentDevices: DeviceExtendedByUpdateTime[], updatedDevice: Device) => {
    const currentDevice = currentDevices.find(({ id }) => updatedDevice.id === id)
    if (!currentDevice) {
      return true
    }
    return currentDevice.updateTimestamp < Date.now()
  }

  const onConnectSuccess = () => {
    navigation.navigate('DEVICE_DETAILS_SCREEN')
    setIsConnecting(false)
  }

  const onConnectFail = () => {
    setIsConnecting(false)
  }

  const deviceRender = (device: Device) => (
    <BleDevice
      onPress={pickedDevice => {
        setIsConnecting(true)
        BLEService.connectToDevice(pickedDevice.id).then(onConnectSuccess).catch(onConnectFail)
      }}
      key={device.id}
      device={device}
    />
  )
  return (
    
    <SafeAreaView>
      {isConnecting && (
        <DropDown>
          <Text style={{ fontSize: 30 }}>Connecting</Text>
        </DropDown>
      )}
      <AppButton
        label="Look for devices"
        onPress={() => {
          setFoundDevices([])
          BLEService.initializeBLE().then(() => BLEService.scanDevices(addFoundDevice, null, true))
        }}
      />
      <AppButton
        label="Look for devices (legacy off)"
        onPress={() => {
          setFoundDevices([])
          BLEService.initializeBLE().then(() => BLEService.scanDevices(addFoundDevice, null, false))
        }}
      />
      <AppButton label="Ask for permissions" onPress={BLEService.requestBluetoothPermission} />
      <AppButton 
      label="Go to nRF test" 
      onPress={() => navigation.navigate('DEVICE_NRF_TEST_SCREEN')}
       />
      <AppButton label="Call disconnect with wrong id" onPress={() => BLEService.isDeviceWithIdConnected('asd')} />
      <AppButton
        label="Connect/disconnect test"
        onPress={() => navigation.navigate('DEVICE_CONNECT_DISCONNECT_TEST_SCREEN')}
      />
      <AppButton 
      label="On disconnect test" 
      onPress={() => navigation.navigate('DEVICE_ON_DISCONNECT_TEST_SCREEN')} 
      />
      <FlatList
        // style={{ flex: 1 ,backgroundColor:'#ff304d'}}
        data={foundDevices}
        renderItem={({ item }) => deviceRender(item)}
        keyExtractor={device => device.id}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#ff304d'
  },
  titleText: {
    fontWeight:'800'
  },
  valueText: {
    fontWeight:'500'
  },
  
});
