import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import * as React from 'react';
import SafeModule from 'react-native-safe-modules';
import {View, Button, ScrollView, Text} from 'react-native';
import {useState, useRef} from 'react';

/* 
  注意：这个示例获取的是 react-native-keep-awake 的 NativeModule，测试前需要安装 react-native-keep-awake 这个库，
        react-native-keep-awake 源库的 NativeModule 名称为 KCKeepAwake
        harmonyOS化过的的 NativeModule 名称为 KeepAwakeNativeModule，
        如果要测试create、module接口
          1. 获取 harmonyOS 的 NativeModule，请将参数 moduleName 改为 KeepAwakeNativeModule，
          2. iOS/Android的参数 moduleName  名称为 KCKeepAwake
*/

const MyButton = SafeModule.component({
  viewName: 'NonExistentViewName',
  mockComponent: Button,
});

// iOS/Android中moduleName为 KCKeepAwake
const myModules = SafeModule.create({
  moduleName: 'KeepAwakeNativeModule', // 传入正确的 react-native-keep-awake 的 NativeModule值，可以获取到react-native-keep-awake 的 原生模块，在调用myModules.activate()的时候，实际调用的是 react-native-keep-awake的activate()
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
});

// iOS/Android中moduleName为 KCKeepAwake
const myModulesArray = SafeModule.create({
  moduleName: ['KeepAwakeNativeModule', 'MyModule'],
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
});

// iOS/Android中moduleName为 KCKeepAwake
const myModulesArraya = SafeModule.create({
  moduleName: ['MyModule', 'KeepAwakeNativeModule'],
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
});

const myKCKeepAwake = SafeModule.create({
  moduleName: 'MyKCKeepAwake', // 这个值是自定义的，在项目的原生模块中是不存在的，所以这时候调用 myKCKeepAwake.activate()，实际为调用 mock中的 activate()，所以返回值是1
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
});

// iOS/Android中moduleName为 KCKeepAwake
const myModulesGetVersion = SafeModule.create({
  moduleName: 'KeepAwakeNativeModule',
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
  getVersion: () => 1,
  versionOverrides: {
    1: {
      oldactivate: (moduleKey: any, module: any) => ({
        moduleKey,
        module,
      }),
    },
  },
});

// module
// iOS/Android中moduleName为 KCKeepAwake
const myModulesModule = SafeModule.module({
  moduleName: 'KeepAwakeNativeModule', // 传入正确的 react-native-keep-awake 的 NativeModule值，可以获取到react-native-keep-awake 的 原生模块，在调用myModules.activate()的时候，实际调用的是 react-native-keep-awake的activate()
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
});

// iOS/Android中moduleName为 KCKeepAwake
const myModulesArrayModule = SafeModule.module({
  moduleName: ['KeepAwakeNativeModule', 'MyModule'],
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
});

const myKCKeepAwakeModule = SafeModule.module({
  moduleName: 'MyKCKeepAwake', // 这个值是自定义的，在项目的原生模块中是不存在的，所以这时候调用 myKCKeepAwake.activate()，实际为调用 mock中的 activate()，所以返回值是1
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
});

// iOS/Android中moduleName为 KCKeepAwake
const myModulesGetVersionModule = SafeModule.module({
  moduleName: 'KeepAwakeNativeModule',
  mock: {
    activate: () => 1,
    deactivate: () => 2,
  },
  getVersion: () => 2,
  versionOverrides: {
    2: {
      oldactivate: (moduleKey: any, module: any) => ({
        moduleKey,
        module,
      }),
    },
  },
});

