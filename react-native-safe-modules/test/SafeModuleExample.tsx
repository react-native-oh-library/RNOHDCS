import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import * as React from 'react';
import SafeModule from 'react-native-safe-modules';
import { View, Button } from 'react-native';

/* 
  注意：这个示例获取的是 reac-native-keep-awake 的 NativeModule，测试前需要安装 reac-native-keep-awake 这个库，
        reac-native-keep-awake 源库的 NativeModule 名称为 KCKeepAwake
        harmonyOS化过的的 NativeModule 名称为 KeepAwakeNativeModule，
        如果要测试create、module接口
          1. 获取 harmonyOS 的 NativeModule，请将参数 moduleName 改为 KeepAwakeNativeModule，
          2. iOS/Android的参数 moduleName  名称为 KCKeepAwake
*/

const MyButton = SafeModule.component({
  viewName: 'NonExistentViewName',
  propOverrides: {
    '1.0.0': (nativeProps: any, config: any, nativeModule: any) => {
      return {
        newProp: 'newValue',
      };
    },
  },
  componentOverrides: {
    '1.0.0': (nativeComponent: any, nativeModule: any) => {
      return class CustomComponent extends React.Component {
        nativeComponent = nativeComponent
        render() {
          return <this.nativeComponent {...this.props} />;
        }
      };
    },
  },
  mockComponent: Button,
  mock: {
    activate: () => 1,
  },
  getVersion: () => '1.0.0',
});


export default function SafeModuleExample() {
  return (
    <View>
      <Tester>
        <TestSuite name="SafeModule">
          <TestCase
            itShould="component接口 模拟组件 Button"
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <MyButton
                title={'component接口 模拟按钮'}
                onPress={() => {
                  setState(true);
                }}
              >
              </MyButton>
            )}
          >
          </TestCase>
          <TestCase
            itShould="create接口 获取react-native-keep-awake的NativeModule"
            fn={({expect}: any) => {
              // iOS/Android中moduleName为 KCKeepAwake
              const myModules = SafeModule.create({
                moduleName: 'KeepAwakeNativeModule',
                mock: {
                  activate: () => 1,
                  deactivate: () => 2,
                  getConstans: () => 3
                },
                getVersion: () => 1,
                versionOverrides: {
                  1: {
                    oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})
                  },
                },
                isEventEmitter: true
              })
              expect(myModules.activate()).to.not.be.eql(1);
            }}
          />
          <TestCase
            itShould="create接口 获取react-native-keep-awake的NativeModule moduleName传递一个数组"
            fn={({expect}: any) => {
              // iOS/Android中moduleName为 KCKeepAwake
              const myModules = SafeModule.create({
                moduleName: ['KeepAwakeNativeModule', 'MyModule'],
                mock: {
                  activate: () => 1,
                  deactivate: () => 2,
                  getConstans: () => 3
                },
                getVersion: () => 1,
                versionOverrides: {
                  1: {
                    oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})
                  },
                },
                isEventEmitter: true
              })
              expect(myModules.activate()).to.not.be.eql(1);
            }}
          />
          <TestCase
            itShould="create接口 自己模拟的NativeModule"
            fn={({expect}: any) => {
              const myKCKeepAwake = SafeModule.create({ 
                moduleName: 'MyKCKeepAwake',
                mock: {
                  activate: () => 1,
                  deactivate: () => 2,
                  getConstans: () => 3
                },
                getVersion: () => 1,
                versionOverrides: {
                  1: {
                    oldactivate: () => (moduleKey: any, module: any) => ({moduleKey, module})
                  },
                },
                isEventEmitter: true
              })
              expect(myKCKeepAwake.activate()).to.eql(1);
            }}
          />
           <TestCase
            itShould="module接口 获取react-native-keep-awake的NativeModule"
            fn={({expect}: any) => {
              // iOS/Android中moduleName为 KCKeepAwake
              const myModules = SafeModule.module({
                moduleName: 'KeepAwakeNativeModule',
                mock: {
                  activate: () => 1,
                  deactivate: () => 2,
                  getConstans: () => 3
                },
                getVersion: () => 1,
                versionOverrides: {
                  1: {
                    oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})
                  },
                },
                isEventEmitter: true
              })
              expect(myModules.activate()).to.not.be.eql(1);
            }}
          />
          <TestCase
            itShould="module接口 获取react-native-keep-awake的NativeModule moduleName传递一个数组"
            fn={({expect}: any) => {
              // iOS/Android中moduleName为 KCKeepAwake
              const myModules = SafeModule.module({
                moduleName: ['KeepAwakeNativeModule', 'MyModule'],
                mock: {
                  activate: () => 1,
                  deactivate: () => 2,
                  getConstans: () => 3
                },
                getVersion: () => 1,
                versionOverrides: {
                  1: {
                    oldactivate: (moduleKey: any, module: any) => ({moduleKey, module})
                  },
                },
                isEventEmitter: true
              })
              expect(myModules.activate()).to.not.be.eql(1);
            }}
          />
          <TestCase
            itShould="module接口 自己模拟的NativeModule"
            fn={({expect}: any) => {
              const myKCKeepAwake = SafeModule.module({ 
                moduleName: 'MyKCKeepAwake',
                mock: {
                  activate: () => 1,
                  deactivate: () => 2,
                  getConstans: () => 3
                },
                getVersion: () => 1,
                versionOverrides: {
                  1: {
                    oldactivate: () => (moduleKey: any, module: any) => ({moduleKey, module})
                  },
                },
                isEventEmitter: true
              })
              expect(myKCKeepAwake.activate()).to.eql(1);
            }}
          />

          <TestCase
            itShould="create接口 获取react-native-keep-awake的NativeModule isEventEmitter为true creates an EventEmitter"
            fn={({expect}: any) => {
              const result = SafeModule.create({
                moduleName: 'KeepAwakeNativeModule',
                mock: {
                  activate: () => 1,
                  deactivate: () => 2,
                  getConstans: () => 3
                },
                isEventEmitter: true,
              });
              expect(result.emitter.addListener).to.be.a('function');
              expect(result.emitter.removeAllListeners).to.be.a('function');
            }}
          />

          <TestCase
            itShould="create接口 自定义moduleName isEventEmitter为true creates an EventEmitter"
            fn={({expect}: any) => {
              const mock = {
                foo: 1,
              };
              const result = SafeModule.create({
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
            itShould="module接口 获取react-native-keep-awake的NativeModule isEventEmitter为true creates an EventEmitter"
            fn={({expect}: any) => {
              const result = SafeModule.create({
                moduleName: 'KeepAwakeNativeModule',
                mock: {
                  activate: () => 1,
                  deactivate: () => 2,
                  getConstans: () => 3
                },
                isEventEmitter: true,
              });
              expect(result.emitter.addListener).to.be.a('function');
              expect(result.emitter.removeAllListeners).to.be.a('function');
            }}
          />

          <TestCase
            itShould="module接口 自定义moduleName isEventEmitter为true creates an EventEmitter"
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
        </TestSuite>
      </Tester>
    </View>
  );
}
