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

const getWorkletInfo = <T extends Array<unknown>, R>(
  worklet: (...args: T) => R,
) => {
  // @ts-ignore
  return worklet.__initData
    ? // @ts-ignore
      {closure: worklet.__closure, code: worklet.__initData.code}
    : // @ts-ignore
      {closure: worklet.__closure, code: worklet.asString};
};

export const WorkletsCoreTest = () => {
  const counter = useSharedValue(42);
  const check_is_not_worklet = () => {
    const fn = Worklets.defaultContext.createRunAsync((a: number) => {
      return a * 200;
    });
    return typeof fn === 'function';
  };

  const check_worklet_closure = () => {
    const x = 100;
    const w = (a: number) => {
      'worklet';
      return a + x;
    };
    const {closure} = getWorkletInfo(w);
    return closure;
  };

  const call_nested_worklet = () => {
    const rootWorklet = () => {
      'worklet';
      const cl = {x: 100};
      const nestedWorklet = (c: number) => {
        'worklet';
        return c + cl.x;
      };
      const nestedWorkletFn =
        Worklets.defaultContext.createRunAsync(nestedWorklet);
      return nestedWorkletFn(100);
    };
    const fw = () => {
      'worklet';
      return rootWorklet();
    };
    let wf = Worklets.defaultContext.createRunAsync(fw);
    return wf;
  };

  const check_worklet_closure_shared_value = () => {
    const x = Worklets.createSharedValue(1000);
    const w = (a: number) => {
      'worklet';
      return a + x.value;
    };
    const {closure} = getWorkletInfo(w);
    return closure;
  };

  const check_worklet_code = () => {
    const w = (a: number) => {
      'worklet';
      return a;
    };
    const {code} = getWorkletInfo(w);
    return code;
  };

  const check_js_promise_resolves = () => {
    const f = (a: number) => {
      'worklet';
      return Promise.resolve(a + 100);
    };
    return f(100);
  };

  const check_c_promise_resolves_from_context = () => {
    const f = (a: number) => {
      'worklet';
      return a + 100;
    };
    const w = Worklets.defaultContext.createRunAsync(f);
    return w;
  };

  const check_finally_is_called = () => {
    const f = (a: number) => {
      'worklet';
      return a + 100;
    };
    const w = Worklets.defaultContext.createRunAsync(f);
    return w;
  };

  const check_then_with_empty_args = () => {
    const f = (a: number) => {
      'worklet';
      return a + 100;
    };
    const w = Worklets.defaultContext.createRunAsync(f);
    return w;
  };

  const check_pure_array_is_passed_as_array = () => {
    const array = [0, 1, 2, 3, 4];
    const f = () => {
      'worklet';
      return Array.isArray(array);
    };
    const w = Worklets.defaultContext.createRunAsync(f);
    return w;
  };

  const testUseRunInJS = useRunOnJS((a: number) => {
    return a + 100;
  }, []);

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
            <TestSuite name="测试worklets属性和方法">
              <TestCase
                itShould="1.check is not worklet"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const data = check_is_not_worklet();
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>not_worklet</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="2.check worklet closure"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const data = check_worklet_closure();
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>check_worklet_closure</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.eq(JSON.stringify({x: 100}));
                }}
              />
              <TestCase
                itShould="3.call nested worklet"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const wf = call_nested_worklet();
                      setState(await wf());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>call_nested_worklet</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="4.check worklet closure shared value"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const data = check_worklet_closure_shared_value();
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      worklet_closure_shared_value
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.equal(
                    JSON.stringify({x: {value: 1000}}),
                  );
                }}
              />
              <TestCase
                itShould="5.check worklet code"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const data = check_worklet_code();
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>worklet_code</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.equal(
                    'function anonymous(a) {\n  return a;\n}',
                  );
                }}
              />
              <TestCase
                itShould="6.check js promise resolves"
                initialState={0}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const data = await check_js_promise_resolves();
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>js_promise_resolves</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="7.check c promise resolves from context"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const w = check_c_promise_resolves_from_context();
                      const data = await new Promise(async resolve => {
                        w(100).then(resolve);
                      });
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>c_promise_resolves</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="8.check finally is called"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const w = check_finally_is_called();
                      const data = await new Promise(async resolve => {
                        w(100).finally(resolve);
                      });
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>finally_is_called</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.undefined;
                }}
              />
              <TestCase
                itShould="9.check then with empty args"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const w = check_then_with_empty_args();
                      const data = await new Promise(async resolve => {
                        w(100).then().finally(resolve);
                      });
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>then_with_empty_args</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.undefined;
                }}
              />
              <TestCase
                itShould="10.check pure array is passed as array"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const w = check_pure_array_is_passed_as_array();
                      setState(await w());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      pure_array_is_passed_as_array
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="11.check thread id exists"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const threadId = Worklets.getCurrentThreadId();
                      setState(Number.isSafeInteger(threadId));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>thread_id_exists</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="12.check thread id consecutive calls are equal"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const first = Worklets.getCurrentThreadId();
                      const second = Worklets.getCurrentThreadId();
                      setState(first === second);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>thread_are_equal</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="13.check thread id consecutive calls in worklet are equal"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const [first, second] =
                        await Worklets.defaultContext.runAsync(() => {
                          'worklet';
                          const firstId = Worklets.getCurrentThreadId();
                          const secondId = Worklets.getCurrentThreadId();
                          return [firstId, secondId];
                        });
                      setState(first === second);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      thread_id_in_worklet_are_equal
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="14.check thread ids are different"
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
                    <Text style={styles.buttonText}>
                      thread_ids_are_different
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="15.check pure array is passed as jsi array"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const array = [0, 1, 2, 3, 4];
                      const f = () => {
                        'worklet';
                        return Worklets.__jsi_is_array(array);
                      };
                      const w = Worklets.defaultContext.createRunAsync(f);
                      setState(await w());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      pure_array_is_passed_as_jsi_array
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="16.check pure array inside object is passed as jsi array"
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
                    <Text style={styles.buttonText}>
                      pure_array_inside_object_is_passed
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="17.check pure array nested argument is passed as jsi array"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const obj = {a: [0, 1, 2, 3, 4]};
                      const f = (t: typeof obj) => {
                        'worklet';
                        return Worklets.__jsi_is_array(t.a);
                      };
                      const w = Worklets.defaultContext.createRunAsync(f);
                      setState(await w(obj));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      pure_array_nested_argument
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="18.check shared value array is not passed as jsi array"
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
                    <Text style={styles.buttonText}>
                      shared_value_array_is_not_passed
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.false;
                }}
              />
              <TestCase
                itShould="19.check shared value nested array is not passed as jsi array"
                initialState={true}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const obj = Worklets.createSharedValue({
                        a: [0, 1, 2, 3, 4],
                      });
                      const f = () => {
                        'worklet';
                        return Worklets.__jsi_is_array(obj.value.a);
                      };
                      const w = Worklets.defaultContext.createRunAsync(f);
                      setState(await w());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      shared_value_array_is_not_passed2
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.false;
                }}
              />
              <TestCase
                itShould="20.check called directly"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const result = await Worklets.defaultContext.runAsync(
                        () => {
                          'worklet';
                          return 42;
                        },
                      );
                      setState(result);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>called_directly</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(42);
                }}
              />
            </TestSuite>
            <TestSuite name="测试worklets context属性和方法">
              <TestCase
                itShould="21.call async on js thread"
                initialState={0}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const worklet = (a: number) => {
                        'worklet';
                        return a;
                      };
                      const data = worklet(100);
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      call_async_on_js_thread
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(100);
                }}
              />
              <TestCase
                itShould="22.call async to worklet thread context"
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
                    <Text style={styles.buttonText}>async_to_worklet</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.eq(100);
                }}
              />
              <TestCase
                itShould="23.call async to worklet thread and call second worklet"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue(0);
                      const workletB = function (a: number) {
                        'worklet';
                        sharedValue.value = a;
                      };

                      const workletA = function (a: number) {
                        'worklet';
                        workletB(a);
                      };

                      const w =
                        Worklets.defaultContext.createRunAsync(workletA);
                      const data = await w(100);
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>async_worklet</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.undefined;
                }}
              />
              <TestCase
                itShould="24.call async to js from worklet"
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
                    <Text style={styles.buttonText}>call_async_to_js</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.undefined;
                }}
              />
              <TestCase
                itShould="25.call async to js from worklet with retval"
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
                    <Text style={styles.buttonText}>
                      async_to_js_from_worklet
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="26.call decorated js function from worklet"
                initialState={0}
                arrange={({setState}) => (
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

                      setState(await w_square(32));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      decorated_js_function_from_worklet
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(8);
                }}
              />
              <TestCase
                itShould="27.call async to and from worklet"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue(0);
                      const workletB = function (b: number) {
                        'worklet';
                        sharedValue.value = b;
                      };

                      const workletA = Worklets.defaultContext.createRunAsync(
                        (a: number) => {
                          'worklet';
                          return workletB(a);
                        },
                      );
                      setState(await workletA(100));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      async_to_and_from_worklet
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.undefined;
                }}
              />
              <TestCase
                itShould="28.call async to and from worklet with return value"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const workletB = () => {
                        'worklet';
                        return 1000;
                      };
                      const workletA = Worklets.defaultContext.createRunAsync(
                        () => {
                          'worklet';
                          return workletB();
                        },
                      );
                      setState(await workletA());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      async_to_and_from_worklet
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(1000);
                }}
              />
              <TestCase
                itShould="29.call async to and from worklet multiple times with return value"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const workletB = (): number => {
                        'worklet';
                        return 1000;
                      };
                      const workletA = Worklets.defaultContext.createRunAsync(
                        function () {
                          'worklet';
                          let r = 0;
                          for (let i = 0; i < 100; i++) {
                            r += workletB();
                          }
                          return r;
                        },
                      );
                      setState(await workletA());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      worklet_multiple_times
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(100000);
                }}
              />
              <TestCase
                itShould="30.call worklet to worklet without wrapping args"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const workletB = (a: {current: number}) => {
                        'worklet';
                        return a.current;
                      };
                      const workletA = Worklets.defaultContext.createRunAsync(
                        function () {
                          'worklet';
                          return workletB({current: 100});
                        },
                      );
                      setState(await workletA());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      worklet_without_wrapping_args
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(100);
                }}
              />
              <TestCase
                itShould="31.call worklet with this"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const obj = {
                        a: 100,
                        b: 100,
                        f: function () {
                          'worklet';
                          return this.a + this.b;
                        },
                      };
                      const sharedValue = Worklets.createSharedValue(obj);
                      const worklet = Worklets.defaultContext.createRunAsync(
                        function () {
                          'worklet';
                          return sharedValue.value.f();
                        },
                      );
                      setState(await worklet());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>worklet_with_this</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="32.call createRunOnJS inside worklet"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const fn = function (b: number) {
                        'worklet';
                        return b * 2;
                      };
                      const f = function (a: number) {
                        'worklet';
                        const wjs = Worklets.createRunOnJS(fn);
                        return wjs(a);
                      };
                      const w = Worklets.defaultContext.createRunAsync(f);
                      setState(await w(100));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      createRunOnJS_inside_worklet
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="33.call worklet in same context"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const workletInTest =
                        Worklets.defaultContext.createRunAsync(function (
                          a: number,
                        ) {
                          'worklet';
                          return 100 + a;
                        });

                      const worklet = Worklets.defaultContext.createRunAsync(
                        function () {
                          'worklet';
                          const a = workletInTest(100);
                          return a;
                        },
                      );
                      setState(await worklet());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      worklet_in_same_context
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="34.call worklet in other context"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const ctx = Worklets.createContext('test');
                      function calcInCtx(a: number) {
                        'worklet';
                        return 100 + a;
                      }
                      calcInCtx.name = 'calcInCtx';
                      const workletInCtx = ctx.createRunAsync(calcInCtx);

                      function calcInDefaultCtx() {
                        'worklet';
                        return workletInCtx(100);
                      }
                      calcInDefaultCtx.name = 'calcInDefaultCtx';
                      const worklet =
                        Worklets.defaultContext.createRunAsync(
                          calcInDefaultCtx,
                        );
                      setState(await worklet());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      worklet_in_other_context
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="35.call createRunAsync from context"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const worklet = Worklets.defaultContext.createRunAsync(
                        () => {
                          'worklet';
                          const workletInTest =
                            Worklets.defaultContext.createRunAsync(
                              (a: number) => {
                                'worklet';
                                return 100 + a;
                              },
                            );
                          return workletInTest(100);
                        },
                      );
                      setState(await worklet());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      createRunAsync_from_context
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="36.call createRunAsync between contexts"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const ctx = Worklets.createContext('test');

                      const worklet = Worklets.defaultContext.createRunAsync(
                        () => {
                          'worklet';
                          const workletInTest = ctx.createRunAsync(
                            (a: number) => {
                              'worklet';
                              return 100 + a;
                            },
                          );
                          return workletInTest(100);
                        },
                      );
                      setState(await worklet());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      createRunAsync_between_contexts
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="37.call worklet inside worklet"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const f = (a: number) => {
                        'worklet';
                        return a * 2;
                      };
                      const fw = () => {
                        'worklet';
                        return f(100);
                      };
                      let wf = Worklets.defaultContext.createRunAsync(fw);
                      setState(await wf());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      call_worklet_inside_worklet
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="38.call run async directly"
                initialState={true}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const result = await Worklets.defaultContext.runAsync(
                        () => {
                          'worklet';
                          return 42;
                        },
                      );
                      setState(result);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      call_run_async_directly
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(42);
                }}
              />
              <TestCase
                itShould="39.call run on js directly"
                initialState={true}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const f = function (a: number) {
                        'worklet';
                        return Worklets.runOnJS(() => {
                          'worklet';
                          return a * 2;
                        });
                      };
                      const w = Worklets.defaultContext.createRunAsync(f);
                      setState(await w(100));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      call_run_on_js_directly
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="40.call run async and run on js directly"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const a = 150;
                      const result = await Worklets.defaultContext.runAsync(
                        () => {
                          'worklet';
                          const b = a * 2;
                          return Worklets.runOnJS(() => {
                            'worklet';
                            return b * 2;
                          });
                        },
                      );
                      setState(result);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      run_async_on_js_directly
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(600);
                }}
              />
              <TestCase
                itShould="41.call run async and run on js directly other context"
                initialState={false}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const a = 150;
                      const context = Worklets.createContext('nested-context');
                      const result = await Worklets.defaultContext.runAsync(
                        () => {
                          'worklet';
                          const b = a * 2;
                          return context.runAsync(() => {
                            'worklet';
                            const c = b * 2;
                            return Worklets.runOnJS(() => {
                              'worklet';
                              return c * 2;
                            });
                          });
                        },
                      );
                      setState(result);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      run_async_on_js_directly
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(1200);
                }}
              />
            </TestSuite>
            <TestSuite name="测试SharedValue">
              <TestCase
                itShould="42.get set numeric value"
                initialState={0}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const sharedValue = Worklets.createSharedValue(100);
                      sharedValue.value = 50;
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>get_set_numeric_value</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(50);
                }}
              />
              <TestCase
                itShould="43.get set decimal value"
                initialState={0 as number}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const sharedValue = Worklets.createSharedValue(3.14159);
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>get_set_decimal_value</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.eq(3.14159);
                }}
              />
              <TestCase
                itShould="44.get set bool value"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const sharedValue = Worklets.createSharedValue(true);
                      sharedValue.value = false;
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>get_set_bool_value</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.false;
                }}
              />
              <TestCase
                itShould="45.get set string value"
                initialState={null}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      const sharedValue =
                        Worklets.createSharedValue('hello world');
                      sharedValue.value = 'hello worklet';
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>get_set_string_value</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq('hello worklet');
                }}
              />
              <TestCase
                itShould="46.get set array value"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue([100, 50]);
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>get_set_array_value</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state[0]).to.be.eq(100);
                  expect(state[1]).to.be.eq(50);
                }}
              />
              <TestCase
                itShould="47.is object"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue({
                        a: 100,
                        b: 200,
                      });
                      setState(typeof sharedValue.value === 'object');
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>is_object</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="48.object keys"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue({
                        a: 100,
                        b: 200,
                      });
                      setState(Object.keys(sharedValue.value));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>object_keys</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify(['a', 'b']),
                  );
                }}
              />
              <TestCase
                itShould="49.object values"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue({
                        a: 100,
                        b: 200,
                      });
                      setState(Object.values(sharedValue.value));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>object_values</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify([100, 200]),
                  );
                }}
              />
              <TestCase
                itShould="50.box number to string"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue(100);
                      // @ts-ignore
                      sharedValue.value = '100';
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>box_number_to_string</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq('100');
                }}
              />
              <TestCase
                itShould="51.box string to number"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue('100');
                      // @ts-ignore
                      sharedValue.value = 100;
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>box_string_to_number</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(100);
                }}
              />
              <TestCase
                itShould="52.box string to array"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue('100');
                      // @ts-ignore
                      sharedValue.value = [100, 200];
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>box_string_to_array</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify([100, 200]),
                  );
                }}
              />
              <TestCase
                itShould="53.box string to object"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue('100');
                      // @ts-ignore
                      sharedValue.value = {a: 100, b: 200};
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>box_string_to_object</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify({a: 100, b: 200}),
                  );
                }}
              />
              <TestCase
                itShould="54.box array to object"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue([
                        100, 200,
                      ]);
                      // @ts-ignore
                      sharedValue.value = {a: 100, b: 200};
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>box_array_to_object</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify({a: 100, b: 200}),
                  );
                }}
              />
              <TestCase
                itShould="55.box object to array"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue({
                        a: 100,
                        b: 200,
                      });
                      // @ts-ignore
                      sharedValue.value = [100.34, 200];
                      setState(sharedValue.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>box_object_to_array</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify([100.34, 200]),
                  );
                }}
              />
              <TestCase
                itShould="56.array object keys"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      setState(
                        Object.keys(
                          Worklets.createSharedValue([50, 21, 32]).value,
                        ),
                      );
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>array_object_keys</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify(['0', '1', '2']),
                  );
                }}
              />
              <TestCase
                itShould="57.array object values"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      setState(
                        Object.values(
                          Worklets.createSharedValue([50, 21, 32]).value,
                        ),
                      );
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      createRunAsync_between_contexts
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify([50, 21, 32]),
                  );
                }}
              />
              <TestCase
                itShould="58.array spread"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue([
                        100, 200,
                      ]);
                      const p = [...sharedValue.value];
                      setState(p);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>array_spread</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify([100, 200]),
                  );
                }}
              />
              <TestCase
                itShould="59.array destructure"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue([
                        100, 200,
                      ]);
                      const [first] = [...sharedValue.value];
                      setState(first);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>array_destructure</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(100);
                }}
              />
              <TestCase
                itShould="60.array destructure to object"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue([
                        100, 200,
                      ]);
                      const p = {...sharedValue.value};
                      setState(p);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      array_destructure_to_object
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify({0: 100, 1: 200}),
                  );
                }}
              />
              <TestCase
                itShould="61.array length"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue([100, 50]);

                      setState(sharedValue.value.length);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>array_length</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(2);
                }}
              />
              <TestCase
                itShould="62.object value spread"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue({
                        a: 100,
                        b: 200,
                      });
                      const p = {...sharedValue.value};
                      setState(p);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>object_value_spread</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(JSON.stringify(state)).to.be.eq(
                    JSON.stringify({a: 100, b: 200}),
                  );
                }}
              />
              <TestCase
                itShould="63.add listener"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue(100);
                      const didChange = Worklets.createSharedValue(false);
                      const unsubscribe = sharedValue.addListener(
                        () => (didChange.value = true),
                      );
                      sharedValue.value = 50;
                      unsubscribe();
                      setState(didChange.value);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>add_listener</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="64.add listener from worklet"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const sharedValue = Worklets.createSharedValue(100);
                      const didChange = Worklets.createSharedValue(false);
                      const w = Worklets.defaultContext.createRunAsync(
                        function () {
                          'worklet';
                          const unsubscribe = sharedValue.addListener(
                            () => (didChange.value = true),
                          );
                          sharedValue.value = 50;
                          unsubscribe();
                          return didChange.value;
                        },
                      );
                      setState(await w());
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>
                      add_listener_from_worklet
                    </Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
            </TestSuite>
            <TestSuite name="测试其他属性和方法">
              <TestCase
                itShould="65.currentContext"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      const context = Worklets.createContext('context1');
                      const data = await context.runAsync(() => {
                        'worklet';
                        return Worklets.currentContext;
                      });
                      setState(data);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>currentContext</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.undefined;
                }}
              />
              <TestCase
                itShould="66.addDecorator"
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
                    <Text style={styles.buttonText}>addDecorator</Text>
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
                itShould="67.useRunOnJS"
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
                itShould="68.useWorklet in worklet"
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
                    <Text style={styles.buttonText}>useWorklet_in_worklet</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="69.useWorklet in js"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={async () => {
                      setState(await testUseWorklet(100));
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>useWorklet_in_js</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.eq(200);
                }}
              />
              <TestCase
                itShould="70.useSharedValue"
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
                itShould="71.isWorklet is false"
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
                    <Text style={styles.buttonText}>isWorklet_is_false</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.false;
                }}
              />
              <TestCase
                itShould="72.isWorklet is true"
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
                    <Text style={styles.buttonText}>isWorklet_is_true</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase
                itShould="73.worklet normal"
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
                itShould="74.worklet except"
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
                itShould="75.getWorkletDependencies"
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
