// import React, { useState } from 'react';
// import { View, StyleSheet, Image, FlatList } from 'react-native';
// import {
//   Text,
//   ListItem,
//   Avatar,
//   Icon,
//   Badge,
//   ListItemProps,
//   Button,
//   Switch,
// } from '@rneui/themed';
// import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

// const log = () => console.log('this is an example method');

// type List1Data = {
//   title: string;
//   icon: string;
// };
// const list1: List1Data[] = [
//   {
//     title: 'Appointments',
//     icon: 'times-circle-o',
//   },
//   {
//     title: 'Trips',
//     icon: 'rocket',
//   },
//   {
//     title: 'Passwords',
//     icon: 'flickr',
//   },
//   {
//     title: 'Pitches',
//     icon: 'lightbulb-o',
//   },
//   {
//     title: 'Updates',
//     icon: 'train',
//   },
// ];

// type List2Data = {
//   name: string;
//   avatar_url: string;
//   subtitle: string;
//   linearGradientColors: string[];
// };

// const list2: Partial<List2Data>[] = [
//   {
//     name: 'Amy Farha',
//     avatar_url: 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
//     subtitle: 'Vice President',
//     linearGradientColors: ['#FF9800', '#F44336'],
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url: 'https://uifaces.co/our-content/donated/KtCFjlD4.jpg',
//     subtitle: 'Vice Chairman',
//     linearGradientColors: ['#3F51B5', '#2196F3'],
//   },
//   {
//     name: 'Amanda Martin',
//     avatar_url:
//       'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
//     subtitle: 'CEO',
//     linearGradientColors: ['#FFD600', '#FF9800'],
//   },
//   {
//     name: 'Christy Thomas',
//     avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
//     subtitle: 'Lead Developer',
//     linearGradientColors: ['#4CAF50', '#8BC34A'],
//   },
//   {
//     name: 'Melissa Jones',
//     avatar_url:
//       'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
//     subtitle: 'CTO',
//     linearGradientColors: ['#F44336', '#E91E63'],
//   },
// ];

// type ListComponentProps = ListItemProps;

// const Lists2: React.FunctionComponent<ListComponentProps> = () => {
//   const [expanded, setExpanded] = React.useState(false);

//   const listItemProps = {};
//   const RenderRow = ({ item }: { item: List1Data }) => {
//     return (
//       <ListItem.Swipeable
//         onPress={log}
//         bottomDivider
//         onSwipeBegin={(swipeDirection) =>
//           console.log('onSwipeBegin ', swipeDirection)
//         }
//         onSwipeEnd={() => console.log('onSwipeEnd')}
//         // use as callback
//         leftContent={(resetToDefault) => (
//           <Button
//             title="Info"
//             onPress={() => resetToDefault()}
//             icon={{ name: 'info', type: 'font-awesome', color: 'white' }}
//             buttonStyle={{ minHeight: '100%' }}
//           />
//         )}
//         // or pass component
//         rightContent={
//           <Button
//             title="Delete"
//             icon={{ name: 'remove', type: 'font-awesome', color: 'white' }}
//             buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
//           />
//         }
//       >
//         <Icon name={item.icon} type="font-awesome" />
//         <ListItem.Content>
//           <ListItem.Title>{item.title}</ListItem.Title>
//         </ListItem.Content>
//         <ListItem.Chevron />
//       </ListItem.Swipeable>
//     );
//   };
//   const [switch1, setSwitch1] = useState(true);
//   const [checkbox1, setCheckbox1] = useState(true);
//   const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

//   return (
//     <>
//       <Tester style={{ flex: 1 }}>

//         <TestSuite name='Buttons'>
//         <TestCase itShould='Rounded Buttons' tags={['C_API']}>
//           <FlatList
//             style={{ height: '90%' }}
//             ListHeaderComponent={
//               <>
//                 <View style={{ paddingVertical: 8 }}>
//                   {list2.map((l, i) => (
//                     <ListItem
//                       {...(listItemProps as ListItemProps)}
//                       key={i}
//                       linearGradientProps={{
//                         colors: l.linearGradientColors,
//                         start: [1, 0],
//                         end: [0.2, 0],
//                       }}
//                       ViewComponent={View}
//                       containerStyle={{
//                         marginHorizontal: 16,
//                         marginVertical: 8,
//                         borderRadius: 8,
//                       }}
//                     >
//                       <Avatar rounded source={{ uri: l.avatar_url }} />
//                       <ListItem.Content>
//                         <ListItem.Title
//                           style={{ color: 'white', fontWeight: 'bold' }}
//                         >
//                           {l.name}
//                         </ListItem.Title>
//                         <ListItem.Subtitle style={[{ color: 'white' }]}>
//                           {l.subtitle}
//                         </ListItem.Subtitle>
//                       </ListItem.Content>
//                       <ListItem.Chevron color="blue" name='pencil' type='font-awesome' />
//                     </ListItem>
//                   ))}
//                 </View>

