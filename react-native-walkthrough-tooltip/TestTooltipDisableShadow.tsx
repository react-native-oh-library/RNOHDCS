import { StyleSheet, View} from 'react-native';

import { TooltipDisableShadow, } from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipDisableShadow(){
    return(
    <TestSuite name='TestTooltipDisableShadow'>
         {/*气泡阴影属性测试 */}
         <TestCase itShould="测试disableShadow属性,设置为true,气泡周围没有阴影">
         <TooltipDisableShadow disableShadow={true}/>
         </TestCase>
         <TestCase itShould="测试disableShadow属性,设置为false,气泡周围有阴影">
         <TooltipDisableShadow disableShadow={false}/>
         </TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  