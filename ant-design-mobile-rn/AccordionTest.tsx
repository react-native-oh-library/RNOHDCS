import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Accordion, List } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [activeSections, setActiveSections] = useState<any>([0]);
  const [activeSections1, setActiveSections1] = useState<any>([0]);
  return (
    <TestSuite name="AccordionTest">
      <TestCase itShould="Accordion support onChange()" tags={['C_API']}
        initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <Accordion
              onChange={(activeSections: number[]) => {
                setActiveSections(activeSections);
                setState(activeSections);
              }}
              activeSections={activeSections}>
              <Accordion.Panel header="Title 1">
                <List>
                  <List.Item>{'Content 1'}</List.Item>
                </List>
              </Accordion.Panel>
              <Accordion.Panel header="Title 2">
                <List>
                  <List.Item>{'Content 2'}</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion>
            <Text>activeSections:{activeSections}</Text>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(activeSections);
        }}
      >
      </TestCase>
      <TestCase itShould="Accordion.Panel header='Title 1'">
        <View>
          <Accordion
            onChange={(activeSections: number[]) => {
              setActiveSections1(activeSections);
            }}
            activeSections={activeSections1}>
            <Accordion.Panel header="Title 1" key='title1'>
              <List>
                <List.Item>{'Content 1'}</List.Item>
                <List.Item>{'Content 2'}</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion>
        </View>
      </TestCase>
    </TestSuite>
  );
};