//                 <View style={styles.list}>
//                   <ListItem.Accordion
//                     content={
//                       <>
//                         <Icon name="map-marker" type='font-awesome' size={30} />
//                         <ListItem.Content>
//                           <ListItem.Title>List Accordion</ListItem.Title>
//                         </ListItem.Content>
//                       </>
//                     }
//                     isExpanded={expanded}
//                     icon={<Icon name="map-marker" type='font-awesome' />}
//                     leftRotate
//                     onPress={() => {
//                       setExpanded(!expanded);
//                     }}
//                   >
//                   </ListItem.Accordion>
//                 </View>
//                 <View style={styles.list}>
//                   {list2.map((l, i) => (
//                     <ListItem key={i} bottomDivider>
//                       <Icon name="user-circle-o" type="font-awesome" color="red" />
//                       <ListItem.Content>
//                         <ListItem.Title style={{ color: 'red' }}>
//                           {l.name}
//                         </ListItem.Title>
//                         <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
//                       </ListItem.Content>
//                       <ListItem.Content right>
//                         <ListItem.Title right style={{ color: 'green' }}>
//                           11:00 am
//                         </ListItem.Title>
//                         <ListItem.Subtitle right>12:00 am</ListItem.Subtitle>
//                       </ListItem.Content>
//                     </ListItem>
//                   ))}
//                 </View>
//                 <View style={styles.list}>
//                   <ListItem bottomDivider>
//                     <ListItem.Content>
//                       <ListItem.Title>Name</ListItem.Title>
//                     </ListItem.Content>
//                     <ListItem.Input placeholder="Type your name" />
//                     <ListItem.Chevron />
//                   </ListItem>
//                   <ListItem bottomDivider>
//                     <ListItem.Content>
//                       <ListItem.Title>Switch that please 😲</ListItem.Title>
//                     </ListItem.Content>
//                     <Switch
//                       value={switch1}
//                       onValueChange={(value) => setSwitch1(value)}
//                     />
//                   </ListItem>
//                   <ListItem bottomDivider>
//                     <ListItem.Content>
//                       <ListItem.Title>Choose 🤯</ListItem.Title>
//                     </ListItem.Content>
//                     <ListItem.ButtonGroup
//                       buttons={['Flower', 'Coco']}
//                       selectedIndex={selectedButtonIndex}
//                       onPress={(index) => setSelectedButtonIndex(index)}
//                     />
//                   </ListItem>
//                   <ListItem bottomDivider>
//                     <ListItem.CheckBox
//                       checked={checkbox1}
//                       onPress={() => setCheckbox1(!checkbox1)}
//                     />
//                     <ListItem.Content>
//                       <ListItem.Title>Check that please 😢</ListItem.Title>
//                     </ListItem.Content>
//                   </ListItem>
//                   <ListItem bottomDivider>
//                     <Badge value="12" />
//                     <ListItem.Content>
//                       <ListItem.Title>With a Badge ! 😻</ListItem.Title>
//                     </ListItem.Content>
//                   </ListItem>
//                   <ListItem bottomDivider>
//                     <Icon name="check" type='font-awesome' size={20} />
//                     <ListItem.Content>
//                       <ListItem.Title>This thing is checked 😎</ListItem.Title>
//                     </ListItem.Content>
//                   </ListItem>
//                 </View>
//                 <View style={styles.list}>
//                   <ListItem>
//                     <Avatar source={require('./images/avatar1.jpg')} />
//                     <ListItem.Content>
//                       <ListItem.Title>
//                         Limited supply! Its like digital gold!
//                       </ListItem.Title>
//                       <View style={styles.subtitleView}>
//                         <Image
//                           source={require('./images/rating.png')}
//                           style={styles.ratingImage}
//                         />
//                         <Text style={styles.ratingText}>5 months ago</Text>
//                       </View>
//                     </ListItem.Content>
//                   </ListItem>
//                 </View>
//               </>
//             }
//             data={list1}
//             keyExtractor={(a: List1Data, index: number) => index.toString()}
//             renderItem={RenderRow}
//           />
//           </TestCase>
//         </TestSuite>
//       </Tester>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   list: {
//     borderTopWidth: 1,
//     borderColor: '#cbd2d9',
//   },
//   subtitleView: {
//     flexDirection: 'row',
//     paddingLeft: 10,
//     paddingTop: 5,
//   },
//   ratingImage: {
//     height: 19.21,
//     width: 100,
//   },
//   ratingText: {
//     paddingLeft: 10,
//     color: 'grey',
//   },
//   titleStyle: {
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
//   subTitleStyle: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   }
// });

