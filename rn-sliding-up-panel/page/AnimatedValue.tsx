import React, { createRef, useState } from 'react';
import { Text, TextInput, View, Button, Animated } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView from '../components/Variable'

export function AnimatedValue() {
  const panelRef = createRef<SlidingUpPanel>();
  const [num, setNum] = useState(200);
  const draggedValue = new Animated.Value(num);
  const [animatedFlag, setAnimatedFlag] = useState(draggedValue);


  const textCont = `animatedValue=${num}`

  return (<View style={styles.container}>
    <View style={styles.viewbox}>
      <Text>{textCont}</Text>
    </View>
    <View style={styles.viewbox}>
      <Button title='Show panel btn' onPress={() => panelRef.current!.show()} />
    </View>
    <View style={styles.viewbox}>
      <TextInput
        style={{ width: 280, height: 30, backgroundColor: "#eee" }}
        keyboardType="numeric"
        onChangeText={(text) => setNum(Number(text))} />
    </View>
    <View style={styles.viewbox}>
      <Button title='change animatedValue' onPress={() => {
        const draggedValue = new Animated.Value(num);
        setAnimatedFlag(draggedValue);
      }} />
    </View>

    <SlidingUpPanel
      ref={panelRef}
      animatedValue={animatedFlag}
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