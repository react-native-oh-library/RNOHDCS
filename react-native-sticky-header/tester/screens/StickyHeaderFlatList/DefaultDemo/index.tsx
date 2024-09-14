import * as React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StickyHeaderFlatList} from 'react-native-sticky-parallax-header';

import {DATA} from '../../../assets/data/paragraphs';
import {Header} from '../../../components/primitiveComponents/Header';
import {Paragraph} from '../../../components/primitiveComponents/Paragraph';
import {Tabs} from '../../../components/primitiveComponents/Tabs';
import {screenStyles, colors} from '../../../constants/index';

const StickyHeaderFlatListDemoDefault: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  async function onRefresh() {
    setRefreshing(true);
    await new Promise(res => setTimeout(res, 2000));
    setRefreshing(false);
  }

  return (
    <View style={screenStyles.screenContainer}>
      <SafeAreaView>
        <StickyHeaderFlatList
          containerStyle={screenStyles.stretchContainer}
          data={DATA}
          keyExtractor={item => item}
          /**
           * Refresh control is not implemented on web, which causes styles as margin or padding
           * to be duplicated - ignore it on web, it will be no-op anyway
           *
           * TODO: describe it as a web limitation
           */
          {...Platform.select({native: {onRefresh}})}
          refreshing={refreshing}
          renderHeader={() => <Header />}
          renderItem={({item}) => {
            return <Paragraph text={item} />;
          }}
          renderTabs={() => <Tabs />}
          scrollEventThrottle={16}
        />
      </SafeAreaView>
    </View>
  );
};
export default StickyHeaderFlatListDemoDefault;
