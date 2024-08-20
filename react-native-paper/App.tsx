import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {NavigationContainer, Page} from './componets';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import ActivityIndicatorDemo from './examples/ActivityIndicatorDemo';
import AppbarTest from './examples/AppbarDemo';
import AvatarDemo from './examples/AvatarDemo'
import BadgeExample from './examples/BadgeExample';
import BannerExample from './examples/BannerExample';
import ButtonExample from './examples/ButtonExample';
import CardExample from './examples/CardExample';
import CheckboxItemExample from './examples/CheckboxItemExample';
import ChipExample from './examples/ChipExample';
import DataTable from './examples/DataTable';
import Dialog from './examples/Dialog';
import DividerExample from './examples/DividerExample';
import DrawerExample from './examples/DrawerExample'
import FABExample from './examples/FABExample';
import HelperTextExample from './examples/HelperTextExample';
import IconExample from './examples/IconExample';
import IconButtonExample from './examples/IconButtonExample'
import ListAccordionExample from './examples/ListAccordionExample';
import MenuExample from './examples/MenuExample';
import ModalExample from './examples/ModalExample';
import ProgressBarExample from './examples/ProgressBarExample';
import SearchExample from './examples/SearchExample';
import SegmentedButtonExample from './examples/SegmentedButtonExample';
import SnackbarExample from './examples/SnackbarExample';
import SurfaceExample from './examples/SurfaceExample';
import SwitchExample from './examples/SwitchExample';
import TextExample from './examples/TextExample';
import TextInputExample from './examples/TextInputExample';
import ToggleButtonExample from './examples/ToggleButtonExample';
import TooltipExample from './examples/TooltipExample';
import TouchableRippleDemo from './examples/TouchableRippleExample';
import BottomNavigationExample from './examples/BottomNavigationExample';
import RadioButtonExample from './examples/RadioButtonExample';
import PortalDemo from './examples/PortalDemo';

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
            <Page name="EXAMPLE: PortalDemo">
              <PortalDemo/>
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
            <Page name="EXAMPLE: RadioButtonExample">
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