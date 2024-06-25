import { TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';
import * as React from 'react';
import DeviceInfo from 'react-native-device-info';

export function DeviceInfoTest() {
    return (
        <TestSuite name="DeviceInfo">
            <TestCase.Logical
                itShould="DeviceInfo.getApiLevel"
                fn={({ expect }: any) => {
                    DeviceInfo.getApiLevel().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getApiLevelSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getApiLevelSync()).to.be.a('number');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getApplicationName"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getApplicationName()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBaseOs"
                fn={({ expect }: any) => {
                    DeviceInfo.getBaseOs().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBaseOsSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBaseOsSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBatteryLevel"
                fn={({ expect }: any) => {
                    DeviceInfo.getBatteryLevel().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBatteryLevelSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBatteryLevelSync()).to.be.a('number');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBootloader"
                fn={({ expect }: any) => {
                    DeviceInfo.getBootloader().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBootloaderSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBootloaderSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBuildId"
                fn={({ expect }: any) => {
                    DeviceInfo.getBuildId().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBrand"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBrand()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBuildIdSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBuildIdSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBuildNumber"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBuildNumber()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getBundleId"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getBundleId()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getCarrier"
                fn={({ expect }: any) => {
                    DeviceInfo.getCarrier().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getCarrierSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getCarrierSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getCodename"
                fn={({ expect }: any) => {
                    DeviceInfo.getCodename().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getCodenameSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getCodenameSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getDevice"
                fn={({ expect }: any) => {
                    DeviceInfo.getDevice().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getDeviceSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDeviceSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getDeviceId"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDeviceId()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getDeviceName"
                fn={({ expect }: any) => {
                    DeviceInfo.getDeviceName().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getDeviceNameSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDeviceNameSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getDeviceType"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDeviceType()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getDisplay"
                fn={({ expect }: any) => {
                    DeviceInfo.getDisplay().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getDisplaySync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getDisplaySync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFingerprint"
                fn={({ expect }: any) => {
                    DeviceInfo.getFingerprint().then((result) => {
                        expect((result)).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFingerprintSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFingerprintSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFirstInstallTime"
                fn={({ expect }: any) => {
                    DeviceInfo.getFirstInstallTime().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFirstInstallTimeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFirstInstallTimeSync()).to.be.a('number');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFontScale"
                fn={({ expect }: any) => {
                    DeviceInfo.getFontScale().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFontScaleSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFontScaleSync()).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFreeDiskStorage"
                fn={({ expect }: any) => {
                    DeviceInfo.getFreeDiskStorage().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFreeDiskStorageOld"
                fn={({ expect }: any) => {
                    DeviceInfo.getFreeDiskStorageOld().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFreeDiskStorageSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFreeDiskStorageSync()).to.be.a('number');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getFreeDiskStorageOldSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getFreeDiskStorageOldSync()).to.be.a('number');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getHardware"
                fn={({ expect }: any) => {
                    DeviceInfo.getHardware().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getHardwareSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getHardwareSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getHost"
                fn={({ expect }: any) => {
                    DeviceInfo.getHost().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getHostSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getHostSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getIncremental"
                fn={({ expect }: any) => {
                    DeviceInfo.getIncremental().then((result) => {
                        expect().to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getIncrementalSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getIncrementalSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getInstallerPackageName"
                fn={({ expect }: any) => {
                    DeviceInfo.getInstallerPackageName().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getInstallerPackageNameSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getInstallerPackageNameSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getInstanceId"
                fn={({ expect }: any) => {
                    DeviceInfo.getInstanceId().then((result) => {
                        expect().to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getInstanceIdSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getInstanceIdSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getIpAddress"
                fn={({ expect }: any) => {
                    DeviceInfo.getIpAddress().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getIpAddressSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getIpAddressSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getLastUpdateTime"
                fn={({ expect }: any) => {
                    DeviceInfo.getLastUpdateTime().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getLastUpdateTimeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getLastUpdateTimeSync()).to.be.a('number');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getManufacturer"
                fn={({ expect }: any) => {
                    DeviceInfo.getManufacturer().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getManufacturerSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getManufacturerSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getModel"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getModel()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getReadableVersion"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getReadableVersion()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getProduct"
                fn={({ expect }: any) => {
                    DeviceInfo.getProduct().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getSecurityPatch"
                fn={({ expect }: any) => {
                    DeviceInfo.getSecurityPatch().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getSecurityPatchSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSecurityPatchSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getSerialNumber"
                fn={({ expect }: any) => {
                    DeviceInfo.getSerialNumber().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getSerialNumberSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSerialNumberSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getSystemName"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSystemName()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getSystemVersion"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSystemVersion()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getTags"
                fn={({ expect }: any) => {
                    DeviceInfo.getTags().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getTagsSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getTagsSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getTotalDiskCapacity"
                fn={({ expect }: any) => {
                    DeviceInfo.getTotalDiskCapacity().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getTotalDiskCapacityOld"
                fn={({ expect }: any) => {
                    DeviceInfo.getTotalDiskCapacityOld().then((result) => {
                        expect(result).to.be.a('number');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getTotalDiskCapacitySync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getTotalDiskCapacitySync()).to.be.a('number');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getTotalDiskCapacityOldSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getTotalDiskCapacityOldSync()).to.be.a('number');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getType"
                fn={({ expect }: any) => {
                    DeviceInfo.getType().then((result) => {
                        expect(result).to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getTypeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getTypeSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getUniqueId"
                fn={({ expect }: any) => {
                    DeviceInfo.getUniqueId().then((result) => {
                        expect().to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getUniqueIdSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getUniqueIdSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getUserAgent"
                fn={({ expect }: any) => {
                    DeviceInfo.getUserAgent().then((result) => {
                        expect().to.be.a('string');
                    }).catch((error) => {
                        expect(error).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getUserAgentSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getUserAgentSync()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getVersion"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getVersion()).to.be.a('string');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.hasGms"
                fn={({ expect }: any) => {
                    DeviceInfo.hasGms().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.hasGmsSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.hasGmsSync()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.hasHms"
                fn={({ expect }: any) => {
                    DeviceInfo.hasHms().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.hasHmsSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.hasHmsSync()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isAirplaneMode"
                fn={({ expect }: any) => {
                    DeviceInfo.isAirplaneMode().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isAirplaneModeSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isAirplaneModeSync()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isBatteryCharging"
                fn={({ expect }: any) => {
                    DeviceInfo.isBatteryCharging().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isBatteryChargingSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isBatteryChargingSync()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isCameraPresent"
                fn={({ expect }: any) => {
                    DeviceInfo.isCameraPresent().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isCameraPresentSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isCameraPresentSync()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isEmulator"
                fn={({ expect }: any) => {
                    DeviceInfo.isEmulator().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isHeadphonesConnected"
                fn={({ expect }: any) => {
                    DeviceInfo.isHeadphonesConnected().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isHeadphonesConnectedSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isHeadphonesConnectedSync()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isWiredHeadphonesConnected"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isWiredHeadphonesConnected()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isBluetoothHeadphonesConnected"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isBluetoothHeadphonesConnected()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isLocationEnabled"
                fn={({ expect }: any) => {
                    DeviceInfo.isLocationEnabled().then((result) => {
                        expect(result).to.be.a('Boolean');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isLocationEnabledSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isLocationEnabledSync()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.isTablet"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.isTablet()).to.be.a('Boolean');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.supported32BitAbis"
                fn={({ expect }: any) => {
                    DeviceInfo.supported32BitAbis().then((result) => {
                        expect(result).to.be.a('Array');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.supported32BitAbisSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.supported32BitAbisSync()).to.be.a('Array');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.supported64BitAbis"
                fn={({ expect }: any) => {
                    DeviceInfo.supported64BitAbis().then((result) => {
                        expect(result).to.be.a('Array');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.supported64BitAbisSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.supported64BitAbisSync()).to.be.a('Array');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.supportedAbis"
                fn={({ expect }: any) => {
                    DeviceInfo.supportedAbis().then((result) => {
                        expect(result).to.be.a('Array');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.supportedAbisSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.supportedAbisSync()).to.be.a('Array');
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getSupportedMediaTypeList"
                fn={({ expect }: any) => {
                    DeviceInfo.getSupportedMediaTypeList().then((result) => {
                        expect(result).to.be.a('Array');
                    }).catch((err) => {
                        expect(err).to.not.be.undefined;
                    });
                }}
            />
            <TestCase.Logical
                itShould="DeviceInfo.getSupportedMediaTypeListSync"
                fn={({ expect }: any) => {
                    expect(DeviceInfo.getSupportedMediaTypeListSync()).to.be.a('Array');
                }}
            />
        </TestSuite>
    );
}