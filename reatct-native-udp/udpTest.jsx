/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { useState,} from 'react';
import { StyleSheet,Button,TextInput,Alert} from 'react-native';
import {TestSuite, Tester} from '@rnoh/testerino';
import {TestCase} from '../../components';
import dgram from 'react-native-udp';


export function UDPTest() {
    
    const [udpA, setUDPA] = useState(null);
    const [udpB, setUDPB] = useState(null);
    const [aPort,setAPort] = useState(null);
    const [bPort,setBPort] = useState(null);
    const [membershipPort,setMPort] = useState(null);

    const [aMessage,setASendMessage] = useState('');
    const [bMessage,setBSendMessage] = useState('');

    const [aReciveTex, setARText] = useState('');
    const [bReciveTex, setBRText] = useState('');
    

    const createAndBindUDP = () =>{
        let a = dgram.createSocket('udp4');
        let aPort = randomPort();
        a.bind(aPort, function(err) {
            if (err) throw err;
        });
        
        let b = dgram.createSocket('udp4');
        let bPort =randomPort();
        b.bind(bPort, function(err) {
            if (err) throw err;
        });
        a.on('message', function(data, rinfo) {
            var str = String.fromCharCode.apply(null, new Uint8Array(data));
            setARText("udpA recive message:"+str+' '+JSON.stringify(rinfo))
        });
        b.on('message', function(data, rinfo) {          
            var str = String.fromCharCode.apply(null, data);
            setBRText("udpb recive message:"+str+' '+JSON.stringify(rinfo))
        });
        setUDPA(a);
        setUDPB(b);
        setAPort(aPort);
        setBPort(bPort);
    };
    
    const ASendMessageTOB = () =>{
        if(!udpA){
            Alert.alert("udpA is null ")
            return;
        }
        var msg = toByteArray(aMessage);
        udpA.send(msg, 0, msg.length, bPort, '127.0.0.1', function(err) {
            if (err) Alert.alert("err:"+err);
        });
    }
    
    const BSendMessageTOA = () =>{
        if(!udpB){
            Alert.alert("udpB is null")
            return;
        }
        var msg = toByteArray(bMessage);
        udpB.send(msg, 0, msg.length, aPort, '127.0.0.1', function(err) {
            if (err)  if (err) Alert.alert("err:"+err);;
        });
    }

    const getAddress = () =>{
        let addressInfo = udpA.address();
        Alert.alert("aUdp info"+ JSON.stringify(addressInfo))
    }

    const addAMembership = ()=>{
        let port = randomPort();
        udpA.addMembership('{"address":"239.255.0.1","port":'+port+'}')
        setMPort(port)
    }

    const addBMembership = ()=>{
        udpB.addMembership('{"address":"239.255.0.1","port":'+membershipPort+'}')
    }

    const dropMembership = ()=>{
        udpA.dropMembership('{"address":"239.255.0.1","port":'+membershipPort+'}')
    }

    const BSendGroupMessage = ()=>{
        let message = " welcome to the group"
        var msg = toByteArray(message);
        udpB.send(msg, 0, msg.length, membershipPort, '239.255.0.1', function(err) {
            if (err) Alert.alert("err:"+err);
        });
    }

    return (
        <Tester>
         <TestSuite name="UDPTest">
        
            <TestCase.Example  itShould="createUDP" >
                 <Button title="createAndBind" onPress={createAndBindUDP}/>
             </TestCase.Example>
             <TestCase.Example  itShould="address" >
                 <Button title="getAddress" onPress={getAddress}/>
             </TestCase.Example>
             <TestCase.Example  style={styles.test} itShould="AsendMessage" >
                 <TextInput
                    style={styles.input}
                    value={aMessage}
                    onChangeText={text => setASendMessage(text)}
                    placeholder="Type here"
                 />
                <Button title="ASendB" onPress={ASendMessageTOB} />
                <TextInput
                    style={styles.input}
                    multiline ={true}
                    value={aReciveTex}  // 将 TextInput 的 value 绑定到 state 变量
                    onChangeText={(newText) => setARText(newText)}  // 处理用户输入
                />
                <TextInput
                        style={styles.input}
                        value={bMessage}
                        onChangeText={setBSendMessage}
                        placeholder="Type here"
                />
                <Button title="BSendA" onPress={BSendMessageTOA} />
                <TextInput
                    style={styles.input}
                    multiline ={true}
                    value={bReciveTex}  // 将 TextInput 的 value 绑定到 state 变量
                    onChangeText={(newText) => setBRText(newText)}  // 处理用户输入
                />
            </TestCase.Example>
            <TestCase.Example  itShould="CloseUDP" >
                 <Button title="closeUDPA" onPress={()=>udpA.close()}/>
             </TestCase.Example>
             <TestCase.Example  itShould="setBroadcast" >
                 <Button title="UDPAsetBroadcast" onPress={()=>udpA.setBroadcast(true)}/>
             </TestCase.Example>
             <TestCase.Example  itShould="addMembership" >
                 <Button title="UDPAAddMembership" onPress={addAMembership}/>
                 <Button title="BSendGroupMessage" onPress={BSendGroupMessage}/>
             </TestCase.Example>
             <TestCase.Example  itShould="dropMembership" >
                 <Button title="UDPADropMembership" onPress={dropMembership}/>
             </TestCase.Example>
         </TestSuite>
        </Tester>
    );
}

function toByteArray(obj) {
    var uint = new Uint8Array(obj.length);
    for (var i = 0, l = obj.length; i < l; i++) {
      uint[i] = obj.charCodeAt(i);
    }
    return new Uint8Array(uint);
}

function randomPort() {
    return (Math.random() * 60536) | (0 + 5000); // 60536-65536
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    // height: 100, // 设置高度
    width: '100%', // 设置宽度为容器宽度的100%
    borderColor: 'gray',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'white', // 设置 TextInput 背景色为白色
   
  },
  test: {
    height: 60,
    
  },
  text: {
    color: 'white', // 设置字体颜色为白色
    fontSize: 18,
  },
});
