import React from 'react';
import ListContent from './Content';
import { Text } from 'react-native';

type ListComponentProps = {};

const Lists: React.FunctionComponent<ListComponentProps> = () => {
  return (
    <>
      <Text style={{fontSize:24,fontWeight:'bold'}}>Lists</Text>
      <ListContent />
    </>
  );
};

export default Lists;
