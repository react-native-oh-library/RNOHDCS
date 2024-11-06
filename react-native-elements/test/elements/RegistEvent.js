import React, {useMemo} from 'react';
import { PanResponder } from 'react-native';

export const panResponder = () => {
    const responder = useMemo(
        () =>
          PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => true,
            onMoveShouldSetPanResponder: (e, gestureState) => true,
            onPanResponderRelease: (e, gestureState) => true,
          }),
        []
      );

      return responder
}


  