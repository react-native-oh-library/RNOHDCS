import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  Button,
} from 'react-native';
import {
  Dropdown,
  IDropdownRef,
  MultiSelect,
} from 'react-native-element-dropdown';
import {TestSuite, TestCase} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];

const Demo1 = (props: any) => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <MultiSelect
      style={styles.dropdown}
      showsVerticalScrollIndicator
      mode="default"
      labelField="label"
      valueField="value"
      data={data}
      search
      maxHeight={300}
      searchPlaceholder="Search..."
      placeholder="请选择....."
      value={value}
      onChange={(item: any) => {
        setValue(item);
      }}
      itemContainerStyle={{backgroundColor: '#fff'}}
      itemTextStyle={{color: 'red'}}
      activeColor="#FF8A2D2D"
      inverted
      fontFamily
      disable={false}
      {...props}
    />
  );
};

const Demo1_1 = () => {
  return <Demo1 mode="modal" />;
};

const Demo1_2 = () => {
  return <Demo1 mode="auto" />;
};
const Demo1_3 = () => {
  return <Demo1 placeholderStyle={styles.placeholderStyle} />;
};
const Demo1_4 = () => {
  return <Demo1 selectedTextStyle={styles.selectedTextStyle} />;
};

const Demo1_5 = () => {
  const [text, setText] = useState<string>();

  return (
    <>
      <Text>text:{text}</Text>
      <Demo1
        onChangeText={(v: string) => {
          setText(v);
        }}
      />
    </>
  );
};
const Demo2 = () => {
  return <Demo1 mode="auto" searchField="label" />;
};
const Demo3 = () => {
  return (
    <Demo1
      mode="auto"
      searchField="label"
      selectedTextProps={{numberOfLines: 1}}
    />
  );
};
const Demo4 = () => {
  return (
    <Demo1
      mode="auto"
      searchField="label"
      containerStyle={{backgroundColor: 'red'}}
    />
  );
};
const Demo5 = () => {
  return <Demo1 mode="auto" maxHeight={500} />;
};
const Demo6 = () => {
  return <Demo1 mode="auto" minHeight={200} />;
};
const Demo7 = () => {
  return <Demo1 mode="auto" fontFamily='Arial' />;
};
const Demo8 = () => {
  return (
    <Demo1
      renderLeftIcon={() => (
        <Image style={{width: 15, height: 15}} source={imageSource} />
      )}
      iconStyle={styles.iconStyle}
      iconColor="blue"
    />
  );
};
const Demo9 = () => {
  return (
    <Demo1
      itemTextStyle={{color: 'blue'}}
      itemContainerStyle={{backgroundColor: '#fff'}}
    />
  );
};
const Demo10 = () => {
  return <Demo1 activeColor="#FF149287" />;
};
const Demo11 = () => {
  return <Demo1 search />;
};
const Demo11_1 = () => {
  return <Demo1 search={false} />;
};
const Demo12 = () => {
  return <Demo1 searchPlaceholder="请输入你需要搜索的内容！！！" />;
};
const Demo13 = () => {
  return <Demo1 inputSearchStyle={styles.inputSearchStyle} />;
};
const Demo14 = () => {
  return <Demo1 />;
};
const Demo14_1 = () => {
  return <Demo1 disable={true} />;
};
const Demo15 = () => {
  return <Demo1 dropdownPosition="top" />;
};
const Demo15_1 = () => {
  return <Demo1 dropdownPosition="bottom" />;
};
const Demo16 = () => {
  return <Demo1 autoScroll={false} />;
};
const Demo16_1 = () => {
  return <Demo1 autoScroll={false} />;
};
const Demo17 = () => {
  return <Demo1 showsVerticalScrollIndicator={true} />;
};
const Demo17_1 = () => {
  return <Demo1 showsVerticalScrollIndicator={false} />;
};
const Demo18 = () => {
  return (
    <Demo1
      renderLeftIcon={() => (
        <Image style={{width: 15, height: 15}} source={imageSource} />
      )}
    />
  );
};
const Demo18_1 = () => {
  return (
    <Demo1
      renderRightIcon={() => (
        <Image style={{width: 15, height: 15}} source={imageSource} />
      )}
    />
  );
};
const Demo19 = () => {
  const [value, setValue] = useState<string>('');
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>我是自定义：{item.label}</Text>
        {item.value === value && (
          <Image style={{width: 15, height: 15}} source={imageSource} />
        )}
      </View>
    );
  };

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        showsVerticalScrollIndicator
        mode="default"
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        searchPlaceholder="Search..."
        placeholder="请选择....."
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        itemContainerStyle={{backgroundColor: '#fff'}}
        itemTextStyle={{color: 'red'}}
        activeColor="#FF8A2D2D"
        renderItem={renderItem}
      />
    </>
  );
};
const Demo20 = () => {
  const RenderEmpty = () => {
    return (
      <View>
        <Text>List Empty!</Text>
      </View>
    );
  };
  return (
    <Demo1
      flatListProps={{
        ListEmptyComponent: <RenderEmpty />,
      }}
    />
  );
};
const Demo21 = () => {
  return <Demo1 inverted={false} />;
};

