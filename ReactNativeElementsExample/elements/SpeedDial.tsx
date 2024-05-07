import React from 'react';
import { SpeedDial } from '@rneui/themed';
import { Text } from 'react-native';

export default () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Text style={{fontSize:24,fontWeight:'bold'}}>Speed Dial</Text>
      <SpeedDial
        isOpen={open}
        labelPressable
        placement="right"
        overlayColor="transparent"
        icon={{ name: 'pencil',type: 'font-awesome', color: '#fff' }}
        openIcon={{ name: 'remove',type: 'font-awesome', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'plus',type: 'font-awesome', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Added Event')}
        />
        <SpeedDial.Action
          icon={{ name: 'minus',type: 'font-awesome', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Event')}
        />
      </SpeedDial>
      <SpeedDial
        placement="left"
        isOpen={open}
        overlayColor="transparent"
        icon={{ name: 'pencil',type: 'font-awesome', color: '#fff' }}
        openIcon={{ name: 'remove',type: 'font-awesome', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        labelPressable
      >
        <SpeedDial.Action
          icon={{ name: 'plus',type: 'font-awesome',  color: '#fff' }}
          title="Add"
          onPress={() => console.log('Added Event')}
        />
        <SpeedDial.Action
          icon={{ name: 'plus',type: 'font-awesome', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Added Event')}
        />
        <SpeedDial.Action
          icon={{ name: 'minus',type: 'font-awesome', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Event')}
        />
      </SpeedDial>
    </>
  );
};