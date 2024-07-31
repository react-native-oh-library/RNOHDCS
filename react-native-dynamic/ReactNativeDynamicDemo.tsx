import React, { useState } from 'react';
import {
    View,
    Text, 
    Image, 
    Button,
    ScrollView,
    TextInput
} from 'react-native';
import {
    useDarkMode,
	useDarkModeContext,
	DynamicValue,
	DynamicStyleSheet,
	DarkModeProvider,
	useDynamicValue,
	ColorSchemeProvider,
	useColorSchemeContext,
	useDynamicStyleSheet
} from 'react-native-dynamic'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export default function Extra() {
	const mode = useDarkModeContext()
	const styles = useDynamicStyleSheet(dynamicStyleSheet)
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Forced mode: {mode}</Text>
		</View>
	)
}

const backgroundColors = {
	light: 'white',
	dark: 'black',
}

const dynamicStyleSheet = new DynamicStyleSheet({
	container: {
		borderColor: 'red',
		borderWidth: 1,
		backgroundColor: new DynamicValue('white', 'black'),
		width: 150,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
		color: new DynamicValue('black', 'white'),
	},
})

function Components() {
	const styles = useDynamicValue(dynamicStyles)

	return (
		<View style={styles.containerChild}>
			<Text style={styles.text}>My text</Text>
		</View>
	)
}

export function ReactNativeDynamicDemo() {
	const mode = useDarkModeContext()
	const mode2 = useColorSchemeContext()
    const isDarkMode = useDarkMode()
	const styles = useDynamicValue(dynamicStyles)
    const useBackgroundColor = backgroundColors[mode2]
    const placeholderColor = useDynamicValue('light', 'dark')
	return (
		<View style={styles.container}>
            <ScrollView>
                <Tester>
                    <TestSuite name="useDarkMode" key={'useDarkMode'}>
                        <TestCase itShould='useDarkMode返回布尔值,为true时代表深色模式开启' tags={['C_API']} >
                            <Text  style={styles.inints}>useDarkMode={isDarkMode + ''}   此时主题为:{isDarkMode ? '深色' : '浅色'}</Text>
                        </TestCase>	
                    </TestSuite>

                    <TestSuite name="DynamicValue" key={'DynamicValue'}>
                        <TestCase itShould='DynamicValue第一个参数是浅色方案要使用的值，第二个参数是深色方案要使用的值' tags={['C_API']}>
                            <Text style={styles.initialStylegreed}>Current mode: {mode}</Text>
                            <Text style={styles.initialStyleRed}>Current mode: {mode}</Text>
                        </TestCase>	
                    </TestSuite>

                    <TestSuite name="DynamicStyleSheet" key={'DynamicStyleSheet'}>
                        <TestCase itShould='和StyleSheet样式集一样，但支持动态值' tags={['C_API']}>
                            <View style={styles.useContainer}>
                                <Text style={styles.text}>mode:{isDarkMode ? 'dark' : 'light'}</Text>
                            </View>
                        </TestCase>	
                    </TestSuite>

                    <TestSuite name="ColorSchemeProvider" key={'ColorSchemeProvider'}>
                        <TestCase itShould='ColorSchemeProvider是自定义模式，下面自定义了两种主题' tags={['C_API']}>
                            <ColorSchemeProvider mode="dark">
                                <Components />
                            </ColorSchemeProvider>
                            <ColorSchemeProvider mode="light">
                                <Components />
                            </ColorSchemeProvider>
                        </TestCase>	
                    </TestSuite>

                    <TestSuite name="useDynamicValue" key={'useDynamicValue'}>
                        <TestCase itShould='根据主题返回适当的值，可以传递一个包含和属性的DynamicValue对象，或者仅传递两个参数，dark或light' tags={['C_API']}>
                            <Text  style={styles.inints}>{placeholderColor + ''}</Text>
                        </TestCase>	
                    </TestSuite>

                    <TestSuite name="useColorSchemeContext" key={'useColorSchemeContext'}>
                        <TestCase itShould='返回dark或light,但从上下文中读取值' tags={['C_API']}>
                            <Text  style={styles.inints}>{useBackgroundColor + ''}</Text>
                        </TestCase>	
                    </TestSuite>
                </Tester>
            </ScrollView>
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
    containerChild: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
        height: 100,
		backgroundColor: new DynamicValue('green', 'blue'),
	},
    useContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
        height: 100,
		backgroundColor: new DynamicValue('#FFFFFF', '#000000'),
	},
	initialStyle: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: new DynamicValue('#000000', '#FFFFFF'),
	},
    initialStyleRed: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: new DynamicValue('red', 'blue'),
	},
    initialStylegreed: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: new DynamicValue('yellow', 'green'),
	},
    inints: {
		fontSize: 20,
		textAlign: 'center',
		margin: 2,
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