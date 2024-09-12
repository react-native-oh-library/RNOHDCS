import {Dimensions} from 'react-native';
import {DataProvider} from 'recyclerlistview';
import {generateArray} from '../libs';

export const ViewTypes = {
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
  FOURTH: 3,
};
export const {width, height} = Dimensions.get('window');

export const dataProvider = new DataProvider((r1, r2) => {
  return r1 !== r2;
});

export const getDataProvider = (number: number) => {
  return dataProvider.cloneWithRows(generateArray(number));
};
