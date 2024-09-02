import {BaseItemAnimator} from 'recyclerlistview';
import {Alert} from 'react-native';

export class ItemAnimatorInstance extends BaseItemAnimator {
  api: string;

  constructor(props) {
    super();
    this.api = props.api;
  }

  animateWillUpdate(
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    itemRef: object,
    itemIndex: number,
  ): void {
    //no need
    Alert.alert(this.api);
  }
}
