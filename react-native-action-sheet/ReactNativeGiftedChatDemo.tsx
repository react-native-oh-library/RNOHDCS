import { ActionSheetProvider, connectActionSheet, ActionSheetProps } from '@expo/react-native-action-sheet';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from 'react-native';
//此处引入原文档中的 https://github.com/expo/react-native-action-sheet/tree/master/example/ShowActionSheetButton.tsx 文件
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

      <Tester>
        <TestSuite name="ShowActionSheet">

        <TestCase itShould='render default actionSheet' tags={['C_API']} >
        <ShowActionSheetButton
          title="default actionSheet"
          withIcons
          onSelection={this._updateSelectionText}
          showActionSheetWithOptions={showActionSheetWithOptions}
        />

        </TestCase>


        <TestCase itShould='render actionSheet with title & message' tags={['C_API']} >
        <ShowActionSheetButton
          title="Title Message"
          withTitle
          withMessage
          withIcons
          onSelection={this._updateSelectionText}
          showActionSheetWithOptions={showActionSheetWithOptions}
        />
        </TestCase>

        <TestCase itShould='render actionSheet with Use Separators' tags={['C_API']} >
        <ShowActionSheetButton
          title="Use Separators"
          withTitle
          withIcons
          withSeparators
          onSelection={this._updateSelectionText}
          showActionSheetWithOptions={showActionSheetWithOptions}
        />
        </TestCase>
        
        <TestCase itShould='render actionSheet with Custom Styles' tags={['C_API']} >
        <ShowActionSheetButton
          title="Custom Styles"
          withTitle
          withMessage
          withIcons
          withCustomStyles
          onSelection={this._updateSelectionText}
          showActionSheetWithOptions={showActionSheetWithOptions}
        />
        </TestCase>
        </TestSuite>
      </Tester>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.flex}>
        <ScrollView style={styles.flex} contentContainerStyle={styles.contentContainer}>
          {this._renderButtons()}
          {this._renderSelectionText()}
        </ScrollView>
      </SafeAreaView>
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