import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';
import {DetailsHeaderSectionList} from 'react-native-sticky-parallax-header';

import {Brandon} from '../../../assets/data/cards';
import {CardsBlack, IconMenu, iconCloseWhite} from '../../../assets/icons';
import {QuizCard} from '../../../components';
import {
  screenStyles,
  detailsHeaderSectionListTestIDs,
} from '../../../constants/index';

const DetailsHeaderSectionListDemoDefault: React.FC = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <DetailsHeaderSectionList
        leftTopIcon={iconCloseWhite}
        leftTopIconOnPress={goBack}
        leftTopIconTestID={detailsHeaderSectionListTestIDs.headerLeftTopIcon}
        rightTopIcon={IconMenu}
        parallaxHeight={300}
        rightTopIconTestID={detailsHeaderSectionListTestIDs.headerRightTopIcon}
        contentContainerStyle={[
          styles.content,
          isDarkTheme
            ? screenStyles.darkBackground
            : screenStyles.lightBackground,
        ]}
        containerStyle={screenStyles.stretchContainer}
        contentIcon={CardsBlack}
        contentIconNumber={10}
        contentIconNumberTestID={
          detailsHeaderSectionListTestIDs.contentIconNumber
        }
        backgroundColor={Brandon.color}
        hasBorderRadius
        image={Brandon.image}
        tag={Brandon.type}
        tagTestID={detailsHeaderSectionListTestIDs.tag}
        title={Brandon.author}
        titleStyle={screenStyles.text}
        titleTestID={detailsHeaderSectionListTestIDs.title}
        sections={Brandon.data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
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
  title: {
    fontSize: 24,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default DetailsHeaderSectionListDemoDefault;
