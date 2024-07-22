import { StyleSheet, View} from 'react-native';

import {  TooltipAllowChildInteraction,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipAllowChildInteraction(){
    return(
        <TestSuite name="TestTooltipAllowChildInteraction">
         <TestCase itShould=' itShould="测试allowChildInteraction属性,设置为true,提示中下面的元素点击时有黑色背景色'>
        <TooltipAllowChildInteraction allowChildInteraction={true}/>
        </TestCase>
        <TestCase itShould=' itShould="测试allowChildInteraction属性,设置为fales,提示中下面的元素点击时无黑色背景色'>
        <TooltipAllowChildInteraction allowChildInteraction={false}/>
        </TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  