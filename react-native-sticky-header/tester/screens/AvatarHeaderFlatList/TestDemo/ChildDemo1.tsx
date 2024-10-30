import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar, useColorScheme, Text, StyleSheet, View} from 'react-native';
import {AvatarHeaderFlatList} from 'react-native-sticky-parallax-header';

import {Brandon} from '../../../assets/data/cards';
import {CardsBlack, IconMenu, iconCloseWhite} from '../../../assets/icons';
import {QuizCard} from '../../../components';
import {
  screenStyles,
  flat_child1_avatarHeaderTestIDs,
} from '../../../constants/index';
const AvatarHeaderFlatListDemoChild1: React.FC = () => {
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
    console.log('AvatarHeaderFlatList-worklet:onMomentumScrollBegin回调已执行');
  };
  const testMomentumScrollEnd = () => {
    'worklet';
    console.log('AvatarHeaderFlatList-worklet:onMomentumScrollEnd回调已执行');
  };
  const onScroll = () => {
    'worklet';
    console.log('AvatarHeaderFlatList-worklet:onScroll回调已执行');
  };
  const onScrollBeginDrag = () => {
    'worklet';
    console.log('AvatarHeaderFlatList-worklet:onScrollBeginDrag回调已执行');
  };
  const onScrollEndDrag = () => {
    'worklet';
    console.log('AvatarHeaderFlatList-worklet:onScrollEndDrag回调已执行');
  };

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <View style={styles.showInfoContainer}>
        <Text>{JSON.stringify(callbackInfo)}</Text>
      </View>
      <AvatarHeaderFlatList
        leftTopIcon={iconCloseWhite}
        leftTopIconTestID={flat_child1_avatarHeaderTestIDs.headerLeftTopIcon}
        leftTopIconOnPress={goBack}
        rightTopIcon={IconMenu}
        rightTopIconTestID={flat_child1_avatarHeaderTestIDs.headerRightTopIcon}
        leftTopIconOnPress={goBack}
        rightTopIconOnPress={goBack}
        contentContainerStyle={screenStyles.lightBackground1}
        containerStyle={screenStyles.stretchContainer1}
        backgroundColor={Brandon.color1}
        hasBorderRadius={false}
        image={Brandon.image}
        headerHeight={100}
        parallaxHeight={400}
        onHeaderLayout={onHeaderLayout}
        onTopReached={onTopReached}
        onMomentumScrollBegin={testMomentumScrollBegin}
        onMomentumScrollEnd={testMomentumScrollEnd}
        onScroll={onScroll}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        renderHeader={() => (
          <View style={styles.headerBar}>
            <Text onPress={goBack}>返回(自定义headerBar效果)</Text>
          </View>
        )}
        subtitle={Brandon.about}
        title={Brandon.author1}
        titleStyle={screenStyles.text1}
        data={Brandon.cards}
        keyExtractor={item => item.question}
        renderItem={({item, index}) => (
          <QuizCard
            data={item}
            num={index}
            cardsAmount={Brandon.cards.length}
          />
        )}
        showsVerticalScrollIndicator={false}></AvatarHeaderFlatList>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Brandon.barColor}
        translucent
      />
    </>
  );
};
const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: 'hsl(193, 95%, 68%)',
    fontSize: 24,
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
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
export default AvatarHeaderFlatListDemoChild1;
