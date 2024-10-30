import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Avatars from './elements/Avatars';
import Button from './elements/Buttons';
import Cards from './elements/Cards';
import Tiles from './elements/Tiles';
import Chips from './elements/Chips';
import Lists from './elements/lists/Index';
import Lists2 from './elements/Lists2';
import Inputs from './elements/Inputs';
import Image from './elements/Image';
import LinearProgress from './elements/LinearProgress';
import Pricing from './elements/Pricing';
import Ratings from './elements/Ratings';
import Settings from './elements/Settings';
import SpeedDial from './elements/SpeedDial';
import Sliders from './elements/Sliders';
import Skeleton from './elements/Skeleton';
import SocialIcons from './elements/SocialIcons';
import BottomSheet from './elements/Bottomsheet';
import Tooltip from './elements/Tooltip';
import Dialogs from './elements/Dialogs';
import Overlay from './elements/Overlay';
import CheckBox from './elements/Checkbox';
import FAB from './elements/Fab';
import Theme from './elements/Theme';
import Text from './elements/Text';
import Tabs from './elements/Tabs';
import Badge from './elements/Badge';
import Divider from './elements/Divider';
import Header from './elements/Header';
import SearchBar from './elements/SearchBar';
import AirbnbRatings from './elements/AirbnbRatings';
import Icons from './elements/Icon';
import {NavigationContainer, Page} from './elements/Navigation';
import {ThemeProvider, createTheme} from '@rneui/themed';
import Switchs from './elements/Switch';
import ButtonGroups from './elements/ButtonGrounps';
const theme = createTheme({
  lightColors: {
    primary: '#3d5afe',
  },
  darkColors: {
    primary: '#3d5afe',
  },
  mode: 'dark',
  components: {
    Text: {
      h1Style: {
        fontSize: 80,
      },
    },
  },
});

export default function SampleElementExample(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Page name="AirbnbRating">
          <AirbnbRatings />
        </Page>
        <Page name="Avatar">
          <Avatars />
        </Page>
        <Page name="Badge">
          <Badge />
        </Page>
        <Page name="BottomSheet">
          <BottomSheet />
        </Page>
        <Page name="Button">
          <Button />
        </Page>
        <Page name="ButtonGroup">
          <ButtonGroups />
        </Page>
        <Page name="Card">
          <Cards />
        </Page>
        <Page name="CheckBox">
          <CheckBox />
        </Page>
        <Page name="Chip">
          <Chips />
        </Page>
        <Page name="Dialog">
          <Dialogs />
        </Page>
        <Page name="Divider">
          <Divider />
        </Page>
        <Page name="FAB">
          <FAB />
        </Page>
        <Page name="Header">
          <Header />
        </Page>
        <Page name="Icon">
          <Icons />
        </Page>
        <Page name="Image">
          <Image />
        </Page>
        <Page name="Input">
          <Inputs />
        </Page>
        <Page name="LinearProgress">
          <LinearProgress />
        </Page>
        <Page name="ListItem">
          <Lists2 />
        </Page>
        <Page name="Overlay">
          <Overlay />
        </Page>
        <Page name="PricingCard">
          <Pricing />
        </Page>
        <Page name="Ratings">
          <Ratings />
        </Page>
        <Page name="SearchBar">
          <SearchBar />
        </Page>
        <Page name="Slider">
          <Sliders />
        </Page>
        <Page name="Skeleton">
          <Skeleton />
        </Page>
        <Page name="SocialIcon">
          <SocialIcons />
        </Page>
        <Page name="SpeedDial">
          <SpeedDial />
        </Page>
        <Page name="Switch">
          <Switchs />
        </Page>
        <Page name="Tab">
          <Tabs />
        </Page>
        <Page name="Text">
          <Text />
        </Page>
        <Page name="Tile">
          <Tiles />
        </Page>
        <Page name="Tooltip">
          <Tooltip />
        </Page>
        {/* <Page name="List">
          <Lists />
        </Page>
        <Page name="Settings">
          <Settings />
        </Page>
        <Page name="Theme">
          <Theme />
        </Page> */}

  


      </NavigationContainer>
    </ThemeProvider>
  );
}
