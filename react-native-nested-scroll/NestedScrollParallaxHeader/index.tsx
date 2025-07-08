import {StyleSheet, View} from 'react-native';
import {NestedScrollView} from '@react-native-oh-tpl/react-native-nested-scroll';

import {FlatListPage} from './FlatListPage';
import {ParallaxHeader} from './ParallaxHeader';
import {useAnimateScrollView} from './hooks/useAnimatedScrollView';
import AnimatedNavbar from './AnimatedNavbar';
import {TopNavBar} from './components/TopNavBar';
import {HeaderNavBar} from './components/HeaderNavBar';
import {HeaderComponent} from './components/HeaderComponent';


function NestedScrollParallaxHeader() {
  const imageHeight = 220;

  const [scroll, onScroll, scale, translateYDown, translateYUp] = useAnimateScrollView(
    imageHeight,
    false,
  );

  return (
    <View style={styles.fill}>
      <NestedScrollView bounces>
        <ParallaxHeader
          topBarHeight={180}
          imageHeight={180}
          imageSource={require('../assets/cover.webp')}
          scale={scale}
          translateYDown={translateYDown}
          translateYUp={translateYUp}>
          <HeaderComponent />
        </ParallaxHeader>
        <FlatListPage />
      </NestedScrollView>

      <AnimatedNavbar
        scroll={scroll}
        headerHeight={50}
        statusBarHeight={80}
        imageHeight={imageHeight}
        OverflowHeaderComponent={<HeaderNavBar />}
        TopNavbarComponent={<TopNavBar />}
      />
    </View>
  );
}

export default NestedScrollParallaxHeader

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  image: {
    height: 160,
    width: '100%',
  },
});
