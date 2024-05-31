import React, {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import {Button} from '../components';
import Modal from "react-native-modal";
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
 

export function ModalDemo() {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  
  return (
      
    <Tester>
      <TestSuite name='MaterialTextfielText'>
        <TestCase itShould='Default Material Textfiel Text'>
        <Button label='Show modal' onPress={toggleModal} />

       <Modal isVisible={isModalVisible} animationIn="fadeInLeft">
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
