import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from './nativeBaseUiTest/Button';
import Input from './nativeBaseUiTest/Input';
import AspectRatio from './nativeBaseUiTest/AspectRatio';
import Box from './nativeBaseUiTest/Box';
import Flex from './nativeBaseUiTest/Flex';
import HStack from './nativeBaseUiTest/HStack';
import VStack from './nativeBaseUiTest/VStack';
import Stack from './nativeBaseUiTest/Stack';
import ZStack from './nativeBaseUiTest/ZStack';
import Pressable from './nativeBaseUiTest/Pressable';
import CheckBox from './nativeBaseUiTest/CheckBox';
import FormControl from './nativeBaseUiTest/FormControl';
import IconButton from './nativeBaseUiTest/IconButton';
import Link from './nativeBaseUiTest/Link';
import Icon from './nativeBaseUiTest/Icon';
import Radio from './nativeBaseUiTest/Radio';
import Select from './nativeBaseUiTest/Select';
import Slider from './nativeBaseUiTest/Slider';
import Switch from './nativeBaseUiTest/Switch';
import TextArea from './nativeBaseUiTest/TextArea';
import Badge from './nativeBaseUiTest/Badge';
import Divider from './nativeBaseUiTest/Divider';
import Alert from './nativeBaseUiTest/Alert';
import Progress from './nativeBaseUiTest/Progress';
import Skeleton from './nativeBaseUiTest/Skeleton';
import Spinner from './nativeBaseUiTest/Spinner';
import Toast from './nativeBaseUiTest/Toast';
import Text from './nativeBaseUiTest/Text';
import Heading from './nativeBaseUiTest/Heading';
import AlertDialog from './nativeBaseUiTest/AlertDialog';
import Slide from './nativeBaseUiTest/Slide';
import Stagger from './nativeBaseUiTest/Stagger';
import PresenceTransition from './nativeBaseUiTest/PresenceTransition';
import PresenceTransition1 from './nativeBaseUiTest/PresenceTransition1';
import PresenceTransition2 from './nativeBaseUiTest/PresenceTransition2';
import PresenceTransition3 from './nativeBaseUiTest/PresenceTransition3';
import PresenceTransition4 from './nativeBaseUiTest/PresenceTransition4';
import PresenceTransition5 from './nativeBaseUiTest/PresenceTransition5';
import PresenceTransition6 from './nativeBaseUiTest/PresenceTransition6';
import Fab from './nativeBaseUiTest/Fab';
import Hidden from './nativeBaseUiTest/Hidden';
import KeyboardAvoidingView from './nativeBaseUiTest/KeyboardAvoidingView';
import Hooks from './nativeBaseUiTest/Hooks';
import Image from './nativeBaseUiTest/Image';
import Avatar from './nativeBaseUiTest/Avatar';
import ActionSheet from './nativeBaseUiTest/ActionSheet';
import Modal from './nativeBaseUiTest/Modal';
import Popover from './nativeBaseUiTest/Popover';
import Menu from './nativeBaseUiTest/Menu';
import Scrollview from './nativeBaseUiTest/Scrollview';
import ViewTest from './nativeBaseUiTest/View';
import FlatListt from './nativeBaseUiTest/FlatList';
import HiddenColorMode from './nativeBaseUiTest/HiddenColorMode';
import {NavigationContainer, Page} from './nativeBaseUiTest/Navigation';
import {PortalProvider} from '@gorhom/portal';
import {NativeBaseProvider} from 'native-base';

const SampleNativeBaseExample = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <NavigationContainer>
          <PortalProvider>
            <Page name="HiddenColorMode">
              <HiddenColorMode />
            </Page>
            <Page name="FlatListtest">
              <FlatListt />
            </Page>
            <Page name="ViewTest">
              <ViewTest />
            </Page>
            <Page name="Scrollview">
              <Scrollview />
            </Page>
            <Page name="AlertDialog">
              <AlertDialog />
            </Page>
            <Page name="Menu">
              <Menu />
            </Page>
            <Page name="FormControl">
              <FormControl />
            </Page>
            <Page name="Skeleton">
              <Skeleton />
            </Page>
            <Page name="Toast">
              <Toast />
            </Page>
            <Page name="Hooks">
              <Hooks />
            </Page>
            <Page name="Select">
              <Select />
            </Page>
            <Page name="Radio">
              <Radio />
            </Page>
            <Page name="Popover">
              <Popover />
            </Page>
            <Page name="Modal">
              <Modal />
            </Page>
            <Page name="ActionSheet">
              <ActionSheet />
            </Page>
            <Page name="Avatar">
              <Avatar />
            </Page>
            <Page name="Image">
              <Image />
            </Page>
            <Page name="KeyboardAvoidingView">
              <KeyboardAvoidingView />
            </Page>
            <Page name="Hidden">
              <Hidden />
            </Page>
            <Page name="Fab">
              <Fab />
            </Page>
            <Page name="Stagger">
              <Stagger />
            </Page>
            <Page name="PresenceTransition-visible">
              <PresenceTransition />
            </Page>
            <Page name="PresenceTransition-initial">
              <PresenceTransition1 />
            </Page>
            <Page name="PresenceTransition-animate">
              <PresenceTransition2 />
            </Page>
            <Page name="PresenceTransition-onTransitionComplete">
              <PresenceTransition3 />
            </Page>
            <Page name="PresenceTransition-exit">
              <PresenceTransition4 />
            </Page>
            <Page name="PresenceTransition-children">
              <PresenceTransition5 />
            </Page>
            <Page name="PresenceTransition-as">
              <PresenceTransition6 />
            </Page>
            <Page name="Slide">
              <Slide />
            </Page>

            <Page name="Heading">
              <Heading />
            </Page>
            <Page name="Text">
              <Text />
            </Page>
            <Page name="Spinner">
              <Spinner />
            </Page>
            <Page name="Progress">
              <Progress />
            </Page>
            <Page name="Alert">
              <Alert />
            </Page>
            <Page name="Divider">
              <Divider />
            </Page>
            <Page name="Badge">
              <Badge />
            </Page>
            <Page name="TextArea">
              <TextArea />
            </Page>
            <Page name="Switch">
              <Switch />
            </Page>
            <Page name="Slider">
              <Slider />
            </Page>
            <Page name="AspectRatio">
              <AspectRatio />
            </Page>
            <Page name="Box">
              <Box />
            </Page>
            <Page name="Flex">
              <Flex />
            </Page>
            <Page name="HStack">
              <HStack />
            </Page>
            <Page name="VStack">
              <VStack />
            </Page>
            <Page name="Stack">
              <Stack />
            </Page>
            <Page name="ZStack">
              <ZStack />
            </Page>
            <Page name="Button">
              <Button />
            </Page>
            <Page name="Pressable">
              <Pressable />
            </Page>
            <Page name="CheckBox">
              <CheckBox />
            </Page>

            <Page name="IconButton">
              <IconButton />
            </Page>
            <Page name="Link">
              <Link />
            </Page>
            <Page name="Icon">
              <Icon />
            </Page>
            <Page name="Input">
              <Input />
            </Page>
          </PortalProvider>
        </NavigationContainer>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SampleNativeBaseExample;
