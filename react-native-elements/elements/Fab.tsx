import React from 'react';
import { View, Text } from 'react-native';
import { FAB } from '@rneui/themed';

export default () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <Text style={{fontSize:24,fontWeight:'bold'}}>FAB</Text>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          flexGrow: 1,
        }}
      >
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Small Size
        </Text>
        <FAB
          loading
          visible={visible}
          icon={{ name: 'plus',type: 'font-awesome', color: 'white' }}
          size="small"
        />
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Large Size
        </Text>
        <FAB
          visible={visible}
          icon={{ name: 'plus',type: 'font-awesome', color: 'white' }}
          color="green"
        />
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Primary Color
        </Text>
        <FAB
          visible={visible}
          title="Navigate"
          upperCase
          icon={{ name: 'map-marker',type: 'font-awesome', color: 'white' }}
          size="small"
        />

        <Text style={{ color: '#397af8', paddingVertical: 10 }}>Disabled</Text>

        <FAB
          visible={visible}
          disabled
          title="Extended"
          icon={{
            name: 'map-marker',
            type: 'font-awesome',
            color: 'white',
          }}
        />
        <FAB
          visible={visible}
          onPress={() => setVisible(!visible)}
          placement="right"
          title="Hide"
          icon={{ name: 'remove',type: 'font-awesome', color: 'white' }}
          color="red"
        />
        <FAB
          visible={!visible}
          onPress={() => setVisible(!visible)}
          placement="left"
          title="Show"
          icon={{name: 'pencil', type: 'font-awesome', color: 'white' }}
          color="green"
        />
      </View>
    </>
  );
};
