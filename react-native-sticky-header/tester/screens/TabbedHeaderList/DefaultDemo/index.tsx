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

const TabbedHeaderListDemoDefault: React.FC<{
  attrProps?: Record<string, any>;
}> = (props: {attrProps?: Record<string, any>}) => {
  const testMomentumScrollBegin = () => {
    'worklet';
    console.log('测试testMomentumScrollBegin');
  };
  const testMomentumScrollEnd = () => {
    'worklet';
    console.log('测试testMomentumScrollEnd');
  };
  const onScroll = () => {
    'worklet';
    console.log('测试onScroll');
  };
  const onScrollBeginDrag = () => {
    'worklet';
    console.log('测试onScrollBeginDrag');
  };
  const onScrollEndDrag = () => {
    'worklet';
    console.log('测试onScrollEndDrag');
  };
  return (
    <>
      <TabbedHeaderList
        contentContainerStyle={{backgroundColor: colors.coralPink}}
        containerStyle={screenStyles.stretchContainer}
        backgroundColor={colors.coralPink1}
        title="Food delivery app"
        logo={logo}
        logoStyle={styles.logoStyle}
        logoContainerStyle={styles.logoContainer}
        enableSafeAreaTopInset={false}
        titleStyle={screenStyles.text}
        titleTestID={tabbedHeaderListTestIDs.title}
        foregroundImage={IconImage}
        onMomentumScrollBegin={testMomentumScrollBegin}
        onMomentumScrollEnd={testMomentumScrollEnd}
        onScroll={onScroll}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        parallaxHeight={300}
        renderHeaderBar={() => (
          <View style={styles.headerBarContainer}>
            <Text style={styles.textStyle}>自定义HeaderBar部分</Text>
          </View>
        )}
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
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255,78,15)',
  },
  textStyle: {
    color: 'white',
  },
  logoStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  logoContainer: {
    borderWidth: 1,
    borderColor: 'yellow',
  },
});

export default TabbedHeaderListDemoDefault;
