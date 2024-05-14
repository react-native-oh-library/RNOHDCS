import React, {useState} from 'react';
import {
	ScrollView,
  View,
  Text
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { TestSuite, Tester } from '@rnoh/testerino';
import { TestCase } from '../../components';

const FILE_PATH = ReactNativeBlobUtil.fs.dirs.CacheDir;

export function writeStream() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="writeStream">
					<TestCase.logical
						itShould="write stream to a file."	
						fn={async ({ expect }) => {
							let stream = await ReactNativeBlobUtil.fs.writeStream(FILE_PATH + '/create_file_stream.txt', 'utf8')
						  expect(stream.id).to.match(/^[0-9|a-z|-]*$/)
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function writeChunk() {
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="writeChunk">
          <TestCase.Logical
            itShould="write stream to a file for data."
            fn={async ({ expect }) => {
              let stream = await ReactNativeBlobUtil.fs.writeStream(FILE_PATH + '/create_file_stream.txt', 'utf8', false)
              await stream.write('456789')
              await stream.close()
              let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_stream.txt', 'utf8')
              expect(str).to.equals('456789')
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export function writeArrayChunk() {
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="writeArrayChunk">
          <TestCase.Logical
            itShould="write stream to a file for array data."
            fn={async ({ expect }) => {
              let stream = await ReactNativeBlobUtil.fs.writeStream(FILE_PATH + '/create_file_stream.txt', 'ascii', false)
              stream.encoding = 'ascii'
              await stream.write(['101', '102', '97', '101', '102', '97'])
              await stream.close()
              let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_stream.txt', 'utf8')
              expect(str).to.equals('efaefa')
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export function readStream() {
  const [errMsg, setErrMsg] = useState('')
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="readStream">
					<TestCase.logical
						itShould="read stream to a file."	
						fn={async ({ expect }) => {
              let str = ''
                let stream = await ReactNativeBlobUtil.fs.readStream(FILE_PATH + '/create_file_stream.txt', 'utf8', 10, 3)
                stream.open()
                stream.onData((chunk) => {
                  expect(chunk).to.length(6)
                })
                stream.onError((err) => {
                  str = err.message
                  setErrMsg(str)
                })
						}}
					/>
          <View>
            {errMsg ? <Text style={{ color: '#f00' }}>errMsg:{errMsg}</Text> : ''}
          </View>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function closeStream() {
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="closeStream">
          <TestCase.Logical
            itShould="close stream."
            fn={async ({ expect }) => {
              let stream = await ReactNativeBlobUtil.fs.writeStream(FILE_PATH + '/create_file_stream.txt', 'utf8', false)
              await stream.write('000000')
              await stream.close()
              let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_stream.txt', 'utf8')
              expect(str).to.equals('000000')
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}


