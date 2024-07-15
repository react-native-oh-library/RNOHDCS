import { Badge, Icon, Avatar, Button } from 'react-native-material-ui';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
const BadgeDemo = () => {
  return (
    <Tester >
      <ScrollView style={styles.scrollView}>
        <TestSuite name='Badge with icons  '>
          <TestCase itShould='Props:text,children,,style'>
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
              <View style={styles.badgeContainer}>
                <Badge
                  text="13"
                  
                  style={{ container: { bottom: -8, right: -12 } }}
                >
                  <Icon name="star" />
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='Badge with button '>
          <TestCase itShould='Props:text,children,,style'>
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

        <TestSuite name='Badge with text '>
          <TestCase itShould='Props:text,children'>
            <View style={styles.rowContainer}>
              <View style={styles.badgeContainer}>
                <Badge text="2" >
                  <Text style={{ padding: 8 }}>Text badge</Text>
                </Badge>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='Badge with Icon '>
          <TestCase itShould='Props:size,children,icon,style,'>
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

        <TestSuite name='Badge with strokes '>
          <TestCase itShould='Props:size,children,icon,style,,stroke'>
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
              <View style={styles.badgeContainer}>
                <Badge
                  
                  size={12}
                  stroke={4}
                  style={{ strokeContainer: { top: 0, right: 0 } }}
                >
                  <Icon name="notifications" />
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