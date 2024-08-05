import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
  } from 'react-native';
  import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
  import React, {useState, useEffect, useRef} from 'react';
  import BigMediaTest from './BigMediaTest';
  import ChartListTest from './CharTest';
  import ContactTest from './ContactTest';
  import HeightEqualTest from './HeightEqualTest';
  import BouncesTest from './BouncesTest';
  import HeightUnequalTest from './HeightUnequalTest';
  import ScrollEnabledTest from './scrollEnabledTest';
  import RefreshAndLoadingTest from './RefreshAndLoadingTest';
  import StickyFormTest from './StickyFormTest';
  import WaterfallListTest from './WaterfallListTest';
  import {LargeList, StickyForm} from 'react-native-largelist';
  import {messages} from './DataSource';
  
  export default function largelistTest() {
    return (
      <Tester>
        <ScrollView keyboardShouldPersistTaps={'always'} keyboardDismissMode={'none'} style={{marginBottom: 50, marginTop: 20}}>
          <TestSuite name="largelist">
            <TestCase modal itShould="updateTimeInterval Test">
              <UpdateTimeIntervalTest />
            </TestCase>
            <BigMediaTest />
            <ChartListTest />
            <WaterfallListTest />
            <ContactTest />
            <HeightEqualTest />
            <HeightUnequalTest />
            <BouncesTest />
            <ScrollEnabledTest />
            <RefreshAndLoadingTest />
          </TestSuite>
        </ScrollView>
      </Tester>
    );
  }
  
  const UpdateTimeIntervalTest = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      setTimeout(() => {
        setData(messages);
      }, 2000);
    };

    const renderItem = ({section: section, row: row}) => {
        let msg = messages[section].items[row];
        return (
          <TouchableOpacity
            style={{flex: 1, backgroundColor: '#FFF'}}
            onPress={() => console.log('=====>')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={msg.icon}
                style={{marginLeft: 16, width: 44, height: 44}}
              />
              <View style={{marginLeft: 4}}>
                <Text style={{fontSize: 18}}>{msg.title}</Text>
                <Text style={{fontSize: 14, marginTop: 8}}>{msg.subtitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      };
    
      return (
        <View style={{height: 500, width: 350}}>
          <LargeList
            data={[...data]}
            heightForIndexPath={() => 80}
            renderIndexPath={renderItem}
            updateTimeInterval={2000}
          />
        </View>
      );
    };
    
    const StickyFormUpdateTimeIntervalTest = () => {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = () => {
        setTimeout(() => {
          setData(messages);
        }, 2000);
      };
    
      const renderItem = ({section: section, row: row}) => {
        let msg = messages[section].items[row];
        return (
          <TouchableOpacity
            style={{flex: 1, backgroundColor: '#FFF'}}
            onPress={() => console.log('=====>')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={msg.icon}
                style={{marginLeft: 16, width: 44, height: 44}}
              />
              <View style={{marginLeft: 4}}>
                <Text style={{fontSize: 18}}>{msg.title}</Text>
                <Text style={{fontSize: 14, marginTop: 8}}>{msg.subtitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      };
    
      return (
        <View style={{height: 500, width: 350}}>
          <StickyForm
            data={[...data]}
            heightForIndexPath={() => 80}
            renderIndexPath={renderItem}
            updateTimeInterval={2000}
          />
        </View>
      );
    };
