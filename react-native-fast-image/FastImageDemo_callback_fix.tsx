import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import FastImage, {OnLoadEvent, OnProgressEvent} from 'react-native-fast-image';

function FastImageDemo_callback_fix(): JSX.Element {
  const [onLoadStart, setLoadStart] = React.useState('onLoadStart:');
  const [onProgress, setProgress] = React.useState('onProgress:');
  const [onLoad, setLoad] = React.useState('onLoad:');
  const [onError, setError] = React.useState('onError:');
  const [onLoadEnd, setLoadEnd] = React.useState('onLoadEnd:');

  const [onLoadStart1, setLoadStart1] = React.useState('onLoadStart:');
  const [onProgress1, setProgress1] = React.useState('onProgress:');
  const [onLoad1, setLoad1] = React.useState('onLoad:');
  const [onError1, setError1] = React.useState('onError:');
  const [onLoadEnd1, setLoadEnd1] = React.useState('onLoadEnd:');

  return (
    <Tester style={{flex: 1}}>
      <TestCase itShould="非正常图片回调">
        <Text style={styles.label2}>{onLoadStart}</Text>
        <Text style={styles.label2}>{onProgress}</Text>
        <Text style={styles.label2}>{onLoad}</Text>
        <Text style={styles.label2}>{onError}</Text>
        <Text style={styles.label2}>{onLoadEnd}</Text>

        <FastImage
          source={{
            uri: 'https://picsit.test.vmall.com/pimages/RmsCDNServer/comment/image/U0248/83E4AEA731F50AF187F5FFC713959288DFB2204E47ED468E45719207A9091897/6CE404318876831B84A13B4F.png',
          }}
          style={styles.image}
          onLoadStart={() => {
            setLoadStart('onLoadStart: success');
          }}
          onProgress={(e: OnProgressEvent) => {
            setProgress(
              'onProgress: success loaded=' +
                e.nativeEvent.loaded +
                ' total=' +
                e.nativeEvent.total,
            );
          }}
          onLoad={(e: OnLoadEvent) => {
            setLoad(
              'onLoad: success width=' +
                e.nativeEvent.width +
                ' height=' +
                e.nativeEvent.height,
            );
          }}
          onError={() => {
            setError('onError: success');
          }}
          onLoadEnd={() => {
            setLoadEnd('onLoadEnd: success');
          }}
        />
      </TestCase>

      <TestCase itShould="正常图片回调">
        <Text style={styles.label2}>{onLoadStart1}</Text>
        <Text style={styles.label2}>{onProgress1}</Text>
        <Text style={styles.label2}>{onLoad1}</Text>
        <Text style={styles.label2}>{onError1}</Text>
        <Text style={styles.label2}>{onLoadEnd1}</Text>

        <FastImage
          source={{
            uri: 'https://res.vmallres.com/uomcdn/CN/cms/202405/decb6db9f59d4fc393d062ec4e20c64e.jpg',
          }}
          style={styles.image}
          onLoadStart={() => {
            setLoadStart1('onLoadStart: success');
          }}
          onProgress={(e: OnProgressEvent) => {
            setProgress1(
              'onProgress: success loaded=' +
                e.nativeEvent.loaded +
                ' total=' +
                e.nativeEvent.total,
            );
          }}
          onLoad={(e: OnLoadEvent) => {
            setLoad1(
              'onLoad: success width=' +
                e.nativeEvent.width +
                ' height=' +
                e.nativeEvent.height,
            );
          }}
          onError={() => {
            setError1('onError: success');
          }}
          onLoadEnd={() => {
            setLoadEnd1('onLoadEnd: success');
          }}
        />
      </TestCase>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  item: {
    paddingLeft: 30,
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
  },
  label: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
  },
  label2: {
    width: '100%',
    fontSize: 16,
    textAlign: 'left',
  },
});

export default FastImageDemo_callback_fix;
