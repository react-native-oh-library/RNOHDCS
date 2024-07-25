import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View,
  ScrollView,
  ViewProps,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Dropdown,
  MultiSelect,
  SelectCountry,
  IDropdownRef,
} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

interface TabsProps {
  title: string;
  content: React.ReactNode;
}

interface InProps {
  tabs: TabsProps[];
}

const TabNavigator = ({tabs}: InProps) => {
  const [selectedTab, setSelectedTab] = useState(0); // 默认选中第一个Tab
  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <TouchableOpacity
        key={index}
        style={[
          tabsStyles.tab,
          index === selectedTab ? tabsStyles.activeTab : null,
        ]}
        onPress={() => setSelectedTab(index)}>
        <Text style={tabsStyles.tabText}>{tab.title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={tabsStyles.container}>
      <View style={tabsStyles.tabBar}>{renderTabs()}</View>
      <View style={tabsStyles.content}>{tabs[selectedTab]?.content}</View>
    </View>
  );
};

const tabsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#FF21365A',
    borderRadius: 5,
  },
  tabText: {
    color: 'black',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

const imageSource = require('./assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];

const Row = (
  props: ViewProps & {children?: React.ReactNode; fullWidth?: boolean},
) => (
  <View
    {...props}
    style={[
      styles.row,
      props.style,
      props.fullWidth && {
        width: '100%',
        justifyContent: 'space-evenly',
      },
    ]}
  />
);

const Demo1 = () => {
  const [value, setValue] = useState<string>('');
  const [mode, setMode] = useState<'default' | 'modal' | 'auto'>('default');
  return (
    <>
      <Row fullWidth>
        <Text>defaultMode</Text>
        <Switch
          value={mode === 'default'}
          onChange={() => {
            setMode('default');
          }}
        />
      </Row>
      <Row fullWidth>
        <Text>autoMode</Text>
        <Switch
          value={mode === 'auto'}
          onChange={() => {
            setMode('auto');
          }}
        />
      </Row>
      <Row fullWidth>
        <Text>modalMode</Text>
        <Switch
          value={mode === 'modal'}
          onChange={() => {
            setMode('modal');
          }}
        />
      </Row>
      <Dropdown
        style={styles.dropdown}
        showsVerticalScrollIndicator
        mode={mode}
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
          setValue(item.value);
        }}
        itemContainerStyle={{backgroundColor: '#fff'}}
        itemTextStyle={{color: 'red'}}
        activeColor="#FF8A2D2D"
        inverted
      />
    </>
  );
};
const Demo21 = () => {
  const [value, setValue] = useState<string[]>([]);
  const [mode, setMode] = useState<'default' | 'modal' | 'auto'>('default');
  return (
    <>
      <Row fullWidth>
        <Text>defaultMode</Text>
        <Switch
          value={mode === 'default'}
          onChange={() => {
            setMode('default');
          }}
        />
      </Row>
      <Row fullWidth>
        <Text>autoMode</Text>
        <Switch
          value={mode === 'auto'}
          onChange={() => {
            setMode('auto');
          }}
        />
      </Row>
      <Row fullWidth>
        <Text>modalMode</Text>
        <Switch
          value={mode === 'modal'}
          onChange={() => {
            setMode('modal');
          }}
        />
      </Row>
      <MultiSelect
        style={styles.dropdown}
        showsVerticalScrollIndicator
        mode={mode}
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
        inverted
      />
    </>
  );
};
const Demo2 = () => {
  const [value, setValue] = useState<string>('');
  return (
    <>
      <Dropdown
        style={styles.dropdown}
        showsVerticalScrollIndicator
        labelField="label"
        valueField="value"
        data={data}
        searchField="label"
        search
        maxHeight={300}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
      />
    </>
  );
};
const Demo22 = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <>
      <MultiSelect
        style={styles.dropdown}
        showsVerticalScrollIndicator
        labelField="label"
        valueField="value"
        data={data}
        searchField="label"
        search
        maxHeight={300}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo3 = () => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        showsVerticalScrollIndicator
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        searchPlaceholder="Search..."
        placeholder="请选择....."
        placeholderStyle={styles.placeholderStyle}
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
      />
    </>
  );
};
const Demo23 = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <MultiSelect
        style={styles.dropdown}
        showsVerticalScrollIndicator
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        searchPlaceholder="Search..."
        placeholder="请选择....."
        placeholderStyle={styles.placeholderStyle}
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo4 = () => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        showsVerticalScrollIndicator
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        minHeight={200}
        searchPlaceholder="Search..."
        placeholder="请选择....."
        selectedTextStyle={styles.selectedTextStyle}
        selectedTextProps={{numberOfLines: 1}}
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
      />
    </>
  );
};
const Demo24 = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <MultiSelect
        style={styles.dropdown}
        showsVerticalScrollIndicator
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        minHeight={200}
        searchPlaceholder="Search..."
        placeholder="请选择....."
        selectedTextStyle={styles.selectedTextStyle}
        selectedTextProps={{numberOfLines: 1}}
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo5 = () => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        minHeight={200}
        searchPlaceholder="Search..."
        placeholder="请选择....."
        selectedTextStyle={styles.selectedTextStyle}
        selectedTextProps={{numberOfLines: 1}}
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
      />
    </>
  );
};
const Demo25 = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <MultiSelect
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        minHeight={200}
        searchPlaceholder="Search..."
        placeholder="请选择....."
        selectedTextStyle={styles.selectedTextStyle}
        selectedTextProps={{numberOfLines: 1}}
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo6 = () => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Dropdown
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
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <Image style={{width: 15, height: 15}} source={imageSource} />
        )}
        renderRightIcon={() => (
          <Image style={{width: 15, height: 15}} source={imageSource} />
        )}
      />
    </>
  );
};
const Demo26 = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <MultiSelect
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
        renderLeftIcon={() => (
          <Image style={{width: 15, height: 15}} source={imageSource} />
        )}
        renderRightIcon={() => (
          <Image style={{width: 15, height: 15}} source={imageSource} />
        )}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo7 = () => {
  const [value, setValue] = useState<string>('');
  const [search, setSearch] = useState<boolean>(true);

  return (
    <>
      <Row fullWidth>
        <Text>disable select</Text>
        <Switch
          value={search}
          onChange={() => {
            setSearch(!search);
          }}
        />
      </Row>
      <Dropdown
        style={styles.dropdown}
        showsVerticalScrollIndicator
        labelField="label"
        valueField="value"
        data={data}
        search={search}
        searchQuery={() => true}
        inputSearchStyle={styles.inputSearchStyle}
        autoScroll
        maxHeight={300}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
      />
    </>
  );
};
const Demo27 = () => {
  const [value, setValue] = useState<string[]>([]);
  const [search, setSearch] = useState<boolean>(true);

  return (
    <>
      <Row fullWidth>
        <Text>disable select</Text>
        <Switch
          value={search}
          onChange={() => {
            setSearch(!search);
          }}
        />
      </Row>
      <MultiSelect
        style={styles.dropdown}
        showsVerticalScrollIndicator
        labelField="label"
        valueField="value"
        data={data}
        search={search}
        searchQuery={() => true}
        inputSearchStyle={styles.inputSearchStyle}
        maxHeight={300}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo8 = () => {
  const [value, setValue] = useState<string>('');
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
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
        containerStyle={styles.containerStyle}
        labelField="label"
        valueField="value"
        data={data}
        search
        iconStyle={styles.iconStyle}
        iconColor="blue"
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
        renderItem={renderItem}
      />
    </>
  );
};
const Demo28 = () => {
  const [value, setValue] = useState<string[]>([]);
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Image style={{width: 15, height: 15}} source={imageSource} />
        )}
      </View>
    );
  };

  return (
    <>
      <MultiSelect
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
        renderItem={renderItem}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo9 = () => {
  const [value, setValue] = useState<string>('');

  const RenderEmpty = () => {
    return (
      <View>
        <Text>List Empty!</Text>
      </View>
    );
  };

  return (
    <>
      <Dropdown
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
          setValue(item.value);
        }}
        flatListProps={{
          ListEmptyComponent: <RenderEmpty />,
        }}
      />
    </>
  );
};
const Demo29 = () => {
  const [value, setValue] = useState<string[]>([]);

  const RenderEmpty = () => {
    return (
      <View>
        <Text>List Empty!</Text>
      </View>
    );
  };

  return (
    <>
      <MultiSelect
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
        flatListProps={{
          ListEmptyComponent: <RenderEmpty />,
        }}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo10 = () => {
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
          setValue(item.value);
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        keyboardAvoiding
      />
    </>
  );
};
const Demo30 = () => {
  const [value, setValue] = useState<string[]>([]);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <MultiSelect
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
        activeColor="#FF8A2D2D"
      />
    </>
  );
};
const Demo11 = () => {
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
          setValue(item.value);
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
const Demo31 = () => {
  const [value, setValue] = useState<string[]>([]);
  const ref = useRef<IDropdownRef>(null);

  return (
    <>
      <MultiSelect
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
        activeColor="#FF8A2D2D"
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
                setValue(item);
                ref.current?.close();
              },
            },
          ]);
        }}
      />
    </>
  );
};

