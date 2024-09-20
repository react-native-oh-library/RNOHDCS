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
  function goBack() {
    navigation.goBack();
  }

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
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
});
export default AvatarHeaderFlatListDemoChild1;
