import * as React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import {TabbedHeaderList} from 'react-native-sticky-parallax-header';
import {logo, photosPortraitMe} from '../../../assets/images';
import {TABBED_SECTIONS} from '../../../assets/data/tabbedSections';
import {TabbedSectionHeader} from '../../../components/predefinedComponents/TabbedSectionHeader';
import {
  TABBED_SECTION_ITEM_HEIGHT,
  TabbedSectionItem,
} from '../../../components/predefinedComponents/TabbedSectionItem';
import {
  colors,
  screenStyles,
  tabbedHeaderListTestIDs,
} from '../../../constants/index';
import IconImage from '../../../assets/icon.png';

const TabbedHeaderListDemoChild1: React.FC<{
  attrProps?: Record<string, any>;
}> = (props: {attrProps?: Record<string, any>}) => {
  const [callbackInfo, setCallbackInfo] = React.useState({});
  // 处理回调方法调用
  const onTabsLayout = () => {
    let newInfo = {
      ...callbackInfo,
      onTabsLayout: 'onTabsLayout回调已调用',
    };
    setCallbackInfo(newInfo);
  };
  const onTopReached = () => {
    let newInfo = {
      ...callbackInfo,
      onTopReached: 'onTopReached回调已调用',
    };
    setCallbackInfo(newInfo);
  };
  return (
    <>
      <View style={styles.showInfoContainer}>
        <Text>{JSON.stringify(callbackInfo)}</Text>
      </View>
      <TabbedHeaderList
        contentContainerStyle={{backgroundColor: colors.coralPink}}
        containerStyle={screenStyles.stretchContainer}
        backgroundColor={colors.coralPink}
        title="Food delivery app"
        logo={logo}
        enableSafeAreaTopInset={false}
        titleStyle={screenStyles.text}
        titleTestID={tabbedHeaderListTestIDs.title}
        foregroundImage={IconImage}
        onTabsLayout={onTabsLayout}
        onTopReached={onTopReached}
        parallaxHeight={50}
        tabs={TABBED_SECTIONS.map(({title, tabTestID}) => ({
          title,
          testID: tabTestID,
        }))}
        tabTextStyle={screenStyles.text}
        sections={TABBED_SECTIONS}
        tabTextContainerActiveStyle={{backgroundColor: colors.activeOrange}}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({item}) => <TabbedSectionItem {...item} />}
        renderSectionHeader={({section}) => (
          <TabbedSectionHeader
            title={section.title}
            tabTestID={section.tabTestID}
          />
        )}
        getItemLayout={(_, index) => ({
          length: TABBED_SECTION_ITEM_HEIGHT,
          offset: TABBED_SECTION_ITEM_HEIGHT * index,
          index,
        })}
        updateCellsBatchingPeriod={100}
        showsVerticalScrollIndicator={false}
        {...props.attrProps}
      />
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.coralPink}
        translucent
      />
    </>
  );
};
const styles = StyleSheet.create({
  headerBarContainer: {
    width: '100%',
    height: 280,
    backgroundColor: 'blue',
  },
  showInfoContainer: {
    position: 'absolute',
    top: 270,
    width: '100%',
    height: 152,
    borderColor: 'white',
    borderWidth: 1,
    zIndex: 666,
  },
});
export default TabbedHeaderListDemoChild1;
