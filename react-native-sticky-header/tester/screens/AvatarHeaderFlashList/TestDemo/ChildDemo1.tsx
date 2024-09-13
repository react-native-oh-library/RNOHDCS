import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import * as React from 'react';
import {StatusBar, useColorScheme, Text, StyleSheet, View} from 'react-native';
import {withAvatarHeaderFlashList} from 'react-native-sticky-parallax-header';

import type {Question} from '../../../assets/data/cards';
import {Brandon} from '../../../assets/data/cards';
import {IconMenu, iconCloseWhite} from '../../../assets/icons';
import {QuizCard} from '../../../components';
import {
  screenStyles,
  flash_child1_avatarHeaderTestIDs,
} from '../../../constants/index';

const cards = Brandon.cards
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards)
  .concat(Brandon.cards);

const data = cards.map((card, index) => ({...card, id: `${index}`}));

const AvatarHeaderFlashList = withAvatarHeaderFlashList<
  Question & {id: string}
>(FlashList);

const AvatarHeaderFlashListDemoChild1: React.FC = () => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <AvatarHeaderFlashList
        leftTopIcon={iconCloseWhite}
        leftTopIconOnPress={goBack}
        leftTopIconTestID={flash_child1_avatarHeaderTestIDs.headerLeftTopIcon}
        rightTopIcon={IconMenu}
        rightTopIconTestID={flash_child1_avatarHeaderTestIDs.headerRightTopIcon}
        contentContainerStyle={screenStyles.lightBackground1}
        containerStyle={screenStyles.stretchContainer1}
        backgroundColor={Brandon.color1}
        image={Brandon.image}
        headerHeight={100}
        parallaxHeight={400}
        renderHeader={() => (
          <View style={styles.headerBar}>
            <Text onPress={goBack}>返回(自定义headerBar效果)</Text>
          </View>
        )}
        snapStartThreshold={200}
        snapStopThreshold={200}
        subtitle={Brandon.about}
        subtitleTestID={flash_child1_avatarHeaderTestIDs.subtitle}
        title={Brandon.author1}
        titleStyle={screenStyles.text1}
        titleTestID={flash_child1_avatarHeaderTestIDs.title}
        data={data}
        estimatedItemSize={300}
        keyExtractor={item => item.id}
        decelerationRate="normal"
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
});
export default AvatarHeaderFlashListDemoChild1;
