import { StyleSheet, View} from 'react-native';

import {  TooltipAccessible,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TextTooltipAccessible(){
    return(
    <TestSuite name='TextTooltipAccessible'>
         {/*气泡accessible属性测试 */}
         <TestCase itShould='accessible属性测试,设置为true,屏幕朗读不可触碰提示气泡'><TooltipAccessible  accessible={true}/></TestCase>
         <TestCase itShould='accessible属性测试,设置为false,屏幕朗读可触碰提示气泡'><TooltipAccessible  accessible={false}/></TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  