export default function SafeModuleExample() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [text7, setText7] = useState('');
  const [text8, setText8] = useState('');
  const [text9, setText9] = useState('');

  return (
    <ScrollView>
      <View>
        <Tester>
          <TestSuite name="SafeModule">
            <TestCase
              itShould="component 接口 模拟组件 Button"
              initialState={false}
              assert={({expect, state}) => {
                expect(state).to.be.true;
              }}
              arrange={({setState}) => (
                <MyButton
                  title={'component接口 模拟 Button'}
                  onPress={() => {
                    setState(true);
                  }}></MyButton>
              )}></TestCase>

            <TestCase itShould="create 接口 moduleName 为 KeepAwakeNativeModule，最终接口的返回值是获取到的原生模块的数据">
              <Text>{text}</Text>
              <Button
                title="按钮"
                onPress={() => {
                  const res = myModules.activate();
                  setText(res + '');
                }}></Button>
            </TestCase>
            <TestCase itShould="create 接口 moduleName 为 ['MyModule', 'KeepAwakeNativeModule']，最终接口的返回值是获取到的原生模块的数据">
              <Text>{text2}</Text>
              <Button
                title="按钮"
                onPress={() => {
                  const res = myModulesArraya.activate();
                  setText2(res + '');
                }}></Button>
            </TestCase>
            <TestCase itShould="create 接口 moduleName 为 MyKCKeepAwake，最终接口的返回值是自己mock的数据">
              <Text>{text3}</Text>
              <Button
                title="按钮"
                onPress={() => {
                  const res = myKCKeepAwake.activate();
                  setText3(res + '');
                }}></Button>
            </TestCase>
            <TestCase itShould="create 接口 传入 moduleName: 'KeepAwakeNativeModule', getVersion: () => 1，versionOverrides需要传入对应的版本号信息键值对 1: {oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})},最终接口的返回值是获取到的原生模块的数据，还会多一个oldactivate对象">
              <Text>{text4}</Text>
              <Button
                title="按钮"
                onPress={() => {
                  const res = myModulesGetVersion.oldactivate.module.activate();
                  setText4(res + '');
                }}></Button>
            </TestCase>

            <TestCase
              itShould="create 接口 isEventEmitter为true creates an EventEmitter 返回值中会有addListener和removeListeners方法" // 返回值中会有addListener和removeListeners方法
              fn={({expect}: any) => {
                const mock = {
                  foo: 1,
                };
                const result = SafeModule.module({
                  moduleName: 'UniqueModuleName',
                  mock,
                  isEventEmitter: true,
                });
                expect(result.addListener).to.be.a('function');
                expect(result.removeListeners).to.be.a('function');
                expect(result.emitter.addListener).to.be.a('function');
                expect(result.emitter.removeAllListeners).to.be.a('function');
              }}
            />
            <TestCase
              itShould="create 接口 isEventEmitter为false 返回值中不会有addListener和removeListeners方法" // 返回值中不会有addListener和removeListeners方法
              fn={({expect}: any) => {
                const mock = {
                  foo: 1,
                };
                const result = SafeModule.module({
                  moduleName: 'UniqueModuleName',
                  mock,
                  isEventEmitter: false,
                });
                expect(result.addListener).to.be.undefined;
                expect(result.removeListeners).to.be.undefined;
                expect(result.emitter).to.be.undefined;
              }}
            />

            <TestCase itShould="module 接口 moduleName 为 KeepAwakeNativeModule，最终接口的返回值是获取到的原生模块的数据">
              <Text>{text5}</Text>
              <Button
                title="按钮"
                onPress={() => {
                  const res = myModulesModule.activate();
                  setText5(res + '');
                }}></Button>
            </TestCase>

            <TestCase itShould="module 接口 moduleName 为 ['MyModule', 'KeepAwakeNativeModule']，最终接口的返回值是获取到的原生模块的数据">
              <Text>{text6}</Text>
              <Button
                title="按钮"
                onPress={() => {
                  const res = myModulesArrayModule.activate();
                  setText6(res + '');
                }}></Button>
            </TestCase>
            <TestCase itShould="module 接口 moduleName 为 MyKCKeepAwake，最终接口的返回值是自己mock的数据">
              <Text>{text7}</Text>
              <Button
                title="按钮"
                onPress={() => {
                  const res = myKCKeepAwakeModule.activate();
                  setText7(res + '');
                }}></Button>
            </TestCase>
            <TestCase
              itShould="module 接口 传入 moduleName: 'KeepAwakeNativeModule' getVersion: () => 2，versionOverrides需要传入对应的版本号信息键值对 2: {oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})},最终接口的返回值是获取到的原生模块的数据，还会多一个oldactivate对象"
              ><Text>{text8}</Text>
              <Button
                title="按钮"
                onPress={() => {
                  const res = myModulesGetVersionModule.oldactivate.module.activate();
                  setText8(res + '');
                }}></Button>
            </TestCase>
            
            <TestCase
              itShould="module 接口 isEventEmitter为true creates an EventEmitter 返回值中会有addListener和removeListeners方法" // 返回值中会有addListener和removeListeners方法
              fn={({expect}: any) => {
                const mock = {
                  foo: 1,
                };
                const result = SafeModule.module({
                  moduleName: 'UniqueModuleName',
                  mock,
                  isEventEmitter: true,
                });
                expect(result.addListener).to.be.a('function');
                expect(result.removeListeners).to.be.a('function');
                expect(result.emitter.addListener).to.be.a('function');
                expect(result.emitter.removeAllListeners).to.be.a('function');
              }}
            />
            <TestCase
              itShould="module 接口 isEventEmitter为false 返回值中不会有addListener和removeListeners方法" // 返回值中不会有addListener和removeListeners方法
              fn={({expect}: any) => {
                const mock = {
                  foo: 1,
                };
                const result = SafeModule.module({
                  moduleName: 'UniqueModuleName',
                  mock,
                  isEventEmitter: false,
                });
                expect(result.addListener).to.be.undefined;
                expect(result.removeListeners).to.be.undefined;
                expect(result.emitter).to.be.undefined;
              }}
            />
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
}
