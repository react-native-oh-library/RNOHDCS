import { StyleSheet, View} from 'react-native';

import { TooltipSupportedOrientations,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipSupportedOrientations(){
    return(
    <TestSuite name='TestTooltipSupportedOrientations'>
        <TestCase itShould="测试supportedOrientations属性,设置为['portrait'],不支持横屏">
        <TooltipSupportedOrientations supportedOrientations={['portrait']} />
    </TestCase>
    <TestCase itShould="测试supportedOrientations属性,设置为['landscape'],不支持竖屏">
        <TooltipSupportedOrientations supportedOrientations={['landscape']} />
    </TestCase>
    </TestSuite>
    )
}
const styles = StyleSheet.create({ });