import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar, StyleSheet, View, useColorScheme, Text} from 'react-native';
import {DetailsHeaderScrollView} from 'react-native-sticky-parallax-header';

import {Brandon} from '../../../assets/data/cards';
import {CardsBlack, IconMenu, iconCloseWhite} from '../../../assets/icons';
import {QuizCard} from '../../../components';
import {
  screenStyles,
  detailsHeaderScrowViewTestIDs,
  colors,
} from '../../../constants/index';
const DetailsHeaderScrollViewDemoDefault: React.FC<{
  attrProps?: Record<string, any>;
}> = (props: {attrProps?: Record<string, any>}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <>
      <View style={styles.container}>
        <DetailsHeaderScrollView
          leftTopIcon={iconCloseWhite}
          leftTopIconOnPress={goBack}
          leftTopIconTestID={detailsHeaderScrowViewTestIDs.headerLeftTopIcon}
          rightTopIcon={IconMenu}
          rightTopIconOnPress={goBack}
          rightTopIconTestID={detailsHeaderScrowViewTestIDs.headerRightTopIcon}
          contentContainerStyle={[
            isDarkTheme
              ? screenStyles.darkBackground
              : screenStyles.lightBackground,
          ]}
          containerStyle={screenStyles.stretchContainer}
          contentIcon={CardsBlack}
          contentIconNumber={10}
          parallaxHeight={240}
          // renderHeader={() => {
          //   return (
          //     <View style={styles.handler}>
          //       <Text style={styles.handlerText}>我想知道</Text>
          //     </View>
          //   );
          // }}
          contentIconNumberTestID={
            detailsHeaderScrowViewTestIDs.contentIconNumber
          }
          backgroundColor={Brandon.color}
          hasBorderRadius
          image={Brandon.image}
          tag={Brandon.type}
          tagStyle={styles.tagStyle}
          tagTestID={detailsHeaderScrowViewTestIDs.tag}
          title={Brandon.author}
          titleStyle={screenStyles.text2}
          titleTestID={detailsHeaderScrowViewTestIDs.title}
          showsVerticalScrollIndicator={false}
          {...props.attrProps}>
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
        </DetailsHeaderScrollView>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Brandon.color}
          translucent
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 24,
  },
  handler: {
    height: 60,
    backgroundColor: 'green',
  },
  handlerText: {
    fontSize: 24,
    color: 'red',
  },
  tagStyle: {
    color: 'white',
  },
});
export default DetailsHeaderScrollViewDemoDefault;
