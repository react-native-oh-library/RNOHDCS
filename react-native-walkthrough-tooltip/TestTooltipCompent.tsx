
import { StyleSheet, View } from 'react-native';

import { TooltipCompent, } from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipCompent() {
    return (
        <TestSuite name='TestTooltipCompent'>
            <TestCase itShould="基本测试">
                {/*基本测试  */}
                <TooltipCompent />
            </TestCase>
        </TestSuite>
    )

}
const styles = StyleSheet.create({});
