import React, { Component } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table, Row, Rows ,Cols, Col, TableWrapper,Cell} from 'react-native-reanimated-table';

type State = {
  tableHead1: string[];
  tableData1: Array<string[]>;
  tableHead2: string[];
  tableTitle2: string[];
  tableData2: Array<string[]>;
  tableHead3: string[];
  widthArr3: number[];
  tableData5: Array<string[] | Element[]>;
}

let curCount = 0;

export default class ExampleOne extends Component<{}, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    const elementButton = (value: string) => (
      <TouchableOpacity onPress={() => this._alertIndex2(value)}>
        <View style={styles.btn5}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    this.state = {
      tableHead1: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData1: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ],
      tableHead2: ['', 'Head1', 'Head2', 'Head3'],
      tableTitle2: ['Title', 'Title2', 'Title3', 'Title4'],
      tableData2: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
      ],
      tableHead3: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7'],
      widthArr3: [40, 60, 80, 100, 120, 140, 160],
      tableData5: [
        [elementButton ('1'), 'a', 'b', 'c', 'd'],
        [elementButton('2'), '1', '2', '3', '4'],
        [elementButton('3'), 'a', 'b', 'c', 'd']
      ]
    }
    this.initData = this.initData.bind(this);
  }

  initData(){
    const elementButton = (value: string) => (
      <TouchableOpacity onPress={() => this._alertIndex2(value)}>
        <View style={styles.btn5}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    if(curCount == 0){
      this.setState({
        tableHead1: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData1: [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
          ['1', '2', '3', '456\n789'],
          ['a', 'b', 'c', 'd']
        ],
        tableHead2: ['', 'Head1', 'Head2', 'Head3'],
        tableTitle2: ['Title', 'Title2', 'Title3', 'Title4'],
        tableData2: [
          ['1', '2', '3'],
          ['a', 'b', 'c'],
          ['1', '2', '3'],
          ['a', 'b', 'c']
        ],
        tableHead3: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7'],
        widthArr3: [40, 60, 80, 100, 120, 140, 160],
        tableData5: [
          [elementButton ('1'), 'a', 'b', 'c', 'd'],
          [elementButton('2'), '1', '2', '3', '4'],
          [elementButton('3'), 'a', 'b', 'c', 'd']
        ]
      })
      curCount = 1;
    }else{
      this.setState({
        tableHead1: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData1: [
          ['11', '22', '33', '44'],
          ['a', 'b', 'c', 'd'],
          ['1', '2', '3', '456\n789'],
          ['a', 'b', 'c', 'd']
        ],
        tableHead2: ['', 'Head1', 'Head2', 'Head3'],
        tableTitle2: ['Title', 'Title2', 'Title3', 'Title4'],
        tableData2: [
          ['11', '21', '31'],
          ['a', 'b', 'c'],
          ['1', '2', '3'],
          ['a', 'b', 'c']
        ],
        tableHead3: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7'],
        widthArr3: [40, 60, 80, 100, 120, 140, 160],
        tableData5: [
          [elementButton ('1'), 'a1', 'b1', 'c1', 'd1'],
          [elementButton('2'), '1', '2', '3', '4'],
          [elementButton('3'), 'a', 'b', 'c', 'd']
        ]
      })
      curCount = 0;
    }
  }


  _alertIndex(index: number) {
    Alert.alert("", `This is row ${index + 1}`, [], {cancelable:true});
  }

  _alertIndex2(value: string) {
    Alert.alert("", `This is column ${value}`, [], {cancelable:true});
  }

  render() {
    const state = this.state;
    const element = (data: string, index: number) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    const tableData = [];
    for (let i = 0; i < 20; i += 1) {
      const rowData = [];
      for (let j = 0; j < 7; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <Button title = '刷新数据' onPress = {this.initData}></Button>
        <ScrollView>
          <Text>Demo1</Text>
           <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead1} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData1} textStyle={styles.text}/>
          </Table>

          <View style = {{marginBottom: 10}}/>
          <Text>Demo2</Text>
          <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead2} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text2}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle2} style={styles.title} heightArr={[28,28]} textStyle={styles.text2}/>
            <Rows data={state.tableData2} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text2}/>
          </TableWrapper>
        </Table>
        <View style = {{marginBottom: 10}}/>
          <Text>Demo3</Text>
         <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead3} widthArr={state.widthArr3} style={styles.header} textStyle={styles.text3}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr3}
                      style={[styles.row3, index%2 ? styles.row3 : {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text3}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>

        <View style = {{marginBottom: 10}}/>
          <Text>Demo4</Text>
          <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead1} style={styles.head4} textStyle={styles.text}/>
          {
            state.tableData1.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row4}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>

        <View style = {{marginBottom: 10}}/>
          <Text>Demo5</Text>
          <Table style={{flexDirection: 'row'}} borderStyle={{borderWidth: 1}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['H1', 'H2']} style={styles.head5} heightArr={[60, 60]} textStyle={styles.text2} />
              <Col data={state.tableTitle2} style={styles.title5} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData5} flexArr = {[1, 1, 1]} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text2}/>
          </TableWrapper>
        </Table>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text2: { textAlign: 'center' },
  header: { height: 50, backgroundColor: '#537791' },
  text3: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row3: { height: 40, backgroundColor: '#E7E6E1' },
  head4: { height: 40, backgroundColor: '#808B97' },
  row4: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
  head5: { flex: 1, backgroundColor: '#c8e1ff' },
  title5: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right' },
  btn5: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 }
});