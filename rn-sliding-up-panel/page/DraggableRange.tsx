import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable'

export function DraggableRange() {
  const panelRef = createRef<SlidingUpPanel>();
  const initData = { top: height, bottom: 0 };

  const [draggableRange, setDraggableRange] = useState(initData);

  const textCont = `
    draggableRange=${JSON.stringify(draggableRange)}`

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>{textCont}</Text>
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn 0.5' onPress={() => {
        setDraggableRange(initData);
        panelRef.current!.show();
      }} />
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn 0.9' onPress={() => {
        setDraggableRange({ top: height / 2, bottom: 180 });
        panelRef.current!.show();
      }} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
      draggableRange={draggableRange}
    >
      <View style={styles.panel}>
        <PanelView onPress={() => panelRef.current!.hide()} >
          <View style={styles.viewbox}>
            <Text>{textCont}</Text>
          </View>
        </PanelView>
      </View>
    </SlidingUpPanel>
  </View>)
}