const Demo22 = () => {
  const [value, setValue] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <Dropdown
        containerStyle={styles.containerStyle}
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        labelField="label"
        valueField="value"
        data={data}
        search
        iconStyle={styles.iconStyle}
        iconColor="blue"
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        keyboardAvoiding
      />
    </>
  );
};

const Demo23 = () => {
  const [value, setValue] = useState<string>('');
  const ref = useRef<IDropdownRef>(null);

  return (
    <>
      <Dropdown
        ref={ref}
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        labelField="label"
        valueField="value"
        data={data}
        search
        iconStyle={styles.iconStyle}
        iconColor="blue"
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        accessibilityLabel="select!!!"
        closeModalWhenSelectedItem
        confirmSelectItem
        onConfirmSelectItem={item => {
          Alert.alert('Confirm', 'Message confirm', [
            {
              text: 'Cancel',
              onPress: () => {},
            },
            {
              text: 'Confirm',
              onPress: () => {
                setValue(item.value);
                ref.current?.close();
              },
            },
          ]);
        }}
      />
    </>
  );
};
const Demo24 = () => {
  return <Demo1 excludeItems={[{label: 'Item 1', value: '1'}]} />;
};
const Demo25 = () => {
  return <Demo1 excludeSearchItems={[{label: 'Item 1', value: '1'}]} />;
};
const Demo26 = () => {
  const [value, setValue] = useState<string>('');
  const ref = useRef<IDropdownRef>(null);

  return (
    <>
      <View>
        <Button
          onPress={() => {
            ref.current?.open();
          }}
          title="Open dropdown list"
        />
        <Button
          onPress={() => {
            ref.current?.close();
          }}
          title="Close dropdown list"
        />
      </View>
      <Dropdown
        style={styles.dropdown}
        ref={ref}
        containerStyle={styles.containerStyle}
        labelField="label"
        valueField="value"
        data={data}
        search
        iconStyle={styles.iconStyle}
        iconColor="blue"
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
      />
    </>
  );
};

