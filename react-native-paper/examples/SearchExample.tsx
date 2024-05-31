import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Searchbar,MD2Theme,MD3Theme,useTheme,MD3Colors,Avatar} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function SearchDemo() { 
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const [isVisible, setIsVisible] = React.useState(false);
  const {colors } = useExampleTheme();
  const [searchQueries, setSearchQuery] = React.useState({
    searchBarMode: '',
    traileringIcon: '',
    traileringIconWithRightItem: '',
    rightItem: '',
    loadingBarMode: '',
    searchViewMode: '',
    searchWithoutBottomLine: '',
    loadingViewMode: '',
    clickableBack: '',
    clickableDrawer: '',
    clickableLoading: '',
  });

  return (
    <Tester>
      <ScrollView>
      <TestSuite name='Search' >
        <TestCase itShould='Default Search'>
          <Searchbar
            placeholder="Search"
            onChangeText={(query) =>
              setSearchQuery({ ...searchQueries, searchBarMode: query })
            }
            value={searchQueries.searchBarMode}
            style={styles.searchbar}
          />
        </TestCase>

        <TestCase itShould='Trailering icon Search'>
          <Searchbar
                placeholder="Trailering icon"
                onChangeText={(query) =>
                  setSearchQuery({ ...searchQueries, traileringIcon: query })
                }
                value={searchQueries.traileringIcon}
                traileringIcon={'microphone'}
                traileringIconColor={
                  isVisible ? MD3Colors.error40 : colors.onSurfaceVariant
                }
                traileringIconAccessibilityLabel={'microphone button'}
                onTraileringIconPress={() => setIsVisible(true)}
                style={styles.searchbar}
                mode="bar"
              />
        </TestCase>

        <TestCase itShould='Trailering icon with right item Search'>
           <Searchbar
              mode="bar"
              placeholder="Trailering icon with right item"
              onChangeText={(query) =>
                setSearchQuery({
                  ...searchQueries,
                  traileringIconWithRightItem: query,
                })
              }
              value={searchQueries.traileringIconWithRightItem}
              traileringIcon={'microphone'}
              traileringIconColor={
                isVisible ? MD3Colors.error40 : colors.onSurfaceVariant
              }
              traileringIconAccessibilityLabel={'microphone button'}
              onTraileringIconPress={() => setIsVisible(true)}
              right={(props) => (
                <Avatar.Image
                  {...props}
                  size={30}
                  source={require('../assets/images/avatar.png')}
                />
              )}
              style={styles.searchbar}
            />
        </TestCase>

        <TestCase itShould='right item Search'>
          <Searchbar
              mode="bar"
              placeholder="Right item"
              onChangeText={(query) =>
                setSearchQuery({
                  ...searchQueries,
                  rightItem: query,
                })
              }
              value={searchQueries.rightItem}
              right={(props) => (
                <Avatar.Image
                  {...props}
                  size={30}
                  source={require('../assets/images/avatar.png')}
                />
              )}
              style={styles.searchbar}
            />
          </TestCase>


          <TestCase itShould='Loading Search'>
          <Searchbar
              placeholder="Loading"
              onChangeText={(query) =>
                setSearchQuery({
                  ...searchQueries,
                  loadingBarMode: query,
                })
              }
              value={searchQueries.loadingBarMode}
              style={styles.searchbar}
              mode="bar"
              loading
              traileringIcon={'microphone'}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

const styles = StyleSheet.create({
  searchbar: {
    margin: 4,
  },
});

export default SearchDemo;