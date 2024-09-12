import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle, ScrollView } from 'react-native';
import { Carousel, Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="CarouselTest">
      <TestCase itShould="render a Carousel selectedIndex={2}" tags={['C_API']}>
        <CarouselSelectedIndexTest />
      </TestCase>
      <TestCase itShould="render a Carousel dots={false}" tags={['C_API']}>
        <CarouselDotTest />
      </TestCase>
      <TestCase itShould="render a Carousel vertical={true}" tags={['C_API']}>
        <CarouselVerticalTest />
      </TestCase>
      <TestCase itShould="render a Carousel autoplay={true}, autoplay={false}" tags={['C_API']}>
        <CarouselAutoplayTest />
      </TestCase>
      <TestCase itShould="render a Carousel autoplayInterval={1000}, autoplayInterval={3000}" tags={['C_API']}>
        <CarouselAutoplayIntervalTest />
      </TestCase>
      <TestCase itShould="render a Carousel infinite={true}, infinite={false}" tags={['C_API']}>
        <CarouselInfiniteTest />
      </TestCase>
      <TestCase itShould="render a Carousel afterChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <Carousel
              style={styles.wrapper}
              selectedIndex={1}
              autoplay={false}
              infinite
              afterChange={(index: number) => { setState(true); }}
            >
              <View
                style={[styles.containerVertical, { backgroundColor: 'red' }]}>
                <Text>Carousel 1</Text>
              </View>
              <View
                style={[styles.containerVertical, { backgroundColor: 'blue' }]}>
                <Text>Carousel 2</Text>
              </View>
              <View
                style={[styles.containerVertical, { backgroundColor: 'yellow' }]}>
                <Text>Carousel 3</Text>
              </View>
            </Carousel>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Carousel dotStyle={{backgroundColor:'pink'}}" tags={['C_API']}>
        <CarouselDotStyleTest />
      </TestCase>
      <TestCase itShould="render a Carousel dotActiveStyle={{backgroundColor:'aqua'}}" tags={['C_API']}>
        <CarouselDotActiveStyleTest />
      </TestCase>
      <TestCase itShould="render a Carousel pageStyle={{ marginLeft:50 }}" tags={['C_API']}>
        <CarouselpageStyleTest />
      </TestCase>
      <TestCase itShould="render a Carousel pagination={() => <View style={{ width: 60, height: 60, backgroundColor: 'pink'}}" tags={['C_API']}>
        <CarouselPaginationTest />
      </TestCase>
      <TestCase itShould="render a Carousel goto()" tags={['C_API']}>
        <CarouselHorizontalTest />
      </TestCase>
    </TestSuite>
  );
};

function CarouselSelectedIndexTest() {
  return (
    <View>
      <Carousel
        style={styles.wrapper}
        selectedIndex={2}
        autoplay={true}
      >
        <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
          <Text>Carousel 1</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
          <Text>Carousel 2</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
          <Text>Carousel 3</Text>
        </View>
      </Carousel>
    </View>
  )
}

function CarouselDotTest() {
  return (
    <Carousel
      style={styles.wrapper}
      selectedIndex={0}
      dots={false}
    >
      <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
        <Text>Carousel 1</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
        <Text>Carousel 2</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
        <Text>Carousel 3</Text>
      </View>
    </Carousel>
  )
}

function CarouselVerticalTest() {
  return (
    <Carousel
      style={styles.wrapper}
      selectedIndex={0}
      vertical={true}
    >
      <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
        <Text>Carousel 1</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
        <Text>Carousel 2</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
        <Text>Carousel 3</Text>
      </View>
    </Carousel>
  )
}

function CarouselAutoplayTest() {
  return (
    <View>
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay={true}
      >
        <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
          <Text>Carousel 1</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
          <Text>Carousel 2</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
          <Text>Carousel 3</Text>
        </View>
      </Carousel>
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay={false}
      >
        <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
          <Text>Carousel 1</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
          <Text>Carousel 2</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
          <Text>Carousel 3</Text>
        </View>
      </Carousel>
    </View>
  )
}

