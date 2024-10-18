import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

const users = [
  {
    name: 'thot leader',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://randomuser.me/api/portraits/men/5.jpg',
  },
];

type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = () => {
  const [onlongPress, setOnlongPress] = useState(false);
  const [onPress, setOnPress] = useState(false);
  const [onPressIn, setOnPressIn] = useState(false);
  const [onPressOut, setonPressOut] = useState(false);
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Card属性containerStyle 设置containerStyle 容器样式">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <Card
              containerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                borderColor: 'black',
                marginBottom: 20,
              }}>
              <Card.Title>CARD WITH DIVIDER</Card.Title>
              <Card.Divider />
              {users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                );
              })}
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card属性wrapperStyle 设置子组件样式">
          <TestCase itShould="wrapperStyle" tags={['C_API']}>
            <Card
              containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
              wrapperStyle={{
                backgroundColor: 'green',
                borderRadius: 20,
                borderColor: 'green',
                marginBottom: 20,
              }}>
              <Card.Title>CARD WITH DIVIDER</Card.Title>
              <Card.Divider />
              {users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                );
              })}
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Divider属性color ">
          <TestCase itShould="设置color分割线的颜色" tags={['C_API']}>
            <Card>
              <Card.Title>CARD WITH DIVIDER</Card.Title>
              <Card.Divider color="yellow" />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Divider属性inset">
          <TestCase itShould="是否可设置inset" tags={['C_API']}>
            <Card>
              <Card.Title>CARD WITH DIVIDER</Card.Title>
              <Card.Divider inset={true} color="white" />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Divider属性insetType">
          <TestCase itShould="insetType的枚举验证" tags={['C_API']}>
            <Card>
              <Card.Title>left</Card.Title>
              <Card.Divider inset={true} insetType="left" color="white" />
            </Card>
            <Card>
              <Card.Title>right</Card.Title>
              <Card.Divider inset={true} insetType="right" color="white" />
            </Card>
            <Card>
              <Card.Title>middle</Card.Title>
              <Card.Divider inset={true} insetType="middle" color="white" />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Divider属性style  Divider的样式设置">
          <TestCase itShould="Divider的样式设置" tags={['C_API']}>
            <Card>
              <Card.Title>Divider的样式设置</Card.Title>
              <Card.Divider
                style={{ height: 5, backgroundColor: 'yellow', borderRadius: 3 }}
              />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Divider属性subHeader  Divider设置subHeader">
          <TestCase itShould="subHeader " tags={['C_API']}>
            <Card>
              <Card.Title>Divider的subHeader</Card.Title>
              <Card.Divider
                style={{ height: 5, backgroundColor: 'yellow', borderRadius: 3 }}
                subHeader="subHeader"
                subHeaderStyle={{
                  fontSize: 28,
                  color: 'pink',
                  fontWeight: '400',
                }}
              />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Divider属性 subHeaderStyle  Divider设置subHeaderStyle ">
          <TestCase itShould="subHeaderStyle" tags={['C_API']}>
            <Card>
              <Card.Title>Divider的subHeader</Card.Title>
              <Card.Divider
                style={{ height: 5, backgroundColor: 'yellow', borderRadius: 3 }}
                subHeader="subHeader"
                subHeaderStyle={{
                  fontSize: 28,
                  color: 'blue',
                  fontWeight: '400',
                }}
              />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Divider属性width  Divider设置宽度 ">
          <TestCase itShould="width" tags={['C_API']}>
            <Card>
              <Card.Title>Divider的width:10</Card.Title>
              <Card.Divider width={10} color="pink" />
            </Card>
            <Card>
              <Card.Title>Divider的width:3</Card.Title>
              <Card.Divider width={3} color="yellow" />
            </Card>
            <Card>
              <Card.Title>Divider的width:5</Card.Title>
              <Card.Divider width={5} color="white" />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.FeaturedSubtitle的h1和h1Style  接收Text组件的h1和h1Style属性 ">
          <TestCase
            itShould="设置Text组件的h1和h1Style属性"
            tags={['C_API']}>
            <Card>
              <Card.Title>接收Text组件的h1和h1Style属性</Card.Title>
              <Card.FeaturedSubtitle
                h1={true}
                h1Style={{ color: '#D8D8D8', fontWeight: '400' }}>
                FeaturedSubtitle
              </Card.FeaturedSubtitle>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.FeaturedSubtitle的h2和h2Style 接收Text组件的h2和h2Style属性  ">
          <TestCase
            itShould="设置Text组件的h2和h2Style属性"
            tags={['C_API']}>
            <Card>
              <Card.Title>接收Text组件的h2和h2Style属性</Card.Title>
              <Card.FeaturedSubtitle
                h2={true}
                h2Style={{ color: 'blue', fontWeight: '400' }}>
                FeaturedSubtitle
              </Card.FeaturedSubtitle>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.FeaturedTitle的h1和h1Style  接收Text组件的h1和h1Style属性">
          <TestCase itShould="接收Text组件的h1和h1Style属性" tags={['C_API']}>
            <Card>
              <Card.Title>接收Text组件的h1和h1Style属性</Card.Title>
              <Card.FeaturedTitle
                h1={true}
                h1Style={{ color: '#D8D8D8', fontWeight: '400' }}>
                FeaturedTitle属性 h1和h1style
              </Card.FeaturedTitle>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.FeaturedTitle的h2和h2Style  接收Text组件的h2和h2Style属性">
          <TestCase itShould="设置Text组件的h2和h2Style属性" tags={['C_API']}>
            <Card>
              <Card.Title>设置Text组件的h2和h2Style属性</Card.Title>
              <Card.FeaturedTitle
                h2={true}
                h2Style={{ color: 'blue', fontWeight: '400' }}>
                FeaturedTitle属性 h2和h2style
              </Card.FeaturedTitle>
            </Card>
          </TestCase>
        </TestSuite>

        <TestSuite name="Card.Image 设置Image属性covery和contain对比 可接受所以Image属性">
          <TestCase itShould="Image属性" tags={['C_API']}>
            <Card>
              <Card.Title>Image</Card.Title>
              <Card.Image
                containerStyle={{ width: 100, height: 100 }}
                resizeMode="cover"
                source={{
                  uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}></Card.Image>
              <Card.Image
                style={{ marginTop: 20 }}
                resizeMode="contain"
                source={{
                  uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}></Card.Image>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Image 测试onLongPress是否生效 切换图片">
          <TestCase itShould="onLongPress" tags={['C_API']}>
            <Card>
              <Card.Title>Image</Card.Title>
              <Card.Image
                containerStyle={{ width: 100, height: 100 }}
                onLongPress={() => setOnlongPress(!onlongPress)}
                resizeMode="cover"
                source={{
                  uri: onlongPress
                    ? 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
                    : 'https://randomuser.me/api/portraits/men/4.jpg',
                }}></Card.Image>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Image 测试onPress是否生效 切换图片">
          <TestCase itShould="onPress" tags={['C_API']}>
            <Card>
              <Card.Title>Image</Card.Title>
              <Card.Image
                containerStyle={{ width: 100, height: 100 }}
                onPress={() => setOnPress(!onPress)}
                resizeMode="cover"
                source={{
                  uri: onPress
                    ? 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
                    : 'https://randomuser.me/api/portraits/men/4.jpg',
                }}></Card.Image>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Image 测试onPressIn是否生效 切换图片">
          <TestCase itShould="onPressIn" tags={['C_API']}>
            <Card>
              <Card.Title>Image</Card.Title>
              <Card.Image
                containerStyle={{ width: 100, height: 100 }}
                onPressIn={() => setOnPressIn(!onPressIn)}
                resizeMode="cover"
                source={{
                  uri: onPressIn
                    ? 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
                    : 'https://randomuser.me/api/portraits/men/4.jpg',
                }}></Card.Image>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Image 测试onPressOut是否生效 切换图片">
          <TestCase itShould="onPressOut" tags={['C_API']}>
            <Card>
              <Card.Title>Image</Card.Title>
              <Card.Image
                containerStyle={{ width: 100, height: 100 }}
                onPressOut={() => setonPressOut(!onPressOut)}
                resizeMode="cover"
                source={{
                  uri: onPressOut
                    ? 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
                    : 'https://randomuser.me/api/portraits/men/4.jpg',
                }}></Card.Image>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Image属性source 接收Image组件的source属性">
          <TestCase itShould="设置Image组件的source属性" tags={['C_API']}>
            <Card>
              <Card.Title>接收Image组件的source属性</Card.Title>
              <Card.Image
                containerStyle={{ width: 100, height: 100 }}
                resizeMode="cover"
                source={{
                  uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
                }}></Card.Image>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Image属性transitionDuration 接收Image组件的transitionDuration属性">
          <TestCase itShould="设置Image组件的transitionDuration属性" tags={['C_API']}>
            <Card>
              <Card.Title>接收Image组件的transitionDuration属性</Card.Title>
              <Card.Image
                transition={true}
                transitionDuration={20000}
                containerStyle={{ width: 100, height: 100 }}
                resizeMode="cover"
                source={{
                  uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
                }}></Card.Image>
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Title 属性样式设置可接受所有文本属性">
          <TestCase itShould="文本样式设置" tags={['C_API']}>
            <Card>
              <Card.Title
                style={{ fontSize: 28, fontWeight: '100', color: 'yellow' }}>
                Card.Title
              </Card.Title>
              <Card.Divider width={10} color="pink" />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Title的h1和h1style属性 接收Text的h1和h1style">
          <TestCase itShould="Text的h1和h1style" tags={['C_API']}>
            <Card>
              <Card.Title
                h1={true}
                h1Style={{ color: '#D8D8D8' }}>
                Card.Title 的h1和h1style
              </Card.Title>
              <Card.Divider width={10} color="pink" />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Title的h2和h2style属性 接收Text的h2和h2style">
          <TestCase itShould="Text的h2和h2style" tags={['C_API']}>
            <Card>
              <Card.Title
                h2={true}
                h2Style={{ color: 'blue' }}>
                Card.Title 的h2和h2style
              </Card.Title>
              <Card.Divider width={10} color="pink" />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Title的h3和h3style属性 接收Text的h3和h3style">
          <TestCase itShould="Text的h3和h3style" tags={['C_API']}>
            <Card>
              <Card.Title
                h3={true}
                h3Style={{ color: 'yellow' }}>
                Card.Title 的h3和h3style
              </Card.Title>
              <Card.Divider width={10} color="pink" />
            </Card>
          </TestCase>
        </TestSuite>
        <TestSuite name="Card.Title的h4和h4style属性 接收Text的h4和h4style">
          <TestCase itShould="Text的h4和h4style" tags={['C_API']}>
            <Card>
              <Card.Title
                h4={true}
                h4Style={{ color: 'pink' }}>
                Card.Title 的h4和h4style
              </Card.Title>
              <Card.Divider width={10} color="pink" />
            </Card>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Cards;
