
import { StyleSheet, View} from 'react-native';

import { TooltipShowChildInTooltip,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipShowChildInTooltip(){
    return(
    <TestSuite name='TestTooltipShowChildInTooltip'>
         {/*气泡子项显示属性测试 */}
         <TestCase itShould='测试showChildInTooltip属性,设置为true,气泡下面文字显示'>
            <TooltipShowChildInTooltip showChildInTooltip={true}/>
            </TestCase>
         <TestCase itShould='测试showChildInTooltip属性,设置为false,气泡下面文字不显示'>
            <TooltipShowChildInTooltip showChildInTooltip={false}/>
        </TestCase>
         
         
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  