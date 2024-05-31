import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ToolbarAndroid from '@react-native-community/toolbar-android';

function App({ }): JSX.Element {
  const [state, setState] = useState<{
    message?: string
  }>({
    message: undefined
  })

  const { message } = state

  return (
    <View style={styles.container}>
      <ToolbarAndroid
        navIcon={require('../assets/ic_menu_black_24dp.png')}
        logo={require('../assets/icon_app.png')}
        title={"ToolbarAndroid Example"}
        subtitle={'ToolbarAndroid Subtitle'}
        titleColor={'#FFFFFF'}
        subtitleColor={'#FF00FF'}
        contentInsetStart={10}
        contentInsetEnd={10}
        rtl={true}
        style={styles.toolbar}
        actions={[
          { title: 'Action1', icon: require('../assets/icon_phone.png'), show: 'ifRoom2', showWithText: true },
          { title: 'Action2', icon: require('../assets/icon_copy.png'), show: 'ifRoom2', showWithText: true }
        ]}
        overflowIcon={require('../assets/relay.png')}
        onIconClicked={() => setState({ message: 'Clicked nav icon' })}
        onActionSelected={(position: number) => setState({ message: `Clicked Menu-${position}` })} />
      <View style={styles.centerContainer}>
        <Text style={styles.headText}>
          Click nav or action icon will trigger some events!
        </Text>
        <Text style={styles.contentText}>
          {message}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headText: {
    fontSize: 16
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff681f'
  }
});

export default App;