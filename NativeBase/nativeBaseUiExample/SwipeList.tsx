import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

export function SwipeListExample() {
  const listViewData = Array(20)
    .fill('')
    .map((_, i) => ({key: `${i}`, text: `item #${i}`}));
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
          <View style={styles.subSection}>
            <SwipeListView
              data={listViewData}
              renderItem={(data, rowMap) => (
                <View style={styles.rowFront}>
                  <Text>I am {data.item.text} in a SwipeListView</Text>
                </View>
              )}
              renderHiddenItem={(data, rowMap) => (
                <View style={styles.rowBack}>
                  <Text>test</Text>
                </View>
              )}
              leftOpenValue={75}
              rightOpenValue={-75}
            />
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
  rowFront: {
    width: 300,
    height: 30,
    justifyContent: 'center',
    backgroundColor: 'pink',
    marginBottom: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
  rowBack: {},
});
