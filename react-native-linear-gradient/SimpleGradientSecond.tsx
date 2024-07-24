import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const SimpleGradientSecond = () => {
  const colors = ['red', 'green', 'blue'];
  return (
    <View style={styles.container}>
      <LinearGradient
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['green', 'blue', 'red']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.gradient}>
        </LinearGradient>
        <LinearGradient
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['green', 'blue', 'red']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.gradient}
        />
        <LinearGradient
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['green', 'blue', 'red']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={styles.gradient}
        />
        <LinearGradient
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['green', 'blue', 'red']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.gradient}
        />
        <LinearGradient
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['green', 'blue', 'red']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.gradient}
        />
        <LinearGradient
          angle={30}
          useAngle={true}
          colors={['green', 'blue', 'red']}
          locations={[0, 0.5, 1]}
          angleCenter={{x: 0.5, y: 0.5}}
          style={styles.gradient}
        />
        <LinearGradient
          angle={45}
          useAngle={true}
          colors={['green', 'blue', 'red']}
          locations={[0, 0.5, 1]}
          angleCenter={{x: 0.5, y: 0.5}}
          style={styles.gradient}
        />
      
        <LinearGradient
          angle={45}
          useAngle={true}
          colors={['green', 'blue', 'red']}
          angleCenter={{x: 0.5, y: 0.5}}
          locations={[0, 0.8, 1]}
          style={styles.gradient}
        />
        
        <LinearGradient
          angle={120}
          useAngle={true}
          colors={['red', 'blue', 'green']}
          angleCenter={{x: 0.5, y: 0.5}}
          locations={[0, 0.5, 1]}
          style={styles.gradient}
        />
    </View>
  );
};

export default SimpleGradientSecond;