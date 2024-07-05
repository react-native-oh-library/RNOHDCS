import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as exampleByName from './examples';
import {NavigationContainer, Page} from './components';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import ActivityIndicatorDemo from './paper/examples/ActivityIndicatorDemo';
import AppbarTest from './paper/examples/AppbarDemo';
import AvatarDemo from './paper/examples/AvatarDemo'
import BadgeExample from './paper/examples/BadgeExample';
import BannerExample from './paper/examples/BannerExample';
import ButtonExample from './paper/examples/ButtonExample';
import CardExample from './paper/examples/CardExample';
import CheckboxItemExample from './paper/examples/CheckboxItemExample';
import ChipExample from './paper/examples/ChipExample';
import DataTable from './paper/examples/DataTable';
import Dialog from './paper/examples/Dialog';
import DividerExample from './paper/examples/DividerExample';
import DrawerExample from './paper/examples/DrawerExample'
import FABExample from './paper/examples/FABExample';
import HelperTextExample from './paper/examples/HelperTextExample';
import IconExample from './paper/examples/IconExample';
import IconButtonExample from './paper/examples/IconButtonExample'
import ListAccordionExample from './paper/examples/ListAccordionExample';
import MenuExample from './paper/examples/MenuExample';
import ModalExample from './paper/examples/ModalExample';
import ProgressBarExample from './paper/examples/ProgressBarExample';
import SearchExample from './paper/examples/SearchExample';
import SegmentedButtonExample from './paper/examples/SegmentedButtonExample';
import SnackbarExample from './paper/examples/SnackbarExample';
import SurfaceExample from './paper/examples/SurfaceExample';
import SwitchExample from './paper/examples/SwitchExample';
import TextExample from './paper/examples/TextExample';
import TextInputExample from './paper/examples/TextInputExample';
import ToggleButtonExample from './paper/examples/ToggleButtonExample';
import TooltipExample from './paper/examples/TooltipExample';
import TouchableRippleDemo from './paper/examples/TouchableRippleExample';
import BottomNavigationExample from './paper/examples/BottomNavigationExample';
import RadioButtonExample from './paper/examples/RadioButtonExample';
const {TesterExample, ...remainingExampleByName} = exampleByName;

function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <PortalProvider>
            <View id="__harmony::ready" />
            <Page name="EXAMPLE: ActivityIndicatorDemo">
              <ActivityIndicatorDemo/>
            </Page>
            <Page name="EXAMPLE: AppbarTest">
              <AppbarTest/>
            </Page>
            <Page name="EXAMPLE: AvatarDemo">
              <AvatarDemo/>
            </Page>
            <Page name="EXAMPLE: BadgeExample">
              <BadgeExample/>
            </Page>
            <Page name="EXAMPLE: BannerExample">
              <BannerExample/>
            </Page>
            <Page name="EXAMPLE: ButtonExample">
              <ButtonExample/>
            </Page>
            <Page name="EXAMPLE: CardExample">
              <CardExample/>
            </Page>
            <Page name="EXAMPLE: BottomNavigationExample">
              <BottomNavigationExample/>
            </Page>

            <Page name="EXAMPLE: CheckboxItemExample">
              <CheckboxItemExample/>
            </Page>

            <Page name="EXAMPLE: ChipExample">
              <ChipExample/>
            </Page>

            <Page name="EXAMPLE: DataTable">
              <DataTable/>
            </Page>

            <Page name="EXAMPLE: Dialog">
              <Dialog/>
            </Page>
            <Page name="EXAMPLE: DividerExample">
              <DividerExample/>
            </Page>
            <Page name="EXAMPLE: DrawerExample">
              <DrawerExample/>
            </Page>
            <Page name="EXAMPLE: FABExample">
              <FABExample/>
            </Page>
            <Page name="EXAMPLE: HelperTextExample">
              <HelperTextExample/>
            </Page>
            <Page name="EXAMPLE: IconExample">
              <IconExample/>
            </Page>
            <Page name="EXAMPLE: IconButtonExample">
              <IconButtonExample/>
            </Page>
            <Page name="EXAMPLE: ListAccordionExample">
              <ListAccordionExample/>
            </Page>
            <Page name="EXAMPLE: MenuExample">
              <MenuExample/>
            </Page>
            <Page name="EXAMPLE: ModalExample">
              <ModalExample/>
            </Page>
            <Page name="EXAMPLE: ProgressBarExample">
              <ProgressBarExample/>
            </Page>
            <Page name="EXAMPLE: SegmentedButtonExample">
              <SegmentedButtonExample/>
            </Page>
            <Page name="EXAMPLE: SearchExample">
              <SearchExample/>
            </Page>
            <Page name="EXAMPLE: SegmentedButtonExample">
              <RadioButtonExample/>
            </Page>
            <Page name="EXAMPLE: SnackbarExample">
              <SnackbarExample/>
            </Page>
            <Page name="EXAMPLE: SurfaceExample">
              <SurfaceExample/>
            </Page>
            <Page name="EXAMPLE: SwitchExample">
              <SwitchExample/>
            </Page>
            <Page name="EXAMPLE: TextExample">
              <TextExample/>
            </Page>
            <Page name="EXAMPLE: TextInputExample">
              <TextInputExample/>
            </Page>
            <Page name="EXAMPLE: ToggleButtonExample">
              <ToggleButtonExample/>
            </Page>
            <Page name="EXAMPLE: TooltipExample">
              <TooltipExample/>
            </Page>
            <Page name="EXAMPLE: TouchableRippleDemo">
              <TouchableRippleDemo/>
            </Page>
            <View
              style={[
                StyleSheet.absoluteFill,
                {zIndex: 100, pointerEvents: 'box-none'},
              ]}>
              <PortalHost name="ModalHost" />
            </View>
          </PortalProvider>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
