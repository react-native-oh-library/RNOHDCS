import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';
import {DetailsHeaderFlatList} from 'react-native-sticky-parallax-header';

import {Brandon} from '../../../assets/data/cards';
import {CardsBlack, IconMenu, iconCloseWhite} from '../../../assets/icons';
import {QuizCard} from '../../../components';
import {
  screenStyles,
  detailsHeaderFlatListTestIDs,
} from '../../../constants/index';

const DetailsHeaderFlatListDemoDefault: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const [callbackInfo, setCallbackInfo] = React.useState({});
  // 处理回调方法调用
  const onHeaderLayout = () => {
    let newInfo = {
      ...callbackInfo,
      onHeaderLayout: 'onHeaderLayout回调已调用',
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
  const testMomentumScrollBegin = () => {
    'worklet';
    console.log(
      'DetailsHeaderFlatList-worklet:onMomentumScrollBegin回调已执行',
    );
  };
  const testMomentumScrollEnd = () => {
    'worklet';
    console.log('DetailsHeaderFlatList-worklet:onMomentumScrollEnd回调已执行');
  };
  const onScroll = () => {
    'worklet';
    console.log('DetailsHeaderFlatList-worklet:onScroll回调已执行');
  };
  const onScrollBeginDrag = () => {
    'worklet';
    console.log('DetailsHeaderFlatList-worklet:onScrollBeginDrag回调已执行');
  };
  const onScrollEndDrag = () => {
    'worklet';
    console.log('DetailsHeaderFlatList-worklet:onScrollEndDrag回调已执行');
  };
  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <View style={styles.showInfoContainer}>
        <Text>{JSON.stringify(callbackInfo)}</Text>
      </View>
      <DetailsHeaderFlatList
        enableSafeAreaTopInset={false}
        leftTopIcon={iconCloseWhite}
        leftTopIconOnPress={goBack}
        leftTopIconTestID={detailsHeaderFlatListTestIDs.headerLeftTopIcon}
        rightTopIcon={IconMenu}
        rightTopIconOnPress={goBack}
        rightTopIconTestID={detailsHeaderFlatListTestIDs.headerRightTopIcon}
        contentContainerStyle={[
          styles.content,
          isDarkTheme
            ? screenStyles.darkBackground
            : screenStyles.lightBackground,
        ]}
        containerStyle={screenStyles.stretchContainer}
        contentIcon={CardsBlack}
        contentIconNumber={10}
        contentIconNumberTestID={detailsHeaderFlatListTestIDs.contentIconNumber}
        contentIconNumberStyle={screenStyles.text2}
        backgroundColor={Brandon.color}
        hasBorderRadius
        image={Brandon.image}
        tag={Brandon.type}
        tagStyle={screenStyles.text}
        tagTestID={detailsHeaderFlatListTestIDs.tag}
        title={Brandon.author}
        titleStyle={screenStyles.text2}
        titleTestID={detailsHeaderFlatListTestIDs.title}
        subtitle={'brand sub title'}
        substitleStyle={screenStyles.text}
        substitleTestID={'detailsHeaderDemoTestUUId'}
        onHeaderLayout={onHeaderLayout}
        onTopReached={onTopReached}
        onMomentumScrollBegin={testMomentumScrollBegin}
        onMomentumScrollEnd={testMomentumScrollEnd}
        onScroll={onScroll}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        data={Brandon.cards}
        keyExtractor={item => item.question}
        renderItem={({item, index}) => (
          <QuizCard
            data={item}
            num={index}
            cardsAmount={Brandon.cards.length}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar
        barStyle="light-content"
        backgroundColor={Brandon.color}
        translucent
      />
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 24,
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

export default DetailsHeaderFlatListDemoDefault;
