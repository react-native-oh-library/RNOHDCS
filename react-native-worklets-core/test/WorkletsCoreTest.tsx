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
              <TestCase
                itShould="1.测试createContext方法"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const context = Worklets.createContext('test');
                      const f = (a: number) => {
                        'worklet';
                        return a;
                      };
                      const w = context.createRunAsync(f);
                      setState(await w(100));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>createContext</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.eq(100);
                }}
              />
              <TestCase
                itShould="2.测试createSharedValue方法"
                initialState={true}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const obj = Worklets.createSharedValue([0, 1, 2, 3, 4]);
                      const f = () => {
                        'worklet';
                        return Worklets.__jsi_is_array(obj.value);
                      };
                      const w = Worklets.defaultContext.createRunAsync(f);
                      setState(await w());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>createSharedValue</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.false;
                }}
              />
              <TestCase
                itShould="3.测试createRunOnJS方法"
                initialState={null}
                arrange={({setState}) => (
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
                      setState(await workletA(200));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>createRunOnJS</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="4.测试runOnJS方法"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      setState(await testRunOnJS(100));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>runOnJS</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(100);
                }}
              />
              <TestCase
                itShould="5.测试getCurrentThreadId方法"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const threadId = Worklets.getCurrentThreadId();
                      setState(Number.isSafeInteger(threadId));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>getCurrentThreadId</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="6.测试defaultContext接口"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue(0);
                      const setSharedValue = function (a: number) {
                        'worklet';
                        sharedValue.value = a;
                      };

                      const js1 = Worklets.createRunOnJS(setSharedValue);

                      const w1 = function (a: number) {
                        'worklet';
                        return js1(a);
                      };

                      const w = Worklets.defaultContext.createRunAsync(w1);
                      const data = await w(100);
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>defaultContext</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.undefined;
                }}
              />
              <TestCase
                itShould="7.测试currentContext接口"
                initialState={null}
                arrange={({setState}) => (
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
                      setState(await wf());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>currentContext</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="8.测试__jsi_is_array方法"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const obj = {a: [0, 1, 2, 3, 4]};
                      const f = () => {
                        'worklet';
                        return Worklets.__jsi_is_array(obj.a);
                      };
                      const w = Worklets.defaultContext.createRunAsync(f);
                      setState(await w());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>__jsi_is_array_true</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />

              <TestCase
                itShould="9.测试__jsi_is_object方法返回true"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const obj = {a: [0, 1, 2, 3, 4]};
                      const f = () => {
                        'worklet';
                        return Worklets.__jsi_is_object(obj);
                      };
                      const w = Worklets.defaultContext.createRunAsync(f);
                      setState(await w());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>__jsi_is_object_true</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="10.测试context.createRunAsync方法"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue(0);
                      const setSharedValue = function (a: number) {
                        'worklet';
                        sharedValue.value = a;
                      };

                      const js1 = Worklets.createRunOnJS(setSharedValue);

                      const w1 = function (a: number) {
                        'worklet';
                        return js1(a);
                      };

                      const w = Worklets.defaultContext.createRunAsync(w1);
                      const data = await w(100);
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      context.createRunAsync
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.undefined;
                }}
              />
              <TestCase
                itShould="11.测试context.runAsync方法"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const jsThreadId = Worklets.getCurrentThreadId();
                      const workletThreadId =
                        await Worklets.defaultContext.runAsync(() => {
                          'worklet';
                          return Worklets.getCurrentThreadId();
                        });
                      setState(jsThreadId !== workletThreadId);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>context.runAsync</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="12.测试context.addDecorator方法"
                initialState={null as any}
                arrange={({setState}) => (
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
                      setState(await workletA());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>context.addDecorator</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify({
                      a: 1,
                      b: 2,
                    }),
                  );
                }}
              />
              <TestCase
                itShould="13.测试useWorklet方法"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const data = await Worklets.defaultContext.runAsync(
                        () => {
                          'worklet';
                          return testUseWorklet(100);
                        },
                      );
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>useWorklet</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="14.测试useRunOnJS方法"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const data = await Worklets.defaultContext.runAsync(
                        () => {
                          'worklet';
                          return testUseRunInJS(100);
                        },
                      );
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>useRunOnJS</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="15.测试useSharedValue方法"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const data = await Worklets.defaultContext.runAsync(
                        () => {
                          'worklet';
                          counter.value = 73;
                          return counter.value;
                        },
                      );
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>useSharedValue</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(73);
                }}
              />
              <TestCase
                itShould="16.测试isWorklet方法返回false"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const bn = isWorklet(() => {
                        return 'js function';
                      });
                      setState(bn);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      isWorklet_return_false
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.false;
                }}
              />
              <TestCase
                itShould="17.测试isWorklet方法返回true"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const bn = isWorklet(() => {
                        'worklet';
                        return 'worklet function';
                      });
                      setState(bn);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>isWorklet_return_true</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="18.测试worklet方法正常场景"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const f = worklet((a: number) => {
                        'worklet';
                        return a + 100;
                      });
                      const data = await Worklets.defaultContext.runAsync(
                        () => {
                          'worklet';
                          return f(100);
                        },
                      );
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>worklet_normal</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="19.测试worklet方法异常场景"
                initialState={null as any}
                arrange={({setState}) => (
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
                      setState(hasException);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>worklet_except</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="20.测试getWorkletDependencies方法"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const dependencies = testGetWorkletDependencies();
                      console.log(dependencies);
                      setState(dependencies);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      getWorkletDependencies
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(JSON.stringify([5]));
                }}
              />
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
