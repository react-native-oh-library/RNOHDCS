import React, {useState, useContext} from 'react';
import {View, StyleSheet, SectionList, Text} from 'react-native';
import {
  ListItem,
  Divider,
  SearchBar,
  Icon,
  SearchBarProps,
  Switch,
} from '@rneui/themed';
import {ThemeReducerContext} from './ThemeReducer';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

const ORANGE = '#FF9500';
const BLUE = '#007AFF';
const GREEN = '#4CD964';
const RED = '#FF3B30';
const GREY = '#8E8E93';
const PURPLE = '#5856D6';
const TEAL_BLUE = '#5AC8FA';

type SettingData = {
  title?: string;
  icon: string;
  backgroundColor?: string;
  hideChevron?: boolean;
  checkbox?: boolean;
  rightTitle?: string;
  type?: string;
};

type SettingsData = {
  data: SettingData[];
};

const sections: SettingsData[] = [
  {
    data: [
      {
        title: 'Airplane Mode',
        icon: 'plane',
        backgroundColor: ORANGE,
        hideChevron: true,
        checkbox: true,
        type: 'font-awesome',
      },
      {
        title: 'Wi-Fi',
        backgroundColor: BLUE,
        icon: 'wifi',
        type: 'font-awesome',
      },
      {
        title: 'Bluetooth',
        backgroundColor: BLUE,
        icon: 'bluetooth',
        rightTitle: 'Off',
        type: 'font-awesome',
      },
      {
        title: 'Cellular',
        backgroundColor: GREEN,
        icon: 'headphones',
        type: 'font-awesome',
      },
      {
        title: 'Personal Hotspot',
        backgroundColor: GREEN,
        icon: 'gears',
        rightTitle: 'Off',
        type: 'font-awesome',
      },
    ],
  },
  {
    data: [
      {
        title: 'Notifications',
        icon: 'digg',
        backgroundColor: RED,
        type: 'font-awesome',
      },
      {
        title: 'Control Center',
        backgroundColor: GREY,
        icon: 'delicious',
        type: 'font-awesome',
      },
      {
        title: 'Do Not Disturb',
        backgroundColor: PURPLE,
        icon: 'moon-o',
        type: 'font-awesome',
      },
    ],
  },
  {
    data: [
      {
        title: 'General',
        icon: 'sellsy',
        backgroundColor: GREY,
        type: 'font-awesome',
      },
      {
        title: 'Display & Brightness',
        backgroundColor: BLUE,
        icon: 'paste',
        type: 'font-awesome',
      },
      {
        title: 'Wallpaper',
        backgroundColor: TEAL_BLUE,
        icon: 'google-wallet',
        type: 'font-awesome',
      },
      {
        title: 'Sounds',
        backgroundColor: RED,
        icon: 'volume-up',
        type: 'font-awesome',
      },
      {
        title: 'Touch ID & Code',
        backgroundColor: RED,
        icon: 'fire',
        type: 'font-awesome',
      },
      {
        title: 'Emergency Call',
        backgroundColor: ORANGE,
        icon: 'rocket',
        type: 'font-awesome',
      },
      {
        title: 'Battery',
        backgroundColor: GREEN,
        icon: 'battery',
        type: 'font-awesome',
      },
      {
        title: 'Confidentiality',
        backgroundColor: GREY,
        icon: 'hand-o-left',
        type: 'font-awesome',
      },
    ],
  },
  // Space at the bottom
  {data: []},
];

type SetttingsComponentProps = {};

const Settings: React.FunctionComponent<SetttingsComponentProps> = () => {
  const [switched, setSwitched] = useState(false);
  const {ThemeState} = useContext(ThemeReducerContext);

  const onSwitchEventHandler = (value: boolean) => {
    setSwitched(value);
  };

  // const searchbarProps = {};

  const renderItem = ({
    item: {
      title,
      backgroundColor,
      icon,
      rightTitle,
      hideChevron,
      checkbox,
      type,
    },
  }: {
    item: SettingData;
  }) => (
    <ListItem containerStyle={{paddingVertical: 8}} key={title}>
      <Icon
        type={type}
        name={icon}
        size={20}
        color="white"
        containerStyle={{
          backgroundColor,
          width: 28,
          height: 28,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title right>{rightTitle}</ListItem.Title>
      </ListItem.Content>
      {!hideChevron && <ListItem.Chevron />}
      {checkbox && (
        <Switch value={switched} onValueChange={onSwitchEventHandler} />
      )}
    </ListItem>
  );

  const renderSectionHeader = () => <View style={styles.headerSection} />;

  const ItemSeparatorComponent = () => (
    <View
      style={[
        ThemeState.themeMode === 'dark'
          ? styles.separatorComponentDark
          : styles.separatorComponentLight,
      ]}>
      <Divider style={styles.separator} />
    </View>
  );

  const ListHeaderComponent = () => (
    <View>
      <SearchBar
        // {...(searchbarProps as SearchBarProps)}
        platform="ios"
        placeholder="Search"
      />
      <Divider />
    </View>
  );

  const keyExtractor: (item: SettingData, index: number) => string = (
    item: SettingData,
    index: React.Key,
  ) => {
    return index.toString();
  };

  return (
    <Tester>
      <TestSuite name="Settings Example">
        <TestCase itShould="Settings Example" tags={['C_API']}>
          <SectionList
            keyExtractor={keyExtractor}
            sections={sections}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={ItemSeparatorComponent}
            SectionSeparatorComponent={Divider}
            stickySectionHeadersEnabled={false}
            style={{height: '90%'}}
          />
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
  },
  separatorComponentLight: {
    backgroundColor: 'white',
  },
  separatorComponentDark: {
    backgroundColor: 'black',
  },
  separator: {
    marginLeft: 58,
  },
  headerSection: {
    height: 30,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Settings;
