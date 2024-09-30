import SafeModule from 'react-native-safe-modules';

const myModule = SafeModule.create({
  moduleName: 'MyNativemodule',
  mock: {
    someAPI: () => 'doSomething'
  }
})

export default myModule