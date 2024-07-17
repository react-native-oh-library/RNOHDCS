import React, {useState} from 'react';
import {Button, View, Text, Alert} from 'react-native';
import {
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
  Divider,
  ItemProps,
  HiddenItemProps,
  HeaderButtonProps,
  HeaderButton,
  HeaderButtonsComponentType,
  defaultRenderVisibleButton,
  overflowMenuPressHandlerDropdownMenu,
} from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'galio-framework';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FAIcon from 'react-native-vector-icons/FontAwesome';
export function OtherPage({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text onPress={() => navigation.goBack()} style={{color: 'red'}}>
        {`
       OtherPage  Back
        `}
      </Text>
    </View>
  );
}

function MaterialHeaderButton(props): HeaderButtonsComponentType {
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  return (
    <HeaderButton
      // the usual way to render:
      // IconComponent={MaterialIcons}
      // iconSize={23}
      // you can customize the colors, by default colors from React navigation theme will be used
      // pressColor="blue"
      {...props}
      // alternative way to customize what is rendered:
      renderButton={itemProps => {
        // access anything that was defined on <Item ... />
        const {color, iconName} = itemProps;

        return iconName ? (
            <MaterialIcons
            color={color}
            name={iconName}
            size={23}></MaterialIcons>
        ) :
          // will render text with default styles
          defaultRenderVisibleButton(itemProps)
      }}
    />
  );
}

