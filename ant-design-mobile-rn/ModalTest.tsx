import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Modal, Toast, Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';


export default () => {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const footerButtons = [
    { text: 'Cancel', onPress: () => setVisible(false) },
    { text: 'Ok', onPress: () => setVisible(false) },
  ]
  return (
    <TestSuite name="ModalTest">
      <TestCase itShould="render a Modal visible" tags={['C_API']}>
        <ShowModal />
      </TestCase>
      <TestCase itShould="render a Modal popup={true}" tags={['C_API']}>
        <ShowPopupModal />
      </TestCase>
      <TestCase itShould="render a Modal popup={false}" tags={['C_API']}>
        <ShowPopupFalseModal />
      </TestCase>
      <TestCase itShould="render a Modal transparent={true}" tags={['C_API']}>
        <ShowTransparentModal />
      </TestCase>
      <TestCase itShould="render a Modal transparent={false}" tags={['C_API']}>
        <ShowTransparentFalseModal />
      </TestCase>
      <TestCase itShould="render a Modal closable={true}" tags={['C_API']}>
        <ShowClosableModal />
      </TestCase>
      <TestCase itShould="render a Modal closable={false}" tags={['C_API']}>
        <ShowClosableFalseModal />
      </TestCase>
      <TestCase itShould="render a Modal animationType={'slide'}" tags={['C_API']}>
        <ShowAnimationTypeModal />
      </TestCase>
      <TestCase itShould="render a Modal animationType={'fade'}" tags={['C_API']}>
        <ShowAnimationTypeFadeModal />
      </TestCase>
      <TestCase itShould="render a Modal footer=['OK','Cancel']" tags={['C_API']}>
        <ShowFooterModal />
      </TestCase>
      <TestCase itShould="render a Modal onClose()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <Button onPress={() => setVisible(true)}>{'showModal'}</Button>
            <Modal
              title="Title"
              visible={visible}
              popup={true}
              transparent={true}
              closable={true}
              animationType={'slide'}
              onClose={() => { setVisible(false); setState(true); }}
              footer={footerButtons}
            >
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Button onPress={onClose}>{'closeModal'}</Button>
            </Modal>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal title='Modal对话框'" tags={['C_API']}>
        <ShowTitleModal />
      </TestCase>
      <TestCase itShould="render a Modal  maskClosable={false}" tags={['C_API']}>
        <ShowMaskClosableModal />
      </TestCase>
      <TestCase itShould="render a Modal  maskClosable={true}" tags={['C_API']}>
        <ShowMaskClosableTrueModal />
      </TestCase>
      <TestCase itShould="render a Modal alert title = Title, content = alert content" tags={['C_API']}>
        <Button onPress={() => { Modal.alert('Title', 'alert content') }}>{'ModalAlert'}</Button>
      </TestCase>
      <TestCase itShould="render a Modal alert alert title = Title, content = alert content, actions=[OK,Cancel]" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.alert('Title', 'alert content', [
              { text: 'Cancel', onPress: () => { }, style: 'cancel' },
              { text: 'OK', onPress: () => { } },
            ],
            );
            setState(true);
          }}>{'ModalAlert'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal alert title = Title, content = alert content, actions=[OK,Cancel], onBackHandler=true" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.alert('Title', 'alert content', [
              { text: 'Cancel', onPress: () => { }, style: 'cancel' },
              { text: 'OK', onPress: () => { } },
            ],
              () => { return true }
            );
            setState(true);
          }}>{'ModalAlert'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal alert alert title = Title, content = alert content, actions=[OK,Cancel], onBackHandler=false" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.alert('Title', 'alert content', [
              { text: 'Cancel', onPress: () => { }, style: 'cancel' },
              { text: 'OK', onPress: () => { } },
            ],
              () => { return false }
            );
            setState(true);
          }}>{'ModalAlert'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Opertation=['标为未读','置顶聊天'], onBackHandler=true" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.operation([
              { text: '标为未读', onPress: () => { } },
              { text: '置顶聊天', onPress: () => { } },
            ],
              () => {
                return true;
              }
            );
            setState(true);
          }}>{'Modalopertation'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Opertation=['标为未读','置顶聊天'], onBackHandler=false" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.operation([
              { text: '标为未读', onPress: () => { } },
              { text: '置顶聊天', onPress: () => { } },
            ],
              () => {
                return false;
              }
            );
            setState(true);
          }}>{'Modalopertation'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt title=Name, message=name message" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Name',
              'name message',
              (password: any) => { });
            setState(true);
          }}>{'ModalPrompt(default)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt type=default" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Name',
              'name message',
              (password: any) => { },
              'default'
            );
            setState(true);
          }}>{'ModalPrompt(default)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt type=login-password" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Name',
              'name message',
              (password: any) => { },
              'login-password',
            );
            setState(true);
          }}>{'ModalPrompt(login-password)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt type=secure-text" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Name',
              'name message',
              (password: any) => { },
              'secure-text',
            );
            setState(true);
          }}>{'ModalPrompt(secure-text)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt type=default callbackOrActions=[Ok,Cancel]" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Name',
              'name message',
              [
                { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                { text: 'OK', onPress: () => { } },
              ],
              'default'
            );
            setState(true);
          }}>{'ModalPrompt(default)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt type=default callbackOrActions=[Ok,Cancel]," tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Name',
              'name message',
              [
                { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                { text: 'OK', onPress: () => { } },
              ],
              'default',
              'android',
              // () => { return true }
            );
            setState(true);
          }}>{'ModalPrompt(default)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt type=secure-text, defaultValue='wwwwww'" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Input password',
              'password message',
              (password: any) => { },
              'secure-text',
              'wwwwww',
            );
            setState(true);
          }}>{'ModalPrompt(secure-text)'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Modal Prompt type=login-password, placeholders=['Please input name', 'Please input password']" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Modal.prompt(
              'Login',
              'Pleas input login information',
              (login: any, password: any) => { },
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
    </TestSuite >
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

function ShowPopupFalseModal() {
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
        popup={false}
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

function ShowTransparentFalseModal() {
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
        transparent={false}
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

function ShowClosableFalseModal() {
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
        closable={false}
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

function ShowAnimationTypeFadeModal() {
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
        animationType='fade'
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
        onClose={() => { setVisible(false) }}
        footer={footerButtons}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowMaskClosableModal() {
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
        title="Modal"
        visible={visible}
        popup={true}
        transparent={true}
        closable={true}
        maskClosable={false}
        onClose={() => { setVisible(false) }}
        footer={footerButtons}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}

function ShowMaskClosableTrueModal() {
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
        title="Modal"
        visible={visible}
        popup={true}
        transparent={true}
        closable={true}
        maskClosable={true}
        onClose={() => { setVisible(false) }}
        footer={footerButtons}
      >
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Text style={{ textAlign: 'center' }}>Content...</Text>
        <Button onPress={onClose}>{'closeModal'}</Button>
      </Modal>
    </View>
  )
}










