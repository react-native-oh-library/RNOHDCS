import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import * as React from 'react';
import SafeModule from 'react-native-safe-modules';
import {View, Button, ScrollView} from 'react-native';

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

export default function SafeModuleExample() {
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
                  title={'component接口 模拟按钮'}
                  onPress={() => {
                    setState(true);
                  }}></MyButton>
              )}></TestCase>
            <TestCase
              itShould="create 接口 moduleName 为 KeepAwakeNativeModule，最终接口的返回值是获取到的原生模块的数据"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.create({
                  moduleName: 'KeepAwakeNativeModule', // 传入正确的 react-native-keep-awake 的 NativeModule值，可以获取到react-native-keep-awake 的 原生模块，在调用myModules.activate()的时候，实际调用的是 react-native-keep-awake的activate()
                  mock: {
                    activate: () => 1,
                    deactivate: () => 2,
                  },
                });
                expect(myModules.activate()).to.not.be.eql(1);
                expect(myModules.deactivate()).to.not.be.eql(2);
              }}
            />
            <TestCase
              itShould="create 接口 moduleName 为 ['KeepAwakeNativeModule', 'MyModule']，最终接口的返回值是获取到的原生模块的数据"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.create({
                  moduleName: ['KeepAwakeNativeModule', 'MyModule'],
                  mock: {
                    activate: () => 1,
                    deactivate: () => 2,
                  },
                });
                expect(myModules.activate()).to.not.be.eql(1);
                expect(myModules.deactivate()).to.not.be.eql(2);
              }}
            />
            <TestCase
              itShould="create 接口 moduleName 为 ['MyModule', 'KeepAwakeNativeModule']，最终接口的返回值是获取到的原生模块的数据"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.create({
                  moduleName: ['MyModule', 'KeepAwakeNativeModule'],
                  mock: {
                    activate: () => 1,
                    deactivate: () => 2,
                  },
                });
                expect(myModules.activate()).to.not.be.eql(1);
                expect(myModules.deactivate()).to.not.be.eql(2);
              }}
            />
            <TestCase
              itShould="create 接口 moduleName 为 MyKCKeepAwake，最终接口的返回值是自己mock的数据"
              fn={({expect}: any) => {
                const myKCKeepAwake = SafeModule.create({
                  moduleName: 'MyKCKeepAwake', // 这个值是自定义的，在项目的原生模块中是不存在的，所以这时候调用 myKCKeepAwake.activate()，实际为调用 mock中的 activate()，所以返回值是1
                  mock: {
                    activate: () => 1,
                    deactivate: () => 2,
                  },
                });
                expect(myKCKeepAwake.activate()).to.eql(1);
                expect(myKCKeepAwake.deactivate()).to.eql(2);
              }}
            />
            <TestCase
              itShould="create 接口 传入 moduleName: 'KeepAwakeNativeModule', getVersion: () => 1，versionOverrides需要传入对应的版本号信息键值对 1: {oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})},最终接口的返回值是获取到的原生模块的数据，还会多一个oldactivate对象"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.create({
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
                expect(myModules.activate()).to.not.be.eql(1);
                expect(myModules.deactivate()).to.not.be.eql(2);
                expect(myModules.oldactivate.module.activate()).to.not.be.eql(
                  1,
                );
                expect(myModules.oldactivate.module.deactivate()).to.not.be.eql(
                  2,
                );
                expect(myModules.oldactivate.moduleKey).to.be.undefined;
              }}
            />
            <TestCase
              itShould="create 接口 传入 moduleName: 'MyModule', getVersion: () => 1，versionOverrides需要传入对应的版本号信息键值对 1: {oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})},最终接口的返回值是自己mock的数据，还会多一个oldactivate对象"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.create({
                  moduleName: 'MyModule',
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
                expect(myModules.activate()).to.be.eql(1);
                expect(myModules.deactivate()).to.be.eql(2);
                expect(myModules.oldactivate.module.activate()).to.be.eql(1);
                expect(myModules.oldactivate.module.deactivate()).to.be.eql(2);
                expect(myModules.oldactivate.moduleKey).to.be.undefined;
              }}
            />
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
              }}
            />

            <TestCase
              itShould="module 接口 moduleName 为 KeepAwakeNativeModule，最终接口的返回值是获取到的原生模块的数据"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.module({
                  moduleName: 'KeepAwakeNativeModule', // 传入正确的 react-native-keep-awake 的 NativeModule值，可以获取到react-native-keep-awake 的 原生模块，在调用myModules.activate()的时候，实际调用的是 react-native-keep-awake的activate()
                  mock: {
                    activate: () => 1,
                    deactivate: () => 2,
                  },
                });
                expect(myModules.activate()).to.not.be.eql(1);
                expect(myModules.deactivate()).to.not.be.eql(2);
              }}
            />
            <TestCase
              itShould="module 接口 moduleName 为 ['KeepAwakeNativeModule', 'MyModule']，最终接口的返回值是获取到的原生模块的数据"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.module({
                  moduleName: ['KeepAwakeNativeModule', 'MyModule'],
                  mock: {
                    activate: () => 1,
                    deactivate: () => 2,
                  },
                });
                expect(myModules.activate()).to.not.be.eql(1);
                expect(myModules.deactivate()).to.not.be.eql(2);
              }}
            />
            <TestCase
              itShould="module 接口 moduleName 为 ['MyModule', 'KeepAwakeNativeModule']，最终接口的返回值是获取到的原生模块的数据"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.module({
                  moduleName: ['MyModule', 'KeepAwakeNativeModule'],
                  mock: {
                    activate: () => 1,
                    deactivate: () => 2,
                  },
                });
                expect(myModules.activate()).to.not.be.eql(1);
                expect(myModules.deactivate()).to.not.be.eql(2);
              }}
            />
            <TestCase
              itShould="module 接口 moduleName 为 MyKCKeepAwake，最终接口的返回值是自己mock的数据"
              fn={({expect}: any) => {
                const myKCKeepAwake = SafeModule.module({
                  moduleName: 'MyKCKeepAwake', // 这个值是自定义的，在项目的原生模块中是不存在的，所以这时候调用 myKCKeepAwake.activate()，实际为调用 mock中的 activate()，所以返回值是1
                  mock: {
                    activate: () => 1,
                    deactivate: () => 2,
                  },
                });
                expect(myKCKeepAwake.activate()).to.eql(1);
                expect(myKCKeepAwake.deactivate()).to.eql(2);
              }}
            />
            <TestCase
              itShould="module 接口 传入 getVersion: () => 1，versionOverrides需要传入对应的版本号信息键值对 1: {oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})},最终接口的返回值是获取到的原生模块的数据，还会多一个oldactivate对象"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.module({
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
                expect(myModules.activate()).to.not.be.eql(1);
                expect(myModules.deactivate()).to.not.be.eql(2);
                expect(myModules.oldactivate.module.activate()).to.not.be.eql(
                  1,
                );
                expect(myModules.oldactivate.module.deactivate()).to.not.be.eql(
                  2,
                );
                expect(myModules.oldactivate.moduleKey).to.be.undefined;
              }}
            />
            <TestCase
              itShould="module 接口 传入 getVersion: () => 1，versionOverrides需要传入对应的版本号信息键值对 1: {oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})},最终接口的返回值是自己mock的数据，还会多一个oldactivate对象"
              fn={({expect}: any) => {
                // iOS/Android中moduleName为 KCKeepAwake
                const myModules = SafeModule.module({
                  moduleName: 'MyModule',
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
                expect(myModules.activate()).to.be.eql(1);
                expect(myModules.deactivate()).to.be.eql(2);
                expect(myModules.oldactivate.module.activate()).to.be.eql(1);
                expect(myModules.oldactivate.module.deactivate()).to.be.eql(2);
                expect(myModules.oldactivate.moduleKey).to.be.undefined;
              }}
            />
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
              }}
            />
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
}
