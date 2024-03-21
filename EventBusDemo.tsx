import { useState, createContext } from "react";
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import EventBus from "eventbusjs";
import EventBus3 from "eventbusjs";
const TAG = "EventBus";
const MyContext = createContext("null");

const styles = StyleSheet.create({
  main: {
    height: "100%",
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
    borderColor: "#000",
    overflow: "scroll",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  inputWrap: {
    disPlay: "flex",
  },
  inputText: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
});

function eventTest() {
  console.warn(`${TAG}-----,成功派发test_event类型的eventTest事件`);
}

var TestParamsClass1 = function (this: any) {
  this.className = "TestParamsClass1";
  this.doSomeThing = function (
    event: Event,
    param1: number | string,
    param2: number | string
  ) {
    console.warn(
      `${TAG},className=${this.className},event=${JSON.stringify(
        event
      )},params=${param1}--${param2}`
    );
  };
};
var TestParamsClass2 = function (this: any) {
  this.className = "TestParamsClass2";
  this.ready = function (param1: number | string, param2: number | string) {
    EventBus3.dispatch("custom_event", this, param1, param2);
  };
};
var p1 = new (TestParamsClass1 as any)();
var p2 = new (TestParamsClass2 as any)();

function EventBusDemo() {
  const [msg, setMsg] = useState("");
  const [msgParams, setMsgParams] = useState("");
  const [firstVal, setFirstVal] = useState("");
  const [secondVal, setSecondVal] = useState("");
  const [onOff, setOnOff] = useState(true);
  function handleAdd() {
    const has = EventBus.hasEventListener("test_event", eventTest, 0);
    if (has) {
      setMsg("eventBus中已经存在test_evnt类型的eventTest事件");
      console.log(`${TAG},eventBus中已经存在test_evnt类型的eventTest事件`);
    } else {
      EventBus.addEventListener("test_event", eventTest, 0);
      setMsg("成功添加test_event类型的eventTest事件");
      console.log(`${TAG},成功添加test_event类型的eventTest事件`);
    }
  }

  function handleHas() {
    let has = EventBus.hasEventListener("test_event", eventTest, 0);
    setMsg(
      has
        ? "已存在test_event类型的eventTest事件"
        : "不存在test_event类型的eventTest事件"
    );
    console.log(
      `${TAG},${
        has
          ? "已存在test_event类型的eventTest事件"
          : "不存在test_event类型的eventTest事件"
      }`
    );
  }

  function handleRemove() {
    let has = EventBus.hasEventListener("test_event", eventTest, 0);
    if (has) {
      EventBus.removeEventListener("test_event", eventTest, 0);
      setMsg("已删除test_event类型的eventTest事件");
      console.log(`${TAG},已删除test_event类型的eventTest事件`);
    } else {
      setMsg("未找到test_event类型的eventTest事件");
      console.log(`${TAG},未找到test_event类型的eventTest事件`);
    }
  }

  function handleDispatch() {
    let has = EventBus.hasEventListener("test_event", eventTest, 0);
    if (has) {
      EventBus.dispatch("test_event");
      setMsg("成功执行test_event类型的eventTest事件");
      console.log(`${TAG},成功执行test_event类型的eventTest事件`);
    } else {
      setMsg("test_event类型的eventTest事件已被删除或未找到事件");
      console.log(`${TAG},test_event类型的eventTest事件已被删除或未找到事件`);
    }
  }

  function handleGet() {
    setMsg(`${JSON.stringify(EventBus.getEvents())}`);
    console.log(`${TAG},${JSON.stringify(EventBus.getEvents())}`);
  }

  function handleAddForParams() {
    let has = EventBus3.hasEventListener("custom_event", p1.doSomeThing, p1);
    if (has) {
      setMsgParams("eventBus中已存在custom_event类型的p1.doSomeThing事件");
      console.log(
        `${TAG},eventBus中已存在custom_event类型的p1.doSomeThing事件`
      );
    } else {
      if (firstVal.length <= 1 || secondVal.length <= 1) {
        console.error("参数长度不符合预期");
      } else {
        EventBus3.addEventListener("custom_event", p1.doSomeThing, p1);
        setMsgParams("成功添加custom_event类型的p1.doSomeThing事件");
        console.log(`${TAG},'成功添加custom_event类型的p1.doSomeThing事件'`);
        setOnOff(true);
      }
    }
  }
  function handleDispatchForParams() {
    if (onOff) {
      let has = EventBus3.hasEventListener("custom_event", p1.doSomeThing, p1);
      if (has) {
        p2.ready(firstVal, secondVal);
        setMsgParams(`派发事件成功，param1=${firstVal},param2=${secondVal}`);
        console.log(
          `${TAG},派发事件成功，param1=${firstVal},param2=${secondVal}`
        );
        setOnOff(false);
      } else {
        setMsgParams(
          "custom_event类型的p1.doSomeThing事件已被删除或未找到事件"
        );
        console.log(
          `${TAG},custom_event类型的p1.doSomeThing事件已被删除或未找到事件`
        );
      }
    } else {
      setMsgParams("请先移除旧的p1.doSomeThing事件");
      console.log(`${TAG},请先移除旧的p1.doSomeThing事件`);
    }
  }
  function handleRemoveForParams() {
    setOnOff(true);
    let has = EventBus3.hasEventListener("custom_event", p1.doSomeThing, p1);
    if (has) {
      EventBus3.removeEventListener("custom_event", p1.doSomeThing, p1);
      setMsgParams("成功删除custom_event类型的p1.doSomeThing事件");
      console.log(`${TAG},成功删除custom_event类型的p1.doSomeThing事件`);
    } else {
      setMsgParams("未找到custom_event类型的p1.doSomeThing事件");
      console.log(`${TAG},未找到custom_event类型的p1.doSomeThing事件`);
    }
  }
  return (
    <MyContext.Provider value={{ myGlobalVar: "" }}>
      <ScrollView style={styles.main}>
        <View style={styles.mainItem}>
          <Text style={styles.title}>基础使用 & Keeping the scope</Text>
          <View style={styles.container}>
            <Button title="添加 eventTest 事件" onPress={handleAdd}></Button>
          </View>
          <View style={styles.container}>
            <Button
              title="派发 eventTest 事件"
              onPress={handleDispatch}
            ></Button>
          </View>
          <View style={styles.container}>
            <Button title="移除 eventTest 事件" onPress={handleRemove}></Button>
          </View>
          <View style={styles.container}>
            <Button
              title="判断是否存在 eventTest 事件"
              onPress={handleHas}
            ></Button>
          </View>
          <View style={styles.container}>
            <Button
              title="获取所有事件（常用于调试相关）"
              onPress={handleGet}
            ></Button>
          </View>
          <View style={styles.box}>
            <Text style={{ color: "blue" }}>{msg}</Text>
          </View>
        </View>

        <View style={styles.mainItem}>
          <Text style={styles.title}>Passing additional parameters</Text>
          <View style={styles.container}>
            <View style={styles.inputWrap} flexDirection={"row"}>
              <TextInput
                onChangeText={(text) => setFirstVal(text)}
                style={styles.inputText}
                placeholder="请输入长度大于1的参数"
                maxLength={12}
              />
              <TextInput
                onChangeText={(text) => setSecondVal(text)}
                style={styles.inputText}
                placeholder="请输入长度大于1的参数"
                maxLength={12}
              />
            </View>
            <Button title="添加 doSomeThing 事件" onPress={handleAddForParams}>
              'add'
            </Button>
          </View>
          <View style={styles.container}>
            <Button
              title="派发 doSomeThing 事件"
              onPress={handleDispatchForParams}
            ></Button>
          </View>
          <View style={styles.container}>
            <Button
              title="移除 doSomeThing 事件"
              onPress={handleRemoveForParams}
            ></Button>
          </View>
          <View style={styles.box}>
            <Text style={{ color: "blue" }}>{msgParams}</Text>
          </View>
        </View>
      </ScrollView>
    </MyContext.Provider>
  );
}
export default EventBusDemo;
