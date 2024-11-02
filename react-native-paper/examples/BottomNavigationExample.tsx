import * as React from 'react';
import { BottomNavigation, BottomNavigationProps, Icon, MD2Colors, MD3Colors, Text, useTheme } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { Easing, ScrollView, View, TextInput } from 'react-native';
import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';
import { NavigationContainer, Page } from '../componets'
import { PortalProvider } from '@gorhom/portal';


const ColorCard: React.FC<{ color: string, text: string, showTextInput?: boolean }> = (props) => {

  return (
    <ScrollView style={{ width: '100%', gap: 20, padding: 8 }}>
      {
        props?.showTextInput &&
        <TextInput value='' style={{ borderWidth: 1, height: 36 }}></TextInput>
      }
      {
        Array.from({ length: 5 }).map((index: any) => <>
          <View style={{ backgroundColor: props.color, height: 100, borderRadius: 10, width: '100%', marginVertical: 10, justifyContent: 'center' }}>
            <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>{props.text}</Text>
          </View>
        </>)
      }
    </ScrollView>
  );
}

const MusicRoute1 = () => <Text>Music</Text>;
const AlbumsRoute1 = () => <Text>Albums</Text>;
const RecentsRoute1 = () => <Text>Recents</Text>;
const NotificationsRoute1 = () => <Text>Notifications</Text>;
const MusicRoute = () => <ColorCard color='red' text='Favorites'></ColorCard>;
const AlbumsRoute = () => <ColorCard color='blue' text='Ablunms'></ColorCard>;;
const RecentsRoute = () => <ColorCard color='pink' text='Recents'></ColorCard>;
const NotificationsRoute = () => <ColorCard color='#546e95' text='Notifications'></ColorCard>;

type BottomNavigationIndex = {
  [key: string]: number;
};


