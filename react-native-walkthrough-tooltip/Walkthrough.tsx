
import { StyleSheet, ScrollView, View,SafeAreaView} from 'react-native';

import {
    TooltipAccessible,
    TooltipAllowChildInteraction,
    TooltipArrowSize,
    TooltipBackgroundColor,
    TooltipChildContentSpacing,
    TooltipCloseOnChildInteraction,
    TooltipCloseOnContentInteraction,
    TooltipDisplayInsets,
    TooltipDisableShadow,
    TooltipPlacement,
    TooltipShowChildInTooltip,
    TooltipSupportedOrientations,
    TooltipTopAdjustment,
    TooltipHorizontalAdjustment,
    TooltipUseInteractionManager,
    TooltipUseReactNativeModal
} from './Tooltip';
import { TestCase, TestSuite,Tester } from '@rnoh/testerino';

export default function Walkthrough() {
    return (
    <ScrollView style={{flex:1}}>
        <Tester>
        <TestSuite name="Walkthrough">
            <TestCase itShould='accessible属性测试,设置为true,屏幕朗读不可触碰提示气泡'>
                <TooltipAccessible  accessible={true}/>
            </TestCase>
            <TestCase itShould='accessible属性测试,设置为false,屏幕朗读可触碰提示气泡'>
                <TooltipAccessible  accessible={false}/>
            </TestCase>
            <TestCase itShould='测试arrowSize属性,改变气泡箭头大小'>
                <TooltipArrowSize width={16} height={8}/>
            </TestCase>
            <TestCase itShould='测试arrowSize属性,改变气泡箭头大小'>
                <TooltipArrowSize width={30} height={15}/>
            </TestCase>
            <TestCase itShould='测试backgroundColor属性,改变气泡背景色'>
                <TooltipBackgroundColor backgroundColor='rgba(0,50,135,0.8)'/>
            </TestCase>
            <TestCase itShould='测试backgroundColor属性,改变气泡背景色'>
                <TooltipBackgroundColor backgroundColor='rgba(0,125,50,1)'/>
            </TestCase>
            <TestCase itShould='测试childContentSpacing属性,气泡箭头距离下方文字距离'>
                <TooltipChildContentSpacing childContentSpacing={5}/>
            </TestCase>
            <TestCase itShould='测试childContentSpacing属性,气泡箭头距离下方文字距离'>
                <TooltipChildContentSpacing childContentSpacing={20}/>
            </TestCase>
            <TestCase itShould='测试displayInsets，改变气泡大小'>
                <TooltipDisplayInsets top={5}bottom={15}left={25}right={30}/>
            </TestCase>
            <TestCase itShould='测试displayInsets，改变气泡大小'>
                <TooltipDisplayInsets top={30}bottom={60}left={90}right={120}/>
            </TestCase>
            <TestCase itShould='测试placement属性,改变气泡显示位置'>
                <TooltipPlacement placement='top'/>
            </TestCase>
            <TestCase itShould='测试placement属性,改变气泡显示位置'>
                <TooltipPlacement placement='bottom'/>
            </TestCase>
            <TestCase itShould='测试placement属性,改变气泡显示位置'>
                <TooltipPlacement placement='left'/>
            </TestCase>
            <TestCase itShould='测试placement属性,改变气泡显示位置'>
                <TooltipPlacement placement='right'/>
            </TestCase>
            <TestCase itShould='测试showChildInTooltip属性,设置为true,气泡下面文字显示'>
                <TooltipShowChildInTooltip showChildInTooltip={true}/>
            </TestCase>
            <TestCase itShould='测试showChildInTooltip属性,设置为false,气泡下面文字不显示'>
                <TooltipShowChildInTooltip showChildInTooltip={false}/>
            </TestCase>
            <TestCase itShould='测试topAdjustment属性,调整气泡顶部距离'>
                <TooltipTopAdjustment topAdjustment={5}/>
            </TestCase>
            <TestCase itShould='测试topAdjustment属性,调整气泡顶部距离'>
                <TooltipTopAdjustment topAdjustment={50}/>
            </TestCase>
            <TestCase itShould="测试allowChildInteraction属性,设置为true,提示中下面的元素点击可以关闭提示">
                <TooltipAllowChildInteraction allowChildInteraction={true} />
            </TestCase>
            <TestCase itShould="测试allowChildInteraction属性,设置为false,提示中下面的元素无法关闭提示">
                <TooltipAllowChildInteraction allowChildInteraction={false} />
            </TestCase>
            <TestCase itShould="测试closeOnChildInteraction属性,设置为true,点击提示中下方的内容可以交互">
                <TooltipCloseOnChildInteraction closeOnChildInteraction={true} />
            </TestCase>
            <TestCase itShould="测试closeOnChildInteraction属性,设置为false,点击提示中下方的内容不可以交互">
                <TooltipCloseOnChildInteraction closeOnChildInteraction={false} />
            </TestCase>
            <TestCase itShould="测试closeOnContentInteraction属性,设置为true,点击提示中上方的内容将关闭提示">
                <TooltipCloseOnContentInteraction closeOnContentInteraction={true} />
            </TestCase>
            <TestCase itShould="测试closeOnContentInteraction属性,设置为false,点击提示中上方的内容不会关闭提示">
                <TooltipCloseOnContentInteraction closeOnContentInteraction={false} />
            </TestCase>
            <TestCase itShould="测试disableShadow属性,设置为true,气泡周围没有阴影">
                <TooltipDisableShadow disableShadow={true} />
            </TestCase>
            <TestCase itShould="测试disableShadow属性,设置为false,气泡周围有阴影">
                <TooltipDisableShadow disableShadow={false} />
            </TestCase>
            <TestCase itShould="测试horizontalAdjustment属性，改变气泡水平位置">
                <TooltipHorizontalAdjustment  horizontalAdjustment={5}/>
            </TestCase>
            <TestCase itShould="测试horizontalAdjustment属性，改变气泡水平位置">
                <TooltipHorizontalAdjustment  horizontalAdjustment={20} />
            </TestCase>
            <TestCase itShould="测试useReactNativeModal属性,设置为true">
                <TooltipUseReactNativeModal useReactNativeModal={true} />
            </TestCase>
            <TestCase itShould="测试useReactNativeModal属性,设置为false，渲染绝对定位的全屏视图">
                <View style={{height:300,position:'relative'}}>
                <TooltipUseReactNativeModal useReactNativeModal={false} />
                </View>
            </TestCase>
            <TestCase itShould="测试useInteractionManager属性,设置为true">
                <TooltipUseInteractionManager useInteractionManager={true} />
            </TestCase>
            <TestCase itShould="测试useInteractionManager属性,设置为false">
                <TooltipUseInteractionManager useInteractionManager={false} />
            </TestCase>
        </TestSuite>
        </Tester>
        </ScrollView>

    )

}

const styles = StyleSheet.create({});
