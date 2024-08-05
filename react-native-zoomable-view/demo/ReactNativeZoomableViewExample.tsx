import { View,StyleSheet,Image} from 'react-native';
import React from 'react'; 
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export function ReactNativeZoomableViewExample() {
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <ReactNativeZoomableView
              maxZoom={30}
              initialZoom={1.5}
              contentWidth={300}
              contentHeight={150}
              panBoundaryPadding={50}
             >
              <View style={styles.contents}>
                  <Image style={styles.img} source={require('./placeholder2000x2000.jpg') } />
              </View>
          </ReactNativeZoomableView>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contents: {
      flex: 1,
      alignSelf: 'stretch',
    },
    box: {
      borderWidth: 5,
      height: 500,
      width: 310,
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    marker: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 20,
      height: 20,
      marginLeft: -10,
      marginTop: -10,
      borderRadius: 10,
      backgroundColor: 'white',
      borderWidth: 2,
    },
  });