import React, {useState} from 'react';
import {Switch as S, View, ScrollView} from 'react-native';
import {CheckBox, Icon, Switch, Text} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type CheckboxComponentProps = {};

class ViewComponent extends React.Component<{}, {}> {
  render() {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink',
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 28, backgroundColor: 'yellow', color: 'pink'}}>
          ViewComponent
        </Text>
      </View>
    );
  }
}

const CheckboxComponent: React.FunctionComponent<
  CheckboxComponentProps
> = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="CheckBox属性Component验证 传入一个新的组件">
          <TestCase itShould="Component" tags={['C_API']}>
            <CheckBox checked={true} Component={ViewComponent} />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性center验证 是否居中">
          <TestCase itShould="center" tags={['C_API']}>
            <CheckBox checked={true} center={true} />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性checkedTitle验证 checkbox选中时的title">
          <TestCase itShould="checkedTitle" tags={['C_API']}>
            <CheckBox
              checked={check1}
              checkedColor="#0F0"
              checkedTitle="checkbox选中时的title"
              onIconPress={() => setCheck1(!check1)}
              size={30}
              textStyle={{}}
              title="checkbox未选中的title"
              titleProps={{}}
              uncheckedColor="#F00"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性containerStyle验证 checkbox容器样式设置">
          <TestCase itShould="checkedTitle" tags={['C_API']}>
            <CheckBox
              containerStyle={{backgroundColor: 'blue',borderWidth:5,borderColor:'yellow'}}
              checked={true}
              checkedTitle="checkbox选中时的title"
              title="checkbox未选中的title"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性disabled验证 ckeckbox不可点击状态">
          <TestCase itShould="disabled" tags={['C_API']}>
            <CheckBox
              checked={check2}
              disabled={true}
              onPress={() => setCheck2(!check2)}
              checkedTitle="checkbox选中时的title"
              title="checkbox未选中的title"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属disabledStyle验证 ckeckbox不可点击状态下的样式">
          <TestCase itShould="disabledStyle" tags={['C_API']}>
            <CheckBox
              disabledStyle={{
                backgroundColor: 'gray',
                borderRadius: 20,
                borderColor: '#222222',
                borderWidth: 1,
              }}
              checked={check3}
              disabled={true}
              onPress={() => setCheck3(!check3)}
              checkedTitle="checkbox选中时的title"
              title="checkbox未选中的title"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属disabledTitleStyle验证 ckeckbox不可点击状态下文字的样式">
          <TestCase itShould="disabledTitleStyle" tags={['C_API']}>
            <CheckBox
             disabledTitleStyle={{color:'green',fontSize:30,fontWeight:'bold'}}
              disabledStyle={{
                backgroundColor: 'gray',
                borderRadius: 20,
                borderColor: '#222222',
                borderWidth: 1,
              }}
              checked={check3}
              disabled={true}
              onPress={() => setCheck3(!check3)}
              checkedTitle="checkbox选中时的title"
              title="checkbox未选中的title"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属fontFamily验证 设置checkbox的字体">
          <TestCase itShould='fontFamily' tags={['C_API']}>
            <CheckBox
              fontFamily='font-awesome'
              checked={check4}
              onPress={() => setCheck4(!check4)}
              checkedTitle="checkbox选中时的title"
              title="checkbox未选中的title"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性iconRight验证 ckeckbox会显示在文字的右侧">
          <TestCase itShould="iconRight" tags={['C_API']}>
            <CheckBox
              iconRight
              checked={check4}
              checkedColor="#0F0"
              onIconPress={() => setCheck4(!check4)}
              onLongIconPress={() => console.log('onLongIconPress()')}
              onLongPress={() => console.log('onLongPress()')}
              onPress={() => console.log('onPress()')}
              size={30}
              textStyle={{}}
              checkedTitle="checkbox选中时的title"
              title="checkbox未选中的title"
              titleProps={{}}
              uncheckedColor="#F00"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性right验证 ckeckbox会靠右显示">
          <TestCase itShould="right" tags={['C_API']}>
            <CheckBox
              right
              checked={check5}
              checkedColor="#3D3D3D"
              onIconPress={() => setCheck5(!check5)}
              onLongIconPress={() => console.log('onLongIconPress()')}
              onLongPress={() => console.log('onLongPress()')}
              onPress={() => console.log('onPress()')}
              size={30}
              textStyle={{}}
              checkedTitle="checkbox选中时的title"
              title="checkbox未选中的title"
              titleProps={{}}
              uncheckedColor="#F00"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性textStyle验证 文本样式设置 ">
          <TestCase itShould="right" tags={['C_API']}>
            <CheckBox
              
              right
              checked={check5}
              checkedColor="#3D3D3D"
              onIconPress={() => setCheck5(!check5)}
              onLongIconPress={() => console.log('onLongIconPress()')}
              onLongPress={() => console.log('onLongPress()')}
              onPress={() => console.log('onPress()')}
              size={30}
              textStyle={{color:'blue',fontSize:20,fontWeight:'bold'}}
              checkedTitle="checkbox选中时的title"
              title="checkbox未选中的title"
              titleProps={{}}
              uncheckedColor="#F00"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性title验证 ckeckbox旁边的文字">
          <TestCase itShould="title" tags={['C_API']}>
            <CheckBox checked={true} title={'CheckBox title属性验证'} />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性titleProps验证 ckeckbox的titleProps属性设置">
          <TestCase itShould="titleProps" tags={['C_API']}>
            <CheckBox
              checked={check6}
              title={'CheckBox属性titleProps验证'}
              titleProps={{
                numberOfLines: 0,
                lineBreakMode: 'middle',
                style: {color: 'yellow', fontSize: 20},
                onPress: () => {
                  setCheck6(!check6);
                },
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性wrapperStyle验证 ckeckbox的wrapperStyle属性设置">
          <TestCase itShould="wrapperStyle" tags={['C_API']}>
            <CheckBox
              checked={true}
              wrapperStyle={{
                backgroundColor: 'yellow',
                alignSelf: 'center',
                width: 300,
                height:60,
                justifyContent: 'center',
              }}
              title={'CheckBox属性wrapperStyle验证'}
              checkedColor="#5C5C5C"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性style验证 接收React-Native原生View组件的style属性">
          <TestCase itShould="设置React-Native原生View组件的style属性" tags={['C_API']}>
            <CheckBox
              checked={true}
              style={{
                backgroundColor: 'yellow',
                alignSelf: 'center',
                width: 300,
                height:60,
                justifyContent: 'center',
              }}
              title={'接收React-Native原生View组件的style属性'}
              checkedColor="#5C5C5C"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="CheckBox属性testID验证 接收React-Native原生View组件的testID属性">
          <TestCase itShould="设置React-Native原生View组件的testID属性" tags={['C_API']}>
            <CheckBox
              checked={true}
              testID='CheckBox'
              style={{
                backgroundColor: 'yellow',
                alignSelf: 'center',
                width: 300,
                height:60,
                justifyContent: 'center',
              }}
              title={'接收React-Native原生View组件的testID属性'}
              checkedColor="#5C5C5C"
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default CheckboxComponent;
