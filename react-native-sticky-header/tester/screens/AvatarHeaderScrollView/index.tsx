import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar, StyleSheet, View, useColorScheme} from 'react-native';
import {AvatarHeaderScrollView} from 'react-native-sticky-parallax-header';

import {Brandon} from '../../assets/data/cards';
import {CardsBlack, IconMenu, iconCloseWhite} from '../../assets/icons';
import {QuizCard} from '../../components';
import {screenStyles} from '../../constants/index';

const AvatarHeaderScrollViewDemoScreen: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <AvatarHeaderScrollView
        leftTopIcon={iconCloseWhite}
        leftTopIconOnPress={goBack}
        rightTopIcon={IconMenu}
        contentContainerStyle={[
          isDarkTheme
            ? screenStyles.darkBackground
            : screenStyles.lightBackground,
        ]}
        containerStyle={screenStyles.stretchContainer}
        backgroundColor={Brandon.color}
        hasBorderRadius
        parallaxHeight={300}
        headerHeight={0}
        image={Brandon.image}
        subtitle={Brandon.about}
        title={Brandon.author}
        titleStyle={screenStyles.text}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {Brandon.cards.map((data, i, arr) => (
            <QuizCard
              data={data}
              num={i}
              key={data.question}
              cardsAmount={arr.length}
            />
          ))}
        </View>
      </AvatarHeaderScrollView>
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
    flex: 1,
    paddingHorizontal: 24,
  },
});
export default AvatarHeaderScrollViewDemoScreen;
