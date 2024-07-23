import { StyleSheet, View} from 'react-native';

import {  TooltipCloseOnChildInteraction,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipCloseOnChildInteraction(){
    return(
    <TestSuite name='TestTooltipCloseOnChildInteraction'>
         {/*气泡关闭子交互属性测试 */}
         <TestCase itShould='测试closeOnChildInteraction属性,设置为true,点击气泡下文字关闭提示'>
        <TooltipCloseOnChildInteraction  closeOnChildInteraction={true} />
        </TestCase>
        <TestCase itShould='测试closeOnChildInteraction属性,设置为false,点击气泡下文字不会关闭提示'>
        <TooltipCloseOnChildInteraction   closeOnChildInteraction={false} />
        </TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  