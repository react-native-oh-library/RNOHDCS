import { View, StyleSheet, Text } from 'react-native';
import React, { useState }  from 'react';
import { Card, ListItem, Avatar } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { backgroundColor } from '@shopify/restyle';

const CardDemo = () => {
  const [cardText,setCardText] = useState('')
  return (
    <Tester>
      <TestSuite name='Card(卡片 只有两个props,主要是用于展示)'>
        <TestCase itShould='props:onPress,style  onPress点击卡片触发回调显示文字card  style 卡片样式设置 height:auto backgroundColor:red 第二个同样，但背景为蓝色'>
          <Text>{cardText}</Text>
          <Card onPress={()=>{setCardText('card')}} style={{container:{height:'auto',backgroundColor:"red"}}}>
            <ListItem
              leftElement={<Avatar text="JM" />}
              centerElement={{
                primaryText: 'John Mitri',
                secondaryText: '3 weeks ago',
              }}
            />
            <View style={styles.textContainer}>
              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </Text>
            </View>
          </Card>
          <Card onPress={()=>{console.log("Card")}} style={{container:{height:'auto',backgroundColor:"blue"}}}>
            <ListItem
              leftElement={<Avatar text="MW" />}
              centerElement={{
                primaryText: 'Mike Wiliams',
                secondaryText: '4 weeks ago',
              }}
            />
            <View style={styles.textContainer}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </Text>
            </View>
          </Card>
        </TestCase>
      </TestSuite>
    </Tester>
  )
}
const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default CardDemo
