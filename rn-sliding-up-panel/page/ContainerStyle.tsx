import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height, _draggedValue } from '../components/Variable'

export function ContainerStyle() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  const [containerStyleState, setContainerStyleState] = useState(0.5);

  const textCont = `
    animatedValue=${JSON.stringify(_draggedValue)}
    draggableRange=${JSON.stringify(draggableRange)}
    snappingPoints=[300]
    minimumVelocityThreshold=0.5
    minimumDistanceThreshold=50
    containerStyle={ opacity: ${containerStyleState} }`

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>{textCont}</Text>
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn 0.5' onPress={() => {
        setContainerStyleState(0.5);
        panelRef.current!.show();
      }} />
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn 0.9' onPress={() => {
        setContainerStyleState(0.9);
        panelRef.current!.show();
      }} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
      animatedValue={_draggedValue}
      draggableRange={draggableRange}
      snappingPoints={[300]}
      minimumVelocityThreshold={0.5}
      minimumDistanceThreshold={50}
      containerStyle={{ opacity: containerStyleState }}
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