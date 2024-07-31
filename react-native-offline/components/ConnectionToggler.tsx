import React from 'react';
import { Button, View } from 'react-native';
import DummyNetworkContext from '../DummyNetworkContext';

function ConnectionToggler({ setState }: any) {
  return (
    <DummyNetworkContext.Consumer>
      {({ toggleConnection }) => (
        <View style={{ marginBottom: 80 }}>
          <Button
            onPress={() => { toggleConnection(); setState('success') }}
            title="Toggle Internet connection"
            color="#841584"
          />
        </View>
      )}
    </DummyNetworkContext.Consumer>
  );
}

export default ConnectionToggler;
