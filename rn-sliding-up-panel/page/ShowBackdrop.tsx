import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable'

export function ShowBackdrop() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  const [showBackdropState, setShowBackdropState] = useState(false);
  const textCont = `
    draggableRange=${JSON.stringify(draggableRange)}
    snappingPoints=[300]
    showBackdrop=${showBackdropState}`

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>{textCont}</Text>
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
        setShowBackdropState(false);
        panelRef.current!.show();
      }} />
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => {
        setShowBackdropState(true);
        panelRef.current!.show();
      }} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
      draggableRange={draggableRange}
      snappingPoints={[300]}
      showBackdrop={showBackdropState}
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