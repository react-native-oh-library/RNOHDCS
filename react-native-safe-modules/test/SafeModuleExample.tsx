import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import * as React from 'react';
import SafeModule from 'react-native-safe-modules';
import {View, Button, ScrollView, Text} from 'react-native';
import {useState, useRef} from 'react';

/* 
  注意：这个示例获取的是 react-native-keep-awake 和 react-native-image-colors 的 NativeModule，
        测试前需要安装 react-native-keep-awake 和 react-native-image-colors 这个库，
        react-native-keep-awake 的 NativeModule 名称为 KeepAwakeNativeModule
        react-native-image-colors 的 NativeModule 名称为 ImageColorsNativeModule
*/

const imgURL =
  'data:image/jpeg;base64,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';

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

const myImageColorsModules = SafeModule.create({
  moduleName: 'ImageColorsNativeModule', // 传入正确的 react-native-image-colors 的 NativeModule值，可以获取到react-native-image-colors 的 原生模块，在调用myModules.getColors()的时候，实际调用的是 react-native-image-colors 的 getColors()
  mock: {
    getColors: (src: string) => 1,
  },
});

const myImageColors = SafeModule.module({
  moduleName: 'ImageColorsNativeModule', // 传入正确的 react-native-image-colors 的 NativeModule值，可以获取到react-native-image-colors 的 原生模块，在调用myModules.getColors()的时候，实际调用的是 react-native-image-colors 的 getColors()
  mock: {
    getColors: (src: string) => 1,
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
  const [text10, setText10] = useState('');

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
                  const res = myModulesArray.activate();
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
              itShould="create 接口 isEventEmitter为false 返回值中不会有addListener和removeListeners方法" // 返回值中不会有addListener和removeListeners方法
              fn={({expect}: any) => {
                const mock = {
                  foo: 1,
                };
                const result = SafeModule.create({
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

            <TestCase itShould="module 接口 moduleName 为 ['KeepAwakeNativeModule', 'MyModule']，最终接口的返回值是获取到的原生模块的数据">
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

            <TestCase itShould="create 接口 moduleName 为 ImageColorsNativeModule ，最终接口的返回值是获取到的原生模块的数据">
              <Text>{text9}</Text>
              <Button
                title="按钮"
                onPress={async () => {
                  const res = await myImageColorsModules.getColors(imgURL);
                  setText9(JSON.stringify(res));
                }}></Button>
            </TestCase>
            
            <TestCase itShould="module 接口 moduleName 为 ImageColorsNativeModule ，最终接口的返回值是获取到的原生模块的数据">
              <Text>{text10}</Text>
              <Button
                title="按钮"
                onPress={async () => {
                  const res = await myImageColors.getColors(imgURL);
                  setText10(JSON.stringify(res));
                }}></Button>
            </TestCase>
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
}