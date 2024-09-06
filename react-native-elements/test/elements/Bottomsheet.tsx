import React, {useState} from 'react';
import {BottomSheet, Button, ListItem} from '@rneui/themed';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const list = [
    {title: 'List Item 1'},
    {title: 'List Item 2'},
    {title: 'List Item 2'},
    {title: 'List Item 2'},
    {title: 'List Item 2'},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <Tester style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView>
        <TestSuite name="BottomSheet属性backdropStyle的验证 这个属性是对bottomSheet弹出后 对后面遮罩的样式设置">
          <TestCase itShould="backdropStyle" tags={['C_API']}>
            <Button
              title="Open Bottom Sheet with handler"
              onPress={() => setIsVisible(true)}
              buttonStyle={styles.button}
            />
            <BottomSheet
              backdropStyle={{backgroundColor: 'yellow', opacity: 0.8,borderRadius:100}}
              onBackdropPress={() => setIsVisible(false)}
              isVisible={isVisible}
              containerStyle={{marginBottom: 50}}>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </TestCase>
        </TestSuite>
        <TestSuite name="BottomSheet属性containerStyle的验证 这个属性是对bottomSheet弹出后 对整个容器的样式设置">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <Button
              title="Open Bottom Sheet with handler"
              onPress={() => setIsVisible1(true)}
              buttonStyle={styles.button}
            />
            <BottomSheet
              onBackdropPress={() => setIsVisible1(false)}
              isVisible={isVisible1}
              containerStyle={{
                opacity:0.8,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </TestCase>
        </TestSuite>
        <TestSuite name="BottomSheet属性isVisible的验证 isVisible是对bottomSheet显示与隐藏的控制 点击按钮设置为true显示 点击弹出后的遮罩设置为false隐藏">
          <TestCase itShould="isVisible" tags={['C_API']}>
            <Button
              title="Open Bottom Sheet with handler"
              onPress={() => setIsVisible2(true)}
              buttonStyle={styles.button}
            />
            <BottomSheet
              onBackdropPress={() => setIsVisible2(false)}
              isVisible={isVisible2}
              containerStyle={{
                marginBottom: 50,
                backgroundColor: 'pink',
                borderRadius: 20,
              }}>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </TestCase>
        </TestSuite>
        <TestSuite name="BottomSheet属性modalProps的验证 modalProps是对bottomSheet弹出时 设置是否需要动画 默认是自带动画的 需要哪种动画 以及对BottomSheet显示和隐藏的监听">
          <TestCase itShould="modalProps" tags={['C_API']}>
            <Button
              title="Open Bottom Sheet with handler"
              onPress={() => setIsVisible4(true)}
              buttonStyle={styles.button}
            />
            <BottomSheet
              modalProps={{
                animationType: 'slide',
                animated: true,
                onRequestClose: () => {},
                onDismiss: () => {},
              }}
              onBackdropPress={() => setIsVisible4(false)}
              isVisible={isVisible3}
              containerStyle={{
                marginBottom: 50,
                backgroundColor: 'pink',
                borderRadius: 20,
              }}>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </TestCase>
        </TestSuite>
        <TestSuite name="BottomSheet属性onBackdropPress的验证 onBackdropPress是对bottomSheet弹出后遮罩的点击事件的监听 当点击遮罩会隐藏bottomSheet">
          <TestCase itShould="onBackdropPress" tags={['C_API']}>
            <Button
              title="Open Bottom Sheet with handler"
              onPress={() => setIsVisible4(true)}
              buttonStyle={styles.button}
            />
            <BottomSheet
              onBackdropPress={() => setIsVisible4(false)}
              isVisible={isVisible4}
              containerStyle={{
                marginBottom: 50,
                backgroundColor: 'gray',
                borderRadius: 20,
              }}>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </TestCase>
        </TestSuite>
        <TestSuite name="BottomSheet属性scrollViewProps的验证 设置滚动属性 包含背景色 透明度 是否可滚动">
          <TestCase itShould="scrollViewProps" tags={['C_API']}>
            <Button
              title="Open Bottom Sheet with handler"
              onPress={() => setIsVisible5(true)}
              buttonStyle={styles.button}
            />
            <BottomSheet
              scrollViewProps={{
                style: {backgroundColor: 'yellow', opacity: 0.8},
                showsHorizontalScrollIndicator: true,
                scrollEnabled: true,
                decelerationRate: 'fast',
              }}
              onBackdropPress={() => setIsVisible5(false)}
              isVisible={isVisible5}
              containerStyle={{
                marginBottom: 50,
                backgroundColor: 'white',
                borderRadius: 20,
              }}>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
{
  /* <Tester>
<TestSuite name='BottomSheet'>
  <TestCase itShould='Rounded Buttons' tags={['C_API']}>
    <Button
      title="Open Bottom Sheet with handler"
      onPress={() => setIsVisible(true)}
      buttonStyle={styles.button}
    />
    <BottomSheet
      modalProps={{}}
      onBackdropPress={() => setIsVisible(false)}
      isVisible={isVisible}
      containerStyle={{ marginBottom: 38 }}
    >
      {list.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={l.containerStyle}
          onPress={l.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  </TestCase>
</TestSuite>
</Tester> */
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default BottomSheetComponent;
