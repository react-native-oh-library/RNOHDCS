import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import * as React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {withDetailsHeaderFlashList} from 'react-native-sticky-parallax-header';

import type {Question} from '../../../assets/data/cards';
import {Brandon} from '../../../assets/data/cards';
import {CardsBlack, IconMenu, iconCloseWhite} from '../../../assets/icons';
import {QuizCard} from '../../../components';
import {
  screenStyles,
  flash_detailsHeaderTestIDs,
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

const DetailsHeaderFlashList = withDetailsHeaderFlashList<
  Question & {id: string}
>(FlashList);

const DetailsHeaderFlashListDemoDefault: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <DetailsHeaderFlashList
        enableSafeAreaTopInset={false}
        leftTopIcon={iconCloseWhite}
        leftTopIconOnPress={goBack}
        leftTopIconTestID={flash_detailsHeaderTestIDs.headerLeftTopIcon}
        rightTopIcon={IconMenu}
        rightTopIconOnPress={goBack}
        rightTopIconTestID={flash_detailsHeaderTestIDs.headerRightTopIcon}
        contentContainerStyle={
          isDarkTheme
            ? screenStyles.darkBackground
            : screenStyles.lightBackground
        }
        containerStyle={screenStyles.stretchContainer}
        contentIcon={CardsBlack}
        contentIconNumber={10}
        contentIconNumberTestID={flash_detailsHeaderTestIDs.contentIconNumber}
        backgroundColor={Brandon.color}
        hasBorderRadius
        image={Brandon.image}
        tag={Brandon.type}
        tagTestID={flash_detailsHeaderTestIDs.tag}
        title={Brandon.author}
        titleStyle={screenStyles.text}
        titleTestID={flash_detailsHeaderTestIDs.title}
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
export default DetailsHeaderFlashListDemoDefault;
