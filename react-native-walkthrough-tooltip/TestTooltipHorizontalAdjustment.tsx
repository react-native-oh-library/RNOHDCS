
import { StyleSheet, View} from 'react-native';

import { TooltipHorizontalAdjustment,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipHorizontalAdjustment(){
    return(
    <TestSuite name='TestTooltipHorizontalAdjustment'>
         {/*气泡水平调整属性测试 */}
         <TestCase itShould='测试horizontalAdjustment属性，改变气泡水平位置'>
         <TooltipHorizontalAdjustment horizontalAdjustment={5}/>
         </TestCase>
         <TestCase itShould='测试horizontalAdjustment属性，改变气泡水平位置'>
         <TooltipHorizontalAdjustment horizontalAdjustment={10}/>
         </TestCase>
         <TestCase itShould='测试horizontalAdjustment属性，改变气泡水平位置'>
         <TooltipHorizontalAdjustment horizontalAdjustment={20}/>
         </TestCase>

    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  