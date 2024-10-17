import {StyleSheet,View,Text,Button, ScrollView} from 'react-native';
import React ,{useState}from 'react';
const RNMd5 =  require('react-native-md5')
import {TestSuite,Tester,TestCase} from '@rnoh/testerino';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: '600',
      },
      titleStyle: {
        fontSize: 16,
        fontWeight: '500',
      },
      consta:{ backgroundColor: '#F5FCFF' },
});
export function Md5TestExample() {
    
    const [hmd5,set_hmd5] = useState('123');
    const [bmd5,set_bmd5] = useState('456');
    const [smd5,set_smd5] = useState('789');
    
    const [hmd5_h,set_hmd5_h] = useState('123');
    const [bmd5_h,set_bmd5_h] = useState('456');
    const [smd5_h,set_smd5_h] = useState('789');

    const [hmd5_h_key,set_hmd5_h_key] = useState('qwer');
    const [bmd5_h_key,set_bmd5_h_key] = useState('qwer');
    const [smd5_h_key,set_smd5_h_key] = useState('qwer');

    function generateRandomString(length:number) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
    }
    
    return(
      <Tester>
        <ScrollView>
        <TestSuite name = "md5">
        <TestCase
            itShould="hex_md5计算"
            fn={({expect}) => { expect(RNMd5.hex_md5('asd44287/**-+asd2+26..3d65qase')).to.be.eq('a8c1c3e4a5ecda5bb739c1edc73e4cfa'); }}
          />
          <TestCase
            itShould="b64_md5计算"
            fn={({expect}) => { expect(RNMd5.b64_md5('sadad22gg54235r__024ed23')).to.be.eq('DwhUxmnowtBWe05pOdmUwA'); }}
          />
          <TestCase
            itShould="str_md5计算"
            fn={({expect}) => { expect(RNMd5.str_md5('154ssdas2d')).to.be.not.NaN; }}
          />
          <TestCase
            itShould="hex_hmac_md5计算"
            fn={({expect}) => { expect(RNMd5.hex_hmac_md5('154sasdsadawdawd2gf23e1q2d','dw2d2-d*8295qdsd')).to.be.eq('b5fba631287e9604e8cf399191a68086'); }}
          />
          <TestCase
            itShould="b64_hmac_md5计算"
            fn={({expect}) => {
              expect(RNMd5.b64_hmac_md5('154awdasda23123sd','ad62d+36d+395d')).to.be.eq('g2WH6DOS1KEUw3IylhQu/A');
            }}
          />
          <TestCase
            itShould="str_hmac_md5计算"
            fn={({expect}) => {
              expect(RNMd5.str_hmac_md5('154sddwadwdsadasdw','asd653+2*3/-*8t95wejutyjuy')).to.be.not.NaN;
            }}
          />


          <TestCase itShould='hex_md5方法'>
            <Text>明文:{hmd5} 密文:{RNMd5.hex_md5(hmd5)} <Button title = "随机明文" onPress={() => { set_hmd5(generateRandomString(10)) }}></Button></Text>
          </TestCase>

          <TestCase itShould='b64_md5方法'>
            <Text>明文:{bmd5} 密文:{RNMd5.b64_md5(bmd5)} <Button title = "随机明文" onPress={() => { set_bmd5(generateRandomString(10)) }}></Button></Text>
          </TestCase>
        
          <TestCase itShould='str_md5方法'>
            <Text>明文:{smd5} 密文:{RNMd5.str_md5(smd5)} <Button title = "随机明文" onPress={() => { set_smd5(generateRandomString(10)) }}></Button></Text>
          </TestCase>
          
          <TestCase itShould='hex_hmac_md5方法'>
            <Text>明文:{hmd5_h} key:{hmd5_h_key} 密文:{RNMd5.hex_hmac_md5(hmd5_h,hmd5_h_key)} <Button title = "随机明文" onPress={() => { set_hmd5_h(generateRandomString(10));set_hmd5_h_key(generateRandomString(10)) }}></Button></Text>
          </TestCase> 

          <TestCase itShould='b64_hmac_md5方法'>
            <Text>明文:{bmd5_h} key:{bmd5_h_key} 密文:{RNMd5.b64_hmac_md5(bmd5_h,bmd5_h_key)} <Button title = "随机明文" onPress={() => { set_bmd5_h(generateRandomString(10));set_bmd5_h_key(generateRandomString(10)) }}></Button></Text>
          </TestCase>
           
          <TestCase itShould='str_hmac_md5方法'>
            <Text>明文:{smd5_h} key:{smd5_h_key} 密文:{RNMd5.str_hmac_md5(smd5_h,smd5_h_key)} <Button title = "随机明文" onPress={() => { set_smd5_h(generateRandomString(10));set_smd5_h_key(generateRandomString(10)) }}></Button></Text>  
          </TestCase>
            <View style={{height:200}}></View>

        </TestSuite>
        </ScrollView>
   
      </Tester>
    );
}