function CarouselAutoplayIntervalTest() {
  return (
    <View>
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay={true}
        autoplayInterval={1000}
        infinite={true}
      >
        <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
          <Text>Carousel 1</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
          <Text>Carousel 2</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
          <Text>Carousel 3</Text>
        </View>
      </Carousel>
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay={true}
        infinite={true}
        autoplayInterval={3000}
      >
        <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
          <Text>Carousel 1</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
          <Text>Carousel 2</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
          <Text>Carousel 3</Text>
        </View>
      </Carousel>
    </View>
  )
}

function CarouselInfiniteTest() {
  return (
    <View>
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay={true}
        autoplayInterval={1000}
        infinite={true}
      >
        <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
          <Text>Carousel 1</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
          <Text>Carousel 2</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
          <Text>Carousel 3</Text>
        </View>
      </Carousel>
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay={true}
        autoplayInterval={1000}
        infinite={false}
      >
        <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
          <Text>Carousel 1</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
          <Text>Carousel 2</Text>
        </View>
        <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
          <Text>Carousel 3</Text>
        </View>
      </Carousel>
    </View>
  )
}

function CarouselDotStyleTest() {
  return (
    <Carousel
      style={styles.wrapper}
      selectedIndex={0}
      autoplay={true}
      autoplayInterval={3000}
      infinite={true}
      dotStyle={{ backgroundColor: 'pink' }}
    >
      <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
        <Text>Carousel 1</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
        <Text>Carousel 2</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
        <Text>Carousel 3</Text>
      </View>
    </Carousel>
  )
}

function CarouselDotActiveStyleTest() {
  return (
    <Carousel
      style={styles.wrapper}
      selectedIndex={0}
      autoplay={true}
      autoplayInterval={3000}
      infinite={true}
      dotActiveStyle={{ backgroundColor: 'aqua' }}
    >
      <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
        <Text>Carousel 1</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
        <Text>Carousel 2</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
        <Text>Carousel 3</Text>
      </View>
    </Carousel>
  )
}
function CarouselpageStyleTest() {
  return (
    <Carousel
      style={styles.wrapper}
      selectedIndex={0}
      autoplay={true}
      autoplayInterval={3000}
      infinite={true}
      pageStyle={{ marginLeft: 50 }}
    >
      <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
        <Text>Carousel 1</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
        <Text>Carousel 2</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
        <Text>Carousel 3</Text>
      </View>
    </Carousel>
  )
}

function CarouselPaginationTest() {
  return (
    <Carousel
      style={styles.wrapper}
      selectedIndex={0}
      autoplay={true}
      autoplayInterval={3000}
      infinite={true}
      pagination={() => <View style={{ width: 20, height: 20, backgroundColor: 'pink' }}></View>}
    >
      <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
        <Text>Carousel 1</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
        <Text>Carousel 2</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
        <Text>Carousel 3</Text>
      </View>
    </Carousel>
  )
}


function CarouselHorizontalTest() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const carouselRef = useRef(null);
  const onHorizontalSelectedIndexChange = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={{ paddingHorizontal: 15 }}>
        <Carousel
          style={styles.wrapper}
          selectedIndex={selectedIndex}
          autoplay
          infinite
          autoplayInterval={1000}
          afterChange={onHorizontalSelectedIndexChange}
          ref={carouselRef}
        >
          <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
            <Text>Carousel 1</Text>
          </View>
          <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
            <Text>Carousel 2</Text>
          </View>
          <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
            <Text>Carousel 3</Text>
          </View>
        </Carousel>
        <Button onPress={() => carouselRef.current && carouselRef?.current?.goTo(0)}>
          Go to 0
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create<{
  wrapper: ViewStyle
  containerHorizontal: ViewStyle
  containerVertical: ViewStyle
  text: TextStyle
}>({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
})


