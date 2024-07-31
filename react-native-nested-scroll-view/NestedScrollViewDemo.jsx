import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import NestedScrollView from 'react-native-nested-scroll-view';

const NestedScrollViewExample = () => {
  return (
    <NestedScrollView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <View key={item} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>Item {item}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((subItem) => (
                <View key={subItem} style={styles.subItem}>
                  <Text>content {subItem}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </NestedScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subItem: {
    width: 100,
    height: 100,
    backgroundColor: '#b0e0e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default NestedScrollViewExample;