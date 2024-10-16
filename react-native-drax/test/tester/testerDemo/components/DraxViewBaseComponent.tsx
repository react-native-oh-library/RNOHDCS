import React from 'react';
import {View, Button, Text, Dimensions, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DraxProvider, DraxView} from 'react-native-drax';
const DraxViewBaseComponent = props => {
  return (
    <DraxProvider>
      <GestureHandlerRootView>
        <View style={{...styles.container, ...props.style}}>
          <DraxView
            onDragStart={props.onDragStart}
            onDrag={props.onDrag}
            onDragEnter={props.onDragEnter}
            onDragOver={props.onDragOver}
            onDragExit={props.onDragExit}
            onDragEnd={props.onDragEnd}
            onDragDrop={props.onDragDrop}
            onSnapbackEnd={props.onSnapbackEnd}
            style={styles.draggable}
            payload={props.payload}
            dragPayload={props.dragPayload}
            animateSnapback={props.animateSnapback}
            snapbackDelay={props.snapbackDelay}
            snapbackDuration={props.snapbackDuration}
            dragInactiveStyle={props.dragInactiveStyle}
            draggingStyle={props.draggingStyle}
            draggingWithReceiverStyle={props.draggingWithReceiverStyle}
            draggingWithoutReceiverStyle={props.draggingWithoutReceiverStyle}
            dragReleasedStyle={props.dragReleasedStyle}
            hoverStyle={props.hoverStyle}
            hoverDraggingStyle={props.hoverDraggingStyle}
            hoverDragReleasedStyle={props.hoverDragReleasedStyle}
            hoverDraggingWithReceiverStyle={
              props.hoverDraggingWithReceiverStyle
            }
            hoverDraggingWithoutReceiverStyle={
              props.hoverDraggingWithoutReceiverStyle
            }
            renderContent={props.renderContent}
            renderHoverContent={props.renderHoverContent}
            registration={props.registration}
            onMeasure={props.onMeasure}
            lockDragXPosition={props.lockDragXPosition}
            lockDragYPosition={props.lockDragYPosition}
            children={props.children}
            noHover={props.noHover}
            longPressDelay={props.longPressDelay}
            draggable={props.draggable}
          />
          <DraxView
            style={styles.receiver}
            onReceiveDragEnter={props.onReceiveDragEnter}
            onReceiveDragOver={props.onReceiveDragOver}
            onReceiveDragExit={props.onReceiveDragExit}
            onReceiveDragDrop={props.onReceiveDragDrop}
            onMonitorDragEnter={props.onMonitorDragEnter}
            onMonitorDragOver={props.onMonitorDragOver}
            onMonitorDragExit={props.onMonitorDragExit}
            onMonitorDragEnd={props.onMonitorDragEnd}
            receiverPayload={props.receiverPayload}
            receiverInactiveStyle={props.receiverInactiveStyle}
            receivingStyle={props.receivingStyle}
          />
          {/* 是否渲染其他DraxView组件 */}
          {props.otherDraxEmabled && (
            <DraxView
              onDragStart={props.onDragStart}
              onDrag={props.onDrag}
              onDragEnter={props.onDragEnter}
              onDragOver={props.onDragOver}
              onDragExit={props.onDragExit}
              onDragEnd={props.onDragEnd}
              onDragDrop={props.onDragDrop}
              onSnapbackEnd={props.onSnapbackEnd}
              style={styles.otherdraggable}
              payload={props.payload}
              otherDraggingStyle={props.otherDraggingStyle}
              otherDraggingWithReceiverStyle={
                props.otherDraggingWithReceiverStyle
              }
              otherDraggingWithReceiverStyle={
                props.otherDraggingWithReceiverStyle
              }
              otherDraggingWithoutReceiverStyle={
                props.otherDraggingWithoutReceiverStyle
              }
              //不生效
              onMonitorDragStart={props.onMonitorDragStart}
              onMonitorDragDrop={props.onMonitorDragDrop}
            />
          )}
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
export default DraxViewBaseComponent;
