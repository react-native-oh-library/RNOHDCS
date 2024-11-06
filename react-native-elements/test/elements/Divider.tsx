import React, {useState} from 'react';
import { Text, Divider, Button } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {panResponder} from './RegistEvent'
type DividerViewTypes = {};

const DividerView: React.FunctionComponent<DividerViewTypes> = () => {
  const [value1,setValue1] = useState('')
  const [changeColor, setChangeColor] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 300, height: 20 });
  const pan = panResponder()

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Divider属性color 设置多个颜色的的分割线">
          <TestCase itShould="设置颜色的分割线" tags={['C_API']}>
            <View style={styles.horizontal}>
              <Divider width={5} color="yellow" />
            </View>
            <View style={styles.horizontal}>
              <Divider width={3} color="#397af8" />
            </View>
            <View style={styles.horizontal}>
              <Divider width={2} color="pink" />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Divider属性inset">
          <TestCase itShould="是否可设置inset" tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>设置inset为true</Text>
              <Divider inset={true} color="gray" />
            </View>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>设置inset为false</Text>
              <Divider inset={false} color="gray" />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Divider属性insetType">
          <TestCase itShould="insetType的枚举验证" tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>left</Text>
              <Divider inset={true} insetType="left" width={3} color="pink" />
            </View>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>right</Text>
              <Divider inset={true} insetType="right" width={3} color="pink" />
            </View>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>middle</Text>
              <Divider inset={true} insetType="middle" width={3} color="pink" />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Divider属性orientation  Divider竖直显示">
          <TestCase itShould="Divider竖直显示" tags={['C_API']}>
            <View style={styles.vertical}>
              <Text style={styles.titleStyle}>Left text</Text>
              <Divider orientation="vertical" width={2} />
              <Text style={styles.titleStyle}>Right text</Text>
            </View>
            <View style={styles.vertical}>
              <Text style={styles.titleStyle}>Left text</Text>
              <Divider orientation="vertical" width={2} color="red" />
              <Text style={styles.titleStyle}>Right text</Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Divider属性style  Divider的样式设置">
          <TestCase itShould="Divider的样式设置" tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>Divider的样式设置</Text>
              <Divider
                style={{
                  height: 10,
                  width: 200,
                  backgroundColor: 'yellow',
                  borderRadius: 5,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Divider属性subHeader  Divider设置subHeader">
          <TestCase itShould="subHeader " tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>
                Divider的subHeader
              </Text>
              <Divider
                style={{ height: 5, backgroundColor: 'yellow', borderRadius: 3 }}
                subHeader="subHeader"
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="Divider属性 subHeaderStyle  Divider设置 subHeaderStyle ">
          <TestCase itShould=" subHeaderStyle" tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>
                Divider的 subHeaderStyle
              </Text>
              <Divider
                style={{ height: 5, backgroundColor: 'yellow', borderRadius: 3 }}
                subHeader="subHeader"
                subHeaderStyle={{
                  fontSize: 28,
                  color: 'pink',
                  fontWeight: '400',
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Divider属性width 设置宽度的分割线 当orientation=horizontal时 width代表的是高度 当orientation=vertical时 width代表的是宽度 ">
          <TestCase
            itShould="当orientation=horizontal时 设置不同的width"
            tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>设置width为5</Text>
              <Divider width={5} color="yellow" />
            </View>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>设置width为8</Text>
              <Divider width={8} color="yellow" />
            </View>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>设置width为10</Text>
              <Divider width={10} color="yellow" />
            </View>
          </TestCase>
          <TestCase
            itShould="当orientation=vertical时 设置不同的width"
            tags={['C_API']}>
            <View style={styles.vertical}>
              <Text style={styles.titleStyle}>Left text</Text>
              <Divider orientation="vertical" width={5} color="yellow" />
              <Text style={styles.titleStyle}>Right text</Text>
            </View>
            <View style={styles.vertical}>
              <Text style={styles.titleStyle}>Left text</Text>
              <Divider orientation="vertical" width={8} color="yellow" />
              <Text style={styles.titleStyle}>Right text</Text>
            </View>
            <View style={styles.vertical}>
              <Text style={styles.titleStyle}>Left text</Text>
              <Divider orientation="vertical" width={10} color="yellow" />
              <Text style={styles.titleStyle}>Right text</Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Divider属性onResponderRelease 接收View的onResponderRelease属性 ">
          <TestCase
            itShould="View的onResponderRelease属性"
            tags={['C_API']}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.horizontalText}>View的onResponderRelease属性</Text>
              <Divider {...pan.panHandlers}  onResponderRelease={()=>setChangeColor(!changeColor)}   style={{ width: 300, height: 50, backgroundColor: changeColor ?  'green' : 'yellow', alignItems: 'center', justifyContent: 'center',marginBottom:20 }} />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Divider属性onLayout 接收原生View的onLayout属性">
          <TestCase
            itShould="接收原生View的onLayout属性"
            tags={['C_API']}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.horizontalText}>原生View的onLayout属性</Text>
              <Divider 
                onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                const layoutString = `width: ${width}, height: ${height}`;
                setValue1(layoutString);
                console.log('Layout:', layoutString);
              }}  style={{ width: dimensions.width,height:dimensions.height, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }} />
            </View>
            <View style={{ width: 200, marginLeft: 20, paddingBottom: 20, marginTop: 20 }}>
              <Text style={{ color: 'black' }}>onLayout回调方法显示组件的宽高</Text>
              <Text style={{ color: 'black' }}>
                {value1}
              </Text>
              <Button onPress={()=>{
                if (dimensions.width == 300 ) {
                  setDimensions({ width: 200, height: 30 })
                }else{
                  setDimensions({ width: 300, height: 20 })
                }       
              }}>修改组件的size</Button>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  horizontalText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#222',
  },
  vertical: {
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#222',
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DividerView;
