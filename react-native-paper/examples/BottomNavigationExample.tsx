import * as React from 'react';
import { BottomNavigation, Icon, MD2Colors, MD3Colors, Text } from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { ScrollView, View } from 'react-native';
import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

type BottomNavigationIndex = {
  [key: string]: number ;
};


function BottomNavigationDemo() { 

  const [index, setIndex] = React.useState<BottomNavigationIndex>({});
  const _getIndex = (name: string) => index[name] ? index[name] : 0;
  const _changeIndex = (name: string) => (num:number) => {
    console.info('--------' + num)
    setIndex({ ...index, [name]: num});
  }

  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const _onTabPress = () => {
    console.info('fuction onTabPress')
  }

  const _onTabLongPress = () => {
    console.info('fuction onTabLongPress')
  }

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  const BottomNavigationProps = [
    {
      key: 'BottomNavigation style: shifting ={true}',
      value: {
        navigationState:{ index:_getIndex('BottomNavigation'),routes:routes},
        shifting:true,
        renderScene:renderScene,
        onIndexChange:_changeIndex('BottomNavigation') 
      }
    },
    {
      key: 'BottomNavigation style: shifting ={false}',
      value: {
        navigationState:{ index:_getIndex('BottomNavigation1'),routes:routes},
        shifting:false,
        renderScene:renderScene,
        onIndexChange:_changeIndex('BottomNavigation1') 
      }
    },
    {
      key: 'BottomNavigation style: labeled ={false}',
      value: {
        navigationState:{ index:_getIndex('BottomNavigation2'),routes:routes},
        labeled:false,
        renderScene:renderScene,
        onIndexChange:_changeIndex('BottomNavigation2') 
      }
    },
    {
      key: 'BottomNavigation style: labeled ={true}',
      value: {
        navigationState:{ index:_getIndex('BottomNavigation3'),routes:routes},
        labeled:true,
        renderScene:renderScene,
        onIndexChange:_changeIndex('BottomNavigation3') 
      }
    },
    {
      key: 'BottomNavigation style: renderScene ={renderScene}',
      value: {
        labeled:true,
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation4'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation4') 
      }
    },
    {
      key: 'BottomNavigation fuction: onIndexChange ={_changeIndex("BottomNavigation5") }',
      value: {
        labeled:true,
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation5'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation5') 
      }
    },
    {
      key: 'BottomNavigation fuction: renderLabel ={ <Text variant="displayLarge">Display Large</Text>}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation6'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation6'),
        renderLabel:(props: {focused: boolean; color: string; }) => <Text variant="labelSmall">Label Small</Text>
      }
    },
    {
      key: 'BottomNavigation fuction: renderIcon ={<Icon source="camera" color={MD3Colors.error50} size={20} />}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation6'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation6'),
        renderIcon:(props: {focused: boolean; color: string; }) => <Icon source="camera" color={MD3Colors.error50} size={20} />
      }
    },
    {
      key: 'BottomNavigation fuction: renderTouchable ={<Icon source="camera" color={MD3Colors.error50} size={20} />}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation6'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation6'),
        renderTouchable:() => <Icon source="camera" color={MD3Colors.error50} size={20} />
      }
    },
    {
      key: 'BottomNavigation fuction: getAccessibilityLabel ={(props: { route: BaseRoute }) => "AccessibilityLabel"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation7'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation7'),
        getAccessibilityLabel:(props: { route: BaseRoute }) => 'AccessibilityLabel'
      }
    },
    {
      key: 'BottomNavigation fuction: getBadge ={(props: { route: BaseRoute }) => 999}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation7'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation7'),
        getBadge:(props: { route: BaseRoute }) => 999
      }
    },
    {
      key: 'BottomNavigation fuction: getBadge ={(props: { route: BaseRoute }) => "..."}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation8'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation8'),
        getBadge:(props: { route: BaseRoute }) => '...'
      }
    },
    {
      key: 'BottomNavigation fuction: getBadge ={(props: { route: BaseRoute }) => true}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation8'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation8'),
        getBadge:(props: { route: BaseRoute }) => true
      }
    },
    {
      key: 'BottomNavigation fuction: getColor ={(props: { route: BaseRoute }) =>"red"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation9'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation9'),
        activeColor:'red',
        getColor:(props: { route: BaseRoute }) => 'red'
      }
    },
    {
      key: 'BottomNavigation fuction: getLabelText ={(props: { route: BaseRoute }) => labeText}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation10'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation10'),
        getLabelText:(props: { route: BaseRoute }) =>'labeText'
      }
    },
    {
      key: 'BottomNavigation fuction: getLabelText ={(props: { route: BaseRoute }) => labeText}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation11'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation11'),
        getLazy:(props: { route: BaseRoute }) =>true
      }
    },
    {
      key: 'BottomNavigation fuction: getTestID ={(props: { route: BaseRoute }) => BottomNavigation}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation12'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation12'),
        getTestID:(props: { route: BaseRoute }) =>"BottomNavigation"
      }
    },
    {
      key: 'BottomNavigation fuction: onTabPress = {_onTabPress}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation13'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation13'),
        onTabPress:_onTabPress,
      }
    },
    {
      key: 'BottomNavigation fuction: onTabLongPress ={_onTabLongPress}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation14'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation14'),
        onTabLongPress:_onTabLongPress,
      }
    },
    {
      key: 'BottomNavigation style: inactiveColor ={"red"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation15'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation15'),
        inactiveColor:"red",
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationEnabled ={true}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation16'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation16'),
        sceneAnimationEnabled:true,
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationEnabled ={false}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation17'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation17'),
        sceneAnimationEnabled:false,
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationType ={"opacity"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation18'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation18'),
        sceneAnimationType:'opacity' as 'opacity' | 'shifting',
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationType ={"shifting"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation19'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation19'),
        sceneAnimationType:'shifting' as 'opacity' | 'shifting',
      }
    },

    {
      key: 'BottomNavigation style: sceneAnimationType ={true}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation20'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation20'),
        keyboardHidesNavigationBar:true,
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationType ={false}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation21'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation21'),
        keyboardHidesNavigationBar:false,
      }
    },
    {
      key: 'BottomNavigation style: safeAreaInsets ={top:10,bottom:10}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation22'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation22'),
        safeAreaInsets:{top:10,bottom:10},
      }
    },
    {
      key: 'BottomNavigation style: barStyle ={ backgroundColor: "#694fad"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation23'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation23'),
        barStyle:{ backgroundColor: '#694fad' }
      }
    },
    {
      key: 'BottomNavigation style: labelMaxFontSizeMultiplier ={1}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation24'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation24'),
        labelMaxFontSizeMultiplier:1
      }
    },
    {
      key: 'BottomNavigation style: labelMaxFontSizeMultiplier ={2}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation25'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation25'),
        labelMaxFontSizeMultiplier:2
      }
    },
    {
      key: 'BottomNavigation style: style ={backgroundColor:MD2Colors.yellow500}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation26'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation26'),
        style:{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: 'BottomNavigation style: activeIndicatorStyle ={backgroundColor:MD2Colors.yellow500}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation27'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation27'),
        activeIndicatorStyle:{backgroundColor:MD2Colors.yellow500}
      }
    },
    {
      key: 'BottomNavigation style: theme ={ colors: { primary:"green"} }',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation28'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation28'),
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: 'BottomNavigation style: testID ={"BottomNavigation"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:_getIndex('BottomNavigation29'),routes:routes},
        onIndexChange:_changeIndex('BottomNavigation29'),
        testID:'BottomNavigation'
      }
    }
  ]

  const BottomNavigationBarProps = [
    {
      key: 'BottomNavigationBar style: shifting ={true}',
      value: {
        shifting:true,
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        onTabPress:_onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: shifting ={false}',
      value: {
        shifting:false,
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        onTabPress:_onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: labeled ={true}',
      value: {
        labeled:true,
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        onTabPress:_onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: labeled ={false}',
      value: {
        labeled:false,
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        onTabPress:_onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: compact ={false}',
      value: {
        compact:false,
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        onTabPress:_onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: compact ={true}',
      value: {
        compact:true,
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        onTabPress:_onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: navigationState ={index:1, routes }',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        onTabPress:_onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: getBadge =(props: { route: BaseRoute }) => 999',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        getBadge:(props: { route: BaseRoute }) => 999
      }
    },
    {
      key: 'BottomNavigationBar style: getBadge =(props: { route: BaseRoute }) => "..."',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        getBadge:(props: { route: BaseRoute }) => '...'
      }
    },
    {
      key: 'BottomNavigationBar style: getBadge =(props: { route: BaseRoute }) => true',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        getBadge:(props: { route: BaseRoute }) => true
      }
    },
    {
      key: 'BottomNavigationBar style: getColor =(props: { route: BaseRoute }) => "red"',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        getColor:(props: { route: BaseRoute }) => 'red'
      }
    },
    {
      key: 'BottomNavigationBar style: getLabelText =(props: { route: BaseRoute }) => "LabelText"',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        getLabelText:(props: { route: BaseRoute }) => 'LabelText'
      }
    },
    {
      key: 'BottomNavigationBar style: getTestID =(props: { route: BaseRoute }) => "BottomNavigationBar"',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        getTestID:(props: { route: BaseRoute }) => 'BottomNavigationBar'
      }
    },
    {
      key: 'BottomNavigationBar style: onTabPress ={_onTabPress}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        onTabPress:_onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: activeColor ={"red"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        activeColor:'red'
      }
    },
    {
      key: 'BottomNavigationBar style: inactiveColor ={"red"}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        inactiveColor:'red'
      }
    },
    {
      key: 'BottomNavigationBar style: keyboardHidesNavigationBar ={true}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        keyboardHidesNavigationBar:true
      }
    },
    {
      key: 'BottomNavigationBar style: keyboardHidesNavigationBar ={false}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1, routes },
        safeAreaInsets:{top:10,bottom:10},
        keyboardHidesNavigationBar:false
      }
    },
    {
      key: 'BottomNavigationBar style: safeAreaInsets ={top:10,bottom:10}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1,routes},
        safeAreaInsets:{top:10,bottom:10}
      }
    },
    {
      key: 'BottomNavigationBar style: labelMaxFontSizeMultiplier ={1}',
      value: {
        renderScene:renderScene,
        navigationState:{ index:1,routes},
        safeAreaInsets:{top:10,bottom:10},
        labelMaxFontSizeMultiplier:1
      }
    },
  ]

  return (
    <ScrollView>
      <Tester>
     <TestSuite name='BottomNavigation' >
     {BottomNavigationProps.map((item) => {
        return (
          <TestCase  itShould={item.key}  key={item.key} > 
            <View style={{height:160,justifyContent:"center"}}>
            <BottomNavigation
              {...item.value}
            />
            </View>
          </TestCase>
        );
      })}
     {BottomNavigationBarProps.map((item) => {
        return (
          <TestCase  itShould={item.key}  key={item.key} > 
            <View style={{height:160,justifyContent:"center"}}>
            <BottomNavigation.Bar {...item.value}/>
            </View>
          </TestCase>
        );
      })}
     </TestSuite>
    </Tester>
    </ScrollView>
  )
}

export default BottomNavigationDemo;