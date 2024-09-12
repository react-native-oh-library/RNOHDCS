import React, {  useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { LineGraph } from 'react-native-graph'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface GraphPoint {
    value: number
    date: Date
  }
interface GraphXRange {
    min: Date;
    max: Date;
}
interface GraphYRange {
    min: number;
    max: number;
}
interface GraphPathRange {
    x: GraphXRange;
    y: GraphYRange;
}
type GraphRange = Partial<GraphPathRange>;
type Color = string | Float32Array | number | number[];

export default function() {
    const generateRandomGraphData=(length: number): GraphPoint[]=>{
        return Array<number>(length)
          .fill(0)
          .map((_, index) => ({
            date: new Date(
              new Date(2000, 0, 1).getTime() + 1000 * 60 * 60 * 24 * index
            ),
            value: Math.random()*10,
          }))
      }
    const POINT_COUNT=50
      const POINTS = generateRandomGraphData(POINT_COUNT)
      const [points, setPoints] = useState(POINTS)
      const [isAnimated, setIsAnimated] = useState(true)
      const [enablePanGesture, setEnablePanGesture] = useState(false)

      const color='#dd4400'
  
      
    return (
        <View style={{ flex: 1 }}>
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Text>{`enablePanGesture value is ${enablePanGesture}`}</Text>
        <LineGraph 
        style={styles.graph}
        animated={isAnimated}
        color={color}
        points={points}
        enablePanGesture={enablePanGesture}
        />
        <Button title='change enablePanGesture' onPress={()=>setEnablePanGesture(!enablePanGesture)} />
     </GestureHandlerRootView>
    </View>
    )

}

const styles = StyleSheet.create({

    graph: {
        alignSelf: 'center',
        width: '100%',
        aspectRatio: 1.4,
        marginVertical: 20,
      },
})