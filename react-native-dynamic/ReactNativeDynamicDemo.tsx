import React, {useCallback, useEffect, useState, Component} from 'react';
import {
    ScrollView,
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    Image, 
    Button
} from 'react-native';
import {
    useDarkMode,
	useDarkModeContext,
	DynamicValue,
	DynamicStyleSheet,
	DarkModeProvider,
	useDynamicValue,
	ColorSchemeProvider,
	useColorSchemeContext 
} from 'react-native-dynamic'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

import Extra from './reactnativedynamic/Extra'

function Counter() {
	const [counter, setCounter] = useState(0)
	return <Button title={counter.toString()} onPress={() => setCounter((i) => i + 1)} />
}

const backgroundColors = {
	light: 'white',
	dark: 'black',
}

function Components() {
	const styles = useDynamicValue(dynamicStyles)

	return (
		<View style={styles.container}>
			<Text style={styles.text}>My text</Text>
		</View>
	)
}

export default function ReactNativeDynamic() {
	const mode = useDarkModeContext()
	const mode2 = useColorSchemeContext()
	const backgroundColor = backgroundColors[mode2]
    const isDarkMode = useDarkMode()
	const styles = useDynamicValue(dynamicStyles)
	const logo = useDynamicValue(require('./reactnativedynamic/logoLight.png'), require('./reactnativedynamic/logoDark.png'))

	return (
		<View style={styles.container}>
			<Tester>
        		<TestSuite name="ShowActionDynamic">
					<TestCase itShould='render mode of dark or light' tags={['C_API']} >
						<DarkModeProvider mode="dark">
							<Extra />
						</DarkModeProvider>
						<DarkModeProvider mode="light">
							<Extra />
						</DarkModeProvider>
					</TestCase>
        		</TestSuite>
      		</Tester>
			<Image source={require('./reactnativedynamic/meme.png')} style={styles.meme} />
			<Image source={logo} style={styles.image} />
			<Text style={styles.initialStyle}>Current mode: {mode}</Text>
			<Text style={styles.initialStyle}>Is dark mode: {isDarkMode ? 'black' : 'white'}</Text>

			<ColorSchemeProvider mode="dark">
				<Components />
			</ColorSchemeProvider>

			<ColorSchemeProvider mode="light">
				<Components />
			</ColorSchemeProvider>

			<Components />
		</View>
	)
}

const dynamicStyles = new DynamicStyleSheet({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: new DynamicValue('#FFFFFF', '#000000'),
	},
	initialStyle: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: new DynamicValue('#000000', '#FFFFFF'),
	},
	image: {
		borderWidth: 1,
		borderColor: new DynamicValue('#000000', '#FFFFFF'),
		width: 80,
		height: 80,
	},
	meme: {
		width: '100%',
		height: 200,
		marginBottom: 20,
	},
	text: {
		color: new DynamicValue('black', 'white'),
		textAlign: 'center',
	},
})