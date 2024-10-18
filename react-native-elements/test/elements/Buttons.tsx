import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Button} from '@rneui/themed';
import {ButtonGroup, Text, Icon} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import LinearGradient from 'react-native-linear-gradient';
class TouchableComponent extends React.Component<{}, {}> {
  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{fontSize: 28, backgroundColor: 'yellow', color: 'pink'}}>
            TouchableComponent
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
class ViewComponent extends React.Component<{}, {}> {
  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'pink',
            borderRadius: 20,
          }}>
          <Text
            style={{fontSize: 28, backgroundColor: 'yellow', color: 'pink'}}>
            ViewComponent
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default function SnapCarouselExample(): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0, 2, 3]);

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Button属性TouchableComponent的验证  传入一个新的可点击的组件">
          <TestCase itShould="TouchableComponent" tags={['C_API']}>
            <Button TouchableComponent={TouchableComponent} />
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性ViewComponent的验证 传递一个ViewComponent组件">
          <TestCase itShould="ViewComponent" tags={['C_API']}>
            <Button ViewComponent={ViewComponent} />
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性buttonStyle的验证 设置button样式">
          <TestCase itShould="buttonStyle" tags={['C_API']}>
            <Button
              title={'buttonStyle'}
              buttonStyle={{
                backgroundColor: 'yellow',
                opacity: 0.7,
                borderRadius: 20,
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性color的验证 button的color属性的枚举验证">
          <TestCase itShould="color" tags={['C_API']}>
            <Button title={'自定义color'} color={'blue'} />
          </TestCase>
          <TestCase itShould="primary" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'primary'} color={'primary'} />
            </View>
          </TestCase>
          <TestCase itShould="secondary" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'secondary'} color={'secondary'} />
            </View>
          </TestCase>
          <TestCase itShould="success" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'success'} color={'success'} />
            </View>
          </TestCase>
          <TestCase itShould="error" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'error'} color={'error'} />
            </View>
          </TestCase>
          <TestCase itShould="warning" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'warning'} color={'warning'} />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性containerStyle的验证 设置containerStyle 设置button的外部容器样式">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <Button
              title={'containerStyle'}
              containerStyle={{
                padding: 10,
                margin: 10,
                backgroundColor: 'pink',
                opacity: 0.7,
                borderRadius: 20,
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性disabled的验证 设置disabled属性 控制button的是否可交互">
          <TestCase itShould="disabled" tags={['C_API']}>
            <Button title={'disabled'} disabled={true} />
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性disabledStyle的验证 这个属性是设置button在disable状态下的样式">
          <TestCase itShould="disabledStyle" tags={['C_API']}>
            <Button
              title={'disabledStyle'}
              disabled={true}
              disabledStyle={{
                padding: 10,
                margin: 10,
                backgroundColor: 'pink',
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'yellow',
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性disabledTitleStyle的验证  这个属性是设置button在disable状态下文字的样式">
          <TestCase itShould="disabledTitleStyle" tags={['C_API']}>
            <Button
              title={'disabledTitleStyle'}
              disabled={true}
              disabledTitleStyle={{
                fontSize: 20,
                color: '#222222',
                fontWeight: '400',
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性icon的验证 给button设置添加一个icon的图标">
          <TestCase itShould="icon" tags={['C_API']}>
            <Button
              icon={{
                name: 'home',
                type: 'font-awesome',
                color: 'white',
              }}></Button>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性iconContainerStyle的验证 给button的icon的容器设置样式">
          <TestCase itShould="iconContainerStyle" tags={['C_API']}>
            <Button
              icon={{
                name: 'film',
                type: 'font-awesome',
                color: 'yellow',
                size: 60,
              }}
              iconContainerStyle={{
                width: 100,
                backgroundColor: 'pink',
                borderRadius: 20,
              }}></Button>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性iconPosition的验证 iconPosition的枚举验证">
          <TestCase itShould="left" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={'left'}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  color: 'yellow',
                  size: 20,
                }}
                iconPosition="left"></Button>
            </View>
          </TestCase>
          <TestCase itShould="right" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={'right'}
                icon={{
                  name: 'save',
                  type: 'font-awesome',
                  color: 'yellow',
                  size: 20,
                }}
                iconPosition="right"></Button>
            </View>
          </TestCase>
          <TestCase itShould="top" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={'top'}
                icon={{
                  name: 'home',
                  type: 'font-awesome',
                  color: 'yellow',
                  size: 20,
                }}
                iconPosition="top"></Button>
            </View>
          </TestCase>
          <TestCase itShould="bottom" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={'bottom'}
                icon={{
                  name: 'home',
                  type: 'font-awesome',
                  color: 'yellow',
                  size: 20,
                }}
                iconPosition="bottom"></Button>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="Button属性iconRight的验证 给button的icon设置位置">
          <TestCase itShould="iconRight" tags={['C_API']}>
            <Button
              title={'iconRight'}
              icon={{
                name: 'film',
                type: 'font-awesome',
                color: 'yellow',
                size: 20,
              }}
              iconRight={true}></Button>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性linearGradientProps的验证  这个属性是设置button的颜色渐变">
          <TestCase itShould="linearGradientProps" tags={['C_API']}>
            <Button
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}>
              Linear Gradient
            </Button>
          </TestCase>
        </TestSuite>

        <TestSuite name="Button属性loading的验证 设置loading的Button">
          <TestCase itShould="loading" tags={['C_API']}>
            <Button loading={true}></Button>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性loadingProps的验证 设置loading的属性">
          <TestCase itShould="loadingProps" tags={['C_API']}>
            <Button
              loading={true}
              loadingProps={{
                animating: true,
                size: 40,
                color: 'yellow',
              }}></Button>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性loadingStyle的验证 设置loading的样式">
          <TestCase itShould="loadingStyle" tags={['C_API']}>
            <Button
              loading={true}
              loadingStyle={{
                backgroundColor: 'pink',
                opacity: 0.7,
                borderRadius: 5,
              }}></Button>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性radius的验证 radius的枚举验证">
          <TestCase itShould="radius" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'radius设置40'} radius={40}></Button>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'radius设置lg'} radius={'lg'}></Button>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'radius设置md'} radius={'md'}></Button>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'radius设置sm'} radius={'sm'}></Button>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'radius设置xl'} radius={'xl'}></Button>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'radius设置xs'} radius={'xs'}></Button>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="Button属性raised的验证 设置button的raised属性">
          <TestCase itShould="raised" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'raised'} raised={true}></Button>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性size的验证 size的枚举验证">
          <TestCase itShould="size" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'size-lg'} size="lg"></Button>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'size-md'} size="md"></Button>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button title={'size-sm'} size="sm"></Button>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性title的验证 设置title">
          <TestCase itShould="title" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={<CustomTitle />}
                titleStyle={{fontWeight: 'bold', fontSize: 18}}
                linearGradientProps={{
                  colors: ['#FF9800', '#F44336'],
                  start: [1, 0],
                  end: [0.2, 0],
                }}
                buttonStyle={{
                  borderWidth: 0,
                  borderColor: 'transparent',
                  borderRadius: 20,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconRight
                iconContainerStyle={{marginLeft: 10, marginRight: -10}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性验证 设置title">
          <TestCase itShould="title" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={'title属性验证'}
                buttonStyle={{
                  borderWidth: 0,
                  borderColor: 'transparent',
                  borderRadius: 20,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性验证 设置titleProps">
          <TestCase itShould="titleProps " tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={'titleProps属性验证'}
                titleProps={{
                  h1: true,
                  h1Style: {fontSize: 50, fontWeight: '400'},
                }}
               
                buttonStyle={{
                  borderWidth: 0,
                  borderColor: 'transparent',
                  borderRadius: 20,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性验证 设置titleStyle">
          <TestCase itShould="titleStyle" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={'titleStyle属性验证'}
                titleStyle={{fontWeight: 'bold', fontSize: 18, color: 'yellow'}}
                buttonStyle={{
                  borderWidth: 0,
                  borderColor: 'transparent',
                  borderRadius: 20,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性type的验证 type的枚举验证">
          <TestCase itShould="type" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                type="outline"
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}>
                Outline
              </Button>
              <Button
                type="clear"
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}>
                Clear
              </Button>
              <Button
                type="solid"
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}>
                solid
              </Button>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性uppercase的验证 设置uppercase 后文字小写变大写">
          <TestCase itShould="uppercase" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={'按钮uppercase'}
                uppercase={true}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性style的验证  接收TouchableOpacityProps的style">
          <TestCase itShould="TouchableOpacityProps的style" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
               style={{width:200,height:80,backgroundColor:'yellow'}}
                title={'TouchableOpacityProps的style'}
        
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Button属性activeOpacity的验证  接收TouchableOpacityProps的activeOpacity">
          <TestCase itShould="TouchableOpacityProps的activeOpacity" tags={['C_API']}>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                activeOpacity={0.2}
                title={'TouchableOpacityProps的style'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

{
  /* <TestSuite name='Buttons'>
<View style={styles.contentView}>
  <Text style={styles.subTitleStyle}>Basic Buttons</Text>
  <View style={{ alignItems: 'center' }}>
    <TestCase itShould='Basic Buttons' tags={['C_API']}>
      <View style={{ margin: 4 }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </View>
      <View>
        <View style={{ margin: 4 }}>
          <Button
            linearGradientProps={{
              colors: ["#FF9800", "#F44336"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}>Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <Button type="outline">Outline</Button>
          <Button type="clear">Clear</Button>
          <Button uppercase>Uppercase</Button>
          <Button radius="xl">Rounded</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <Icon type="font-awesome" name="rocket" color={'white'} />
          </Button>
        </View>
      </View>
    </TestCase>

    <TestCase itShould='Rounded Buttons' tags={['C_API']}>
      <View style={styles.buttonsContainer}>
        <Button
          title="LOG IN"
          radius={30}
          buttonStyle={{
            backgroundColor: 'black',
            borderWidth: 2,
            borderColor: 'white',
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: 'bold' }}
        />
        <Button
          title="HOME"
          icon={{
            name: 'home',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
          }}
          radius={30}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title="PROFILE"
          icon={{
            name: 'user',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(199, 43, 98, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
          }}
          radius={30}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title={<CustomTitle />}
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: [1, 0],
            end: [0.2, 0],
          }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 20,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          icon={{
            name: 'arrow-right',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
        />
      </View>
    </TestCase>

    <TestCase itShould='Light Buttons' tags={['C_API']}>
      <View style={styles.buttonsContainer}>
        <Button
          title="SIGN UP"
          disabled={true}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(92, 99,216, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
          }}
          containerStyle={{
            width: 200,
            height: 45,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title="Outline Button"
          buttonStyle={{
            borderColor: 'rgba(78, 116, 289, 1)',
          }}
          type="outline"
          titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title="Raised Button"
          buttonStyle={{
            borderColor: 'rgba(78, 116, 289, 1)',
          }}
          type="outline"
          raised
          titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          title="Clear Button"
          type="clear"
          titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
        />
        <Button
          title="Light"
          buttonStyle={{
            backgroundColor: 'rgba(244, 244, 244, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ marginHorizontal: 20, color: 'black' }}
        />
      </View>
    </TestCase>

    <TestCase itShould='Loading Buttons' tags={['C_API']}>
      <View style={styles.buttonsContainer}>
        <Button
          title="HOME"
          loading
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(111, 202, 186, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
            paddingVertical: 5,
          }}
          containerStyle={{
            width: 200,
            height: 40,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title="SIGN UP"
          loading={true}
          loadingProps={{
            size: 'small',
            color: 'rgba(111, 202, 186, 1)',
          }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(92, 99,216, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
            paddingVertical: 10,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
    </TestCase>
  </View>

  <TestCase itShould='Button Groups' tags={['C_API']}>
    <ButtonGroup
      buttons={['SIMPLE', 'BUTTON', 'GROUP']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
    <ButtonGroup
      buttons={['Multiple', 'Select', 'Button', 'Group']}
      selectMultiple
      selectedIndexes={selectedIndexes}
      onPress={(value) => {
        setSelectedIndexes(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />

  </TestCase>
</View>
</TestSuite> */
}

const CustomTitle = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>John Doe</Text>
      <Text style={{fontStyle: 'italic', fontSize: 12}}>Minister of Magic</Text>
    </View>
  );
};
