import {useState} from 'react';
import {Text, View} from 'react-native';
import {Dash} from 'react-native-ui-lib';
import {TestCase, TestSuite} from '@rnoh/testerino';

const DashScreen = () => {
  const [state, setState] = useState({
    vertical: true,
    length: 50,
    thickness: 10,
    color: 'red',
  });
  return (
    <TestSuite name="Dash">
      <TestCase itShould="设置 vertical, length, thickness, color">
        <View padding-20>
          <View>
            <Text style={{margin: 20, fontSize: 40}}>
              当前设置 方向vertical:{state.vertical.toString()}
            </Text>
            <Text style={{margin: 20, fontSize: 40}}>
              length: {state.length}
            </Text>
            <Text style={{margin: 20, fontSize: 40}}>color: {state.color}</Text>
            <Text>333</Text>
            <Dash
              vertical={state.vertical}
              length={state.length}
              thickness={state.thickness}
              color={state.color}
              style={{width: '100%'}}
            />
            <Text>44</Text>
            <Text
              style={{marginTop: 20, fontSize: 40}}
              onPress={v => setState({...state, vertical: !state.vertical})}>
              改变方向
            </Text>
            <Text
              style={{marginTop: 20, fontSize: 40}}
              onPress={v =>
                setState({
                  ...state,
                  color: state.color == 'green' ? 'red' : 'green',
                })
              }>
              改变颜色
            </Text>
            <Text
              style={{marginTop: 20, fontSize: 40}}
              onPress={v =>
                setState({...state, length: state.length == 50 ? 150 : 50})
              }>
              改变长度
            </Text>
          </View>
        </View>
      </TestCase>
    </TestSuite>
  );
};

export default DashScreen;
