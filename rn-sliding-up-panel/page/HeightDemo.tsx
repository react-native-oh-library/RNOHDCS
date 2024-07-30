import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height, _draggedValue } from '../components/Variable'

export function HeightDemo() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  const [heightState, setHeightState] = useState(height);
  const textCont = `
    animatedValue=${JSON.stringify(_draggedValue)}
    draggableRange=${JSON.stringify(draggableRange)}
    snappingPoints={[300]}
    minimumVelocityThreshold={0.5}
    minimumDistanceThreshold={1.5}
    height=${heightState}`

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>{textCont}</Text>
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
        setHeightState(height);
        panelRef.current!.show();
      }} />
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
        setHeightState(height / 2);
        panelRef.current!.show();
      }} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
      animatedValue={_draggedValue}
      draggableRange={draggableRange}
      snappingPoints={[300]}
      minimumVelocityThreshold={0.5}
      minimumDistanceThreshold={1.5}
      height={heightState}
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