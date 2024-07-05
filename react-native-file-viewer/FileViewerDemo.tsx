// import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';

import FileViewer from 'react-native-file-viewer';

const FileUri = '/storage/Users/currentUser/Documents/1.jpg';
const FileUriPDF = '/storage/Users/currentUser/Documents/1.pdf';

const openTest = (uri: string, option?: any): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      FileViewer?.open(uri, option)
        .then(() => {
          console.log('open resolve true');
          resolve(true);
        })
        .catch(() => {
          console.log('open resolve false');
          resolve(false);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export function FileViewerDemo() {
  return (
    <TestSuite name="FileViewer">
      {/* <TestCase.Example itShould="FontSize 18" tags={['C_API']}>
        <Text style={{fontSize: 18}}>Test FontSize</Text>
      </TestCase.Example> */}

      <TestCase.Manual
        itShould="be open be ture"
        initialState={undefined as any}
        arrange={({ setState }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                openTest(FileUri).then(res => {
                  setState(res);
                });
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>OpenFile</Text>
            </TouchableOpacity>
          );
        }}
        assert={({ expect, state }) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="displayName be open be ture"
        initialState={undefined as any}
        arrange={({ setState }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                openTest(FileUri, 'show_displayName string').then(res => {
                  setState(res);
                });
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>OpenFile(displayName)</Text>
            </TouchableOpacity>
          );
        }}
        assert={({ expect, state }) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="showOpenWithDialog be open be ture"
        initialState={undefined as any}
        arrange={({ setState }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                openTest(FileUri, { showOpenWithDialog: true }).then(res => {
                  setState(res);
                });
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>OpenFile(showOpenWithDialog)</Text>
            </TouchableOpacity>
          );
        }}
        assert={({ expect, state }) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="onDismiss be open be ture"
        initialState={undefined as any}
        arrange={({ setState }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                openTest(FileUri, {
                  showOpenWithDialog: true,
                  onDismiss: () => {
                    console.log('onDismiss ============== ');
                    setState(true);
                  },
                }).then(res => {
                  // setState(res);
                });
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>OpenFile(onDismiss)</Text>
            </TouchableOpacity>
          );
        }}
        assert={({ expect, state }) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="showAppsSuggestions be open be ture"
        initialState={undefined as any}
        arrange={({ setState }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                openTest(FileUriPDF, { showAppsSuggestions: true }).then(res => {
                  setState(res);
                });
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>OpenFile(showAppsSuggestions)</Text>
            </TouchableOpacity>
          );
        }}
        assert={({ expect, state }) => {
          expect(state).to.be.true;
        }}
      />
    </TestSuite>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
  },
  btn: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'blue',
  },
  btnText: { fontWeight: 'bold', color: '#fff', fontSize: 20 },
  selectBtn: {
    padding: 8,
    margin: 3,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#753c13',
  },
  selectBtnActive: {
    padding: 8,
    margin: 3,
    backgroundColor: '#e2803b',
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
  },
});
