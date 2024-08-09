import React, { useState } from 'react';
import { View, Dimensions, Button } from 'react-native';
import { IndicatorsExample1 } from './IndicatorsExample1'
import { IndicatorsExample2 } from './IndicatorsExample2'
const { height } = Dimensions.get('window');


export function IndicatorsExample() {
  const [showBtn, setSshowBtn] = useState(true)
  const [showTest1, setShowTest1] = useState(false)
  const [showTest2, setShowTest2] = useState(false)
  return (
    <View style={showBtn ? { height, backgroundColor: '#01579B' } : styles.container}>
      {showBtn && <View style={styles.row}>
        <View style={styles.spacer} />
        <Button title='打开Test1' onPress={() => {
          setShowTest1(true);
          setSshowBtn(false);
        }}></Button>
        <View style={styles.spacer} />
        <Button title='打开Test2' onPress={() => {
          setShowTest2(true);
          setSshowBtn(false);
        }}></Button>
      </View>}
      {showTest1 && <View style={styles.row}>
        <View style={{ height: height - 150 }}>
          <IndicatorsExample1 />
        </View>
        <View style={{ height: 50 }}>
          <Button title='返回' onPress={() => {
            setShowTest1(false);
            setSshowBtn(true);
          }}></Button>
        </View>
      </View>}
      {showTest2 && <View style={styles.row}>
        <View style={{ height: height - 150 }}>
          <IndicatorsExample2 />
        </View>
        <View style={{ height: 50 }}>
          <Button title='返回' onPress={() => {
            setShowTest2(false);
            setSshowBtn(true);
          }}></Button>
        </View>
      </View>}
    </View>
  );
}


const styles = {
  container: {
    backgroundColor: '#01579B',
    padding: 0,
  },
  spacer: {
    margin: 5,
  },
  row: {
    flex: 1
  },

  flex: {
    flex: 1,
  },
};
