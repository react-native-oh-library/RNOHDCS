import React from 'react';
import {Tooltip, Text, TooltipProps} from '@rneui/themed';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

const {height} = Dimensions.get('window');

type ToolTipComponentProps = {};
class ImageComponent extends React.Component {
  render() {
    return (
      <Image
        source={{
          uri: 'https://randomuser.me/api/portraits/men/4.jpg',
        }}
        style={{width: 100, height: 100}}></Image>
    );
  }
}
class ModalComponent extends React.Component {
  render() {
    return <Modal visible={true} />;
  }
}

class ViewComponent extends React.Component {
  render() {
    return (
      <View style={{width: 300, height: 300, backgroundColor: 'white'}}></View>
    );
  }
}
const TooltipComponent: React.FunctionComponent<ToolTipComponentProps> = () => {
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
  const [open16, setOpen16] = React.useState(false);
  const [open17, setOpen17] = React.useState(false);
  const [open18, setOpen18] = React.useState(false);
  const [open19, setOpen19] = React.useState(false);
  const [open20, setOpen20] = React.useState(false);
  const [open21, setOpen21] = React.useState(false);
  const toolProps = {};
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Tooltip的ModalComponent属性 传入一个ImageComponent组件">
          <TestCase itShould="ModalComponent" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                ModalComponent={ImageComponent}
                visible={open1}
                onOpen={() => {
                  setOpen1(true);
                }}
                onClose={() => {
                  setOpen1(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="#4d86f7"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
            {/* <View style={{ marginVertical: height / 8 }}>
            <View style={styles.view}>
              <Tooltip
                visible={open1}
                onOpen={() => {
                  setOpen1(true);
                }}
                onClose={() => {
                  setOpen1(false);
                }}
                {...(toolProps as TooltipProps)}
                popover={<Text>no caret!</Text>}
                withPointer={false}
              >
                <Text style={{ color: '#000' }}>without caret</Text>
              </Tooltip>
              <Tooltip
                visible={open2}
                onOpen={() => {
                  setOpen2(true);
                }}
                onClose={() => {
                  setOpen2(false);
                }}
                {...(toolProps as TooltipProps)}
                popover={<Text>Tooltip info goes here</Text>}
                width={200}
                backgroundColor='#397af8'
              >
                <Text style={{ color: '#000' }}>Press me</Text>
              </Tooltip>
            </View>
            <View style={styles.view}>
              <Tooltip
                visible={open3}
                onOpen={() => {
                  setOpen3(true);
                }}
                onClose={() => {
                  setOpen3(false);
                }}
                {...(toolProps as TooltipProps)}
                backgroundColor='#8F0CE8'
                popover={
                  <Text>Tooltip info goes here too. Find tooltip everywhere</Text>
                }
                containerStyle={{ width: 200, height: 60 }}
              >
                <Text style={{ color: '#000' }}>Press me</Text>
              </Tooltip>
              <Tooltip
                visible={open4}
                onOpen={() => {
                  setOpen4(true);
                }}
                onClose={() => {
                  setOpen4(false);
                }}
                {...(toolProps as TooltipProps)}
                containerStyle={{ width: 145, height: 130 }}
                popover={
                  <Text>
                    {
                      'Some big text full of important stuff for the super duper user that our design has been created for'
                    }
                  </Text>
                }
              >
                <Text style={{ color: '#000' }}>HUGE</Text>
              </Tooltip>
            </View>
            <View style={styles.view}>
              <Tooltip
                visible={open5}
                onOpen={() => {
                  setOpen5(true);
                }}
                onClose={() => {
                  setOpen5(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor='#4d86f7'
                popover={<Text>Tooltip info goes here</Text>}
              >
                <Text style={{ color: '#000' }}>More attention</Text>
              </Tooltip>
            </View>
            <View style={styles.view}>
              <Tooltip
                visible={open6}
                onOpen={() => {
                  setOpen6(true);
                }}
                onClose={() => {
                  setOpen6(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor='#6296f9'
                popover={<Text>Tooltip info goes here</Text>}
              >
                <Text style={{ color: '#000' }}>I'm different</Text>
              </Tooltip>
              <Tooltip
                visible={open7}
                onOpen={() => {
                  setOpen7(true);
                }}
                onClose={() => {
                  setOpen7(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                popover={<Text>Tooltip info goes here</Text>}
              >
                <Text style={{ color: '#000' }}>Press me</Text>
              </Tooltip>
            </View>
          </View> */}
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的animationType属性 传入动画类型">
          <TestCase itShould="fade" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                animationType="fade"
                visible={open2}
                onOpen={() => {
                  setOpen2(true);
                }}
                onClose={() => {
                  setOpen2(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="#4d86f7"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
          <TestCase itShould="none" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                animationType="none"
                visible={open3}
                onOpen={() => {
                  setOpen3(true);
                }}
                onClose={() => {
                  setOpen3(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="#4d86f7"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的backgroundColor属性  设置tooltip的背景颜色">
          <TestCase itShould="backgroundColor" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                animationType="fade"
                visible={open4}
                onOpen={() => {
                  setOpen4(true);
                }}
                onClose={() => {
                  setOpen4(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Tooltip的closeOnlyOnBackdropPress属性  设置closeOnlyOnBackdropPress无效">
          <TestCase itShould="closeOnlyOnBackdropPress" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open5}
                onOpen={() => {
                  setOpen5(true);
                }}
                onClose={() => {
                  setOpen5(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Tooltip的containerStyle属性  设置containerStyle容器样式">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open6}
                onOpen={() => {
                  setOpen6(true);
                }}
                onClose={() => {
                  setOpen6(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的height属性  设置Tooltip的height">
          <TestCase itShould="height" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open7}
                onOpen={() => {
                  setOpen7(true);
                }}
                onClose={() => {
                  setOpen7(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的highlightColor属性  设置高亮颜色">
          <TestCase itShould="highlightColor" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                highlightColor={'red'}
                height={80}
                // containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open8}
                onOpen={() => {
                  setOpen8(true);
                }}
                onClose={() => {
                  setOpen8(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的onClose属性  关闭ToolTip">
          <TestCase itShould="onClose" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open9}
                onOpen={() => {
                  setOpen9(true);
                }}
                onClose={() => {
                  setOpen9(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的onOpen属性  打开ToolTip">
          <TestCase itShould="onOpen" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open10}
                onOpen={() => {
                  setOpen10(true);
                }}
                onClose={() => {
                  setOpen10(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的overlayColor属性  overlayColor ToolTip弹出时候的背景色">
          <TestCase itShould="overlayColor" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open11}
                onOpen={() => {
                  setOpen11(true);
                }}
                onClose={() => {
                  setOpen11(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的pointerColor属性  pointerColor 小尖角的背景色">
          <TestCase itShould="pointerColor" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open12}
                onOpen={() => {
                  setOpen12(true);
                }}
                onClose={() => {
                  setOpen12(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的pointerStyle属性  pointerStyle 小尖角的样式">
          <TestCase itShould="pointerStyle" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                pointerStyle={{width: 30, height: 50, backgroundColor: 'green'}}
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open13}
                onOpen={() => {
                  setOpen13(true);
                }}
                onClose={() => {
                  setOpen13(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<Text>Tooltip info goes here</Text>}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的popover属性  popover 自定义容器">
          <TestCase itShould="popover" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                pointerStyle={{width: 30, height: 50, backgroundColor: 'green'}}
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open14}
                onOpen={() => {
                  setOpen14(true);
                }}
                onClose={() => {
                  setOpen14(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                popover={<ViewComponent />}>
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Tooltip的skipAndroidStatusBar属性  设置skipAndroidStatusBar无效">
          <TestCase itShould="skipAndroidStatusBar" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                skipAndroidStatusBar={true}
                pointerStyle={{width: 30, height: 50, backgroundColor: 'green'}}
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open15}
                onOpen={() => {
                  setOpen15(true);
                }}
                onClose={() => {
                  setOpen15(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
               >
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Tooltip的toggleAction属性  toggleAction  自定义弹出Tooltip事件 自定义为长按事件">
          <TestCase itShould="toggleAction" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                toggleOnPress={true}
                toggleAction={'onLongPress'}
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open16}
                onOpen={() => {
                  setOpen16(true);
                }}
                onClose={() => {
                  setOpen16(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                >
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的toggleOnPress属性  toggleOnPress  设置为true 才能弹出Tooltip 当前设置为false">
          <TestCase itShould="toggleOnPress" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                toggleOnPress={false}
                toggleAction={'onLongPress'}
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open17}
                onOpen={() => {
                  setOpen17(true);
                }}
                onClose={() => {
                  setOpen17(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
                >
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的visible属性  visible控制Tooltip的显示和隐藏">
          <TestCase itShould="visible" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open18}
                onOpen={() => {
                  setOpen18(true);
                }}
                onClose={() => {
                  setOpen18(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor="yellow"
               >
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的width属性  Tooltip的宽度">
          <TestCase itShould="visible" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open19}
                onOpen={() => {
                  setOpen19(true);
                }}
                onClose={() => {
                  setOpen19(false);
                }}
                {...(toolProps as TooltipProps)}
                width={300}
                backgroundColor="yellow"
               >
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的withOverlay属性  withOverlay">
          <TestCase itShould="withOverlay" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                withOverlay={true}
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open20}
                onOpen={() => {
                  setOpen20(true);
                }}
                onClose={() => {
                  setOpen20(false);
                }}
                {...(toolProps as TooltipProps)}
                width={300}
                backgroundColor="yellow"
                >
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tooltip的withPointer属性 withPointer">
          <TestCase itShould="withPointer" tags={['C_API']}>
            <View style={styles.view}>
              <Tooltip
                withPointer={false}
                pointerColor={'blue'}
                overlayColor={'red'}
                highlightColor={'black'}
                height={80}
                containerStyle={{backgroundColor: 'pink'}}
                closeOnlyOnBackdropPress={true}
                animationType="fade"
                visible={open20}
                onOpen={() => {
                  setOpen20(true);
                }}
                onClose={() => {
                  setOpen20(false);
                }}
                {...(toolProps as TooltipProps)}
                width={300}
                backgroundColor="yellow"
              >
                <ImageComponent />
              </Tooltip>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 50,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default TooltipComponent;
