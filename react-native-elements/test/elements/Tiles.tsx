import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Tile, Icon} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type TilesComponentProps = {};
class ImageComponent extends React.Component {
  render() {
    return (
      <Image
        source={{
          uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
        }}
        style={{width: 200, height: 200}}></Image>
    );
  }
}
const Tiles: React.FunctionComponent<TilesComponentProps> = () => {
  return (
    <Tester>
      <ScrollView style={{paddingVertical: 10}}>
        <TestSuite name="Tile的属性ImageComponent 设置image组件">
          <TestCase itShould="ImageComponent" tags={['C_API']}>
            <Tile
              // imageSrc={{
              //   uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              // }}
              ImageComponent={ImageComponent}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              featured
              caption="Mahatma Gandhi"
              activeOpacity={1}
              width={310}
            />
          </TestCase>
          {/* <TestCase itShould='Text Tile' tags={['C_API']}>
            <Tile
              imageSrc={{
                uri: 'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{ fontSize: 15 }}
              featured
              caption="Mahatma Gandhi"
              activeOpacity={1}
              width={310}
            />
          </TestCase> */}
          {/* <TestCase itShould='Icon Tile' tags={['C_API']}>
            <Tile
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              icon={{
                name: 'heart',
                type: 'font-awesome',
                size: 60,
                color: 'red',
              }}
              featured
              activeOpacity={0.8}
              onPress={() => {
                'Tile pressed';
              }}
              width={310}
            />
          </TestCase>
          <View style={{ paddingTop: 20, paddingBottom: 100 }}>
            <TestCase itShould='Image Tile' tags={['C_API']}>
              <Tile
                imageSrc={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
                }}
                title="Half Dome, Yosemite"
                titleStyle={{
                  fontSize: 20,
                  textAlign: 'center',
                  paddingBottom: 3,
                }}
                activeOpacity={1}
                width={310}
                contentContainerStyle={{ height: 70 }}
                style={{ paddingBottom: 20 }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ color: 'green' }}>Visit</Text>
                  <Text style={{ color: '#397af8' }}>Find out More</Text>
                </View>
              </Tile>
            </TestCase>
          </View> */}
        </TestSuite>
        {/* <TestSuite name="Tile的属性activeOpacity 设置activeOpacity 无效">
          <TestCase itShould="activeOpacity" tags={['C_API']}>
            <Tile
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="Half Dome, Yosemite"
              titleStyle={{
                fontSize: 20,
                textAlign: 'center',
                paddingBottom: 3,
              }}
              activeOpacity={0.1}
              width={310}
              contentContainerStyle={{height: 70}}
              style={{paddingBottom: 20}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'green'}}>Visit</Text>
                <Text style={{color: '#397af8'}}>Find out More</Text>
              </View>
            </Tile>
          </TestCase>
        </TestSuite> */}

        <TestSuite name="Tile的属性caption 设置caption 传入一段文字">
          <TestCase itShould="caption" tags={['C_API']}>
            <Tile
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              featured
              caption={<Text>Mahatma Gandhi</Text>}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性captionStyle 设置caption的样式captionStyle">
          <TestCase itShould="captionStyle" tags={['C_API']}>
            <Tile
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              featured
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性containerStyle	 设置containerStyle容器样式	">
          <TestCase itShould="containerStyle	" tags={['C_API']}>
            <Tile
              containerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              // featured
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性contentContainerStyle	 设置contentContainerStyle	">
          <TestCase itShould="contentContainerStyle	" tags={['C_API']}>
            <Tile
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              // featured
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性featured	 设置featured ">
          <TestCase itShould="featured	" tags={['C_API']}>
            <Tile
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              // featured
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性height	 设置height 高度">
          <TestCase itShould="height	" tags={['C_API']}>
            <Tile
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性icon	 设置icon">
          <TestCase itShould="icon" tags={['C_API']}>
            <Tile
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性iconContainerStyle	 设置icon的容器的样式">
          <TestCase itShould="iconContainerStyle" tags={['C_API']}>
            <Tile
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性imageContainerStyle	 设置image的容器的样式">
          <TestCase itShould="imageContainerStyle" tags={['C_API']}>
            <Tile
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性imageProps	 设置image的属性resizeMode">
          <TestCase itShould="cover" tags={['C_API']}>
            <Tile
              imageProps={{resizeMode: 'cover'}}
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
          <TestCase itShould="contain" tags={['C_API']}>
            <Tile
              imageProps={{resizeMode: 'contain'}}
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性imageSrc	 设置图片的地址">
          <TestCase itShould="imageSrc1" tags={['C_API']}>
            <Tile
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
          <TestCase itShould="imageSrc2" tags={['C_API']}>
            <Tile
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Tile的属性overlayContainerStyle	 设置overlayContainerStyle无效">
          <TestCase itShould="overlayContainerStyle" tags={['C_API']}>
            <Tile
              overlayContainerStyle={{backgroundColor: 'blue',width:300}}
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Tile的属性title 设置title 就是那段英文">
          <TestCase itShould="title" tags={['C_API']}>
            <Tile
              overlayContainerStyle={{backgroundColor: 'blue'}}
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              // featured
              caption={'Mahatma Gandhi'}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性titleNumberOfLines 设置title显示多少行">
          <TestCase itShould="titleNumberOfLines" tags={['C_API']}>
            <Tile
              overlayContainerStyle={{backgroundColor: 'blue'}}
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 15}}
              // featured
              caption={'Mahatma Gandhi'}
              titleNumberOfLines={2}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性titleStyle 设置title样式">
          <TestCase itShould="titleStyle" tags={['C_API']}>
            <Tile
              overlayContainerStyle={{backgroundColor: 'blue'}}
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 20, color: 'yellow', fontWeight: '500'}}
              // featured
              caption={'Mahatma Gandhi'}
              titleNumberOfLines={2}
              activeOpacity={0.8}
              width={310}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Tile的属性width 设置width">
          <TestCase itShould="width" tags={['C_API']}>
            <Tile
              overlayContainerStyle={{backgroundColor: 'blue'}}
              imageContainerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 50,
              }}
              iconContainerStyle={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
              icon={{
                type: 'font-awesome',
                name: 'comment',
                color: 'pink',
                size: 100,
              }}
              height={200}
              contentContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 310,
              }}
              captionStyle={{fontSize: 20, color: 'blue', fontWeight: '400'}}
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{fontSize: 20, color: 'yellow', fontWeight: '500'}}
              // featured
              caption={'Mahatma Gandhi'}
              titleNumberOfLines={2}
              activeOpacity={0.8}
              width={350}
              onPress={() => {}}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default Tiles;
