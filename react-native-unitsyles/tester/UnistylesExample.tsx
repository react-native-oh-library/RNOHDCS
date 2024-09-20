import { Text,View,Button, ScrollView,PixelRatio} from 'react-native';
import { UnistylesRuntime, createStyleSheet, useStyles,UnistylesRegistry,mq,UnistylesPlugin,useInitialTheme } from 'react-native-unistyles'
import React,{useEffect} from 'react'; 
import {TestSuite,Tester,TestCase} from '@rnoh/testerino';

export function UnistylesExample() {
    const hasSomeCoolFeatures = true;
    const { styles, theme } = useStyles(stylesheet,{ colors: hasSomeCoolFeatures,sizes: !hasSomeCoolFeatures});
    const renderCount = React.useRef(0)
    useInitialTheme(theme)
    return(
        <ScrollView>
            <Tester>
                <TestSuite name='unistyles' > 
                  <TestCase
                    itShould="useStyles"
                    fn={({expect}) => {
                        expect(theme).to.be.not.undefined;
                    }}
                  /> 
                  <TestCase
                    itShould="useInitialTheme"
                    fn={({expect}) => {
                        //可以渲染出来即为注册成功
                        expect(UnistylesRuntime.themeName).to.be.eq('light');
                    }}
                  /> 
                  <TestCase
                    itShould="addConfig ({ initialTheme: 'light' })"
                    fn={({expect}) => {
                        //使用light主题作为默认主题
                        expect(UnistylesRuntime.themeName).to.be.eq('light');
                    }}
                  />
                  <TestCase
                    itShould="addThemes (light: lightTheme, dark: darkTheme, premium: premiumTheme)"
                    fn={({expect}) => {
                      //注册了light主题了后才能使用
                      expect(UnistylesRuntime.themeName).to.be.eq('light');
                    }}
                  />
                  <TestCase
                    itShould="addBreakpoints { xs: 0, sm: 300, md: 500, lg: 800, xl: 1200}"
                    fn={({expect}) => {
                      expect(UnistylesRuntime.breakpoints).and.to.be.not.undefined;
                    }}
                  />
                  <TestCase
                    itShould="const stylesheet = createStyleSheet((theme, runtime)"
                    fn={({expect}) => {
                      expect(stylesheet).and.to.be.not.undefined;
                    }}
                  />

                    <TestCase itShould = '状态栏 themeColor #00ff00'>
                        <Button title='状态栏颜色 #00ff00' onPress={() => UnistylesRuntime.statusBar.setColor('#00ff00')}></Button>
                    </TestCase>
                    <TestCase itShould = '状态栏 themeColor #0000ff'>
                        <Button title='状态栏颜色 #0000ff' onPress={() => UnistylesRuntime.statusBar.setColor('#0000ff')}></Button>
                    </TestCase>
                    <TestCase itShould = '主题名称 themeName'>
                        <Text style={styles.text}> 当前主题:{UnistylesRuntime.themeName} 重新渲染的次数:{renderCount.current++}</Text><Text style={styles.theme}> Colors: {JSON.stringify(theme.colors, null, 2)} </Text>
                    </TestCase>
                    <TestCase itShould='更新主题内容 UnistylesRuntime.updateTheme("light", theme => ({ ...theme, colors: { ...theme.colors, typography: "#ff6b6b" } }))'>
                        <Button title="更新主题内容 #ff6b6b" onPress={() => { 
                          UnistylesRuntime.setAdaptiveThemes(false);
                          UnistylesRuntime.setTheme('light');
                          UnistylesRuntime.updateTheme('light', theme => ({ ...theme, colors: { ...theme.colors, typography: theme.colors.blood } }))
                        }}
                        />
                    </TestCase>
                    <TestCase itShould='更新主题内容 UnistylesRuntime.updateTheme("light", theme => ({ ...theme, colors: { ...theme.colors, typography: "#000000" } }))'>
                        <Button title="更新主题内容 #000000" onPress={() => { 
                                UnistylesRuntime.setAdaptiveThemes(false);
                                UnistylesRuntime.setTheme('light');
                                UnistylesRuntime.updateTheme('light', theme => ({ ...theme, colors: { ...theme.colors, typography: '#000000' } }))
                            }}
                        />
                    </TestCase>
                    <TestCase itShould='更改页面主题 setTheme light '>
                        <Button title="更改页面主题 UnistylesRuntime.setTheme('light')" color={theme.colors.accent} onPress={() => {
                            UnistylesRuntime.setAdaptiveThemes(false);
                            UnistylesRuntime.setTheme('light')
                        }} />
                    </TestCase>
                    <TestCase itShould='更改页面主题 setTheme premium'>
                        <Button title="更改页面主题 UnistylesRuntime.setTheme('premium')" color={theme.colors.accent} onPress={() => {
                            UnistylesRuntime.setAdaptiveThemes(false);
                            UnistylesRuntime.setTheme('premium');
                        }} />
                    </TestCase>
                    <TestCase itShould='启用自适应主题 setAdaptiveThemes true'>
                        <Text style={styles.container}>{" 系统主题:"+UnistylesRuntime.colorScheme}</Text>
                        <Button title="启用自适应主题 UnistylesRuntime.setAdaptiveThemes(true)" onPress={() => { UnistylesRuntime.setAdaptiveThemes(true) } } />
                    </TestCase>
                    <TestCase itShould='关闭自适应主题 setAdaptiveThemes false'>
                        <Text style={styles.container}>{" 系统主题:"+UnistylesRuntime.colorScheme}</Text>
                        <Button title="关闭自适应主题 UnistylesRuntime.setAdaptiveThemes(false)" onPress={() => {  UnistylesRuntime.setAdaptiveThemes(false)  }} />
                    </TestCase>
                    <TestCase itShould='启用插件 addPlugin autoGuidelinePlugin'>
                        <View style={styles.unscaledBox}></View><Text>前缀为unscaled的样式会被插件跳过,已启用的插件{UnistylesRuntime.enabledPlugins}</Text>
                        <Button
                            title={'启用插件'}
                            onPress={() => { UnistylesRuntime.addPlugin(autoGuidelinePlugin) } }
                        />
                    </TestCase>
                    <TestCase itShould='关闭插件 removePlugin '>
                        <View style={styles.unscaledBox}></View><Text>前缀为unscaled的样式会被插件跳过,已启用的插件{UnistylesRuntime.enabledPlugins}</Text>
                        <Button
                            title={'关闭插件'}
                            onPress={() => {UnistylesRuntime.removePlugin(autoGuidelinePlugin) }}
                        />
                    </TestCase>
                    <TestCase itShould='在StyleSheets中使用runtime'>
                        <View style={styles.box}>
                            <Text>占据了屏幕一半大小的方块width:{styles.box.width} height:{styles.box.height}</Text>
                        </View>
                    </TestCase>
                    <TestCase itShould='mq : width'>
                        <Text style={styles.mq1}> styles.mq1 </Text>
                    </TestCase>
                    <TestCase itShould='mq : height'>
                        <Text style={styles.mq2}> styles.mq2 </Text>
                    </TestCase>
                    <TestCase itShould='mq : and'>
                        <Text style={styles.mq3}> styles.mq3 </Text>
                    </TestCase>
                    <TestCase itShould='mq : only'>
                        <Text style={styles.mq4}> styles.mq4 </Text>
                    </TestCase>
                    
                    <TestCase itShould='UnistylesRuntime.enabledPlugins'>
                        <Text> {JSON.stringify(UnistylesRuntime.enabledPlugins)} </Text>
                    </TestCase>
                    <TestCase itShould='UnistylesRuntime.hasAdaptiveThemes'>
                        <Text> {JSON.stringify(UnistylesRuntime.hasAdaptiveThemes)} </Text>
                    </TestCase>
                    
                    <TestCase itShould='UnistylesRuntime.breakpoints'>
                        <Text>{JSON.stringify(UnistylesRuntime.breakpoints)}</Text>
                    </TestCase>
                    <TestCase itShould='UnistylesRuntime.colorScheme'>
                        <Text>{UnistylesRuntime.colorScheme}</Text>
                    </TestCase>
                    
                    <TestCase itShould='字体大小偏好'>
                        <Text>{"现在的字体大小偏好设置为:"+UnistylesRuntime.contentSizeCategory}</Text>
                    </TestCase>
                    <TestCase itShould='UnistylesRuntime.insets'>
                        <Text>top {UnistylesRuntime.insets.top} bottom {UnistylesRuntime.insets.bottom} left {UnistylesRuntime.insets.left} right {UnistylesRuntime.insets.right}</Text>
                    </TestCase>
                    <TestCase itShould='UnistylesRuntime.statusBar'>
                        <Text>width {UnistylesRuntime.statusBar.width} height {UnistylesRuntime.statusBar.height}</Text>
                    </TestCase>
                    <TestCase itShould='UnistylesRuntime.orientation'>
                        <Text>{UnistylesRuntime.orientation}</Text>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}
 
const stylesheet = createStyleSheet((theme, runtime) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: theme.colors.backgroundColor,
        rowGap: 20
    },
    text: {
        textAlign: 'center',
        color: theme.colors.typography,
        fontSize: 14
    },
    bold: {
        fontWeight: 'bold'
    },
    mq1: {
        backgroundColor: {
            [mq.only.width(100, 200)]: theme.colors.blood,
            [mq.only.width(201, 10000)]: theme.colors.aloes
        },
    },
    mq2: {
        backgroundColor: {
          [mq.only.height(100, 200)]: theme.colors.aloes,
          [mq.only.height(201, 10000)]: theme.colors.blood
        },
    },
    mq3: {
        backgroundColor: {
          [mq.width(100, 200).and.height(undefined, 10000)]: theme.colors.barbie,
          [mq.width(201, 10000).and.height(undefined, 10000)]: theme.colors.sky
        },
    },
    mq4: {
        backgroundColor: {
          [mq.only.width(0, 400)]: theme.colors.sky,
          [mq.only.width(400,10000)]: theme.colors.barbie
        },
    },
    theme: {
        color: theme.colors.typography
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 50,
        width: runtime.screen.width/ 2,
        height: runtime.screen.height / 2,
        backgroundColor: runtime.orientation === 'portrait'
            ? theme.colors.accent
            : theme.colors.oak
    },
    dynamicFunction: (index: number) => ({
        backgroundColor: index % 2 === 0
            ? theme.colors.accent
            : theme.colors.barbie
    }),
    box_variants: {
        borderRadius: 10,
        variants: {
            colors: {
                true: { backgroundColor: theme.colors.barbie },
                false: { backgroundColor: theme.colors.blood },
                default: { backgroundColor: theme.colors.sky },
                other: { backgroundColor: theme.colors.typography }
            },
            sizes: {
                true: { width: 200, height: 200 },
                false: { width: 50, height: 50 },
                default: { width: 100, height: 100 },
                other: { width: 150, height: 150 }
            }
        }
    },
    box_variants1: {
        borderRadius: 10,
        variants: {
            colors: {
                false: { backgroundColor: theme.colors.barbie },
                true: { backgroundColor: theme.colors.blood },
                default: { backgroundColor: theme.colors.sky },
                other: { backgroundColor: theme.colors.typography }
            },
            sizes: {
                false: { width: 200, height: 200 },
                true: { width: 50, height: 50 },
                default: { width: 100, height: 100 },
                other: { width: 150, height: 150 }
            }
        }
    },
    unscaledBox: { width: 100, height: 100, backgroundColor: theme.colors.blood },
}));

const sharedColors = { barbie: '#ff9ff3', oak: '#1dd1a1', sky: '#48dbfb', fog: '#c8d6e5', aloes: '#00d2d3', blood: '#ff6b6b'}
const lightTheme = { colors: { ...sharedColors, backgroundColor: '#ffffff', typography: '#000000', accent: sharedColors.blood }}
const darkTheme = { colors: { ...sharedColors, backgroundColor: '#000000', typography: '#ffffff', accent: sharedColors.barbie }}
const premiumTheme = { colors: { ...sharedColors, backgroundColor: sharedColors.barbie, typography: '#76278f', accent: '#000000' }}
const breakpoints = { xs: 0, sm: 300, md: 500, lg: 800, xl: 1200}
UnistylesRegistry
    .addThemes({ light: lightTheme, dark: darkTheme, premium: premiumTheme })
    .addBreakpoints(breakpoints)
    .addConfig({ initialTheme: 'light' });

const REFERENCE_WIDTH = 300
const REFERENCE_HEIGHT = 800

const autoGuidelinePlugin: UnistylesPlugin = {
    name: 'autoGuideline',
    onParsedStyle: (styleKey, style, runtime) => {
        const pairs = Object
            .entries(style)
            .map(([key, value]) => {
                if (styleKey.includes('unscaled')) {
                    return [key, value]
                }

                const isNumber = typeof value === 'number'

                if (!isNumber || key === 'flex') {
                    return [key, value]
                }

                if (key === 'height') {
                    const percentage = value / REFERENCE_HEIGHT
                    return [ key, PixelRatio.roundToNearestPixel(runtime.screen.height * percentage) ]
                }
                const percentage = value / REFERENCE_WIDTH
                return [ key, PixelRatio.roundToNearestPixel(runtime.screen.width * percentage) ]
            })

        return Object.fromEntries(pairs)
    }
}