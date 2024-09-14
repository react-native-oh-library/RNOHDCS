import * as React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StickyHeaderSectionList} from 'react-native-sticky-parallax-header';

import {SECTIONS} from '../../../assets/data/paragraphs';
import {Header} from '../../../components/primitiveComponents/Header';
import {SectionFooter} from '../../../components/primitiveComponents/SectionFooter';
import {SectionHeader} from '../../../components/primitiveComponents/SectionHeader';
import {Tabs} from '../../../components/primitiveComponents/Tabs';
import {screenStyles} from '../../../constants';

const StickyHeaderSectionListDemoDefault: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  async function onRefresh() {
    setRefreshing(true);
    await new Promise(res => setTimeout(res, 2000));
    setRefreshing(false);
  }

  return (
    <View style={screenStyles.screenContainer}>
      <SafeAreaView>
        <StickyHeaderSectionList
          containerStyle={screenStyles.stretchContainer}
          sections={SECTIONS}
          keyExtractor={(item, index) => item + index}
          /**
           * Refresh control is not implemented on web, which causes styles as margin or padding
           * to be duplicated - ignore it on web, it will be no-op anyway
           *
           * TODO: describe it as a web limitation
           */
          {...Platform.select({native: {onRefresh}})}
          refreshing={refreshing}
          renderHeader={() => <Header />}
          renderSectionHeader={info => {
            return <SectionHeader info={info} />;
          }}
          renderSectionFooter={() => {
            return <SectionFooter />;
          }}
          renderTabs={() => <Tabs />}
          scrollEventThrottle={16}
          stickySectionHeadersEnabled
        />
      </SafeAreaView>
    </View>
  );
};
export default StickyHeaderSectionListDemoDefault;