const Demo12 = () => {
  const list = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
  ];
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        labelField="label"
        valueField="value"
        data={list}
        search
        iconStyle={styles.iconStyle}
        iconColor="blue"
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
        excludeItems={[{label: 'Item 1', value: '1'}]}
        excludeSearchItems={[{label: 'Item 1', value: '1'}]}
      />
    </>
  );
};

const Demo32 = () => {
  const list = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
  ];
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <MultiSelect
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        labelField="label"
        valueField="value"
        data={list}
        search
        iconStyle={styles.iconStyle}
        iconColor="blue"
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        excludeItems={[{label: 'Item 1', value: '1'}]}
        excludeSearchItems={[{label: 'Item 1', value: '1'}]}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const Demo13 = () => {
  const [value, setValue] = useState<string>('');
  const ref = useRef<IDropdownRef>(null);
  const [disabled, setDisable] = useState<boolean>(false);

  return (
    <>
      <>
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
      </>
      <Row fullWidth>
        <Text>disable select</Text>
        <Switch
          value={disabled}
          onChange={() => {
            setDisable(!disabled);
          }}
        />
      </Row>
      <Dropdown
        style={styles.dropdown}
        ref={ref}
        disable={disabled}
        containerStyle={styles.containerStyle}
        labelField="label"
        valueField="value"
        data={data}
        search
        iconStyle={styles.iconStyle}
        iconColor="blue"
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
      />
    </>
  );
};
const Demo33 = () => {
  const [value, setValue] = useState<string[]>([]);
  const ref = useRef<IDropdownRef>(null);
  const [disabled, setDisable] = useState<boolean>(false);

  return (
    <>
      <>
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
      </>
      <Row fullWidth>
        <Text>disable select</Text>
        <Switch
          value={disabled}
          onChange={() => {
            setDisable(!disabled);
          }}
        />
      </Row>
      <MultiSelect
        style={styles.dropdown}
        ref={ref}
        disable={disabled}
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
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

const DropdownDemo = () => {
  return (
    <ScrollView>
      <View>
        <Text style={{color: '#fff', fontSize: 20}}>DropdownDemo</Text>
      </View>
      <TestSuite name="mode">
        <TestCase itShould="设置下拉框模式">
          <Demo1 />
        </TestCase>
      </TestSuite>
      <TestSuite name="searchField">
        <TestCase itShould="设置搜索字段：label">
          <Demo2 />
        </TestCase>
      </TestSuite>
      <TestSuite name="placeholder，placeholderStyle">
        <TestCase itShould="设置：placeholder 以及placeholderStyle">
          <Demo3 />
        </TestCase>
      </TestSuite>
      <TestSuite name="selectedTextStyle ， selectedTextProps">
        <TestCase itShould="设置：选中文本的样式以及props">
          <Demo4 />
        </TestCase>
      </TestSuite>
      <TestSuite name="style">
        <TestCase itShould="设置容器的样式">
          <Demo5 />
        </TestCase>
      </TestSuite>
      <TestSuite name="iconStyle iconColor">
        <TestCase itShould="设置icon的样式">
          <Demo6 />
        </TestCase>
      </TestSuite>
      <TestSuite name="search">
        <TestCase itShould="设置开启search功能">
          <Demo7 />
        </TestCase>
      </TestSuite>
      <TestSuite name="renderItem">
        <TestCase itShould="自定义item">
          <Demo8 />
        </TestCase>
      </TestSuite>

      <TestSuite name="flatListProps">
        <TestCase itShould="设置flatListProps">
          <Demo9 />
        </TestCase>
      </TestSuite>

      <TestSuite name="onFocus onBlur">
        <TestCase itShould="通过onFocus onBlur修改容器样式">
          <Demo10 />
        </TestCase>
      </TestSuite>
      <TestSuite name="confirmSelectItem confirmSelectItem">
        <TestCase itShould="自定义选中confirm">
          <Demo11 />
        </TestCase>
      </TestSuite>

      <TestSuite name="excludeItems">
        <TestCase itShould="过滤item 例如过滤item1">
          <Demo12 />
        </TestCase>
      </TestSuite>

      <TestSuite name="methods">
        <TestCase itShould="静态方法">
          <Demo13 />
        </TestCase>
      </TestSuite>
    </ScrollView>
  );
};

const MultiSelectDemo = () => {
  return (
    <ScrollView>
      <View>
        <Text style={{color: '#fff', fontSize: 20}}>MultiSelectDemo</Text>
      </View>
      <TestSuite name="mode">
        <TestCase itShould="设置下拉框模式">
          <Demo21 />
        </TestCase>
      </TestSuite>
      <TestSuite name="searchField">
        <TestCase itShould="设置搜索字段：label">
          <Demo22 />
        </TestCase>
      </TestSuite>
      <TestSuite name="placeholder，placeholderStyle">
        <TestCase itShould="设置：placeholder 以及placeholderStyle">
          <Demo23 />
        </TestCase>
      </TestSuite>
      <TestSuite name="selectedTextStyle ， selectedTextProps">
        <TestCase itShould="设置：选中文本的样式以及props">
          <Demo24 />
        </TestCase>
      </TestSuite>
      <TestSuite name="style">
        <TestCase itShould="设置容器的样式">
          <Demo25 />
        </TestCase>
      </TestSuite>
      <TestSuite name="iconStyle iconColor">
        <TestCase itShould="设置icon的样式">
          <Demo26 />
        </TestCase>
      </TestSuite>
      <TestSuite name="search">
        <TestCase itShould="设置开启search功能">
          <Demo27 />
        </TestCase>
      </TestSuite>
      <TestSuite name="renderItem">
        <TestCase itShould="自定义item">
          <Demo28 />
        </TestCase>
      </TestSuite>

      <TestSuite name="flatListProps">
        <TestCase itShould="设置flatListProps">
          <Demo29 />
        </TestCase>
      </TestSuite>

      <TestSuite name="onFocus onBlur">
        <TestCase itShould="通过onFocus onBlur修改容器样式">
          <Demo30 />
        </TestCase>
      </TestSuite>
      <TestSuite name="confirmSelectItem confirmSelectItem">
        <TestCase itShould="自定义选中confirm">
          <Demo31 />
        </TestCase>
      </TestSuite>

      <TestSuite name="excludeItems">
        <TestCase itShould="过滤item 例如过滤item1">
          <Demo32 />
        </TestCase>
      </TestSuite>

      <TestSuite name="methods">
        <TestCase itShould="静态方法">
          <Demo33 />
        </TestCase>
      </TestSuite>
    </ScrollView>
  );
};

const SelectCountryDemo = () => {
  const [country, setCountry] = useState<string>('');
  return (
    <>
      <View>
        <Text style={{color: '#fff', fontSize: 20}}>SelectCountryDemo</Text>
      </View>
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        maxHeight={200}
        value={country}
        data={data}
        valueField="value"
        imageField="image"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={e => {
          setCountry(e.value);
        }}
        labelField={'label'}
      />
    </>
  );
};

const tabs = [
  {title: 'tab1', content: <DropdownDemo />},
  {title: 'tab2', content: <MultiSelectDemo />},
  {title: 'tab3', content: <SelectCountryDemo />},
];

export const DropdownTest = () => {
  return (
    <>
      <TabNavigator tabs={tabs} />
    </>
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
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'red',
  },
  iconStyle: {
    width: 20,
    height: 20,
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
