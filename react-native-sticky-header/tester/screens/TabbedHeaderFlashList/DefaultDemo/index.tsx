import {FlashList} from '@shopify/flash-list';
import * as React from 'react';
import {
  Platform,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {withTabbedHeaderFlashList} from 'react-native-sticky-parallax-header';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {ItemType, SectionType} from '../../../assets/data/tabbedSections';
import {FLASHLIST_TABBED_SECTIONS} from '../../../assets/data/tabbedSections';
import {TabbedSectionHeader} from '../../../components/predefinedComponents/TabbedSectionHeader';
import {TabbedSectionItem} from '../../../components/predefinedComponents/TabbedSectionItem';
import {
  colors,
  screenStyles,
  flash_tabbedHeaderTestIDs,
} from '../../../constants/index';

function isNotEmpty<T>(item: T | null): item is T {
  return item !== null;
}

function isSection(item: SectionType | ItemType): item is SectionType {
  return typeof (item as SectionType).tabTestID === 'string';
}

const wait = (timeout: number) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout);
  });

const data = FLASHLIST_TABBED_SECTIONS;

const stickyHeaderIndices = data
  .map((item, index) => {
    return isSection(item) ? index : null;
  })
  .filter(isNotEmpty);

const tabs = data
  .map(item => {
    return isSection(item) ? item : null;
  })
  .filter(isNotEmpty);

const PARALLAX_HEIGHT = 100;

const TabbedHeaderFlashList = withTabbedHeaderFlashList<SectionType | ItemType>(
  FlashList,
);

const TabbedHeaderFlashListDemoDefault: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.coralPink}
        translucent
      />
      <View style={screenStyles.screenContainer}>
        <TabbedHeaderFlashList
          enableSafeAreaTopInset={true}
          data={data}
          renderItem={({item}) => {
            if (isSection(item)) {
              return (
                <TabbedSectionHeader
                  title={item.title}
                  tabTestID={item.tabTestID}
                />
              );
            }

            return <TabbedSectionItem {...item} />;
          }}
          getItemType={item => {
            return isSection(item) ? 'sectionHeader' : 'row';
          }}
          estimatedItemSize={200}
          stickyHeaderIndices={stickyHeaderIndices}
          decelerationRate="normal"
          {...(Platform.OS !== 'web' && {
            refreshControl: (
              <RefreshControl
                //  z Index is required on IOS, to refresh indicator be visible
                style={styles.refreshControl}
                refreshing={refreshing}
                titleColor={colors.white}
                tintColor={colors.white}
                title="Refreshing"
                onRefresh={onRefresh}
              />
            ),
          })}
          backgroundColor={colors.coralPink}
          foregroundImage={{
            uri: 'https://foodish-api.herokuapp.com/images/samosa/samosa9.jpg',
          }}
          hasBorderRadius={false}
          parallaxHeight={PARALLAX_HEIGHT}
          tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
          tabTextStyle={screenStyles.text}
          tabsContainerBackgroundColor={colors.coralPink}
          tabs={tabs}
          title="Food delivery app"
          titleStyle={screenStyles.text}
          titleTestID={flash_tabbedHeaderTestIDs.title}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  refreshControl: {
    zIndex: 1,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: colors.activeOrange,
  },
});
export default TabbedHeaderFlashListDemoDefault;
