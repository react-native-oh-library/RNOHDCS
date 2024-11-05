import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height, _draggedValue } from '../components/Variable'

export function Friction() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  const [frictionState, setFrictionState] = useState(1.5);
  const textCont = `
    animatedValue=${JSON.stringify(_draggedValue)}
    draggableRange=${JSON.stringify(draggableRange)}
    snappingPoints={[300]}
    minimumVelocityThreshold={0.5}
    minimumDistanceThreshold={1.5}
    friction=${frictionState}`

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>{textCont}</Text>
    </View>
    <View style={styles.viewbox}>
      <Button title='set to 1.5' onPress={() => {
        setFrictionState(1.5);
      }} />
    </View>
    <View style={styles.viewbox}>
      <Button title='set to 0.5' onPress={() => {
        setFrictionState(0.5);
      }} />
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
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
      friction={frictionState}
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