function BottomNavigationDemo() {

  const [index, setIndex] = React.useState<BottomNavigationIndex>({});
  const _getIndex = (name: string) => index[name] ? index[name] : 0;
  const _changeIndex = (name: string) => (num: number) => {
    console.info('--------' + num)
    setIndex({ ...index, [name]: num });
  }

  const [routes] = React.useState<BaseRoute[]>([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album', badge: 3 },
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
        navigationState: { index: _getIndex('BottomNavigation'), routes: routes },
        shifting: true,
        renderScene: renderScene,
        onIndexChange: _changeIndex('BottomNavigation')
      }
    },
    {
      key: 'BottomNavigation style: shifting ={false}',
      value: {
        navigationState: { index: _getIndex('BottomNavigation1'), routes: routes },
        shifting: false,
        renderScene: renderScene,
        onIndexChange: _changeIndex('BottomNavigation1')
      }
    },
    {
      key: 'BottomNavigation style: labeled ={false}',
      value: {
        navigationState: { index: _getIndex('BottomNavigation2'), routes: routes },
        labeled: false,
        renderScene: renderScene,
        onIndexChange: _changeIndex('BottomNavigation2')
      }
    },
    {
      key: 'BottomNavigation style: labeled ={true}',
      value: {
        navigationState: { index: _getIndex('BottomNavigation3'), routes: routes },
        labeled: true,
        renderScene: renderScene,
        onIndexChange: _changeIndex('BottomNavigation3')
      }
    },
    {
      key: 'BottomNavigation style: renderScene ={renderScene}',
      value: {
        labeled: true,
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation4'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation4')
      }
    },
    {
      key: 'BottomNavigation fuction: onIndexChange ={_changeIndex("BottomNavigation5") }',
      value: {
        labeled: true,
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation5'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation5')
      }
    },
    {
      key: 'BottomNavigation fuction: renderLabel ={ <Text variant="displayLarge">Display Large</Text>}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation6'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation6'),
        renderLabel: (props: { focused: boolean; color: string; }) => <Text variant="labelSmall">Label Small</Text>
      }
    },
    {
      key: 'BottomNavigation fuction: renderIcon ={<Icon source="camera" color={MD3Colors.error50} size={20} />}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation6'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation6'),
        renderIcon: (props: { focused: boolean; color: string; }) => <Icon source="camera" color={MD3Colors.error50} size={20} />
      }
    },
    {
      key: 'BottomNavigation fuction: renderTouchable ={<Icon source="camera" color={MD3Colors.error50} size={20} />}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation6'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation6'),
        renderTouchable: () => <Icon source="camera" color={MD3Colors.error50} size={20} />
      }
    },
    {
      key: 'BottomNavigation fuction: getAccessibilityLabel ={(props: { route: BaseRoute }) => "AccessibilityLabel"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation7'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation7'),
        getAccessibilityLabel: (props: { route: BaseRoute }) => 'AccessibilityLabel'
      }
    },
    {
      key: 'BottomNavigation fuction: getBadge ={(props: { route: BaseRoute }) => 999}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation7'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation7'),
        getBadge: (props: { route: BaseRoute }) => {
          if (props.route.key === 'albums') {
            return 99;
          }
          return props.route.badge;
        }
      }
    },
    {
      key: 'BottomNavigation fuction: getBadge ={(props: { route: BaseRoute }) => "..."}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation8'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation8'),
        getBadge: (props: { route: BaseRoute }) => '...'
      }
    },
    {
      key: 'BottomNavigation fuction: getBadge ={(props: { route: BaseRoute }) => true}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation8'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation8'),
        getBadge: (props: { route: BaseRoute }) => true
      }
    },
    {
      key: 'BottomNavigation fuction: getColor ={(props: { route: BaseRoute }) =>"red"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation9'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation9'),
        activeColor: 'red',
        getColor: (props: { route: BaseRoute }) => 'red'
      }
    },
    {
      key: 'BottomNavigation fuction: getLabelText ={(props: { route: BaseRoute }) => labeText}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation10'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation10'),
        getLabelText: (props: { route: BaseRoute }) => 'labeText'
      }
    },
    {
      key: 'BottomNavigation fuction: getLazy ={(props: { route: BaseRoute }) => true}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation11'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation11'),
        getLazy: (props: { route: BaseRoute }) => {
          console.log(`==== getLazy: ${JSON.stringify(props.route)} ======`);
          return true;
        }
      }
    },
    {
      key: 'BottomNavigation fuction: getTestID ={(props: { route: BaseRoute }) => BottomNavigation}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation12'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation12'),
        getTestID: (props: { route: BaseRoute }) => "BottomNavigation"
      }
    },
    {
      key: 'BottomNavigation fuction: onTabPress = {_onTabPress}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation13'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation13'),
        onTabPress: _onTabPress,
      }
    },
    {
      key: 'BottomNavigation fuction: onTabLongPress ={_onTabLongPress}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation14'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation14'),
        onTabLongPress: _onTabLongPress,
      }
    },
    {
      key: 'BottomNavigation style: inactiveColor ={"red"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation15'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation15'),
        inactiveColor: "red",
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationEnabled ={true}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation16'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation16'),
        sceneAnimationEnabled: true,
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationEnabled ={false}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation17'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation17'),
        sceneAnimationEnabled: false,
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationType ={"opacity"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation18'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation18'),
        sceneAnimationType: 'opacity' as 'opacity' | 'shifting',
      }
    },
    {
      key: 'BottomNavigation style: sceneAnimationType ={"shifting"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation19'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation19'),
        sceneAnimationType: 'shifting' as 'opacity' | 'shifting',
      }
    },
    {
      key: 'BottomNavigation style: safeAreaInsets ={top:10,bottom:10}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation22'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation22'),
        safeAreaInsets: { top: 10, bottom: 10 },
      }
    },
    {
      key: 'BottomNavigation style: barStyle ={ backgroundColor: "#694fad"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation23'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation23'),
        barStyle: { backgroundColor: '#694fad' }
      }
    },
    {
      key: 'BottomNavigation style: labelMaxFontSizeMultiplier ={1}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation24'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation24'),
        labelMaxFontSizeMultiplier: 1
      }
    },
    {
      key: 'BottomNavigation style: labelMaxFontSizeMultiplier ={2}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation25'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation25'),
        labelMaxFontSizeMultiplier: 2
      }
    },
    {
      key: 'BottomNavigation style: style ={backgroundColor:MD2Colors.yellow500}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation26'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation26'),
        style: { backgroundColor: MD2Colors.yellow500, padding: 30 }
      }
    },
    {
      key: 'BottomNavigation style: activeIndicatorStyle ={backgroundColor:MD2Colors.yellow500}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation27'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation27'),
        activeIndicatorStyle: { backgroundColor: MD2Colors.yellow500 }
      }
    },
    {
      key: 'BottomNavigation style: theme ={ colors: { primary:"green"} }',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation28'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation28'),
        theme: { colors: { primary: 'green' } }
      }
    },
    {
      key: 'BottomNavigation style: testID ={"BottomNavigation"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation29'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation29'),
        testID: 'BottomNavigation'
      }
    },
    {
      key: 'BottomNavigation style: compact ={true}',
      value: {
        renderScene: renderScene,
        compact: true,
        navigationState: { index: _getIndex('BottomNavigation30'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation30'),
        testID: 'BottomNavigation'
      }
    },
    {
      key: 'BottomNavigation style: compact ={false}',
      value: {
        renderScene: renderScene,
        compact: false,
        navigationState: { index: _getIndex('BottomNavigation30'), routes: routes },
        onIndexChange: _changeIndex('BottomNavigation30'),
        testID: 'BottomNavigation'
      }
    }
  ]

  const BottomNavigationBarProps = [
    {
      key: 'BottomNavigationBar style: shifting ={true}',
      value: {
        shifting: true,
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: shifting ={false}',
      value: {
        shifting: false,
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: labeled ={true}',
      value: {
        labeled: true,
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: labeled ={false}',
      value: {
        labeled: false,
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: compact ={false}',
      value: {
        compact: false,
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: compact ={true}',
      value: {
        compact: true,
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: navigationState ={index:1, routes }',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: getBadge =(props: { route: BaseRoute }) => 999',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress,
        getBadge: (props: { route: BaseRoute }) => 999
      }
    },
    {
      key: 'BottomNavigationBar style: getBadge =(props: { route: BaseRoute }) => "..."',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress,
        getBadge: (props: { route: BaseRoute }) => '...'
      }
    },
    {
      key: 'BottomNavigationBar style: getBadge =(props: { route: BaseRoute }) => true',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress,
        getBadge: (props: { route: BaseRoute }) => true
      }
    },
    {
      key: 'BottomNavigationBar style: getColor =(props: { route: BaseRoute }) => "red"',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        getColor: (props: { route: BaseRoute }) => 'red',
        shifting: true,
        onTabPress: _onTabPress,
        theme: { isV3: false }
      }
    },
    {
      key: 'BottomNavigationBar style: getLabelText =(props: { route: BaseRoute }) => "LabelText"',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress,
        getLabelText: (props: { route: BaseRoute }) => 'LabelText'
      }
    },
    {
      key: 'BottomNavigationBar style: getTestID =(props: { route: BaseRoute }) => "BottomNavigationBar"',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress,
        getTestID: (props: { route: BaseRoute }) => 'BottomNavigationBar'
      }
    },
    {
      key: 'BottomNavigationBar style: onTabPress ={_onTabPress}',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress
      }
    },
    {
      key: 'BottomNavigationBar style: activeColor ={"red"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: () => { },
        activeColor: 'red'
      }
    },
    {
      key: 'BottomNavigationBar style: inactiveColor ={"red"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        inactiveColor: 'red',
        onTabPress: () => { }
      }
    },
    {
      key: 'BottomNavigationBar style: safeAreaInsets ={top:10,bottom:10}',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        onTabPress: _onTabPress,
      }
    },
    {
      key: 'BottomNavigationBar style: labelMaxFontSizeMultiplier ={1}',
      value: {
        renderScene: renderScene,
        navigationState: { index: 1, routes },
        safeAreaInsets: { top: 10, bottom: 10 },
        labelMaxFontSizeMultiplier: 1,
        onTabPress: _onTabPress,
      }
    },
    {
      key: 'BottomNavigationBar fuction: renderLabel ={ <Text variant="displayLarge">Display Large</Text>}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation6'), routes: routes },
        // onIndexChange: _changeIndex('BottomNavigation6'),
        renderLabel: (props: { focused: boolean; color: string; }) => <Text variant="labelSmall">Label Small</Text>,
        onTabPress: _onTabPress,
      }
    },
    {
      key: 'BottomNavigationBar fuction: renderIcon ={<Icon source="camera" color={MD3Colors.error50} size={20} />}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation6'), routes: routes },

        renderIcon: (props: { focused: boolean; color: string; }) => <Icon source="camera" color={MD3Colors.error50} size={20} />,
        onTabPress: _onTabPress,
      }
    },
    {
      key: 'BottomNavigationBar fuction: renderTouchable ={<Icon source="camera" color={MD3Colors.error50} size={20} />}',
      value: {
        renderScene: renderScene,
        onTabPress: _onTabPress,
        navigationState: { index: _getIndex('BottomNavigation6'), routes: routes },

        renderTouchable: (porps) => <Icon source="close" color={MD3Colors.error50} size={20} />
      }
    },
    {
      key: 'BottomNavigationBar fuction: getAccessibilityLabel ={(props: { route: BaseRoute }) => "AccessibilityLabel"}',
      value: {
        renderScene: renderScene,
        onTabPress: _onTabPress,
        navigationState: { index: _getIndex('BottomNavigation7'), routes: routes },

        getAccessibilityLabel: (props: { route: BaseRoute }) => 'AccessibilityLabel'
      }
    },
    {
      key: 'BottomNavigationBar style: activeIndicatorStyle ={backgroundColor:MD2Colors.yellow500}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation277'), routes: routes },
        activeIndicatorStyle: { backgroundColor: MD2Colors.yellow500 },
        onTabPress: _onTabPress,
      }
    },
    {
      key: 'BottomNavigationBar style: style ={ backgroundColor: "#694fad"}',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation277'), routes: routes },
        style: { backgroundColor: '#694fad' },
        onTabPress: _onTabPress,
      }
    },
    {
      key: 'BottomNavigationBar style: testID = barId_01',
      value: {
        renderScene: renderScene,
        navigationState: { index: _getIndex('BottomNavigation277'), routes: routes },
        onTabPress: _onTabPress,
        testID: 'barId_01'
      }
    },
  ]

  return (
    <ScrollView>
      <Tester>
        <TestSuite name='BottomNavigation' >
          {BottomNavigationProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key}
                modal={true} >
                <View style={{ height: 500, justifyContent: "center" }}>
                  <BottomNavigation
                    // style={{height: 600, width: '100%'}}
                    {...item.value}
                  />
                </View>
              </TestCase>
            );
          })}
          {BottomNavigationBarProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} modal={true} >
                <View style={{ height: 160, justifyContent: "center" }}>
                  <BottomNavigation.Bar {...item.value} />
                </View>
              </TestCase>
            );
          })}
        </TestSuite>
      </Tester>
    </ScrollView>
  )
}


