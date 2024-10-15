import React, {  useState ,useCallback} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { LineGraph } from 'react-native-graph'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { SharedValue } from 'react-native-reanimated'
import {
    runOnJS,
    useAnimatedReaction,
    useSharedValue,
    withSpring,
    useDerivedValue,
  } from 'react-native-reanimated'
  import { Circle, Group, Shadow } from '@shopify/react-native-skia'

interface GraphPoint {
    value: number
    date: Date
  }
  interface SelectionDotProps {
    isActive: SharedValue<boolean>
    color: any
    lineThickness: any
    circleX: SharedValue<number>
    circleY: SharedValue<number>
  }

   const CIRCLE_RADIUS = 5
const CIRCLE_RADIUS_MULTIPLIER = 6
function SelectionDot({
    isActive,
    color,
    circleX,
    circleY,
  }: SelectionDotProps): React.ReactElement {
    const circleRadius = useSharedValue(0)
    const circleStrokeRadius = useDerivedValue(
      () => circleRadius.value * CIRCLE_RADIUS_MULTIPLIER,
      [circleRadius]
    )
  
    const setIsActive = useCallback(
      (active: boolean) => {
        circleRadius.value = withSpring(active ? CIRCLE_RADIUS : 0, {
          mass: 1,
          stiffness: 1000,
          damping: 50,
          velocity: 0,
        })
      
      },
      [circleRadius]
    )
  
    useAnimatedReaction(
      () => isActive.value,
      (active) => {
        runOnJS(setIsActive)(active)
       
      },
      [isActive, setIsActive]
    )
  
    return (
      <Group>
        <Circle
          opacity={0.05}
          cx={circleX}
          cy={circleY}
          r={circleStrokeRadius}
          color="#333333"
        />
        <Circle cx={circleX} cy={circleY} r={circleRadius} color='yellow'>
          <Shadow dx={0} dy={0} color="rgba(0,0,0,0.5)" blur={4} />
        </Circle>
      </Group>
    )
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
      const [enablePanGesture, setEnablePanGesture] = useState(true)
      const color='#dd4400'
      const [enableCustomSelectionDot, setEnableCustomSelectionDot] =useState(false)
      
    return (
        <View style={{ flex: 1 }}>
    {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
    <Text>{`CustomSelectionDot color is ${enableCustomSelectionDot?'yellow':'#dd4400'}`}</Text>
        <Text>{`enableCustomSelectionDot value is ${enableCustomSelectionDot}`}</Text>
        <LineGraph 
        style={styles.graph}
        animated={isAnimated}
        color={color}
        points={points}
        enablePanGesture={enablePanGesture}
        SelectionDot={enableCustomSelectionDot ? SelectionDot : undefined}
        />
        <Button title='change enableCustomSelectionDot' onPress={()=>setEnableCustomSelectionDot(!enableCustomSelectionDot)} />
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