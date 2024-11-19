import React, { createRef, useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable';

export function AvoidKeyboard() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };
  const [avoidKeyboardFlag, setAvoidKeyboardFlag] = useState(false)

  const textCont = `
  draggableRange=${JSON.stringify(draggableRange)}
  snappingPoints=[300]
  avoidKeyboard=${avoidKeyboardFlag}`

  return (
    <View style={styles.container}>
      <View style={styles.viewbox}>
        <Text>{textCont}</Text>
      </View>
      <View style={styles.viewbox}>
        <TextInput style={{ width: 280, height: 30, backgroundColor: '#eee' }} />
      </View>
      <View style={styles.viewbox}>
        <Button title='Show panel btn avoidKeyboard=false' onPress={() => {
          setAvoidKeyboardFlag(false)
          panelRef.current!.show();
        }} />
      </View>
      <View style={styles.viewbox}>
        <Button title='Show panel btn avoidKeyboard=true' onPress={() => {
          setAvoidKeyboardFlag(true)
          panelRef.current!.show();
        }} />
      </View>

      <SlidingUpPanel
        ref={panelRef}
        draggableRange={draggableRange}
        snappingPoints={[300]}
        avoidKeyboard={avoidKeyboardFlag}
      >
        <View style={styles.panel}>
          <PanelView onPress={() => panelRef.current!.hide()} >
            <View style={styles.viewbox}>
              <Text>{textCont}</Text>
            </View>
          </PanelView>
        </View>
      </SlidingUpPanel>
    </View>
  )
}