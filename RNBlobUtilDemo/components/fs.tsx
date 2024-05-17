import React, { useState } from 'react';
import {
	ScrollView,
	View,
	Text,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { TestSuite, Tester } from '@rnoh/testerino';
import { TestCase } from '../../components';

const FILE_PATH = ReactNativeBlobUtil.fs.dirs.CacheDir;
const FILE_PATH1 = ReactNativeBlobUtil.fs.dirs.DocumentDir;

export function createFile() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="createFile">
					<TestCase.Logical
						itShould="create new file using utf8 type."	
						fn={async ({ expect }) => {
							await ReactNativeBlobUtil.fs.createFile(FILE_PATH + '/create_file.txt', '123456', 'utf8')
							await ReactNativeBlobUtil.fs.createFile(FILE_PATH + '/create_file_stream.txt', '123456', 'utf8')
							let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file.txt', 'utf8')
							expect(str).to.be.equals('123456')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function createFileASCII() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="createFileASCII">
					<TestCase.Logical
						itShould="create new file using ascii type."	
						fn={async ({ expect }) => {
							await ReactNativeBlobUtil.fs.createFile(FILE_PATH + '/create_file_ascii.txt', [102, 111, 111], 'ascii')
							let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_ascii.txt', 'utf8')
							expect(str).to.be.equals('foo')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function exists() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="exists">
					<TestCase.Logical
						itShould="return boolean to determine if file is exist."	
						fn={async ({ expect }) => {
							let isExist = await ReactNativeBlobUtil.fs.exists(FILE_PATH + '/create_file.txt')
							expect(isExist).to.be.true;
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function writeFile() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="writeFile">
					<TestCase.Logical
						itShould="write new file with utf8."	
						fn={async ({ expect }) => {
							await ReactNativeBlobUtil.fs.writeFile(FILE_PATH + '/write_file.txt', 'write file')
							let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/write_file.txt', 'utf8')
							expect(str).to.be.length('10')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function writeFileArray() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="writeFileArray">
					<TestCase.Logical
						itShould="write new file with ascii."	
						fn={async ({ expect }) => {
							await ReactNativeBlobUtil.fs.writeFileArray(FILE_PATH + '/write_file_array.txt', [104, 97, 114, 109, 111, 110, 121], 'ascii')
							let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/write_file_array.txt', 'utf8')
							expect(str).to.be.equals('harmony')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function unlink() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="unlink">
					<TestCase.Logical
						itShould="remove a file."	
						fn={async ({ expect }) => {
							await ReactNativeBlobUtil.fs.unlink(FILE_PATH + '/create_file.txt')
							let isExist = await ReactNativeBlobUtil.fs.exists(FILE_PATH + '/create_file.txt')
							expect(isExist).to.be.false
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function unlinkAll() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="unlinkAll">
					<TestCase.Logical
						itShould="remove all file."	
						fn={async ({ expect }) => {
							let pathNames = await ReactNativeBlobUtil.fs.ls(FILE_PATH)
							let pathNames1 = await ReactNativeBlobUtil.fs.ls(FILE_PATH1)
							pathNames.forEach(async (item) => {
                await ReactNativeBlobUtil.fs.unlink(FILE_PATH + '/' + item)
              });
              pathNames1.forEach(async (item) => {
                await ReactNativeBlobUtil.fs.unlink(FILE_PATH1 + '/' + item)
              });
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function ls() {
  const [fileDir, setFileDir] = useState([''])
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="ls">
          <TestCase.Logical
            itShould="check current floder file."
            fn={async ({ expect }) => {
              let pathNames = await ReactNativeBlobUtil.fs.ls(FILE_PATH)
              let pathNames1 = await ReactNativeBlobUtil.fs.ls(FILE_PATH1)
              setFileDir([...pathNames, ...pathNames1])
            }}
          />
          <View>
            {fileDir.map((item) => {
              return (<Text key={item} style={{ color: '#fff' }}>{item}</Text>)
            })}
          </View>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export function stat() {
  const [fileInfo, setFileInfo] = useState({})
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="stat">
          <TestCase.Logical
            itShould="get file info."
            fn={async ({ expect }) => {
              let fileInfo = await ReactNativeBlobUtil.fs.stat(FILE_PATH + '/create_file.txt')
              setFileInfo(fileInfo)
              expect(fileInfo.size).to.be.equals(6)
            }}
          />
          <View>
            {Object.keys(fileInfo).map((item) => {
              return (<Text key={item} style={{ color: '#fff' }}>{item + ''} : {fileInfo[item]}</Text>)
            })}
          </View>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export function lstat() {
  const [fileInfo, setFileInfo] = useState({})
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="lstat">
          <TestCase.Logical
            itShould="get file link info."
            fn={async ({ expect }) => {
              let fileInfo = await ReactNativeBlobUtil.fs.lstat(FILE_PATH + '/create_file.txt')
              setFileInfo(fileInfo)
              expect(fileInfo.size).to.be.equals(6)
            }}
          />
          <View>
            {Object.keys(fileInfo).map((item) => {
              return (<Text key={item} style={{ color: '#fff' }}>{item + ''} : {fileInfo[item]}</Text>)
            })}
          </View>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export function cp() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="cp">
					<TestCase.Logical
						itShould="copy file."	
						fn={async ({ expect }) => {
							await ReactNativeBlobUtil.fs.cp(FILE_PATH + '/create_file.txt', FILE_PATH + '/create_file_copy.txt')
							let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_copy.txt', 'utf8')
							expect(str).to.be.equals('123456')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function mv() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="mv">
					<TestCase.Logical
						itShould="move file."	
						fn={async ({ expect }) => {
							await ReactNativeBlobUtil.fs.mv(FILE_PATH + '/create_file.txt', FILE_PATH + '/create_file_move.txt')
							let str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_move.txt', 'utf8')
							expect(str).to.be.equals('123456')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function mkdir() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="mkdir">
					<TestCase.Logical
						itShould="create floder."	
						fn={async ({ expect }) => {
							ReactNativeBlobUtil.fs.mkdir(FILE_PATH + '/111')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}

export function readFile() {
  const [errMsg, setErrMsg] = useState('')
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="readFile">
          <TestCase.Logical
            itShould="read file with utf8."
            fn={async ({ expect }) => {
              let str = '';
              try {
                str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file.txt', 'utf8')
              } catch (err) {
                str = err.message
                setErrMsg(str)
              }
              expect(str).to.be.equals('123456')
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

export function hash() {
  const [errMsg, setErrMsg] = useState('')
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="hash">
          <TestCase.Logical
            itShould="return file to md5."
            fn={async ({ expect }) => {
              let str = '';
              try {
                str = await ReactNativeBlobUtil.fs.hash(FILE_PATH + '/create_file.txt', 'md5')
              } catch (err) {
                str = err.message
                setErrMsg(str)
              }
              expect(str).to.be.equals('E10ADC3949BA59ABBE56E057F20F883E')
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

export function slice() {
  const [errMsg, setErrMsg] = useState('')
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="slice">
          <TestCase.Logical
            itShould="slice a file content."
            fn={async ({ expect }) => {
              let str = '';
              try {
                await ReactNativeBlobUtil.fs.slice(FILE_PATH + '/create_file.txt', FILE_PATH + '/create_file_slice.txt', 2, 5)
                str = await ReactNativeBlobUtil.fs.readFile(FILE_PATH + '/create_file_slice.txt', 'utf8')
              } catch (err) {
                str = err.message
                setErrMsg(str)
              }
              expect(str).to.be.equals('345')
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

export function df() {
  const [free, setFree] = useState('')
  const [total, setTotal] = useState('')
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="df">
          <TestCase.Logical
            itShould="return file df totalSize and freeSize."
            fn={async ({ expect }) => {
              let spaceInfo = await ReactNativeBlobUtil.fs.df()
              setFree(spaceInfo.free)
              setTotal(spaceInfo.total)
              expect(spaceInfo.free).to.match(/^[0-9]*$/)
            }}
          />
          <View>
            <Text style={{ color: '#fff' }}>free:{free}</Text>
            <Text style={{ color: '#fff' }}>total:{total}</Text>
          </View>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export function removeSession() {
	return (
		<Tester style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<TestSuite name="removeSession">
					<TestCase.Logical
						itShould="delete session."	
						fn={async ({ expect }) => {
							let session = await ReactNativeBlobUtil.fs.session('another_jpg')
							expect(session.name).to.be.equals('another_jpg')
						}}
					/>
				</TestSuite>
			</ScrollView>
		</Tester>
	)
}