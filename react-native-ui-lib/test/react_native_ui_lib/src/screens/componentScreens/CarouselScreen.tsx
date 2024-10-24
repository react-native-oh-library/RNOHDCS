import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Constants,
  Spacings,
  View,
  Text,
  Carousel,
  Image,
  Colors,
} from 'react-native-ui-lib';
import {
  renderBooleanOption,
  renderSliderOption,
} from '../ExampleScreenPresenter';
import {TestCase, TestSuite} from '@rnoh/testerino';

const INITIAL_PAGE = 2;
const IMAGES = [
  'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];
const BACKGROUND_COLORS = [
  Colors.red50,
  Colors.yellow20,
  Colors.purple50,
  Colors.green50,
  Colors.cyan50,
  Colors.purple20,
  Colors.blue60,
  Colors.red10,
  Colors.green20,
  Colors.purple60,
];

interface Props {}

interface State {
  orientation: typeof Constants.orientation;
  width: number;
  limitShownPages: boolean;
  numberOfPagesShown: number;
  currentPage: number;
  autoplay: boolean;
}

class CarouselScreen extends Component<Props, State> {
  carousel = React.createRef<typeof Carousel>();
  private dimensionsChangeListener: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      orientation: Constants.orientation,
      width: this.getWidth(),
      limitShownPages: false,
      numberOfPagesShown: 7,
      currentPage: INITIAL_PAGE,
      autoplay: true,
    };
  }

  componentDidMount() {
    this.dimensionsChangeListener = Constants.addDimensionsEventListener(
      this.onOrientationChange,
    );
  }

  componentWillUnmount() {
    Constants.removeDimensionsEventListener(
      this.dimensionsChangeListener || this.onOrientationChange,
    );
  }

  onOrientationChange = () => {
    if (this.state.orientation !== Constants.orientation) {
      this.setState({
        orientation: Constants.orientation,
        width: this.getWidth(),
      });
    }
  };

  getWidth = () => {
    return Constants.windowWidth - Spacings.s5 * 2;
  };

  onChangePage = (currentPage: number, _: any) => {
    this.setState({currentPage});
  };

  onPagePress = (index: number) => {
    if (this.carousel && this.carousel.current) {
      this.carousel.current.goToPage(index, true);
    }
  };

  render() {
    const {limitShownPages, numberOfPagesShown, autoplay, width} = this.state;

    return (
      <TestSuite name="Carousel">
        <TestCase itShould="设置autoplay: true, initialPage: 2, containerStyle={{height: 160}} pageWidth, children: 视图">
          <View padding-20>
          <Carousel
            key={numberOfPagesShown}
            ref={this.carousel}
            // loop
            autoplay={autoplay}
            onChangePage={this.onChangePage}
            pageWidth={width}
            itemSpacings={Spacings.s3}
            containerMarginHorizontal={Spacings.s2}
            initialPage={INITIAL_PAGE}
            containerStyle={{height: 160}}
            pageControlPosition={Carousel.pageControlPositions.UNDER}
            pageControlProps={{onPagePress: this.onPagePress, limitShownPages}}
            allowAccessibleLayout>
            {_.map([...Array(numberOfPagesShown)], (_item, index) => (
              <Page
                style={{backgroundColor: BACKGROUND_COLORS[index], width: 280, marginLeft: index == 0 ? -10 : 20 }}
                key={index}>
                <Text margin-15>CARD {index}</Text>
              </Page>
            ))}
          </Carousel>
          </View>
        </TestCase>
        <TestCase itShould="设置 loop: true, showCounter, pageControlProps={{size: 10}}">
          <View padding-20>
          <Carousel
              containerStyle={{
                height: 200,
              }}
              loop
              pageControlProps={{
                size: 10,
                containerStyle: styles.loopCarousel,
              }}
              pageControlPosition={Carousel.pageControlPositions.OVER}
              showCounter>
              {IMAGES.map((image, i) => {
                return (
                  <View flex centerV key={i}>
                    <Image
                      overlayType={Image.overlayTypes.BOTTOM}
                      style={{flex: 1}}
                      source={{
                        uri: image,
                      }}
                    />
                  </View>
                );
              })}
            </Carousel>
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

// @ts-ignore
const Page = ({children, style, ...others}) => {
  return (
    <View {...others} style={[styles.page, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    marginHorizontal: 20,
  },
  page: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
  },
  loopCarousel: {
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
});

export default CarouselScreen;
