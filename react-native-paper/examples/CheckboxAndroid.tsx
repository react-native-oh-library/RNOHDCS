import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';

export function CheckboxAndroid() {
  const [checked, setChecked] = useState(false)
  const [checkedDisabled, setcheckedDisabled] = useState(false)

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Tester>
      <ScrollView>
        <TestSuite name='Checkbox.Android'>
          <TestCase itShould='不设置颜色的时候，已选择的颜色默认为紫色，未选择的颜色默认为黑色；此处设置了对应颜色'>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
              <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                //onPress组件的回调函数
                onPress={toggleCheckbox}
                //组件未选择时候的颜色
                uncheckedColor={'red'}
                // color属性 组件选择时候的的颜色，也可以写在themem中
                // color={'green'}
                //theme里面可以直接写color属性，也是对选择颜色属性设置，此处展示color写在theme中的情况
                theme={{
                  colors: {
                    primary: "green",
                  }
                }}
                // 组件是否能被点击，默认为false，即可以点击
                disabled={checkedDisabled}
                // 设置 testID ,类似该组件的自定义ID
                testID="my-checkbox"
              />
              <Text>{checked ? '已选择的颜色为绿色' : '未选择的颜色为红色'}</Text>
            </View>
            <Button onPress={() => setcheckedDisabled(true)} style={{ backgroundColor: 'red' }}>
              点击按键，使选择框无法点击
            </Button>
            <Button onPress={() => setcheckedDisabled(false)} style={{ backgroundColor: 'green' }} >
              点击按键，使选择框恢复点击
            </Button>
          </TestCase>
        </TestSuite>

        <TestCase itShould='status的第三种展示属性'>
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
            <Checkbox.Android
              status={'indeterminate'}
              // 设置 testID ,类似该组件的自定义ID
              testID="my-checkbox2"
            />
            <Text>这里只展示status的第三种属性配置,不确定图标</Text>
          </View>
        </TestCase>
      </ScrollView>
    </Tester>


  );
};

export default CheckboxAndroid;