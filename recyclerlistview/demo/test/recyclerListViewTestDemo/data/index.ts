import {Dimensions} from 'react-native';
import {DataProvider} from 'recyclerlistview';
import {LayoutUtil} from '../class';
import {RowRenderer} from '../components';
import {generateArray} from '../libs';

export const ViewTypes = {
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
  FOURTH: 4,
};
export let {width, height} = Dimensions.get('window');

export let dataProviderInit = new DataProvider((r1, r2) => {
  return r1 !== r2;
});
