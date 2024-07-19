import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import * as React from 'react';
import sinon from 'sinon';
import SafeModule from 'react-native-safe-module';

let i = 1;
const uniqueModuleName = () => {
  i += 1;
  return `ExampleModule${i}`;
};

export function SafeModuleTest() {

  return (
    <TestSuite name="SafeModule">
      <TestCase
        itShould="throws if no definition is passed in"
        fn={({ expect }: any) => {
          expect(() => SafeModule.create()).to.throw();
        }}
      />
      <TestCase
        itShould="throws if no module name is passed in"
        fn={({ expect }: any) => {
          expect(() => SafeModule.create({
            mock: {},
          })).to.throw();
        }}
      />
      <TestCase
        itShould="throws if no mock is passed in"
        fn={({ expect }: any) => {
          expect(() => SafeModule.create({
            moduleName: uniqueModuleName(),
          })).to.throw();
        }}
      />
      <TestCase
        itShould="uses the mock if module is not found"
        fn={({ expect }: any) => {
          const moduleName = uniqueModuleName();
          const mock = {
            foo: 1,
          };
          const result = SafeModule.create({
            moduleName,
            mock,
          });

          expect(mock.foo).to.eql(1);
        }}
      />
      <TestCase
        itShould="uses module in preference to mock"
        fn={({ expect }: any) => {
          const moduleName = uniqueModuleName();
          const module = {
            foo: 1,
          };
          const mock = {
            foo: 1,
          };
          const result = SafeModule.create({
            moduleName,
            mock,
          });

          expect(module.foo).to.eql(1);
          expect(mock.foo).to.eql(1);
        }}
      />
      <TestCase
        itShould="isEventEmitter option creates an EventEmitter"
        fn={({ expect }: any) => {
          const moduleName = uniqueModuleName();
          const mock = {
            foo: 1,
          };
          const result = SafeModule.create({
            moduleName,
            mock,
            isEventEmitter: true,
          });
          expect(result.addListener).to.be.a('function');
          expect(result.removeListeners).to.be.a('function');
        }}
      />
    </TestSuite>
  );
}