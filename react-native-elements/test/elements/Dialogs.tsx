import React, { useState } from 'react';
import { Button, Dialog, CheckBox, ListItem, Avatar, Text } from '@rneui/themed';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { Image } from 'react-native';

type DialogComponentProps = {};

function ChildComponent(props: any) {
  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{props.text}</Text>
      <Image
        resizeMode="contain"
        style={{ width: 200, height: 100, marginTop: 20 }}
        source={{ uri: props.img }}></Image>
    </View>
  );
}
const imgSrc =
  'https://randomuser.me/api/portraits/men/4.jpg';
const ChangeImgSrc =
  'https://randomuser.me/api/portraits/men/5.jpg';

const Dialogs: React.FunctionComponent<DialogComponentProps> = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);
  const [visible11, setVisible11] = useState(false);
  const [visible12, setVisible12] = useState(false);
  const [visible13, setVisible13] = useState(false);
  const [visible14, setVisible14] = useState(false);
  const [visible15, setVisible15] = useState(false);
  const [checked, setChecked] = useState(1);
  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };
  const toggleDialog3 = () => {
    setVisible3(!visible3);
  };
  const toggleDialog4 = () => {
    setVisible4(!visible4);
  };
  const toggleDialog5 = () => {
    setVisible5(!visible5);
  };
  const toggleDialog6 = () => {
    setVisible6(!visible6);
  };
  const toggleDialog7 = () => {
    setVisible7(!visible7);
  };
  const toggleDialog8 = () => {
    setVisible8(!visible8);
  };
  const toggleDialog9 = () => {
    setVisible9(!visible9);
  };
  const toggleDialog10 = () => {
    setVisible10(!visible10);
  };
  const toggleDialog11 = () => {
    setVisible11(!visible11);
  };
  const toggleDialog12 = () => {
    setVisible12(!visible12);
  };
  const toggleDialog13 = () => {
    setVisible13(!visible13);
  };
  const toggleDialog14 = () => {
    setVisible14(!visible14);
  };
  const toggleDialog15 = () => {
    setVisible15(!visible15);
  };
  const userlist = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/men/4.jpg',
      subtitle: 'amy.farha@gmail.com',
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/men/4.jpg',
      subtitle: 'cjackson@gmail.com',
    },
    {
      name: 'Amanda Martin',
      avatar_url:
        'https://randomuser.me/api/portraits/men/4.jpg',
      subtitle: 'amandam@gmail.com',
    },
  ];

  return (
    <Tester>
      <ScrollView style={{ height: '90%' }}>
        <TestSuite name="Dialog属性children验证  传入一个子组件">
          <TestCase itShould="children" tags={['C_API']}>
            <Button
              title="children属性验证"
              onPress={toggleDialog1}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Dialog属性onLongPress验证  长按点击事件无效">
          <TestCase itShould="onLongPress" tags={['C_API']}>
            <Button
              title="长按关闭Dialog"
              onPress={toggleDialog2}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="Dialog属性onPressIn验证  手指按下事件无效">
          <TestCase itShould="onPressIn" tags={['C_API']}>
            <Button
              title="手指按下关闭Dialog"
              onPress={toggleDialog3}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="Dialog属性onPressOut验证  手指松开事件无效">
          <TestCase itShould="onPressOut" tags={['C_API']}>
            <Button
              title="手指松开关闭Dialog"
              onPress={toggleDialog4}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Dialog属性fullScreen 接收Overlay的fullScreen属性 ">
          <TestCase itShould="Overlay的fullScreen属性" tags={['C_API']}>
            <Button
              title="Overlay的fullScreen属性"
              onPress={toggleDialog12}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog属性overlayStyle 接收Overlay的overlayStyle属性 ">
          <TestCase itShould="Overlay的overlayStyle属性" tags={['C_API']}>
            <Button
              title="Overlay的overlayStyle属性"
              onPress={toggleDialog13}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog.Actions属性children验证 设置Dialog.Actions的子组件">
          <TestCase itShould="children" tags={['C_API']}>
            <Button
              title="Dialog.Actions的子组件 设置两个Dialog.Button"
              onPress={toggleDialog6}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog.Button属性disable验证 接收Button组件的disable属性">
          <TestCase itShould="设置Button组件的disable属性" tags={['C_API']}>
            <Button
              title="接收Button组件的disable属性"
              onPress={toggleDialog14}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog.Button属性size验证 接收Button组件的size属性">
          <TestCase itShould="设置Button组件的size属性" tags={['C_API']}>
            <Button
              title="接收Button组件的size属性"
              onPress={toggleDialog15}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog.Loading属性loadingProps验证 设置loading的属性 loading无法转动">
          <TestCase itShould="loadingProps" tags={['C_API']}>
            <Button
              title="设置loading的属性"
              onPress={toggleDialog7}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog.Loading属性loadingStyle验证 设置loading的样式 ">
          <TestCase itShould="loadingProps" tags={['C_API']}>
            <Button
              title="设置loading的样式"
              onPress={toggleDialog8}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog.Title属性title验证 设置文字 ">
          <TestCase itShould="title" tags={['C_API']}>
            <Button
              title="title文字"
              onPress={toggleDialog9}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog.Title属性titleProps验证 设置title的属性 ">
          <TestCase itShould="titleProps" tags={['C_API']}>
            <Button
              title="title属性"
              onPress={toggleDialog10}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Dialog.Title属性titleStyle验证 设置title的样式 ">
          <TestCase itShould="titleStyle" tags={['C_API']}>
            <Button
              title="title样式"
              onPress={toggleDialog11}
              buttonStyle={styles.button}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <ChildComponent img={imgSrc} text={'Dialog children'} />
      </Dialog>
      <Dialog
        onLongPress={toggleDialog2}
        overlayStyle={{ backgroundColor: 'yellow' }}
        isVisible={visible2}
        onBackdropPress={toggleDialog2}>
        <ChildComponent img={imgSrc} text={'Dialog长按切换图片'} />
      </Dialog>
      <Dialog
        overlayStyle={{ backgroundColor: 'pink', borderRadius: 20 }}
        onPressIn={toggleDialog3}
        isVisible={visible3}
        onBackdropPress={toggleDialog3}>
        <Dialog.Loading />
      </Dialog>
      <Dialog
        overlayStyle={{ backgroundColor: 'pink', borderRadius: 20 }}
        onPressOut={toggleDialog4}
        isVisible={visible4}
        onBackdropPress={toggleDialog4}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
      <Dialog
        overlayStyle={{ backgroundColor: 'pink', borderRadius: 20, width: 300 }}
        isVisible={visible5}
        onBackdropPress={toggleDialog5}>
        <Dialog.Title title="Select Preference" />
        {['Option 1', 'Option 2', 'Option 3'].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i + 1}
            onPress={() => setChecked(i + 1)}
          />
        ))}

        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            onPress={() => {
              console.log(`Option ${checked} was selected!`);
              toggleDialog5();
            }}
          />
          <Dialog.Button title="CANCEL" onPress={toggleDialog5} />
        </Dialog.Actions>
      </Dialog>
      <Dialog isVisible={visible6} onBackdropPress={toggleDialog6}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="ACTION 1"
            style={{ backgroundColor: 'black', width: 100 }}
            onPress={() => console.log('Primary Action Clicked!')}
          />
          <Dialog.Button
            style={{ backgroundColor: 'yellow', marginLeft: 20, width: 100 }}
            title="ACTION 2"
            onPress={() => console.log('Secondary Action Clicked!')}
          />
        </Dialog.Actions>
      </Dialog>
      <Dialog isVisible={visible14} onBackdropPress={toggleDialog14}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
        <Dialog.Actions>
          <Dialog.Button
            disabled={true}
            title="ACTION 1"
            onPress={() => console.log('Primary Action Clicked!')}
          />
          <Dialog.Button
            disabled={true}
            title="ACTION 2"
            onPress={() => console.log('Secondary Action Clicked!')}
          />
        </Dialog.Actions>
      </Dialog>
      <Dialog isVisible={visible15} onBackdropPress={toggleDialog15}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
        <Dialog.Actions>
          <Dialog.Button
            style={{ backgroundColor: 'yellow' }}
            size='lg'
            title="ACTION 1"
            onPress={() => console.log('Primary Action Clicked!')}
          />
          <Dialog.Button
            style={{ backgroundColor: 'green' }}
            size='lg'
            title="ACTION 2"
            onPress={() => console.log('Secondary Action Clicked!')}
          />
        </Dialog.Actions>
      </Dialog>
      <Dialog isVisible={visible7} onBackdropPress={toggleDialog7}>
        <Dialog.Title title="Choose Account" />
        {userlist.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={{
              marginHorizontal: -10,
              borderRadius: 8,
            }}
            onPress={toggleDialog7}>
            <Dialog.Loading
              loadingProps={{
                animating: true,
                color: 'yellow',
                size: 40,
              }}></Dialog.Loading>
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: '700' }}>
                {l.name}
              </ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Dialog>
      <Dialog isVisible={visible8} onBackdropPress={toggleDialog8}>
        <Dialog.Title title="Choose Account" />
        {userlist.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={{
              marginHorizontal: -10,
              borderRadius: 8,
            }}
            onPress={toggleDialog8}>
            <Dialog.Loading
              loadingStyle={{
                width: 30,
                height: 30,
                backgroundColor: 'pink',
              }}></Dialog.Loading>
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: '700' }}>
                {l.name}
              </ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Dialog>
      <Dialog isVisible={visible9} onBackdropPress={toggleDialog9}>
        <Dialog.Title title="Dialog Title Title Title Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
      <Dialog isVisible={visible10} onBackdropPress={toggleDialog10}>
        <Dialog.Title
          titleProps={{ style: { color: 'red', fontSize: 30 } }}
          title="Dialog Title Title Title Title"
        />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
      <Dialog isVisible={visible11} onBackdropPress={toggleDialog11}>
        <Dialog.Title
          titleStyle={{
            backgroundColor: 'yellow',
            borderRadius: 20,
            padding: 10,
          }}
          title="Dialog Title Title Title Title"
        />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
      <Dialog fullScreen={true} isVisible={visible12} onBackdropPress={toggleDialog12}>
        <Dialog.Title
          titleStyle={{
            backgroundColor: 'yellow',
            borderRadius: 20,
            padding: 10,
          }}
          title="Dialog Title Title Title Title"
        />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
      <Dialog overlayStyle={{ backgroundColor: 'green', height: '50%' }} isVisible={visible13} onBackdropPress={toggleDialog13}>
        <Dialog.Title
          titleStyle={{
            backgroundColor: 'yellow',
            borderRadius: 20,
            padding: 10,
          }}
          title="Dialog Title Title Title Title"
        />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
    </Tester>
  );
};
{
  /* <TestCase itShould='Open Simple Dialog' tags={['C_API']}>
<Button
  title="Open Simple Dialog"
  onPress={toggleDialog1}
  buttonStyle={styles.button}
/>
</TestCase>
<TestCase itShould='Open Mutli Action Dialog' tags={['C_API']}>
<Button
  title="Open Mutli Action Dialog"
  onPress={toggleDialog2}
  buttonStyle={styles.button}
/>
</TestCase>
<TestCase itShould='Open Loading Dialog' tags={['C_API']}>
<Button
  title="Open Loading Dialog"
  onPress={toggleDialog3}
  buttonStyle={styles.button}
/>
</TestCase>
<TestCase itShould='Open Buttonless Dialog' tags={['C_API']}>
<Button
  title="Open Buttonless Dialog"
  onPress={toggleDialog4}
  buttonStyle={styles.button}
/>
</TestCase>
<TestCase itShould='Open Custom Dialog 1' tags={['C_API']}>
<Button
  title="Open Custom Dialog 1"
  onPress={toggleDialog5}
  buttonStyle={styles.button}
/>
</TestCase>
<TestCase itShould='Open Custom Dialog 2' tags={['C_API']}>
<Button
  title="Open Custom Dialog 2"
  onPress={toggleDialog6}
  buttonStyle={styles.button}
/>
</TestCase> */
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
    alignSelf: 'center',
  },
  buttonContainer: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Dialogs;
