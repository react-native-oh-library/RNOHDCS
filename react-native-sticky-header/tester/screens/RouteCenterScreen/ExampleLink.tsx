import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors} from '../../constants';
import {ROUTES} from '../../navigation/routes';
import type {RootStackNavigationProp} from '../../navigation/types';

import {routeCenterScreenTestIDs} from './testIDs';

interface ExampleLinkProps {
  routeName: (typeof ROUTES)[keyof typeof ROUTES] | string;
  label: string;
  testID: string;
}

export const EXAMPLES: Array<ExampleLinkProps> = [
  {
    routeName: ROUTES.TabbedHeaderPagerDEMO,
    label: 'Pager with Tabbed Header Pager',
    testID: routeCenterScreenTestIDs.TabbedHeaderPager,
  },
  {
    routeName: ROUTES.TabbedHeaderListDEMO,
    label: 'Pager with Tabbed Header List',
    testID: routeCenterScreenTestIDs.TabbedHeaderList,
  },
  {
    routeName: ROUTES.DetailsHeaderScrollViewDemo,
    label: 'Pager with Details Header ScrollView',
    testID: routeCenterScreenTestIDs.DetailsHeaderScrollView,
  },
  {
    routeName: ROUTES.DetailsHeaderFlatListDemo,
    label: 'Pager with Details Header FlatList',
    testID: routeCenterScreenTestIDs.DetailsHeaderFlatList,
  },
  {
    routeName: ROUTES.DetailsHeaderSectionListDemo,
    label: 'Pager with Details Header SectionList',
    testID: routeCenterScreenTestIDs.DetailsHeaderSectionList,
  },
  {
    routeName: ROUTES.AvatarHeaderScrollViewDemo,
    label: 'Pager with Avatar Header ScrollView',
    testID: routeCenterScreenTestIDs.AvatarHeaderScrollView,
  },
  {
    routeName: ROUTES.AvatarHeaderFlatListDemo,
    label: 'Pager with Avatar Header FlatList',
    testID: routeCenterScreenTestIDs.AvatarHeaderFlatList,
  },
  {
    routeName: ROUTES.AvatarHeaderSectionListDemo,
    label: 'Pager with Avatar Header SectionList',
    testID: routeCenterScreenTestIDs.AvatarHeaderSectionList,
  },
  {
    routeName: ROUTES.StickyHeaderScrollViewDemo,
    label: 'Pager with Sticky Header ScrollView',
    testID: routeCenterScreenTestIDs.StickyHeaderScrollView,
  },
  {
    routeName: ROUTES.StickyHeaderFlatListDemo,
    label: 'Pager with Sticky Header FlatList',
    testID: routeCenterScreenTestIDs.StickyHeaderFlatList,
  },
  {
    routeName: ROUTES.StickyHeaderSectionListDemo,
    label: 'Pager with Sticky Header SectionList',
    testID: routeCenterScreenTestIDs.StickyHeaderSectionList,
  },
  {
    routeName: ROUTES.TabbedHeaderFlashListDemo,
    label: 'Pager with  Tabbed Header FlashList',
    testID: routeCenterScreenTestIDs.TabbedHeaderFlashList,
  },
  {
    routeName: ROUTES.AvatarHeaderFlashListDemo,
    label: 'Pager with  Avatar Header FlashList',
    testID: routeCenterScreenTestIDs.AvatarHeaderFlashList,
  },
  {
    routeName: ROUTES.DetailsHeaderFlashListDemo,
    label: 'Pager with Details Header FlashList',
    testID: routeCenterScreenTestIDs.DetailsHeaderFlashList,
  },
  {
    routeName: ROUTES.StickyHeaderFlashListDemo,
    label: 'Pager with Sticky Header FlashList',
    testID: routeCenterScreenTestIDs.StickyHeaderFlashList,
  },
  {
    routeName: ROUTES.YODA,
    label: 'Pager with Tabs and custom header bar (Yoda)',
    testID: routeCenterScreenTestIDs.yodaLink,
  },
];

export const ExampleLink: React.FC<ExampleLinkProps> = ({
  routeName,
  label,
  testID,
}) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const navigateTo = React.useCallback(
    (route: (typeof ROUTES)[keyof typeof ROUTES]) => {
      return () => {
        navigation.navigate(route);
      };
    },
    [navigation],
  );

  return (
    <TouchableOpacity onPress={navigateTo(routeName)} testID={testID}>
      <Text style={styles.linkLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkLabel: {
    color: colors.purplishBlue,
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 20,
    padding: 10,
  },
});
