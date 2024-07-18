import { StyleSheet, View} from 'react-native';

import { TooltipCloseOnContentInteraction,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipCloseOnContentInteraction(){
    return(
    <TestSuite name='TestTooltipCloseOnContentInteraction'>
         {/*气泡触摸内容属性测试 */}
         <TestCase itShould="测试closeOnContentInteraction属性,设置为false,点击提示中上方的内容关闭提示">
         <TooltipCloseOnContentInteraction closeOnContentInteraction={true}/>
         </TestCase>
         <TestCase itShould="测试closeOnContentInteraction属性,设置为false,点击提示中上方的内容不会关闭提示">
         <TooltipCloseOnContentInteraction closeOnContentInteraction={false}/>
         </TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  