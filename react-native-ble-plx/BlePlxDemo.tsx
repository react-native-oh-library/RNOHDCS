import React, { Component, useState } from 'react'; 
import types from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Alert } from 'react-native';  
import {
  BleError,
  BleErrorCode,
  BleManager,
  Device,
  Service,
  Descriptor,
  State as BluetoothState,
  LogLevel,
  type DeviceId,
  type TransactionId,
  type UUID,
  type Characteristic,
  type Base64,
  type Subscription
} from 'react-native-ble-plx'
import { Platform } from 'react-native'
import { errorFunction } from 'simple-statistics';
import Button from 'apsl-react-native-button'
import Toast from 'react-native-simple-toast';

class BLEServiceInstance {
  public manager: BleManager;

  private showLogFunc: Function;

  constructor(showLog: Function) {
    this.manager = new BleManager();
    this.showLogFunc = showLog;
  }

  showErrorToast(message: string) {
    this.showLogFunc(message);
  }

  onBluetoothPowerOff() {
    this.showErrorToast('Bluetooth is turned off')
  }

  requestBluetoothPermission = async () => {
    this.showErrorToast('Platform.OS: ' + Platform.OS)
    this.showErrorToast('Permission have not been granted')
  }

  initializeBLE() {
    console.log('bleplx:initializeBLE:');
    const subscription = this.manager.onStateChange(state => {
      switch (state) {
        case BluetoothState.Unsupported:
          this.showErrorToast('')
          break
        case BluetoothState.PoweredOff:
          this.onBluetoothPowerOff()
          this.manager.enable().catch((error: BleError) => {
            if (error.errorCode === BleErrorCode.BluetoothUnauthorized) {
              this.requestBluetoothPermission()
            }
          })
          break
        case BluetoothState.Unauthorized:
          this.requestBluetoothPermission()
          break
        case BluetoothState.PoweredOn:
          subscription.remove()
          break
        default:
          this.showErrorToast('Unsupported state: ' + state)
      }
    })
  }
}

class App extends React.Component {
  deviceName: string = 'time'
  serviceUuid: string = '00001820-0000-1000-8000-00805F9B34FB'
  characteristicUuid: string = '00001820-0000-1000-8000-00805F9B34FB'
  descriptorUuid: string = '00002903-0000-1000-8000-00805F9B34FB'

  device?: Device;

  service?: Service;

  characteristic?: Characteristic;

  descriptor?: Descriptor;

  componentDidMount() {
  }

  showLog(text: string) {
    Toast.show(text, Toast.SHORT);
    console.log('bleplx showLog:'+text);
  };

  ble = new BLEServiceInstance((text: string) => {
    this.showLog(text);
  });
  
  startInit = () => {
    console.log('startInit');
    this.ble.manager.enable();
    this.ble.initializeBLE();
  }

  enable = () => {
    this.ble.manager.enable();
    Toast.show('enable', Toast.SHORT)
  }

  disable = () => {
    this.ble.manager.disable();
    Toast.show('disable', Toast.SHORT)
  }

  state = () => {
    this.ble.manager.state().then(value => {
      Toast.show('state: ' + value.toString(), Toast.SHORT)
    })
  }
  
  startScan = () => {
    console.log('startScan');
    Toast.show('开始扫描外设', Toast.LONG)
    this.ble.manager.startDeviceScan(null, null, (error, device) => {
      if (device?.name) {
        console.log('bleplx: startScan result:' + device?.name);
      }
      if (device?.name?.toLocaleLowerCase() == this.deviceName) {
        if (this.device != null) {
          return
        }
        this.device = device;
        this.stopDeviceScan();
        Alert.alert(
          '发现外设:' + device.name,
          '是否连连接？',
          [
            {
              text: '取消',
              style: 'cancel'
            },
            {
              text: '连接',
              onPress: () => {
                this.connectToDevice();
              },
              style: 'destructive'
            }
          ]
        )
      }
    })
  }

  stopDeviceScan = () => {
    this.ble.manager.stopDeviceScan();
    Toast.show('stopDeviceScan', Toast.SHORT)
  }

