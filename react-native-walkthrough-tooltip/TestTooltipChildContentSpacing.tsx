import { StyleSheet, View} from 'react-native';

import {  TooltipChildContentSpacing,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipChildContentSpacing(){
    return(
    <TestSuite name='TestTooltipChildContentSpacing'>
         <TestCase itShould='测试childContentSpacing属性,气泡箭头距离下方文字距离'>
        <TooltipChildContentSpacing childContentSpacing={5}/>
        </TestCase>
        <TestCase itShould='测试childContentSpacing属性,气泡箭头距离下方文字距离'>
        <TooltipChildContentSpacing childContentSpacing={10}/>
        </TestCase>
        <TestCase itShould='测试childContentSpacing属性,气泡箭头距离下方文字距离'>
        <TooltipChildContentSpacing childContentSpacing={20}/>
        </TestCase>

    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  