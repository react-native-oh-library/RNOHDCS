import React from 'react';
import { Text, View, ScrollView, Button, Appearance } from 'react-native';
import { NativeWindStyleSheet, styled, StyledComponent, useColorScheme } from 'nativewind';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const NativewindDemo = () => {

    const StyledView = styled(View);
    const StyledText = styled(Text);

    const StyledViewDefault1 = styled(View, 'bg-pink-400 h-12 w-12');
    const StyledViewDefault2 = styled(View, 'bg-blue-500 h-16 w-16');
    const StyledTextDefault1 = styled(Text, 'font-black');
    const StyledTextDefault2 = styled(Text, 'font-thin');

    const { colorScheme, setColorScheme } = useColorScheme();

    return (
        <Tester style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView>
                <Text style={{ fontSize: 30, color: '#fff', fontWeight: '700' }}>styled</Text>
                <TestSuite name='API:styled入参(View)'>
                    <TestCase tags={['C_API']} itShould='styled(View) | className写法1'>
                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledView className='bg-pink-400 h-12 w-12' />
                            <Text>{"className='bg-pink-400 h-12 w-12'"}</Text>
                            <Text>粉色 高12 宽12</Text>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='styled(View) | className写法2'>
                        <View style={{ height: 120, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledView className='bg-blue-500 h-16 w-16' />
                            <Text>{"className='bg-blue-500 h-16 w-16'"}</Text>
                            <Text>蓝色 高16 宽16</Text>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='styled(View) | tw写法1'>
                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledView tw='bg-pink-400 h-12 w-12' />
                            <Text>{"tw='bg-pink-400 h-12 w-12'"}</Text>
                            <Text>粉色 高12 宽12</Text>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='styled(View) | tw写法2'>
                        <View style={{ height: 120, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledView tw='bg-blue-500 h-16 w-16' />
                            <Text>{"tw='bg-blue-500 h-16 w-16"}</Text>
                            <Text>蓝色 高16 宽16</Text>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='API:styled入参(View, 样式字符串)'>
                    <TestCase tags={['C_API']} itShould="styled(View, 'bg-pink-400 h-12 w-12')">
                        <View style={{ height: 80, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledViewDefault1 />
                            <Text>粉色 高12 宽12</Text>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould="styled(View, 'bg-blue-500 h-16 w-16')">
                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledViewDefault2 />
                            <Text>蓝色 高16 宽16</Text>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='API:styled入参(Text)'>
                    <TestCase tags={['C_API']} itShould='styled(Text) | className写法1'>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledText className='font-black'>className='font-black'</StyledText>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='styled(Text) | className写法2'>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledText className='font-thin'>className='font-thin'</StyledText>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='styled(Text) | tw写法1'>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledText tw='font-black'>tw='font-black'</StyledText>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='styled(Text) | tw写法2'>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledText tw='font-thin'>tw='font-thin'</StyledText>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='API:styled入参(Text, 样式字符串)'>
                    <TestCase tags={['C_API']} itShould="styled(Text, 'font-black')">
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledTextDefault1>font-black</StyledTextDefault1>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould="styled(Text, 'font-thin')">
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledTextDefault2>font-thin</StyledTextDefault2>
                        </View>
                    </TestCase>
                </TestSuite>
                <Text style={{ fontSize: 30, color: '#fff', fontWeight: '700' }}>StyledComponent</Text>
                <TestSuite name='组件:StyledComponent(传入View)'>
                    <TestCase tags={['C_API']} itShould='StyledComponent(传入View) | className写法1'>
                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledComponent component={View} className='bg-pink-400 h-12 w-12' />
                            <Text>{"className='bg-pink-400 h-12 w-12'"}</Text>
                            <Text>粉色 高12 宽12</Text>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='StyledComponent(传入View) | className写法2'>
                        <View style={{ height: 120, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledComponent component={View} className='bg-blue-500 h-16 w-16' />
                            <Text>{"className='bg-blue-500 h-16 w-16'"}</Text>
                            <Text>蓝色 高16 宽16</Text>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='StyledComponent(传入View) | tw写法1'>
                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledComponent component={View} tw='bg-pink-400 h-12 w-12' />
                            <Text>{"tw='bg-pink-400 h-12 w-12'"}</Text>
                            <Text>粉色 高12 宽12</Text>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='StyledComponent(传入View) | tw写法2'>
                        <View style={{ height: 120, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledComponent component={View} tw='bg-blue-500 h-16 w-16' />
                            <Text>{"tw='bg-blue-500 h-16 w-16'"}</Text>
                            <Text>蓝色 高16 宽16</Text>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='组件:StyledComponent(传入Text)'>
                    <TestCase tags={['C_API']} itShould='StyledComponent(传入Text) | className写法1'>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledComponent component={Text} className='font-black'>className='font-black'</StyledComponent>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='StyledComponent(传入Text) | className写法2'>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledComponent component={Text} className='font-thin'>className='font-thin'</StyledComponent>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='StyledComponent(传入Text) | tw写法1'>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledComponent component={Text} tw='font-black'>tw='font-black'</StyledComponent>
                        </View>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='StyledComponent(传入Text) | tw写法2'>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledComponent component={Text} tw='font-thin'>tw='font-thin'</StyledComponent>
                        </View>
                    </TestCase>
                </TestSuite>
                <Text style={{ fontSize: 30, color: '#fff', fontWeight: '700' }}>NativeWindStyleSheet</Text>
                <TestSuite name='NativeWindStyleSheet.setAppearance()'>
                    <TestCase tags={['C_API']} itShould='NativeWindStyleSheet.setAppearance(外观)'>
                        <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 100, width: 500, alignItems: 'center', justifyContent: 'center' }}>
                                <StyledView className='bg-slate-50 dark:bg-slate-900 w-64 h-8 rounded-md'>
                                    <StyledText className='dark:text-white leading-6 text-center' >{'light:白色外观;dark:黑色外观'}</StyledText>
                                </StyledView>
                                <Button
                                    title="Appearance.setColorScheme('light')"
                                    onPress={() => {
                                        Appearance.setColorScheme('light')
                                        NativeWindStyleSheet.setAppearance(Appearance)
                                    }}
                                />
                                <Button
                                    title="Appearance.setColorScheme('dark')"
                                    onPress={() => {
                                        Appearance.setColorScheme('dark')
                                        NativeWindStyleSheet.setAppearance(Appearance)
                                    }}
                                />
                            </View>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='NativeWindStyleSheet.setColorScheme'>
                    <TestCase tags={['C_API']} itShould='NativeWindStyleSheet.setColorScheme(light | dark)'>
                        <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledView className='dark:bg-black w-72 h-6 rounded-md'>
                                <StyledText className='dark:text-white leading-6 text-center' >{'light:浅色方案;dark:深色方案'}</StyledText>
                            </StyledView>
                            <StyledView className='w-48 h-8 rounded-md'>
                                <StyledText className='leading-6 text-center' >{colorScheme}</StyledText>
                            </StyledView>
                            <View style={{ height: 100, width: 500, alignItems: 'center', justifyContent: 'center' }}>
                                <Button
                                    title="setColorScheme('light')"
                                    onPress={() => {
                                        NativeWindStyleSheet.setColorScheme('light')
                                    }}
                                />
                                <Button
                                    title="setColorScheme('dark')"
                                    onPress={() => {
                                        NativeWindStyleSheet.setColorScheme('dark')
                                    }}
                                />
                            </View>
                        </View>
                    </TestCase>
                </TestSuite>
                <Text style={{ fontSize: 30, color: '#fff', fontWeight: '700' }}>useColorScheme</Text>
                <TestSuite name='hooks:useColorScheme()'>
                    <TestCase tags={['C_API']} itShould='useColorScheme()'>
                        <View style={{ height: 120, alignItems: 'center', justifyContent: 'center' }}>
                            <StyledView className='dark:bg-black w-48 h-8 rounded-md'>
                                <StyledText className='dark:text-white leading-6 text-center' >{'light:白底黑字;dark:黑底白字'}</StyledText>
                            </StyledView>
                            <StyledView className='w-48 h-8 rounded-md'>
                                <StyledText className='leading-6 text-center' >{colorScheme}</StyledText>
                            </StyledView>
                            <Button
                                title='点击切换主题'
                                onPress={() => {
                                    setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester >
    )
}

export default NativewindDemo