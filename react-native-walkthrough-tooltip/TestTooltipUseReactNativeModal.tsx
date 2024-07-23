
import { StyleSheet, View} from 'react-native';

import {  TooltipUseReactNativeModal} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipUseReactNativeModal(){
    return(
    <TestSuite name='KLAPlatformColorsTest'>
         {/*气泡ReactNativeModal属性测试 */}
         <TestCase itShould="测试useReactNativeModal属性,默认为true"><TooltipUseReactNativeModal useReactNativeModal={true} /></TestCase>
         <TestCase itShould="测试useReactNativeModal属性,设置为false，渲染绝对定位的全屏视图"> <TooltipUseReactNativeModal useReactNativeModal={false} /></TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  