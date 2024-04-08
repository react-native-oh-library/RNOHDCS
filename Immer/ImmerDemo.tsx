import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Switch,
  TextInput,
} from 'react-native';
import {
  createDraft,
  finishDraft,
  current,
  produce,
  original,
  isDraft,
  enablePatches,
  produceWithPatches,
  enableMapSet,
  freeze,
  nothing,
  setAutoFreeze,
  isDraftable,
  immerable,
  Immutable,
  castImmutable,
  castDraft,
  applyPatches,
  setUseStrictShallowCopy,
} from 'immer';

// 初始状态
const initialState = {
  count: 0,
  text: 'Hello from Immer!',
};
enablePatches();

// 启用enablePatches插件
enableMapSet();
// 启用enableMapSet插件
setUseStrictShallowCopy(true);

const MyComponent = () => {
  const [myMap, setMyMap] = useState(new Map([['key1', 'value1']]));
  const [overStates, setOverStates] = useState(false);
  const toggleSwitch = value => {
    setOverStates(value);
  };
  let [states, setStates] = useState(false);
  const [originals, setOriginals] = useState({users: [{name: 'zhansan'}]});
  let [res, setRes] = useState('');
  let [currentText, setCurrent] = useState('');
  const [count, setCount] = useState({age: 0});
  let [baseState, setBaseState] = useState([
    {
      title: '标题1',
      done: true,
    },
  ]);
  const [text, setText] = useState('Hello');
  let [result, setResult] = useState({});
  let [patches, setPatches] = useState({});
  let [inversePatches, setInversePatches] = useState({});
  const [data, setData] = useState({name: 'John', age: 30});
  const [produceStatus, setProduceStatus] = useState(false);
  const [castDraftState, setCastDraftState] = useState({
    count: 0,
  });
  const [state, setState] = useState(initialState);
  const [freezeRest, setFreezeRest] = useState({a: 1, b: {c: 2}});
  const [stateRes, setStateRes] = useState({count: 0, text: 'hello-world'});
  const [texts, setTexts] = useState('请输入内容');
  const [stateNothing, setStateNothing] = useState({
    name: 'John',
    age: 30,
    isStudent: false,
  });
  const obj = {a: 1, b: 2};
  const arr = [1, 2, 3];
  const str = 'Hello, immer!';
  const num = 42;
  const frozenObj = freeze({c: 3}, true);
  const [objStatus, setObjStatus] = useState(false);
  const [arrStatus, setArrStatus] = useState(false);
  const [strStatus, setStrStatus] = useState(false);
  const [numStatus, setNumStatus] = useState(false);
  const [draftsStatus, setDratfStatus] = useState(false);
  let originalRes = {
    name: '初始数据1',
    age: 18,
  };
  let fork = originalRes;
  // 用户在向导中所作的所有更改
  let changes = [];
  // 与向导中所做的所有更改相反
  let inverseChanges = [];
  let [obj1, setObj1] = useState({});
  let [obj2, setObj2] = useState({});
  const incrementCount = () => {
    if (count.age < 3) {
      setCount(
        produce(count, draft => {
          draft.age += 1;
        }),
      );
    } else {
      setCount(
        produce(count, draft => {
          draft.age = 0;
        }),
      );
    }
  };
  const decrement = () => {
    if (count.age > 0) {
      setCount(
        produce(count, draft => {
          draft.age -= 1;
        }),
      );
    } else {
      setCount(
        produce(count, draft => {
          draft.age = 3;
        }),
      );
    }
  };
  const onAdd = () => {
    if (baseState.length < 3) {
      return setBaseState(
        produce(baseState, draftState => {
          draftState.push({title: '新增', done: states});
          setStates((states = isDraft(draftState)));
        }),
      );
    }
  };
  const onDelete = (e: number) => {
    return setBaseState(
      produce(draft => {
        draft.splice(e, 1);
      }),
    );
  };
  const onChange = (item: object, e: number) => {
    const res = produce(baseState, draftState => {
      draftState[e].done = !draftState[e].done;
      draftState[e].title = '更改后数据';
      setStates((states = isDraft(draftState)));
    });
    setBaseState(res);
  };
  // 使用createDraft来创建一个草稿副本
  const increment = () => {
    const draft = createDraft(state);
    if (state.count < 5) {
      draft.count += 1; // 修改草稿副本
    } else {
      draft.count = 0;
    }
    const nextState = finishDraft(draft); // 获取修改后的不可变状态
    setState(nextState); // 更新React状态
  };
  const updateMap = () => {
    setMyMap(
      produce(myMap, draftMap => {
        draftMap.set('key1', 'updatedValue1'); // 更新键值对
        draftMap.set('key2', 'value2'); // 添加新的键值对
        draftMap.delete('key3'); // 尝试删除一个不存在的键值对（不会有影响）
      }),
    );
  };
  const renderMapEntries = () => {
    return Array.from(myMap.entries()).map(([key, value]) => (
      <Text key={key}>
        {key}: {value}
      </Text>
    ));
  };
  const changeText = () => {
    const draft = createDraft(state);
    draft.text = 'Text updated!'; // 修改草稿副本
    const nextState = current(draft); // 获取当前修改后的状态（与finishDraft效果相同）
    setState(nextState); // 更新React状态
  };
  const clickOriginal = () => {
    const a = setOriginals(
      produce(originals, draft => {
        draft.users[0].name = '4444';
        setCurrent(current(draft).users[0].name);
        console.log('Original state:', original(draft)?.users[0].name); // 输出原始状态
        setRes(original(draft).users[0].name);
      }),
    );
  };
  const handleClick = () => {
    const [result, patches, inversePatches] = produceWithPatches(
      text,
      draft => (draft = 'Hello-World'),
    );
    setResult(result);
    setPatches(patches);
    setInversePatches(inversePatches);
    console.log('result:', result);
    console.log('Patches:', patches);
    console.log('Inverse Patches:', inversePatches);

    setText(result);
  };
  // -----------------------------------------------
  class MyImmerableObject extends React.Component {
    // 声明immerable属性，告诉immer处理哪些属性
    static [immerable] = true;
    // 定义您的对象的属性
    constructor(name, age) {
      super(name, age);
      this.name = name;
      this.age = age;
    }
    /* // 不使用immerable
    // 声明immerable属性，告诉immer处理哪些属性
    static [immerable] = true;
    // 定义您的对象的属性
    constructor(name, age) {
      super(name, age);
      this.name = name;
      this.age = age;
    } */
  }
  const [myState, setMyState] = useState(new MyImmerableObject('Alice', 10));
  const updateValue = () => {
    // 使用immerable
    const res = produce(myState, draft => {
      draft.age = 26;
    });
    /*  // 不使用immerable
    const res = {...myState, age: 26}; */
    setMyState(res);
  };
  // 在组件挂载时设置 immer 的自动冻结行为
  useEffect(() => {
    // 启用/停用自动冻结
    setAutoFreeze(overStates);
  }, [overStates]); // 空依赖数组确保此 effect 只运行一次
  const incrementCountLeft = () => {
    const res = freeze(Object.assign({}, freezeRest), true);
    res.a = 110;
    res.b.c = 220;
    console.log('调用freeze-deep:', overStates, res);
    setFreezeRest(res);
  };
  const tryToModifyFrozenStateLeft = () => {
    const res = freeze(Object.assign({}, freezeRest), false);
    res.a = 111;
    res.b.c = 222;
    console.log('调用freeze-deep:', overStates, res);
    setFreezeRest(res);
  };
  const ClickOffFreeze = () => {
    const res1 = Object.assign({}, freezeRest);
    res1.a = 10;
    res1.b.c = 20;
    console.log('未调用freeze:', res);
    setFreezeRest(res1);
  };
  const ClickOnFreeze = () => {
    const res = freeze(Object.assign({}, freezeRest));
    res.a = 11;
    res.b.c = 22;
    console.log('调用freeze:', res);
    setFreezeRest(res);
  };
  const inputText = e => {
    let nextState = produce(stateRes, draft => {});
    setTexts(e);
    nextState.text = e;
    setStateRes(nextState);
  };
  const clickNothing = e => {
    const nextStateNothing = produce(stateNothing, draft => e);
    setStateNothing(nextStateNothing);
  };
  const isDraftObj = () => {
    setObjStatus(isDraftable(obj));
  };
  const isDraftArr = () => {
    setArrStatus(isDraftable(arr));
  };
  const isDraftStr = () => {
    setStrStatus(isDraftable(str));
  };
  const isDraftNum = () => {
    setNumStatus(isDraftable(num));
  };
  const isDrafts = () => {
    setDratfStatus(isDraftable(frozenObj));
  };
  // --------------------------------------------
  const [draftRes, setDraftRes] = useState({
    name: 'John',
    age: 30,
    hobbies: ['reading', 'coding'],
  });

  const [setUseStrictShallowCopyRes, setSetUseStrictShallowCopyRes] = useState({
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  });
  const [setUseStrictShallowCopyInit, setSetUseStrictShallowCopyInit] =
    useState();
  const updateData = () => {
    let newData = {};
    if (!produceStatus) {
      newData = produce(data, draft => {
        if (draft.age < 40) {
          draft.age += 1;
        } else {
          draft.age = 0;
        }
      });
    } else {
      newData = castImmutable(data, draft => {
        draft.age += 1;
      });
    }

    setData(newData);
  };
  const Clickfn = () => {
    setProduceStatus(!produceStatus);
  };
  const AddFn = () => {
    setCastDraftState(
      produce(castDraftState, draftState => {
        if (castDraftState.count < 10) {
          draftState.count += 1;
        } else {
          draftState.count = 0;
        }
      }),
    );
  };
  const doubleCount = () => {
    setCastDraftState(
      produce(castDraftState, draftState => {
        if (castDraftState.count < 100) {
          draftState.count *= 2;
        } else {
          draftState.count = 0;
        }
      }),
    );
  };
  const resetCount = () => {
    const newState = castDraft({count: 0});
    setCastDraftState(newState);
  };
  const ClickChange = () => {
    fork = produce(
      fork,
      draft => {
        draft.age = 10;
        draft.name = 'lisi';
      },
      // 产生的第三个参数是一个回调，patches 将从这里产生
      (patches, inversePatches) => {
        changes.push(...patches);
        inverseChanges.push(...inversePatches);
      },
    );
  };
  const fn1 = () => {
    // 当向导完成（成功）后，我们可以将 fork 中的更改重播到新的状态！
    let originalRes2 = applyPatches(originalRes, changes);
    setObj1(originalRes2);
    console.log('originalRes2:', originalRes2);
  };
  const fn2 = () => {
    // state 现在包含来自两个代码路径的更改！
    // 最后，即使在完成向导之后，用户也可能会改变主意并撤消他的更改......
    let originalRes3 = applyPatches(originalRes, inverseChanges);
    setObj2(originalRes3);
  };
  const handleAddHobby = () => {
    //不使用Draft<T>
    const newDraftRes = {...draftRes};
    newDraftRes.hobbies[1] = 'swimming';
    setDraftRes(newDraftRes);
    // 使用Draft<T>
    /*  const nextDraftRes = produce(draftRes, draft => {
      draft.hobbies[1] = 'swimming';
    });
    setDraftRes(nextDraftRes); */
  };
  interface Person {
    name: string;
    age: number;
  }
  // 使用Immutable<T>
  const immutableObj1: Immutable<Person> = {
    name: 'Alice',
    age: 20,
  };
  // 不使用Immutable<T>
  // const immutableObj1 = {
  //   name: 'Alice',
  //   age: 20,
  // };
  const [immutableData, setImmutableData] = useState();
  const changeObj1 = () => {
    const res = immutableObj1;
    res.name = 'lisi';
    console.log('immutableObj1:', immutableObj1);
    setImmutableData(res);
  };
  const useSetUseStrictShallowCopy = () => {
    const res = produce(setUseStrictShallowCopyRes, draft => {
      draft.age = 55;
      draft.address.city = 'China';
    });
    console.log('res:', JSON.stringify(res));
    console.log(
      'setSetUseStrictShallowCopyRes:',
      JSON.stringify(setUseStrictShallowCopyRes),
    );
    setSetUseStrictShallowCopyInit(res);
  };

  // ----------------分割 end-------------
  return (
    <ScrollView style={{height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Immer</Text>
        {/* 验证---produce---api */}
        <View style={styles.container}>
          <Text style={styles.text}>验证-produce-期望值不可变数据可以更改</Text>
          <View
            style={{
              flexDirection: 'row',
              margin: 5,
              justifyContent: 'space-between',
              width: '60%',
            }}>
            <Button title="计数加+" onPress={incrementCount} />
            <Text style={{fontSize: 20}}>Count: {count.age}</Text>
            <Button title="计数减-" onPress={decrement} />
          </View>
          <Button title="添加" onPress={onAdd} />
          <View
            style={{
              width: '100%',
            }}>
            {baseState.map((item, index) => (
              <View
                style={{
                  borderWidth: 1,
                  margin: 3,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}
                key={index}>
                <View style={{width: '70%'}}>
                  <Text>标题：{item.title}</Text>
                  <Text>状态:{item.done ? 'true' : 'false'}</Text>
                  <Text>isDraft状态:{`${states}`}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    height: '100%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Button
                    title="更改"
                    onPress={() => {
                      onChange(item, index);
                    }}
                  />
                  <Button
                    title="删除"
                    onPress={() => {
                      onDelete(index);
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* --------验证----createDraft--&--finishDraft---------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证createDraft--&--finishDraft</Text>
          <Text>Count: {state.count}</Text>
          <Text>Text: {state.text}</Text>
          <Button title="Increment" onPress={increment} />
          <Button title="Change Text" onPress={changeText} />
        </View>
        {/* -----------------验证--original-------current--------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>
            验证original--current--期望值验证original:获取修改后的原始状态
          </Text>
          <Text>初始数据：{JSON.stringify(originals)}</Text>
          <Text>original:{res}</Text>
          <Text>res:{originals.users[0].name}</Text>
          <Text>current: {currentText}</Text>
          <Button title="original" onPress={clickOriginal} />
        </View>
        {/* ------enablePatches-----produceWithPatches------------------ */}
        <View style={styles.container}>
          <Text style={styles.text}>验证enablePatches--produceWithPatches</Text>
          <Text>{text}</Text>
          <Text>result:{JSON.stringify(result)}</Text>
          <Text>patches:{JSON.stringify(patches)}</Text>
          <Text>inversePatches:{JSON.stringify(inversePatches)}</Text>
          <Button title="Add World" onPress={handleClick} />
        </View>
        {/* ----------验证--enableMapSet------------------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证enableMapSet</Text>
          <Text>Current Map:</Text>
          {renderMapEntries()}
          <Button title="Update Map" onPress={updateMap} />
        </View>
        {/* -----------------验证--freeze----------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证freeze</Text>
          <Text>
            freeze(obj,deep?)obj：要冻结的对象deep（可选）：一个布尔值，默认为false。如果为true，则深度冻结对象（包括其所有嵌套的对象）。如果为false或未提供，则只冻结对象的顶层属性
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{alignItems: 'center'}}>
              <Text>init:{JSON.stringify(freezeRest)}</Text>
              <Button
                title="未调用freeze 改变数据init a=10 c=20"
                onPress={ClickOffFreeze}
              />
              <Button
                title="调用freeze 改变数据init a=11 c=22"
                onPress={ClickOnFreeze}
              />
              <Button
                title="当deep状态为false时，改变数据init a=110 c=220"
                onPress={tryToModifyFrozenStateLeft}
              />
              <Button
                title="当deep状态为true时，改变数据init a=110 c=220"
                onPress={incrementCountLeft}
              />
            </View>
          </View>
        </View>
        {/* --------------验证--setAutoFreeze------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>---验证setAutoFreeze----</Text>
          <Text>
            setAutoFreeze为自动冻结,状态：{JSON.stringify(overStates)}
          </Text>
          <Switch onValueChange={toggleSwitch} value={overStates} />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={inputText}
            value={texts}
          />
          <Text>你输入的内容是: {stateRes.text}</Text>
          <Text>Current Count: {JSON.stringify(stateRes)}</Text>
        </View>
        {/* --------------验证---nothing------------------------ */}
        <View style={styles.container}>
          <Text style={styles.text}>验证nothing</Text>
          <Text>
            定义的数据：
            {JSON.stringify(stateNothing)}
          </Text>
          <Text>Name: {typeof stateNothing}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 10}}>
              <Button
                title="标记nothing"
                onPress={() => {
                  clickNothing(nothing);
                }}
              />
            </View>
            <View>
              <Button
                title="标记undefined"
                onPress={() => {
                  clickNothing(undefined);
                }}
              />
            </View>
          </View>
        </View>
        {/* -----------验证----isDraftable---------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证isDraftable</Text>
          {/* <Button title="Check Draftability" onPress={checkDraftability} />
          <Text>{result ? '可变对象' : '不可变对象'}</Text> */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>状态--isDraftable({JSON.stringify(obj)})</Text>
            <Button title="isDraftObj" onPress={isDraftObj} />
            <Text>状态:{JSON.stringify(objStatus)}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>状态--isDraftable({JSON.stringify(arr)})</Text>
            <Button title="isDraftArr" onPress={isDraftArr} />
            <Text>状态--{JSON.stringify(arrStatus)}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>状态--isDraftable({JSON.stringify(str)})</Text>
            <Button title="isDraftStr" onPress={isDraftStr} />
            <Text>状态--{JSON.stringify(strStatus)}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>状态--isDraftable({JSON.stringify(num)})</Text>
            <Button title="isDraftNum" onPress={isDraftNum} />
            <Text>状态--{JSON.stringify(numStatus)}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>状态--isDraftable({JSON.stringify(frozenObj)})</Text>
            <Button title="isDrafts" onPress={isDrafts} />
            <Text>状态--{JSON.stringify(draftsStatus)}</Text>
          </View>
        </View>
        {/* -----------验证---immerable-------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>
            验证---immerable,可以添加到构造函数或原型的符号
          </Text>
          <Text>NUM:{JSON.stringify(myState)}</Text>
          <Button title="Update Value" onPress={updateValue} />
        </View>
        {/* -----------------验证--castImmutable----------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证castImmutable</Text>
          <Text>castImmutable,期望值castImmutable为true时数据不可变</Text>
          <Text>castImmutable:{produceStatus ? 'true' : 'false'}</Text>
          <Button title="castImmutable status" onPress={Clickfn} />
          <Text>Age: {data.age}</Text>
          <Button title="Update Age" onPress={updateData} />
        </View>
        {/* -------------------验证--castDraft--- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证castDraft</Text>
          <Text>
            castDraft,期望将任何不可变类型转换为其可变对应物。这只是一个转换,实际上并没有做任何事情
          </Text>
          <Text>Count: {castDraftState.count}</Text>
          <Button title="AddFn" onPress={AddFn} />
          <Button title="doubleCount" onPress={doubleCount} />
          <Button title="resetCount" onPress={resetCount} />
        </View>
        {/* ---------------验证--applyPatches-------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证applyPatches</Text>
          <Text>初始数据：{JSON.stringify(originalRes)}</Text>
          <Button title="改变初始值age=10" onPress={ClickChange} />
          <Button title="fn1" onPress={fn1} />
          <Text>改变后数据：{JSON.stringify(obj1)}</Text>
          <Button title="fn2" onPress={fn2} />
          <Text>恢复的数据--{JSON.stringify(obj2)}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            验证Draft暴露的 TypeScript 类型以将不可变类型转换为可变类型
          </Text>
          <Text>{JSON.stringify(draftRes)}</Text>
          <Button title="add--使用Draft<T>" onPress={handleAddHobby} />
        </View>
        {/* 验证Immutable<T> */}
        {/*   <View style={styles.container}>
          <Text style={styles.text}>
            验证Immutable暴露的 TypeScript 类型以将可变类型转换为不可变类型
          </Text>
          <Text>初始数据：{JSON.stringify(immutableObj1)}</Text>
          <Text>更改后数据:{JSON.stringify(immutableData)}</Text>
          <Button title="change" onPress={changeObj1} />
        </View> */}
        {/* 验证setUseStrictShallowCopy */}
        <View style={styles.container}>
          <Text style={styles.text}>
            验证setUseStrictShallowCopy
            可用于启用严格浅拷贝，如果启用，immer会确保不会意外的修改原始对象
          </Text>
          <Text>初始数据：{JSON.stringify(setUseStrictShallowCopyRes)}</Text>
          <Text>更改后数据：{JSON.stringify(setUseStrictShallowCopyInit)}</Text>
          <Button title="使用" onPress={useSetUseStrictShallowCopy} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
  },
  text: {
    width: '100%',
    fontSize: 18,
    marginBottom: 0,
    textAlign: 'center',
    fontWeight: '700',
    margin: 5,
  },
  border: {
    borderWidth: 1,
  },
});

export default MyComponent;
