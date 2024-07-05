import React from 'react';
import Modal from 'react-native-modalbox';

import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import {
  Text,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Easing,
  TextInput
} from 'react-native';

var screen = Dimensions.get('window');

export default class ModalBoxExample extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }


  onClose() {
    console.log('Modal just closed');
  }
  animalEase(){
    Easing.elastic(8)
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state:any) {
    console.log('the open/close of the swipeToClose just changed');
  }

  renderList() {
    var list = [];

    for (var i=0;i<50;i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }

    return list;
  }

  render() {
    var BContent = (
      <View style={[styles.btn, styles.btnModal]}>
        <Button title="X" color="white" onPress={() => this.setState({isOpen: false})}/>
      </View>
    );

    return (
      <Tester>
        <TestSuite name='ModalTesteDemo'>
          <TestCase itShould='Basic modal' tags={['C_API']}>
            <Button title="Basic modal" onPress={() =>this.refs.modal1.open()} />
            <Modal
              style={[styles.modal, styles.modal2]}
              ref={'modal1'}
              swipeToClose={this.state.swipeToClose}
              onClosed={this.onClose}
              onOpened={this.onOpen}
              animationDuration={4000}
              easing={Easing.elastic(8)}
              onClosingState={this.onClosingState}>
                <Text style={styles.text}>Basic modal</Text>
                <Button title={`Disable swipeToClose(${this.state.swipeToClose ? "true" : "false"})`} onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})} />
            </Modal>
          </TestCase>
          <TestCase itShould='Position top' tags={['C_API']}>
            <Button title="Position top" onPress={() =>this.refs.modal2.open()} />
            <Modal style={[styles.modal, styles.modal2]} startOpen={true} backdrop={false}  position={"top"} ref={"modal2"}>
              <Text style={[styles.text, {color: "white"}]}>Modal on top</Text>
            </Modal>
          </TestCase>
          <TestCase itShould='Position centered + backdrop + disable' tags={['C_API']}>
            <Button title="Position centered + backdrop + disable" onPress={() =>this.refs.modal3.open()} />
            <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
              <Text style={styles.text}>Modal centered</Text>
              <Button title={`Disable (${this.state.isDisabled ? "true" : "false"})`} onPress={() => this.setState({isDisabled: !this.state.isDisabled})} />
            </Modal>
          </TestCase>
          <TestCase itShould='Position bottom + backdrop' tags={['C_API']}>
            <Button title="Position bottom + backdrop " onPress={() => this.refs.modal4.open()} />
            <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
              <Text style={styles.text}>Modal on bottom with backdrop</Text>
            </Modal>
          </TestCase>
          <TestCase itShould='Backdrop + backdropContent' tags={['C_API']}>
            <Button title="Backdrop + backdropContent" onPress={() => this.setState({isOpen: true})} />
            <Modal isOpen={this.state.isOpen} coverScreen={false} onClosed={() => this.setState({isOpen: false})} style={[styles.modal, styles.modal4]} position={"center"} backdropPressToClose={false} backdropContent={BContent} backdropColor={'red'} backdropOpacity={0.2}>
              <Text style={styles.text}>Modal with backdrop content</Text>
            </Modal>
          </TestCase>
          <TestCase itShould='Position bottom + ScrollView' tags={['C_API']}>
            <Button title="Position bottom + ScrollView" onPress={() => this.refs.modal6.open()} />
            <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20} swipeThreshold={10}>
              <ScrollView>
                <View style={{width: screen.width, paddingLeft: 10}}>
                  {this.renderList()}
                </View>
              </ScrollView>
            </Modal>
          </TestCase>
          <TestCase itShould='Modal with keyboard support' tags={['C_API']}>
            <Button title="Modal with keyboard support" onPress={() => this.refs.modal7.open()} />
            <Modal ref={"modal7"} style={[styles.modal, styles.modal4]} position={"center"}>
              <View>
                <TextInput style={{height: 50, width: 200, backgroundColor: '#DDDDDD'}}/>
              </View>
            </Modal>
          </TestCase>
          <TestCase itShould='Entry from top' tags={['C_API']}>
            <Button title="Entry from top" onPress={() => this.refs.modal8.open()} />
            <Modal ref={"modal8"} style={[styles.modal, styles.modal2]} position={"top"} entry={"top"}>
              <Text style={[styles.text, {color: "white"}]}>Modal entry from top</Text>
            </Modal>
          </TestCase>
        </TestSuite>
      </Tester>
    );
  }

}

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 20,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});