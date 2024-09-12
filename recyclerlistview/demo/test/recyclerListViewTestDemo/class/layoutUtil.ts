import {Dimensions} from 'react-native';
import {LayoutProvider} from 'recyclerlistview';
import {ViewTypes} from '../data';

export class LayoutUtil {
  static getWindowWidth() {
    // To deal with precision issues on android
    return Math.round(Dimensions.get('window').width * 1000) / 1000 - 6; //Adjustment for margin given to RLV;
  }

  static getLayoutProvider(type: any) {
    switch (type) {
      case ViewTypes.FIRST:
        return new LayoutProvider(
          index => {
            if (index % 3 === 0) {
              return ViewTypes.FIRST;
            } else if (index % 2 === 0) {
              return ViewTypes.SECOND;
            } else if (index % 5 === 0){
              return ViewTypes.THIRD;
            } else {
              return ViewTypes.FOURTH;
            }
          },
          (type, dim, index) => {
            const columnWidth = LayoutUtil.getWindowWidth() / 3 - 15;
            if (index % 3 === 0) {
              dim.width = 3 * columnWidth;
              dim.height = 150;
            } else if (index % 2 === 0) {
              dim.width = 2 * columnWidth;
              dim.height = 100;
            } else {
              dim.width = columnWidth;
              dim.height = 100;
            }
          },
        );
      case ViewTypes.SECOND:
        return new LayoutProvider(
          index => {
            if (index % 3 === 0) {
              return ViewTypes.FIRST;
            } else if (index % 2 === 0) {
              return ViewTypes.SECOND;
            } else {
              return ViewTypes.THIRD;
            }
          },
          (type, dim, index) => {
            dim.width = LayoutUtil.getWindowWidth() / 2 - 20;
            dim.height = 100;
          },
        );
      case ViewTypes.THIRD:
        return new LayoutProvider(
          index => {
            if (index % 5 === 0) {
              return ViewTypes.SECOND;
            } else if (index % 3 === 0) {
              return ViewTypes.THIRD;
            } else {
              return ViewTypes.FOURTH;
            }
            return ViewTypes.THIRD;
          },
          (type, dim, index) => {
            const columnWidth = LayoutUtil.getWindowWidth() / 3 - 15;
            if (index % 5 === 0) {
              dim.width = 3 * columnWidth;
              dim.height = 100;
            } else if (index % 3 === 0) {
              dim.width = 2 * columnWidth;
              dim.height = 100;
            } else {
              dim.width = columnWidth;
              dim.height = 100;
            }
          },
        );
    }
  }
}

export const getLayoutProvider = (index: number) => {
  return LayoutUtil.getLayoutProvider(index) as LayoutProvider;
};