export function HeaderButtons_children({navigation}) {
  const ChildrenCom = () => {
    return (
      <View>
        <Text>this is children</Text>
      </View>
    );
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '导航栏',
      headerRight: () => (
        <HeaderButtons>
          <ChildrenCom />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="OtherPage"
        onPress={() => navigation.navigate('OtherPage')}
      />
    </View>
  );
}

export function HeaderButtons_HeaderButtonComponent({navigation}) {
  const MaterialHeaderButton = (props: HeaderButtonProps) => {
    return (
      <View>
        <Text style={{color: 'white'}}>{props.title}</Text>
      </View>
    );
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '导航栏',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="this is a item" />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="OtherPage"
        onPress={() => navigation.navigate('OtherPage')}
      />
      <Text>
        HeaderButton默认渲染按钮的组件
        HeaderButtonComponent中可以接收来自Item中的props
      </Text>
    </View>
  );
}
export function HeaderButtons_preset({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Buttons in tab bar',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Button title="search" onPress={() => Alert.alert('search')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="OtherPage"
        onPress={() => navigation.navigate('OtherPage')}
      />
      <Text>
        HeaderButtons
        中的preset属性用来添加额外边距,为stackHeader时不额外添加边距
      </Text>
    </View>
  );
}
export function HeaderButtons_presetTab({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Buttons in tab bar',
      headerRight: () => (
        <HeaderButtons
          HeaderButtonComponent={MaterialHeaderButton}
          preset={'tabHeader'}>
          <Button title="search" onPress={() => Alert.alert('search')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="OtherPage"
        onPress={() => navigation.navigate('OtherPage')}
      />
      <Text>
        HeaderButtons
        中的preset属性用来添加额外边距,为"tabHeader"时增加Search的外边距,默认为"stackHeader"
        如果不加left属性，默认添加额外的右边距
      </Text>
    </View>
  );
}
export function HeaderButtons_left({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '导航栏',
      // headerTitleAlign:"center",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="item" />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons
          preset="tabHeader"
          left
          HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Test Left"
            style={{backgroundColor: 'pink', marginRight: 10}}
            onPress={() => Alert.alert('Test')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="OtherPage"
        onPress={() => navigation.navigate('OtherPage')}
      />
      <Text>HeaderButtons属性left为true，额外添加左边距</Text>
    </View>
  );
}
export function HeaderButtons_leftF({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '导航栏',
      // headerTitleAlign:"center",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="item" />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons
          preset="tabHeader"
          HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Test Left"
            style={{backgroundColor: 'pink', marginRight: 10}}
            onPress={() => Alert.alert('Test')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="OtherPage"
        onPress={() => navigation.navigate('OtherPage')}
      />
      <Text>HeaderButtons属性left为false,不额外添加边距</Text>
    </View>
  );
}

export function HeaderButtons_Item({navigation}) {
  const itemCom = (props: HeaderButtonsComponentType) => {
    return <Text {...props}> {props.title} </Text>;
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Item_title',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={itemCom}>
          <Item title="item-title1" />
          <Item title="item-title2" />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>组件Item里面的属性可以通过props传递给HeaderButtonComponent</Text>
    </View>
  );
}
export function HeaderButtons_Item_style({navigation}) {
  const itemCom = (props: HeaderButtonsComponentType) => {
    return <Text {...props}> {props.title} </Text>;
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Item_style',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={itemCom}>
          <Item title="item-style1" style={{color: '#fff111'}} />
          <Item title="item-style2" style={{fontSize: 20}} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>组件Item里面的属性可以通过props传递给HeaderButtonComponent</Text>
    </View>
  );
}

export function HeaderButtons_Item_onPress({navigation}) {
  const itemCom = (props: HeaderButtonsComponentType) => {
    return <Text {...props}> {props.title} </Text>;
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Item_onPress',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={itemCom}>
          <Item title="PressMe" onPress={() => Alert.alert('item-onPress')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>组件Item里面的属性可以通过props传递给HeaderButtonComponent</Text>
    </View>
  );
}

export function HeaderButtons_Item_iconName({navigation}) {
  const itemCom = (props: HeaderButtonsComponentType) => {
    return (
      <Text {...props}>
        {props.title}---iconName:{props.iconName}{' '}
      </Text>
    );
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Item_iconName',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="iconName" iconName="search" />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>组件Item里面的属性可以通过props传递给HeaderButtonComponent</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu1',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            style={{marginRight: 20, backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>这里设置icon</Text>}>
            <View>
              <Text>'</Text>
            </View>
          </OverflowMenu>
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>这个页面展示了OverflowMenu的OverflowIcon、style属性</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu2({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu2',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
            <Divider />
            <Text>this is a text</Text>
          </OverflowMenu>
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>这个页面展示了OverflowMenu的children、onPress</Text>
    </View>
  );
}
export function HeaderButtons_OverflowMenu3({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu3',
      headerRight: () => (
        <OverflowMenu
          pressOpacity={0.8}
          style={{backgroundColor: '#fff111'}}
          OverflowIcon={() => <Text>PressMe</Text>}>
          <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
          <Divider />
          <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
          <Divider />
          <Text>this is a text</Text>
        </OverflowMenu>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>
        这个页面展示了OverflowMenu的left、preset、other props(例如 pressOpacity=
        {0.8} 按钮透明度与tab2相比更深)
      </Text>
      <Text>
        preset属性用来添加额外边距,为"tabHeader"时增加额外的外边距,默认为"stackHeader"
        如果不加left属性，默认添加额外的右边距,反之如果left为true则添加额外的左边距,展示效果与下面的HeaderButtons组件的left、preset属性一致
      </Text>
    </View>
  );
}

export function HeaderButtons_HiddenItem({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HiddenItem',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <Text> HiddenItem </Text>
            <Divider />
            <HiddenItem title="this is title" />
            <Divider />
            <HiddenItem
              title="style"
              style={{backgroundColor: '#fff111'}}
              titleStyle={{color: 'blue', fontSize: 30}}
            />
            <Divider />
            <HiddenItem
              title="PressMe"
              onPress={() => {
                Alert.alert('click');
              }}
            />
            <Divider />
            <HiddenItem title="disabled(true)" disabled />
          </OverflowMenu>
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>
        这个页面展示了HiddenItem的title、style、titleStyle、onPress、disabled
      </Text>
    </View>
  );
}

export function HeaderButtons_HeaderButton({navigation}) {
  const aMaterialHeaderButton = props => (
    <HeaderButton
      IconComponent={() => <Text>Icon</Text>}
      iconSize={30}
      color="blue"
      {...props}
    />
  );
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HeaderButton',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={aMaterialHeaderButton}>
          <Item
            title="add"
            iconName="search"
            onPress={() => Alert.alert('click')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>
        HeaderButton是所有onPress、title和图标相关的道具（颜色、大小）相遇以呈现实际按钮的地方。
        PlatformPressable可以完全自定义使用该道具时其内部呈现的内容
      </Text>
      {/* <MaterialIcons
            color={"red"}
            name={"search"}
            size={23}></MaterialIcons>
      <Icon name="archive" family="FontAwesome" color={"red"} size={30} />
      <FAIcon name='music'  color={"red"} size={30} /> */}
    </View>
  );
}
