
import { StyleSheet, View} from 'react-native';
import { TooltipUseInteractionManager,} from './Tooltip';

import { TestCase, TestSuite } from '@rnoh/testerino';
export function TestTooltipUseInteractionManager(){
    return(
    <TestSuite name='TestTooltipUseInteractionManager'>
                    <TestCase itShould="测试useInteractionManager属性,设置为true,等动画结束后">
                <TooltipUseInteractionManager useInteractionManager={true} />
            </TestCase>
            <TestCase itShould="测试useInteractionManager属性,设置为false,不启用">
                <TooltipUseInteractionManager useInteractionManager={false} />
            </TestCase>
    </TestSuite>
    )

}

const styles = StyleSheet.create({ });

