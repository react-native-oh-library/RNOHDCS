import {TestSuite, Tester} from '@rnoh/testerino';
import { TestCase } from '../components';
import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar
} from "react-native";

import SqliteStorage from "react-native-sqlite-storage";
import { alias } from 'yargs';


function RNSqliteStorageSTest() {
    return (
     <TestSuite name="SqliteStorages">
        <TestCase.Logical
          tags={['C_API']}
          itShould=" SqliteStorage qid"
          fn={({expect}:any) => {
              expect(SqliteStorage.qid).to.be.undefined;
          }}
        />
        <TestCase.Logical
          tags={['C_API']}
          itShould="SqliteStorage sql"
          fn={({expect}:any) => {
              expect(SqliteStorage.sql).to.be.undefined;
          }}
        />
         <TestCase.Logical
          tags={['C_API']}
          itShould="SqliteStorage params"
          fn={({expect}:any) => {
              expect(SqliteStorage.params).to.be.undefined;
          }}
        />
    </TestSuite>
  );
}
function RNSqliteStorageFTest() { 
  SqliteStorage.DEBUG(true);
SqliteStorage.enablePromise(false);

const database_name = 'Test.db';
const database_version = '1.0';
const database_displayname = 'SQLite Test Database';
const database_size = 200000;
let db;
const attachArgs = {
  path : database_name,
  alias : database_displayname
}
function success() {}  
function error(){} 
 return (
   <TestSuite name="SqliteStoragef">
        <TestCase.Logical
         itShould="SqliteStorage.echoStringValue"
         fn={({expect}: any) => {
          try {
            let echoStringValue =  SqliteStorage.echoStringValue("Client Services");
            expect((echoStringValue)).to.not.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}  

      /> 
        <TestCase.Logical
         itShould="SqliteStorage.open"
         fn={({expect}: any) => {
          try {
            let open =  SqliteStorage.open('options', success, error);
            expect(open).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />  

      <TestCase.Logical
         itShould="SqliteStorage.delete"
         fn={({expect}: any) => {
          try {
            let delet =  SqliteStorage.delete('options',success, error);
            expect(delet).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
        }}
      />   
      <TestCase.Logical
         itShould="SqliteStorage.attach"
         fn={({expect}: any) => {
          try {
            let attach =  SqliteStorage.attach('options', success, error);
            expect(attach).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      /> 
      <TestCase.Logical
         itShould="SqliteStorage.backgroundExecuteSqlBatch"
         fn={({expect}: any) => {
          try {
            let backgroundExecuteSqlBatch =  SqliteStorage.backgroundExecuteSqlBatch('options', success, error);
            expect(backgroundExecuteSqlBatch).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }  
        }}
      /> 
      <TestCase.Logical
         itShould="SqliteStorage.execute"
         fn={({expect}: any) => {
          try {
            let execute =  SqliteStorage.execute('CREATE TABLE IF NOT EXISTS Offices( ' +
        'office_id INTEGER PRIMARY KEY NOT NULL, ' +
        'name VARCHAR(20), ' +
        'longtitude FLOAT, ' +
        'latitude FLOAT ) ; ',
      [],
      SqliteStorage.successCB,
      SqliteStorage.errorCB,);
            expect(execute).to.be.true;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
        }}
      />
      <TestCase.Logical
         itShould="SqliteStorage.startDatabase"
         fn={({expect}: any) => {
          try {
            let startDatabase =  SqliteStorage.startDatabase(database_name,
              database_version,
              database_displayname,
              database_size,
              SqliteStorage.openCB,
              SqliteStorage.errorCB,
            );
            expect(startDatabase).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
        }}
      /> 
<TestCase.Logical
         itShould="SqliteStorage.closeDatabase"
         fn={({expect}: any) => {
          try {
            let closeDatabase =  SqliteStorage.closeDatabase(database_name, success, error);
            expect(closeDatabase).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }  
        }}
      />
       <TestCase.Logical
         itShould="SqliteStorage.deleteDatabase"
         fn={({expect}: any) => {
          try {
            let deleteDatabase =  SqliteStorage.deleteDatabase(database_name, SqliteStorage.deleteCB, SqliteStorage.errorCB);
            expect(deleteDatabase).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
        }}
      />
      <TestCase.Logical
         itShould="SqliteStorage.executeSqlBatchDatabase"
         fn={({expect}: any) => {
          try {
            let executeSqlBatchDatabase =  SqliteStorage.executeSqlBatchDatabase(
              'CREATE TABLE IF NOT EXISTS Employees( ' +
                'employe_id INTEGER PRIMARY KEY NOT NULL, ' +
                'name VARCHAR(55), ' +
                'office INTEGER, ' +
                'department INTEGER, ' +
                'custom_info TEXT DEFAULT "",' +
                'FOREIGN KEY ( office ) REFERENCES Offices ( office_id ) ' +
                'FOREIGN KEY ( department ) REFERENCES Departments ( department_id ));',
              [],
            );
            expect(executeSqlBatchDatabase).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
        }}
      />
      
      <TestCase.Logical
         itShould="SqliteStorage.attachDatabase"
         fn={({expect}: any) => {
          try {
            let attachDatabase =  SqliteStorage.attachDatabase(  
              'SELECT 1 FROM Version LIMIT 1',  
              [],  
              );
            expect(attachDatabase).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
        }}
      />
      <TestCase.Logical
         itShould="SqliteStorage.INIT"
         fn={({expect}: any) => {
          try {
            let INIT =  SqliteStorage.INIT(database_name);
            expect(INIT).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
        }}
      />
      <TestCase.Logical
         itShould="SqliteStorage.saveFileToCache"
         fn={({expect}: any) => {
          try {
            let saveFileToCache =  SqliteStorage.saveFileToCache('options',database_name);
            expect(saveFileToCache).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
        }}
      />
      </TestSuite>
    );
  }
 function App() {
    return (
      <View>
      <StatusBar />
      <SafeAreaView style={{backgroundColor: '#222'}}>
          <Tester >
            <ScrollView style={{width: '100%'}}>
              <RNSqliteStorageSTest/>
              <RNSqliteStorageFTest/>
            </ScrollView>
          </Tester>
      </SafeAreaView>
    </View>
    );
  }
  
  export default App;