import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';
import {getColors, cache} from 'react-native-image-colors';

export interface Config {
  fallback?: string;
  pixelSpacing?: number;
  quality?: 'lowest' | 'low' | 'high' | 'highest';
  headers?: Record<string, string>;
  cache?: boolean;
  key?: string;
}

const imgCat = require('../assets/cat.jpg');
const yunaUrl =
  'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024';
const base =
  'data:image/jpeg;base64,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';

const title = `测试参数uri为 require('../assets/cat.jpg')`;
const httpTitle = `测试参数uri为 网络图片 'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'`;
const base64Title = `测试参数uri为 base64图片  'data:image/jpeg;base64,/9j/........'`;

export default function demo() {
  const [colors, setColors] = useState({});
  const [colorsHttp, setColorsHttp] = useState({});
  const [colorsBase, setColorsBase] = useState({});

  const [colorsFallback, setColorsFallback] = useState({});
  const [colorsFallbackW, setColorsFallbackW] = useState({});

  const [colorsCache, setColorsCache] = useState({});
  const [colorsCacheW, setColorsCacheW] = useState({});

  const [colorsKey, setColorsKey] = useState({});
  const [colorsKeyW, setColorsKeyW] = useState({});

  const [colorsHeaders, setColorsHeaders] = useState({});


  const element = (colors: any) => {
    switch (colors.platform) {
      case 'android':
        return (
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.average,
              }}>
              <Text style={{color: 'white'}}>average</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.dominant,
              }}>
              <Text style={{color: 'white'}}>dominant</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.vibrant,
              }}>
              <Text style={{color: 'white'}}>vibrant</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.darkVibrant,
              }}>
              <Text style={{color: 'white'}}>darkVibrant</Text>
            </View>
          </View>
        );
      case 'ios':
        return (
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.primary,
              }}>
              <Text style={{color: 'white'}}>primary</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.background,
              }}>
              <Text style={{color: 'white'}}>background</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.secondary,
              }}>
              <Text style={{color: 'white'}}>secondary</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.detail,
              }}>
              <Text style={{color: 'white'}}>detail</Text>
            </View>
          </View>
        );
      case 'harmony':
        return (
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.mainColor,
              }}>
              <Text style={{color: 'white'}}>mainColor</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.largestProportionColor,
              }}>
              <Text style={{color: 'white'}}>largestProportionColor</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.highestSaturationColor,
              }}>
              <Text style={{color: 'white'}}>highestSaturationColor</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: 80,
                backgroundColor: colors.averageColor,
              }}>
              <Text style={{color: 'white'}}>averageColor</Text>
            </View>
          </View>
        );
      default:
        return <View></View>;
    }
  };

  const fetchColors = async (uri: string, config?: Config) => {
    const result = await getColors(uri, config);
    setColors(result);
  };

  const fetchColorsHttp = async (uri: string) => {
    const result = await getColors(uri);
    setColorsHttp(result);
  };

  const fetchColorsBase = async (uri: string) => {
    const result = await getColors(uri);
    setColorsBase(result);
  };

  const fetchColorsFallback = async (uri: string, config?: Config) => {
    const result = await getColors(uri, config);
    setColorsFallback(result);
  };
  const fetchColorsFallbackW = async (uri: string, config?: Config) => {
    const result = await getColors(uri, config);
    setColorsFallbackW(result);
  };

  const fetchColorsCache = async (uri: string, config?: Config) => {
    const result = await getColors(uri, config);
    setColorsCache(result);
  };
  const fetchColorsCacheW = async (uri: string, config?: Config) => {
    const result = await getColors(uri, config);
    setColorsCacheW(result);
  };

  const fetchColorsKey = async (uri: string, config?: Config) => {
    const result = await getColors(uri, config);
    setColorsKey(result);
  };
  const fetchColorsKeyW = async (uri: string, config?: Config) => {
    const result = await getColors(uri, config);
    setColorsKeyW(result);
  };

  const fetchColorsHeaders = async (uri: string, config?: Config) => {
    const result = await getColors(uri, config);
    setColorsHeaders(result);
  };


  const [storage, setStorage] = useState('');
  const getCache = (key: string) => {
    setStorage(JSON.stringify(cache.getItem(key) || {}));
  };

  const [storageHttp, setStorageHttp] = useState('');
  const getCacheHttp = (key: string) => {
    setStorageHttp(JSON.stringify(cache.getItem(key) || {}));
  };

  const [widgetsStorage, setWidgetsStorage] = useState('');
  const getWidgetsCache = (key: string) => {
    setWidgetsStorage(JSON.stringify(cache.getItem(key) || {}));
  };

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="react-native-image-colors">
          <TestCase
            itShould={title}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>{JSON.stringify(colors)}</Text>
                  {element(colors)}
                </SafeAreaView>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={imgCat}
                />
                <Button
                  title={'uri为本地assets目录下的图片 拾取颜色'}
                  onPress={() => {
                    fetchColors(imgCat);
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={httpTitle}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsHttp)}
                  </Text>
                  {element(colorsHttp)}
                </SafeAreaView>
                <Image
                  resizeMode="contain"
                  style={styles.httpImage}
                  source={{uri: yunaUrl}}
                />
                <Button
                  title={'uri为网络图片 拾取颜色'}
                  onPress={() => {
                    fetchColorsHttp(yunaUrl);
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={base64Title}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsBase)}
                  </Text>
                  {element(colorsBase)}
                </SafeAreaView>
                <Image style={styles.httpImage} source={{uri: base}} />
                <Button
                  title={'uri为base64格式的图片 拾取颜色'}
                  onPress={() => {
                    fetchColorsBase(base);
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={'测试config参数 fallback为 #000000，该值只有当harmonyOS的api取到的颜色是空值时，返回值默认为fallback的值 #000000'}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsFallback)}
                  </Text>
                  {element(colorsFallback)}
                </SafeAreaView>
                <Image style={styles.httpImage} source={imgCat} />
                <Button
                  title={'测试config参数 fallback 拾取颜色'}
                  onPress={() => {
                    fetchColorsFallback(imgCat, {fallback: '#000000'});
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>
          
          <TestCase
            itShould={'测试config参数 fallback为 #ffffff，该值只有当harmonyOS的api取到的颜色是空值时，返回值默认为fallback的值 #ffffff'}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsFallbackW)}
                  </Text>
                  {element(colorsFallbackW)}
                </SafeAreaView>
                <Image style={styles.httpImage} source={imgCat} />
                <Button
                  title={'测试config参数 fallback 拾取颜色'}
                  onPress={() => {
                    fetchColorsFallbackW(imgCat, {fallback: '#ffffff'});
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={`测试config参数 headers为 "'Content-Type': 'application/octet-stream'"`}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsHeaders)}
                  </Text>
                  {element(colorsHeaders)}
                </SafeAreaView>
                <Image
                  resizeMode="contain"
                  style={styles.httpImage}
                  source={{uri: yunaUrl}}
                />
                <Button
                  title={'测试config参数 headers 拾取颜色'}
                  onPress={() => {
                    fetchColorsHeaders(yunaUrl, {
                      headers: {
                        'Content-Type': 'application/octet-stream',
                      }
                    });
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={'测试config参数 cache为 true，开启缓存，开启缓存后，可将这次的返回值缓存起来，下次再调用该api时，直接返回缓存值'}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsCache)}
                  </Text>
                  {element(colorsCache)}
                </SafeAreaView>
                <Image style={styles.image} source={imgCat} />
                <Button
                  title={'测试config参数 cache 拾取颜色'}
                  onPress={() => {
                    fetchColorsCache(imgCat, {cache: true});
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={'测试config参数 cache为 false，不开启缓存'}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsCacheW)}
                  </Text>
                  {element(colorsCacheW)}
                </SafeAreaView>
                <Image style={styles.httpImage} source={imgCat} />
                <Button
                  title={'测试config参数 cache 拾取颜色'}
                  onPress={() => {
                    fetchColorsCacheW(imgCat, {cache: true});
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          
          <TestCase
            itShould={'测试config参数 cache为 true、 key为 localImage ，开启缓存时，key为localImage，缓存的值为该次调用getColors的返回值'}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsKey)}
                  </Text>
                  {element(colorsKey)}
                </SafeAreaView>
                <Image style={styles.image} source={imgCat} />
                <Button
                  title={'测试config参数 cache key 拾取颜色'}
                  onPress={() => {
                    fetchColorsKey(imgCat, {cache: true, key: 'localImage'});
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={'测试config参数 cache为 true、 key为 baseImage ，开启缓存时，key为baseImage，缓存的值为该次调用getColors的返回值'}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>Result:</Text>
                  <Text style={styles.result}>
                    {JSON.stringify(colorsKeyW)}
                  </Text>
                  {element(colorsKeyW)}
                </SafeAreaView>
                <Image style={styles.httpImage} source={{uri: base}} />
                <Button
                  title={'测试config参数 cache key 拾取颜色'}
                  onPress={() => {
                    fetchColorsKeyW(base, {cache: true, key: 'baseImage'});
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={`测试cache.getItem()方法，读取缓存 调用方式cache.getItem('localImage');`}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>
                    cache.getItem('localImage')的值
                  </Text>
                  <Text style={styles.result}>{storage}</Text>
                </SafeAreaView>
                <Button
                  title={`读取缓存 localImage`}
                  onPress={() => {
                    getCache('localImage');
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={`测试cache.getItem()方法，读取缓存 调用方式cache.getItem('baseImage');`}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>
                    cache.getItem('baseImage')的值
                  </Text>
                  <Text style={styles.result}>{storageHttp}</Text>
                </SafeAreaView>
                <Button
                  title={`读取缓存 baseImage`}
                  onPress={() => {
                    getCacheHttp('baseImage');
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={`测试cache.setItem()方法，设置缓存 调用方式cache.setItem('key', {a: 1, b: 2});`}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>cache.getItem('key')的值</Text>
                  <Text style={styles.result}>{widgetsStorage}</Text>
                </SafeAreaView>
                <Button
                  title={`设置缓存 key`}
                  onPress={() => {
                    cache.setItem('key', {a: 1, b: 2});
                    getWidgetsCache('key');
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={`测试cache.removeItem()方法，删除缓存 调用方式cache.removeItem('baseImage');`}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>
                    cache.getItem('baseImage')的值
                  </Text>
                  <Text style={styles.result}>{storage}</Text>
                </SafeAreaView>
                <Button
                  title={`删除缓存 baseImage`}
                  onPress={() => {
                    cache.removeItem('baseImage');
                    getCache('baseImage');
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>

          <TestCase
            itShould={`测试cache.clear()方法，清空缓存 调用方式cache.clear();`}
            initialState={false}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            arrange={({setState}) => (
              <View style={{marginBottom: 50}}>
                <SafeAreaView style={styles.resultContainer}>
                  <Text style={styles.loading}>
                    cache.getItem: baseImage && key && localImage 的值
                  </Text>
                  <Text style={styles.result}>
                    {storage}
                    {storageHttp}
                    {widgetsStorage}
                  </Text>
                </SafeAreaView>
                <Button
                  title={`清空缓存`}
                  onPress={() => {
                    cache.clear();
                    getCacheHttp('baseImage');
                    getWidgetsCache('key');
                    getCache('localImage');
                    setState(true);
                  }}></Button>
              </View>
            )}></TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}

interface BoxProps {
  value: string;
  name: string;
}

const Box = ({value, name}: BoxProps) => {
  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: value,
        },
      ]}>
      <Text style={styles.colorName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  httpImage: {
    width: 200,
    height: 250,
  },
  image: {
    width: 144 * 1.5,
    height: 192 * 1.5,
  },
  colorName: {
    backgroundColor: 'white',
    padding: 4,
    fontSize: 18,
  },
  box: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  resultContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  result: {
    textAlign: 'center',
    color: '#333333',
  },
});
