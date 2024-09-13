import * as React from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import type { Card } from '../../assets/data/cards';
import { Check, Close } from '../../assets/icons';
import { colors, screenStyles } from '../../constants';

type Props = {
  card: Card;
  reveal: () => void;
  revealed: boolean;
};

const QUIZ_OPTION_WIDTH_PERCENTAGE = 0.75;

const QuizOption: React.FC<Props> = ({ reveal, revealed, card: { number, question, value } }) => {
  const { width: windowWidth } = useWindowDimensions();
  const [picked, setPicked] = React.useState(false);
  const [paddingVertical, setPaddingVertical] = React.useState(0);
  const calcPaddings = React.useCallback((event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    const circleRadius = 40;
    const padding = height > circleRadius ? height / 2.5 : 0;

    setPaddingVertical(padding);
  }, []);
  const onPress = React.useCallback(() => {
    reveal();
    setPicked(true);
  }, [reveal]);

  if (revealed) {
    let backgroundColor = 'white';
    let color = 'black';

    if (picked) color = 'white';
    if (picked && value) backgroundColor = colors.jade;
    if (picked && !value) backgroundColor = colors.coralPink;

    return (
      <View
        style={[
          styles.container,
          { backgroundColor, width: windowWidth * QUIZ_OPTION_WIDTH_PERCENTAGE },
        ]}>
        <View style={[styles.letterContainer, { paddingVertical }]}>
          <Image source={value ? Check : Close} />
        </View>
        <View onLayout={calcPaddings} style={styles.textContainer}>
          <Text style={[screenStyles.text, styles.text, { color }]}>{question}</Text>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: windowWidth * QUIZ_OPTION_WIDTH_PERCENTAGE }]}>
      <View style={[styles.letterContainer, { paddingVertical }]}>
        <Text style={[screenStyles.text, styles.letter]}>{number}</Text>
      </View>
      <View onLayout={calcPaddings} style={styles.textContainer}>
        <Text style={[screenStyles.text, styles.text]}>{question}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    borderRadius: 24,
    backgroundColor: colors.paleGrey,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  letter: {
    color: colors.black,
  },
  letterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 36,
    width: 36,
    borderRadius: 17.5,
    backgroundColor: colors.white,
    margin: 6,
  },
  textContainer: {
    width: '80%',
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 7,
    paddingVertical: 5,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default QuizOption;
