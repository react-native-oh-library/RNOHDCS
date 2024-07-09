/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component, useCallback, memo} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import DeviceInfo from '@react-native-oh-tpl/react-native-device-info/src/RNDeviceInfo';


const ActionExtensionHeader = memo(({isActionExtension}) => {
  const onDonePress = useCallback(() => {
    NativeModules.ActionExtension.done();
  }, []);
  return isActionExtension ? (
    <View style={{minHeight: 50, flexDirection: 'row', margin: 10}}>
      <TouchableOpacity onPress={onDonePress}>
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 20,
            minWidth: 80,
            minHeight: 40,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Done</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <View />
  );
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'constant',
      constantdeviceinfo: this.getConstantDeviceInfo(),
      asyncdeviceinfo: {},
      syncdeviceinfo: this.getSyncDeviceInfo(),
    };
  }

  getConstantDeviceInfo() {
    let deviceJSON = {};

     deviceJSON.bundleId = DeviceInfo.getBundleId();
     deviceJSON.systemName = DeviceInfo.getSystemName();
     deviceJSON.systemVersion = DeviceInfo.getSystemVersion();
     deviceJSON.version = DeviceInfo.getVersion();
     deviceJSON.readableVersion = DeviceInfo.getReadableVersion();
     deviceJSON.buildNumber = DeviceInfo.getBuildNumber();
     deviceJSON.isTablet = DeviceInfo.isTablet();
     deviceJSON.isLowRamDevice = DeviceInfo.isLowRamDevice()
     deviceJSON.appName = DeviceInfo.getApplicationName();
     deviceJSON.brand = DeviceInfo.getBrand();
     deviceJSON.model = DeviceInfo.getModel();
     deviceJSON.deviceType = DeviceInfo.getDeviceType();

    return deviceJSON;
  }

  getSyncDeviceInfo() {
    let deviceJSON = {};

    deviceJSON.manufacturer = DeviceInfo.getManufacturerSync();
    deviceJSON.powerStatus =  DeviceInfo.getPowerStateSync();
    deviceJSON.buildId = DeviceInfo.getBuildIdSync();
    deviceJSON.isCameraPresent = DeviceInfo.isCameraPresentSync();
    deviceJSON.deviceName = DeviceInfo.getDeviceNameSync();
    deviceJSON.instanceId = DeviceInfo.getInstanceIdSync();
    deviceJSON.installerPackageName = DeviceInfo.getInstallerPackageNameSync();
    deviceJSON.fontScale = DeviceInfo.getFontScaleSync();
    deviceJSON.firstInstallTime = DeviceInfo.getFirstInstallTimeSync();
    deviceJSON.lastUpdateTime = DeviceInfo.getLastUpdateTimeSync();
    deviceJSON.IpAddress = DeviceInfo.getIpAddressSync();
    deviceJSON.ApiLevel = DeviceInfo.getApiLevelSync();
    deviceJSON.carrier = DeviceInfo.getCarrierSync();
    deviceJSON.totalMemory = DeviceInfo.getTotalMemorySync();
    deviceJSON.totalDiskCapacity = DeviceInfo.getTotalDiskCapacitySync();
    deviceJSON.totalDiskCapacityOld = DeviceInfo.getTotalDiskCapacityOldSync();
    deviceJSON.freeDiskStorage = DeviceInfo.getFreeDiskStorageSync();
    deviceJSON.freeDiskStorageOld = DeviceInfo.getFreeDiskStorageOldSync();
    deviceJSON.batteryLevel = DeviceInfo.getBatteryLevelSync();
    deviceJSON.isAirplaneMode = DeviceInfo.isAirplaneModeSync();
    deviceJSON.isLandscape = DeviceInfo.isLandscapeSync();
    deviceJSON.isBatteryCharging = DeviceInfo.isBatteryChargingSync();
    deviceJSON.supportedAbis = DeviceInfo.supportedAbisSync();
    deviceJSON.getAvailableLocationProviders = DeviceInfo.getAvailableLocationProvidersSync();
    deviceJSON.isLocationEnabled = DeviceInfo.isLocationEnabledSync();
    deviceJSON.headphones = DeviceInfo.isHeadphonesConnectedSync();
    deviceJSON.bootloader = DeviceInfo.getBootloaderSync();
    deviceJSON.device = DeviceInfo.getDeviceSync();
    deviceJSON.display = DeviceInfo.getDisplaySync();
    deviceJSON.fingerprint = DeviceInfo.getFingerprintSync();
    deviceJSON.hardware = DeviceInfo.getHardwareSync();
    deviceJSON.host = DeviceInfo.getHostSync();
    deviceJSON.product = DeviceInfo.getProductSync()
    deviceJSON.type = DeviceInfo.getTypeSync();
    deviceJSON.baseOS = DeviceInfo.getBaseOsSync();
    deviceJSON.securityPatch = DeviceInfo.getSecurityPatchSync();
    deviceJSON.codename = DeviceInfo.getCodenameSync();
    deviceJSON.incremental = DeviceInfo.getIncrementalSync();
    deviceJSON.supported32BitAbis = DeviceInfo.supported32BitAbisSync();
    deviceJSON.supported64BitAbis = DeviceInfo.supported64BitAbisSync();
    deviceJSON.hasGms = DeviceInfo.hasGmsSync();
    deviceJSON.hasHms = DeviceInfo.hasHmsSync();
    deviceJSON.isKeyboardConnected = DeviceInfo.isKeyboardConnectedSync();
    deviceJSON.isMouseConnected = DeviceInfo.isMouseConnectedSync();
    deviceJSON.isWiredHeadphonesConnected = DeviceInfo.isWiredHeadphonesConnectedSync();
    deviceJSON.isBluetoothHeadphonesConnected = DeviceInfo.isBluetoothHeadphonesConnectedSync();
    deviceJSON.getSupportedMediaTypeListSync = DeviceInfo.getSupportedMediaTypeListSync();
    return deviceJSON;
  }

  async componentDidMount() {
    let deviceJSON = {};

    try {
      deviceJSON.manufacturer = await DeviceInfo.getManufacturer();
      deviceJSON.powerStatus = await DeviceInfo.getPowerState();                                  
      deviceJSON.buildId = await DeviceInfo.getBuildId();
      deviceJSON.isCameraPresent = await DeviceInfo.isCameraPresent();
      deviceJSON.deviceName = await DeviceInfo.getDeviceName();
      deviceJSON.usedMemory = await DeviceInfo.getUsedMemory()
      deviceJSON.instanceId = await DeviceInfo.getInstanceId();
      deviceJSON.installerPackageName = await DeviceInfo.getInstallerPackageName();
      deviceJSON.fontScale = await DeviceInfo.getFontScale();
      deviceJSON.firstInstallTime = await DeviceInfo.getFirstInstallTime();
      deviceJSON.lastUpdateTime = await DeviceInfo.getLastUpdateTime();
      deviceJSON.IpAddress = await DeviceInfo.getIpAddress();
      deviceJSON.ApiLevel = await DeviceInfo.getApiLevel();
      deviceJSON.carrier = await DeviceInfo.getCarrier();
      deviceJSON.totalMemory = await DeviceInfo.getTotalMemory();
      deviceJSON.totalDiskCapacity = await DeviceInfo.getTotalDiskCapacity();
      deviceJSON.totalDiskCapacityOld = await DeviceInfo.getTotalDiskCapacityOld();
      deviceJSON.freeDiskStorage = await DeviceInfo.getFreeDiskStorage();
      deviceJSON.freeDiskStorageOld = await DeviceInfo.getFreeDiskStorageOld();
      deviceJSON.batteryLevel = await DeviceInfo.getBatteryLevel();
      deviceJSON.isAirplaneMode = await DeviceInfo.isAirplaneMode();
      deviceJSON.isLandscape = await DeviceInfo.isLandscape();
      deviceJSON.isBatteryCharging = await DeviceInfo.isBatteryCharging();
      deviceJSON.supportedAbis = await DeviceInfo.supportedAbis();
      deviceJSON.isLocationEnabled = await DeviceInfo.isLocationEnabled();
      deviceJSON.getAvailableLocationProviders = await DeviceInfo.getAvailableLocationProviders();
      deviceJSON.headphones = await DeviceInfo.isHeadphonesConnected();
      deviceJSON.bootloader = await DeviceInfo.getBootloader();
      deviceJSON.device = await DeviceInfo.getDevice();
      deviceJSON.display = await DeviceInfo.getDisplay();
      deviceJSON.fingerprint = await DeviceInfo.getFingerprint();
      deviceJSON.hardware = await DeviceInfo.getHardware();
      deviceJSON.host = await DeviceInfo.getHost();
      deviceJSON.product = await DeviceInfo.getProduct();
      deviceJSON.type = await DeviceInfo.getType();
      deviceJSON.baseOS = await DeviceInfo.getBaseOs();
      deviceJSON.securityPatch = await DeviceInfo.getSecurityPatch();
      deviceJSON.codename = await DeviceInfo.getCodename();
      deviceJSON.incremental = await DeviceInfo.getIncremental();
      deviceJSON.isPinOrFingerprintSet = await DeviceInfo.isPinOrFingerprintSet();
      deviceJSON.supported32BitAbis = await DeviceInfo.supported32BitAbis();
      deviceJSON.supported64BitAbis = await DeviceInfo.supported64BitAbis();
      deviceJSON.hasGms = await DeviceInfo.hasGms();
      deviceJSON.hasHms = await DeviceInfo.hasHms();
      deviceJSON.isKeyboardConnected = await DeviceInfo.isKeyboardConnected();
      deviceJSON.isMouseConnected = await DeviceInfo.isMouseConnected();
      deviceJSON.isWiredHeadphonesConnected = await DeviceInfo.isWiredHeadphonesConnected();
      deviceJSON.isBluetoothHeadphonesConnected = await DeviceInfo.isBluetoothHeadphonesConnected();
      deviceJSON.getSupportedMediaTypeList = await DeviceInfo.getSupportedMediaTypeList();
    } catch (e) {
      console.log('Trouble getting device info ', e);
    }
    this.setState({asyncdeviceinfo: deviceJSON});
    this.forceUpdate();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActionExtensionHeader
          isActionExtension={this.props.isActionExtension}
        />
        {this.state.activeTab === 'constant' ? (
          <>
            <Text style={styles.welcome}>
              react-native-device-info example - constant info:
            </Text>
            <ScrollView>
              <Text style={styles.instructions} testID="constant tab contents">
                {JSON.stringify(this.state.constantdeviceinfo, null, '  ')}
              </Text>
            </ScrollView>
          </>
        ) : this.state.activeTab === 'sync' ? (
          <>
            <Text style={styles.welcome}>
              react-native-device-info example - sync info:
            </Text>
            <ScrollView>
              <Text style={styles.instructions} testID="sync tab contents">
                {JSON.stringify(this.state.syncdeviceinfo, null, '  ')}
              </Text>
            </ScrollView>
          </>
        ) : this.state.activeTab === 'async' ? (
          <>
            <Text style={styles.welcome}>
              react-native-device-info example - async info:
            </Text>
            <ScrollView>
              <Text style={styles.instructions} testID="async tab contents">
                {JSON.stringify(this.state.asyncdeviceinfo, null, '  ')}
              </Text>
            </ScrollView>
          </>
        ) 
        : null}

        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tab}
            testID="constant button"
            onPress={() => this.setState({activeTab: 'constant'})}>
            <Text
              style={[
                styles.tabText,
                this.state.activeTab === 'constant' && styles.boldText,
              ]}>
              Constant
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            testID="sync button"
            onPress={() => this.setState({activeTab: 'sync'})}>
            <Text
              style={[
                styles.tabText,
                this.state.activeTab === 'sync' && styles.boldText,
              ]}>
              Sync
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            testID="async button"
            onPress={() => this.setState({activeTab: 'async'})}>
            <Text
              style={[
                styles.tabText,
                this.state.activeTab === 'async' && styles.boldText,
              ]}>
              Async
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopColor: '#333333',
    borderTopWidth: 1,
  },
  tab: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#333333',
  },
  boldText: {
    fontWeight: '700',
  },
});
