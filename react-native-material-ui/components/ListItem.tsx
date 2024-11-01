import { View, StyleSheet, Text, ScrollView, UIManager, Platform, ToastAndroid } from 'react-native';
import React, { Component, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Subheader } from 'react-native-material-ui';
import Container from './Container';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const ListItemDemo = () => {
  const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  };
  // const { uiTheme } = useContext(UIThemeContext);
  const [press1, setPress1] = useState('')
  const [press2, setPress2] = useState('')
  const [pressOne, setPresssOne] = useState('');
  const [pressOneRight, setPressOneRight] = useState('')
  return (
    <Tester>
      <ScrollView style={{ marginBottom: 100 }}>
        <TestSuite name='ListItem(列表项) dense 紧密'>
          <TestCase itShould='props:dense 普遍 第一条为true，第二条为false'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  dense={true}
                  centerElement="Center element as a text (dense)"
                />
                <ListItem
                  divider
                  dense={false}
                  centerElement="Center element as a text (dense)"
                />

              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='ListItem(列表项) divider 分割线'>
          <TestCase itShould='props:divider 分割线 第一条为true，第二条为false'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
                <ListItem
                  divider={true}
                  centerElement="Center element as a text (dense)"
                />
                <ListItem
                  divider={false}
                  centerElement="Center element as a text (dense)"
                />

              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='ListItem(列表项) onPress 按下触发回调'>
          <TestCase itShould='props:onPress 按下ListItem组件触发的回调 显示文字:"onPress"'>
            <View style={{ height: 300 }}>
              <Text>{press1}</Text>
              <View style={styles.container}>
                <ListItem
                  divider={true}
                  centerElement="Center element as a text (dense)"
                  onPress={() => { setPress1("onPress") }}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='ListItem(列表项) numberOfLines 行'>
          <TestCase itShould='props:numberOfLines 为List组件设置行,第一个为三行，第二个为两行'>
            <View style={{ height: 500 }}>
              <View style={styles.container}>
                <ListItem
                  divider={true}
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                  }}
                  numberOfLines={3}
                />
                <ListItem
                  divider={true}
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                  }}
                  numberOfLines={2}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='ListItem(列表项) leftElement 左侧元素'>
          <TestCase itShould='props:leftElement 左侧元素 默认为图标显示，第一个设置为person图标，第二个为home图标'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
                <ListItem
                  divider={true}
                  centerElement="Center element as a text (dense)"
                  leftElement="person"
                />
                <ListItem
                  divider={true}
                  centerElement="Center element as a text (dense)"
                  leftElement="home"
                />

              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='ListItem(列表项) centerElement 中心侧元素'>
          <TestCase itShould='props:centerElement 中心侧元素 三种传参，第一条对应文本，第二条对应对象，第三条组件子元素<Text></Text>'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
                <ListItem
                  divider={true}
                  centerElement="Center element as a text (dense)"
                />
                <ListItem
                  divider
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Subtext',
                  }}
                />
                <ListItem
                  divider
                  centerElement={<Text>Center element as an object</Text>}
                />

              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='ListItem(列表项) rightElement 右侧元素'>
          <TestCase itShould='props:rightElement 右侧元素 默认为图标显示，第一个设置为person图标，第二个为home图标'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
                <ListItem
                  divider={true}
                  centerElement="Center element as a text (dense)"
                  rightElement="person"
                />
                <ListItem
                  divider={true}
                  centerElement="Center element as a text (dense)"
                  rightElement="home"
                />

              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='ListItem(列表项) onRightElementPress 按下右侧元素时触发回调事件 '>
          <TestCase itShould='props:onRightElementPress 按下时显示"pressOneRight"文本'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
                <Text>{pressOneRight}</Text>
                <ListItem
                  divider={true}
                  centerElement="Center element as a text (dense)"
                  rightElement="person"
                  onRightElementPress={() => {
                    setPressOneRight('PressOneRight')
                  }}
                />

              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='ListItem(列表项) children 传递到ListItem的子节点 '>
          <TestCase itShould='props:centerElement中使用子元素<Text></Text>'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
                <Text>{pressOneRight}</Text>
                <ListItem
                  divider={true}
                  centerElement={<Text>Child node passed to ListItem</Text>}
                  rightElement="person"

                ></ListItem>

              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='ListItem(列表项) style 列表项样式 '>
          <TestCase itShould='props:container列表项组件样式：容器 第一项设置背景red，第二项设置高度为150'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ container: { backgroundColor: 'red' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ container: { height: 150 } }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:contentViewContainer列表项组件样式：内容视图容器 第一项设置背景red，第二项设置宽度度为150'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ contentViewContainer: { backgroundColor: 'red' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ contentViewContainer: { width: 150 } }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:leftElementContainer列表项组件样式：左侧元素样式 第一项设置背景blue，第二项设置宽度度为100'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ leftElementContainer: { backgroundColor: 'blue' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ leftElementContainer: { width: 100 } }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:centerElementContainer列表项组件样式：中间元素容器样式 第一项设置背景blue， 第二项设置背景red'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ centerElementContainer: { backgroundColor: 'blue' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ centerElementContainer: { backgroundColor: 'red' } }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:textViewContainer列表项组件样式：中间元素文本样式 第一项设置背景#666， 第二项设置背景red'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ textViewContainer: { backgroundColor: '#666' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ textViewContainer: { backgroundColor: 'red' } }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:primaryText 列表项组件样式：中间元素primaryText文本样式 第一项设置背景#666， 第二项设置背景red'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ primaryText: { backgroundColor: '#666' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ primaryText: { backgroundColor: 'red' } }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:firstLine 列表项组件样式：中间元素第一行文本样式 第一项设置背景#666， 第二项设置背景red'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ firstLine: { backgroundColor: '#666' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ firstLine: { backgroundColor: 'red' } }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:primaryTextContainer 列表项组件样式：中间元素第一行文本容器样式 第一项设置背景#666， 第二项设置高度为100'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ primaryTextContainer: { backgroundColor: '#666' } }}
                />
                <View style={{ marginTop: 50 }}></View>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ primaryTextContainer: { height: 50 } }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:secondaryText 列表项组件样式：中间元素secondaryText文本样式 第一项设置背景#666， 第二项设置背景为red'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ secondaryText: { backgroundColor: '#666' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ secondaryText: { backgroundColor: 'red' } }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:tertiaryText 列表项组件样式：中间元素tertiaryText文本样式 第一项设置背景#666， 第二项设置背景为red'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ tertiaryText: { backgroundColor: '#666' } }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                  }}
                  style={{ tertiaryText: { backgroundColor: 'red' } }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:rightElementContainer列表项组件样式：右侧元素容器样式 第一项设置背景#666， 第二项设置背景red'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  rightElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ rightElementContainer: { backgroundColor: '#666' } }}
                />
                <ListItem
                  divider
                  rightElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ rightElementContainer: { backgroundColor: 'red' } }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:LeftElement列表项组件样式：右侧元素容器样式 第一项设置背景red， 第二项设置背景blue'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ leftElement: {color:"red"} }}
                />
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ leftElement: {color:'blue' } }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:rightElement列表项组件样式：右侧元素容器样式 第一项设置颜色red， 第二项设置颜色blue'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <ListItem
                  divider
                  rightElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ rightElement: { color:"red" } }}
                />
                <ListItem
                  divider
                  rightElement="person"
                  centerElement={<Text>Custom center element</Text>}
                  style={{ rightElement: { color:'blue'} }}
                />
              </View>
            </View>
          </TestCase>



        </TestSuite>

      </ScrollView>
    </Tester>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ListItemDemo