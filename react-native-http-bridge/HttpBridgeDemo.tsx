/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from "react";
import { useEffect } from "react";
import { ScrollView, Text, Button } from "react-native";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

var httpBridge = require('react-native-http-bridge');

export const HttpBridgeDemo = () => {

  const [getRequestResult, setGetRequestResult] = useState('');
  const [postRequestResult, setPostRequestResult] = useState('');
  const [putRequestResult, setPutRequestResult] = useState('');
  const [deleteRequestResult, setDeleteRequestResult] = useState('');

  const GetMothedExample = () => {
    fetch('http://127.0.0.1:8888/student/getStuInfo?value=GET', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  const PostMothedExample = () => {
    fetch('http://127.0.0.1:8888/student/postStuInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
  }

  const PutMothedExample = () => {
    fetch('http://127.0.0.1:8888/student/putStuInfo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 'key&value'
    })
  }

  const DeleteMothedExample = () => {
    fetch('http://127.0.0.1:8888/student/deleteStuInfo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  useEffect(() => {
    httpBridge.start(8888, 'http_service', (request: any) => {
      switch (request.type) {
        case 'GET':
          setGetRequestResult('requestId: ' + request.requestId + '\ntype: ' +
            request.type + '\nurl: ' + request.url + '\npostData: ' + request.postData);
          break;
        case 'POST':
          setPostRequestResult('requestId: ' + request.requestId + '\ntype: ' +
            request.type + '\nurl: ' + request.url + '\npostData: ' + request.postData);
          break;
        case 'PUT':
          setPutRequestResult('requestId: ' + request.requestId + '\ntype: ' +
            request.type + '\nurl: ' + request.url + '\npostData: ' + request.postData);
          break;
        case 'DELETE':
          setDeleteRequestResult('requestId: ' + request.requestId + '\ntype: ' +
            request.type + '\nurl: ' + request.url + '\npostData: ' + request.postData);
          break;
      }
      console.log('HttpServer request: ' + JSON.stringify(request))
      if (request.type === "GET" && request.url.split("/")[1] === "user") {
        httpBridge.respond(request.requestId, 200, "application/json", "{\"message\": \"OK\"}");
      } else {
        httpBridge.respond(request.requestId, 400, "application/json", "{\"message\": \"Bad Request\"}");
      }
    });
    return () => {
      httpBridge.stop();
    }
  }, []);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name='httpBridgeExample Port : 8888'>
          <TestCase itShould='Method：GET'>
            <Button
              title="GET"
              color="#9a73ef"
              onPress={GetMothedExample}
            />
            <Text allowFontScaling>{getRequestResult}</Text>
          </TestCase>

          <TestCase itShould='Method：POST'>
            <Button
              title="POST"
              color="#9a73ef"
              onPress={PostMothedExample}
            />
            <Text allowFontScaling>{postRequestResult}</Text>
          </TestCase>

          <TestCase itShould='Method：PUT'>
            <Button
              title="PUT"
              color="#9a73ef"
              onPress={PutMothedExample}
            />
            <Text allowFontScaling>{putRequestResult}</Text>
          </TestCase>

          <TestCase itShould='Method：DELETE'>
            <Button
              title="DELETE"
              color="#9a73ef"
              onPress={DeleteMothedExample}
            />
            <Text allowFontScaling>{deleteRequestResult}</Text>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>)
}

