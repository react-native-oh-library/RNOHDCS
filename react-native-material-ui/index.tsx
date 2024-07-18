
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, Page } from "./components/navitagiton"
import ActionButtonDemo from "./components/ActionButton"
import AvatarDemo from './components/Avatar';
import {ScrollView } from 'react-native';
import BadgeDemo from './components/Badge';
import IconDemo from './components/Icon'
import BottomNavigationDome from './components/BottomNavigation'
import ButtonDemo from './components/Button';
import CardDemo from './components/Card';
import CheckboxDemo from './components/Checkbox';
import DialogDemo from './components/Dialog';
import DividerDemo from './components/Divider';
import DrawerDemo from './components/Drawer';
import ListItemDemo from './components/ListItem';
import SnackbarDemo from './components/Snackbar';
import SubheaderDemo from './components/Subheader';
import ToolbarDemo from './components/Toolbar';
import { COLOR, getTheme, ThemeContext } from 'react-native-material-ui';
import IconToggleDemo from './components/IconToggle';
export const MaterialUiDemo = () => {
  const uiTheme = {
    palette: {
      primaryColor: COLOR.blue300,
    },
    toolbar: {
      container: {
        height: 50
      },
    }
  };
  return (
<ThemeContext.Provider value={getTheme(uiTheme)}>
    <Tester>
      <TestCase tags={['C_API']} itShould="material-ui">
      
        <NavigationContainer>
      
          <Page name="ActionButton">
            <ActionButtonDemo />
          </Page>
          <Page name="Avatar">
            <AvatarDemo />
          </Page>
          <Page name="Badge">
            <BadgeDemo></BadgeDemo>
          </Page>
          <Page name="Icon">
            <IconDemo></IconDemo>
          </Page>
          <Page name="IconToggle">
            <IconToggleDemo></IconToggleDemo>
          </Page>
          <Page name="BottomNavigation">
            <BottomNavigationDome></BottomNavigationDome>
          </Page>
          <Page name="ButtonDemo">
            <ButtonDemo></ButtonDemo>
          </Page>
          <Page name="CardDemo">
            <CardDemo></CardDemo>
          </Page>
          <Page name="CheckboxDemo">
            <CheckboxDemo></CheckboxDemo>
          </Page>
          <Page name="DialogDemo">
            <DialogDemo></DialogDemo>
          </Page>
          <Page name="DividerDemo">
            <DividerDemo></DividerDemo>
          </Page>
          <Page name="DrawerDemo">
            <DrawerDemo></DrawerDemo>
          </Page>
          <Page name="ListItemDemo">
            <ListItemDemo></ListItemDemo>
          </Page>
          <Page name="SnackbarDemo">
            <SnackbarDemo></SnackbarDemo>
          </Page>
          <Page name="SubheaderDemo">
            <SubheaderDemo></SubheaderDemo>
          </Page>
          <Page name="ToolbarDemo">
            <ToolbarDemo></ToolbarDemo>
          </Page>
        </NavigationContainer>
     
      </TestCase>
    </Tester>
    </ThemeContext.Provider>
  )
}