import { StyleSheet, View} from 'react-native';

import {  TooltipTopAdjustment,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipTopAdjustment(){
    return(
    <TestSuite name='TestTooltipTopAdjustment'>
         {/*气泡顶部调整属性测试 */}
         <TestCase itShould='测试topAdjustment属性,调整气泡顶部距离'><TooltipTopAdjustment topAdjustment={5}/></TestCase>
         <TestCase itShould='测试topAdjustment属性,调整气泡顶部距离'> <TooltipTopAdjustment topAdjustment={20}/></TestCase>
         <TestCase itShould='测试topAdjustment属性,调整气泡顶部距离'><TooltipTopAdjustment topAdjustment={50}/></TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  