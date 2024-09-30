import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {DetailsHeaderFlatList} from 'react-native-sticky-parallax-header';

import {Brandon} from '../../../assets/data/cards';
import {CardsBlack, IconMenu, iconCloseWhite} from '../../../assets/icons';
import {QuizCard} from '../../../components';
import {
  screenStyles,
  detailsHeaderFlatListTestIDs,
} from '../../../constants/index';

const DetailsHeaderFlatListDemoChild1: React.FC = () => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <DetailsHeaderFlatList
        enableSafeAreaTopInset={false}
        leftTopIcon={iconCloseWhite}
        leftTopIconOnPress={goBack}
        leftTopIconTestID={detailsHeaderFlatListTestIDs.headerLeftTopIcon}
        rightTopIcon={IconMenu}
        rightTopIconTestID={detailsHeaderFlatListTestIDs.headerRightTopIcon}
        contentContainerStyle={screenStyles.lightBackground1}
        containerStyle={screenStyles.stretchContainer1}
        contentIcon={CardsBlack}
        contentIconNumber={10}
        contentIconNumberTestID={detailsHeaderFlatListTestIDs.contentIconNumber}
        backgroundColor={Brandon.color2}
        hasBorderRadius
        image={Brandon.image}
        tag={Brandon.type}
        tagTestID={detailsHeaderFlatListTestIDs.tag}
        title={Brandon.author1}
        titleStyle={screenStyles.text1}
        titleTestID={detailsHeaderFlatListTestIDs.title}
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
});

export default DetailsHeaderFlatListDemoChild1;
