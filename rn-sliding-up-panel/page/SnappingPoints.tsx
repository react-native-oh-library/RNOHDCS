import React, { createRef } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable'

export function SnappingPoints() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>
        {`draggableRange=${JSON.stringify(draggableRange)}
        snappingPoints=[300, 500, 700]`}
      </Text>
      <Button title='Show panel btn' onPress={() => panelRef.current!.show()} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
      draggableRange={draggableRange}
      snappingPoints={[300, 500, 700]}
    >
      <View style={styles.panel}>
        <PanelView onPress={() => panelRef.current!.hide()} />
      </View>
    </SlidingUpPanel>
  </View>)
}