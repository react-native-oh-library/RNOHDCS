import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase as _TestCase } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import FileViewer from 'react-native-file-viewer';

const FileUri = '/storage/Users/currentUser/Documents/1.jpg';
const FileUriPDF = '/storage/Users/currentUser/Documents/1.pdf';
const FileUriUND = '/storage/Users/currentUser/Documents/1.aaa';

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
    <ScrollView style={{ flex: 1, height: '100%' }}>
      <Tester>
        <TestSuite name="FileViewer">
          <TestCase
            itShould="default"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    openTest(FileUri).then(res => setState(res))
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

          <TestCase
            itShould="displayName string"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    openTest(FileUri, 'show_displayName string').then(res => setState(res))
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

          <TestCase
            itShould="displayName object"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    openTest(FileUri, { displayName: 'show_displayName object' }).then(res => setState(res))
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

          <TestCase
            itShould="showOpenWithDialog=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    openTest(FileUriPDF, { showOpenWithDialog: true }).then(res => setState(res));
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
          <TestCase
            itShould="showOpenWithDialog=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    openTest(FileUriPDF, { showOpenWithDialog: false }).then(res => setState(res));
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

          <TestCase
            itShould="onDismiss"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    openTest(FileUriPDF, {
                      showOpenWithDialog: true,
                      onDismiss: () => { setState(true) },
                    })
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

          <TestCase
            itShould="showAppsSuggestions=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    openTest(FileUriUND, { showAppsSuggestions: true }).then(res => setState(res))
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
          <TestCase
            itShould="showAppsSuggestions=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    openTest(FileUriUND, { showAppsSuggestions: false }).then(res => setState(res))
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
      </Tester>
    </ScrollView>
  );
}

// TestCase
function TestCase<TState = undefined>({
  itShould,
  modal,
  initialState,
  arrange,
  assert,
}: {
  itShould: string;
  modal?: boolean;
  initialState: TState;
  arrange: SmartManualTestCaseProps<TState>['arrange'];
  assert: SmartManualTestCaseProps<TState>['assert'];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      initialState={initialState}
      arrange={arrange}
      assert={assert}
    />
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
