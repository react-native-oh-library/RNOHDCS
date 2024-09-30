import {LayoutUtil} from '../class';
import {LayoutProvider} from 'recyclerlistview';
import {dataProviderInit, width} from '../data';
import rowRenderer from '../components/rowRenderer';
import {generateArray} from '../libs';

export const defaultProps = {
  layoutProvider: LayoutUtil.getLayoutProvider(0) as LayoutProvider,
  dataProvider: dataProviderInit.cloneWithRows(generateArray(30)),
  rowRenderer,
  style: {width: width - 40, height: 250},
};

export default defaultProps;
