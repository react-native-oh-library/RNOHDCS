import * as React from 'react';
import {  View,StyleSheet, ScrollView} from 'react-native';
import {Menu,Divider,Button, MD2Colors} from 'react-native-paper';
type MenuVisibility = {
  [key: string]: boolean | undefined;
};

type MenuIcon = {
  [key: string]: string | undefined;
};
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function MenuDemo() { 
  const [visible, setVisible] = React.useState<MenuVisibility>({});
  const [icon, setIcon] = React.useState<MenuIcon>({});

  const _toggleMenu = (name: string) => () =>
  setVisible({ ...visible, [name]: !visible[name] });
  const _getVisible = (name: string) => !!visible[name];
  const _getIcon = (name:string) => !icon[name] ? 'redo' : icon[name];

  const _onPress = (name: string) => () => {
    setIcon({...icon,[name]:icon[name]==='undo' ? 'redo':'undo'})
  }

  const MenuProps = [
    {
      key: ' Menu style:visible={getVisible("menu1")}(点击default Menu可切换visible值为true)',
      value: {
        visible :_getVisible('menu1'),
        onDismiss:_toggleMenu('menu1'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu1')}>default Menu</Button>
      }
    },
    {
      key: ' Menu style:anchor={<Button mode="outlined">Menu with icons</Button>}',
      value: {
        visible :false,
        anchor:<Button mode="outlined">Menu with icons</Button>
      }
    },
    {
      key: ' Menu style:anchorPosition={"top"}',
      value: {
        visible :_getVisible('menu2'),
        onDismiss:_toggleMenu('menu2'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu2')}>default Menu</Button>,
        anchorPosition:'top' as 'top' | 'bottom'
      }
    },
    {
      key: ' Menu style:anchorPosition={"bottom"}',
      value: {
        visible :_getVisible('menu3'),
        onDismiss:_toggleMenu('menu3'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu3')}>default Menu</Button>,
        anchorPosition:'bottom' as 'top' | 'bottom'
      }
    },
    {
      key: ' Menu style:statusBarHeight={"10"}',
      value: {
        visible :_getVisible('menu4'),
        onDismiss:_toggleMenu('menu4'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu4')}>default Menu</Button>,
        statusBarHeight:10
      }
    },
    {
      key: ' Menu style:statusBarHeight={"20"}',
      value: {
        visible :_getVisible('menu5'),
        onDismiss:_toggleMenu('menu5'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu5')}>default Menu</Button>,
        statusBarHeight:20
      }
    },
    {
      key: ' Menu fuction:_toggleMenu("menu5")',
      value: {
        visible :_getVisible('menu5'),
        onDismiss:_toggleMenu('menu5'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu5')}>default Menu</Button>,
      }
    },
    {
      key: ' Menu style:overlayAccessibilityLabel = {"overlay Accessibility Label"}("该属性用于无障碍阅读")',
      value: {
        visible :false,
        anchor:<Button mode="outlined">Menu with icons</Button>,
        overlayAccessibilityLabel:'overlay Accessibility Label'
      }
    },
    {
      key: ' Menu style:contentStyle={backgroundColor:MD2Colors.red100}',
      value: {
        visible :_getVisible('menu6'),
        onDismiss:_toggleMenu('menu6'),
        contentStyle:{backgroundColor:MD2Colors.red100},
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu6')}>default Menu</Button>,
      }
    },
    {
      key: ' Menu style:{backgroundColor:MD2Colors.red100}',
      value: {
        visible :_getVisible('menu7'),
        onDismiss:_toggleMenu('menu7'),
        style:{backgroundColor:MD2Colors.red100},
        contentStyle:{backgroundColor:MD2Colors.red100},
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu7')}>default Menu</Button>,
      }
    },
    {
      key: ' Menu style:mode = {"flat"}',
      value: {
        visible :_getVisible('menu8'),
        onDismiss:_toggleMenu('menu8'),
        mode:'flat' as 'flat' | 'elevated',
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu8')}>default Menu</Button>,
      }
    },
    {
      key: ' Menu style:mode = {"elevated"}',
      value: {
        visible :_getVisible('menu9'),
        onDismiss:_toggleMenu('menu9'),
        mode:'elevated' as 'flat' | 'elevated',
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu9')}>default Menu</Button>,
      }
    },
    {
      key: ' Menu style:mode = { colors: { primary:"green"} }',
      value: {
        visible :_getVisible('menu10'),
        onDismiss:_toggleMenu('menu10'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu10')}>default Menu</Button>,
        theme :{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' Menu style:keyboardShouldPersistTaps = {"always"}',
      value: {
        visible :_getVisible('menu11'),
        onDismiss:_toggleMenu('menu11'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu11')}>default Menu</Button>,
        keyboardShouldPersistTaps: "always" as "always" | "never" | "handled"
      }
    },
    {
      key: ' Menu style:testID = {"Menu1"}',
      value: {
        visible :_getVisible('menu12'),
        onDismiss:_toggleMenu('menu12'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu12')}>default Menu</Button>,
        testID:'Menu1'
      }
    },
    {
      key: ' Menu style:testID = {"Menu2"}',
      value: {
        visible :_getVisible('menu13'),
        onDismiss:_toggleMenu('menu13'),
        anchor:<Button mode="outlined" onPress={_toggleMenu('menu13')}>default Menu</Button>,
        testID:'Menu2'
      }
    },
  ]

  const MenuItemProps = [
    {
      key: ' MenuItem style:title={"Redo"}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
      }
    },
    {
      key: ' MenuItem style:title={"Undo"}',
      value: {
        title:'Undo',
        leadingIcon:'undo',
      }
    },
    {
      key: ' MenuItem style:leadingIcon ={"content-cut"}',
      value: {
        title:'Cut',
        leadingIcon:'content-cut',
      }
    },
    {
      key: ' MenuItem style:trailingIcon={"share-variant"}',
      value: {
        title:'Share',
        trailingIcon:"share-variant"
      }
    },
    {
      key: ' MenuItem style:disabled={true}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        disabled:true,
        onPress:_onPress('MenuItem1'),
      }
    },
    {
      key: ' MenuItem style:disabled={false}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        disabled:false,
        onPress:_onPress('MenuItem2'),
      }
    },
    {
      key: ' MenuItem style:dense={true}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        dense :true,
      }
    },
    {
      key: ' MenuItem style:dense={false}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        dense :false,
      }
    },
    {
      key: ' MenuItem style:background={color:"red"}(该属性仅限制Android)',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        background :{color:'red'},
      }
    },
    {
      key: ' MenuItem function:onPress(点击可更改icon图标)',
      value: {
        title:'Redo',
        leadingIcon:_getIcon('MenuItem3'),
        onPress:_onPress('MenuItem3'),
      }
    },
    {
      key: ' MenuItem style:titleMaxFontSizeMultiplier={1}(该属性用于多设备适配)',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        titleMaxFontSizeMultiplier :1
      }
    },
    {
      key: ' MenuItem style:titleMaxFontSizeMultiplier={2}(该属性用于多设备适配)',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        titleMaxFontSizeMultiplier :2
      }
    },
    {
      key: ' MenuItem style:{backgroundColor:MD2Colors.red100}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        style:{backgroundColor:MD2Colors.red100},
      }
    },
    {
      key: ' MenuItem contentStyle:{backgroundColor:MD2Colors.red100}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        contentStyle:{backgroundColor:MD2Colors.red100},
      }
    },
    {
      key: ' MenuItem style:rippleColor = {MD2Colors.red100}',
      value: {
        title:'Redo',
        leadingIcon:_getIcon('MenuItem4'),
        onPress:_onPress('MenuItem4'),
        rippleColor:MD2Colors.red100
      }
    },
    {
      key: ' MenuItem style:theme ={ colors: { primary: "green" } }',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        theme :{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' MenuItem style:testID ={"MenuItem1"}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        testID :'MenuItem1'
      }
    },
    {
      key: ' MenuItem style:testID ={"MenuItem2"}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        testID :'MenuItem2'
      }
    },
    {
      key: ' MenuItem style:accessibilityLabel ={"accessibility Label"}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        accessibilityLabel :'accessibility Label'
      }
    },
    {
      key: ' MenuItem style:accessibilityLabel ={"accessibility Label1"}',
      value: {
        title:'Redo',
        leadingIcon:'redo',
        accessibilityLabel :'accessibility Label1'
      }
    },
  ]

  return (
    <ScrollView>
       <Tester>
        <TestSuite name='MenuDemo' >
        {MenuProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
              <View style={styles.alignCenter}>
                <Menu {...item.value}>
                    <Menu.Item onPress={() => {}} title="Undo" />
                    <Menu.Item onPress={() => {}} title="Redo" />
                    <Divider style={styles.md3Divider} />
                    <Menu.Item onPress={() => {}} title="Cut" disabled />
                    <Menu.Item onPress={() => {}} title="Copy" disabled />
                    <Menu.Item onPress={() => {}} title="Paste" />
                  </Menu>
              </View>
              </TestCase>
            );
          })},
          {MenuItemProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <View style={{ flex: 1 }}>
                  <Menu.Item {...item.value}/>
                </View>
              </TestCase>
            );
          })},
        </TestSuite>
      </Tester>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor:'#fff',
    flex: 1,
  },
  container: {
    paddingTop: 48,
  },
  list: {
    marginTop: 48,
  },
  alignCenter: {
    alignItems: 'center',
  },
  md3Divider: {
    marginVertical: 8,
  },
  bottomMenu: { width: '40%' },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default MenuDemo;