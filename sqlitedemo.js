/**
 * @format
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SQLite from '@react-native-oh-tpl/react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(false);
const database_name = 'Test.db';
const database_version = '1.0';
const database_displayname = 'SQLite Test Database';
const database_size = 200000;
let db;
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class SQLiteDemo extends Component {
  constructor() {
    super();
    this.progress = [];
    this.state = {
      progress: [],
    };
  }

  updateProgress = (text, resetState) => {
    let progress = [];
    if (!resetState) {
      progress = [...this.progress];
    }
    progress.push(text);
    this.progress = progress;
    this.setState({
      progress,
    });
  };

  componentWillUnmount = () => {
    this.closeDatabase();
  };

  errorCB = (err) => {
    console.log('SQLitePlugin>>>>>>>error: ', err);
    this.updateProgress('Error: ' + (err.message || err));
  };
  successCB = (s) => {
    console.log('SQLitePlugin>>>>>>>SQL executed ...');
  };

  openCB = () => {
    console.log('SQLitePlugin>>>>>>Database OPEN');
    this.updateProgress('Database OPEN');
  };

  closeCB = () => {
    console.log('SQLitePlugin>>>>>>>>>>Database CLOSED');
    this.updateProgress('Database CLOSED');
  };

  deleteCB = () => {
    console.log('Database DELETED');
    this.updateProgress('Database DELETED');
  };
  loadAndQueryDB = () => {
    this.updateProgress('Opening database ...');
    console.log('Opening database ...');
    db = SQLite.openDatabase(database_name,database_version,database_displayname,database_size,this.openCB,this.errorCB)
  };

  createTableSql = () => {
    this.updateProgress('database createTable ...');
    if(db!=undefined){
      SQLite.executeSql(db,'CREATE TABLE IF NOT EXISTS Departments( ' +'department_id INTEGER PRIMARY KEY NOT NULL, ' +'name VARCHAR(30) ); ',[],(success) =>{
        this.updateProgress('database createTable'+success);
        this.insertDataSql();
      },this.errorCB,);
    }
  }

  insertDataSql = () => {
    this.updateProgress('Executing INSERT stmts');
    SQLite.executeSql(db,'INSERT INTO Departments (name) VALUES ("Client Services");',[],(success) =>{
      this.updateProgress('database insert '+success);
      this.queryDataSql();
    },this.errorCB);
  }

  queryDataSql = () => {
    SQLite.executeSql(db,"SELECT * FROM Departments;",[],(results) => {
      this.updateProgress('database queryDataSql ');
      this.updateProgress('Query completed');
      var len = results.length;
      for (let i = 0; i < len; i++) {
        let row = results(i);
        this.updateProgress(`${row}`);
      }
    },this.errorCB,)
  }

  deleteDatabase = () => {
    this.updateProgress('Deleting database');
    SQLite.deleteDatabase(database_name, () => {
      console.log('Database DELETED success');
      this.updateProgress('Database DELETED success');
    }, this.errorCB);
  };

  closeDatabase = () => {
    if (db) {
      console.log('Closing database ...');
      this.updateProgress('Closing database');
      SQLite.close(db,this.closeCB, this.errorCB);
    } else {
      this.updateProgress('Database CLOSE callback function error');
      // this.updateProgress('Database was not OPENED');
    }
  };

  runDemo = () => {
    this.updateProgress('Starting SQLite Callback Demo',true);
    this.loadAndQueryDB();
  };

  renderProgressEntry = entry => {
    return (
      <View style={listStyles.li}>
        <View>
          <Text style={listStyles.liText}>{entry}</Text>
        </View>
      </View>
    );
  };

  render = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton} onPress={this.runDemo}>
            open DB
          </Text>
          <Text style={styles.toolbarButton} onPress={this.createTableSql}>
            createTable
          </Text>
          <Text style={styles.toolbarButton} onPress={this.insertDataSql}>
            insertSql
          </Text>
          <Text style={styles.toolbarButton} onPress={this.closeDatabase}>
            close DB
          </Text>
          <Text style={styles.toolbarButton} onPress={this.deleteDatabase}>
            delete DB
          </Text>
        </View>
        <FlatList
          data={this.state.progress}
          renderItem={({item}) => <Item title={item} />}
          keyExtractor={item => item.i}
        />
      </View>
    );
  };
}
var listStyles = StyleSheet.create({
    li: {
      borderBottomColor: '#c8c7cc',
      borderBottomWidth: 0.5,
      paddingTop: 15,
      paddingRight: 15,
      paddingBottom: 15,
    },
    liContainer: {
      backgroundColor: '#fff',
      flex: 1,
      paddingLeft: 15,
    },
    liIndent: {
      flex: 1,
    },
    liText: {
      color: '#333',
      fontSize: 17,
      fontWeight: '400',
      marginBottom: -3.5,
      marginTop: -3.5,
    },
  });
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    toolbar: {
      backgroundColor: '#51c04d',
      paddingTop: 60,
      paddingBottom: 10,
      flexDirection: 'row',
    },
    toolbarButton: {
      color: 'blue',
      textAlign: 'center',
      flex: 1,
    },
    mainContainer: {
      flex: 1,
    },
  });
  export default SQLiteDemo;