import {StyleSheet, Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import ModalBox from 'react-native-modalbox';

export const StartOpenModalBox = () => {
  return (
    <ModalBox
      style={[styles.modal]}
      startOpen={true}
      backdropPressToClose={true}>
      <Text style={[styles.modalText]}>startOpen is true</Text>
    </ModalBox>
  );
};
export const StartOpenModalBox1 = () => {
  const [isOpenVal, setIsOpenVal] = useState(false);
  return (
    <View style={{width:'100%',height:'100%'}}>
      <Button title="点击打开弹框" onPress={() => setIsOpenVal(!isOpenVal)} />
      <ModalBox
        style={[styles.modal]}
        isOpen={isOpenVal}
        startOpen={false}
        backdropPressToClose={true}>
        <Text style={[styles.modalText]}>startOpen is false</Text>
      </ModalBox>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 300,
    width: 300,
  },
  modalText: {
    fontSize: 20,
    margin: 10,
    color: 'black',
  },
});
