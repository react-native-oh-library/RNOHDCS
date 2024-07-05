import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const SimpleGradient = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['red', 'white']}
          style={styles.gradient}
        />
          <LinearGradient
          colors={['green', 'white']}
          style={styles.gradient}
        />
          <LinearGradient
          colors={['blue', 'white']}
          style={styles.gradient}
        />
  
    </View>
  );
};

export default SimpleGradient;