import { StyleSheet, View} from 'react-native';

import {   TooltipBackgroundColor,} from './Tooltip';
import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipBackgroundColor(){
    return(
    <TestSuite name='TestTooltipBackgroundColor'>
        <TestCase itShould="测试backgroundColor属性,改变气泡背景色">
        <TooltipBackgroundColor backgroundColor='rgba(0,0,0,0.5)'/>
        </TestCase>
        <TestCase itShould="测试backgroundColor属性,改变气泡背景色">
        <TooltipBackgroundColor backgroundColor='rgba(0,50,135,0.8)'/>
        </TestCase>
        <TestCase itShould="测试backgroundColor属性,改变气泡背景色">
        <TooltipBackgroundColor backgroundColor='rgba(0,125,50,1)'/>
        </TestCase>
    </TestSuite>
    )

}
const styles = StyleSheet.create({ });
  