import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
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
class ShowComponent extends React.Component {
  state = {
    mapData: new Map(),
    setData: new Set(),
  };

  updateData = () => {
    this.setState(
      produce(draft => {
        draft.mapData.set('key', 'value');
        draft.setData.add('new item');
      }),
    );
  };

  render() {
    return (
      <View>
        <Button title="Update Data" onPress={this.updateData} />
        <Text>Map Data: {Array.from(this.state.mapData)}</Text>
        <Text>Set Data: {Array.from(this.state.setData)}</Text>
      </View>
    );
  }
}
const MyComponent = () => {
  let [states, setStates] = useState(false);
  const [originals, setOriginals] = useState({users: [{name: 'zhansan'}]});
  let [res, setRes] = useState('');
  let [currentText, setCurrent] = useState('');
  // ----------------------------------------------------
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
          draftState.push({title: '新增', done: false});
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
  // ----------------------------------------------------
  const [state, setState] = useState(initialState);
  // 使用createDraft来创建一个草稿副本
  const increment = () => {
    const draft = createDraft(state);
    draft.count += 1; // 修改草稿副本
    // setCurrent(current(draft.count))
    const nextState = finishDraft(draft); // 获取修改后的不可变状态
    setState(nextState); // 更新React状态
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
      draft => (draft += ' World'),
    );
    setResult(result);
    setPatches(patches);
    setInversePatches(inversePatches);
    console.log('result:', result);
    console.log('Patches:', patches);
    console.log('Inverse Patches:', inversePatches);

    setText(result);
  };
  // ---------------------------------------------------------
  const [stateLeft, setStateLeft] = useState([
    {count: 0},
    {age: 17, name: 'zhansan'},
  ]);
  const [stateRight, setStateRight] = useState([
    {count: 0},
    {age: 17, name: 'zhansan'},
  ]);
  const [stateRes, setStateRes] = useState({count: 0});
  const [stateNothing, setStateNothing] = useState({
    name: 'John',
    age: 30,
    isStudent: false,
  });
  const [isDraftableList, setIsDraftableList] = useState({
    one: false,
    two: false,
    three: false,
  });
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);

      // 设置immerable标志
      this[immerable] = true;

      this.state = {
        data: {
          count: 0,
          text: 'Hello Immer!',
          immerable: true,
        },
      };
    }

    incrementCount = () => {
      this.setState(
        produce(draft => {
          draft.data.count += 1;
          draft.data.text = 'hahhaha';
        }),
      );
    };

    render() {
      return (
        <View>
          <Text>Count: {this.state.data.count}</Text>
          <Text>text: {this.state.data.text}</Text>
          <Button title="Increment" onPress={this.incrementCount} />
        </View>
      );
    }
  }
  const [counter, setCounter] = useState<Immutable<number>>(0);
  // 在组件挂载时设置 immer 的自动冻结行为
  useEffect(() => {
    // 启用自动冻结
    setAutoFreeze(true);

    // 清理函数（可选），在这里我们不需要做任何清理工作
    return () => {
      // 如果需要，可以在这里禁用自动冻结
      setAutoFreeze(false);
    };
  }, []); // 空依赖数组确保此 effect 只运行一次
  // 使用 immer 的 freeze 函数来冻结状态对象
  freeze(stateLeft, true);
  freeze(stateRight, false);
  // 尝试修改冻结的对象将会失败，并且不会触发组件的重新渲染
  const tryToModifyFrozenStateLeft = () => {
    try {
      setStateRight(
        produce(pradft => {
          pradft[0].age = 20;
          pradft[0].name = 'Lisi';
        }),
      );
    } catch (error) {
      console.error('Error modifying frozen state:', error);
    }
  };
  const tryToModifyFrozenStateRight = () => {
    try {
      setStateRight(
        produce(pradft => {
          pradft[1].age = 20;
          pradft[1].name = 'Lisi';
        }),
      );
    } catch (error) {
      console.error('Error modifying frozen state:', error);
    }
  };
  const incrementCountLeft = () => {
    // 使用 setState 来安全地更新状态
    // setState(prevState => ({state[0].count: prevState[0].count + 1}));
    setStateLeft(
      produce(stateLeft, prevState => {
        prevState[0].count += 1;
      }),
    );
  };
  const incrementCountRight = () => {
    // 使用 setState 来安全地更新状态
    setStateRight(
      produce(stateRight, prevState => {
        prevState[0].count += 1;
      }),
    );
  };
  const ClickincrementCount = () => {
    // 使用 immer 的 produce 函数来安全地更新状态
    const nextState = produce(stateRes, draft => {
      draft.count += 1;
    });
    // 由于启用了自动冻结，nextState 现在是一个不可变对象
    try {
      // 尝试修改 nextState 将会失败，因为它已经被冻结了
      nextState.count = 100; // 这会抛出错误，因为 nextState 是不可变的
    } catch (error) {
      console.error('Error modifying frozen state:', error);
    }

    setStateRes(nextState);
  };
  const removeProperty = () => {
    const nextStateNothing = produce(stateNothing, draft => {
      draft.name = 'wangwu';
      // 使用 nothing 来删除 age 属性
      delete draft.age; // 传统的删除方法
      // 或者使用 immer 的 nothing 来达到相同的效果
      // draft.isStudent = nothing; // 这将删除 isStudent 属性
    });
    setStateNothing(nextStateNothing);
    console.log('stateNothing:', stateNothing);
    console.log('nextStateNothing:', typeof nextStateNothing.isStudent);
  };
  /*  useEffect(() => {
    console.log('Current state:', stateLeft);
  }, [stateLeft]); */
  const clickNothing = () => {
    const nextStateNothing = produce(stateNothing, draft => {
      draft.name = 'wangwu';
      // 使用 nothing 来删除 age 属性
      // 或者使用 immer 的 nothing 来达到相同的效果
      draft.isStudent = nothing; // 这将删除 isStudent 属性
    });
    setStateNothing(nextStateNothing);
    console.log('stateNothing:', stateNothing);
    console.log('nextStateNothing:', typeof nextStateNothing.isStudent);
  };
  const checkDraftability = () => {
    const arr = {
      one: isDraftable(stateRes),
      two: isDraftable('Hello, World!'),
      three: isDraftable(42),
    };
    setIsDraftableList(arr);
    console.log('Is state draftable?', isDraftable(stateRes)); // 应该输出 true
    console.log('Is string draftable?', isDraftable('Hello, World!')); // 应该输出 false
    console.log('Is number draftable?', isDraftable(42)); // 应该输出 false
    // ... 可以检查其他类型的值
  };
  const incrementCounter = () => {
    setCounter(produce(counter, draftCounter => (draftCounter += 10)));
  };
  // ------------------------------分割线--------------------------------------------------------------------
  const [data, setData] = useState({name: 'John', age: 30});
  const [produceStatus, setProduceStatus] = useState(false);
  const [castDraftState, setCastDraftState] = useState({
    count: 0,
  });
  const updateData = () => {
    let newData = {};
    if (!produceStatus) {
      newData = produce(data, draft => {
        draft.age += 1;
      });
    } else {
      newData = castImmutable(data, draft => {
        draft.age += 1;
      });
    }

    setData(newData);
    console.log('newData:', newData);
  };
  const Clickfn = () => {
    setProduceStatus(!produceStatus);
  };
  const AddFn = () => {
    // 使用immer的produce函数来创建一个新的状态副本
    const newState = produce(castDraftState, draftState => {
      // 在新状态副本中增加count的值
      draftState.count += 1;
    });

    // 使用castDraft函数确保新状态与原始状态不共享内存
    const nextState = castDraft(newState);
    // 更新状态
    setCastDraftState(nextState);
  };
  // ---------------分割--start-----------
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
  const ClickChange = () => {
    fork = produce(
      fork,
      draft => {
        draft.age = 20;
      },
      // 产生的第三个参数是一个回调，patches 将从这里产生
      (patches, inversePatches) => {
        changes.push(...patches);
        inverseChanges.push(...inversePatches);
      },
    );
    // 同时，我们的原始状态被替换，例如
    // 从服务器收到了一些更改
    originalRes = produce(originalRes, draft => {
      draft.name = '更改后数据';
    });
  };
  const fn1 = () => {
    // 当向导完成（成功）后，我们可以将 fork 中的更改重播到新的状态！
    let originalRes2 = applyPatches(originalRes, changes);
    setObj1(originalRes2);
  };
  const fn2 = () => {
    // state 现在包含来自两个代码路径的更改！
    // 最后，即使在完成向导之后，用户也可能会改变主意并撤消他的更改......
    let originalRes3 = applyPatches(originalRes, inverseChanges);
    setObj2(originalRes3);
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
          <ShowComponent>123</ShowComponent>
        </View>
        {/* ------------------------------------- */}
        {/* -----------------验证--freeze----------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证freeze</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text>freez开</Text>
              </View>
              <Text>Count: {stateLeft[0].count}</Text>
              <Text>age: {stateLeft[1].age}</Text>
              <Text>name: {stateLeft[1].name}</Text>
              <Button title="Increment" onPress={incrementCountLeft} />
              <Button
                title="Try to change"
                onPress={tryToModifyFrozenStateLeft}
              />
            </View>
            <View>
              <View style={{}}>
                <View style={{flexDirection: 'row'}}>
                  <Text>freez关</Text>
                </View>
                <Text>Count: {stateRight[0].count}</Text>
                <Text>age: {stateRight[1].age}</Text>
                <Text>name: {stateRight[1].name}</Text>
                <Button title="IncrementLeft" onPress={incrementCountRight} />
                <Button
                  title="changeLeft"
                  onPress={tryToModifyFrozenStateRight}
                />
              </View>
            </View>
          </View>
        </View>
        {/* --------------验证--setAutoFreeze------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>---验证setAutoFreeze----</Text>
          <Text>setAutoFreeze为自动冻结,默认为true</Text>
          <Text>Current Count: {stateRes.count}</Text>
          <Button title="Increment Count" onPress={ClickincrementCount} />
        </View>
        {/* --------------验证---nothing------------------------ */}
        <View style={styles.container}>
          <Text style={styles.text}>验证nothing</Text>
          <Text>Name: {stateNothing.name}</Text>
          {stateNothing.age !== undefined ? (
            <Text>Age: {stateNothing.age}</Text>
          ) : null}
          {typeof stateNothing.isStudent == 'boolean' ? (
            <Text>Is Student: {stateNothing.isStudent ? 'Yes' : 'No'}</Text>
          ) : null}
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 10}}>
              <Text>期望age属性删除</Text>
              <Button title="delete删除" onPress={removeProperty} />
            </View>
            <View>
              <Text>期望is student属性删除</Text>
              <Button title="nothing删除" onPress={clickNothing} />
            </View>
          </View>
        </View>
        {/* -----------验证----isDraftable---------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证isDraftable</Text>
          <Text>
            state:{isDraftableList.one ? 'true' : 'false'}----期望值为true
          </Text>
          <Text>
            Hello, World:{isDraftableList.two ? 'true' : 'false'}----期望值false
          </Text>
          <Text>
            42:{isDraftableList.three ? 'true' : 'false'}----期望值false
          </Text>
          <Button title="Check Draftability" onPress={checkDraftability} />
        </View>
        {/* -----------验证---immerable-------------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证---immerable,期望可以改变值</Text>
          <MyComponent />
        </View>
        {/* ----------------验证---Immutable<T>----------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证--Immutable--</Text>
          <Text>Counter: {counter}</Text>
          <Button title="Increment" onPress={incrementCounter} />
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
            castDraft,期望值使用castDraft函数确保新状态与原始状态不共享内存
          </Text>
          <Text>Count: {castDraftState.count}</Text>
          <Button title="Increment" onPress={AddFn} />
        </View>
        {/* ---------------验证--applyPatches-------------- */}
        <View style={styles.container}>
          <Text style={styles.text}>验证applyPatches</Text>
          <Text>初始数据：{JSON.stringify(originalRes)}</Text>
          <Button title="改变初始值" onPress={ClickChange} />
          <Button title="fn1" onPress={fn1} />
          <Text>改变后数据：{JSON.stringify(obj1)}</Text>
          <Button title="fn2" onPress={fn2} />
          <Text>恢复的数据--{JSON.stringify(obj2)}</Text>
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
