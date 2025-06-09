import { useEffect, useMemo, useRef, useState } from 'react'
import { Animated, StyleSheet, Button, View, Text, Platform } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'


const DDGestureTest3: React.FC = () => {
const [resultText, setResultText] = useState('[result')

const [logs, setLogs] = useState('')
const [mockblockLeft, setMockblockLeft] = useState(50)
const [mockblockTop, setMockblockTop] = useState(50)
const [mockblockLeftShared, setMockblockLeftShared] = useState(50)
const [mockblockTopShared, setMockblockTopShared] = useState(50)
const runOnJS = true
const [showNormal] = useState(false)

const log = (...args: any[]) => {
	setLogs(args.join(' '))
}
const gestures =  useMemo(() => {
	const doubleTap = Gesture.Tap()
		.runOnJS(runOnJS)
		.numberOfTaps(2)
		.onEnd(e => log('double tap', e.numberOfPointers));

	const singleTap = Gesture.Tap()
		.runOnJS(runOnJS)
		.maxDistance(10)
		.onEnd(e => log('single tap', e.numberOfPointers));

	const longPressGesture = Gesture.LongPress()
		.runOnJS(runOnJS)
		.onEnd(e => log('long press'));

	const panGesture = Gesture.Pan()
		.runOnJS(runOnJS)
		.maxPointers(1)
		.onStart(e => log('pan start'))
		.onUpdate(e => {
			log('pan           pan update')
			if (showNormal) {
				setMockblockLeft(e.x)
				setMockblockTop(e.y)
			}
			mockblockLeftShared.value = e.x
			mockblockTopShared.value = e.y
		})
		.onEnd(e => log('pan end'));

	const pinchGesture = Gesture.Pinch()
		.runOnJS(runOnJS)
		.onStart(e => log('pinch start'))
		.onUpdate(e => log('pinch update'))
		.onEnd(e => log('pinch end'));

	const rotationGesture = Gesture.Rotation()
		.runOnJS(runOnJS)
		.onStart(e => log('rotation start'))
		.onUpdate(e => log('rotation update'))
		.onEnd(e => log('rotation end'));

	const tapGestures = [
		doubleTap,
		singleTap,
		longPressGesture,
	]


return Gesture.Race(
			Gesture.Exclusive(
				panGesture,
				Gesture.Race(
					pinchGesture, 
					rotationGesture
				),
			),
			Gesture.Exclusive(
				...tapGestures
			)
		)
}, [])

	return (
	<View style={{marginTop:80}}>
		<Text style={{fontSize:18,fontWeight:500}}>Problem：The current demo reproduces the problem that pinching and rotating gestures are confused</Text>
		<Text style={{fontSize:18,fontWeight:500,marginTop:20}}>Description：Please continuously operate any gesture in the rotation/pinching area in the red wire frame below, and observe whether the log on the screen corresponds to the gesture of the operation.</Text>
		<GestureHandlerRootView>
			<GestureDetector gesture={gestures}>
				<View style={styles.container}>
					<Text style={{fontSize:16,fontWeight:500}}>Logs: {logs}</Text>
					
				</View>
			</GestureDetector>
		</GestureHandlerRootView>
	</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 300,
		borderColor: 'red',
		borderWidth: 1,
		marginTop: 20,
		marginLeft:50,
		position: 'relative'
	},
	mockblock: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
		position: 'absolute'
	},
})

export default DDGestureTest3