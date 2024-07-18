import { TestSuite, Tester } from '@rnoh/testerino';
import { TestCase } from '../components';
import * as React from 'react';
import {
  BleManager,
  LogLevel,
  Device, Service, Characteristic, BleErrorCode, Descriptor
} from 'react-native-ble-plx'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';

const bleManager = new BleManager()

export function BlePlxTest() {
  return (
    <TestSuite name="BlePlx">
      <TestCase.Logical
        itShould="addListener"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.addListener('eventName');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="removeListeners"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.removeListeners(1);
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="createClient"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.createClient();
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="destroyClient"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.destroyClient();
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="cancelTransaction"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.cancelTransaction('id');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="setLogLevel"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.setLogLevel(LogLevel.Verbose);
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="logLevel"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.logLevel();
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="enable"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.enable('id');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="disable"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.disable('id');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="state"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.state();
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="startDeviceScan"
        fn={({ expect }: any) => {
          let result = bleManager.startDeviceScan(null, true, (error) => {
            expect((error)).to.not.be.undefined;
          })
          expect(result).to.not.be.undefined;
        }}
      />
      <TestCase.Logical
        itShould="requestConnectionPriorityForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.requestConnectionPriorityForDevice('deviceId', 1, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readRSSIForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readRSSIForDevice('deviceId', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="requestMTUForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.requestMTUForDevice('deviceId', 1, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="requestMTUForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.requestMTUForDevice('deviceId', 1, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="devices"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.devices(['deviceId1', 'deviceId2']);
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="connectedDevices"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.connectedDevices(['uuid1', 'uuid2']);
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="connectToDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.connectToDevice('deviceId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="cancelDeviceConnection"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.cancelDeviceConnection('deviceId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="isDeviceConnected"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.isDeviceConnected('deviceId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="discoverAllServicesAndCharacteristicsForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.discoverAllServicesAndCharacteristicsForDevice('deviceId', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="servicesForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.servicesForDevice('deviceId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="characteristicsForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.characteristicsForDevice('deviceId', 'serviceUUID');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="characteristicsForService"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.characteristicsForService(1);
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="descriptorsForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.descriptorsForDevice('deviceId', 'serviceUUID', 'characteristicUUID');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="descriptorsForService"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.descriptorsForService(1, 'characteristicUUID');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="descriptorsForCharacteristic"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.descriptorsForCharacteristic(1);
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readCharacteristicForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readCharacteristicForDevice('deviceId', 'serviceUUID', 'characteristicUUID', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readCharacteristicForService"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readCharacteristicForService(1, 'characteristicUUID', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readCharacteristic"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readCharacteristic(1, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="writeCharacteristicForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.writeCharacteristicForDevice('deviceId', 'serviceUUID', 'characteristicUUID', 'valueBase64', false, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="writeCharacteristicForService"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.writeCharacteristicForService(1, 'characteristicUUID', 'valueBase64', false, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="writeCharacteristic"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.writeCharacteristic(1, 'valueBase64', false, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="monitorCharacteristicForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.monitorCharacteristicForDevice('deviceId', 'serviceUUID', 'characteristicUUID', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="monitorCharacteristicForService"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.monitorCharacteristicForService(1, 'characteristicUUID', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="monitorCharacteristic"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.monitorCharacteristic(1, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readDescriptorForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readDescriptorForDevice('deviceId', 'serviceUUID', 'characteristicUUID', 'descriptorUUID', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readDescriptorForService"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readDescriptorForService('deviceId', 1, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readDescriptorForService"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readDescriptorForService(1, 'characteristicUUID', 'descriptorUUID', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readDescriptorForCharacteristic"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readDescriptorForCharacteristic(1, 'descriptorUUID', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="readDescriptor"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.readDescriptor(1, 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="writeDescriptorForDevice"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.writeDescriptorForDevice('deviceId', 'serviceUUID', 'characteristicUUID', 'descriptorUUID', 'valueBase64', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="writeDescriptorForService"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.writeDescriptorForService(1, 'characteristicUUID', 'descriptorUUID', 'valueBase64', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="writeDescriptorForCharacteristic"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.writeDescriptorForCharacteristic(1, 'descriptorUUID', 'valueBase64', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase.Logical
        itShould="writeDescriptor"
        fn={({ expect }: any) => {
          try {
            let result = bleManager.writeDescriptor(1, 'valueBase64', 'transactionId');
            expect(result).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
    </TestSuite>
  );
}