// export default Lists2;

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button, LinearProgress, ListItem, Icon, Avatar} from '@rneui/themed';
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
const List: React.FunctionComponent = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);

  const [expanded2, setExpanded2] = React.useState(false);

  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);
  const [expanded8, setExpanded8] = React.useState(false);
  const [expanded9, setExpanded9] = React.useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0);
  const [selectedButtonIndex1, setSelectedButtonIndex1] = React.useState(0);
  const [selectedButtonIndex2, setSelectedButtonIndex2] = React.useState(0);
  const [selectedButtonIndex3, setSelectedButtonIndex3] = React.useState(0);
  const [checkbox1, setCheckbox1] = React.useState(true);
  const [checkbox2, setCheckbox2] = React.useState(true);
  const [onlongPress, setOnlongPress] = React.useState(false);
  const [onPress, setOnPress] = React.useState(false);
  const [onPressIn, setOnPressIn] = React.useState(false);
  const [onPressOut, setonPressOut] = React.useState(false);

  const [changeBg1, setChangeBg1] = React.useState(false);
  const [changeBg2, setChangeBg2] = React.useState(false);

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="ListItem属性Component 传入任意自定义的组件 传入新组件会覆盖原来的内容">
          <TestCase itShould="设置Component" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>ListItem设置自定义组件</Text>
              <ListItem Component={TouchableComponent}>
                <Icon name="inbox" type="material-community" color="grey" />
                <ListItem.Content>
                  <ListItem.Title>Inbox</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性ViewComponent 传入任意自定义的视图组件 传入新组件会覆盖原来的内容">
          <TestCase itShould="设置ViewComponent" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>ListItem设置自定义视图组件</Text>
              <ListItem Component={ViewComponent}>
                <Icon name="inbox" type="material-community" color="grey" />
                <ListItem.Content>
                  <ListItem.Title>Inbox</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性bottomDivider  添加底部横线 ">
          <TestCase itShould="设置bottomDivider" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>
                bottomDivider设置后会在底部出现一条横线
              </Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'white',
                  width: '80%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性children  添加子组件 ">
          <TestCase itShould="设置children" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>在内部添加内容</Text>
              <ListItem
                
                containerStyle={{
                  backgroundColor: 'white',
                  width: '80%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    Children
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性containerStyle  为组件容器设置样式">
          <TestCase itShould="设置containerStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>
                containerStyle 设置最外层的样式
              </Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性disabledStyle 当属性disable设置为true时的样式">
          <TestCase itShould="设置disabledStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>
                设置disable为true 显示disabledStyle{' '}
              </Text>
              <ListItem
                disabled={true}
                disabledStyle={{
                  backgroundColor: 'gray',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性LinearGradient 设置为渐变组件">
          <TestCase itShould="设置LinearGradient" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>LinearGradient渐变色组件</Text>
              <ListItem
                linearGradientProps={{
                  colors: ['#FF9800', '#F44336'],
                  start: {x: 1, y: 0},
                  end: {x: 0.2, y: 0},
                }}
                ViewComponent={LinearGradient}
                containerStyle={{
                  backgroundColor: 'gray',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性pad 左边组件与右边组件的距离">
          <TestCase itShould="设置pad" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置pad值为20，40，80</Text>
              <ListItem
                pad={20}
                containerStyle={{
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem
                pad={40}
                containerStyle={{
                  marginTop: 20,
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem
                pad={80}
                containerStyle={{
                  marginTop: 20,
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性topDivider 添加顶部横线">
          <TestCase itShould="设置topDivider" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>
                topDivider设置后会在顶部出现一条横线
              </Text>
              <ListItem
                pad={20}
                containerStyle={{
                  backgroundColor: 'white',
                  width: '80%',
                  alignSelf: 'center',
                  opacity: 0.7,
                }}
                topDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="ListItem属性style 接收React-Native原生View组件的style">
          <TestCase itShould="React-Native原生View组件的style" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>
                 设置原生的style样式
              </Text>
              <ListItem
              style={{
                marginVertical: 10,
                width: '80%',
                alignSelf: 'center',
                height: 100,
                borderRadius: 5,
                backgroundColor:'black',
              }}
                pad={20}
                containerStyle={{
                  backgroundColor: 'white',
                  width: '80%',
                  alignSelf: 'center',
                  opacity: 0.7,
                }}
                topDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem属性testID 接收React-Native原生View组件的testID">
          <TestCase itShould="React-Native原生View组件的testID" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>
                 设置原生的style样式
              </Text>
              <ListItem
              style={{
                marginVertical: 10,
                width: '80%',
                alignSelf: 'center',
                height: 100,
                borderRadius: 5,
                backgroundColor:'black',
              }}
              testID={'ListItem'}
                pad={20}
                containerStyle={{
                  backgroundColor: 'white',
                  width: '80%',
                  alignSelf: 'center',
                  opacity: 0.7,
                }}
                topDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性animation 设置Accordion显示动画为2s">
          <TestCase itShould="设置animation" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>Accordion显示动画</Text>
              <ListItem.Accordion
                containerStyle={{backgroundColor: 'white'}}
                onPress={() => {
                  setExpanded(!expanded);
                }}
                animation={{duration: 2000}}
                isExpanded={expanded}>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                    opacity: 0.7,
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性content 设置左边显示的内容">
          <TestCase itShould="设置content" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置左边显示的内容</Text>
              <ListItem.Accordion
              
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 200}}
                isExpanded={expanded1}
                onPress={()=>setExpanded1(!expanded1)}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性expandIcon 未展开时显示原来的Icon 展开时显示expandIcon ">
          <TestCase itShould="设置expandIcon" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>expandIcon与Icon在两种状态下显示</Text>
              <ListItem.Accordion
                icon={
                  <Icon
                    type="font-awesome"
                    name="save"
                    color="black"
                    size={30}
                  />
                }
                expandIcon={
                  <Icon
                  type="font-awesome"
                  name="remove"
                  color="black"
                  size={30}
                />
                }
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 2000}}
                isExpanded={expanded3}
                onPress={()=>setExpanded3(!expanded3)}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性icon  显示自定义icon ">
          <TestCase itShould="设置icon" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>显示自定义icon </Text>
              <ListItem.Accordion
                icon={
                  <Icon
                    type="font-awesome"
                    name="rocket"
                    color="black"
                    size={30}
                  />
                }
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 2000}}
                isExpanded={expanded3}
                onPress={()=>setExpanded3(!expanded3)}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性isExpanded 是否折叠 ">
          <TestCase itShould="设置isExpanded" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>是否折叠，点击可切换</Text>
              <ListItem.Accordion
                onPress={() => {
                  setExpanded4(!expanded4);
                }}
                icon={
                  <Icon
                    type="font-awesome"
                    name="save"
                    color="black"
                    size={30}
                  />
                }
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 1000}}
                isExpanded={expanded4}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性leftRotate 图片显示时否需要旋转 ">
          <TestCase itShould="设置leftRotate" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>折叠图标显示时否需要旋转</Text>
              <ListItem.Accordion
                leftRotate={true}
                onPress={() => {
                  setExpanded5(!expanded5);
                }}
                icon={
                  <Icon
                    type="font-awesome"
                    name="save"
                    color="black"
                    size={30}
                  />
                }
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 1000}}
                isExpanded={expanded5}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性noIcon 不显示折叠图标 ">
          <TestCase itShould="设置noIcon" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>不显示折叠图标</Text>
              <ListItem.Accordion
                leftRotate={false}
                onPress={() => {
                  setExpanded6(!expanded6);
                }}
                noIcon
                icon={
                  <Icon
                    type="font-awesome"
                    name="save"
                    color="black"
                    size={30}
                  />
                }
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 1000}}
                isExpanded={expanded6}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性noRotation 点击折叠时不需要旋转图标 ">
          <TestCase itShould="设置noRotation" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>不旋转图标</Text>
              <ListItem.Accordion
                leftRotate={false}
                onPress={() => {
                  setExpanded7(!expanded7);
                }}
                noRotation={true}
                icon={
                  <Icon
                    type="font-awesome"
                    name="remove"
                    color="black"
                    size={30}
                  />
                }
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 1000}}
                isExpanded={expanded7}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性disableStyle 接收ListItem的disableStyle属性">
          <TestCase itShould="disableStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收ListItem的disableStyle属性</Text>
              <ListItem.Accordion
                   disabledStyle={{
                    backgroundColor: 'gray',
                    width: '80%',
                    alignSelf: 'center',
                    borderRadius: 20,
                    opacity: 0.7,
                  }}
                disabled={true}
                leftRotate={false}
                onPress={() => {
                  setExpanded8(!expanded8);
                }}
                noRotation={true}
                icon={
                  <Icon
                    type="font-awesome"
                    name="remove"
                    color="black"
                    size={30}
                  />
                }
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 1000}}
                isExpanded={expanded8}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Accordion属性topDivider 接收ListItem的topDivider属性">
          <TestCase itShould="topDivider" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收ListItem的topDivider属性</Text>
              <ListItem.Accordion
                topDivider={true}
                leftRotate={false}
                onPress={() => {
                  setExpanded9(!expanded9);
                }}
                noRotation={true}
                icon={
                  <Icon
                    type="font-awesome"
                    name="remove"
                    color="black"
                    size={30}
                  />
                }
                containerStyle={{backgroundColor: 'white'}}
                animation={{duration: 1000}}
                isExpanded={expanded9}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={{color: '#222222'}}>
                        List Accordion
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }>
                <ListItem
                  pad={20}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  topDivider>
                  <Avatar
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{color: 'black'}}>
                      John Doe
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'black'}}>
                      President
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.ButtonGroup属性onLongPress  长按点击事件">
          <TestCase itShould="设置onLongPress" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置onLongPress会报错</Text>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Choose 🤯</ListItem.Title>
                </ListItem.Content>
                <ListItem.ButtonGroup  
                  selectedButtonStyle={{backgroundColor:'green',width:100,borderRadius:20}}
                  buttons={['Flower', 'Coco']}
                  selectedIndex={selectedButtonIndex1}
                  onLongPress={()=>{setSelectedButtonIndex1(selectedButtonIndex1 == 0 ? 1 : 0)}} />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.ButtonGroup属性onPressIn 手指按下触发事件">
          <TestCase itShould="设置onPressIn" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置onPressIn</Text>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Choose 🤯</ListItem.Title>
                </ListItem.Content>
                <ListItem.ButtonGroup selectedButtonStyle={{backgroundColor:'blue',width:100,borderRadius:20}}
                  buttons={['Flower', 'Coco']}
                  selectedIndex={selectedButtonIndex2}
                  onPressIn={()=>{setSelectedButtonIndex2(selectedButtonIndex2 == 0 ? 1 : 0)}} />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.ButtonGroup属性onPressOut  手指松开触发事件">
          <TestCase itShould="设置onPressOut" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置onPressOut</Text>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Choose 🤯</ListItem.Title>
                </ListItem.Content>
                <ListItem.ButtonGroup selectedButtonStyle={{backgroundColor:'black',width:100,borderRadius:20}}
                  buttons={['Flower', 'Coco']}
                  selectedIndex={selectedButtonIndex3}
                  onPressOut={()=>{setSelectedButtonIndex3(selectedButtonIndex3 == 0 ? 1 : 0)}} />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.ButtonGroup属性disabled  接收ButtonGroup的disabled">
          <TestCase itShould="设置disabled" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收ButtonGroup的disabled</Text>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Choose 🤯</ListItem.Title>
                </ListItem.Content>
                <ListItem.ButtonGroup selectedButtonStyle={{backgroundColor:'black',width:100,borderRadius:20}}
                disabled={true}
                  buttons={['Flower', 'Coco']}
                  selectedIndex={selectedButtonIndex3}
                  onPressOut={()=>{setSelectedButtonIndex3(selectedButtonIndex3 == 0 ? 1 : 0)}} />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.ButtonGroup属性disabledStyle  接收ButtonGroup的disabledStyle">
          <TestCase itShould="设置disabledStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收ButtonGroup的disabledStyle</Text>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Choose 🤯</ListItem.Title>
                </ListItem.Content>
                <ListItem.ButtonGroup selectedButtonStyle={{backgroundColor:'black',width:100,borderRadius:20}}
                disabledStyle={{backgroundColor:'yellow'}}
                disabledSelectedStyle={{backgroundColor:'yellow'}}
                disabled={true}
                  buttons={['Flower', 'Coco']}
                  selectedIndex={selectedButtonIndex3}
                  onPressOut={()=>{setSelectedButtonIndex3(selectedButtonIndex3 == 0 ? 1 : 0)}} />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.CheckBox属性接收所有checkbox属性">
          <TestCase itShould="设置checkbox1" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>checkbox1</Text>
              <ListItem bottomDivider>
                <ListItem.CheckBox
                  checked={checkbox1}
                  onPress={() => setCheckbox1(!checkbox1)}
                />
                <ListItem.Content>
                  <ListItem.Title>Check that please 😢</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.CheckBox属性disable 接收checkbox的disable">
          <TestCase itShould="设置disable" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收checkbox的disable</Text>
              <ListItem bottomDivider>
                <ListItem.CheckBox
                  checked={checkbox2}
                  disabled={true}
                  onPress={() => setCheckbox1(!checkbox2)}
                />
                <ListItem.Content>
                  <ListItem.Title>Check that please 😢</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.CheckBox属性disableStyle 接收checkbox的disableStyle">
          <TestCase itShould="设置disableStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收checkbox的disableStyle</Text>
              <ListItem bottomDivider>
                <ListItem.CheckBox
                  
                  checked={checkbox2}
                  disabled={true}
                  disabledStyle={{width:30,height:30,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}
                  onPress={() => setCheckbox2(!checkbox2)}
                />
                <ListItem.Content>
                  <ListItem.Title>Check that please 😢</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Chevron属性onLongPress	长按点击事件">
          <TestCase itShould="设置onLongPress	" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onLongPress</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onLongPress={() => {
                    setOnlongPress(!onlongPress);
                  }}
                  color={'blue'}
                  size={30}
                  type="font-awesome"
                  name={onlongPress ? 'close' : 'save'}
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Chevron属性onPress	点击事件">
          <TestCase itShould="设置onPress	" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onPress</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onPress={() => {
                    setOnPress(!onPress);
                  }}
                  color={'blue'}
                  size={30}
                  type="font-awesome"
                  name={onPress ? 'close' : 'save'}
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Chevron属性onPressIn	按下触发">
          <TestCase itShould="设置onPressIn	" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onPressIn</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onPressIn={() => {
                    setOnPressIn(!onPressIn);
                  }}
                  color={'blue'}
                  size={30}
                  type="font-awesome"
                  name={onPressIn ? 'close' : 'save'}
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Chevron属性onPressOut	松开触发">
          <TestCase itShould="设置onPressOut" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onPressOut</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onPressOut={() => {
                    setonPressOut(!onPressOut);
                  }}
                  color={'blue'}
                  size={30}
                  type="font-awesome"
                  name={onPressOut ? 'close' : 'save'}
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Chevron属性name	接收Icon组件的name属性">
          <TestCase itShould="接收Icon组件的name属性" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>Icon组件的name属性</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onPressOut={() => {
                    setonPressOut(!onPressOut);
                  }}
                  color={'red'}
                  size={30}
                  type="font-awesome"
                  name='remove'
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Chevron属性size	接收Icon组件的size属性">
          <TestCase itShould="接收Icon组件的size属性" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>Icon组件的size属性</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onPressOut={() => {
                    setonPressOut(!onPressOut);
                  }}
                  color={'red'}
                  size={50}
                  type="font-awesome"
                  name='remove'
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Content属性right  content内容从右边开始 ">
          <TestCase itShould="设置right " tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置content属性right为true </Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'white',
                  width: '100%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content right>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>设置content属性right为false </Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'white',
                  width: '100%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content right={false}>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Content属性h1和h1style  接收Text组件的h1和h1style">
          <TestCase itShould="设置Text组件的h1和h1style " tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>Text组件的h1和h1style </Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'white',
                  width: '100%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content  h1={true} h1Style={{backgroundColor:'green'}}>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
    
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Content属性h2和h2style  接收Text组件的h2和h2style">
          <TestCase itShould="设置Text组件的h2和h2style " tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>Text组件的h2和h2style </Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'white',
                  width: '100%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content  h2={true} h2Style={{backgroundColor:'green'}}>
                  <ListItem.Title style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
    
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Input 接收所有input组件的属性">
          <TestCase itShould="设置ListItem.Input" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>ListItem.Input</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Input
                    containerStyle={{
                      width: 280,
                      height: 40,
                      borderColor: 'pink',
                      borderWidth: 1,
                      alignSelf: 'center',
                      borderRadius: 10,
                    }}
                    placeholder="请输入"></ListItem.Input>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Input属性inputStyle 接收Input组件属性inputStyle">
          <TestCase itShould="设置ListItem.Input的inputStyle " tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收Input组件属性inputStyle</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Input
                    containerStyle={{
                      width: 280,
                      height: 40,
                      borderColor: 'pink',
                      borderWidth: 1,
                      alignSelf: 'center',
                      borderRadius: 10,
                    }}
                    inputStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
                    placeholder="请输入"></ListItem.Input>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Input属性leftIcon 接收Input组件属性leftIcon">
          <TestCase itShould="设置ListItem.Input的leftIcon " tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收Input组件属性leftIcon</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Input
                    containerStyle={{
                      width: 280,
                      height: 40,
                      borderColor: 'pink',
                      borderWidth: 1,
                      alignSelf: 'center',
                      borderRadius: 10,
                    }}
                    leftIcon={{
                      type: 'font-awesome',
                      name: 'comment',
                      color: 'pink',
                      size: 30,
                    }}
                    inputStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
                    placeholder="请输入"></ListItem.Input>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Subtitle属性right 左边组件与右边组件的距离">
          <TestCase itShould="设置pad为20，40，80" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置pad值为20</Text>
              <ListItem
                pad={20}
                containerStyle={{
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                {/* <ListItem.Content> */}
                {/* <ListItem.Title style={{ color: 'black' }}>John Doe</ListItem.Title> */}
                <ListItem.Subtitle right={false} style={{color: 'black'}}>
                  President
                </ListItem.Subtitle>
                {/* </ListItem.Content> */}
              </ListItem>
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>设置pad值为40</Text>
              <ListItem
                pad={40}
                containerStyle={{
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                {/* <ListItem.Content> */}
                {/* <ListItem.Title style={{ color: 'black' }}>John Doe</ListItem.Title> */}
                <ListItem.Subtitle right={false} style={{color: 'black'}}>
                  President
                </ListItem.Subtitle>
                {/* </ListItem.Content> */}
              </ListItem>
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>设置pad值为80</Text>
              <ListItem
                pad={80}
                containerStyle={{
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                {/* <ListItem.Content> */}
                {/* <ListItem.Title style={{ color: 'black' }}>John Doe</ListItem.Title> */}
                <ListItem.Subtitle right={false} style={{color: 'black'}}>
                  President
                </ListItem.Subtitle>
                {/* </ListItem.Content> */}
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Subtitle属性h1和h1Style 接收Text组件属性h1和h1Style">
          <TestCase itShould="设置Text组件属性h1和h1Style" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收Text组件属性h1和h1Style</Text>
              <ListItem
                pad={20}
                containerStyle={{
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Subtitle h1={true} h1Style={{backgroundColor:'green',color:'red'}} right={false} style={{color: 'black'}}>
                  President
                </ListItem.Subtitle>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Subtitle属性h2和h2Style 接收Text组件属性h2和h2Style">
          <TestCase itShould="设置Text组件属性h2和h2Style" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收Text组件属性h2和h2Style</Text>
              <ListItem
                pad={20}
                containerStyle={{
                  backgroundColor: 'pink',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  opacity: 0.7,
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Subtitle h2={true} h2Style={{backgroundColor:'blue',color:'red'}} right={false} style={{color: 'black'}}>
                  President
                </ListItem.Subtitle>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性animation 左右拖动的时候显示动画">
          <TestCase itShould="设置animation" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>显示timing动画</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                // or pass component
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>显示spring动画</Text>
              <ListItem.Swipeable
                animation={{type: 'spring', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                // or pass component
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性leftContent 往右拖动显示的内容">
          <TestCase itShould="设置leftContent" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>往右拖动显示的内容</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                containerStyle={{backgroundColor: 'pink'}}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性leftStyle 往右拖动显示的内容的样式">
          <TestCase itShould="设置leftStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>往右拖动显示的内容的样式设置</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                leftStyle={{
                  width: 200,
                  opacity: 0.6,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                containerStyle={{backgroundColor: 'pink'}}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性leftWidth 设置左边内容的宽度">
          <TestCase itShould="设置leftWidth  100, 180" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>左边内容的宽度100</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                leftStyle={{opacity: 0.6, borderColor: 'black', borderWidth: 1}}
                containerStyle={{backgroundColor: 'pink'}}
                leftWidth={100}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>左边内容的宽度180</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                leftStyle={{opacity: 0.6, borderColor: 'black', borderWidth: 1}}
                containerStyle={{backgroundColor: 'pink'}}
                leftWidth={180}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="ListItem.Swipeable属性minSlideWidth 设置会报错 显示无此属性 标记为无效">
          <TestCase itShould="设置minSlideWidth" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置会报错，显示无此属性</Text>
              <ListItem.Swipeable
                minSlideWidth={50}
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                leftStyle={{
                  width: 200,
                  opacity: 0.6,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                containerStyle={{backgroundColor: 'pink'}}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="ListItem.Swipeable事件onSwipeBegin onSwipeBegin开始滑动修改背景颜色">
          <TestCase
            itShould="onSwipeBegin事件触发修改背景颜色"
            tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onSwipeBegin事件触发</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection => {
                  if (swipeDirection == 'left') {
                    setChangeBg1(true);
                  } else {
                    setChangeBg1(false);
                  }
                }}
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                // or pass component
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                containerStyle={
                  changeBg1
                    ? {backgroundColor: 'yellow'}
                    : {backgroundColor: 'gray'}
                }>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable事件onSwipeEnd onSwipeEnd结束滑动修改背景颜色">
          <TestCase itShould="onSwipeEnd事件触发修改背景颜色" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onSwipeEnd事件触发</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeEnd={() => {
                  setChangeBg2(!changeBg2);
                }}
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                // or pass component
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                containerStyle={
                  changeBg2
                    ? {backgroundColor: 'blue'}
                    : {backgroundColor: 'gray'}
                }>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性rightContent 往左拖动显示的内容">
          <TestCase itShould="设置rightContent" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>往左拖动显示的内容</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                containerStyle={{backgroundColor: 'pink'}}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性rightStyle 往右拖动显示的内容的样式">
          <TestCase itShould="设置rightStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>往左拖动显示的内容的样式设置</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                rightStyle={{
                  width: 200,
                  opacity: 0.6,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                containerStyle={{backgroundColor: 'pink'}}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性rightWidth 设置左边内容的宽度">
          <TestCase itShould="设置rightWidth 100, 180" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>右边内容的宽度100</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                rightStyle={{
                  width: 200,
                  opacity: 0.6,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                containerStyle={{backgroundColor: 'pink'}}
                leftWidth={100}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
            <View style={styles.container}>
              <Text style={styles.subText}>右边内容的宽度180</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                rightStyle={{
                  width: 200,
                  opacity: 0.6,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                containerStyle={{backgroundColor: 'pink'}}
                leftWidth={180}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性disabledStyle 接收ListItem的disabledStyle属性">
          <TestCase itShould="设置ListItem的disabledStyle属性" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收ListItem的disabledStyle属性</Text>
              <ListItem.Swipeable
                disabled={true}
                disabledStyle={{  
                backgroundColor: 'gray',
                width: '100%',
                alignSelf: 'center',
                
               }}
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                rightStyle={{
                  width: 200,
                  opacity: 0.6,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                containerStyle={{backgroundColor: 'pink'}}
                leftWidth={100}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Swipeable属性bottomDivider 接收ListItem的bottomDivider属性">
          <TestCase itShould="设置ListItem的bottomDivider属性" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收ListItem的bottomDivider属性</Text>
              <ListItem.Swipeable 
                animation={{type: 'timing', duration: 100}}
                bottomDivider={true}
                onSwipeBegin={swipeDirection =>
                  console.log('onSwipeBegin ', swipeDirection)
                }
                onSwipeEnd={() => console.log('onSwipeEnd')}
                // use as callback
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                rightStyle={{
                  width: 200,
                  opacity: 0.6,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                containerStyle={{backgroundColor: 'white'}}
                leftWidth={100}>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title style={{color:'black'}}>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="ListItem.Title属性right title在右边显示 设置无效">
          <TestCase itShould="设置right属性" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>ListItem.Title设置right</Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'white',
                  width: '80%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content style={{backgroundColor: 'yellow'}}>
                  <ListItem.Title right={true} style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="ListItem.Title属性h1和h1Style  接收Text组件的h1和h1Style属性">
          <TestCase itShould="设置Text组件的h1和h1Style属性" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收Text组件的h1和h1Style属性</Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'white',
                  width: '100%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content style={{backgroundColor: 'yellow'}}>
                  <ListItem.Title h1={true} h1Style={{backgroundColor:'green'}}  style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Title属性h2和h2Style  接收Text组件的h2和h2Style属性">
          <TestCase itShould="设置Text组件的h2和h2Style属性" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收Text组件的h2和h2Style属性</Text>
              <ListItem
                containerStyle={{
                  backgroundColor: 'white',
                  width: '100%',
                  alignSelf: 'center',
                }}
                bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                />
                <ListItem.Content style={{backgroundColor: 'yellow'}}>
                  <ListItem.Title h2={true} h2Style={{backgroundColor:'pink'}}  style={{color: 'black'}}>
                    John Doe
                  </ListItem.Title>
                  <ListItem.Subtitle style={{color: 'black'}}>
                    President
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#222',
  },
  vertical: {
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#222',
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default List;
