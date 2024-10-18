import React from 'react';
import {SpeedDial} from '@rneui/themed';
import {View, Text, ScrollView} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export default () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  return (
    <Tester>
      <ScrollView style={{height: '100%'}}>
        {/* <TestSuite name="SpeedDial的属性backdropPressableProps backdropPressableProps设置背景颜色 添加子组件均无效">
          <TestCase itShould="backdropPressableProps" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                  onPress:()=>{
                    console.log('11111111111111')
                  }
                }}
                pressRetentionOffset={1000}
                isOpen={open}
                labelPressable
                placement="right"
                overlayColor="transparent"
                icon={{
                  name: 'pencil',
                  type: 'font-awesome',
                  color: '#fff',
                  style: {marginLeft: 5, marginBottom: 7},
                }}
                openIcon={{
                  name: 'remove',
                  type: 'font-awesome',
                  color: '#fff',
                  style: {marginLeft: 5, marginBottom: 7},
                }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}>
                <SpeedDial.Action
                  icon={{
                    name: 'plus',
                    type: 'font-awesome',
                    color: '#fff',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Add"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: '#fff',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Delete"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SpeedDial的属性children 设置子组件SpeedDial.Action">
          <TestCase itShould="backdropPressableProps" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                isOpen={open1}
                placement="right"
                overlayColor="transparent"
                icon={{
                  name: 'pencil',
                  type: 'font-awesome',
                  color: '#fff',
                  style: {marginLeft: 5, marginBottom: 7},
                }}
                openIcon={{
                  name: 'remove',
                  type: 'font-awesome',
                  color: '#fff',
                  style: {marginLeft: 5, marginBottom: 7},
                }}
                onOpen={() => setOpen1(!open1)}
                onClose={() => setOpen1(!open1)}>
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'plus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Add"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Delete"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Delete"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性isOpen 设置isOpen为true">
          <TestCase itShould="isOpen" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                isOpen={true}
                placement="right"
                overlayColor="transparent"
                icon={{
                  name: 'pencil',
                  type: 'font-awesome',
                  color: '#fff',
                  style: {marginLeft: 5, marginBottom: 7},
                }}
                openIcon={{
                  name: 'remove',
                  type: 'font-awesome',
                  color: '#fff',
                  style: {marginLeft: 5, marginBottom: 7},
                }}
                onOpen={() => setOpen1(!open1)}
                onClose={() => setOpen1(!open1)}>
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'plus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Add"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Delete"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Delete"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性labelPressable 设置labelPressable 设置为true则点击文字可触发关闭事件">
          <TestCase itShould="labelPressable" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open2}
                labelPressable
                placement="right"
                overlayColor="transparent"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'remove', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen2(!open2)}
                onClose={() => setOpen2(!open2)}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="Add"
                  onPress={() => setOpen2(!open2)}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="Delete"
                  onPress={() => setOpen2(!open2)}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="Delete"
                  onPress={() => setOpen2(!open2)}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性onClose onClose调用关闭弹出的子组件">
          <TestCase itShould="onClose" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open3}
                labelPressable
                placement="right"
                overlayColor="transparent"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'remove', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen3(!open3)}
                onClose={() => setOpen3(!open3)}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性onOpen onOpen调用弹出子组件">
          <TestCase itShould="onOpen" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open4}
                labelPressable
                placement="right"
                overlayColor="transparent"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'remove', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen4(!open4)}
                onClose={() => setOpen4(!open4)}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性openIcon 弹出子组件的icon">
          <TestCase itShould="openIcon" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open5}
                labelPressable
                placement="right"
                overlayColor="transparent"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen5(!open5)}
                onClose={() => setOpen5(!open5)}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性overlayColor 整个弹出层的背景色">
          <TestCase itShould="overlayColor" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open6}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen6(!open6)}
                onClose={() => setOpen6(!open6)}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性transitionDuration 设置弹出层的时间">
          <TestCase itShould="transitionDuration 设置2秒" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open7}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen7(!open7)}
                onClose={() => setOpen7(!open7)}
                transitionDuration={2000}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
          <TestCase itShould="transitionDuration 设置1秒" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open8}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen8(!open8)}
                onClose={() => setOpen8(!open8)}
                transitionDuration={1000}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性disable 接收Button组件的disable属性">
          <TestCase itShould="设置Button组件的disable属性" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                disabled={true}
                isOpen={open10}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen10(!open10)}
                onClose={() => setOpen10(!open10)}
                transitionDuration={2000}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性size 接收Button组件的size属性">
          <TestCase itShould="设置Button组件的size属性" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                size='small'
                isOpen={open11}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen11(!open11)}
                onClose={() => setOpen11(!open11)}
                transitionDuration={2000}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性placement 接收FAB组件的placement属性">
          <TestCase itShould="设置FAB组件的placement属性为left" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open12}
                labelPressable
                placement="left"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen12(!open12)}
                onClose={() => setOpen12(!open12)}
                transitionDuration={2000}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial的属性color 接收FAB组件的color属性">
          <TestCase itShould="设置FAB组件的color为蓝色" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="blue"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open13}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen13(!open13)}
                onClose={() => setOpen13(!open13)}
                transitionDuration={2000}>
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => console.log('Added Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => console.log('Delete Event')}
                />
                <SpeedDial.Action
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => console.log('Delete Event')}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial.Action的属性visible 接收FAB组件的visible属性">
          <TestCase itShould="设置FAB组件的visible属性" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open14}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen14(!open14)}
                onClose={() => setOpen14(!open14)}>
                <SpeedDial.Action
                  visible={!open14}
                  disabledStyle={{width:100,height:100,backgroundColor:'green'}}
                  labelPressable={true}
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => setOpen14(!open14)}
                />
                <SpeedDial.Action
                 visible={!open14}
                  disabledStyle={{width:100,height:100,backgroundColor:'green'}}
                  labelPressable={true}
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => setOpen14(!open14)}
                />
                <SpeedDial.Action
                  visible={!open14}
                  labelPressable={true}
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => setOpen14(!open14)}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial.Action的属性color 接收FAB组件的color属性">
          <TestCase itShould="设置FAB组件的color属性" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open15}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen15(!open15)}
                onClose={() => setOpen15(!open15)}>
                <SpeedDial.Action
                  labelPressable={true}
                  color="green"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => setOpen15(!open15)}
                />
                <SpeedDial.Action
                  labelPressable={true}
                  color="green"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => setOpen15(!open15)}
                />
                <SpeedDial.Action
                  labelPressable={true}
                  color="green"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => setOpen15(!open15)}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="SpeedDial.Action的属性 设置labelPressable 为true 则可点击文字关闭弹出层">
          <TestCase itShould="labelPressable" tags={['C_API']}>
            <View style={{height: 400, width: '100%'}}>
              <SpeedDial
                color="black"
                backdropPressableProps={{
                  children: <Text>123</Text>,
                  style: {backgroundColor: 'yellow'},
                }}
                isOpen={open9}
                labelPressable
                placement="right"
                overlayColor="pink"
                icon={{name: 'pencil', type: 'font-awesome', color: '#fff'}}
                openIcon={{name: 'save', type: 'font-awesome', color: '#fff'}}
                onOpen={() => setOpen9(!open9)}
                onClose={() => setOpen9(!open9)}>
                <SpeedDial.Action
                  labelPressable={true}
                  color="black"
                  icon={{name: 'plus', type: 'font-awesome', color: 'yellow'}}
                  title="child1"
                  onPress={() => setOpen9(!open9)}
                />
                <SpeedDial.Action
                  labelPressable={true}
                  color="black"
                  icon={{name: 'minus', type: 'font-awesome', color: 'yellow'}}
                  title="child2"
                  onPress={() => setOpen9(!open9)}
                />
                <SpeedDial.Action
                  labelPressable={true}
                  color="black"
                  icon={{
                    name: 'minus',
                    type: 'font-awesome',
                    color: 'yellow',
                    style: {marginLeft: 5, marginBottom: 7},
                  }}
                  title="child3"
                  onPress={() => setOpen9(!open9)}
                />
              </SpeedDial>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
