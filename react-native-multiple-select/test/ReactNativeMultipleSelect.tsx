import { Component, useState } from 'react';
import React from 'react';
import { Button, FlatList, UIManager, SafeAreaView, ScrollView, StatusBar, Text, View, Platform, StyleSheet, } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

const items = [{
  id: '92iijs7yta',
  name: 'Ondo'
}, {
  id: 'a0s0a8ssbsd',
  name: 'Ogun'
}, {
  id: '16hbajsabsd',
  name: 'Calabar'
}, {
  id: 'nahs75a5sg',
  name: 'Lagos'
}, {
  id: '667atsas',
  name: 'Maiduguri'
}, {
  id: 'hsyasajs',
  name: 'Anambra'
}, {
  id: 'djsjudksjd',
  name: 'Benue'
}, {
  id: 'sdhyaysdj',
  name: 'Kaduna'
}, {
  id: 'suudydjsjd',
  name: 'Abuja'
}
];

export default function ReactNativeMultipleSelect() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar></StatusBar>
      <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }} >
      <View>
      <ScrollView horizontal={true} style={{ width: "100%" }}>
      <Tester style={{ flex: 1 }}>
        <View style={styles.container}>
          <TestSuite name="altFontFamily" key={'altFontFamily'}>
            <TestCase itShould="设置下拉框里面标题的字体" tags={['C_API']}>
              <SelectExampleT1></SelectExampleT1>
            </TestCase>
          </TestSuite>
          <TestSuite name= "fontFamily" key={'fontFamily'}>
            <TestCase itShould="设置除下拉框里之外的所有字体" tags={['C_API']}>
              <SelectExampleT2></SelectExampleT2>
            </TestCase>
          </TestSuite>
          <TestSuite name="itemFontFamily" key={'itemFontFamily'}>
            <TestCase itShould="设置下拉选项的字体" tags={['C_API']}>
              <SelectExampleT3></SelectExampleT3>
            </TestCase>
          </TestSuite>
          <TestSuite name="selectedItemFontFamily" key={'selectedItemFontFamily'}>
            <TestCase itShould="设置选中项目的字体" tags={['C_API']}>
              <SelectExampleT4></SelectExampleT4>
            </TestCase>
          </TestSuite>
          <TestSuite name='canAddItems' key={'canAddItems'}>
            <TestCase itShould="canAddItems为是否同意添加item项，和onAddItem配合使用，当在输入框输入选项之后点击键盘回车即可添加选项" tags={['C_API']}>
              <SelectExample2></SelectExample2>
            </TestCase>
          </TestSuite>
          <TestSuite name='fixedHeight' key={'fixedHeight'}>
            <TestCase itShould="fixedHeight这个是下拉框固定高度,默认为false,指定选择下拉菜单是否采用内容高度或使用滚动条的固定高度" tags={['C_API']}>
              <SelectExample4></SelectExample4>
            </TestCase>
          </TestSuite>
          <TestSuite name='filterMethod' key={'filterMethod'}>
            <TestCase itShould="默认为“partial”。选项：[“partial”、“full”] 选择系统如何根据搜索词过滤项目的逻辑。partial：检查所有单个单词，如果至少有一个单词匹配，则将包含该项目。full：检查以确保该项目包含搜索词的完整子字符串，按顺序减去任何前导或尾随空格。" tags={['C_API']}>
              <SelectExample5></SelectExample5>
            </TestCase>
          </TestSuite>
          <TestSuite name='flatListProps' key={'flatListProps'}>
            <TestCase itShould="flatListProps是FlatList的属性，传递下拉菜单FlatList上所需的任何属性" tags={['C_API']}>
              <SelectExample6></SelectExample6>
            </TestCase>
          </TestSuite>
          <TestSuite name='fontSize' key={'fontSize'}>
            <TestCase itShould="fontSize是标题字体大小" tags={['C_API']}>
              <SelectExample7></SelectExample7>
            </TestCase>
          </TestSuite>
          <TestSuite name='hideDropdown' key={'hideDropdown'}>
            <TestCase itShould="hideDropdown是隐藏下拉菜单" tags={['C_API']}>
              <SelectExample8></SelectExample8>
            </TestCase>
          </TestSuite>
          <TestSuite name='hideSubmitButton' key={'hideSubmitButton'}>
            <TestCase itShould="hideSubmitButton是隐藏提交按钮" tags={['C_API']}>
              <SelectExample9></SelectExample9>
            </TestCase>
          </TestSuite>
          <TestSuite name='hideTags' key={'hideTags'}>
            <TestCase itShould="hideTags是隐藏选定之后的标签" tags={['C_API']}>
              <SelectExample10></SelectExample10>
            </TestCase>
          </TestSuite>
          <TestSuite name='searchIcon' key={'searchIcon'}>
            <TestCase itShould="searchIcon左边搜索图标，比如说设置成紫色" tags={['C_API']}>
              <SelectExample11></SelectExample11>
            </TestCase>
          </TestSuite>
          <TestSuite name='itemFontSize' key={'itemFontSize'}>
            <TestCase itShould="itemFontSize选项字体的大小" tags={['C_API']}>
              <SelectExample13></SelectExample13>
            </TestCase>
          </TestSuite>
          <TestSuite name='itemTextColor' key={'itemTextColor'}>
            <TestCase itShould="itemTextColor是选项中字体的颜色，比如设置成蓝色" tags={['C_API']}>
              <SelectExample14></SelectExample14>
            </TestCase>
          </TestSuite>
          <TestSuite name='noItemsText' key={'noItemsText'}>
            <TestCase itShould="noItemsText是无选项列表时可展示的字符,比如当无选项的时候显示'找不到选项哦'" tags={['C_API']}>
              <SelectExample15></SelectExample15>
            </TestCase>
          </TestSuite>
          <TestSuite name='onChangeInput' key={'onChangeInput'}>
            <TestCase itShould="onChangeInput监听input框输入" tags={['C_API']}>
              <SelectExample1501></SelectExample1501>
            </TestCase>
          </TestSuite>
          <TestSuite name='onClearSelector' key={'onClearSelector'}>
            <TestCase itShould="下拉框列表展开时，搜索框最右边有个back button，点击之后触发" tags={['C_API']}>
              <SelectExample1502></SelectExample1502>
            </TestCase>
          </TestSuite>
          <TestSuite name='onToggleList' key={'onToggleList'}>
            <TestCase itShould="onToggleList是每次触发过下拉框时便会调用" tags={['C_API']}>
              <SelectExample1503></SelectExample1503>
            </TestCase>
          </TestSuite>
          <TestSuite name='searchInputPlaceholderText' key={'searchInputPlaceholderText'}>
            <TestCase itShould="searchInputPlaceholderText是点击搜索列表时的标题,比如改成'请输入内容...'" tags={['C_API']}>
              <SelectExample16></SelectExample16>
            </TestCase>
          </TestSuite>
          <TestSuite name='searchInputStyle' key={'searchInputStyle'}>
            <TestCase itShould="searchInputStyle是开始搜索时输入字体的样式，比如将搜索字体改成紫色" tags={['C_API']}>
              <SelectExample17></SelectExample17>
            </TestCase>
          </TestSuite>
          <TestSuite name='selectText' key={'selectText'}>
            <TestCase itShould="selectText是选择框标题，比如设置成'Pick Items'" tags={['C_API']}>
              <SelectExample1801></SelectExample1801>
            </TestCase>
          </TestSuite>
          <TestSuite name='selectedText' key={'selectedText'}>
            <TestCase itShould="selectedText是选中后标题框后的固定字符，比如设置成'选中个数'" tags={['C_API']}>
              <SelectExample1802></SelectExample1802>
            </TestCase>
          </TestSuite>
          <TestSuite name='selectedItemIconColor' key={'selectedItemIconColor'}>
            <TestCase itShould="selectedItemIconColor是选中之后的图标，比如设置成黑色" tags={['C_API']}>
              <SelectExample1804></SelectExample1804>
            </TestCase>
          </TestSuite>
          <TestSuite name='selectedItemTextColor' key={'selectedItemTextColor'}>
            <TestCase itShould="selectedItemTextColor是选中之后的字体颜色，比如设置成红色" tags={['C_API']}>
              <SelectExample1805></SelectExample1805>
            </TestCase>
          </TestSuite>
          <TestSuite name='single' key={'single'}>
            <TestCase itShould="single设置之后只能选择一个选项" tags={['C_API']}>
              <SelectExample19></SelectExample19>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleDropdownMenu' key={'styleDropdownMenu'}>
            <TestCase itShould="styleDropdownMenu是下拉框的试图样式，比如将此下拉框高度设置到100" tags={['C_API']}>
              <SelectExample20></SelectExample20>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleDropdownMenuSubsection' key={'styleDropdownMenuSubsection'}>
            <TestCase itShould="styleDropdownMenuSubsection是下拉框的内部样式，比如将此下拉框背景设置成黄色" tags={['C_API']}>
              <SelectExample21></SelectExample21>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleIndicator' key={'styleIndicator'}>
            <TestCase itShould="styleIndicator是下拉框右边图标的样式，比如设置成蓝色" tags={['C_API']}>
              <SelectExample22></SelectExample22>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleInputGroup' key={'styleInputGroup'}>
            <TestCase itShould="styleInputGroup是下拉框展开后input的样式，比如背景设置成紫色" tags={['C_API']}>
              <SelectExample23></SelectExample23>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleItemsContainer' key={'styleItemsContainer'}>
            <TestCase itShould="styleItemsContainer是下拉框的选项的颜色，比如设置成绿色" tags={['C_API']}>
              <SelectExample24></SelectExample24>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleListContainer' key={'styleListContainer'}>
            <TestCase itShould="styleListContainer是下拉框容器的样式，比如设置成浅蓝" tags={['C_API']}>
              <SelectExample25></SelectExample25>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleMainWrapper' key={'styleMainWrapper'}>
            <TestCase itShould="styleMainWrapper下方选中标签的背景颜色" tags={['C_API']}>
              <SelectExample26></SelectExample26>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleRowList' key={'styleRowList'}>
            <TestCase itShould="styleRowList是下拉选项每一列的样式,比如设置成红色圆角" tags={['C_API']}>
              <SelectExample27></SelectExample27>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleSelectorContainer' key={'styleSelectorContainer'}>
            <TestCase itShould="styleSelectorContainer当用户点击下拉菜单时，设置选择器容器的样式,比如给一个边距，设置一个浅紫色" tags={['C_API']}>
              <SelectExample28></SelectExample28>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleTextDropdown' key={'styleTextDropdown'}>
            <TestCase itShould="styleTextDropdown下拉菜单的文本样式,比如设置成红色" tags={['C_API']}>
              <SelectExample29></SelectExample29>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleTextDropdownSelected' key={'styleTextDropdownSelected'}>
            <TestCase itShould="styleTextDropdownSelected选择下拉菜单后的文本样式,比如设置成蓝色" tags={['C_API']}>
              <SelectExample30></SelectExample30>
            </TestCase>
          </TestSuite>
          <TestSuite name='styleTextTag' key={'styleTextTag'}>
            <TestCase itShould="styleTextTag是选中之后标签的文本样式。比如设置成紫色" tags={['C_API']}>
              <SelectExample31></SelectExample31>
            </TestCase>
          </TestSuite>
          <TestSuite name='submitButtonColor' key={'submitButtonColor'}>
            <TestCase itShould="submitButtonColor是提交按钮的背景颜色，比如设置成红色" tags={['C_API']}>
              <SelectExample32></SelectExample32>
            </TestCase>
          </TestSuite>
          <TestSuite name='submitButtonText' key={'submitButtonText'}>
            <TestCase itShould="submitButtonText是提交按钮上显示的文本，比如设置成TJ" tags={['C_API']}>
              <SelectExample33></SelectExample33>
            </TestCase>
          </TestSuite>
          <TestSuite name='tagBorderColor' key={'tagBorderColor'}>
            <TestCase itShould="tagBorderColor是标签边框颜色，比如设置成黄色" tags={['C_API']}>
              <SelectExample34></SelectExample34>
            </TestCase>
          </TestSuite>
          <TestSuite name='tagContainerStyle' key={'tagContainerStyle'}>
            <TestCase itShould="tagContainerStyle是标签的容器样式，比如将标签设小点" tags={['C_API']}>
              <SelectExample35></SelectExample35>
            </TestCase>
          </TestSuite>
          <TestSuite name='tagRemoveIconColor' key={'tagRemoveIconColor'}>
            <TestCase itShould="tagRemoveIconColor是标签删除icon的颜色，比如设置成灰色" tags={['C_API']}>
              <SelectExample36></SelectExample36>
            </TestCase>
          </TestSuite>
          <TestSuite name='tagTextColor' key={'tagTextColor'}>
            <TestCase itShould="tagTextColor是选中标签的文本颜色，比如设置成灰色" tags={['C_API']}>
              <SelectExample37></SelectExample37>
            </TestCase>
          </TestSuite>
          <TestSuite name='textColor' key={'textColor'}>
            <TestCase itShould="textColor作为多选标签显示的所选项目名称的颜色,比如设置成黄色" tags={['C_API']}>
              <SelectExample38></SelectExample38>
            </TestCase>
          </TestSuite>
          <TestSuite name='textInputProps' key={'textInputProps'}>
            <TestCase itShould="textInputProps文本输入的属性。传递文本输入所需的任何属性,比如在输入文本时将文字改成红色" tags={['C_API']}>
              <SelectExample39></SelectExample39>
            </TestCase>
          </TestSuite>
          <TestSuite name='removeSelected' key={'removeSelected'}>
            <TestCase itShould="removeSelected选中的项目将从列表移除，然后提交后展示在标签里" tags={['C_API']}>
              <SelectExample40></SelectExample40>
            </TestCase>
          </TestSuite>
          <TestSuite name='["items","uniqueKey","onSelectedItemsChange","selectedItems","displayKey"]' key={'displayKey1'}>
            <TestCase itShould="这些属性是列表固定的属性，items是下拉选项值，uniqueKey每个项目属性的唯一标识符，onSelectedItemsChange用于单选时触发，selectedItems所选项目键的列表,displayKey的默认值和item中的name名称一样" tags={['C_API']}>
              <SelectExample41></SelectExample41>
            </TestCase>
          </TestSuite>
        </View>
      </Tester>
      </ScrollView>
      </View>
    </ScrollView>
    </SafeAreaView >
  );
}
class SelectExampleT1 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          altFontFamily="Pacifico-Regular"
        />
      </View>
    );
  }
}
class SelectExampleT2 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          fontFamily="Pacifico-Regular"
        />
      </View>
    );
  }
}
class SelectExampleT3 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          itemFontFamily="Pacifico-Regular"
        />
      </View>
    );
  }
}
class SelectExampleT4 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectedItemFontFamily="Pacifico-Regular"
        />
      </View>
    );
  }
}
class SelectExample2 extends Component {
  state = {
    selectedItems: [],
    list: [{
      id: '92iijs7yta',
      name: 'Ondo'
    }, {
      id: 'a0s0a8ssbsd',
      name: 'Ogun'
    }, {
      id: '16hbajsabsd',
      name: 'Calabar'
    }, {
      id: 'nahs75a5sg',
      name: 'Lagos'
    }, {
      id: '667atsas',
      name: 'Maiduguri'
    }, {
      id: 'hsyasajs',
      name: 'Anambra'
    }, {
      id: 'djsjudksjd',
      name: 'Benue'
    }, {
      id: 'sdhyaysdj',
      name: 'Kaduna'
    }, {
      id: 'suudydjsjd',
      name: 'Abuja'
    }
    ]
  }
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  onAddItem = (newItems: any) => {
    const that = this
    this.setState({
      list: newItems
    })
  };

  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={this.state.list}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          canAddItems={true}
          onAddItem={this.onAddItem}
        />
      </View>
    );
  }
}
class SelectExample4 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          fixedHeight={false}
          selectText="fixedHeight=false"
        />
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          fixedHeight={true}
          selectText="fixedHeight=true"
        />
      </View>
    );
  }
}
class SelectExample5 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          filterMethod="partial"
          selectText="filterMethod=partial"
        />
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          filterMethod="full"
          selectText="filterMethod=full"
        />
      </View>
    );
  }
}
class SelectExample6 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          flatListProps={{
            ListFooterComponent:()=>{
              return <View style={{backgroundColor:'red'}}>
                <Text>自定义的flatLis</Text>
              </View>
            }
          }}
        />
      </View>
    );
  }
}
class SelectExample7 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          fontSize={6}
        />
      </View>
    );
  }
}
class SelectExample8 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          displayKey=''
          hideDropdown={true}
        />
      </View>
    );
  }
}
class SelectExample9 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          hideSubmitButton={true}
        />
      </View>
    );
  }
}
class SelectExample10 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          hideTags
        />
      </View>
    );
  }
}
class SelectExample11 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  defaultSearchIcon = (
    <Icon
      name="magnify"
      size={20}
      color={'#d501f9'}
      style={{ marginRight: 10 }}
    />
  );
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          searchIcon={this.defaultSearchIcon}
        />
      </View>
    );
  }
}
class SelectExample13 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          itemFontSize={25}
        />
      </View>
    );
  }
}
class SelectExample14 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          itemTextColor="#0655eb"
        />
      </View>
    );
  }
}
class SelectExample15 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  noitems: any[] = [
  ];
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={this.noitems}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          noItemsText={'找不到选项哦'}
        />
      </View>
    );
  }
}
class SelectExample1501 extends Component {
  state = {
    selectedItems: [],
    val: ""
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  onChangeInput = (char: any) => {
    this.setState({
      val: char
    })
  }
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems, val } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ height: 30 }}>输入字符：{val}</Text>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          onChangeInput={this.onChangeInput}
        />
      </View>
    );
  }
}
class SelectExample1502 extends Component {
  state = {
    selectedItems: [],
    val: 'false'
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  onClearSelector = () => {
    this.setState({
      selector: true,
      val: 'true'
    })
  }
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems, val } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ height: 30 }}>是否触发过收起下拉框：{val}</Text>
          <MultiSelect
            items={items}
            uniqueKey="id"
            ref={(component) => { this.multiSelect = component }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            onClearSelector={this.onClearSelector}
          />
      </View>
    );
  }
}
class SelectExample1503 extends Component {
  state = {
    selectedItems: [],
    val: 'false'
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  onToggleList = () => {
    this.setState({
      val: 'true'
    })
  }
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems, val } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ height: 30 }}>是否触发过下拉框：{val}</Text>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          onToggleList={this.onToggleList}
        />
      </View>
    );
  }
}
class SelectExample16 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  noitems: any[] = [
  ];
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          searchInputPlaceholderText="请输入内容..."
        />
      </View>
    );
  }
}
class SelectExample17 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  noitems: any[] = [
  ];
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          searchInputStyle={{ color: '#8a06eb' }}
        />
      </View>
    );
  }
}
class SelectExample1801 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  noitems: any[] = [
  ];
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
        />
      </View>
    );
  }
}
class SelectExample1802 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  noitems: any[] = [
  ];
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectedText={"选中个数"}
        />
      </View>
    );
  }
}
class SelectExample1804 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  noitems: any[] = [
  ];
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectedItemIconColor='#000'
        />
      </View>
    );
  }
}
class SelectExample1805 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  noitems: any[] = [
  ];
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectedItemTextColor='red'
        />
      </View>
    );
  }
}
class SelectExample19 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  noitems: any[] = [
  ];
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          single={true}
        />
      </View>
    );
  }
}
class SelectExample20 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleDropdownMenu={{
            height: 100,
          }}
        />
      </View>
    );
  }
}
class SelectExample21 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleDropdownMenuSubsection={{
            backgroundColor: 'yellow',
          }}
        />
      </View>
    );
  }
}
class SelectExample22 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleIndicator={{
            backgroundColor: 'blue',
          }}
        />
      </View>
    );
  }
}
class SelectExample23 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleInputGroup={{
            backgroundColor: '#b16aef',
          }}
        />
      </View>
    );
  }
}
class SelectExample24 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleItemsContainer={{
            backgroundColor: '#6aef7c',
          }}
        />
      </View>
    );
  }
}
class SelectExample25 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleListContainer={{
            backgroundColor: '#74b7f9',
            padding: 30
          }}
        />
      </View>
    );
  }
}
class SelectExample26 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleMainWrapper={{
            backgroundColor: '#f17a31',
          }}
        />
      </View>
    );
  }
}
class SelectExample27 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleRowList={{
            backgroundColor: '#ed4242',
            borderRadius: 20
          }}
        />
      </View>
    );
  }
}
class SelectExample28 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleSelectorContainer={{
            backgroundColor: '#9e9ee5',
            paddingTop: 20
          }}
        />
      </View>
    );
  }
}
class SelectExample29 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleTextDropdown={{
            color: 'red'
          }}
        />
      </View>
    );
  }
}
class SelectExample30 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleTextDropdownSelected={{
            color: 'blue'
          }}
        />
      </View>
    );
  }
}
class SelectExample31 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          styleTextTag={{
            color: '#b014f1',
          }}
        />
      </View>
    );
  }
}
class SelectExample32 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          submitButtonColor="red"
        />
      </View>
    );
  }
}
class SelectExample33 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          submitButtonText="TJ"
        />
      </View>
    );
  }
}
class SelectExample34 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          tagBorderColor="yellow"
        />
      </View>
    );
  }
}
class SelectExample35 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          tagContainerStyle={{
            height: 30,
            width: 70
          }}
        />
      </View>
    );
  }
}
class SelectExample36 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          tagRemoveIconColor="#CCC"
        />
      </View>
    );
  }
}
class SelectExample37 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          tagTextColor="#CCC"
        />
      </View>
    );
  }
}
class SelectExample38 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          textColor="yellow"
        />
      </View>
    );
  }
}
class SelectExample39 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          textInputProps={{
            style: { color: 'red' }
          }}
        />
      </View>
    );
  }
}
class SelectExample40 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          removeSelected={true}
        />
      </View>
    );
  }
}
class SelectExample41 extends Component {
  state = {
    selectedItems: []
  };
  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };
  multiSelect!: MultiSelect | any;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          displayKey='name'
          fixedHeight={false}
        />
      </View>
    );
  }
}

export { ReactNativeMultipleSelect }


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    width: 380
  },
});