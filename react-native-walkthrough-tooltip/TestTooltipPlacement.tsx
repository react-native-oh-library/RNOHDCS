import { StyleSheet, View} from 'react-native';

import {   TooltipPlacement,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipPlacement(){
    return(
    <TestSuite name='TestTooltipPlacement'>
         {/*气泡显示位置属性测试 */}
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
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });