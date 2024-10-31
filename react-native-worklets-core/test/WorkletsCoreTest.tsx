import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

import React, {useState} from 'react';

import {
  Worklets,
  useRunOnJS,
  useSharedValue,
  useWorklet,
  isWorklet,
  worklet,
  getWorkletDependencies,
} from 'react-native-worklets-core';

export const WorkletsCoreTest = () => {
  const [ret, setRet] = useState(null);
  const [ret1, setRet1] = useState('');
  const [ret2, setRet2] = useState(null);
  const [ret3, setRet3] = useState(null);
  const [ret4, setRet4] = useState('');
  const [ret5, setRet5] = useState(null);
  const [ret6, setRet6] = useState(null);
  const [ret7, setRet7] = useState('');
  const [ret8, setRet8] = useState('');
  const [ret9, setRet9] = useState(null);
  const [ret10, setRet10] = useState('');
  const [ret11, setRet11] = useState('');
  const [ret12, setRet12] = useState(null);
  const [ret13, setRet13] = useState(null);
  const [ret14, setRet14] = useState(null);
  const [ret15, setRet15] = useState('');
  const [ret16, setRet16] = useState('');
  const [ret17, setRet17] = useState(null);
  const [ret18, setRet18] = useState('');
  const [ret19, setRet19] = useState('');

  const counter = useSharedValue(42);

  const testUseRunInJS = useRunOnJS((a: number) => {
    return a + 100;
  }, []);

  function testRunOnJS(a: number) {
    'worklet';
    return Worklets.runOnJS((a: number) => {
      return a + 100;
    });
  }
  const testUseWorklet = useWorklet(
    'default',
    (a: number) => {
      'worklet';
      return a + 100;
    },
    [],
  );

  const testGetWorkletDependencies = () => {
    const valueFromOutside = 5;
    const f = () => {
      'worklet';
      return valueFromOutside + 10;
    };
    const dependencies = getWorkletDependencies(f);
    return dependencies;
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Tester>
            <TestSuite name="测试所有属性和方法">
              <TestCase itShould="1.测试createContext方法,执行成功返回100">
                <Text>
                  {`测试函数：
                    const context = Worklets.createContext('test');
                    const f = (a: number) => {
                      'worklet';
                      return a;
                    };
                    const w = context.createRunAsync(f)`}
                </Text>
                <Text>测试方法：w(100)，</Text>
                <Text>返回值：{ret}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const context = Worklets.createContext('test');
                    const f = (a: number) => {
                      'worklet';
                      return a;
                    };
                    const w = context.createRunAsync(f);
                    let value = await w(100);
                    console.log('1.测试createContext方法,返回:' + value);
                    setRet(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>createContext</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="2.测试createSharedValue方法,执行成功返回false">
                <Text>
                  {`测试函数：
                     const obj = Worklets.createSharedValue([0, 1, 2, 3, 4]);
                     const f = () => {
                      'worklet';
                      return Worklets.__jsi_is_array(obj.value);
                    };
                    const w = Worklets.defaultContext.createRunAsync(f)`}
                </Text>
                <Text>测试方法：w()</Text>
                <Text>返回值：{ret1}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const obj = Worklets.createSharedValue([0, 1, 2, 3, 4]);
                    const f = () => {
                      'worklet';
                      return Worklets.__jsi_is_array(obj.value);
                    };
                    const w = Worklets.defaultContext.createRunAsync(f);
                    let value = await w();
                    console.log('2.测试createSharedValue方法,返回:' + value);
                    setRet1(value ? 'true' : 'false');
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>createSharedValue</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="3.测试createRunOnJS方法,执行成功返回200">
                <Text>
                  {`测试函数：
                    const workletB = Worklets.createRunOnJS(function (
                      a: number,
                    ) {
                      'worklet';
                      return a;
                    });

                    const workletA = Worklets.defaultContext.createRunAsync(
                      (a: number) => {
                        'worklet';
                        return workletB(a);
                      },
                    );`}
                </Text>
                <Text>测试方法：workletA(200)</Text>
                <Text>返回值：{ret2}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const workletB = Worklets.createRunOnJS(function (
                      a: number,
                    ) {
                      'worklet';
                      return a;
                    });

                    const workletA = Worklets.defaultContext.createRunAsync(
                      (a: number) => {
                        'worklet';
                        return workletB(a);
                      },
                    );
                    let value = await workletA(200);
                    console.log('3.测试createRunOnJS方法,返回:' + value);
                    setRet2(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>createRunOnJS</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="4.测试runOnJS方法,执行成功返回100">
                <Text>
                  {`测试函数：
                      function testRunOnJS(a: number) {
                        'worklet';
                        return Worklets.runOnJS((a: number) => {
                          return a + 100;
                        });
                      }`}
                </Text>
                <Text>测试方法：testRunOnJS(100)</Text>
                <Text>返回值：{ret3}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    let value = await testRunOnJS(100);
                    console.log('4.测试runOnJS方法,返回:' + value);
                    setRet3(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>runOnJS</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="5.测试getCurrentThreadId方法,执行成功返回true">
                <Text>测试方法：Worklets.getCurrentThreadId()</Text>
                <Text>返回值：{ret4}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const threadId = Worklets.getCurrentThreadId();
                    let value = Number.isSafeInteger(threadId);
                    console.log('5.测试getCurrentThreadId方法,返回:' + value);
                    setRet4(value ? 'true' : 'false');
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>getCurrentThreadId</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="6.测试defaultContext接口,执行成功返回8">
                <Text>
                  {`测试函数： 
                      const adder = (a: number) => {
                        'worklet';
                        return a + a;
                      };
                      const w_square = Worklets.defaultContext.createRunAsync(
                        (a: number) => {
                          'worklet';
                          return Math.sqrt(adder(a));
                        },
                      );`}
                </Text>
                <Text>测试方法：w_square(32)</Text>
                <Text>返回值：{ret5}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const adder = (a: number) => {
                      'worklet';
                      return a + a;
                    };
                    const w_square = Worklets.defaultContext.createRunAsync(
                      (a: number) => {
                        'worklet';
                        return Math.sqrt(adder(a));
                      },
                    );
                    let value = await w_square(32);
                    console.log('6.测试defaultContext接口,返回:' + value);
                    setRet5(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>defaultContext</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="7.测试currentContext接口,执行成功返回200">
                <Text>
                  {`测试函数：
                  const rootWorklet = () => {
                    'worklet';
                    const cl = {x: 100};
                    const nestedWorklet = (c: number) => {
                      'worklet';
                      return c + cl.x;
                    };
                    const nestedWorkletFn =
                      Worklets.currentContext.createRunAsync(nestedWorklet);
                    return nestedWorkletFn(100);
                  };
                  const fw = () => {
                    'worklet';
                    return rootWorklet();
                  };
                  let wf = Worklets.defaultContext.createRunAsync(fw);`}
                </Text>
                <Text>测试方法：wf()</Text>
                <Text>返回值：{ret6}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const rootWorklet = () => {
                      'worklet';
                      const cl = {x: 100};
                      const nestedWorklet = (c: number) => {
                        'worklet';
                        return c + cl.x;
                      };
                      const nestedWorkletFn =
                        Worklets.currentContext.createRunAsync(nestedWorklet);
                      return nestedWorkletFn(100);
                    };
                    const fw = () => {
                      'worklet';
                      return rootWorklet();
                    };
                    let wf = Worklets.defaultContext.createRunAsync(fw);
                    let value = await wf();
                    console.log('7.测试currentContext接口,返回:' + value);
                    setRet6(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>currentContext</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="8.测试__jsi_is_array方法,执行成功返回true">
                <Text>
                  {`测试函数：
                  const obj = {a: [0, 1, 2, 3, 4]};
                  const f = () => {
                    'worklet';
                    return Worklets.__jsi_is_array(obj.a);
                  };
                  const w = Worklets.defaultContext.createRunAsync(f);`}
                </Text>
                <Text>测试方法：w()</Text>
                <Text>返回值：{ret7}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const obj = {a: [0, 1, 2, 3, 4]};
                    const f = () => {
                      'worklet';
                      return Worklets.__jsi_is_array(obj.a);
                    };
                    const w = Worklets.defaultContext.createRunAsync(f);
                    let value = await w();
                    console.log('8.测试__jsi_is_array方法,返回:' + value);
                    setRet7(value ? 'true' : 'false');
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>__jsi_is_array</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="9.测试__jsi_is_object方法,执行成功返回true">
                <Text>
                  {`测试函数：
                  const obj = {a: [0, 1, 2, 3, 4]};
                  const f = () => {
                    'worklet';
                    return Worklets.__jsi_is_object(obj);
                  };
                  const w = Worklets.defaultContext.createRunAsync(f);`}
                </Text>
                <Text>测试方法：w()</Text>
                <Text>返回值：{ret8}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const obj = {a: [0, 1, 2, 3, 4]};
                    const f = () => {
                      'worklet';
                      return Worklets.__jsi_is_object(obj);
                    };
                    const w = Worklets.defaultContext.createRunAsync(f);
                    let value = await w();
                    console.log('9.测试__jsi_is_object方法,返回:' + value);
                    setRet8(value ? 'true' : 'false');
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>__jsi_is_object</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="10.测试context.createRunAsync方法,执行成功返回200">
                <Text>
                  {`测试函数：
                    const f = (a: number) => {
                      'worklet';
                      return a + 100;
                    };
                    const w = Worklets.defaultContext.createRunAsync(f);`}
                </Text>
                <Text>测试方法：w(100)</Text>
                <Text>返回值：{ret9}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const f = (a: number) => {
                      'worklet';
                      return a + 100;
                    };
                    const w = Worklets.defaultContext.createRunAsync(f);
                    let value = await w(100);
                    console.log('4.测试runOnJS方法,返回:' + value);
                    setRet9(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>context.createRunAsync</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="11.测试context.runAsync方法,执行成功返回true">
                <Text>
                  {`测试函数：
                   const jsThreadId = Worklets.getCurrentThreadId();
                   const workletThreadId =
                      Worklets.defaultContext.runAsync(() => {
                       'worklet';
                       return Worklets.getCurrentThreadId();
                     });`}
                </Text>
                <Text>测试方法：jsThreadId !== workletThreadId</Text>
                <Text>返回值：{ret10}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const jsThreadId = Worklets.getCurrentThreadId();
                    const workletThreadId =
                      await Worklets.defaultContext.runAsync(() => {
                        'worklet';
                        return Worklets.getCurrentThreadId();
                      });
                    let value = jsThreadId !== workletThreadId;
                    console.log('11.测试context.runAsync方法,返回:' + value);
                    setRet10(value ? 'true' : 'false');
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>context.runAsync</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="12.测试context.addDecorator方法,执行成功返回{'a': 1, 'b': 2}">
                <Text>
                  {`测试函数：
                    Worklets.defaultContext.addDecorator('myDecorator', {
                      a: 1,
                      b: 2,
                    });
                    const workletA = Worklets.defaultContext.createRunAsync(
                      function () {
                        'worklet';
                        return global?.myDecorator;
                      },
                    );`}
                </Text>
                <Text>测试方法：workletA()</Text>
                <Text>返回值：{ret11}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    Worklets.defaultContext.addDecorator('myDecorator', {
                      a: 1,
                      b: 2,
                    });
                    const workletA = Worklets.defaultContext.createRunAsync(
                      function () {
                        'worklet';
                        return global?.myDecorator;
                      },
                    );
                    let value = await workletA();
                    console.log(
                      '12.测试context.addDecorator方法,返回:' + value,
                    );
                    setRet11(JSON.stringify(value));
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>context.addDecorator</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="13.测试useWorklet方法,执行成功返回200">
                <Text>
                  {`测试函数：
                    const testUseWorklet = useWorklet(
                      'default',
                      (a: number) => {
                        'worklet';
                        return a + 100;
                      },
                      [],
                    );
                    Worklets.defaultContext.runAsync(
                    () => {
                      'worklet';
                      return testUseWorklet(100);
                    },`}
                </Text>
                <Text>测试方法：testUseWorklet(100)</Text>
                <Text>返回值：{ret12}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    let value = await Worklets.defaultContext.runAsync(() => {
                      'worklet';
                      return testUseWorklet(100);
                    });
                    console.log('13.测试useWorklet方法,返回:' + value);
                    setRet12(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>useWorklet</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="14.测试useRunOnJS方法,执行成功返回200">
                <Text>
                  {`测试函数：
                    const testUseRunInJS = useRunOnJS((a: number) => {
                      return a + 100;
                    }, []);
                    Worklets.defaultContext.runAsync(
                      () => {
                        'worklet';
                        return testUseRunInJS(100);
                      },
                    );`}
                </Text>
                <Text>测试方法：testUseRunInJS(100)</Text>
                <Text>返回值：{ret13}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    let value = await Worklets.defaultContext.runAsync(() => {
                      'worklet';
                      return testUseRunInJS(100);
                    });
                    console.log('14.测试useRunOnJS方法,返回:' + value);
                    setRet13(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>useRunOnJS</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="15.测试useSharedValue方法,执行成功返回73">
                <Text>
                  {`测试函数：
                   const counter = useSharedValue(42);
                   Worklets.defaultContext.runAsync(
                    () => {
                      'worklet';
                      counter.value = 73;
                      return counter.value;
                    },
                  ); `}
                </Text>
                <Text>测试方法：useSharedValue(42)</Text>
                <Text>返回值：{ret14}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    let value = await Worklets.defaultContext.runAsync(() => {
                      'worklet';
                      counter.value = 73;
                      return counter.value;
                    });
                    console.log('15.测试useSharedValue方法,返回:' + value);
                    setRet14(value);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>useSharedValue</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="16.测试isWorklet方法,执行成功返回false">
                <Text>
                  {`测试函数：
                  const bn = isWorklet(() => {
                    return 'js function';
                  });`}
                </Text>
                <Text>测试方法：isWorklet</Text>
                <Text>返回值：{ret15}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const bn = isWorklet(() => {
                      return 'js function';
                    });
                    console.log('16.测试isWorklet方法,返回:' + bn);
                    setRet15(bn ? 'true' : 'false');
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>isWorklet_false</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="17.测试isWorklet方法,执行成功返回true">
                <Text>
                  {`测试函数：
                    const bn = isWorklet(() => {
                      'worklet';
                      return 'worklet function';
                    });`}
                </Text>
                <Text>测试方法：isWorklet</Text>
                <Text>返回值：{ret16}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const bn = isWorklet(() => {
                      'worklet';
                      return 'worklet function';
                    });
                    console.log('17.测试isWorklet方法,返回:' + bn);
                    setRet16(bn ? 'true' : 'false');
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>isWorklet_true</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="18.测试worklet方法正常场景,执行成功返回200">
                <Text>
                  {`测试函数：
                    const f = worklet((a: number) => {
                      'worklet';
                      return a + 100;
                    });
                    Worklets.defaultContext.runAsync(
                      () => {
                        'worklet';
                        return f(100);
                      },
                    );`}
                </Text>
                <Text>测试方法：worklet</Text>
                <Text>返回值：{ret17}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const f = worklet((a: number) => {
                      'worklet';
                      return a + 100;
                    });
                    const data = await Worklets.defaultContext.runAsync(() => {
                      'worklet';
                      return f(100);
                    });
                    console.log('18.测试worklet方法正常场景,返回:' + data);
                    setRet17(data);
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>worklet_normal</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="19.测试worklet方法异常场景,执行成功返回true">
                <Text>
                  {`测试函数：
                   const f = worklet((a: number) => {
                    return a + 100;
                  });`}
                </Text>
                <Text>测试方法：worklet</Text>
                <Text>返回值：{ret18}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    let hasException = false;
                    try {
                      const f = worklet((a: number) => {
                        return a + 100;
                      });
                    } catch (error) {
                      hasException = true;
                    }
                    console.log(
                      '19.测试worklet方法异常场景,返回:' + hasException,
                    );
                    setRet18(hasException ? 'true' : 'false');
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>worklet_except</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="20.测试getWorkletDependencies方法,执行成功返回'[5]'">
                <Text>
                  {`测试函数：
                    const testGetWorkletDependencies = () => {
                      const valueFromOutside = 5;
                      const f = () => {
                        'worklet';
                        return valueFromOutside + 10;
                      };
                      const dependencies = getWorkletDependencies(f);
                      return dependencies;
                    };`}
                </Text>
                <Text>测试方法：testGetWorkletDependencies()</Text>
                <Text>返回值：{ret19}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const dependencies = testGetWorkletDependencies();
                    console.log(
                      '20.测试getWorkletDependencies方法,返回:' + dependencies,
                    );
                    setRet19(JSON.stringify(dependencies));
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>getWorkletDependencies</Text>
                </TouchableOpacity>
              </TestCase>
            </TestSuite>
          </Tester>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  module: {
    margin: 15,
  },
  moduleName: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 4,
    color: '#fff',
  },
  moduleContent: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#fff',
  },
  moduleButton: {
    backgroundColor: 'deepskyblue',
    height: 34,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 32,
    verticalAlign: 'middle',
  },
});
