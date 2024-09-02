
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker, List, Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';
import datas from './pickerData/data.json';

export default () => {
  const [value, setvalue] = useState<any>(new Date());
  const [value1, setvalue1] = useState<any>(new Date());
  const [value2, setvalue2] = useState<any>(new Date());
  const [value3, setvalue3] = useState<any>(new Date());
  const [value4, setvalue4] = useState<any>(new Date());
  const [value5, setvalue5] = useState<any>(new Date());
  const [value6, setvalue6] = useState<any>(new Date());
  const [value7, setvalue7] = useState<any>(new Date());
  const [value8, setvalue8] = useState<any>(new Date());
  const [value9, setvalue9] = useState<any>(new Date());
  const [value10, setvalue10] = useState<any>(new Date());

  return (
    <TestSuite name="PickerTest">
      <TestCase itShould="render a Picker data" tags={['C_API']}>
        <List>
          <Picker data={datas} value={value7} onChange={(value) => { setvalue7(value) }}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker value" tags={['C_API']}>
        <List>
          <Picker data={datas} value={value1} onChange={(value: any) => { setvalue1(value) }}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker defaultValue={['湖北省','武汉市','洪山区']}" tags={['C_API']}>
        <List>
          <Picker data={datas} defaultValue={['42', '4201', '420111']}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker styles={{okText:{fontSize:30}}}" tags={['C_API']}>
        <List>
          <Picker data={datas} styles={{ okText: { fontSize: 30 } }}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker cascade={false}" tags={['C_API']}>
        <List>
          <Picker data={datas} value={value} onChange={(value: any) => { setvalue(value) }} cascade={false}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker cols={2}" tags={['C_API']}>
        <List>
          <Picker data={datas} cols={2} value={value8} onChange={(value) => { setvalue8(value) }}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <Picker data={datas} value={value2} onChange={(value: any) => { setvalue2(value); setState(true); }}>
              <List.Item arrow="horizontal">{'省市选择'}</List.Item>
            </Picker>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Picker onPickerChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <Picker data={datas} value={value3} onPickerChange={(value: any) => { setvalue3(value); setState(true); }}>
              <List.Item arrow="horizontal">{'省市选择'}</List.Item>
            </Picker>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Picker onVisibleChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <Picker data={datas} value={value3} onVisibleChange={() => { setState(true); }}>
              <List.Item arrow="horizontal">{'省市选择'}</List.Item>
            </Picker>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Picker renderLabel" tags={['C_API']}>
        <PikerRenderLabelTest />
      </TestCase>
      <TestCase itShould="render a Picker title='请选择地址'" tags={['C_API']}>
        <List>
          <Picker data={datas} title='请选择地址' value={value9} onChange={(value) => { setvalue9(value) }}>
            <List.Item arrow="horizontal">选择地址</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker okText='Yes'" tags={['C_API']}>
        <List>
          <Picker data={datas} okText='Yes'>
            <List.Item arrow="horizontal">请选择</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker dismissText='NO'" tags={['C_API']}>
        <List>
          <Picker data={datas} dismissText='NO'>
            <List.Item arrow="horizontal">请选择</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker onOk()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <Picker data={datas} value={value4} onOk={(value) => { setvalue4(value); setState(true); }}>
              <List.Item arrow="horizontal">{'省市选择'}</List.Item>
            </Picker>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Picker onDismiss()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <Picker data={datas} value={value5} onDismiss={() => { setState(true); }}>
              <List.Item arrow="horizontal">{'省市选择'}</List.Item>
            </Picker>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Picker visible control" tags={['C_API']}>
        <BasicDemo />
      </TestCase>
      <TestCase itShould="render a PickerTest loading" tags={['C_API']}>
        <PopupLoadingExample />
      </TestCase>
      <TestCase itShould="render a PickerTest loadingContent='加载中...'" tags={['C_API']}>
        <PopuploadingContentExample />
      </TestCase>
      <TestCase itShould="render a Picker indicatorStyle={{ backgroundColor: 'red' }}" tags={['C_API']}>
        <List>
          <Picker data={datas} indicatorStyle={{ backgroundColor: 'red' }}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker itemStyle={{backgroundColor:'pink'}}" tags={['C_API']}>
        <List>
          <Picker data={datas} itemStyle={{ backgroundColor: 'pink' }}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker itemHeight={60}" tags={['C_API']}>
        <List>
          <Picker data={datas} itemHeight={60}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker numberOfLines={3}" tags={['C_API']}>
        <List>
          <Picker data={datas} numberOfLines={3}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker renderMaskTop backgroundColor='pink'" tags={['C_API']}>
        <List>
          <Picker data={datas} renderMaskTop={() => <View style={{ backgroundColor: 'pink', width: 400, height: 100 }}><Text>top</Text></View>}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker renderMaskBottom backgroundColor='aqua'" tags={['C_API']}>
        <List>
          <Picker data={datas} renderMaskBottom={() => <View style={{ backgroundColor: 'aqua', width: 400, height: 100 }}><Text>bottom</Text></View>}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker children=<List.Item></List.Item>" tags={['C_API']}>
        <List>
          <Picker data={datas}>
            <List.Item arrow="horizontal">List.Item占位</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker extra='请选择地址'" tags={['C_API']}>
        <List>
          <Picker data={datas} extra='请选择地址'>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker format=yyyy-mm-nn" tags={['C_API']}>
        <List>
          <Picker data={datas} format={(labels) => { return labels.join('-'); }} value={value6} onChange={(value) => { setvalue6(value) }}>
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker triggerType='onLongPress'" tags={['C_API']}>
        <List>
          <Picker data={datas} triggerType='onLongPress' value={value10} onChange={(value: any) => { setvalue10(value) }}>
            <List.Item arrow="horizontal">长按选址</List.Item>
          </Picker>
        </List>
      </TestCase>
      <TestCase itShould="render a Picker disabled=true" tags={['C_API']}>
        <PikerDisabled />
      </TestCase>
      <TestCase itShould="render a Picker style={{padding: 20, backgroundColor:'pink'}}" tags={['C_API']}>
        <List>
          <Picker data={datas} style={{ padding: 10, backgroundColor: 'pink' }}>
            <List.Item arrow="horizontal">选址</List.Item>
          </Picker>
        </List>
      </TestCase>
    </TestSuite>
  );
};

