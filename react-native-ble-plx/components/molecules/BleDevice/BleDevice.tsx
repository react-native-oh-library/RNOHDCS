/* eslint-disable prettier/prettier */
import React from 'react'
import { Device } from 'react-native-ble-plx'
import { Container } from './BleDevice.styled'
import { DeviceProperty } from './DeviceProperty/DeviceProperty'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export type BleDeviceProps = {
  onPress: (device: Device) => void
  device: Device
}

export function BleDevice({ device, onPress }: BleDeviceProps) {
  const isConnectableInfoValueIsUnavailable = typeof device.isConnectable !== 'boolean'
  const isConnectableValue = device.isConnectable ? 'true' : 'false'
  const parsedIsConnectable = isConnectableInfoValueIsUnavailable ? '-' : isConnectableValue
  // console.info(">>>>>>>"+device.name);
  return (
    <TouchableOpacity onPress={() => onPress(device)}>
      <View style = {styles.container}>
      <DeviceProperty name="name" value={device.name} />
      <DeviceProperty name="localName" value={device.localName} />
      <DeviceProperty name="id" value={device.id} />
      <DeviceProperty name="manufacturerData" value={device.manufacturerData} />
      <DeviceProperty name="rawScanRecord" value={device.rawScanRecord} />
      <DeviceProperty name="isConnectable" value={parsedIsConnectable} />
      <DeviceProperty name="mtu" value={device.mtu.toString()} />
      <DeviceProperty name="rssi" value={device.rssi} />
    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flexWrap:'wrap',
    padding: 12,
    // 设置圆角半径
    borderRadius: 10,

    // 设置边框宽度
    borderWidth: 1,

    // 设置边框颜色
    borderColor: 'grey',
    margin:10
  },
  titleText: {
    fontWeight:'800'
  },
  valueText: {
    fontWeight:'500'
  },
  
});