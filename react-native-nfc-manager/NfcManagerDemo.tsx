/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 * Copyright (c) Huawei Technologies Co., Ltd. 2023-2023. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet,ScrollView,Button,Alert} from 'react-native';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import NfcManager,{NfcTech,NfcEvents,NfcError,RegisterTagEventOpts,NfcAdapter} from 'react-native-nfc-manager';
import { boolean, number } from 'yargs';

export default function NfcManagerDemo() {

  const [text, setText] = useState('');
  const [isRegister,setRegister] = useState(false);
  
  const [blockIndex , setBlock] = useState<ArrayLike<number>>();

  useEffect(() => {
    NfcManager.start();
  })

  const handleException = (ex:any) => {
    if (ex instanceof NfcError.UserCancel) {
      // bypass
    } else if (ex instanceof NfcError.Timeout) {
      //Alert.alert('NFC Session Timeout');
    } else {
      console.warn(ex);
      //Alert.alert('NFC Error', `${ex.message}`);
    }
  };

  const onSupported = async () => {
    const supported = await NfcManager.isSupported();
    setText('设备是否支持nfc:'+supported);
    return supported;
  }

  const isEnabled = async() => {
    const isEnabled = await NfcManager.isEnabled();
    setText('nfc是否已开启:'+isEnabled); 
    return isEnabled;
  }

  const goToNfcSetting = async() => {
    const isOpen = await NfcManager.goToNfcSetting();
    setText('打开nfc设置中心：'+isOpen);
    return isOpen
  }

 const scanTag = async(tech: NfcTech,option?:RegisterTagEventOpts) => {
    let nfcTech = null
    try {
      if (option!== null) {
        nfcTech = await NfcManager.requestTechnology(tech,option);
      } else {
        nfcTech = await NfcManager.requestTechnology(tech);
      }
    } catch (ex) {
      //console.info('aaaaaa'+ ex);
      handleException(ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
    if(!isRegister) {
      setText('卡片扫描返回结果：' + nfcTech);
    }
    return nfcTech === null ? false:true;
  }

  const getTag = async ()=> {
    let tagInfo = null
    try {
      await NfcManager.requestTechnology(NfcTech.NfcB);
      tagInfo  = await NfcManager.getTag();
    } catch (ex) {
      handleException(ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
    setText(JSON.stringify(tagInfo));
    return tagInfo;
 }


 const getBackgroundTag = async ()=> {
  let background = await NfcManager.getBackgroundTag();
  setText(JSON.stringify(background));
  return background;
 }

 const clearBackgroundTag = async ()=> {
  await NfcManager.clearBackgroundTag();
  let background = await NfcManager.getBackgroundTag();

  console.info('background ===' + background)
  return background;
 }

 const registerStateChanged = async () => {
  NfcManager.setEventListener(NfcEvents.StateChanged, (tag:any) => {
    setText("NfcManageStateChanged == " + JSON.stringify(tag));
  })
 }

 const registerDiscoverTag = async () => {
  NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag:any) => {
    setText("NfcManagerDiscoverTag == " + JSON.stringify(tag));
  })
  setRegister(true);
 }

 
 const registerDiscoverBackgroundTag = async () => {
  NfcManager.setEventListener(NfcEvents.DiscoverBackgroundTag,(tagInfo:any) => {
    setText("NfcManagerDiscoverBackgroundTag == " + JSON.stringify(tagInfo));
  })
 }

 const unRegisterTagStateChanged = async () => {
  NfcManager.setEventListener(NfcEvents.StateChanged,null);
  NfcManager.setEventListener(NfcEvents.DiscoverTag,null);
  NfcManager.setEventListener(NfcEvents.DiscoverBackgroundTag,null);
  setRegister(false);
  setText(' ');
 }

 //将NDEF Message数据对象写入标签
 const writeNdefMessage = async () => {
  let isWrite:boolean= true
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    let message = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43];
    await NfcManager.ndefHandler.writeNdefMessage(message,{reconnectAfterWrite:true});
  } catch (ex) {
    handleException(ex);
    isWrite = false
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText('ndef writeNdef Promise success.')
  return isWrite
 }

 const getNdefMessage = async () => {
  let tag = null
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    tag = await NfcManager.ndefHandler.getNdefMessage();
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText('getNdefMessage == ' + JSON.stringify(tag));
  return tag
 }

 const makeReadOnly = async () => {
  let isMakeReadOnly = true;
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    await NfcManager.ndefHandler.makeReadOnly();
  } catch (ex) {
    handleException(ex);
    isMakeReadOnly = false;
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText('makeReadOnly success');
 }

 const getNdefStatus = async () => {
  let tag = null;
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    tag = await NfcManager.ndefHandler.getNdefStatus();
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText('getNdefStatus == ' + JSON.stringify(tag));
  return tag;
 }

 const getCachedNdefMessageAndroid = async() => {
  let tag = null;
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    tag = await NfcManager.ndefHandler.getCachedNdefMessageAndroid();
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText('getCachedNdefMessageAndroid == ' + JSON.stringify(tag));
  return tag;
 }

 const nfcATransceive = async () => {
  let byte:number[] = [];
  try {
    await NfcManager.requestTechnology(NfcTech.NfcA);
    let cmdData = [0x01, 0x02, 0x03, 0x04]; // change the raw data to be correct.
    byte = await NfcManager.isoDepHandler.transceive(cmdData);
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  return byte;
 }

 const isoDepTransceive = async () => {
  let byte:number[] = [];
  try {
    await NfcManager.requestTechnology(NfcTech.IsoDep);
    let cmdData = [0x01, 0x02, 0x03, 0x04]; // change the raw data to be correct.
    byte = await NfcManager.isoDepHandler.transceive(cmdData);
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  return byte;
 }

 const nfcVTransceive = async () => {
  let byte:number[] = [];
  try {
    await NfcManager.requestTechnology(NfcTech.NfcV);
    let cmdData = [0x01, 0x02, 0x03, 0x04]; // change the raw data to be correct.
    byte = await NfcManager.nfcVHandler.transceive(cmdData);
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  return byte;
 }

 const getMaxTransceiveLength = async () => {
  let transceiveLength  = -1
  try {
    await NfcManager.requestTechnology(NfcTech.IsoDep);
    transceiveLength = await NfcManager.getMaxTransceiveLength();
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText('getMaxTransceiveLength == ' + transceiveLength)
  return transceiveLength;
 }


 const getLaunchTagEvent = async () => {
  let wantInfo = null
  try {
    wantInfo=  await NfcManager.getLaunchTagEvent();
  } catch (ex) {
    handleException(ex);
  }
  return wantInfo;
}

const setTimeout = async () => {
  let isTimeout = true
  try {
    await NfcManager.requestTechnology(NfcTech.IsoDep);
    await NfcManager.setTimeout(7000);
  } catch (ex) {
    handleException(ex);
    isTimeout = false
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  return isTimeout;
}

const connect = async () => {
  let isConnect = true;
  try {
  await NfcManager.connect([NfcTech.IsoDep]);
  }catch(ex) {
    handleException(ex);
    isConnect = true
  }
  setText('IsoDep tag connect success');
  return isConnect
}

const close = async () => {
  let isClose = true;
  try {
  await NfcManager.close();
  }catch(ex) {
    handleException(ex);
    isClose = false
  }
  return isClose
}


const mifareClassicAuthenticateA = async() => {
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    let key = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06];  
    let blockIndex = 1;
   await NfcManager.mifareClassicHandlerAndroid.mifareClassicAuthenticateA(blockIndex,key);
  } catch (ex) {
    handleException(ex);
    return false;
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareClassicAuthenticateA success")
  return true;
}

const mifareClassicAuthenticateB = async() => {
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    let key = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06];  
    let blockIndex = 1;
    await NfcManager.mifareClassicHandlerAndroid.mifareClassicAuthenticateB(blockIndex,key);
  } catch (ex) {
    handleException(ex);
    return false
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareClassicAuthenticateB success")
  return true;
}


const mifareClassicSectorToBlock = async () => {
  let number:ArrayLike<number> = []
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    let sectorIndex = 1;
    number = await NfcManager.mifareClassicHandlerAndroid.mifareClassicSectorToBlock(sectorIndex);
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setBlock(number);
  setText("SectorToBlock == " +  JSON.stringify(number))
  return number;
}


const mifareClassicReadBlock = async(blockIndex:ArrayLike<number>) => {
  let number = null
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    number = await NfcManager.mifareClassicHandlerAndroid.mifareClassicReadBlock(blockIndex);
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("customReadBlockMifareClassic == " +  number)
  return number
}


const mifareClassicWriteBlock = async(blockIndex:ArrayLike<number>) => {
  let isWriteBlock = true
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    let rawData = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A,
      0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10];
     await NfcManager.mifareClassicHandlerAndroid.mifareClassicWriteBlock(blockIndex,rawData);
  } catch (ex) {
    handleException(ex);
    isWriteBlock = false
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("customReadBlockMifareClassic == " + isWriteBlock)
  return isWriteBlock
}


const mifareClassicIncrementBlock = async(blockIndex:ArrayLike<number>) => {
  let isIncrementBlock  = true
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    let value = 0x20; // change it to be correct data.
    await NfcManager.mifareClassicHandlerAndroid.mifareClassicIncrementBlock(blockIndex,value);
  } catch (ex) {
    handleException(ex);
    isIncrementBlock = false
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareClassicIncrementBlock == " +  isIncrementBlock)
  return isIncrementBlock;
}

const mifareClassicDecrementBlock = async (blockIndex:ArrayLike<number>) => {
  let isDecrementBlock = true
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    let value = 0x20; // change it to be correct data.
    await NfcManager.mifareClassicHandlerAndroid.mifareClassicDecrementBlock(blockIndex,value);
    isDecrementBlock = false;
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareClassicDecrementBlock == " +  isDecrementBlock)
  return isDecrementBlock
}


const mifareClassicTransferBlock = async (blockIndex:ArrayLike<number>) => {
  let isTransferBlock = true
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    await NfcManager.mifareClassicHandlerAndroid.mifareClassicTransferBlock(blockIndex);
  } catch (ex) {
    handleException(ex);
    isTransferBlock = false;
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareClassicDecrementBlock == " +  isTransferBlock)
  return isTransferBlock
}

const mifareClassicGetSectorCount = async() => {
  let number = null
  try {
    await NfcManager.requestTechnology(NfcTech.MifareClassic);
    number = await NfcManager.mifareClassicHandlerAndroid.mifareClassicGetSectorCount();
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("customReadBlockMifareClassic == " +  number)
  return number
}

const mifareUltralightReadPages = async() => {
  let number = null
  try {
    await NfcManager.requestTechnology(NfcTech.MifareUltralight);
    let pageIndex = 1; // change it to be correct index.
    number = await NfcManager.mifareUltralightHandlerAndroid.mifareUltralightReadPages(pageIndex);
  } catch (ex) {
    handleException(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareUltralightReadPages == " +  number)
  return number
}

const mifareUltralightWritePage = async() => {
  let isWritePage = true
  try {
    await NfcManager.requestTechnology(NfcTech.MifareUltralight);
    let pageIndex = 1; // change it to be correct index.
    let rawData = [0x01, 0x02, 0x03, 0x04]; // MUST be 4 bytes, change it to be correct raw data.
    await NfcManager.mifareUltralightHandlerAndroid.mifareUltralightWritePage(pageIndex,rawData);
  } catch (ex) {
    handleException(ex);
    isWritePage = false;
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareUltralightWritePage == " +  isWritePage)
  return isWritePage
}

const formatNdef = async() => {
  let isFormatNdef = true
  try {
    await NfcManager.requestTechnology(NfcTech.NdefFormatable);
    let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43]; // MUST be 4 bytes, change it to be correct raw data.
    await NfcManager.ndefFormatableHandlerAndroid.formatNdef(rawData,{readOnly:false});
  } catch (ex) {
    handleException(ex);
    isFormatNdef = false;
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareUltralightWritePage == " +  isFormatNdef)
  return isFormatNdef
}

const formatReadOnly = async() => {
  let isFormatNdef = true
  try {
    await NfcManager.requestTechnology(NfcTech.NdefFormatable);
    let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43]; // MUST be 4 bytes, change it to be correct raw data.
    await NfcManager.ndefFormatableHandlerAndroid.formatNdef(rawData,{readOnly:true});
  } catch (ex) {
    handleException(ex);
    isFormatNdef = false;
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
  setText("mifareUltralightWritePage == " +  isFormatNdef)
  return isFormatNdef
}
// Ndef = 'Ndef',
// NfcA = 'NfcA',
// NfcB = 'NfcB',
// NfcF = 'NfcF',
// NfcV = 'NfcV',
// IsoDep = 'IsoDep',
// MifareClassic = 'MifareClassic',
// MifareUltralight = 'MifareUltralight',
// MifareIOS = 'mifare',
// Iso15693IOS = 'iso15693',
// FelicaIOS = 'felica',
// NdefFormatable = 'NdefFormatable',
const RequestTechnologyProps = [
  {
    key:"function:requestTechnology(NfcTech.Ndef)(扫描设备,将卡片放置在手机背后进行扫描，设置标签Ndef,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.Ndef,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.NfcA)(扫描设备,将卡片放置在手机背后进行扫描，设置标签NfcA,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.NfcA,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.NfcB)(扫描设备,将卡片放置在手机背后进行扫描，设置标签NfcB,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.NfcB,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.NfcF)(扫描设备,将卡片放置在手机背后进行扫描，设置标签NfcF,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.NfcF,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.NfcV)(扫描设备,将卡片放置在手机背后进行扫描，设置标签NfcV,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.NfcV,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.IsoDep)(扫描设备,将卡片放置在手机背后进行扫描，设置标签IsoDep,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.IsoDep,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.MifareClassic)(扫描设备,将卡片放置在手机背后进行扫描，设置标签MifareClassic,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.MifareClassic,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.MifareUltralight)(扫描设备,将卡片放置在手机背后进行扫描，设置标签MifareUltralight,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.MifareUltralight,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.NdefFormatable)(扫描设备,将卡片放置在手机背后进行扫描，设置标签NdefFormatable,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.NdefFormatable,
    }
  },
  {
    key:"function:requestTechnology(NfcTech.IsoDep,{isReaderModeEnabled:true})(扫描设备,将卡片放置在手机背后进行扫描，设置标签IsoDep,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.IsoDep,
       option:{
        isReaderModeEnabled:true,
       }
    }
  },
  {
    key:"function:requestTechnology(NfcTech.IsoDep,{isReaderModeEnabled:false})(扫描设备,将卡片放置在手机背后进行扫描，设置标签IsoDep,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.IsoDep,
       option:{
        alertMessage:'Ready to write some NDEF',
        isReaderModeEnabled:false,
       }
    }
  },
  {
    key:"function:requestTechnology(NfcTech.IsoDep,{readerModeFlags:NfcAdapter.FLAG_READER_NFC_B})(扫描设备,将卡片放置在手机背后进行扫描，设置标签IsoDep,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.IsoDep,
       option:{
        readerModeFlags:NfcAdapter.FLAG_READER_NFC_B
       }
    }
  },
  {
    key:"function:requestTechnology(NfcTech.IsoDep,{readerModeFlags:NfcAdapter.FLAG_READER_NFC_A})(扫描设备,将卡片放置在手机背后进行扫描，设置标签IsoDep,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.IsoDep,
       option:{
        readerModeFlags:NfcAdapter.FLAG_READER_NFC_A
       }
    }
  },
  {
    key:"function:requestTechnology(NfcTech.IsoDep,{readerModeFlags:NfcAdapter.FLAG_READER_NFC_F})(扫描设备,将卡片放置在手机背后进行扫描，设置标签IsoDep,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.IsoDep,
       option:{
        readerModeFlags:NfcAdapter.FLAG_READER_NFC_F
       }
    }
  },
  {
    key:"function:requestTechnology(NfcTech.IsoDep,{readerModeFlags:NfcAdapter.FLAG_READER_NFC_V})(扫描设备,将卡片放置在手机背后进行扫描，设置标签IsoDep,如果卡片支持该标签就返回结果，不支持返回null",
    value: {
       tech: NfcTech.IsoDep,
       option:{
        readerModeFlags:NfcAdapter.FLAG_READER_NFC_V
       }
    }
  },
]


 return (
   <ScrollView>
     <Tester>
      <TestSuite name='NfcManagerDemo'>
         <TestCase itShould="Scan a Tag result:">
          <View>
            <Text style={styles.baseText}>
              返回结果(进行卡片操作时，请先通过requestTechnology()扫描设备，获取当前卡片支持的标签):
            </Text>
            <Text style={styles.inputArea}>
              {text}
            </Text>
          </View>
        </TestCase>
       <TestCase itShould="function:isSupported()(该接口判断设备是否支持nfc)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
              let isSupported = await onSupported();
              setState(isSupported);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.be.eq(true);
          }}
        />
        <TestCase itShould="function:isEnabled()(该接口判断nfc是否开启，如果未开启可使用goToNfcSetting()打开nfc设置界面进行开启)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
              let enable = await isEnabled();
              setState(enable);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.be.eq(true);
          }}
        />
        <TestCase itShould="function:goToNfcSetting()(打开nfc设置中心)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
              let isOpen = await goToNfcSetting();
              setState(isOpen);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.be.eq(true);
          }}
        />
        {RequestTechnologyProps.map((item) => {
            return (
              <TestCase  itShould={item.key}  key={item.key} initialState={null as any} arrange={({ setState }) => (
                <Button title='运行' color='#841584' onPress={async () => {
                  let isScan  =  await scanTag(item.value.tech,item.value.option);
                  console.info('RequestTechnologyProps == ' + isScan);
                  setState(isScan);
               }}>
               </Button>
              )} 
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
              />
            );
        })}
      <TestCase itShould="function:getTag()(获取扫描卡片支持标签信息)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            let tag  =  await getTag();
            setState(tag);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.have.property('id')
          }}
        />
          <TestCase itShould="function:isoDepTransceive()(发送指令到Tag上,指令代码：[0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43]，卡片不一定会响应这个指令)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let byte:number[] =  await isoDepTransceive();
            setState(byte.length > 0 ? true :false);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:nfcATransceive()(发送指令到Tag上,指令代码：[0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43]，卡片不一定会响应这个指令)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let byte =  await nfcATransceive();
            setState(byte.length > 0 ? true :false);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:nfcVTransceive()(发送指令到Tag上,指令代码：[0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43]，卡片不一定会响应这个指令)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let byte =  await nfcVTransceive();
            setState(byte.length > 0 ? true :false);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:getBackgroundTag()(后台启动nfc,退出当前应用，将卡片放置在手机后面，会出现发现nfc应用弹框，点击弹框进入当前应用)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            let tag  =  await getBackgroundTag();
            setState(tag);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.have.property('id')
          }}
        />
        <TestCase itShould="function:clearBackgroundTag()(清除后台启动nfc获取的tag信息)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            let tag  =  await clearBackgroundTag();
            setState(tag === null ? true :false);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:registerTagStateChanged()(注册NFC开关状态事件)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            await registerStateChanged();
            setState(true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:registerDiscoverTag()(注册nfc扫描事件)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            await registerDiscoverTag();
            setState(true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:registerDiscoverBackgroundTag()(注册nfc后台扫描事件)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            await registerDiscoverBackgroundTag();
            setState(true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
       <TestCase itShould="function:unRegisterTagStateChanged()(取消NFC开关状态事件)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            await unRegisterTagStateChanged();
            setState(true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:writeNdefMessage()(将NDEF Message数据对象写入标签,写入数据[0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43]，卡片不一定允许你写入不相干信息)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            let iswrite = await writeNdefMessage();
            setState(iswrite);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:getNdefMessage()(获取发现NDEF标签时，从标签读取的Message)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            let tag = await getNdefMessage();
            setState(tag);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.have.property('type')
          }}
        />
       <TestCase itShould="function:makeReadOnly()(将NDEF标签设置为只读)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            await makeReadOnly();
            setState(true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true);
          }}
        />
        <TestCase itShould="function:getNdefStatus()(NDEF标签信息)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let tag =  await getNdefStatus() ;
           console.info('tag ==== ' + tag)
            setState(tag);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.have.property('status')
          }}
        />
       <TestCase itShould="function:getCachedNdefMessageAndroid()(NDEF标签信息)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let tag =  await getCachedNdefMessageAndroid();
            setState(tag);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.have.property('id')
          }}
        />
    
      <TestCase itShould="function:getLaunchTagEvent()(后台启动nfc,获取want信息)"  initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let wantInfo =  await getLaunchTagEvent();
            setState(wantInfo);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.have.property('id')
          }}
        />
        <TestCase itShould="function:getMaxTransceiveLength()(查询可以发送到标签的最大数据长度)"  initialState={-1} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let length =  await getMaxTransceiveLength();
            setState(length);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.not.eql(-1)
          }}
        />
        <TestCase itShould="function:setTimeout()(设置发送数据到Tag的等待超时时间)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isTimeout =  await setTimeout();
            setState(isTimeout);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:connect()(后台启动nfc,可以使用connect与标签建立连接)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            await connect();
            setState(true)
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:close()(后台启动nfc,可以使用connect与标签建立连接后，可以通过close进行关闭)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            await close();
            setState(true)
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
      <TestCase itShould="function:mifareClassicAuthenticateA()(使用密钥对扇区进行身份验证，只有身份验证成功的扇区可以进行操作，密钥类型为A)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isAuthenticateA =   await mifareClassicAuthenticateA();
            setState(isAuthenticateA)
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
       <TestCase itShould="function:mifareClassicAuthenticateB()(使用密钥对扇区进行身份验证，只有身份验证成功的扇区可以进行操作，密钥类型为B)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            let isAuthenticateB =  await mifareClassicAuthenticateB();
            setState(isAuthenticateB)
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />

        <TestCase itShould="function:mifareClassicSectorToBlock()(获取特定扇区的第一个块的序号)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            let number =  await mifareClassicSectorToBlock();
            setState(number.length === 0 ? false : true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />

        <TestCase itShould="function:mifareClassicGetSectorCount()(获取指定扇区中的块数)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
            let number =  await mifareClassicGetSectorCount();
            setState(number === null ? false : true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
       <TestCase itShould="function:mifareClassicReadBlock()(读取标签中一个块存储的内容，一个块大小为16字节)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let number = await mifareClassicReadBlock(blockIndex as ArrayLike<number>);
            setState(number === null ? false : true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
       <TestCase itShould="function:mifareClassicWriteBlock()(向标签中一个块存储写入内容，一个块大小为16字节)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isWriteBlock = await mifareClassicWriteBlock(blockIndex as ArrayLike<number>);
            setState(isWriteBlock);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:mifareClassicIncrementBlock()(对指定块的内容，增加指定的数值，并将结果存储在内部传输缓冲器中)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isIncrementBlock = await mifareClassicIncrementBlock(blockIndex as ArrayLike<number>);
            setState(isIncrementBlock);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />

       <TestCase itShould="function:mifareClassicDecrementBlock()(对指定块的内容，减少指定的数值，并将结果存储在内部传输缓冲器中)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isDecrementBlock = await mifareClassicDecrementBlock(blockIndex as ArrayLike<number>);
            setState(isDecrementBlock);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        
       <TestCase itShould="function:mifareClassicTransferBlock()(将临时寄存器的值转移到指定的块)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isTransferBlock = await mifareClassicTransferBlock(blockIndex as ArrayLike<number>);
            setState(isTransferBlock);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
       <TestCase itShould="function:mifareUltralightReadPages()(读取标签的4页数据，共16字节的数据。每个页面数据大小为4字节)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let number = await mifareUltralightReadPages();
            setState(number === null ? false : true);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:mifareUltralightWritePage()(写入一页数据，数据大小为4字节)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isWritePage = await mifareUltralightWritePage();
            setState(isWritePage);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
        <TestCase itShould="function:formatNdef()(将标签格式化为NDEF标签，将NDEF消息写入NDEF标签)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isFormatNdef = await formatNdef();
            setState(isFormatNdef);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
       <TestCase itShould="function:formatReadOnly()(将标签格式化为NDEF标签，然后将NDEF消息写入NDEF标签，之后将标签设置为只读)"  initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async () => {
           let isFormatNdef = await formatReadOnly();
            setState(isFormatNdef);
          }}>
          </Button>
          )}
          assert={({ expect, state }) => {
            expect(state).to.eql(true)
          }}
        />
      </TestSuite>
     </Tester>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F1F3F5',
  }, 
  baseText: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:16
  },

  inputArea: {
    width:'100%',
    height:100,
    borderColor:'#000000',
    marginTop:8,
    justifyContent:'center',
    alignItems:'center',
  },
});