function PikerRenderLabelTest() {
  const fruitOptions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];
  const [selectedValue, setSelectedValue] = useState<any>('apple');

  const renderCustomLabel = (option: any) => (
    <View>
      <Text style={{ textAlign: 'center', lineHeight: 30 }}>{option.label}</Text>
    </View>
  );

  return (
    <List>
      <Picker
        data={fruitOptions}
        value={selectedValue}
        cols={1}
        onChange={value => setSelectedValue(value)}
        renderLabel={renderCustomLabel}
      >
        <List.Item arrow="horizontal">水果</List.Item>
      </Picker>
    </List>
  )
}

class PopupLoadingExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
      loading: false,
    }
  }
  onPress = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        data: datas,
        loading: false
      });
    }, 2000);
  };

  onChange = (value: any) => {
    this.setState({ value })
  }
  render() {
    return (
      <View>
        <List>
          <Picker
            loading={this.state.loading}
            visible={this.state.visible}
            data={this.state.data}
            cols={3}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal" onPress={this.onPress}>{'省市选择'}</List.Item>
          </Picker>
        </List>
      </View>
    )
  }
}

class PopuploadingContentExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
      loading: false,
    }
  }
  onPress = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        data: datas,
        loading: false
      });
    }, 2000);
  };

  onChange = (value: any) => {
    this.setState({ value })
  }
  render() {
    return (
      <View>
        <List>
          <Picker
            loading={this.state.loading}
            loadingContent={<Text style={{ fontSize: 18, marginLeft: 150 }}>加载中...</Text>}
            visible={this.state.visible}
            data={this.state.data}
            cols={3}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal" onPress={this.onPress}>{'省市选择'}</List.Item>
          </Picker>
        </List>
      </View>
    )
  }
}

function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<any[]>([])
  const [extend, setExtend] = useState<any>()
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingLeft: 16,
      }}>
      <Button
        type="primary"
        onPress={() => {
          setVisible(true)
        }}>
        选择
      </Button>

      {/* extend渲染所选值 */}
      <Text>
        {extend?.items?.map((item: any) => item.label).join(',') || ' 未选择'}
      </Text>

      {/* visible控制显示/隐藏 */}
      <Picker
        data={datas}
        cols={3}
        onChange={setValue}
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
        value={value}
        onOk={(v: any, ext: any) => {
          setValue(v)
          setExtend(ext)
        }}
      />
    </View>
  )
}

class PikerDisabled extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
    }
  }
  onChange = (value: any) => {
    this.setState({ value })
  }
  render() {
    return (
      <View>
        <List>
          <Picker
            data={datas}
            cols={3}
            disabled={true}
          >
            <List.Item arrow="horizontal">{'省市选择'}</List.Item>
          </Picker>
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: 'green'
  }
});
