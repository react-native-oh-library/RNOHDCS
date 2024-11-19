import React, { createRef } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView from '../components/Variable';

export function DefaultDemo() {
  const panelRef = createRef<SlidingUpPanel>();

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>
        {`show(460)
        showBackdrop=true
        allowDragging=true
        avoidKeyboard=true`}
      </Text>
      <Button title='Show panel' onPress={() => panelRef.current!.show(460)} />
      <TextInput style={{ width: 300, height: 30, backgroundColor: '#eee' }} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
    >
      <View style={styles.panel}>
        <PanelView onPress={() => panelRef.current!.hide()} />
      </View>
    </SlidingUpPanel>
  </View>)
}