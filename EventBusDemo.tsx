import {useState, createContext, useContext} from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import EventBus from 'eventbusjs';
import EventBus3 from 'eventbusjs';
const TAG = 'EventBus';
const MyContext = createContext('null');

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
    overflow: 'scroll',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputWrap: {
    disPlay: 'flex',
  },
  inputText: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
});

function eventTest(state, action) {
  console.warn(`${TAG}-----,成功派发test_event类型的eventTest事件`);
}

var TestParamsClass1 = function (this: any) {
  this.className = 'TestParamsClass1';
  this.doSomeThing = function (
    event: Event,
    param1: number | string,
    param2: number | string,
  ) {
    console.warn(
      `${TAG},className=${this.className},event=${JSON.stringify(event)},param1=${param1},param=${param2}`,
    );
  };
};
var TestParamsClass2 = function (this: any) {
  this.className = 'TestParamsClass2';
  this.ready = function (num: number | string, str: number | string) {
    EventBus3.dispatch('custom_event', this, num, str);
  };
};
var p1 = new (TestParamsClass1 as any)();
var p2 = new (TestParamsClass2 as any)();

function EventBusDemo() {
  const [msg, setMsg] = useState('');
  const [msgParams, setMsgParams] = useState('');
  const [value, onChangeText] = useState('');
  const [value2, onChangeText2] = useState('');
  function handleAdd() {
    const has = EventBus.hasEventListener('test_event', eventTest, 0);
    if (has) {
      setMsg('eventBus中已经存在test_evnt类型的eventTest事件');
    } else {
      EventBus.addEventListener('test_event', eventTest, 0);
      setMsg('成功添加test_event类型的eventTest事件');
    }
  }

  function handleHas() {
    let has = EventBus.hasEventListener('test_event', eventTest, 0);
    setMsg(
      has
        ? '已存在test_event类型的eventTest事件'
        : '不存在test_event类型的eventTest事件',
    );
  }

  function handleRemove() {
    let has = EventBus.hasEventListener('test_event', eventTest, 0);
    if (has) {
      EventBus.removeEventListener('test_event', eventTest, 0);
      setMsg('已删除test_event类型的eventTest事件');
    } else {
      setMsg('未找到test_event类型的eventTest事件');
    }
  }

  function handleDispatch() {
    let has = EventBus.hasEventListener('test_event', eventTest, 0);
    if (has) {
      EventBus.dispatch('test_event');
      setMsg('成功执行test_event类型的eventTest事件');
    } else {
      setMsg('test_event类型的eventTest事件已被删除或未找到事件');
    }
  }

  function handleGet() {
    setMsg(`${JSON.stringify(EventBus.getEvents())}`);
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
    let has = EventBus3.hasEventListener('custom_event', p1.doSomeThing, p1);
    if (has) {
      p2.ready(value, value2);
      setMsgParams(
        `成功执行custom_event类型的p1.doSomeThing事件，param1=${value}，param2=${value2}`,
      );
    } else {
      setMsgParams('custom_event类型的p1.doSomeThing事件已被删除或未找到事件');
    }
  }

  return (
    <MyContext.Provider value={{myGlobalVar: ''}}>
      <ScrollView style={styles.main}>
        <View style={styles.mainItem}>
          <Text style={styles.title}>基础使用 & Keeping the scope</Text>
          <View style={styles.container}>
            <Button title="添加 eventTest 事件" onPress={handleAdd}></Button>
          </View>
          <View style={styles.container}>
            <Button
              title="派发 eventTest 事件"
              onPress={handleDispatch}></Button>
          </View>
          <View style={styles.container}>
            <Button title="移除 eventTest 事件" onPress={handleRemove}></Button>
          </View>
          <View style={styles.container}>
            <Button
              title="判断是否存在 eventTest 事件"
              onPress={handleHas}></Button>
          </View>
          <View style={styles.container}>
            <Button
              title="获取所有事件（常用于调试相关）"
              onPress={handleGet}></Button>
          </View>
          <View style={styles.box}>
            <Text style={{color: 'blue'}}>{msg}</Text>
          </View>
        </View>

        <View style={styles.mainItem}>
          <Text style={styles.title}>Passing additional parameters</Text>
          <View style={styles.container}>
            <View style={styles.inputWrap} flexDirection={'row'}>
              <TextInput
                value={value}
                onChangeText={text => onChangeText(text)}
                style={styles.inputText}
              />
              <TextInput
                value={value2}
                onChangeText={text => onChangeText2(text)}
                style={styles.inputText}
              />
            </View>
            <Button title="添加事件" onPress={handleAddForParams}>
              'add'
            </Button>
          </View>
          <View style={styles.container}>
            <Button title="派发事件" onPress={handleDispatchForParams}></Button>
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
