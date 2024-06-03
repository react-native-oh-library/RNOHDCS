import React, {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import {Button} from '../components';
import Modal from "react-native-modal";
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
 

export function ModalDemo(this: any) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  
  return (
      
    <Tester>
      <TestSuite name='react-native-modal'>
        <TestCase itShould='Default react-native-modal'>
        <Button label='Show modal' onPress={toggleModal} />

       <Modal isVisible={isModalVisible} animationIn="slideInUp"
        onBackButtonPress={() => { 
          console.warn("onBackButtonPress"); 
        }} 
        onModalShow={() => { 
          console.warn("onModalShow"); 
        }}
        onSwipeStart={() => { 
          console.warn("onSwipeStart"); 
        }} 
        onModalWillHide={() => { 
          console.warn("onModalWillHide"); 
        }} 
        onModalHide={() => { 
          console.warn("onModalHide"); 
        }} 
        onModalWillShow={() => { 
          console.warn("onModalWillShow"); 
        }} 
        animationInTiming={400} animationOut={'slideOutDown'} backdropColor= 'black' >
       <View style={{ flex: 1 }}>
       <Text>Hello!</Text>
       
    <Button label='Hide modal' onPress={toggleModal} />
    </View>
    </Modal>

        </TestCase>
      </TestSuite>
    </Tester>
    
 
  );
  }
