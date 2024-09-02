import {Text, View} from 'react-native';
import React from 'react';
import {ViewTypes} from '../data';
import {layoutProvider, LayoutManager} from 'recyclerlistview';

export const RowRenderer = (type, data, index, extendedState) => {
  switch (type) {
    case ViewTypes.FIRST:
      return (
        <View style={styles.containerFirst}>
          <Text style={styles.centerText}>
            {extendedState ? extendedState.title + index : data}
          </Text>
        </View>
      );
    case ViewTypes.SECOND:
      return (
        <View style={styles.containerSecond}>
          <Text style={styles.centerText}>
            {extendedState ? extendedState.title + index : data}
          </Text>
        </View>
      );
    case ViewTypes.THIRD:
      return (
        <View style={styles.containerThree}>
          <Text style={styles.centerText}>
            {extendedState ? extendedState.title + index : data}
          </Text>
        </View>
      );
    case ViewTypes.FOURTH:
      return (
        <View style={styles.containerFour}>
          <Text style={styles.centerText}>
            {extendedState ? extendedState.title + index : data}
          </Text>
        </View>
      );
    default:
      return null;
  }
};

const styles = {
  containerFirst: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00a1f1',
  },
  containerSecond: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffbb00',
  },
  containerThree: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#7cbb00',
  },
  containerFour: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00ffff',
    margin: 5,
  },
  centerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
};
