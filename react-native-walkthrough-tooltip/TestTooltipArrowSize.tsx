import { StyleSheet, View} from 'react-native';

import { TooltipArrowSize,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';

    export function TestTooltipArrowSize(){
    return(
   <TestSuite name="TestTooltipArrowSize">
         {/*气泡箭头大小属性测试 */}
         <TestCase itShould="测试arrowSize属性,改变气泡箭头大小">
        <TooltipArrowSize width={16} height={8} />
        </TestCase>
        <TestCase itShould="测试arrowSize属性,改变气泡箭头大小">
        <TooltipArrowSize width={24} height={12} />
        </TestCase>
        <TestCase itShould="测试arrowSize属性,改变气泡箭头大小">
        <TooltipArrowSize width={30} height={15} />
        </TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });