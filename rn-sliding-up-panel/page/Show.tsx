import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height, _draggedValue } from '../components/Variable';

export function Show() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  return (
    <View style={styles.container}>
      <View style={styles.viewbox}>
        <Button title='show()' onPress={() => {
          panelRef.current!.show();
        }} />
      </View>

      <SlidingUpPanel
        ref={panelRef}
        animatedValue={_draggedValue}
        draggableRange={draggableRange}
        snappingPoints={[300]}
        allowDragging={true}
      >
        <View style={styles.panel}>
          <PanelView onPress={() => panelRef.current!.hide()}></PanelView>
        </View>
      </SlidingUpPanel>
    </View>
  )
}