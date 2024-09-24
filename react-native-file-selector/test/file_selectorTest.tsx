import {Button, SafeAreaView } from 'react-native';
import FileSelector from 'react-native-file-selector';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

const FileselectorTest=()=>{
    return (<SafeAreaView>
      <Tester>
      <TestSuite name="test file selector">
        <TestCase itShould="specify onDone"
          assert={({expect, state})=>{
            expect(state).to.be.true
          }}
          initialState={false}
          tags={['C_API']}
          arrange={
            ({setState})=>{
            return (<Button title="click"
              onPress={
                ()=>{
                  FileSelector.Show({onDone:(path)=>{alert('path = '+path);}});
                  setState(true);
                }
              }
            />)
          }}
        >    
        </TestCase>
      </TestSuite>
    </Tester>
    <Tester>
      <TestSuite name="test file selector">
        <TestCase itShould="specify filter"
          assert={({expect, state})=>{
            expect(state).to.be.true
          }}
          initialState={false}
          tags={['C_API']}
          arrange={
            ({setState})=>{
            return (<Button title="click"
              onPress={
                ()=>{
                  FileSelector.Show({filter:".mp4,.jpeg"});
                  setState(true);
                }
              }
            />)
          }}
        >    
        </TestCase>
      </TestSuite>
    </Tester>
    <Tester>
      <TestSuite name="test file selector">
        <TestCase itShould="specify path"
          assert={({expect, state})=>{
            expect(state).to.be.true
          }}
          initialState={false}
          tags={['C_API']}
          arrange={
            ({setState})=>{
            return (<Button title="click"
              onPress={
                ()=>{
                  FileSelector.Show({path: '/storage/Users/currentUser/Documents',onDone: (path)=>{
                    setState(true);}});
                }
              }
            />)
          }}
        >    
        </TestCase>
      </TestSuite>
    </Tester>

    </SafeAreaView>);
};

export default FileselectorTest;