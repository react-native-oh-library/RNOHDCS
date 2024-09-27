import React, { useState,} from 'react';
import { StyleSheet,Button,TextInput,Alert} from 'react-native';
import {TestSuite, Tester,TestCase} from '@rnoh/testerino';
import dgram from 'react-native-udp';


export function UDPTest() {
    
    const [udpA, setUDPA] = useState(null);
    const [aPort,setAPort] = useState(null);
    const [bAddress, setBAddress] = useState('');
    const [aMessage,setASendMessage] = useState('');
    const [aReciveTex, setARText] = useState('');

    const udpPort= 12345;
    const membershipAddress = '230.0.0.1'

    const createAndBindUDP = () =>{
        let a = dgram.createSocket('udp4');
        a.bind(udpPort, function(err) {
            if (err) throw err;
        });
        
        a.on('message', function(data, rinfo) {
            var str = String.fromCharCode.apply(null, new Uint8Array(data));
            console.log("udpA recive message:"+str+' '+JSON.stringify(rinfo))
            setARText("udpA recive message:"+str+' '+JSON.stringify(rinfo))
        });
        setUDPA(a);
        setAPort(aPort);
    };
    
    const sendMessageTOB = () =>{
        if(!udpA){
            Alert.alert("udpA is null ")
            return;
        }
        var msg = toByteArray(aMessage);
        udpA.send(msg, 0, msg.length, udpPort, bAddress, function(err) {
            if (err) Alert.alert("err:"+err);
        });
    }
    
    const sendBroadcastMessage=()=>{
        if(!udpA){
            Alert.alert("udpA is null ")
            return;
        }
        console.log("sendBroadcastMessage")
        var msg = toByteArray('sendBroadcastMessage hello');
        udpA.send(msg, 0, msg.length, udpPort, "255.255.255.255", function(err) {
            if (err) Alert.alert("err:"+err);
        });
    }

    const getAddress = () =>{
        let addressInfo = udpA.address();
        Alert.alert("aUdp info"+ JSON.stringify(addressInfo))
    }

    const addAMembership = ()=>{
        udpA.addMembership(membershipAddress)
    }

    const dropMembership = ()=>{
        udpA.dropMembership(membershipAddress)
    }

    const sendGroupMessage = ()=>{
        let message = " 123welcome to the groupxxxxx"
        var msg = toByteArray(message);
        udpA.send(msg, 0, msg.length, udpPort, membershipAddress, function(err) {
            if (err) Alert.alert("err:"+err);
        });
    }

    return (
        <Tester>
         <TestSuite name="UDPTest">
            <TestCase  itShould="createUDP" >
                 <Button title="createAndBind" onPress={createAndBindUDP}/>
             </TestCase>
             <TestCase  itShould="address" >
                 <Button title="getAddress" onPress={getAddress}/>
             </TestCase>
             <TestCase  style={styles.test} itShould="AsendMessage" >
                <TextInput
                        style={styles.input}
                        value={bAddress}
                        onChangeText={bAddress => setBAddress(bAddress)}
                        placeholder="接收消息地址"
                 />
                 <TextInput
                    style={styles.input}
                    value={aMessage}
                    onChangeText={aMessage => setASendMessage(aMessage)}
                    placeholder="发送的消息"
                 />
                <Button title="发送消息" onPress={sendMessageTOB} />
                <TextInput
                    placeholder="接收到的消息"
                    style={styles.input}
                    multiline ={true}
                    value={aReciveTex}  // 将 TextInput 的 value 绑定到 state 变量
                    onChangeText={(newText) => setARText(newText)}  // 处理用户输入
                />
            </TestCase>
             <TestCase  itShould="setBroadcast" >
                 <Button title="UDPAsetBroadcast" onPress={()=>udpA.setBroadcast(true)}/>
                 <Button title="sendBroadcastMessage" onPress={sendBroadcastMessage}/>
             </TestCase>
             <TestCase  itShould="addMembership" >
                 <Button title="UDPAAddMembership" onPress={addAMembership}/>
                 <Button title="BSendGroupMessage" onPress={sendGroupMessage}/>
             </TestCase>
             <TestCase  itShould="dropMembership" >
                 <Button title="UDPADropMembership" onPress={dropMembership}/>
             </TestCase>
             <TestCase  itShould="CloseUDP" >
                 <Button title="closeUDPA" onPress={()=>udpA.close()}/>
             </TestCase>
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