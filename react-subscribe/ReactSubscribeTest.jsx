import React from 'react';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import {ReactSubscribeTimerTest} from './ReactSubscribeTimerTest';
import {ReactSubscribeFetchTest} from './ReactSubscribeFetchTest';
import {ReactSubscribeSubscribeTest} from './ReactSubscribeSubscribeTest';
import { EventEmitter } from 'fbemitter';

demoChange = (cd,interval) => {
  return (
    <ReactSubscribeTimerTest cd={60} interval={1000}/>
  );
}
eventEmitter1 = new EventEmitter()

export const ReactSubscribeTest = () => {
  return (
    <Tester style={{ flex: 1 }}>
      <TestSuite name="ReactSubscribeTimerTest">
        <TestCase
          tags={['C_API']}
          itShould="点击按钮定时器以总10秒每1秒页面刷新，当到0时结束">
          <ReactSubscribeTimerTest cd={10} interval={1000}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeTimerTest2">
        <TestCase
          tags={['C_API']}
          itShould="点击按钮定时器总10秒每2秒页面刷新，当设置0时结束">
          <ReactSubscribeTimerTest cd={10} interval={2000}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeTimerTest3">
        <TestCase
          tags={['C_API']}
          itShould="点击按钮时器总12秒每1秒页面刷新，当到0时结束">
          <ReactSubscribeTimerTest cd={12} interval={1000}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeFetchTest1">
        <TestCase
          tags={['C_API']}
          itShould="使用默认GET请求方法请求使用json方法处理返回数据打印到页面上">
          <ReactSubscribeFetchTest url={encodeURI('http://10.51.17.178:8888/student/getStuInfo?value=GET请求使用json处理返回数据')} method={"GET"} type={'json'} contentType={'application/json'}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeFetchTest2">
        <TestCase
          tags={['C_API']}
          itShould="使用自定义请求接口使用json处理返回数据打印到页面上">
          <ReactSubscribeFetchTest url='http://10.51.17.178:8888/student/getStuInfo' method={"GET"} type={'json'} manners={1}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeFetchTest3">
        <TestCase
          tags={['C_API']}
          itShould="使用post请求方式使用json处理返回数据打印到页面上">
          <ReactSubscribeFetchTest url='http://10.51.17.178:8888/student/postStuInfo' method={"POST"} type={'json'} body={JSON.stringify({"name":"post请求json返回"})} contentType={'application/json'}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeFetchTest4">
        <TestCase
          tags={['C_API']}
          itShould="使用PUT请求方式使用json处理返回数据打印到页面上">
          <ReactSubscribeFetchTest url='http://10.51.17.178:8888/student/putStuInfo' method={"PUT"} type={'json'} body={JSON.stringify({"name":"PUT请求json返回"})} contentType={'application/json'}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeFetchTest5">
        <TestCase
          tags={['C_API']}
          itShould="使用DELETE请求方式使用json处理返回数据打印到页面上">
          <ReactSubscribeFetchTest url='http://10.51.17.178:8888/student/deleteStuInfo' method={"DELETE"} type={'json'} body={JSON.stringify({"name":"DELETE请求json返回"})} contentType={'application/json'}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeFetchTest6">
        <TestCase
          tags={['C_API']}
          itShould="使用默认GET请求方法请求并且使用blob方法处理返回数据打印到页面上">
          <ReactSubscribeFetchTest url={encodeURI('http://10.51.17.178:8888/student/getStuInfo?value=GET请求使用blob方法处理返回数据')} method={"GET"} type={'blob'} contentType={'application/json'}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeFetchTest7">
        <TestCase
          tags={['C_API']}
          itShould="使用默认GET请求方法请求并且使用text处理返回数据打印到页面上">
          <ReactSubscribeFetchTest url={encodeURI('http://10.51.17.178:8888/student/getStuInfo?value=GET请求使用text处理返回数据')} method={"GET"} type={'text'} contentType={'application/json'}/>
        </TestCase>
      </TestSuite>
      <TestSuite name="ReactSubscribeSubscribeTest">
        <TestCase
          tags={['C_API']}
          itShould="输入监听名称和消息后在不同的监听下展示输入消息">
          <ReactSubscribeSubscribeTest eventEmitter1={eventEmitter1} eventEmitter2={eventEmitter1} eventEmitter3={new EventEmitter()}/>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

