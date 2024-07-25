import { Animated, Dimensions, View, Text, Button } from 'react-native';
import styles from './styles';

const { height } = Dimensions.get('window');

const _draggedValue = new Animated.Value(180);
const draggableRange = { top: height + 180 - 64, bottom: 180 };
const { top, bottom } = draggableRange;

const backgoundOpacity = _draggedValue.interpolate({
  inputRange: [height - 48, height],
  outputRange: [1, 0],
  extrapolate: "clamp"
});

const iconTranslateY = _draggedValue.interpolate({
  inputRange: [height - 56, height, top],
  outputRange: [0, 56, 180 - 32],
  extrapolate: "clamp"
});

const textTranslateY = _draggedValue.interpolate({
  inputRange: [bottom, top],
  outputRange: [0, 8],
  extrapolate: "clamp"
});

const textTranslateX = _draggedValue.interpolate({
  inputRange: [bottom, top],
  outputRange: [0, -112],
  extrapolate: "clamp"
});

const textScale = _draggedValue.interpolate({
  inputRange: [bottom, top],
  outputRange: [1, 0.7],
  extrapolate: "clamp"
});

type Props = {
  onPress: () => any;
};
const PanelView: React.FC<Props> = props => {
  return (<>
    <Animated.View
      style={[
        styles.iconBg,
        {
          opacity: backgoundOpacity,
          transform: [{ translateY: iconTranslateY }]
        }
      ]}
    />
    <View style={styles.panelHeader}>
      <Animated.View
        style={{
          transform: [
            { translateY: textTranslateY },
            { translateX: textTranslateX },
            { scale: textScale }
          ]
        }}
      >
        <Text style={styles.textHeader}>Sliding Up Panel</Text>
      </Animated.View>
    </View>
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Bottom sheet content</Text>
      <View style={styles.viewbox}>
        <Button title='Hide panel' onPress={props.onPress} />
      </View>
    </View>
  </>)
}


export {
  height,
  _draggedValue,
  draggableRange,
  backgoundOpacity,
  iconTranslateY,
  textTranslateY,
  textTranslateX,
  textScale,
}

export default PanelView
