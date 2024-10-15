import React, {  useState ,useCallback} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { LineGraph } from 'react-native-graph'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface GraphPoint {
    value: number
    date: Date
  }

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
      const [isColor, setIsColor] = useState(false)
      const DEFAULT_COLOR='#dd4400'
      const SET_COLOR="#aa22ff"
      const refreshData = useCallback(() => {
        setPoints(generateRandomGraphData(POINT_COUNT))
      }, [])
      
    return (
        <View style={{ flex: 1 }}>
    {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
        <Text>{`color value is ${isColor?SET_COLOR:DEFAULT_COLOR}`}</Text>
        <LineGraph 
        style={styles.graph}
        animated={isAnimated}
        color={isColor?SET_COLOR:DEFAULT_COLOR}
        points={points}
        />
        <Button title='refreshData' onPress={refreshData} />
        <Button title='change color' onPress={()=>setIsColor(!isColor)} />
     {/* </GestureHandlerRootView> */}
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