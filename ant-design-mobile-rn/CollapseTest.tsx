import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Collapse, Icon } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [activeSections, setActiveSections] = useState<any>([0]);
  const [activeSections1, setActiveSections1] = useState<any>([0]);
  return (
    <TestSuite name="CollapseTest">
      <TestCase itShould="Collapse support accordion={true}, accordion={false}" tags={['C_API']}>
        <Collapse accordion>
          <Collapse.Panel key="1" title="第一项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
        </Collapse>
        <Collapse>
          <Collapse.Panel key="1" title="第一项">
            手风琴模式同时展开
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            手风琴模式同时展开
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            手风琴模式同时展开
          </Collapse.Panel>
        </Collapse>
      </TestCase>
      <TestCase itShould="Collapse activeKey">
        <View>
          <Collapse accordion activeKey={activeSections} onChange={(val: any) => { setActiveSections(val) }}>
            <Collapse.Panel key="1" title="第一项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="第二项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="第三项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
          <Text>activeKey:{activeSections}</Text>
        </View>
      </TestCase>
      <TestCase itShould="Collapse arrowIcon">
        <View>
          <Collapse accordion arrow={<Icon name="down-circle" />}>
            <Collapse.Panel key="1" title="第一项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="第二项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="第三项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
        </View>
      </TestCase>
      <TestCase itShould="Collapse support defaultActiveKey={'2'}, defaultActiveKey={'3'}" tags={['C_API']}>
        <Collapse accordion defaultActiveKey={'2'}>
          <Collapse.Panel key="1" title="第一项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
        </Collapse>
        <Collapse accordion defaultActiveKey={'3'}>
          <Collapse.Panel key="1" title="第一项">
            手风琴模式同时展开
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            手风琴模式同时展开
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            手风琴模式同时展开
          </Collapse.Panel>
        </Collapse>
      </TestCase>
      <TestCase itShould="Collapse onChange()" tags={['C_API']}
        initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <Collapse accordion activeKey={activeSections} onChange={(val: any) => { setActiveSections(val); setState(true); }}>
              <Collapse.Panel key="1" title="第一项">
                手风琴模式只能同时展开一个
              </Collapse.Panel>
              <Collapse.Panel key="2" title="第二项">
                手风琴模式只能同时展开一个
              </Collapse.Panel>
              <Collapse.Panel key="3" title="第三项">
                手风琴模式只能同时展开一个
              </Collapse.Panel>
            </Collapse>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>

      </TestCase>
      <TestCase itShould="Collapse styles={{ Content: { backgroundColor: 'aqua' } }}" tags={['C_API']}>
        <View>
          <Collapse accordion styles={{ Content: { backgroundColor: 'aqua' } }}>
            <Collapse.Panel key="1" title="第一项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="第二项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="第三项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
        </View>
      </TestCase>
      <TestCase itShould="Collapse.Panel arrowIcon" tags={['C_API']}>
        <View>
          <Collapse accordion>
            <Collapse.Panel key="1" title="第一项" arrow={<Icon name="down-circle" />}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="第二项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="第三项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
        </View>
      </TestCase>
      <TestCase itShould="Collapse.Panel destroyOnClose={true}， destroyOnClose={false}" tags={['C_API']}>
        <View>
          <Collapse accordion>
            <Collapse.Panel key="1" title="第一项" destroyOnClose={true}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="第二项" destroyOnClose={false}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="第三项" destroyOnClose={true}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
        </View>
      </TestCase>
      <TestCase itShould="Collapse.Panel disabled={true}， disabled={false}" tags={['C_API']}>
        <View>
          <Collapse accordion>
            <Collapse.Panel key="1" title="第一项" disabled={true}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="第二项" disabled={false}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="第三项" disabled={true}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
        </View>
      </TestCase>
      <TestCase itShould="Collapse.Panel forceRender={true}， forceRender={false}" tags={['C_API']}>
        <View>
          <Collapse accordion>
            <Collapse.Panel key="1" title="第一项" forceRender={true}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="第二项" forceRender={false}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="第三项" forceRender={true}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
        </View>
      </TestCase>
      <TestCase itShould="Collapse.Panel key" tags={['C_API']}>
        <View>
          <Collapse accordion activeKey={activeSections1} onChange={(val: any) => { setActiveSections1(val) }}>
            <Collapse.Panel key="1" title="第一项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="第二项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="第三项">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
          <Text>key:{activeSections1}</Text>
        </View>
      </TestCase>
      <TestCase itShould="Collapse.Panel onPress()" tags={['C_API']}
        initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <Collapse accordion>
              <Collapse.Panel key="1" title="第一项" onPress={() => { setState(true) }}>
                手风琴模式只能同时展开一个
              </Collapse.Panel>
              <Collapse.Panel key="2" title="第二项">
                手风琴模式只能同时展开一个
              </Collapse.Panel>
              <Collapse.Panel key="3" title="第三项">
                手风琴模式只能同时展开一个
              </Collapse.Panel>
            </Collapse>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="Collapse.Panel title=[1,2,3]" tags={['C_API']}>
        <View>
          <Collapse accordion>
            <Collapse.Panel key="1" title="1">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="2">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="3">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
        </View>
      </TestCase>
      <TestCase itShould="Collapse.Panel styles={{ Content: { backgroundColor: 'green' } }}" tags={['C_API']}>
        <View>
          <Collapse accordion>
            <Collapse.Panel key="1" title="1" styles={{ Content: { backgroundColor: 'green' } }}>
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="2" title="2">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
            <Collapse.Panel key="3" title="3">
              手风琴模式只能同时展开一个
            </Collapse.Panel>
          </Collapse>
        </View>
      </TestCase>
    </TestSuite>
  );
};



