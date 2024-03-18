import React from 'react';
import { View, Text } from 'react-native';
import {useRaf} from 'react-use';

const MyComponent = () => {
  const elapsed = useRaf(5000, 1000);

   return (
     <Text>
       Elapsed: {elapsed}
     </Text>
   );
};

export default MyComponent;