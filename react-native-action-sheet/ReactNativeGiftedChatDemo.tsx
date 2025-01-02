import { ActionSheetProvider, connectActionSheet, ActionSheetProps } from '@expo/react-native-action-sheet';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button, StatusBar } from 'react-native';
import ShowActionSheetButton from './ShowActionSheetButton';

import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

type Props = ActionSheetProps & {
  useCustomActionSheet: boolean;
  setUseCustomActionSheet: (next: boolean) => void;
};

interface State {
  selectedIndex?: number | null;
  isModalOpen: boolean;
}

class App extends React.Component<Props, State> {
  state: State = {
    selectedIndex: null,
    isModalOpen: false,
  };

  _updateSelectionText = (selectedIndex?: number) => {
    this.setState({
      selectedIndex,
    });
  };

  _renderSelectionText = () => {
    const { selectedIndex } = this.state;
    const text =
      selectedIndex === null || selectedIndex === undefined
        ? 'No Option Selected'
        : `Option #${selectedIndex + 1} Selected`;
    return <Text style={styles.selectionText}>{text}</Text>;
  };

  _renderSectionHeader = (text: string) => {
    return <Text style={styles.sectionHeaderText}>{text}</Text>;
  };

  async _onShare() {
  }

  _renderButtons() {
    const { showActionSheetWithOptions } = this.props;
    return (
        <Tester style={{ flex: 1 }}>
          <ScrollView>

            <TestSuite name='options' key={'options'}>
              <TestCase itShould="options可以设置按钮列表，比如设置Delete、Disabled、Save、Cancel这4个按钮" tags={['C_API']}>
                <ShowActionSheetButton
                  title="options"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='cancelButtonIndex' key={'cancelButtonIndex'}>
              <TestCase itShould="cancelButtonIndex是选项中的取消按钮索引,比如将第4个按钮设置成取消按钮，并更改成红色" tags={['C_API']}>
                <ShowActionSheetButton
                  title="cancelButtonIndex"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        cancelButtonTintColor: '#D93F0B'
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='cancelButtonTintColor' key={'cancelButtonTintColor'}>
              <TestCase itShould="cancelButtonTintColor可以改变取消按钮文本颜色，比如将取消按钮改成蓝色" tags={['C_API']}>
                <ShowActionSheetButton
                  title="Cancel Button Tint Color"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        cancelButtonTintColor: 'blue'
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='destructiveButtonIndex' key={'destructiveButtonIndex'}>
              <TestCase itShould="destructiveButtonIndex是选项中的删除按钮索引，设置之后目标按钮会变成红色，比如将索引设置为第一个按钮或者第二个按钮" tags={['C_API']}>
                <ShowActionSheetButton
                  title="destructiveButtonIndex1"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        destructiveButtonIndex: 0,
                        cancelButtonTintColor: 'blue'
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
                <ShowActionSheetButton
                  title="destructiveButtonIndex2"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        destructiveButtonIndex: 1,
                        cancelButtonTintColor: 'blue'
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='title' key={'title'}>
              <TestCase itShould="title是按钮列表上方的标题，比如设置成'标题11'" tags={['C_API']}>
                <ShowActionSheetButton
                  title="title"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='message' key={'message'}>
              <TestCase itShould="message是标题下方显示的消息，比如设置成'这是标题下面的信息文字呀'" tags={['C_API']}>
                <ShowActionSheetButton
                  title="message"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='tintColor' key={'tintColor'}>
              <TestCase itShould="tintColor用于按钮的颜色，比如设置成蓝色'blue'" tags={['C_API']}>
                <ShowActionSheetButton
                  title="tintColor"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        tintColor: 'blue'
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='disabledButtonIndices' key={'disabledButtonIndices'}>
              <TestCase itShould="disabledButtonIndices是选项中禁用按钮的索引，比如禁用最后一个按钮" tags={['C_API']}>
                <ShowActionSheetButton
                  title="disabledButtonIndices"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        disabledButtonIndices: [3],
                        tintColor: 'blue'
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='textStyle' key={'textStyle'}>
              <TestCase itShould="textStyle是按钮文本样式" tags={['C_API']}>
                <ShowActionSheetButton
                  title="textStyle"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        textStyle: {
                          fontSize: 20,
                          fontWeight: '500',
                          color: 'blue',
                        }
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='titleTextStyle' key={'titleTextStyle'}>
              <TestCase itShould="titleTextStyle是标题文本样式" tags={['C_API']}>
                <ShowActionSheetButton
                  title="titleTextStyle"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        textStyle: {
                          fontSize: 20,
                          fontWeight: '500',
                          color: 'blue',
                        },
                        titleTextStyle: {
                          fontSize: 24,
                          textAlign: 'center',
                          fontWeight: '700',
                          color: 'orange',
                        }
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='messageTextStyle' key={'messageTextStyle'}>
              <TestCase itShould="messageTextStyle是信息文本样式" tags={['C_API']}>
                <ShowActionSheetButton
                  title="messageTextStyle"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        textStyle: {
                          fontSize: 20,
                          fontWeight: '500',
                          color: 'blue',
                        },
                        autoFocus: false,
                        titleTextStyle: {
                          fontSize: 24,
                          textAlign: 'center',
                          fontWeight: '700',
                          color: 'orange',
                        },
                        messageTextStyle: {
                          fontSize: 12,
                          color: 'purple',
                          textAlign: 'right',
                        }
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='showSeparators' key={'showSeparators'}>
              <TestCase itShould="showSeparators" tags={['C_API']}>
                <ShowActionSheetButton
                  title="showSeparators"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        showSeparators: true,
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        separatorStyle: {
                          backgroundColor: 'black',
                        }
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='separatorStyle' key={'separatorStyle'}>
              <TestCase itShould="separatorStyle自定义分隔符样式，比如设置成蓝色" tags={['C_API']}>
                <ShowActionSheetButton
                  title="separatorStyle"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        showSeparators: true,
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        separatorStyle: {
                          backgroundColor: 'blue',
                        }
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='containerStyle' key={'containerStyle'}>
              <TestCase itShould="containerStyle按钮列表下面的容器，比如将容器背景改为黄色" tags={['C_API']}>
                <ShowActionSheetButton
                  title="containerStyle"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        containerStyle: {
                          backgroundColor: 'yellow',
                        }
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='destructiveColor' key={'destructiveColor'}>
              <TestCase itShould="destructiveColor是修改删除选项的文本颜色,比如设置第一个按钮为红色，或是第二个按钮" tags={['C_API']}>
                <ShowActionSheetButton
                  title="destructiveColor"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        destructiveButtonIndex: 0,
                        destructiveColor: 'red'
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
                <ShowActionSheetButton
                  title="destructiveColor"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        cancelButtonIndex: 3,
                        destructiveButtonIndex: 1,
                        destructiveColor: 'red',
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      }
                    )
                  }
                />
              </TestCase>
            </TestSuite>

            <TestSuite name='autoFocus' key={'autoFocus'}>
              <TestCase itShould="屏幕阅读聚焦，先在手机辅助功能中打开屏幕朗读，然后再返回页面点击按钮之后，设置为false不会自动聚焦，设置为true会自动聚焦，这要配合useModal使用" tags={['C_API']}>
                <ShowActionSheetButton
                  title="autoFocus=false"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        destructiveButtonIndex: 1,
                        autoFocus: false,
                        useModal: false
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      },
                    )
                  }
                />
                <ShowActionSheetButton
                  title="autoFocus=true"
                  showActionSheetWithOptions={() =>
                    showActionSheetWithOptions(
                      {
                        title: '标题11',
                        message: '这是标题下面的信息文字呀',
                        options: ['Delete', 'Disadled', 'Save', 'Cancel'],
                        destructiveButtonIndex: 1,
                        autoFocus: true,
                        useModal: true
                      },
                      (i) => {
                        i === 0 && this._onShare();
                      },
                    )
                  }
                />
              </TestCase>
            </TestSuite>
          </ScrollView>
        </Tester>
    );
  }

  render() {
    return (
      <ScrollView style={styles.flex} contentContainerStyle={styles.contentContainer}>
        {this._renderButtons()}
        {this._renderSelectionText()}
      </ScrollView>
    );
  }
}

const ConnectedApp = connectActionSheet<any>(App);

export default function ReactNativeGiftedChat() {
  const [useCustomActionSheet, setUseCustomActionSheet] = useState(false);

  return (
    <ActionSheetProvider useCustomActionSheet={useCustomActionSheet}>
      <ConnectedApp
        useCustomActionSheet={useCustomActionSheet}
        setUseCustomActionSheet={setUseCustomActionSheet}
      />
    </ActionSheetProvider>
  );
}


export {
  ReactNativeGiftedChat
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingVertical: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  notes: {
    marginTop: 32,
  },
  sectionHeaderText: {
    color: 'orange',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  selectionText: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 16,
    marginTop: 20,
  },
});