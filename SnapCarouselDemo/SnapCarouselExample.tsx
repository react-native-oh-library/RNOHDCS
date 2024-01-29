import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';

export function SnapCarouselExample(): JSX.Element {
  const [activeSlide, setActiveSlide] = useState(0);
  const ENTRIES1 = [
    {
      title: 'Beautiful Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      url: require('../assets/UYiroysl.jpg'),
      imgUrl: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      url: require('../assets/UPrs1EWl.jpg'),
      imgUrl: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      url: require('../assets/MABUbpDl.jpg'),
      imgUrl: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      url: require('../assets/KZsmUi2l.jpg'),
      imgUrl: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
      title: 'majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      url: require('../assets/2nCt3Sbl.jpg'),
      imgUrl: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      url: require('../assets/lceHsT6l.jpg'),
      imgUrl: 'https://i.imgur.com/lceHsT6l.jpg'
    }
  ];
  const sliderWidth = 300
  const itemWidth = 250

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={ENTRIES1.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        inactiveDotStyle={styles.paginationDotInactive}
        dotContainerStyle={{ marginHorizontal: 2 }}
      />
    );
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <View>
        <Text style={styles.carouselText}>{item.title}</Text>
        <Image
          style={styles.image}
          source={item.url}
        />
      </View>
    )
  };

  const mainExample1 = (title: string) => {
    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          data={ENTRIES1}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layoutCardOffset={18}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={200}
        />
      </View>
    );
  }

  const mainExample2 = (title: string) => {
    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          data={ENTRIES1}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layoutCardOffset={18}
          loop={true}
          onSnapToItem={(index) => setActiveSlide(index)}
          loopClonesPerSide={2}
        />
        {renderPagination()}
      </View>
    );
  }

  const layoutExample = (title: string, type: "default" | "stack" | "tinder") => {
    return (
      <View style={styles.exampleContainerLight}>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          data={ENTRIES1}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
        />
      </View>
    );
  }


  const example1 = layoutExample('Default layout', 'default');
  const example2 = mainExample1('Default layout | Loop ');
  const example3 = mainExample2('Default layout | Loop | Pagination');
  const example4 = layoutExample('"Stack of cards" layout stack', 'stack');
  const example5 = layoutExample('"Tinder-like" layout tinder', 'tinder');

  return (
    <View>
<ScrollView>
        {example1}
        {example2}
        {example3}
        {example4}
        {example5}
        </ScrollView>
    </View>
  );
}


const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    height: 200,
    width: '100%',
    marginBottom: 20,
  },
  carouselItem: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  carouselText: {
    color: '#000',
    fontSize: 15,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  paginationDotActive: {
    backgroundColor: '#008080',
  },
  paginationDotInactive: {
    backgroundColor: '#C4C4C4',
  },
  textContent: {
    color: 'red',
    fontSize: 24
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 250,
    height: 300
  },
  imageContainer: {
    flex: 1,
    marginBottom: -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  imageContainerEven: {
    backgroundColor: colors.black
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  scrollview: {
    flex: 1
  },
  exampleContainer: {
    paddingVertical: 30
  },
  exampleContainerDark: {
    backgroundColor: colors.black
  },
  exampleContainerLight: {
    backgroundColor: 'white'
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleDark: {
    color: colors.black
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  slider: {
    marginTop: 15,
    marginBottom: 20,
    overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  carouselItemImage: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 250,
    height: 300
  },
});
