import React from 'react';
import {View, Button, Text, Dimensions, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DraxProvider, DraxView} from 'react-native-drax';
const DraxViewComponents = props => {
  return (
    <DraxProvider>
      <GestureHandlerRootView>
        <View style={{...styles.container, ...props.style}}>
        <DraxView
            style={styles.draggable}
            payload="world"
            onDragExit={props.onDragExit}
            onDragEnter={props.onDragEnter}
            onDragEnd={props.onDragEnd}
            onDragOver={props.onDragOver}
            onDragDrop={props.onDragDrop}
            onSnapbackEnd={props.onSnapbackEnd}
          />
          <DraxView
            style={styles.receiver}
            onReceiveDragEnter={({ dragged: { payload } }) => {
              console.log(`hello ${payload}`);
            }}
            onReceiveDragExit={({ dragged: { payload } }) => {
              console.log(`goodbye ${payload}`);
            }}
            onReceiveDragDrop={({ dragged: { payload } }) => {
              console.log(`received ${payload}`);
            }}

            onMonitorDragStart={() => {
              console.log('-----------------------')
            }}
            onMonitorDragEnter={props.onMonitorDragEnter}
          />
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
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginTop: 100,
    marginLeft: 100
  },
});
export default DraxViewComponents;
