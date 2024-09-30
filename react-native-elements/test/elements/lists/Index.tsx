import React from 'react';
import ListContent from './Content';
import {Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type ListComponentProps = {};

const Lists: React.FunctionComponent<ListComponentProps> = () => {
  return (
    <Tester>
      <ListContent />
    </Tester>
  );
};

export default Lists;
