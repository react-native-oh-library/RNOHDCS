import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import React from 'react';
import PagerView from 'react-native-pager-view';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';



export function PageViewTest() {

  const pagerRef1 = React.useRef<PagerView>(null);
  const pagerRef2 = React.useRef<PagerView>(null);
  const pagerRef3 = React.useRef<PagerView>(null);

  return (
    <Tester>
      <ScrollView keyboardShouldPersistTaps={'always'} keyboardDismissMode={'none'}>
        <TestSuite name="PlatformColor">
          <TestCase itShould="PageView initialPage props"
          >
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              initialPage={1}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>


          <TestCase itShould="PageView keyboardDismissMode props(on-drag)"
          >
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              keyboardDismissMode={"on-drag"}
            >
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <TextInput style={{
                  borderWidth: 1,
                  borderColor: 'silver',
                  backgroundColor: '#444',
                  height: 50, 
                  borderRadius: 8,
                  marginTop: 8,
                  padding: 8,
                  fontSize: 16,
                  color: 'white',
                  width: 200
                }} />
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>


          <TestCase itShould="PageView keyboardDismissMode props(none)"
          >
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              keyboardDismissMode={"none"}
            >
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <TextInput style={{
                  borderWidth: 1,
                  borderColor: 'silver',
                  backgroundColor: '#444',
                  height: 50, 
                  borderRadius: 8,
                  marginTop: 8,
                  padding: 8,
                  fontSize: 16,
                  color: 'white',
                  width: 200
                }} />
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView pageMargin props(20)"
          >
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              pageMargin={20}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>


          <TestCase itShould="PageView pageMargin props(50)"
          >
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              pageMargin={50}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView orientation props(vertical)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              orientation={"vertical"}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>


          <TestCase itShould="PageView orientation props(horizontal)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              orientation={"horizontal"}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView layoutDirection props(ltr)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              layoutDirection={'ltr'}
            >
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView layoutDirection props(rtl)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              layoutDirection={'rtl'}
            >
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView scrollEnabled props(false)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              scrollEnabled={false}>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>
          
          <TestCase itShould="PageView scrollEnabled props(true)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              scrollEnabled={true}>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>


          <TestCase itShould="PageView overScrollMode props(always)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              overScrollMode={'always'}>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>


          <TestCase itShould="PageView overScrollMode props(never)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              overScrollMode={'never'}>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView overScrollMode props(auto)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              overScrollMode={'auto'}>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView overdrag props(true)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              overdrag={true}>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView overdrag props(false)">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              overdrag={false}>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase
            itShould="PageView onPageSelected event"
            initialState={false}
            arrange={({ setState }) => (
              <View style={{ flex: 1 }}>
                <PagerView
                  style={{
                    flex: 1,
                    width: '100%',
                    height: 200,
                    backgroundColor: '#6D8585',
                  }}
                  onPageSelected={(e: any) => {
                    console.warn("onPageSelected!")
                    setState(true)
                  }}
                >
                  <View
                    style={{
                      alignItems: 'center',
                      width: '100%',
                      height: 200,
                      backgroundColor: '#E6713E',
                    }}
                    key="1">
                    <Text
                      style={{
                        width: '100%',
                        height: 100,
                        fontWeight: 'bold',
                      }}>
                      First page
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',

                      width: '100%',
                      height: 200,
                      backgroundColor: '#7A8CF2',
                    }}
                    key="2">
                    <Text
                      style={{
                        width: '100%',
                        height: '100%',
                        fontWeight: 'bold',
                      }}>
                      Second page
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',

                      width: '100%',
                      height: 200,
                      backgroundColor: '#F28CE9',
                    }}
                    key="3">
                    <Text
                      style={{
                        width: '100%',
                        height: '100%',
                        fontWeight: 'bold',
                      }}>
                      Third page
                    </Text>
                  </View>
                </PagerView>
              </View>
            )}
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          >
          </TestCase>

          <TestCase
            itShould="PageView onPageScroll event"
            initialState={false}
            arrange={({ setState }) => (
              <View style={{ flex: 1 }}>
                <PagerView
                  style={{
                    flex: 1,
                    width: '100%',
                    height: 200,
                    backgroundColor: '#6D8585',
                  }}
                  onPageScroll={(e: any) => {
                    console.warn("onPageScroll!")
                    setState(true)
                  }}>
                  <View
                    style={{
                      alignItems: 'center',

                      width: '100%',
                      height: 200,
                      backgroundColor: '#E6713E',
                    }}
                    key="1">
                    <Text
                      style={{
                        width: '100%',
                        height: 100,
                        fontWeight: 'bold',
                      }}>
                      First page
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',

                      width: '100%',
                      height: 200,
                      backgroundColor: '#7A8CF2',
                    }}
                    key="2">
                    <Text
                      style={{
                        width: '100%',
                        height: '100%',
                        fontWeight: 'bold',
                      }}>
                      Second page
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',

                      width: '100%',
                      height: 200,
                      backgroundColor: '#F28CE9',
                    }}
                    key="3">
                    <Text
                      style={{
                        width: '100%',
                        height: '100%',
                        fontWeight: 'bold',
                      }}>
                      Third page
                    </Text>
                  </View>
                </PagerView>
              </View>
            )}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          >
          </TestCase>

          <TestCase
            itShould="PageView onPageScrollStateChanged event"
            initialState={false}
            arrange={({ setState }) => (
              <View style={{ flex: 1 }}>
                <PagerView
                  style={{
                    flex: 1,
                    width: '100%',
                    height: 200,
                    backgroundColor: '#6D8585',
                  }}
                  onPageScrollStateChanged={(e: any) => {
                    console.warn("onPageScrollStateChanged!")
                    setState(true)
                  }}>
                  <View
                    style={{
                      alignItems: 'center',

                      width: '100%',
                      height: 200,
                      backgroundColor: '#E6713E',
                    }}
                    key="1">
                    <Text
                      style={{
                        width: '100%',
                        height: 100,
                        fontWeight: 'bold',
                      }}>
                      First page
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',

                      width: '100%',
                      height: 200,
                      backgroundColor: '#7A8CF2',
                    }}
                    key="2">
                    <Text
                      style={{
                        width: '100%',
                        height: '100%',
                        fontWeight: 'bold',
                      }}>
                      Second page
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',

                      width: '100%',
                      height: 200,
                      backgroundColor: '#F28CE9',
                    }}
                    key="3">
                    <Text
                      style={{
                        width: '100%',
                        height: '100%',
                        fontWeight: 'bold',
                      }}>
                      Third page
                    </Text>
                  </View>
                </PagerView>
              </View>
            )}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          >
          </TestCase>


          <TestCase itShould="PageView setPageWithoutAnimation commond">
            <PagerView
              ref={pagerRef1}
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
            >
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Text
                  style={{
                    width: '100%',
                    height: 100,
                    fontWeight: 'bold',
                  }}>
                  First page
                </Text>
                <Button title='点击跳转第3页' onPress={() => {
                  console.warn("setPageWithoutAnimation");
                  pagerRef1.current?.setPageWithoutAnimation(2);
                }}>
                </Button>

              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>


          <TestCase itShould="PageView setPage commond">
            <PagerView
              ref={pagerRef2}
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
            >
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">

                <Button title='点击跳转第2页' onPress={() => {
                  console.warn("setPage");
                  pagerRef2.current?.setPage(1);
                }}>
                </Button>


              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

          <TestCase itShould="PageView setScrollEnabled commond">
            <PagerView
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                backgroundColor: '#6D8585',
              }}
              ref={pagerRef3}
            >
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#E6713E',
                }}
                key="1">
                <Button title='点击禁止滑动' onPress={() => {
                  console.warn("setScrollEnabled");
                  pagerRef3.current?.setScrollEnabled(false)
                }}>
                </Button>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#7A8CF2',
                }}
                key="2">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Second page
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',

                  width: '100%',
                  height: 200,
                  backgroundColor: '#F28CE9',
                }}
                key="3">
                <Text
                  style={{
                    width: '100%',
                    height: '100%',
                    fontWeight: 'bold',
                  }}>
                  Third page
                </Text>
              </View>
            </PagerView>
          </TestCase>

        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

