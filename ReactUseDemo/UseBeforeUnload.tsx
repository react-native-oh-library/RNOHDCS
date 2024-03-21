import React from 'react';
import { View, Text, Button } from 'react-native';
import { useBeforeUnload, useToggle } from 'react-use';

const UseBeforeUnloadDemo = () => {
  const [dirty, toggleDirty] = useToggle(false);
  useBeforeUnload(dirty, 'You have unsaved changes, are you sure?');

  return (
    <View>
      {dirty && <Text>触尝试重新加载或关闭选项卡</Text>}
      <Button title={dirty ? 'Disable' : 'Enable'} onPress={() => toggleDirty()} />
    </View>
  );
};

export default UseBeforeUnloadDemo;