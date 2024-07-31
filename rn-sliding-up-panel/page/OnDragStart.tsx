import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height, _draggedValue } from '../components/Variable';

export function OnDragStart() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  const [eventBackText, setEventBackText] = useState({
    onBackButtonPress: 'onBackButtonPress',
    onDragStart: 'onDragStart',
    onDragEnd: 'onDragEnd',
    onMomentumDragStart: 'onMomentumDragStart',
    onMomentumDragEnd: 'onMomentumDragEnd',
    onBottomReached: 'onBottomReached',
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewbox}>
        <Text>
          {`animatedValue=${JSON.stringify(_draggedValue)}
        draggableRange=${JSON.stringify(draggableRange)}
        snappingPoints=[300]`}
        </Text>
        <Text>{eventBackText.onDragStart}</Text>
        <Button
          title="Show panel btn"
          onPress={() => panelRef.current!.show()}
        />
      </View>

      <SlidingUpPanel
        ref={panelRef}
        animatedValue={_draggedValue}
        draggableRange={draggableRange}
        snappingPoints={[300]}
        onDragStart={() => {
          setEventBackText({ ...eventBackText, onDragStart: 'dragStart change text' });
        }}>
        <View style={styles.panel}>
          <PanelView onPress={() => panelRef.current!.hide()} />
        </View>
      </SlidingUpPanel>
    </View>
  );
}
