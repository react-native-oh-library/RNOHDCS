import { TestSuite,TestCase,Tester } from '@rnoh/testerino';
import React from 'react';
import DeviceInfo from '@react-native-oh-tpl/react-native-device-info/src/RNDeviceInfo';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

const RNDeviceInfoTest = () =>  {
    return (
    <Tester style={{ flex: 1, marginTop: 30 }}>
    <ScrollView>
            <TestCase
                itShould="DeviceInfo.getApiLevel"
                fn={({ expect }: any) => {
                    DeviceInfo.getApiLevel().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getApiLevelSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getApiLevelSync()).to.be.a('number');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getApplicationName"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getApplicationName()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getAvailableLocationProviders"
                fn={({ expect }: any) => {
                    DeviceInfo.getAvailableLocationProviders().then((result) => {
                        expect(result).to.be.a('object');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getAvailableLocationProvidersSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getAvailableLocationProvidersSync()).to.be.a('object');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBaseOs"
                fn={({ expect }: any) => {
                    DeviceInfo.getBaseOs().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBaseOsSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBaseOsSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBatteryLevel"
                fn={({ expect }: any) => {
                    DeviceInfo.getBatteryLevel().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBatteryLevelSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBatteryLevelSync()).to.be.a('number');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBootloader"
                fn={({ expect }: any) => {
                    DeviceInfo.getBootloader().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBootloaderSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBootloaderSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBrand"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBrand()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBuildId"
                fn={({ expect }: any) => {
                    DeviceInfo.getBuildId().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBuildIdSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBuildIdSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBuildNumber"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBuildNumber()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getBundleId"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBundleId()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getCarrier"
                fn={({ expect }: any) => {
                    DeviceInfo.getCarrier().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getCarrierSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getCarrierSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getCodename"
                fn={({ expect }: any) => {
                    DeviceInfo.getCodename().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getCodenameSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getCodenameSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getDevice"
                fn={({ expect }: any) => {
                    DeviceInfo.getDevice().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getDeviceSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDeviceSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getDeviceId"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDeviceId()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getDeviceName"
                fn={({ expect }: any) => {
                    DeviceInfo.getDeviceName().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getDeviceNameSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDeviceNameSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getDeviceType"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDeviceType()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getDisplay"
                fn={({ expect }: any) => {
                    DeviceInfo.getDisplay().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getDisplaySync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDisplaySync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFingerprint"
                fn={({ expect }: any) => {
                    DeviceInfo.getFingerprint().then((result) => {
                        expect((result)).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFingerprintSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFingerprintSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFirstInstallTime"
                fn={({ expect }: any) => {
                    DeviceInfo.getFirstInstallTime().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFirstInstallTimeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFirstInstallTimeSync()).to.be.a('number');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFontScale"
                fn={({ expect }: any) => {
                    DeviceInfo.getFontScale().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFontScaleSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFontScaleSync()).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFreeDiskStorage"
                fn={({ expect }: any) => {
                    DeviceInfo.getFreeDiskStorage().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFreeDiskStorageOld"
                fn={({ expect }: any) => {
                    DeviceInfo.getFreeDiskStorageOld().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFreeDiskStorageSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFreeDiskStorageSync()).to.be.a('number');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getFreeDiskStorageOldSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFreeDiskStorageOldSync()).to.be.a('number');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getHardware"
                fn={({ expect }: any) => {
                    DeviceInfo.getHardware().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getHardwareSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getHardwareSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getHost"
                fn={({ expect }: any) => {
                    DeviceInfo.getHost().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getHostSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getHostSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getIncremental"
                fn={({ expect }: any) => {
                    DeviceInfo.getIncremental().then((result) => {
                        expect().to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getIncrementalSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getIncrementalSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getInstallerPackageName"
                fn={({ expect }: any) => {
                    DeviceInfo.getInstallerPackageName().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getInstallerPackageNameSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getInstallerPackageNameSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getInstanceId"
                fn={({ expect }: any) => {
                    DeviceInfo.getInstanceId().then((result) => {
                        expect().to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getInstanceIdSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getInstanceIdSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getIpAddress"
                fn={({ expect }: any) => {
                    DeviceInfo.getIpAddress().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getIpAddressSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getIpAddressSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getLastUpdateTime"
                fn={({ expect }: any) => {
                    DeviceInfo.getLastUpdateTime().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getLastUpdateTimeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getLastUpdateTimeSync()).to.be.a('number');
                }}
            />
             <TestCase
                itShould="DeviceInfo.getMacAddress"
                fn={({ expect }: any) => {
                    DeviceInfo.getMacAddress().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getManufacturer"
                fn={({ expect }: any) => {
                    DeviceInfo.getManufacturer().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getManufacturerSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getManufacturerSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getPowerState"
                fn={({ expect }: any) => {
                    DeviceInfo.getPowerState().then((result) => {
                        expect(result).to.be.a('object');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getPowerStateSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getPowerStateSync()).to.be.a('object');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getModel"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getModel()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getReadableVersion"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getReadableVersion()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getProduct"
                fn={({ expect }: any) => {
                    DeviceInfo.getProduct().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.getSecurityPatch"
                fn={({ expect }: any) => {
                    DeviceInfo.getSecurityPatch().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getSecurityPatchSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSecurityPatchSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getSerialNumber"
                fn={({ expect }: any) => {
                    DeviceInfo.getSerialNumber().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getSerialNumberSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSerialNumberSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getSystemName"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSystemName()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getSystemVersion"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSystemVersion()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getTotalDiskCapacity"
                fn={({ expect }: any) => {
                    DeviceInfo.getTotalDiskCapacity().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getTotalDiskCapacityOld"
                fn={({ expect }: any) => {
                    DeviceInfo.getTotalDiskCapacityOld().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getTotalDiskCapacitySync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getTotalDiskCapacitySync()).to.be.a('number');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getTotalDiskCapacityOldSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getTotalDiskCapacityOldSync()).to.be.a('number');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getTotalMemory"
                fn={({ expect }: any) => {
                    DeviceInfo.getTotalMemory().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getTotalMemorySync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getTotalMemorySync()).to.be.a('number');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isLowRamDevice"
                fn={({ expect }: any) => {
                    DeviceInfo.isLowRamDevice().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getUsedMemory"
                fn={({ expect }: any) => {
                    DeviceInfo.getUsedMemory().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getType"
                fn={({ expect }: any) => {
                    DeviceInfo.getType().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="DeviceInfo.getTypeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getTypeSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getUniqueId"
                fn={({ expect }: any) => {
                    DeviceInfo.getUniqueId().then((result) => {
                        expect().to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.getUniqueIdSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getUniqueIdSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getUserAgent"
                fn={({ expect }: any) => {
                    DeviceInfo.getUserAgent().then((result) => {
                        expect().to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.getUserAgentSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getUserAgentSync()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getVersion"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getVersion()).to.be.a('string');
                }}
            />
            <TestCase
                itShould="DeviceInfo.hasGms"
                fn={({ expect }: any) => {
                    DeviceInfo.hasGms().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.hasGmsSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.hasGmsSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.hasHms"
                fn={({ expect }: any) => {
                    DeviceInfo.hasHms().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.hasHmsSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.hasHmsSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.hasNotch"
                fn={({ expect }: any) => {
                    DeviceInfo.hasNotch().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isAirplaneMode"
                fn={({ expect }: any) => {
                    DeviceInfo.isAirplaneMode().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isAirplaneModeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isAirplaneModeSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isKeyboardConnected"
                fn={({ expect }: any) => {
                    DeviceInfo.isKeyboardConnected().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isMouseConnected"
                fn={({ expect }: any) => {
                    DeviceInfo.isMouseConnected().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isMouseConnectedSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isMouseConnectedSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isBatteryCharging"
                fn={({ expect }: any) => {
                    DeviceInfo.isBatteryCharging().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isBatteryChargingSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isBatteryChargingSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isCameraPresent"
                fn={({ expect }: any) => {
                    DeviceInfo.isCameraPresent().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isCameraPresentSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isCameraPresentSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isHeadphonesConnected"
                fn={({ expect }: any) => {
                    DeviceInfo.isHeadphonesConnected().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isHeadphonesConnectedSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isHeadphonesConnectedSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isWiredHeadphonesConnected"
                fn={({ expect }: any) => {
                    DeviceInfo.isWiredHeadphonesConnected().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isWiredHeadphonesConnectedSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isWiredHeadphonesConnectedSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isBluetoothHeadphonesConnected"
                fn={({ expect }: any) => {
                    DeviceInfo.isBluetoothHeadphonesConnected().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isBluetoothHeadphonesConnectedSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isBluetoothHeadphonesConnectedSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isLandscape"
                fn={({ expect }: any) => {
                    DeviceInfo.isLandscape().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isLandscapeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isLandscapeSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isLocationEnabled"
                fn={({ expect }: any) => {
                    DeviceInfo.isLocationEnabled().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isLocationEnabledSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isLocationEnabledSync()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.isPinOrFingerprintSet"
                fn={({ expect }: any) => {
                    DeviceInfo.isPinOrFingerprintSet().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.isTablet"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isTablet()).to.be.a('Boolean');
                }}
            />
            <TestCase
                itShould="DeviceInfo.supported32BitAbis"
                fn={({ expect }: any) => {
                    DeviceInfo.supported32BitAbis().then((result) => {
                        expect(result).to.be.a('Array');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.supported32BitAbisSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.supported32BitAbisSync()).to.be.a('Array');
                }}
            />
            <TestCase
                itShould="DeviceInfo.supported64BitAbis"
                fn={({ expect }: any) => {
                    DeviceInfo.supported64BitAbis().then((result) => {
                        expect(result).to.be.a('Array');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.supported64BitAbisSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.supported64BitAbisSync()).to.be.a('Array');
                }}
            />
            <TestCase
                itShould="DeviceInfo.supportedAbis"
                fn={({ expect }: any) => {
                    DeviceInfo.supportedAbis().then((result) => {
                        expect(result).to.be.a('Array');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.supportedAbisSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.supportedAbisSync()).to.be.a('Array');
                }}
            />
            <TestCase
                itShould="DeviceInfo.getSupportedMediaTypeList"
                fn={({ expect }: any) => {
                    DeviceInfo.getSupportedMediaTypeList().then((result) => {
                        expect(result).to.be.a('Array');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase
                itShould="DeviceInfo.getSupportedMediaTypeListSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSupportedMediaTypeListSync()).to.be.a('Array');
                }}
            />
        </ScrollView>
        </Tester>
    );
};
export default RNDeviceInfoTest
