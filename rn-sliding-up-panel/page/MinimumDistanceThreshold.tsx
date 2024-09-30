import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height, _draggedValue } from '../components/Variable'

export function MinimumDistanceThreshold() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  const [distanceThreshold, setDistanceThreshold] = useState(5);
  const textCont = `
    animatedValue=${JSON.stringify(_draggedValue)}
    draggableRange=${JSON.stringify(draggableRange)}
    minimumVelocityThreshold=1
    minimumDistanceThreshold=${distanceThreshold}`

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>{textCont}</Text>
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
        setDistanceThreshold(5);
        panelRef.current!.show();
      }} />
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
        setDistanceThreshold(50);
        panelRef.current!.show();
      }} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
      animatedValue={_draggedValue}
      draggableRange={draggableRange}
      minimumVelocityThreshold={1}
      minimumDistanceThreshold={distanceThreshold}
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