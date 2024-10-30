import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import * as React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {withAvatarHeaderFlashList} from 'react-native-sticky-parallax-header';

import type {Question} from '../../../assets/data/cards';
import {Brandon} from '../../../assets/data/cards';
import {IconMenu, iconCloseWhite} from '../../../assets/icons';
import {QuizCard} from '../../../components';
import {
  screenStyles,
  flash_avatarHeaderTestIDs,
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

const AvatarHeaderFlashListDemoDefault: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <AvatarHeaderFlashList
        leftTopIcon={iconCloseWhite}
        leftTopIconOnPress={goBack}
        rightTopIconOnPress={goBack}
        leftTopIconTestID={flash_avatarHeaderTestIDs.headerLeftTopIcon}
        rightTopIcon={IconMenu}
        rightTopIconTestID={flash_avatarHeaderTestIDs.headerRightTopIcon}
        contentContainerStyle={
          isDarkTheme
            ? screenStyles.darkBackground
            : screenStyles.lightBackground
        }
        containerStyle={screenStyles.stretchContainer}
        backgroundColor={Brandon.color}
        hasBorderRadius
        image={Brandon.image}
        parallaxHeight={300}
        subtitle={Brandon.about}
        subtitleTestID={flash_avatarHeaderTestIDs.subtitle}
        title={Brandon.author}
        titleStyle={screenStyles.text}
        titleTestID={flash_avatarHeaderTestIDs.title}
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
        backgroundColor={Brandon.color}
        translucent
      />
    </>
  );
};
export default AvatarHeaderFlashListDemoDefault;
