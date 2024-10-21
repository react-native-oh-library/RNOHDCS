import React, { Component, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Button, Alert, Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {
  Tester,
  TestSuite,
  TestCase
} from '@rnoh/testerino';

export class DropDownTest extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef(); // 创建 ref
    this.onChangeText = this.onChangeText.bind(this);
    this.codeRef = this.updateRef.bind(this, 'code');
    this.nameRef = this.updateRef.bind(this, 'name');
    this.sampleRef = this.updateRef.bind(this, 'sample');
    this.typographyRef = this.updateRef.bind(this, 'typography');
    this.state = {
      sample: 'The quick brown fox jumps over the lazy dog',
      typography: 'item1',
      name: 'Cyan',
      code: 'A700',
      selectedValue: '',
      selectedValueAndId: '',
      selectedValueWithpropsExtractor: '',
      selectedIndex: null, // 存储选中项的索引
      selectedItem: '', // 存储选中项的值
      isFocused: false, // 聚焦状态
    };
  }

  handleSelect = (value, index) => {
    this.setState({ selectedIndex: index, selectedItem: value }); // 更新选中项
    Alert.alert('选中项', value); // 弹出选中项
  };

  getValue = () => {
    Alert.alert('当前选中value的值', this.state.selectedItem || '无');
  };


  focusDropdown = () => {
    if (this.dropdownRef.current) {
      this.dropdownRef.current.focus(); // 聚焦下拉框
      this.setState({ isFocused: true }); // 更新聚焦状态
    }
  };

  blurDropdown = () => {
    if (this.dropdownRef.current) {
      this.dropdownRef.current.blur(); // 失去焦点
      this.setState({ isFocused: false }); // 更新聚焦状态
    }
  };

  getSelectedIndex = () => {
    Alert.alert('当前选中项索引', this.state.selectedIndex !== null ? this.state.selectedIndex.toString() : '无');
  };

  checkIsFocused = () => {
    Alert.alert('下拉框聚焦状态', this.state.isFocused ? '是' : '否');
  };

  getSelectedItem = () => {
    Alert.alert('当前选中SelectedItem的值', this.state.selectedItem || '无');
  };

  onChangeText(text) {
    ['name', 'code', 'sample', 'typography']
      .map((name) => ({ name, ref: this[name] }))
      .filter(({ ref }) => ref && ref.isFocused())
      .forEach(({ name, ref }) => {
        this.setState({ [name]: text });
      });

  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  render() {
    const dataValue = [
      { value: '选项 1' },
      { value: '选项 2' },
      { value: '选项 3' },
      { value: '选项 4' },
    ];

    const dataValueAndId = [
      { id: '1', name: 'dataValueAndId 1' },
      { id: '2', name: 'dataValueAndId 2' },
      { id: '3', name: 'dataValueAndId 3' },
      { id: '4', name: 'dataValueAndId 4' },
    ];

    const propsExtractorData = [
      { id: '1', name: 'propsExtractorData 1', color: 'red' },
      { id: '2', name: 'propsExtractorData 2', color: 'blue' },
      { id: '3', name: 'propsExtractorData 3', color: 'green' },
      { id: '4', name: 'propsExtractorData 4', color: 'purple' },
    ];

    let { typography, name, code, sample } = this.state;
    let textStyle = [
      styles.text,
      styles[typography],
      styles[name + code],
    ];

    return (
      <View style={styles.screen}>
        <Tester style={{ flex: 1, backgroundColor: 'black' }}>
          <ScrollView>
            <TestSuite name="DropDown测试case">
              <View style={styles.container}>
                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:value和data属性(必选)">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography} //选中值
                        data={typographyData} //item 条目值
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:label属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        label='i am label' //标签
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:error属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        error='i am error' // 错误提示语
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:animationDuration属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        animationDuration={1200} //显示dropdown动画时长
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:fontSize属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        fontSize={25} //字体大小
                      />
                    </View>
                  </TestCase>
                </TestSuite>


                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:labelFontSize属性,需要和lable属性一起使用">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        label='i am label' //标签
                        labelFontSize={25} //标签字体大小
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:shadeOpacity属性,item条目设置阴影透明度深">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        shadeOpacity={10}//进入item条目后 按下阴影透明度
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:shadeOpacity属性, item条目设置阴影透明度浅">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        shadeOpacity={0.12}//进入item条目后 按下阴影透明度
                      />
                    </View>
                  </TestCase>
                </TestSuite>


                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:rippleOpacity属性 设置波纹透明度深">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        rippleOpacity={10} //按下时候波纹透明度
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:rippleOpacity属性,设置波纹透明度浅">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        rippleOpacity={0.54} //按下时候波纹透明度.默认值0.54
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:textColor属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        textColor='yellow'//被选中的value颜色
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:itemColor属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        itemColor='red'//itemt条目颜色
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:selectedItemColor属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        selectedItemColor='green'//item被选中颜色
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:itemPadding属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        itemPadding='30'//item条目内边距
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:baseColor属性">
                    <View style={styles.container}>
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        baseColor={'red'} //按下时候条目颜色
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:disabledItemColor属性, 不可使用的设置为red颜色,item需要同时设置disabled: true">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        disabledItemColor={"red"} //设置disabledItemColor颜色
                        propsExtractor={(props) => { return { disabled: props.disabled } }}
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:dropdownPosition属性位置">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        dropdownPosition={5} //下拉列表显示位置信息
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:itemCount属性">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        itemCount={3} //下拉列表显示位置信息
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:itemTextStyle属性">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        itemTextStyle={styles.itemText} //itemTextStyle样式定义
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:dropdownOffset属性">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        dropdownOffset={{ top: 150, left: 100 }} // 设置下拉菜单的偏移量
                      />
                    </View>
                  </TestCase>
                </TestSuite>


                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:dropdownMargins属性">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        dropdownMargins={{ min: 8 }} // 设置下拉菜单的最小外边距
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:containerStyle 属性">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        containerStyle={styles.dropdownContainer} // 使用 containerStyle 自定义容器样式
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:overlayStyle 属性">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        overlayStyle={styles.overlayStyle} // 使用 overlayStyle 自定义覆盖层样式
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:pickerStyle 属性">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        pickerStyle={styles.pickerStyle} // 使用 overlayStyle 自定义覆盖层样式
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:rippleInsets 属性">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        rippleInsets={{ top: 5, bottom: 5, left: 5, right: 5 }} // 设置涟漪效果的边距
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:rippleCentered 属性,设置为true效果">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        rippleCentered={true} // 设置涟漪效果居中
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:rippleCentered 属性,设置为false效果">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        rippleCentered={false} // 设置涟漪效果不居中
                      />
                    </View>
                  </TestCase>
                </TestSuite>


                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:renderAccessory 属性测试,需要指定renderRightAccessory或者renderLeftAccessory">
                    <View style={styles.container}>
                      <Dropdown
                        value={typography}
                        data={typographyData}
                        dropdownPosition={0}
                        dropdownOffset={{ top: 10, left: 0, }}
                        pickerStyle={{}}
                        renderRightAccessory={() => <View style={{ width: 30, borderWidth: 0.5 }}>
                          <Image source={{ uri: 'https://pics1.baidu.com/feed/c2cec3fdfc0392456576003568f8f3cc7c1e2540.jpeg@f_auto?token=b8c70f853c3c1bd7984b47a2e382552a' }}
                            style={{ width: 30, height: 30}} />
                        </View>}
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:renderBase 自定义下拉菜单的基础属性">
                    <View style={styles.container}>
                      <Dropdown
                        label="下拉菜单 (自定义基础)"
                        data={dataValue}
                        value={this.state.selectedValue}
                        onChangeText={(value) => {
                          this.setState({ selectedValue: value });
                        }}
                        renderBase={(inputProps) => (
                          <View style={styles.customBase}>
                            <Text style={styles.customLabel}>{inputProps.label}</Text>
                            <Text style={styles.selectedValue}>{this.state.selectedValue || '请选择...'}</Text>
                          </View>
                        )}
                      />
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:valueExtractor 和 labelExtractor属性">
                    <View style={styles.container}>
                      <Dropdown
                        label="下拉菜单 valueExtractor 和 labelExtractor属性"
                        data={dataValueAndId}
                        value={this.state.selectedValueAndId}
                        onChangeText={(value) => {
                          this.setState({ selectedValueAndId: value });
                        }}
                        valueExtractor={(item) => item.id} // 提取每个选项的 id 作为值
                        labelExtractor={(item) => item.name} // 提取每个选项的 name 作为标签
                      />
                      <Text style={styles.selectedText}>选中的值: {this.state.selectedValueAndId}</Text>
                    </View>
                  </TestCase>
                </TestSuite>

                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:propsExtractor属性">
                    <View style={styles.container}>
                      <Dropdown
                        label="下拉菜单 (使用 propsExtractor)"
                        data={propsExtractorData}
                        value={this.state.selectedValueWithpropsExtractor}
                        onChangeText={(value) => {
                          this.setState({ selectedValueWithpropsExtractor: value });
                          console.log('选中的值:', value);
                        }}
                        valueExtractor={(item) => item.id} // 提取每个选项的 id 作为值
                        labelExtractor={(item) => item.name} // 提取每个选项的 name 作为标签
                        // 提取额外的属性（如颜色）并将其应用于下拉菜单项
                        propsExtractor={(item) => ({ style: { backgroundColor: item.color } })}
                      />
                    </View>
                  </TestCase>
                </TestSuite>


                <TestSuite name="DropDown测试case">
                  <TestCase itShould="Props:API方法测试">
                    <View style={{ padding: 20 }}>
                      <Text>当前选中索引: {this.state.selectedIndex !== null ? this.state.selectedIndex : '无'}</Text>
                      <Text>当前选中值: {this.state.selectedItem || '无'}</Text>
                      <Text>下拉框聚焦状态: {this.state.isFocused ? '是' : '否'}</Text>
                      <Dropdown
                        ref={this.dropdownRef} // 关联 ref
                        label="请选择"
                        data={typographyData}
                        onChangeText={this.handleSelect} // 处理选中事件
                        baseColor="#000"
                        textColor="#000"
                        itemColor="#000"
                        containerStyle={{ width: '100%', marginBottom: 20 }}
                      />
                      <View style={{ padding: 10 }}>
                        <Button title="聚焦下拉框 focus()" onPress={this.focusDropdown} />
                      </View>
                      <View style={{ padding: 10 }}>
                        <Button title="失去焦点 blur()" onPress={this.blurDropdown} />
                      </View>
                      <View style={{ padding: 10 }}>
                        <Button title="获取选中项索引selectedIndex()" onPress={this.getSelectedIndex} />
                      </View>
                      <View style={{ padding: 10 }}>
                        <Button title="获取选中项值 value()" onPress={this.getValue} />
                      </View>
                      <View style={{ padding: 10 }}></View>
                      <Button title="检查聚焦状态 isFocused()" onPress={this.checkIsFocused} />
                    </View>
                    <View style={{ padding: 10 }}>
                      <Button title="获取选中项值 selectedItem()" onPress={this.getSelectedItem} />
                    </View>
                  </TestCase>
                </TestSuite>



                <View style={{ height: 200 }}>
                  <Text></Text>
                </View>
              </View>
            </TestSuite>
          </ScrollView>
        </Tester>
      </View>
    );
  }
}
const typographyData = [
  { value: 'item1' },
  { value: 'item2' },
  { value: 'item3' },
  { value: 'item4' },
  { value: 'item5' },
  { value: 'item6' },
  { value: 'item7' },
  { value: 'item8', disabled: true },
];

