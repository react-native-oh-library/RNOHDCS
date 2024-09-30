import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StickyHeaderScrollView} from 'react-native-sticky-parallax-header';

import {DATA} from '../../../assets/data/paragraphs';
import {Header} from '../../../components/primitiveComponents/Header';
import {Paragraph} from '../../../components/primitiveComponents/Paragraph';
import {Tabs} from '../../../components/primitiveComponents/Tabs';
import {screenStyles, colors} from '../../../constants/index';

const StickyHeaderScrollViewDemoDefault: React.FC<{
  attrProps?: Record<string, any>;
}> = (props: {attrProps?: Record<string, any>}) => {
  return (
    <View style={screenStyles.screenContainer}>
      <SafeAreaView>
        <StickyHeaderScrollView
          stickyTabs={true}
          containerStyle={screenStyles.stretchContainer}
          renderHeader={() => <Header />}
          renderTabs={() => <Tabs />}
          {...props.attrProps}>
          {DATA.map((item, i) => (
            <Paragraph key={i} text={item} />
          ))}
        </StickyHeaderScrollView>
      </SafeAreaView>
    </View>
  );
};
export default StickyHeaderScrollViewDemoDefault;