export const MultiSelectTest = () => {
  return (
    <ScrollView>
      <View>
        <Text style={{color: '#fff', fontSize: 20}}>MultiSelectDemo</Text>
      </View>
      <TestSuite name="mode">
        <TestCase itShould="default">
          <Demo1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="mode">
        <TestCase itShould="modal">
          <Demo1_1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="mode">
        <TestCase itShould="auto">
          <Demo1_2 />
        </TestCase>
      </TestSuite>
      <TestSuite name="searchField">
        <TestCase itShould="设置搜索字段：label">
          <Demo2 />
        </TestCase>
      </TestSuite>
      <TestSuite name="placeholderStyle">
        <TestCase itShould="设置搜索提示样式">
          <Demo1_3 />
        </TestCase>
      </TestSuite>
      <TestSuite name="onChangeText">
        <TestCase itShould="">
          <Demo1_5 />
        </TestCase>
      </TestSuite>
      <TestSuite name="selectedTextStyle">
        <TestCase itShould="设置选中的样式">
          <Demo1_4 />
        </TestCase>
      </TestSuite>
      <TestSuite name="selectedTextProps">
        <TestCase itShould="selectedTextProps">
          <Demo3 />
        </TestCase>
      </TestSuite>
      <TestSuite name="style">
        <TestCase itShould="设置容器的样式，例如高度50">
          <Demo1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="containerStyle">
        <TestCase itShould="containerStyle">
          <Demo4 />
        </TestCase>
      </TestSuite>
      <TestSuite name="maxHeigh">
        <TestCase itShould="maxHeight=500">
          <Demo5 />
        </TestCase>
      </TestSuite>
      <TestSuite name="minHeight">
        <TestCase itShould="minHeight=200">
          <Demo6 />
        </TestCase>
      </TestSuite>
      <TestSuite name="fontFamily">
        <TestCase itShould="字体样式">
          <Demo7 />
        </TestCase>
      </TestSuite>
      <TestSuite name="iconStyle iconColor">
        <TestCase itShould="设置icon的样式">
          <Demo8 />
        </TestCase>
      </TestSuite>

      <TestSuite name="itemTextStyle itemContainerStyle">
        <TestCase itShould="">
          <Demo9 />
        </TestCase>
      </TestSuite>

      <TestSuite name="activeColor">
        <TestCase itShould="">
          <Demo10 />
        </TestCase>
      </TestSuite>

      <TestSuite name="search">
        <TestCase itShould="开启search功能">
          <Demo11 />
        </TestCase>
      </TestSuite>
      <TestSuite name="search">
        <TestCase itShould="关闭search功能">
          <Demo11_1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="searchPlaceholder">
        <TestCase itShould="searchPlaceholder">
          <Demo12 />
        </TestCase>
      </TestSuite>
      <TestSuite name="inputSearchStyle">
        <TestCase itShould="搜索框样式">
          <Demo13 />
        </TestCase>
      </TestSuite>
      <TestSuite name="renderInputSearch">
        <TestCase itShould="自定义搜索">
          <Demo14 />
        </TestCase>
      </TestSuite>
      <TestSuite name="disabled">
        <TestCase itShould="禁用">
          <Demo14_1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="dropdownPosition">
        <TestCase itShould="top">
          <Demo15 />
        </TestCase>
      </TestSuite>
      <TestSuite name="dropdownPosition">
        <TestCase itShould="bottom">
          <Demo15_1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="autoScroll">
        <TestCase itShould="false">
          <Demo16 />
        </TestCase>
      </TestSuite>
      <TestSuite name="autoScroll">
        <TestCase itShould="true">
          <Demo16_1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="showsVerticalScrollIndicator">
        <TestCase itShould="显示垂直滚动指示器">
          <Demo17 />
        </TestCase>
      </TestSuite>
      <TestSuite name="showsVerticalScrollIndicator">
        <TestCase itShould="不显示垂直滚动指示器">
          <Demo17_1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="renderLeftIcon">
        <TestCase itShould="renderLeftIcon">
          <Demo18 />
        </TestCase>
      </TestSuite>
      <TestSuite name="renderRightIcon">
        <TestCase itShould="renderRightIcon">
          <Demo18_1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="renderItem">
        <TestCase itShould="renderItem">
          <Demo19 />
        </TestCase>
      </TestSuite>
      <TestSuite name="flatListProps">
        <TestCase itShould="flatListProps">
          <Demo20 />
        </TestCase>
      </TestSuite>
      <TestSuite name="inverted 在顶部位置模式下反转滚动方向。默认值为true ">
        <TestCase itShould="false">
          <Demo21 />
        </TestCase>
      </TestSuite>
      <TestSuite name="onFocus onBlur">
        <TestCase itShould="通过onFocus onBlur修改容器样式">
          <Demo22 />
        </TestCase>
      </TestSuite>
      <TestSuite name="confirmSelectItem confirmSelectItem">
        <TestCase itShould="自定义选中confirm">
          <Demo23 />
        </TestCase>
      </TestSuite>
      <TestSuite name="excludeItems">
        <TestCase itShould="过滤item 例如过滤item1">
          <Demo24 />
        </TestCase>
      </TestSuite>
      <TestSuite name="excludeSearchItems">
        <TestCase itShould="过滤搜索项 例如过滤item1">
          <Demo25 />
        </TestCase>
      </TestSuite>

      <TestSuite name="methods">
        <TestCase itShould="静态方法">
          <Demo26 />
        </TestCase>
      </TestSuite>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'red',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'red',
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight:10
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedStyle: {
    borderRadius: 12,
    backgroundColor: '#FF2D3B36',
  },
  containerStyle: {
    marginTop: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