  connectToDevice = () => {
    if (this.device == null) {
      console.log('bleplx: 没有找到指定的连接设备');
      return;
    }

    console.log('bleplx: 开始连接：' + this.device.id);
    Toast.show('开始连接外设', Toast.LONG)
    this.ble.manager.connectToDevice(this.device.id).then(device => {
      Toast.show('连接成功', Toast.SHORT);
      console.log('bleplx:连接成功:' + JSON.stringify(device));
      // this.discoverAllServicesAndCharacteristicsForDevice();
    }).catch(error => {
      Toast.show('连接失败', Toast.SHORT);
      console.log('bleplx:连接失败：' + error.message);
    });
  }

  cancelDeviceConnection = () => {
    this.ble.manager.cancelDeviceConnection(this.device!.id);
    Toast.show('cancelDeviceConnection', Toast.SHORT);
  }

  isDeviceConnected = () => {
    this.ble.manager.isDeviceConnected(this.device!.id).then(value=>{
      console.log('bleplx:' + (value == false ? "没有连接" : "已连接"));
      Toast.show('isDeviceConnected: '+(value == false ? "没有连接" : "已连接"), Toast.SHORT);
    });
  }
  
  readRSSIForDevice = () => {
    this.ble.manager.readRSSIForDevice(this.device!.id).then(value=>{
      Toast.show('readRSSIForDevice: '+value.mtu.toString(), Toast.SHORT);
    })
  }

  requestMTUForDevice = () => {
    this.ble.manager.requestMTUForDevice(this.device!.id, 23).then(value=>{
      Toast.show('requestMTUForDevice', Toast.SHORT);
    })
  }

  devices = () => {
    this.ble.manager.devices([this.device!.id]).then(value=>{
      Toast.show('devices: '+JSON.stringify(value), Toast.SHORT);
    })
  }

  connectedDevices = () => {
    this.ble.manager.connectedDevices([this.serviceUuid]).then(value=>{
      Toast.show('connectedDevices: '+JSON.stringify(value), Toast.SHORT);
    })
  }

