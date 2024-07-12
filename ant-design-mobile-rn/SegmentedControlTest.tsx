
import React from 'react';
import { SegmentedControl } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="SegmentedControlTest">
      <TestCase itShould="render a SegmentedControl values={['Segment1', 'Segment2']}" tags={['C_API']}>
        <SegmentedControl values={['Segment1', 'Segment2']} />
      </TestCase>
      <TestCase itShould="render a SegmentedControl disabled" tags={['C_API']}>
        <SegmentedControl values={['Segment1', 'Segment2']} disabled />
      </TestCase>
      <TestCase itShould="render a SegmentedControl tintColor={'#ff0000'}" tags={['C_API']}>
        <SegmentedControl
          values={['Segment1', 'Segment2']}
          tintColor={'#ff0000'}
        />
      </TestCase>
      <TestCase itShould="render a SegmentedControl style={{backgroundColor:'pink'}}" tags={['C_API']}>
        <SegmentedControl
          values={['Segment1', 'Segment2']}
          style={{ backgroundColor: 'pink' }}
        />
      </TestCase>
      <TestCase itShould="render a SegmentedControl selectedIndex={1}" tags={['C_API']}>
        <SegmentedControl
          values={['Segment1', 'Segment2']}
          selectedIndex={1}
        />
      </TestCase>
      <TestCase itShould="render a SegmentedControl onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <SegmentedControl
            values={['Segment1', 'Segment2']}
            onChange={(e: any) => {
              setState(true);
            }}
          />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a SegmentedControl onValueChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <SegmentedControl
            values={['Segment1', 'Segment2']}
            onValueChange={() => { setState(true); }}
          />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
    </TestSuite>
  );
};
