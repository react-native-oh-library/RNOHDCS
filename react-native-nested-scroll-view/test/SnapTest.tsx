import {TestSuite} from '@rnoh/testerino';
import {ScrollViewProps} from 'react-native';
import {ScrollViewComparator, getScrollViewContent} from './fixtures';
import {TestCase} from '../../components';

const ITEM_HEIGHT = 50;

export function SnapTest() {
  return (
    <>
      <TestSuite name="snapTo*">
        <SnapTestCases
          scrollViewProps={{disableIntervalMomentum: false, horizontal: false}}
        />
      </TestSuite>
      <TestSuite name="disableIntervalMomentum">
        <SnapTestCases
          scrollViewProps={{disableIntervalMomentum: true, horizontal: false}}
        />
      </TestSuite>
    </>
  );
}

function SnapTestCases(props: {scrollViewProps: ScrollViewProps}) {
  return (
    <>
      <TestCase.Example
        modal
        itShould="not snap after item 6 when snapToEnd is set to false">
        <ScrollViewComparator
          scrollViewLength={ITEM_HEIGHT * 5}
          commonProps={{
            ...props.scrollViewProps,
            snapToOffsets: [ITEM_HEIGHT * 5],
            children: getScrollViewContent({amountOfChildren: 25}),
          }}
          lhsProps={{snapToEnd: true}}
          rhsProps={{snapToEnd: false}}
        />
      </TestCase.Example>
      <TestCase.Example
        modal
        itShould="not snap before item 6 when snapToStart is set to false">
        <ScrollViewComparator
          scrollViewLength={ITEM_HEIGHT * 5}
          commonProps={{
            ...props.scrollViewProps,
            snapToOffsets: [ITEM_HEIGHT * 5],
            children: getScrollViewContent({amountOfChildren: 25}),
          }}
          lhsProps={{snapToStart: true}}
          rhsProps={{snapToStart: false}}
        />
      </TestCase.Example>
      <TestCase.Example tags={['C_API']} modal itShould="snap to page">
        <ScrollViewComparator
          scrollViewLength={ITEM_HEIGHT * 5}
          commonProps={{
            ...props.scrollViewProps,
            children: getScrollViewContent({amountOfChildren: 25}),
          }}
          lhsProps={{pagingEnabled: false}}
          rhsProps={{pagingEnabled: true}}
        />
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="snap to item 1, 3, 5, 7, 9, ...">
        <ScrollViewComparator
          scrollViewLength={ITEM_HEIGHT * 5}
          commonProps={{
            ...props.scrollViewProps,
            children: getScrollViewContent({amountOfChildren: 25}),
          }}
          lhsProps={{}}
          rhsProps={{snapToInterval: ITEM_HEIGHT * 2}}
        />
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="snap to item 2, 3, 7, and 11 and 21">
        <ScrollViewComparator
          scrollViewLength={ITEM_HEIGHT * 5}
          commonProps={{
            ...props.scrollViewProps,
            children: getScrollViewContent({amountOfChildren: 25}),
          }}
          lhsProps={{}}
          rhsProps={{
            snapToOffsets: [
              ITEM_HEIGHT,
              ITEM_HEIGHT * 2,
              ITEM_HEIGHT * 6,
              ITEM_HEIGHT * 10,
            ],
          }}
        />
      </TestCase.Example>
      <TestSuite name="snapToAlignment">
        <TestCase.Example
          tags={['C_API']}
          modal
          itShould="snap to item {lhs: start, rhs: center}">
          <ScrollViewComparator
            scrollViewLength={ITEM_HEIGHT * 1.5}
            commonProps={{
              ...props.scrollViewProps,
              children: getScrollViewContent({amountOfChildren: 25}),
              snapToInterval: ITEM_HEIGHT,
            }}
            lhsProps={{snapToAlignment: 'start'}}
            rhsProps={{snapToAlignment: 'center'}}
          />
        </TestCase.Example>
        <TestCase.Example
          tags={['C_API']}
          modal
          itShould="snap to item {lhs: start, rhs: end}">
          <ScrollViewComparator
            scrollViewLength={ITEM_HEIGHT * 1.5}
            commonProps={{
              ...props.scrollViewProps,
              children: getScrollViewContent({amountOfChildren: 25}),
              snapToInterval: ITEM_HEIGHT,
            }}
            lhsProps={{snapToAlignment: 'start'}}
            rhsProps={{snapToAlignment: 'end'}}
          />
        </TestCase.Example>
      </TestSuite>
    </>
  );
}
