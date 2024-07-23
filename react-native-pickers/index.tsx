
import { SafeAreaView, View,StyleSheet} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import {DatePickerExample} from './DatepickerDemo';
import {AlertDialogExample} from './AlertDialogDemo';
import {AreaPickerExample} from './AreaPickerDemo';
import {CustomPickerExample} from './CustomPickerDemo';
import {DownloadDialogExample} from './DownloadDialogDemo';
import {InputDialogExample} from './InputDialogDemo';
import {PickerViewExample} from './PickerViewDemo';
import {SimpleChooseDialogExample} from './SimpleChooseDialogDemo';
import {SimpleItemsDialogExample} from './SimpleItemsDialogDemo';
import {ToastComponentExample} from './ToastComponentDemo';
import {BaseComponentExample} from './BaseComponentDemo';
import {BaseDialogExample} from './BaseDialogDemo';

export function PickersExample() {

  return(
    <View style={{backgroundColor: 'black'}}>
        <NavigationContainer>
            <PortalProvider>
              <Page name ='AlertDialogExample'>
                <AlertDialogExample></AlertDialogExample>
              </Page>
              <Page name ='AreaPickerExample'>
                <AreaPickerExample></AreaPickerExample>
              </Page>
              <Page name ='CustomPickerExample'>
                <CustomPickerExample></CustomPickerExample>
              </Page>
              <Page name ='DownloadDialogExample'>
                <DownloadDialogExample></DownloadDialogExample>
              </Page>
              <Page name ='InputDialogExample'>
                <InputDialogExample></InputDialogExample>
              </Page>
              <Page name ='PickerViewExample'>
                <PickerViewExample></PickerViewExample>
              </Page>
              <Page name ='DatePickerExample'>
                <DatePickerExample></DatePickerExample>
              </Page>
              <Page name ='SimpleChooseDialogExample'>
                <SimpleChooseDialogExample></SimpleChooseDialogExample>
              </Page>
              <Page name ='SimpleItemsDialogExample'>
                <SimpleItemsDialogExample></SimpleItemsDialogExample>
              </Page>
              <Page name ='ToastComponentExample'>
                <ToastComponentExample></ToastComponentExample>
              </Page>
              <Page name ='BaseComponentExample'>
                <BaseComponentExample></BaseComponentExample>
              </Page>
              <Page name ='BaseDialogExample'>
                <BaseDialogExample></BaseDialogExample>
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
    </View>
  )
}