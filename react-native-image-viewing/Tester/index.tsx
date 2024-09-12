import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import ImageHeader from './components/ImageHeader'
import ImageFooter from './components/ImageFooter'
import ImageViewing from "react-native-image-viewing";
import { ImageSource } from "react-native-image-viewing/dist/@types"


type Props = {
  images: string[];
  onPress: (index: number) => void;
};

const IMAGE_WIDTH = 74;
const IMAGE_HEIGH = 74;
const architecture = [
  {
    thumbnail: require('./assets/111.jpg'),
    original: require('./assets/111.jpg'),
  },
  {
    thumbnail: require('./assets/architecture.jpg'),
    original: require('./assets/architecture.jpg'),
  },
  {
    thumbnail: require('./assets/222.jpg'),
    original: require('./assets/222.jpg'),
  },
  {
    thumbnail: require('./assets/333.jpg'),
    original: require('./assets/333.jpg'),
  },
];
const ImageList = ({ images, onPress }: Props) => (
  <View style={styles.root} >
    {images.map((imageUrl, index) => (
      <TouchableOpacity
        style={styles.button}
        key={`${imageUrl}_${index}`}
        activeOpacity={0.8}
        onPress={() => { onPress(index) }}
      >
        <Image source={imageUrl} key={`${index}`} doubleTapToZoomEnabled={true} style={styles.image} />
      </TouchableOpacity>
    ))}
  </View>
);

export function ImageViewingTester() {
  const [currentImageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [showStr, setShowStr] = useState('');
  const [onLongPressStr, setOnLongPressStr] = useState('');
  const [delayLongPressNum, setDelayLongPressNum] = useState(800);
  const [animationTypeState, setAnimationTypeState] = useState('fade');
  const [presentationStyleState, setPresentationStyleState] = useState('fullScreen');
  const [backgroundColor, setBackgroundColor] = useState('#000000EE');
  const [swipeToCloseEnabled, setSwipeToCloseEnabled] = useState(false);
  const [doubleTapToZoomEnabled, setDoubleTapToZoomEnabled] = useState(false);
  const [showHeaderComp, setShowHeaderComp] = useState(false);
  const [showFooterComp, setShowFooterComp] = useState(false);

  const onSelect = (index: number) => {
    setImageIndex(index);
    setIsVisible(true);
  };

  const getImageSource = (images: ImageSource[]): ImageSource[] => {
    return images.map((image: ImageSource) =>
      typeof image.original === "number" ? image.original : { uri: image.original as string }
    )
  };

  return (
    <ScrollView style={{ flex: 1, height: '100%' }}>
      <Tester>
        <TestSuite name="ImageViewing">
          <ImageViewing
            images={getImageSource(architecture)}
            keyExtractor={(imageSrc: ImageSource, index: number) => (`${imageSrc}${index}`)}
            imageIndex={currentImageIndex}
            visible={isVisible}
            onRequestClose={() => { setIsVisible(false) }}
            onImageIndexChange={() => { setShowStr('onImageIndexChange  random: ' + Math.random().toFixed(3)) }}
            onLongPress={() => {
              setIsVisible(false);
              setOnLongPressStr('onLongPress  random: ' + Math.random().toFixed(3));
            }}
            delayLongPress={delayLongPressNum}
            animationType={animationTypeState}
            presentationStyle={presentationStyleState}
            backgroundColor={backgroundColor}
            swipeToCloseEnabled={swipeToCloseEnabled}
            doubleTapToZoomEnabled={doubleTapToZoomEnabled}
            HeaderComponent={showHeaderComp ? ({ imageIndex }) => (
              <ImageHeader title={`title${imageIndex + 1}`} onRequestClose={() => setIsVisible(false)} />
            ) : undefined}
            FooterComponent={showFooterComp ? ({ imageIndex }) => (
              <ImageFooter imageIndex={imageIndex} imagesCount={architecture.length} />
            ) : undefined}
          />

          <TestCase itShould="keyExtractor callback: rn VirtualizedList prop">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => { onSelect(index) }}
              />
            </View>
          </TestCase>
          <TestCase itShould="onImageIndexChange callback">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => { onSelect(index) }}
              />
              <Text>{showStr}</Text>
            </View>
          </TestCase>
          <TestCase itShould="onLongPress callback">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => { onSelect(index) }}
              />
              <Text>{onLongPressStr}</Text>
            </View>
          </TestCase>
          <TestCase itShould="change delayLongPress">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => {
                  onSelect(index);
                  setDelayLongPressNum(800 + (index * 300));
                }}
              />
              <Text>{`delayLongPress=${delayLongPressNum}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="animationType ['none', 'fade', 'slide']">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => {
                  onSelect(index);
                  const animationTypeArr = ['none', 'fade', 'slide', 'fade'];
                  setAnimationTypeState(animationTypeArr[index]);
                }}
              />
              <Text>{`animationType=${animationTypeState}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="presentationStyle [fullScreen, pageSheet, formSheet, overFullScreen]">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => {
                  onSelect(index);
                  const presentationStyleArr = ['fullScreen', 'pageSheet', 'formSheet', 'overFullScreen'];
                  setPresentationStyleState(presentationStyleArr[index]);
                }}
              />
              <Text>{`presentationStyle=${presentationStyleState}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="change backgroundColor">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => {
                  onSelect(index);
                  const bgcRandom = ['#000000EE', '#dddddd', '#ddffdd', '#eeeeee'];
                  setBackgroundColor(bgcRandom[index]);
                }}
              />
              <Text>{`backgroundColor=${backgroundColor}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="toggle swipeToCloseEnabled">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => {
                  onSelect(index);
                  setSwipeToCloseEnabled(!swipeToCloseEnabled);
                }}
              />
              <Text>{`swipeToCloseEnabled=${swipeToCloseEnabled}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="toggle doubleTapToZoomEnabled">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => {
                  onSelect(index);
                  setDoubleTapToZoomEnabled(!doubleTapToZoomEnabled);
                }}
              />
              <Text>{`doubleTapToZoomEnabled=${doubleTapToZoomEnabled}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="toggle show HeaderComponent">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => {
                  onSelect(index);
                  setShowHeaderComp(!showHeaderComp);
                }}
              />
              <Text>{`showHeaderComp=${showHeaderComp}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="toggle show FooterComponent">
            <View>
              <ImageList
                images={architecture.map((image) => image.thumbnail)}
                onPress={(index) => {
                  onSelect(index);
                  setShowFooterComp(!showFooterComp);
                }}
              />
              <Text>{`showFooterComp=${showFooterComp}`}</Text>
            </View>
          </TestCase>
          <View style={{ height: 40 }}></View>
        </TestSuite>
      </Tester>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: { flexDirection: 'row' },
  container: {
    flex: 0,
    paddingLeft: 10,
    marginBottom: 10
  },
  button: {
    marginRight: 10
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGH,
    borderRadius: 10
  }
});