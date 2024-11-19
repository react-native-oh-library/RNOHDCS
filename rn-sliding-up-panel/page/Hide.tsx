import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable';

export function Hide() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  return (
    <View style={styles.container}>
      <View style={styles.viewbox}>
        <Button title='Show()' onPress={() => {
          panelRef.current!.show();
        }} />
      </View>

      <SlidingUpPanel
        ref={panelRef}
        draggableRange={draggableRange}
        snappingPoints={[300]}
        allowDragging={false}
      >
        <View style={{
          ...styles.panel, display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button title='Hide()' onPress={() => {
            panelRef.current!.hide();
          }} />
        </View>
      </SlidingUpPanel>
    </View>
  )
}