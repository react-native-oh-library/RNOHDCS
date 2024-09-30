import React from 'react';
import { ScrollView, View } from 'react-native';
import ButtonAntTest from './ButtonAntTest';
import IconAntTest from './IconAntTest';
import AccordionTest from './AccordionTest';
import ActionSheetTest from './ActionSheetTest';
import CardTest from './CardTest';
import ListTest from './ListTest';
import ListViewTest from './ListViewTest';
import ModalTest from './ModalTest';
import PopoverTest from './PopoverTest';
import PortalTest from './PortalTest';
import ResultTest from './ResultTest';
import ActivityIndicatorTest from './ActivityIndicatorTest';
import BadgeTest from './BadgeTest';
import CarouselTest from './CarouselTest';
import TabBarTest from './TabBarTest';
import SearchBarTest from './SearchBarTest';
import NoticeBarTest from './NoticeBarTest';
import WingBlankTest from './WingBlankTest';
import WhiteSpaceTest from './WhiteSpaceTest';
import ViewTest from './ViewTest';
import GridTest from './GridTest';
import FlexTest from './FlexTest';
import TextareaItemTest from './TextareaItemTest';
import TagsTest from './TagsTest';
import TabsTest from './TabsTest';
import { SwipeActionTest } from './SwipeActionTest';
import SwitchTest from './SwitchTest';
import StepsTest from './StepsTest';
import StepperTest from './StepperTest';
import SliderAntTest from './SliderAntTest';
import RadioTest from './RadioTest';
import PaginationTest from './PaginationTest';
import ProgressTest from './ProgressTest';
import PickerViewTest from './PickerViewTest';
import PickerTest from './PickerTest';
import InputItemTest from './InputItemTest';
import DatePickerViewTest from './DatePickerViewTest';
import DatePickerTest from './DatePickerTest';
import CheckboxTest from './CheckboxTest';
import ToastTest from './ToastTest';
import LocaleProviderTest from './LocaleProviderTest';
import CollapseTest from './CollapseTest';
import InputTest from './InputTest';
import FormTest from './FormTest';
import TooltipTest from './TooltipTest';
import { NavigationContainer, Page } from '../../components';
import { Tester } from '@rnoh/testerino';
import { Provider, Tooltip } from '@ant-design/react-native';

export function AntDesignMobile() {
  return (
    <Provider>
      <NavigationContainer>
        <ScrollView {...Tooltip.scrollProps} keyboardShouldPersistTaps="always">
          <Tester>
            <Page name='1.Button'><ButtonAntTest /></Page>
            <Page name='2.Accordion'><AccordionTest /></Page>
            <Page name='3.ActionSheet'><ActionSheetTest /></Page>
            <Page name='4.Card'><CardTest /></Page>
            <Page name='5.List'><ListTest /></Page>
            <Page name='6.Result'><ResultTest /></Page>
            <Page name='7.Toast'><ToastTest /></Page>
            <Page name='8.ActivityIndicator'><ActivityIndicatorTest /></Page>
            <Page name='9.Badge'><BadgeTest /></Page>
            <Page name='10.TabBar'><TabBarTest /></Page>
            <Page name='11.SearchBar'><SearchBarTest /></Page>
            <Page name='12.NoticeBar'><NoticeBarTest /></Page>
            <Page name='13.WingBlank'><WingBlankTest /></Page>
            <Page name='14.WhiteSpace'><WhiteSpaceTest /></Page>
            <Page name='15.View'><ViewTest /></Page>
            <Page name='16.Grid'><GridTest /></Page>
            <Page name='17.Flex'><FlexTest /></Page>
            <Page name='18.TextareaItem'><TextareaItemTest /></Page>
            <Page name='19.Tags'><TagsTest /></Page>
            <Page name='20.Switch'><SwitchTest /></Page>
            <Page name='21.Stepper'><StepperTest /></Page>
            <Page name='22.Radio'><RadioTest /></Page>
            <Page name='23.Pagination'><PaginationTest /></Page>
            <Page name='24.Progress'><ProgressTest /></Page>
            <Page name='25.InputItem'><InputItemTest /></Page>
            <Page name='26.Checkbox'><CheckboxTest /></Page>
            <Page name='27.Steps'><StepsTest /></Page>
            <Page name='28.Carousel'><CarouselTest /></Page>
            <Page name='29.Portal'><PortalTest /></Page>
            <Page name='30.LocaleProvider'><LocaleProviderTest /></Page>
            <Page name='31.DatePickerView'><DatePickerViewTest /></Page>
            <Page name='32.Icon'><IconAntTest /></Page>
            <Page name='33.DatePicker'><DatePickerTest /></Page>
            <Page name='34.Picker'><PickerTest /></Page>
            <Page name='35.PickerView'><PickerViewTest /></Page>
            <Page name='36.Tabs'><TabsTest /></Page>
            <Page name='37.Modal'><ModalTest /></Page>
            <Page name='38.Slider'><SliderAntTest /></Page>
            <Page name='39.ListView'><ListViewTest /></Page>
            <Page name='40.Popover'><PopoverTest /></Page>
            <Page name='41.SwipeAction'><SwipeActionTest /></Page>
            <Page name='42.Collapse'><CollapseTest /></Page>
            <Page name='43.Input'><InputTest /></Page>
            <Page name='44.Form'><FormTest /></Page>
            <Page name='45.Tooltip'><TooltipTest /></Page>
          </Tester>
        </ScrollView>
      </NavigationContainer>
    </Provider>
  )
}