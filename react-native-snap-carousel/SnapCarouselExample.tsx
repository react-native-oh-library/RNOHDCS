import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

export default function SnapCarouselExample(): JSX.Element {
  const ENTRIES1 = [
    {
      title: "Beautiful and dramatic Antelope Canyon",
      subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
      url: require("./img/UYiroysl.jpg"),
    },
    {
      title: "Earlier this morning, NYC",
      subtitle: "Lorem ipsum dolor sit amet",
      url: require("./img/UPrs1EWl.jpg"),
    },
    {
      title: "White Pocket Sunset",
      subtitle: "Lorem ipsum dolor sit amet et nuncat ",
      url: require("./img/MABUbpDl.jpg"),
    },
    {
      title: "Acrocorinth, Greece",
      subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
      url: require("./img/KZsmUi2l.jpg"),
    },
    {
      title: "The lone tree, majestic landscape of New Zealand",
      subtitle: "Lorem ipsum dolor sit amet",
      url: require("./img/2nCt3Sbl.jpg"),
    },
    {
      title: "Middle Earth, Germany",
      subtitle: "Lorem ipsum dolor sit amet",
      url: require("./img/lceHsT6l.jpg"),
    },
  ];

  const _renderItem = ({ item, index }: any) => {
    return (
      <View>
        <Image source={item.url} style={styles.image} />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={ENTRIES1}
        renderItem={_renderItem}
        sliderWidth={300}
        itemWidth={250}
        containerCustomStyle={styles.carouselContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200,
    width: "100%",
    marginBottom: 20,
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 250,
    height: 300
  }
});
