import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Modal, Toast, Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="ModalTest">
      <TestCase itShould="render a Modal visible" tags={['C_API']}>
        <ShowModal />
      </TestCase>
      <TestCase itShould="render a Modal popup={true}" tags={['C_API']}>
        <ShowPopupModal />
      </TestCase>
      <TestCase itShould="render a Modal transparent={true}" tags={['C_API']}>
        <ShowTransparentModal />
      </TestCase>
      <TestCase itShould="render a Modal closable={true}" tags={['C_API']}>
        <ShowClosableModal />
      </TestCase>
      <TestCase itShould="render a Modal animationType={'slide'}" tags={['C_API']}>
        <ShowAnimationTypeModal />
      </TestCase>
      <TestCase itShould="render a Modal footer" tags={['C_API']}>
        <ShowFooterModal />
      </TestCase>
      <TestCase itShould="render a Modal onClose()" tags={['C_API']}>
        <ShowOncloseModal />
      </TestCase>
      <TestCase itShould="render a Modal title='Modal对话框'" tags={['C_API']}>
        <ShowTitleModal />
      </TestCase>
      <TestCase itShould="render a Modal alert" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.alert('Title', 'alert content', [
              { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
              { text: 'OK', onPress: () => console.log('ok') },
            ],
            );
            setState(true);
          }}>{'ModalAlert'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt Defalut" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Name',
              'name message',
              (password: any) => console.log(`password: ${password}`),
              'default',
              '',
              ['please input name'],
            );
            setState(true);
          }}>{'ModalPrompt(default)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Opertation" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.operation([
              { text: '标为未读', onPress: () => Toast.info('标为未读被点击了') },
              { text: '置顶聊天', onPress: () => Toast.info('置顶聊天被点击了') },
            ],
            );
            setState(true);
          }}>{'Modalopertation'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt login password" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Login',
              'Pleas input login information',
              (login: any, password: any) =>
                console.log(`login: ${login}, password: ${password}`),
              'login-password',
              '',
              ['Please input name', 'Please input password'],
            );
            setState(true);
          }}>{'ModalPrompt(login-password)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt 密码带默认值" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Input password',
              'password message',
              (password: any) => console.log(`password: ${password}`),
              'secure-text',
              'defaultValue',
            );
            setState(true);
          }}>{'ModalPrompt(secure-text)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
    </TestSuite>
  );
};

function ShowModal() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
      <Modal
        title="Title"
        visible={visible}
        closable={true}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowPopupModal() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
      <Modal
        title="Title"
        visible={visible}
        popup={true}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowTransparentModal() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
      <Modal
        title="Title"
        visible={visible}
        transparent={true}
        popup={true}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowClosableModal() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
      <Modal
        title="Title"
        visible={visible}
        popup={true}
        transparent={true}
        closable={true}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowAnimationTypeModal() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
      <Modal
        title="Title"
        visible={visible}
        popup={true}
        transparent={true}
        closable={true}
        animationType={'slide'}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowFooterModal() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const footerButtons = [
    { text: 'Cancel', onPress: () => setVisible(false) },
    { text: 'Ok', onPress: () => setVisible(false) },
  ]
  return (
    <View>
      <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
      <Modal
        title="Title"
        visible={visible}
        popup={true}
        transparent={true}
        closable={true}
        animationType={'slide'}
        footer={footerButtons}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowOncloseModal() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const footerButtons = [
    { text: 'Cancel', onPress: () => setVisible(false) },
    { text: 'Ok', onPress: () => setVisible(false) },
  ]
  return (
    <View>
      <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
      <Modal
        title="Title"
        visible={visible}
        popup={true}
        transparent={true}
        closable={true}
        animationType={'slide'}
        onClose={()=>{setVisible(false)}}
        footer={footerButtons}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowTitleModal() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const footerButtons = [
    { text: 'Cancel', onPress: () => setVisible(false) },
    { text: 'Ok', onPress: () => setVisible(false) },
  ]
  return (
    <View>
      <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
      <Modal
        title="Modal对话框"
        visible={visible}
        popup={true}
        transparent={true}
        closable={true}
        animationType={'slide'}
        onClose={()=>{setVisible(false)}}
        footer={footerButtons}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}











