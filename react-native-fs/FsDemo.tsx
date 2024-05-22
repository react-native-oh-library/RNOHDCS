import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import FS from 'react-native-fs';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {

  const [mkdirParam, setMkdirParam] = useState('');

  const [existsSource, setExistsSource] = useState('');

  const [writeFileParam, setWriteFileParam] = useState('');
  const [writeFileContent, setWriteFileContent] = useState('');

  const [appendFileParam, setAppendFileParam] = useState('');
  const [appendContent, setAppendContent] = useState('');

  const [readFileParam, setReadFileParam] = useState('');

  const [readFileAssetsParam, setReadFileAssetsParam] = useState('');

  const [copyFileSource, setCopyFileSource] = useState('');
  const [copyFileDest, setCopyFileDest] = useState('');

  const [unlinkFileParam, setUnlinkFileParam] = useState('');

  const [hashFileParam, setHashFileParam] = useState('');
  const [hashAlgorithmParam, setHashAlgorithmParam] = useState('');

  const [moveFileSource, setMoveFileSource] = useState('');
  const [moveFileDest, setMoveFileDest] = useState('');

  const [readParam, setReadParam] = useState('');
  const [readLengthParam, setReadLengthParam] = useState('');
  const [readPositionParam, setReadPositionParam] = useState('');

  const [writeParam, setWriteParam] = useState('');
  const [writeContentValue, setWriteContentValue] = useState('');
  const [writePositionValue, setWritePositionValue] = useState('');

  const [touchFilePathParam, setTouchFilePathParam] = useState('');

  const [statParam, setStatParam] = useState('');

  const mkdirExample = () => {
    FS.mkdir(FS.DocumentDirectoryPath + '/' + mkdirParam).then((result) => {
      console.log('file mkdirParam： ' + mkdirParam);
      console.log('file Successfully created directory.');
    }, err => {
      console.error('file mkdir: ' + err.message)
    });
  }

  const existsExample = () => {
    FS.exists(FS.DocumentDirectoryPath + '/' + existsSource)
      .then(result => {
        console.log('file Exists: ' + result)
      }, err => {
        console.error('file exists: ' + err.message);
      })
  }

  const writeFileExample = () => {
    if (writeFileParam.length > 0 && writeFileContent.length > 0) {
      FS.writeFile(FS.DocumentDirectoryPath + '/' + writeFileParam, writeFileContent)
        .then((result) => {
          console.log('file Successfully Wrote to File')
        }, err => {
          console.error('file writeFile: ' + err.message);
        })
    }
  }

  const appendFileExample = () => {
    if (appendFileParam.length > 0 && appendContent.length > 0) {
      FS.appendFile(FS.DocumentDirectoryPath + '/' + appendFileParam, appendContent)
        .then((result) => {
          console.log('file Successfully Appended to File')
        }, err => {
          console.error('file appendFile: ' + err.message);
        })
    }
  }

  const readFileAssetsExample = () => {
    if (readFileAssetsParam.length > 0) {
      FS.readFileAssets(readFileAssetsParam)
        .then((result) => {
          console.log('file File Contents:', result)
        }, err => {
          console.error('file readFileAssets: ' + err.message);
        })
    }
  }

  const copyFileExample = () => {
    if (copyFileSource.length > 0) {
      FS.copyFile(FS.DocumentDirectoryPath + '/' + copyFileSource,
        FS.DocumentDirectoryPath + '/' + copyFileDest)
        .then((result) => {
          console.log('file Successfully put copy of file to specified destination.')
        }, err => {
          console.error('file copyFile: ' + err.message);
        })
    }
  }

  const readFileExampleutf8 = () => {
    if (readFileParam.length > 0) {
      FS.readFile(FS.DocumentDirectoryPath + '/' + readFileParam, 'utf8')
        .then((result) => {
          console.log('file Contents:', result)
        }, err => {
          console.error('file readFile: ' + err.message);
        })
    }
  }

  const unlinkExample = () => {
    if (unlinkFileParam.length > 0) {
      FS.unlink(FS.DocumentDirectoryPath + '/' + unlinkFileParam)
        .then((result) => {
          console.log('file Successfully unlinked specified file')
        }, err => {
          console.error('file unlink: ' + err.message);
        });
    } else {
      console.log('file unlink unlinkFileParam ' + unlinkFileParam)
    }
  }

  const hashFileExample = () => {
    if (hashFileParam.length > 0) {
      FS.hash(FS.DocumentDirectoryPath + '/' + hashFileParam, hashAlgorithmParam)
        .then((result) => {
          console.log('file Hashed File Contents:', result)
        })
        .catch((err) => {
          console.error('file hash: ' + err.message)
        })
    }
  }

  const moveFileExample = () => {
    if (moveFileSource.length > 0) {
      FS.moveFile(FS.DocumentDirectoryPath + '/' + moveFileSource,
        FS.DocumentDirectoryPath + '/' + moveFileDest)
        .then((result) => {
          console.log('file Successfully moved file to specified destination.')
        })
        .catch((err) => {
          console.error('file moveFile: ' + err.message)
        })
    }
  }

  const readExample = () => {
    if (readParam.length > 0) {
      var length = parseInt(readLengthParam, 10)
      var position = parseInt(readPositionParam, 10)

      if (Number.isNaN(length) || Number.isNaN(position)) {
        console.error('file Length and Position must be integers');
        return
      }

      FS.read(FS.DocumentDirectoryPath + '/' + readParam, length, position)
        .then((result) => {
          console.log('file  Contents:', result)
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
  }

  const writeExample = () => {
    if (writeParam.length > 0 && writeContentValue.length > 0) {

      var position = parseInt(writePositionValue, 10)

      if (Number.isNaN(position)) {
        console.log('file Length and Position must be integers')
        return
      }

      FS.write(FS.DocumentDirectoryPath + '/' + writeParam, writeContentValue, position)
        .then((result) => {
          console.log('file Successfully Wrote to File: ' + result)
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
  }

  const touchFileExample = () => {
    FS.touch(FS.DocumentDirectoryPath + '/' + touchFilePathParam, new Date('2022-1-17T03:24:00'), new Date('2024-1-17T03:24:00'))
      .then((result) => {
        console.log('file Successfully Appended to File: ' + result)
      })
      .catch((err) => {
        console.error('file touchFile err ' + err.message)
      })
  }

  const statExample = () => {
    FS.stat(FS.DocumentDirectoryPath + '/' + statParam)
      .then((result) => {
        let title = 'file Stat Results:'
        let output = 'result.path: ' + result.path +
          '\nresult.ctime: ' + result.ctime +
          '\nresult.mtime: ' + result.mtime +
          '\nresult.size: ' + result.size + ' bytes' +
          '\nresult.mode: ' + result.mode +
          '\nresult.originalFilePath: ' + result.originalFilepath +
          '\nresult.isFile(): ' + result.isFile() +
          '\nresult.isDirectory(): ' + result.isDirectory()
          console.log(title, output)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <Text style={styles.sectionTitle}>
            {"React Native File Harmony Demo App"}
          </Text>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDescription}>
                <Text>
                  {"FS.DocumentDirectoryPath: " + FS.DocumentDirectoryPath + '\n'}
                  {"FS.CachesDirectoryPath: " + FS.CachesDirectoryPath + '\n'}
                </Text>
              </View>
            </View>
          </View>


          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"mkdir"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="Folder Path"
                  onChangeText={mkdirParam => setMkdirParam(mkdirParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Create Directory"
                color="#9a73ef"
                onPress={mkdirExample}
              />
            </View>
          </View>


          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"exists"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="Source Path"
                  onChangeText={existsSource => setExistsSource(existsSource)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Check Existance"
                onPress={existsExample}
                color="#9a73ef"
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"writeFile"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="File Path"
                  onChangeText={writeFileParam => setWriteFileParam(writeFileParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <TextInput style={styles.input}
                  placeholder="Content"
                  onChangeText={writeFileContent => setWriteFileContent(writeFileContent)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Write Content to File"
                color="#9a73ef"
                onPress={writeFileExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"appendFile"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="File Path"
                  onChangeText={appendFileParam => setAppendFileParam(appendFileParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <TextInput style={styles.input}
                  placeholder="Content"
                  onChangeText={appendContent => setAppendContent(appendContent)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Append Content to File"
                color="#9a73ef"
                onPress={appendFileExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"readFile"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="File Path"
                  onChangeText={readFileParam => setReadFileParam(readFileParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Read File utf8"
                color="#9a73ef"
                onPress={readFileExampleutf8}
              />
            </View>
          </View>


          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"copyFile"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="Source File Path"
                  onChangeText={copyFileSource => setCopyFileSource(copyFileSource)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <TextInput style={styles.input}
                  placeholder="Destination Path"
                  onChangeText={copyFileDest => setCopyFileDest(copyFileDest)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Copy File to Destination"
                color="#9a73ef"
                onPress={copyFileExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"readFileAssets"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="File Path"
                  onChangeText={readFileAssetsParam => setReadFileAssetsParam(readFileAssetsParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Read File"
                color="#9a73ef"
                onPress={readFileAssetsExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"unlink"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="Path"
                  onChangeText={UnlinkFileParam => setUnlinkFileParam(UnlinkFileParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Unlink File at Path"
                color="#9a73ef"
                onPress={unlinkExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"hash"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="File Path"
                  onChangeText={hashFileParam => setHashFileParam(hashFileParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />

                <TextInput style={styles.input}
                  placeholder="hash Algorithm"
                  onChangeText={hashAlgorithmParam => setHashAlgorithmParam(hashAlgorithmParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <View>

                </View>
              </View>
              <Button
                title="Hash File Contents"
                color="#9a73ef"
                onPress={hashFileExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"moveFile"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="Source File Path"
                  onChangeText={moveFileSource => setMoveFileSource(moveFileSource)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <TextInput style={styles.input}
                  placeholder="Destination Path"
                  onChangeText={moveFileDest => setMoveFileDest(moveFileDest)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Move File to Destination"
                color="#9a73ef"
                onPress={moveFileExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"read"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  value={readParam}
                  placeholder="File Path"
                  onChangeText={readParam => setReadParam(readParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <TextInput style={styles.input}
                  value={readLengthParam}
                  placeholder="Length (Please Enter Integer)"
                  onChangeText={readLengthParam => setReadLengthParam(readLengthParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <TextInput style={styles.input}
                  value={readPositionParam}
                  placeholder='Position (Please Enter Integer)'
                  onChangeText={readPositionParam => setReadPositionParam(readPositionParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Read File Excerpt From Position"
                color="#9a73ef"
                onPress={readExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"write"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="File Path"
                  onChangeText={writeParam => setWriteParam(writeParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <TextInput style={styles.input}
                  placeholder="Content"
                  onChangeText={writeContentValue => setWriteContentValue(writeContentValue)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
                <TextInput style={styles.input}
                  value={writePositionValue}
                  placeholder="Position"
                  onChangeText={writePositionValue => setWritePositionValue(writePositionValue)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Write Content to File at Position"
                color="#9a73ef"
                onPress={writeExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {"touch"}
              </Text>
              <View style={styles.sectionDescription}>
                <TextInput style={styles.input}
                  placeholder="File Path"
                  onChangeText={touchFilePathParam => setTouchFilePathParam(touchFilePathParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Touch File with New Times"
                color="#9a73ef"
                onPress={touchFileExample}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"stat"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "File Path"
                onChangeText={statParam => setStatParam(statParam)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Get Info About Directory"
              color="#9a73ef"
              onPress={statExample}
            />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.black,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.dark,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    marginTop: 12,
  },

  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;