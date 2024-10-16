import React from 'react';
import {View, Button, Text, Dimensions, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DraxProvider, DraxView} from 'react-native-drax';
const DraxViewBaseTestMonitor = props => {
  return (
    <DraxProvider>
      <GestureHandlerRootView>
        <View style={{...styles.container, ...props.style}}>
          <DraxView
            onMonitorDragStart={props.onMonitorDragStart}
            onMonitorDragDrop={props.onMonitorDragDrop}>
            {/* 拖拽方 */}
            <DraxView
              style={styles.draggable}
              payload={props.payload}
              onDragStart={props.onDragStart}
              onDrag={props.onDrag}
            />
            {/* 接收方 */}
            <DraxView
              style={styles.receiver}
              onReceiveDragDrop={props.onReceiveDragDrop}
            />
          </DraxView>
        </View>
      </GestureHandlerRootView>
    </DraxProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
  },
  otherdraggable: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  draggable: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  receiver: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});
export default DraxViewBaseTestMonitor;
