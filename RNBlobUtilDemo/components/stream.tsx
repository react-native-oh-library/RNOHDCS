import React from 'react';
import {
  ScrollView
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
          <TestCase.Logical
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
              stream.write('456789')
              stream.close()
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
              stream.write(['101', '102', '97'])
              stream.close()
              let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_stream.txt', 'utf8')
              expect(str).to.equals('efa')
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export function readStream() {
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="readStream">
          <TestCase.Logical
            itShould="read stream to a file."
            fn={async ({ expect }) => {
              let stream = await ReactNativeBlobUtil.fs.readStream(FILE_PATH + '/create_file_stream.txt', 'utf8', 10, 3)
              stream.open()
              stream.onData((chunk) => {
                expect(chunk).to.length(6)
              })
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export function closeStream() {
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="readStcloseStreamream">
          <TestCase.Logical
            itShould="close stream."
            fn={async ({ expect }) => {
              let stream = await ReactNativeBlobUtil.fs.writeStream(FILE_PATH + '/create_file_stream.txt', 'utf8', false)
              stream.write('000000')
              stream.close()
              let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_stream.txt', 'utf8')
              expect(str).to.equals('000000')
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}


