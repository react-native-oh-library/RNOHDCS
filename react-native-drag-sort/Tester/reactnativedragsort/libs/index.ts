import {Dimensions} from 'react-native';

export interface IListItem {
  id: number;
  key: string;
  title: string;
  width?: number;
  height?: number;
}

const {width} = Dimensions.get('window');

const getWdth = (index: number, isWidth: boolean) => {
  return isWidth ? (width - 170) / 2 : 80;
};

export const generateDataSource = (length: number, title: string) => {
  const list: IListItem[] = [];
  for (let i = 0; i < length; i++) {
    list.push({
      id: i,
      key: `key${i}`,
      title: `${title}_${i}`,
      width: getWdth(i, true),
      height: getWdth(i, false),
    });
  }
  return list;
};
