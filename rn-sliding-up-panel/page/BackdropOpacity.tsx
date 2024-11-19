import React, { createRef, useState } from 'react';
import { Text, View, Button, Animated } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable'

export function BackdropOpacity() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };
  const [backdropOpacityNum, setBackdropOpacityNum] = useState(0.2);

  const textCont = `
    draggableRange=${JSON.stringify(draggableRange)}
    snappingPoints=[300]
    minimumVelocityThreshold=0.5
    minimumDistanceThreshold=1.5
    backdropOpacity=${backdropOpacityNum}`

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>{textCont}</Text>
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
        setBackdropOpacityNum(0.2);
        panelRef.current!.show();
      }} />
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
        setBackdropOpacityNum(0.9);
        panelRef.current!.show();
      }} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
      draggableRange={draggableRange}
      snappingPoints={[300]}
      minimumVelocityThreshold={0.5}
      minimumDistanceThreshold={1.5}
      backdropOpacity={backdropOpacityNum}
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