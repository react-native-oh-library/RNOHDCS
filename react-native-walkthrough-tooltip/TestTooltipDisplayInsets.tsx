import { StyleSheet, View} from 'react-native';

import { TooltipDisplayInsets,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipDisplayInsets(){
    return(
    <TestSuite name='TestTooltipDisplayInsets'>
         {/*气泡显示插入像素属性测试 */}
         <TestCase itShould='测试displayInsets，改变气泡大小'>
         <TooltipDisplayInsets top={5}bottom={15}left={25}right={35}/>
         </TestCase>
         <TestCase itShould='测试displayInsets，改变气泡大小'>
         <TooltipDisplayInsets top={15}bottom={45}left={55}right={75}/>
         </TestCase>
         <TestCase itShould='测试displayInsets，改变气泡大小'>
         <TooltipDisplayInsets top={30}bottom={60}left={90}right={120}/>
         </TestCase>

    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  