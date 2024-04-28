import {TestSuite} from '@rnoh/testerino';
import React, {createRef} from 'react';
import {TestCase} from '../../components';
import {StyleSheet, Text, View, Image, Dimensions, ViewStyle, ViewProps} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

const MIN_HEIGHT = 50;
const MAX_HEIGHT = 150;

const tvShowContent = 
{
  title: 'Doctor Who',
  overview: `
    The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street.

    But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel.

    The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it.

    He's saved us from alien menaces and evil from before time began – but just who is he?`,
  image: require('./assets/flower.jpeg'),
  year: 2005,
  genres: ['Action & Adventure', 'Drama', 'Sci-Fi & Fantasy'],
  keywords: [
    'time travel',
    'time machine',
    'phone booth',
    'alien',
    'time traveler',
    'police box',
    'space and aliens',
  ],
};

export class ImageHeaderDemoTest extends React.Component {
  navTitleView = createRef<View>

  constructor(props: any) {
    super(props);
    this.state = {showNavTitle: false};
  }

  render() {
    return (
      <TestSuite name="ImageHeaderDemoTest">
        <TestCase.Example tags={['C_API']} modal itShould="test demo">
          <View style={styles.wrapperView}>
            <HeaderImageScrollView
              maxHeight={MAX_HEIGHT}
              minHeight={MIN_HEIGHT}
              maxOverlayOpacity={0.6}
              minOverlayOpacity={0.3}
              fadeOutForeground
              disableHeaderGrow={false}
              renderHeader={() => (
                <Image source={tvShowContent.image} style={styles.image} />
              )}
              renderFixedForeground={() => (
                <View
                  style={styles.navTitleViewOnFix}
                  ref={navTitleView => {
                    this.navTitleView = navTitleView;
                  }}>
                  <Text style={styles.navTitleOnFix}>
                    {tvShowContent.title}, ({tvShowContent.year})
                  </Text>
                </View>
              )}
              renderForeground={() => (
                <View style={styles.titleContainer}>
                  <Text style={styles.imageTitle}>{tvShowContent.title}</Text>
                </View>
              )}>
              <TriggeringView
                style={styles.section}
                onHide={() => {
                  console.log('onHide');
                  this.navTitleView.setNativeProps({style: {bottom: 0}});
                }}
                onDisplay={() => {
                  console.log('onDisplay');
                  this.navTitleView.setNativeProps({style: {bottom: -999}});
                }}
                onBeginHidden={() => console.log('onBeginHidden')}
                onBeginDisplayed={() => console.log('onBeginDisplayed')}
                onTouchTop={() => console.log('onTouchTop')}
                onTouchBottom={() => console.log('onTouchBottom')}>
                <Text style={styles.title}>
                  <Text style={styles.name}>{tvShowContent.title}</Text>, (
                  {tvShowContent.year})
                </Text>
              </TriggeringView>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Overview</Text>
                <Text style={styles.sectionContent}>
                  {tvShowContent.overview}
                </Text>
              </View>
              <View style={[styles.section, styles.sectionLarge]}>
                <Text style={styles.sectionTitle}>Keywords</Text>
                <View style={styles.keywords}>
                  {tvShowContent.keywords.map(keyword => (
                    <View style={styles.keywordContainer} key={keyword}>
                      <Text style={styles.keyword}>{keyword}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </HeaderImageScrollView>
          </View>
        </TestCase.Example>
      </TestSuite>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleViewOnFix: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
    opacity: 1,
    position: 'relative',
    bottom: -999,
  },
  navTitleOnFix: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  wrapperView: {
    height: 600,
    width: '100%',
    overflow: 'hidden',
  },
});
