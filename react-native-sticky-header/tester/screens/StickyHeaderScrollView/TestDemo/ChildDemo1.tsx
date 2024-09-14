import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StickyHeaderScrollView} from 'react-native-sticky-parallax-header';

import {DATA} from '../../../assets/data/paragraphs';
import {Header} from '../../../components/primitiveComponents/Header';
import {Paragraph} from '../../../components/primitiveComponents/Paragraph';
import {Tabs} from '../../../components/primitiveComponents/Tabs';
import {screenStyles, colors} from '../../../constants/index';

const StickyHeaderScrollViewDemoChild1: React.FC<{
  attrProps?: Record<string, any>;
}> = (props: {attrProps?: Record<string, any>}) => {
  const testMomentumScrollBegin = () => {
    'worklet';
    console.log('StickyHeaderScrow:测试testMomentumScrollBegin');
  };
  const testMomentumScrollEnd = () => {
    'worklet';
    console.log('StickyHeaderScrow:测试testMomentumScrollEnd');
  };
  const onScroll = () => {
    'worklet';
    console.log('StickyHeaderScrow:测试onScroll');
  };
  const onScrollBeginDrag = () => {
    'worklet';
    console.log('StickyHeaderScrow:测试onScrollBeginDrag');
  };
  const onScrollEndDrag = () => {
    'worklet';
    console.log('StickyHeaderScrow:测试onScrollEndDrag');
  };
  return (
    <View style={screenStyles.screenContainer}>
      <SafeAreaView>
        <StickyHeaderScrollView
          stickyTabs={true}
          onMomentumScrollBegin={testMomentumScrollBegin}
          onMomentumScrollEnd={testMomentumScrollEnd}
          onScroll={onScroll}
          onScrollBeginDrag={onScrollBeginDrag}
          onScrollEndDrag={onScrollEndDrag}
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
export default StickyHeaderScrollViewDemoChild1;
