import React, { useState } from 'react';
import {
	ScrollView,
	Text
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { TestSuite, Tester, Filter } from '@rnoh/testerino';
import { TestCase } from '../components';

const FILE_PATH = ReactNativeBlobUtil.fs.dirs.DocumentDir;

export function fetchBlobForm() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="fetchBlobForm">
					<TestCase.logical
						itShould="write stream to new files."	
						fn={async ({ expect }) => {
              await ReactNativeBlobUtil.fetch(
                'POST',
                'http;//139.9.199.99:3000/tcp/uploadMul',
                { 'content-type': 'multipart/form-data' },
                [
                  {
                    name: 'file',
                    filename: 'another_1.jpg',
                    type: 'image/jpeg',
                    data: '/another.jpg'
                  },
                  {
                    name: 'file',
                    filename: 'another_2.jpg',
                    type: 'image/jpeg',
                    data: '/another.jpg'
                  }
                ]
              )
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function fetchBlobDown() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="fetchBlobDown">
					<TestCase.logical
						itShould="download stream to new file."	
						fn={async ({ expect }) => {
              let res = await ReactNativeBlobUtil.config({
                fileCache: true,
                appendExt: 'jpg',
                path: '/another.jpg',
                session: 'another_jpg'
              }).fetch('GET', 'http://139.9.199.99:3000/tcp/download/blue.jpg')
              expect(res.data).to.be.equals(FILE_PATH + '/another.jpg')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function fetchBlobUpload() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="fetchBlobUpload">
					<TestCase.logical
						itShould="upload stream to new file."	
						fn={async ({ expect }) => {
              await ReactNativeBlobUtil.fetch(
                'POST',
                'http://139.9.199.99:3000/tcp/uploadBlob',
                {
                  'content-type': 'application/octet-stream',
                  'Dropbox-API-Arg': JSON.stringify({
                    path: '/another_upload.jpg',
                    mode: 'add',
                    autorename: true,
                    mute: false
                  })
                },
                ReactNativeBlobUtil.wrap('/another.jpg')
              )
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function cancelRequest() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="cancelRequest">
					<TestCase.logical
						itShould="upload stream to new file."	
						fn={async ({ expect }) => {
              await ReactNativeBlobUtil.config({
                fileCache: true,
                appendExt: 'jpg'
              }).fetch('GET', 'http://139.9.199.99:3000/tcp/download/blue.jpg').cancel((err) => {
                expect(err).to.be.equals([])
              })
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function enableProgressReport() {
  const [progress, setProgress] = useState(0)
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="enableProgressReport">
					<TestCase.logical
						itShould="download file progress."	
						fn={async ({ expect }) => {
              await ReactNativeBlobUtil.config({
                fileCache: true,
                appendExt: 'jpg',
                path: '/another.jpg',
                session: 'another_jpg'
              })
              .fetch('GET', 'http://139.9.199.99:3000/tcp/download/blue.jpg')
              .progress((received, total) => {
                setProgress(Math.floor(Number(received) / Number(total) * 100))
              })
						}}
					/>
          <Text style={{color: '#fff'}}>enableProgress:{progress}</Text>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function enableUploadProgressReport() {
  const [progress, setProgress] = useState(0)
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="enableUploadProgressReport">
					<TestCase.logical
						itShould="upload file progress."	
						fn={async ({ expect }) => {
              let res = await ReactNativeBlobUtil.fetch(
                'POST',
                'http://139.9.199.99:3000/tcp/uploadBlob',
                {
                  'content-type': 'application/octet-stream',
                  'Dropbox-API-Arg': JSON.stringify({
                    path: '/another_upload.jpg',
                    mode: 'add',
                    autorename: true,
                    mute: false
                  })
                },
                ReactNativeBlobUtil.wrap('/another.jpg')
              )
              .progress((written, total) => {
                setProgress(Math.floor(Number(written) / Number(total) * 100))
              })
						}}
					/>
          <Text style={{color: '#fff'}}>enableUploadProgress:{progress}</Text>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