  discoverAllServicesAndCharacteristicsForDevice = () => {
    this.ble.manager.discoverAllServicesAndCharacteristicsForDevice(this.device!.id).then(value=>{
      Toast.show('discoverAllServicesAndCharacteristicsForDevice: '+JSON.stringify(value), Toast.SHORT);
      console.log('bleplx: ' + 'discoverAllServicesAndCharacteristicsForDevice: value: ' + JSON.stringify(value));
      
      this.ble.manager.servicesForDevice(this.device!.id).then(value=>{
        value.forEach(ser=>{
          if (ser.uuid == this.serviceUuid) {
            this.service = ser
          }
        })

        if (this.service == null) {
          Toast.show('service不存在：'+this.serviceUuid, Toast.LONG);
        } else {
          this.ble.manager.characteristicsForDevice(this.device!.id, this.serviceUuid).then(value=>{
            console.log('bleplx: ' + 'characteristicsForDevice: ' + JSON.stringify(value));
            value.forEach(char=>{
              if (char.uuid == this.characteristicUuid) {
                this.characteristic = char
              }
            })
  
            if (this.characteristic == null) {
              Toast.show('characteristic不存在：'+this.characteristicUuid, Toast.LONG);
            } else {
              this.ble.manager.descriptorsForDevice(this.device!.id, this.serviceUuid, this.characteristicUuid).then(value=>{
                value.forEach(des=>{
                  if (des.uuid == this.descriptorUuid) {
                    this.descriptor = des
                  }
                })
            
                if (this.descriptor == null) {
                  Toast.show('descriptor不存在：'+this.descriptorUuid, Toast.LONG);
                }
              })
            }
          })
        }
      })
    }).catch((err)=>{
      Toast.show('discoverAllServicesAndCharacteristicsForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'discoverAllServicesAndCharacteristicsForDevice: error: ' + err);
    });
  }
  
  servicesForDevice = () => {
    this.ble.manager.servicesForDevice(this.device!.id).then(value=>{
      Toast.show('servicesForDevice: ' + JSON.stringify(value), Toast.SHORT);
      console.log('bleplx: ' + 'servicesForDevice: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('servicesForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'servicesForDevice: error: ' + err);
    });
  }

  characteristicsForDevice = () => {
    this.ble.manager.characteristicsForDevice(this.device!.id, this.serviceUuid).then(value=>{
      Toast.show('characteristicsForDevice: '+JSON.stringify(value), Toast.SHORT);
      console.log('bleplx: ' + 'characteristicsForDevice: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('characteristicsForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'characteristicsForDevice: error: ' + err);
    });
  }

  characteristicsForService = () => {
    this.device?.characteristicsForService(this.serviceUuid).then(value=>{
      Toast.show('characteristicsForService: '+JSON.stringify(value), Toast.SHORT);
      console.log('bleplx: ' + 'characteristicsForService: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('characteristicsForService: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'characteristicsForService: error: ' + err);
    });
  }

  descriptorsForDevice = () => {
    this.ble.manager.descriptorsForDevice(this.device!.id, this.serviceUuid, this.characteristicUuid).then(value=>{
      Toast.show('descriptorsForDevice: '+JSON.stringify(value), Toast.SHORT);
      console.log('bleplx: ' + 'descriptorsForDevice: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('descriptorsForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'descriptorsForDevice: error: ' + err);
    });
  }

  descriptorsForService = () => {
    this.device?.descriptorsForService(this.serviceUuid, this.characteristicUuid).then(value=>{
      Toast.show('descriptorsForService: '+JSON.stringify(value), Toast.SHORT);
      console.log('bleplx: ' + 'descriptorsForService: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('descriptorsForService: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'descriptorsForService: error: ' + err);
    });
  }
  
  descriptorsForCharacteristic = () => {
    this.service?.descriptorsForCharacteristic(this.characteristicUuid).then(value=>{
      Toast.show('descriptorsForCharacteristic: '+JSON.stringify(value), Toast.SHORT);
      console.log('bleplx: ' + 'descriptorsForCharacteristic: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('descriptorsForCharacteristic: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'descriptorsForCharacteristic: error: ' + err);
    });
  }

  readCharacteristicForDevice = () => {
    this.ble.manager.readCharacteristicForDevice(this.device!.id, this.serviceUuid, this.characteristicUuid).then(value=>{
      Toast.show('readCharacteristicForDevice: '+value.value, Toast.SHORT);
      console.log('bleplx: ' + 'readCharacteristicForDevice: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('readCharacteristicForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'readCharacteristicForDevice: error: ' + err);
    });
  }

  readCharacteristicForService = () => {
    this.device?.readCharacteristicForService(this.serviceUuid, this.characteristicUuid, '1').then(value=>{
      Toast.show('readCharacteristicForService: '+value.value, Toast.SHORT);
      console.log('bleplx: ' + 'readCharacteristicForService: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('readCharacteristicForService: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'readCharacteristicForService: error: ' + err);
    });
  }

  readCharacteristic = () => {
    if (this.service == null) {
      Toast.show('readCharacteristic: ' + this.serviceUuid + ' 不存在，请先执行 discoverAllServicesAndCharacteristicsForDevice', Toast.LONG);
      return
    }
    this.service?.readCharacteristic(this.characteristicUuid, '1').then(value=>{
      console.log('bleplx: ' + 'readCharacteristic: value: ' + JSON.stringify(value));
      Toast.show('readCharacteristic: '+value.value, Toast.SHORT);
    }).catch((err)=>{
      Toast.show('readCharacteristic: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'readCharacteristic: error: ' + err);
    });
  }

  writeCharacteristicForDevice = () => {
    this.ble.manager.writeCharacteristicWithResponseForDevice(this.device!.id, this.serviceUuid, this.characteristicUuid, '123', '1').then(value=>{
      Toast.show('writeCharacteristicForDevice: '+'123', Toast.SHORT);
      console.log('bleplx: ' + 'writeCharacteristicForDevice: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('writeCharacteristicForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'writeCharacteristicForDevice: error: ' + err);
    });
  }
  
  writeCharacteristicForService = () => {
    this.device?.writeCharacteristicWithoutResponseForService(this.serviceUuid, this.characteristicUuid, '123', '1').then(value=>{
      Toast.show('writeCharacteristicForService: '+'123', Toast.SHORT);
      console.log('bleplx: ' + 'writeCharacteristicForService: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('writeCharacteristicForService: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'writeCharacteristicForService: error: ' + err);
    });
  }

  writeCharacteristic = () => {
    if (this.service == null) {
      Toast.show('writeCharacteristic: ' + this.serviceUuid + ' 不存在，请先执行 discoverAllServicesAndCharacteristicsForDevice', Toast.LONG);
      return
    }
    this.service.writeCharacteristicWithResponse(this.characteristicUuid, '123', '1').then(value=>{
      Toast.show('writeCharacteristic: '+'123', Toast.SHORT);
      console.log('bleplx: ' + 'writeCharacteristic: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('writeCharacteristic: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'writeCharacteristic: error: ' + err);
    });
  }

  monitorCharacteristicForDevice = () => {
    this.ble.manager.monitorCharacteristicForDevice(this.device!.id, this.serviceUuid, this.characteristicUuid, (error, characteristic) => {
      Toast.show('monitorCharacteristicForDevice', Toast.SHORT);
      console.log('bleplx: ' + 'monitorCharacteristicForDevice: value: ' + JSON.stringify(characteristic));
    }, '1')
  }

  monitorCharacteristicForService = () => {
    this.device?.monitorCharacteristicForService(this.serviceUuid, this.characteristicUuid, (error, characteristic) => {
      Toast.show('monitorCharacteristicForService', Toast.SHORT);
      console.log('bleplx: ' + 'monitorCharacteristicForService: value: ' + JSON.stringify(characteristic));
    }, '1')
  }

  monitorCharacteristic = () => {
    if (this.service == null) {
      Toast.show('monitorCharacteristic: ' + this.serviceUuid + ' 不存在，请先执行 discoverAllServicesAndCharacteristicsForDevice', Toast.LONG);
      return
    }
    this.service?.monitorCharacteristic(this.characteristicUuid, (error, characteristic) => {
      Toast.show('monitorCharacteristic', Toast.SHORT);
      console.log('bleplx: ' + 'monitorCharacteristic: value: ' + JSON.stringify(characteristic));
    }, '1')
  }
  
  readDescriptorForDevice = () => {
    this.ble.manager.readDescriptorForDevice(this.device!.id, this.serviceUuid, this.characteristicUuid, this.descriptorUuid, '1').then(value=>{
      Toast.show('readDescriptorForDevice: '+value.value, Toast.SHORT);
      console.log('bleplx: ' + 'readDescriptorForDevice: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('readDescriptorForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'readDescriptorForDevice: error: ' + err);
    });
  }

  readDescriptorForService = () => {
    this.device?.readDescriptorForService(this.serviceUuid, this.characteristicUuid, this.descriptorUuid, '1').then(value=>{
      Toast.show('readDescriptorForService: '+value.value, Toast.SHORT);
      console.log('bleplx: ' + 'readDescriptorForService: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('readDescriptorForService: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'readDescriptorForService: error: ' + err);
    });
  }

  readDescriptorForCharacteristic = () => {
    if (this.service == null) {
      Toast.show('readDescriptorForCharacteristic: ' + this.serviceUuid + ' 不存在，请先执行 discoverAllServicesAndCharacteristicsForDevice', Toast.LONG);
      return
    }
    this.service?.readDescriptorForCharacteristic(this.characteristicUuid, this.descriptorUuid, '1').then(value=>{
      Toast.show('readDescriptorForCharacteristic: '+value.value, Toast.SHORT);
      console.log('bleplx: ' + 'readDescriptorForCharacteristic: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('readDescriptorForCharacteristic: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'readDescriptorForCharacteristic: error: ' + err);
    });
  }

  readDescriptor = () => {
    if (this.characteristic == null) {
      Toast.show('请先执行 discoverAllServicesAndCharacteristicsForDevice', Toast.LONG);
      console.log('bleplx: 请先执行 discoverAllServicesAndCharacteristicsForDevice ');
      return
    }
    this.characteristic.readDescriptor(this.descriptorUuid, '1').then(value=>{
      Toast.show('readDescriptor: '+value.value, Toast.SHORT);
      console.log('bleplx: ' + 'readDescriptor: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('readDescriptor: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'readDescriptor: this.characteristic?.uuid: ' + this.characteristic?.uuid);
      console.log('bleplx: ' + 'readDescriptor: error: ' + err);
    });
  }
  
  writeDescriptorForDevice = () => {
    this.ble.manager.writeDescriptorForDevice(this.device!.id, this.serviceUuid, this.characteristicUuid, this.descriptorUuid, '123', '1').then(value=>{
      Toast.show('writeDescriptorForDevice: '+'123', Toast.SHORT);
      console.log('bleplx: ' + 'writeDescriptorForDevice: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('writeDescriptorForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'writeDescriptorForDevice: error: ' + err);
    });
  }

  writeDescriptorForService = () => {
    this.device?.writeDescriptorForService(this.serviceUuid, this.characteristicUuid, this.descriptorUuid, '123', '1').then(value=>{
      Toast.show('writeDescriptorForDevice: '+'123', Toast.SHORT);
      console.log('bleplx: ' + 'writeDescriptorForService: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('writeDescriptorForDevice: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'writeDescriptorForService: error: ' + err);
    });
  }

  writeDescriptorForCharacteristic = () => {
    if (this.service == null) {
      Toast.show('writeCharacteristic: ' + this.serviceUuid + ' 不存在，请先执行 discoverAllServicesAndCharacteristicsForDevice', Toast.LONG);
      return
    }
    this.service?.writeDescriptorForCharacteristic(this.characteristicUuid, this.descriptorUuid, '123', '1').then(value=>{
      Toast.show('writeDescriptorForCharacteristic: '+'123', Toast.SHORT);
      console.log('bleplx: ' + 'writeDescriptorForCharacteristic: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('writeDescriptorForCharacteristic: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'writeDescriptorForCharacteristic: error: ' + err);
    });
  }

  writeDescriptor = () => {
    if (this.characteristic == null) {
      Toast.show('请先执行 discoverAllServicesAndCharacteristicsForDevice', Toast.LONG);
      return
    }
    this.characteristic?.writeDescriptor(this.descriptorUuid, '123', '1').then(value=>{
      Toast.show('writeDescriptor: '+'123', Toast.SHORT);
      console.log('bleplx: ' + 'writeDescriptor: value: ' + JSON.stringify(value));
    }).catch((err)=>{
      Toast.show('writeDescriptor: 失败', Toast.SHORT);
      console.log('bleplx: ' + 'writeDescriptor: error: ' + err);
    });
  }

  cancelTransaction = () => {
    this.ble.manager.cancelTransaction('1')
  }

  setLogLevel = () => {
    this.ble.manager.setLogLevel(LogLevel.Debug);
  }

  destroyClient = () => {
    this.ble.manager.destroy();
    Toast.show('destroyClient', Toast.SHORT);
  }

  styles = StyleSheet.create({
    button: {
      backgroundColor: "white",
      flex: 1,
    }
  })
  
  render() {
    return (
      <SafeAreaView style={{paddingTop:StatusBar.currentHeight}}>
        <ScrollView>
          <View style={styles.container}>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.enable}>enable</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.disable}>disable</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.startScan}>startScan</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.stopDeviceScan}>stopDeviceScan</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.connectToDevice}>connectToDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.cancelDeviceConnection}>cancelDeviceConnection</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.state}>state</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.isDeviceConnected}>isDeviceConnected</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.readRSSIForDevice}>readRSSIForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.requestMTUForDevice}>requestMTUForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.devices}>devices</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.discoverAllServicesAndCharacteristicsForDevice}>discoverAllServicesAndCharacteristicsForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.connectedDevices}>connectedDevices</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.servicesForDevice}>servicesForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.characteristicsForDevice}>characteristicsForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.characteristicsForService}>characteristicsForService</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.descriptorsForDevice}>descriptorsForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.descriptorsForService}>descriptorsForService</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.descriptorsForCharacteristic}>descriptorsForCharacteristic</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.readCharacteristicForDevice}>readCharacteristicForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.readCharacteristicForService}>readCharacteristicForService</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.readCharacteristic}>readCharacteristic</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.writeCharacteristicForDevice}>writeCharacteristicForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.writeCharacteristicForService}>writeCharacteristicForService</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.writeCharacteristic}>writeCharacteristic</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.monitorCharacteristicForDevice}>monitorCharacteristicForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.monitorCharacteristicForService}>monitorCharacteristicForService</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.monitorCharacteristic}>monitorCharacteristic</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.readDescriptorForDevice}>readDescriptorForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.readDescriptorForService}>readDescriptorForService</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.readDescriptorForCharacteristic}>readDescriptorForCharacteristic</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.readDescriptor}>readDescriptor.</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.writeDescriptorForDevice}>writeDescriptorForDevice</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.writeDescriptorForService}>writeDescriptorForService</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.writeDescriptorForCharacteristic}>writeDescriptorForCharacteristic</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.writeDescriptor}>writeDescriptor</Button>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} backgroundColor='blue' onPress={this.destroyClient}>destroyClient</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textStyle: {
    color: 'white'
  },
  buttonStyle: {
    borderColor: '#f39c12',
    backgroundColor: '#f1c40f'
  }
})

export default App;