
import React, { useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image, ScrollView, TouchableOpacity 
} from "react-native";
import memoize from "lodash/memoize";
import get from "lodash/get";
import ImageViewing from "react-native-image-viewing";
import ImageHeader from './components/ImageHeader'
import ImageFooter from './components/ImageFooter'
import {ImageSource} from "react-native-image-viewing/dist/@types"

type Props = {
  images: string[];
  onPress: (index: number) => void;
  shift?: number;
};

const IMAGE_WIDTH = 120;
const IMAGE_HEIGH = 120;

const architecture = [
  {
    thumbnail: "https://img.zcool.cn/community/01d191576ccecb0000018c1b64e382.jpg@1280w_1l_2o_100sh.jpg",
    original: "https://img.zcool.cn/community/01d191576ccecb0000018c1b64e382.jpg@1280w_1l_2o_100sh.jpg",
  },
  {
    thumbnail: "https://p0.ssl.qhimgs1.com/sdr/400__/t0461b1cfd7e4ef2b66.jpg",
    original: "https://p0.ssl.qhimgs1.com/sdr/400__/t0461b1cfd7e4ef2b66.jpg",
  }
];



const ImageList = ({ images, shift = 0, onPress }: Props) => (
  <ScrollView
    horizontal
    style={styles1.root}
    contentOffset={{ x: shift * IMAGE_WIDTH, y: 0 }}
    contentContainerStyle={styles1.container}
  >
    {images.map((imageUrl, index) => (
      <TouchableOpacity
        style={styles1.button}
        key={`${imageUrl}_${index}`}
        activeOpacity={0.8}
        onPress={() => onPress(index)}
      >
        <Image source={{ uri: imageUrl }} style={styles1.image} />
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles1 = StyleSheet.create({
  root: { flexGrow: 0 },
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


export default function App() {
  const [currentImageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(architecture);
  const [isVisible, setIsVisible] = useState(false);

  const onSelect = (images, index) => {
    setImageIndex(index);
    setImages(images);
    setIsVisible(true);
  };

  const OnImageIndexChange = () => {
    if(currentImageIndex === 1) {
      Alert.alert("OnImageIndexChange")
    } 
  }

  const onLongPress = (image) => {
    Alert.alert("Long Pressed",image.uri)
  }
  const onRequestClose = () => setIsVisible(false);


  const getImageSource = memoize((images): ImageSource[] =>
    images.map((image) =>
      typeof image.original === "number"
        ? image.original
        : { uri: image.original as string }
    )
  );

  return (
    <SafeAreaView style={styles.root}>
      <ImageList
        images={architecture.map((image) => image.thumbnail)}
        onPress={(index) => onSelect(architecture, index)}
        shift={0.75}
      />
      <View style={styles.about}>
        <Text style={styles.name}>[ react-native-image-viewing ]</Text>
      </View>
      <ImageViewing
        images={getImageSource(images)}
        imageIndex={currentImageIndex}
        visible={isVisible}
        onRequestClose={onRequestClose}
        OnImageIndexChange={OnImageIndexChange}
        presentationStyle="fullScreen"
        backgroundColor="#f00"
        animationType="fade"
        onLongPress={onLongPress}
        delayLongPress={2000}
        keyExtreactor={(imageSrc,index) => {
          console.log('keyExtreactor OK');
          return index.toString()
        }
        }
        HeaderComponent={
          images === architecture
            ? ({ imageIndex }) => {
                const title = get(images, `${imageIndex}.title`);
                return (
                  <ImageHeader title={`title${imageIndex + 1}`} onRequestClose={onRequestClose} />
                );
              }
            : undefined
        }
        FooterComponent={({ imageIndex }) => (
          <ImageFooter imageIndex={imageIndex} imagesCount={images.length} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    ...Platform.select({
      android: { paddingTop: StatusBar.currentHeight },
      default: null,
    }),
  },
  about: {
    flex: 1,
    marginTop: -12,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "200",
    color: "#FFFFFFEE",
  },
});
