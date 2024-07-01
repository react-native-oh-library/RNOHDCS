import React from 'react';
import { ScrollView } from 'react-native';
import ButtonAntTest from './ButtonAntTest';
import IconAntTest from './IconAntTest';
import AccordionTest from './AccordionTest';
import ActionSheetTest from './ActionSheetTest';
import CardTest from './CardTest';
import DrawerTest from './DrawerTest';
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
import SegmentedControlTest from './SegmentedControlTest';
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
import { NavigationContainer, Page } from '../../components';

export function AntDesignMobile() {
  return (
    <NavigationContainer>
      <ScrollView nestedScrollEnabled={true}>
        <Page name='ButtonAntTest'><ButtonAntTest /></Page>
        <Page name='AccordionTest'><AccordionTest /></Page>
        <Page name='ActionSheetTest'><ActionSheetTest /></Page>
        <Page name='CardTest'><CardTest /></Page>
        <Page name='ListTest'><ListTest /></Page>
        <Page name='ResultTest'><ResultTest /></Page>
        <Page name='ToastTest'><ToastTest /></Page>
        <Page name='ActivityIndicatorTest'><ActivityIndicatorTest /></Page>
        <Page name='BadgeTest'><BadgeTest /></Page>
        <Page name='TabBarTest'><TabBarTest /></Page>
        <Page name='SearchBarTest'><SearchBarTest /></Page>
        <Page name='NoticeBarTest'><NoticeBarTest /></Page>
        <Page name='WingBlankTest'><WingBlankTest /></Page>
        <Page name='WhiteSpaceTest'><WhiteSpaceTest /></Page>
        <Page name='ViewTest'><ViewTest /></Page>
        <Page name='GridTest'><GridTest /></Page>
        <Page name='FlexTest'><FlexTest /></Page>
        <Page name='TextareaItemTest'><TextareaItemTest /></Page>
        <Page name='TagsTest'><TagsTest /></Page>
        <Page name='SwitchTest'><SwitchTest /></Page>
        <Page name='StepperTest'><StepperTest /></Page>
        <Page name='RadioTest'><RadioTest /></Page>
        <Page name='PaginationTest'><PaginationTest /></Page>
        <Page name='ProgressTest'><ProgressTest /></Page>
        <Page name='InputItemTest'><InputItemTest /></Page>
        <Page name='CheckboxTest'><CheckboxTest /></Page>
        <Page name='StepsTest'><StepsTest /></Page>
        <Page name='CarouselTest'><CarouselTest /></Page>
        <Page name='PortalTest'><PortalTest /></Page>
        <Page name='LocaleProviderTest'><LocaleProviderTest /></Page>
        <Page name='DatePickerViewTest'><DatePickerViewTest /></Page>
        <Page name='IconAntTest'><IconAntTest /></Page>
        <Page name='SegmentedControlTest'><SegmentedControlTest /></Page>
        <Page name='DatePickerTest'><DatePickerTest /></Page>
        <Page name='PickerTest'><PickerTest /></Page>
        <Page name='PickerViewTest'><PickerViewTest /></Page>
        <Page name='TabsTest'><TabsTest /></Page>
        <Page name='ModalTest'><ModalTest /></Page>

        <Page name='SwipeActionTest'><SwipeActionTest /></Page>
        <Page name='DrawerTest'><DrawerTest /></Page>
        <Page name='SliderAntTest'><SliderAntTest /></Page>
        <Page name='PopoverTest'><PopoverTest /></Page>
        <Page name='ListViewTest'><ListViewTest /></Page>
      </ScrollView>
    </NavigationContainer>
  )
}