const styles = {
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
  },
  screen: {
    flex: 1,
    padding: 4,
    paddingTop: 10,
    backgroundColor: 'black',
  },

  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
  },

  text: {
    textAlign: 'center',
  },

  itemText: {
    color: 'blue', // 设置文本颜色为蓝色
    fontSize: 16,  // 设置字体大小
    fontWeight: 'bold', // 设置字体为粗体
  },

  dropdownContainer: {
    width: '100%', // 宽度设置为100%
    backgroundColor: '#ffffff', // 背景颜色
    borderWidth: 1, // 边框宽度
    borderColor: '#ccc', // 边框颜色
    borderRadius: 5, // 圆角
    padding: 10, // 内边距
    elevation: 2, // 阴影效果 (Android)
    shadowColor: '#000', // 阴影颜色 (iOS)
    shadowOffset: { width: 0, height: 2 }, // 阴影偏移 (iOS)
    shadowOpacity: 0.2, // 阴影透明度 (iOS)
    shadowRadius: 2, // 阴影半径 (iOS)
  },
  overlayStyle: {
    height: "100%",
    backgroundColor: 'blue', // 背景颜色
    borderWidth: 1, // 边框宽度
    borderColor: '#ccc', // 边框颜色
    borderRadius: 5, // 圆角
    elevation: 3, // 阴影效果 (Android)
    shadowColor: '#000', // 阴影颜色 (iOS)
    shadowOffset: { width: 0, height: 2 }, // 阴影偏移 (iOS)
    shadowOpacity: 0.3, // 阴影透明度 (iOS)
    shadowRadius: 4, // 阴影半径 (iOS)
  },

  pickerStyle: {
    height: "100%",
    backgroundColor: 'yellow', // 背景颜色
    borderWidth: 1, // 边框宽度
    borderColor: '#ccc', // 边框颜色
    borderRadius: 5, // 圆角
    elevation: 3, // 阴影效果 (Android)
    shadowColor: '#000', // 阴影颜色 (iOS)
    shadowOffset: { width: 0, height: 2 }, // 阴影偏移 (iOS)
    shadowOpacity: 0.3, // 阴影透明度 (iOS)
    shadowRadius: 4, // 阴影半径 (iOS)
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
  customBase: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#ffffff',
    width: '100%',
    alignItems: 'flex-start',
    elevation: 3, // Android阴影效果
    shadowColor: '#000', // iOS阴影颜色
    shadowOffset: { width: 0, height: 2 }, // iOS阴影偏移
    shadowOpacity: 0.3, // iOS阴影透明度
    shadowRadius: 4, // iOS阴影半径
  },
  customLabel: {
    fontSize: 14,
    color: '#999',
  },
  selectedValue: {
    fontSize: 16,
    color: '#333',
  },

  dropdown: {
    width: '100%',
    marginBottom: 20,
  },
};