type BasicBottomNaviationPorps = Omit<BottomNavigationProps<BaseRoute>, 'navigationState' | 'onIndexChange' | 'renderScene'>

const BottomNavigationDemoBasic: React.FC<BasicBottomNaviationPorps & {
  showTextInput?: boolean
}> = (props) => {

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState<BaseRoute[]>([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album', badge: 3 },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const MusicRoute_ = () => <ColorCard color='red' text='Favorites' showTextInput={props.showTextInput}></ColorCard>;
  const AlbumsRoute_ = () => <ColorCard color='blue' text='Ablunms' showTextInput={props.showTextInput}></ColorCard>;;
  const RecentsRoute_ = () => <ColorCard color='pink' text='Recents' showTextInput={props.showTextInput}></ColorCard>;
  const NotificationsRoute_ = () => <ColorCard color='#546e95' text='Notifications' showTextInput={props.showTextInput}></ColorCard>;

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute_,
    albums: AlbumsRoute_,
    recents: RecentsRoute_,
    notifications: NotificationsRoute_,
  })

  return (
    <View style={{  height: 500 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        // shifting={true}
        theme={{ animation: { scale: 5 } }}
        // sceneAnimationEnabled={true}
        sceneAnimationType='shifting'
        sceneAnimationEasing={Easing.linear}
        {...props}
      />
    </View>
  );
}

export default function () {
  return <NavigationContainer>
    <PortalProvider>
      <Page name='NavigationButtom testCase'>
        <BottomNavigationDemo></BottomNavigationDemo>
      </Page>
      <Page name='用例补充'>
        <ScrollView>
          <Tester>
            <TestSuite name='补充用例'>
              <TestCase itShould='NavigationButtom sceneAnimationEnabled: ture' modal>
                <BottomNavigationDemoBasic sceneAnimationEnabled={true}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom sceneAnimationEnabled: false' modal>
                <BottomNavigationDemoBasic sceneAnimationEnabled={false}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom sceneAnimationEasing: Easing.linear' modal>
                <BottomNavigationDemoBasic sceneAnimationEasing={Easing.linear}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom sceneAnimationEasing: Easing.cubic' modal>
                <BottomNavigationDemoBasic sceneAnimationEasing={Easing.cubic}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom theme: {animation: { scale: 1} }' modal>
                <BottomNavigationDemoBasic theme={{ animation: { scale: 1 } }}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom theme: {animation: { scale: 5} }' modal>
                <BottomNavigationDemoBasic theme={{ animation: { scale: 5 } }}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom keyboardHidesNavigationBar={true}' modal>
                <BottomNavigationDemoBasic keyboardHidesNavigationBar={true} showTextInput={true}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom keyboardHidesNavigationBar={false}' modal>
                <BottomNavigationDemoBasic keyboardHidesNavigationBar={false} showTextInput={true}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom safeAreaInsets = {bottom: 0}' modal>
                <BottomNavigationDemoBasic safeAreaInsets={{ bottom: 0 }}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom safeAreaInsets = {bottom: 100}' modal>
                <BottomNavigationDemoBasic safeAreaInsets={{ bottom: 100 }}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom safeAreaInsets = {bottom: 0, left: 100}' modal>
                <BottomNavigationDemoBasic safeAreaInsets={{ bottom: 0, left: 100 }}></BottomNavigationDemoBasic>
              </TestCase>
              <TestCase itShould='NavigationButtom safeAreaInsets = {bottom: 0, left: 60, right: 50} 左右会选最大值' modal>
                <BottomNavigationDemoBasic safeAreaInsets={{ bottom: 0, left: 60, right: 50 }}></BottomNavigationDemoBasic>
              </TestCase>
            </TestSuite>
          </Tester>
        </ScrollView>
      </Page>
    </PortalProvider>
  </NavigationContainer>
};