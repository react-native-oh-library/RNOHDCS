import React from 'react';
import { Text } from 'react-native';
import { useTween  } from 'react-use';

 const UseTweenDemo = () => {
  const t = useTween();
    return (
      <Text>
        Tween: {t}
      </Text>
    );
};
export default UseTweenDemo