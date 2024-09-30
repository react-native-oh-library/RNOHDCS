import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export function SvgExample() {
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Svg</Text>
          <View style={styles.subSection}>
            <Svg width="100" height="100">
              <Path d="M90 0 L0 180 L180 180 Z" fill="red" />
            </Svg>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
});
