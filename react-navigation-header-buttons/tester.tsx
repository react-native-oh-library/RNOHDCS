import React, {useState} from 'react';
import {Button, View, Text, Alert, ScrollView} from 'react-native';
import {
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
  Divider,
  HeaderButtonProps,
  HeaderButton,
  HeaderButtonsComponentType,
  defaultRenderVisibleButton,
} from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const MaterialHeaderButton: HeaderButtonsComponentType = props => {
  return (
    <HeaderButton
      {...props}
      renderButton={itemProps => {
        const {color, iconName} = itemProps;
        return iconName ? (
          <MaterialIcons name={iconName} color={color} size={23} />
        ) : (
          defaultRenderVisibleButton(itemProps)
        );
      }}
    />
  );
};
export function HeaderButtonsTester({navigation}) {
  const MaterialHeaderButton = (props: HeaderButtonProps) => {
    return (
      <View>
        <Text>{props.title}</Text>
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
      <Text>
        HeaderButton默认渲染按钮的组件
        HeaderButtonComponent中可以接收来自Item中的props
      </Text>
    </View>
  );
}

export function HeaderButtons_childrenTester({navigation}) {
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
      <Text>HeaderButtons组件可以接收children</Text>
    </View>
  );
}

export function HeaderButtons_Left_true({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '导航栏',
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
      headerRight: () => (
        <HeaderButtons
          preset="tabHeader"
          left
          HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Test Right"
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
      <Text>
        HeaderButtons属性left为true时并且
        preset属性为"tabHeader"时，额外添加左边距
      </Text>
    </View>
  );
}

export function HeaderButtons_Left_false({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '导航栏',
      headerLeft: () => (
        <HeaderButtons
          preset="tabHeader"
          left={false}
          HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Test Left"
            style={{backgroundColor: 'pink', marginRight: 10}}
            onPress={() => Alert.alert('Test')}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons
          preset="tabHeader"
          left={false}
          HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Test Right"
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
      <Text>
        HeaderButtons属性left为true时并且
        preset属性为"tabHeader"时，额外添加左边距
      </Text>
    </View>
  );
}

export function HeaderButtons_Preset_tabHeader({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '导航栏',
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
      headerRight: () => (
        <HeaderButtons
          preset="tabHeader"
          left
          HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Test Right"
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
      <Text>HeaderButtons属性preset为tabHeader时为标题添加额外的边距</Text>
    </View>
  );
}

export function HeaderButtons_Preset_stackHeader({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '导航栏',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Test Left"
            style={{backgroundColor: 'pink', marginRight: 10}}
            onPress={() => Alert.alert('Test')}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Test Right"
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
      <Text>HeaderButtons属性preset为stackHeader时不添加额外边距</Text>
    </View>
  );
}

export function HeaderButtons_Item_Title({navigation}) {
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

export function HeaderButtons_Item_Style({navigation}) {
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
      <Text>
        组件Item里面的属性可以通过props传递给HeaderButtonComponent,这里的组件Item里面的属性可以通过props传递给HeaderButtonComponent是一个Text
      </Text>
    </View>
  );
}

export function HeaderButtons_Item_OnPress({navigation}) {
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
      <Text>点击触发onPress</Text>
    </View>
  );
}

export function HeaderButtons_Item_IconName({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Item_iconName',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item iconName="search" />
          <Item iconName="lock" />
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
        这里展示的是传入的iconName属性，icon组件库使用的是react-native-vector-icons三方库
      </Text>
    </View>
  );
}

export function HeaderButtons_Item_ButtonStyle({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Item_buttonStyle',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="search" buttonStyle={{color: 'yellow'}} />
          <Item
            title="lock"
            buttonStyle={{color: 'red', backgroundColor: 'black', fontSize: 12}}
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
      <Text>这里展示的是传入的buttonStyle属性</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu_OverflowIcon({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            OverflowIcon={() => {
              return (
                <View>
                  <MaterialIcons name="more-horiz" size={25} />
                  <MaterialIcons name="settings" size={25} />
                </View>
              );
            }}>
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
      <Text>这个页面展示了OverflowMenu的OverflowIcon属性</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu_Style({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            style={{backgroundColor: 'yellow'}}
            OverflowIcon={() => {
              return (
                <View>
                  <MaterialIcons name="more-horiz" size={25} />
                </View>
              );
            }}>
            <View>
              <Text>'</Text>
            </View>
          </OverflowMenu>
          <OverflowMenu
            style={{backgroundColor: 'red', marginRight: 30}}
            OverflowIcon={() => {
              return (
                <View>
                  <MaterialIcons name="more-horiz" size={25} />
                </View>
              );
            }}>
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
      <Text>这个页面展示了OverflowMenu的style属性</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu_OnPress({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu',
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
      <Text>这个页面展示了OverflowMenu的onPress</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu_Children({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
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
      <Text>这个页面展示了OverflowMenu的child</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu_Preset_stackHeader({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
          </OverflowMenu>
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
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
      <Text>这个页面展示了OverflowMenu的Preset:stackHeader 不额外添加边距</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu_Preset_tabHeader({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            preset="tabHeader"
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
          </OverflowMenu>
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            preset="tabHeader"
            left
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
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
      <Text>这个页面展示了OverflowMenu的Preset:tabHeader 额外添加边距</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu_Left_true({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            preset="tabHeader"
            left
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
          </OverflowMenu>
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            preset="tabHeader"
            left
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
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
      <Text>这个页面展示了OverflowMenu的left(true) 额外添加左边距</Text>
    </View>
  );
}

export function HeaderButtons_OverflowMenu_Left_false({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'OverflowMenu',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            preset="tabHeader"
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
          </OverflowMenu>
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu
            preset="tabHeader"
            style={{backgroundColor: '#fff111'}}
            OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="child1" onPress={() => Alert.alert('child1')} />
            <Divider />
            <HiddenItem title="child2" onPress={() => Alert.alert('child2')} />
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
      <Text>这个页面展示了OverflowMenu的left(false) 额外添加右边距</Text>
    </View>
  );
}

export function HeaderButtons_HiddenItem_Title({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HiddenItem',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="this is title1" />
            <Divider />
            <HiddenItem title="this is title2" />
            <Divider />
            <HiddenItem title="this is title3" />
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
      <Text>这个页面展示了HiddenItem的title</Text>
    </View>
  );
}

export function HeaderButtons_HiddenItem_Style({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HiddenItem',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="style1" style={{backgroundColor: 'yellow'}} />
            <Divider />
            <HiddenItem
              title="style2"
              style={{height: 80, backgroundColor: 'red'}}
            />
            <Divider />
            <HiddenItem
              title="style3"
              style={{backgroundColor: 'gray', width: 80}}
            />
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
      <Text>这个页面展示了HiddenItem的style属性</Text>
    </View>
  );
}

export function HeaderButtons_HiddenItem_TitleStyle({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HiddenItem',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem title="titleStyle1" titleStyle={{color: 'red'}} />
            <Divider />
            <HiddenItem
              title="titleStyle2"
              titleStyle={{color: 'blue', fontSize: 30}}
            />
            <Divider />
            <HiddenItem
              title="titleStyle3"
              titleStyle={{color: 'yellow', fontSize: 10}}
            />
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
      <Text>这个页面展示了HiddenItem的titleStyle属性</Text>
    </View>
  );
}

export function HeaderButtons_HiddenItem_OnPress({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HiddenItem',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem
              title="PressMe"
              onPress={() => {
                Alert.alert('click');
              }}
              titleStyle={{color: 'red'}}
            />
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
      <Text>这个页面展示了HiddenItem的onPress属性</Text>
    </View>
  );
}

export function HeaderButtons_HiddenItem_Disabled({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HiddenItem',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <OverflowMenu OverflowIcon={() => <Text>PressMe</Text>}>
            <HiddenItem
              title="disabled(false)"
              onPress={() => {
                Alert.alert('click');
              }}
              titleStyle={{color: 'red'}}
            />
            <Divider />
            <HiddenItem
              disabled
              title="disabled(true)"
              onPress={() => {
                Alert.alert('click');
              }}
            />
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
      <Text>这个页面展示了HiddenItem的disabled属性</Text>
    </View>
  );
}

export function HeaderButtons_HeaderButton_Title({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HeaderButton',
      headerRight: () => (
        <HeaderButtons>
          <HeaderButton
            title="this is a title"
            renderButton={props => <Text>{props.title}</Text>}
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
      <Text>这个页面展示了HeaderButton的title属性</Text>
    </View>
  );
}

export function HeaderButtons_HeaderButton_RenderButton({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HeaderButton',
      headerRight: () => (
        <HeaderButtons>
          <HeaderButton
            renderButton={() => <Text>this is renderButton</Text>}
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
      <Text>这个页面展示了HeaderButton的renderButton属性</Text>
    </View>
  );
}

export function HeaderButtons_HeaderButton_Style({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HeaderButton',
      headerRight: () => (
        <HeaderButtons>
          <HeaderButton
            style={{color: 'red'}}
            renderButton={(props) => <Text style={{color:"red"}} >STYLE</Text>}
          />
          <HeaderButton
            style={{backgroundColor: 'red'}}
            renderButton={(props) => <Text>STYLE</Text>}
          />
          <HeaderButton
            renderButton={(props) => <Text style={{fontSize:6}}  >STYLE</Text>}
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
      <Text>这个页面展示了HeaderButton的style属性</Text>
    </View>
  );
}

export function HeaderButtons_HeaderButton_OnPress({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'HeaderButton',
      headerRight: () => (
        <HeaderButtons>
          <HeaderButton
            onPress={() => Alert.alert('onPress')}
            renderButton={(props) => <Text onPress={props.onPress} >this is renderButton</Text>}
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
      <Text>这个页面展示了HeaderButton的renderButton属性</Text>
    </View>
  );
}
