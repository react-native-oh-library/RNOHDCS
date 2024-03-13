import {useState,createContext, useContext} from 'react';
import {View, Button, StyleSheet, ScrollView, Text,TextInput } from 'react-native';
import EventBus from 'eventbusjs';
import EventBus2 from 'eventbusjs';
import EventBus3 from 'eventbusjs';
const TAG = 'EventBus';
const MyContext = createContext('null');
let onoff='';
let onoff2=''
let onoff3='';
const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  mainItem: {
    marginTop: 20,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  box: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputText:{
      width:100,
      height:40,
      borderWidth:1,
      borderColor:'gray',
      marginRight:10
  },

});

  function eventTest(state,action) {
    onoff='----基础使用'
    console.warn(`${TAG}-----,成功派发test_event类型的eventTest事件`);
  }
var TestKeep1 = function (this: any) {
  this.className = 'has_scope1';
  this.callback = function (event: Event) {
  onoff2='Keeping the scope'
    console.warn(`${TAG}-----,成功派发has_scope类型的t1.callback事件`);
  };
};
var TestKeep2 = function (this: any) {
  this.className = 'has_scope2';
  this.dispatchOurEvent = function () {
    EventBus.dispatch('has_scope', this);
  };
};
var t1 = new (TestKeep1 as any)();
var t2 = new (TestKeep2 as any)();

var TestParamsClass1 = function (this: any) {
  this.className = 'TestParamsClass1';
  this.doSomeThing = function (event: Event, param1: number, param2: string) {
    console.log(
      `${TAG},className=${this.className},event=${JSON.stringify(event)},param1=${param1},param=${param2}`,
    );
  };
};
var TestParamsClass2 = function (this: any) {
  this.className = 'TestParamsClass2';
  this.ready = function (num:number,str:string) {
    EventBus.dispatch('custom_event', this, num, str);
  };
};
var p1 = new (TestParamsClass1 as any)();
var p2 = new (TestParamsClass2 as any)();

function EventBusDemo() {
  const [msg, setMsg] = useState('');
  const [msgKeep, setMsgKeep] = useState('');
  const [msgParams, setMsgParams] = useState('');
  const [value, onChangeText] = useState('');
  const [value2, onChangeText2] = useState('');
  function handleAdd() {
    const has = EventBus.addEventListener('test_event', eventTest);
    if (has) {
      setMsg('eventBus中已经存在test_evnt类型的eventTest事件');
    } else {
      EventBus.addEventListener('test_event', eventTest);
      setMsg('成功添加test_event类型的eventTest事件');
    }
    onoff=''
    console.log(`${TAG},EventBus=${JSON.stringify(EventBus)}`);
  }

  function handleHas() {
    let has = EventBus.hasEventListener('test_event', eventTest);
    setMsg(
      has
        ? '存在test_event类型的eventTest事件'
        : '不存在test_event类型的eventTest事件',
    );
     onoff=''
    console.log(`${TAG},EventBus=${JSON.stringify(EventBus)}`);
  }

  function handleRemove() {
    let has = EventBus.hasEventListener('test_event', eventTest);
    if (has) {
      EventBus.removeEventListener('test_event', eventTest);
      setMsg('已删除test_event类型的eventTest事件');
    } else {
      setMsg('未找到test_event类型的eventTest事件');
    }
     onoff=''
    console.log(`${TAG},EventBus=${JSON.stringify(EventBus)}`);
  }

  function handleDispatch() {
   onoff=''
    let has = EventBus.hasEventListener('test_event', eventTest);
    if (has) {
      EventBus.dispatch('test_event');
      setMsg('成功派发test_event类型的eventTest事件');
    } else {
      setMsg('test_event类型的eventTest事件已被删除或未找到事件');
    }
    console.log(`${TAG},EventBus=${JSON.stringify(EventBus)}`);
  }

  function handleGet() {
   onoff=''
    setMsg(`${JSON.stringify(EventBus)}`);
    console.log(`${TAG},EventBus=${JSON.stringify(EventBus)}`);
  }

  function handleAddKeep() {
    let has = EventBus2.hasEventListener('has_scope', t1.callback, t1);
    if (has) {
      setMsgKeep('eventBus中已存在has_scope类型的t1.callback事件');
    } else {
      EventBus.addEventListener('has_scope', t1.callback, t1);
      setMsgKeep('成功添加has_scope类型的t1.callback事件');
    }
    console.log(`${TAG},EventBus=${JSON.stringify(EventBus2)}`);
  }

  function handleDispatchKeep() {
    t2.dispatchOurEvent();
    setMsgKeep('成功执行has_scope类型的t1.callback事件');
    console.log(`${TAG},EventBus=${JSON.stringify(EventBus2)}`);
  }

  function handleAddForParams() {
    let has = EventBus3.hasEventListener('custom_event', p1.doSomeThing, p1);
    if (has) {
      setMsgParams('eventBus中已存在custom_event类型的p1.doSomeThing事件');
    } else {
      EventBus3.addEventListener('custom_event', p1.doSomeThing, p1);
      setMsgParams('成功添加custom_event类型的p1.doSomeThing事件');
    }
  }
  function handleDispatchForParams() {
    p2.ready(value,value2);
    setMsgParams(
      `成功执行custom_event类型的p1.doSomeThing事件，param1=${value}，param2=${value2}`
    );
  }

  return (
    <MyContext.Provider value={{ myGlobalVar: onoff }}>
      <ScrollView style={styles.main}>
        <View style={styles.mainItem}>
          <Text style={styles.title}>基础使用</Text>
          <View style={styles.container}>
            <Button title="添加" onPress={handleAdd}></Button>
          </View>
          <View style={styles.container}>
            <Button title="派发" onPress={handleDispatch}></Button>
          </View>
          <View style={styles.container}>
            <Button title="删除" onPress={handleRemove}></Button>
          </View>
          <View style={styles.container}>
            <Button title="是否存在" onPress={handleHas}></Button>
          </View>
          <View style={styles.container}>
            <Button title="获取" onPress={handleGet}></Button>
          </View>
          <View style={styles.box}>
            <Text style={{color:'blue'}}>{msg}{onoff}</Text>
          </View>
        </View>
        <View style={styles.mainItem}>
          <Text style={styles.title}>Keeping the scope</Text>
          <View style={styles.container}>
            <Button title="添加" onPress={handleAddKeep}></Button>
          </View>
          <View style={styles.container}>
            <Button title="派发" onPress={handleDispatchKeep}></Button>
          </View>
          <View style={styles.box}>
            <Text style={{color: 'blue'}}>{msgKeep}{onoff2}</Text>
          </View>
        </View>
        <View style={styles.mainItem}>
          <Text style={styles.title}>Passing additional parameters</Text>
          <View style={styles.container}>
            <View style={styles.inputWrap} flexDirection={'row'}>
                <TextInput value={value}  placeholder="number类型" onChangeText={text => onChangeText(text)} style={styles.inputText}/>
                <TextInput value={value2}  placeholder="string类型" onChangeText={text => onChangeText2(text)} style={styles.inputText}/>
            </View>
            <Button title="添加" onPress={handleAddForParams}></Button>
          </View>
          <View style={styles.container}>
            <Button title="派发" onPress={handleDispatchForParams}></Button>
          </View>
          <View style={styles.box}>
            <Text style={{color: 'blue'}}>{msgParams}</Text>
          </View>
        </View>
      </ScrollView>
    </MyContext.Provider>
  );
}
export default EventBusDemo;
