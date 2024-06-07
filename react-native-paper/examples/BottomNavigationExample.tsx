import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { View } from 'react-native';

function HelperTextDemo() { 
  return (
    <Tester>
     <TestSuite name='BottomNavigation' >
        <TestCase itShould='Default'>
          <BottomNavigationExample></BottomNavigationExample>
        </TestCase>
     </TestSuite>
    </Tester>
  )
}

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;
const BottomNavigationExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <View style= {{width:'100%',height:500}}>
      <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
    </View>
  );
};

export default HelperTextDemo;