import { Badge, Icon, Avatar, Button } from 'react-native-material-ui';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
const BadgeDemo = () => {
  return (
    <Tester >
      <ScrollView style={styles.scrollView}>
        <TestSuite name='children(图标) (带图标的徽章)'>
          <TestCase itShould='Props:children,  包含在组件中的子元素就叫做children 子元素为图标组件'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
                <Badge text="3" >
                  <Icon name="star" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
                <Badge
                  text="13"
                >
                  <Icon name="person" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
                <Badge  >
                  <Icon name="folder-video" />
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='children(按钮) (带按钮的徽章)'>
          <TestCase itShould='Props:children, 包含在组件中的子元素就叫做children 子元素为按钮组件' >
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
                <Badge  text="8" >
                  <Button text="Flat" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
                <Badge
                  text="5"
                  
                  style={{ container: { top: -12, right: -20 } }}
                >
                  <Button
                    raised
                    primary
                    text="Raised"
                  />
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='children(文本) (带文本的徽章) '>
          <TestCase itShould='Props:children 包含在组件中的子元素就叫做children 子元素为文本组件'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
                <Badge text="2" >
                  <Text style={{ padding: 8 }}>Text badge</Text>
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='children(头像) (带头像的徽章) '>
          <TestCase itShould='Props:children 包含在组件中的子元素就叫做children 子元素为头像组件'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
                <Badge
                  size={24}
                  icon="star"
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="BR" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
                <Badge
                  size={24}
                  
                  icon={{
                    name: 'speaker-notes',
                    color: 'white',
                    size:10
                  }}
                  style={{ container: { top: -8, right: -12 } }}
                >
                  <Avatar text="TR" />
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='stroke(描边) (带边框的徽章) '>
          <TestCase itShould='Props: stroke={4} 为徽章添加白色描边 第一个设置粗细为4 第二个为10 ,第三个未设置描边'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
                <Badge
                  size={24}
                  stroke={4}
                  icon="star"
                  style={{ strokeContainer: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="BR" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
                <Badge
                  size={24}
                  stroke={10}
                  icon="speaker-notes"
                  style={{ strokeContainer: { top: -8, right: -12 } }}
                >
                  <Avatar text="TR" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
              <Badge
                  size={24}
                  icon="star"
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="BR" />
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='text(文字) (徽章内呈现的内容 文字) '>
          <TestCase itShould='Props:text= "BR  第一个为BR 第二个为123'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
              <Badge
                  size={24}
                  text="BR"
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="BR" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
              <Badge
                  text="123"
                  size={24}
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="123" />
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>


        <TestSuite name='icon(图标) (徽章内呈现的内容 图标) '>
          <TestCase itShould='Props:icon= "star  第一个为star 第二个为home'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
              <Badge
                  size={24}
                  icon="star"
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="BR" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
              <Badge
                  size={24}
                  icon="home"
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="123" />
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='size(大小) (徽章大小) '>
          <TestCase itShould='Props:size= 24 第一个为24 第二个为40'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
              <Badge
                  size={24}
                  icon="star"
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="BR" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
              <Badge
                  size={40}
                  icon="home"
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Avatar text="123" />
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='style(样式) (徽章的样式) '>
          <TestCase itShould='Props:style 背景颜色 第一个为backgroundColor:red 第二个为backgroundColor:"blue"'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
              <Badge
                  size={24}
                  icon="star"
                  style={{ container: { backgroundColor:"red"} }}
                >
                  <Avatar text="BR" />
                </Badge>
              </View>
              <View style={styles.badgeContainer}>
              <Badge
                  size={40}
                  icon="home"
                  style={{ container: { backgroundColor:"blue"} }}
                >
                  <Avatar text="123" />
                </Badge>
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
    marginTop: 20,
    marginLeft: 10,

  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
    marginTop: 20
  },
  badgeContainer: {
    paddingLeft: 24,
  },
  scrollView: {
    marginBottom: 70
  }
});

export default BadgeDemo