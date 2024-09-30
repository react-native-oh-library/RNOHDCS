import React from 'react';  
import { View, StyleSheet, ScrollView } from 'react-native';  
import { PolarChart, Pie } from 'victory-native';  
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';  

const PolarChartPage = () => {  
  return (  
    <ScrollView style={styles.container}>  
      <Tester>  
          <TestCase itShould="case1: data 属性 显示不同的饼状图">  
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 10,
              height: 120
            }}>
              <PolarChart  
                data={[  
                  { label: 'A', value: 40, color: '#FF6384' },  
                  { label: 'B', value: 60, color: '#36A2EB' },  
                ]}  
                labelKey="label"  
                valueKey="value"  
                colorKey="color"  
              >  
              <Pie.Chart />  
              </PolarChart>  
              <PolarChart  
                data={[  
                  { label: 'C', value: 20, color: '#FFCE56' },  
                  { label: 'D', value: 80, color: '#FF6384' },  
                ]}  
                labelKey="label"  
                valueKey="value"  
                colorKey="color"  
              >  
                <Pie.Chart />  
              </PolarChart>  
            </View>  
          </TestCase>  

          <TestCase itShould="case2: labelKey 属性 用于设置 每个切片的标签">  
            <View style={{height: 150}}>  
              <PolarChart  
                data={[  
                  { name: 'E', value: 50, color: '#36A2EB' },  
                  { name: 'F', value: 50, color: '#FF6384' },  
                ]}  
                labelKey="name"  
                valueKey="value"  
                colorKey="color"  
              >  
                <Pie.Chart />  
              </PolarChart>  
            </View>  
          </TestCase>  

          <TestCase itShould="case3: valueKey 属性 用于设置每个切片的值， 以下是30%/70%">  
            <View style={{height: 150}}>  
              <PolarChart  
                data={[  
                  { label: 'G', amount: 30, color: '#FFCE56' },  
                  { label: 'H', amount: 70, color: '#36A2EB' },  
                ]}  
                labelKey="label"  
                valueKey="amount"  
                colorKey="color"  
              >  
                <Pie.Chart />  
              </PolarChart>  
            </View>  
          </TestCase>  

          <TestCase itShould="case4: colorKey 属性 用于设置 切片的颜色">  
            <View style={{height: 150}}>  
              <PolarChart  
                data={[  
                  { label: 'I', value: 60, color: '#0000ff' },  
                  { label: 'J', value: 40, color: '#00ff00' },  
                ]}  
                labelKey="label"  
                valueKey="value"  
                colorKey="color"  
              >  
                <Pie.Chart />  
              </PolarChart>  
            </View>  
          </TestCase>  

          <TestCase itShould="case5: containerStyle 属性 设置View 的样式  以下是将背景色设置为 红色">  
            <View style={{height: 150}}>  
              <PolarChart  
                data={[  
                  { label: 'K', value: 80, color: '#36A2EB' },  
                  { label: 'L', value: 20, color: '#FF6384' },  
                ]}  
                labelKey="label"  
                valueKey="value"  
                colorKey="color"  
                containerStyle={{ backgroundColor: '#ff0000', padding: 10 }}  
              >  
                <Pie.Chart />  
              </PolarChart>  
            </View>  
          </TestCase>  
          
          <TestCase itShould="case6: canvasStyle 属性 设置画布的样式 以下是用canvasStyle 设置画布颜色为绿色">  
            <View style={{height: 150}}>  
              <PolarChart  
                data={[  
                  { label: 'M', value: 70, color: '#FFCE56' },  
                  { label: 'N', value: 30, color: '#36A2EB' },  
                ]}  
                labelKey="label"  
                valueKey="value"  
                colorKey="color" 
                containerStyle={{ backgroundColor: '#ff0000', padding: 10 }}  
                canvasStyle={{ backgroundColor: 'green' }}  
              >  
                <Pie.Chart />  
              </PolarChart>  
            </View>  
          </TestCase>  

          <TestCase itShould="case7: children 属性 目前只支持 Pie.Chart 子属性 左边没有children 属性">
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 10,
              height: 120
            }}>
              <PolarChart  
                data={[  
                  { label: 'O', value: 50, color: '#FF6384' },  
                  { label: 'P', value: 50, color: '#FFCE56' },  
                ]}  
                labelKey="label"  
                valueKey="value"  
                colorKey="color"  
                containerStyle={{ backgroundColor: '#ff0000', padding: 10 }}  
              />  
              <PolarChart  
                data={[  
                  { label: 'O', value: 50, color: '#FF6384' },  
                  { label: 'P', value: 50, color: '#FFCE56' },  
                ]}  
                labelKey="label"  
                valueKey="value"  
                colorKey="color"  
                containerStyle={{ backgroundColor: '#00ff00', padding: 10 }}  
              >  
                <Pie.Chart />  
              </PolarChart>  
            </View>  
          </TestCase>   
      </Tester>  
    </ScrollView>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: 'white',  
  },  
  demoContainer: {  
    marginBottom: 30,  
    paddingHorizontal: 10,  
    height: 300,  
    width: 200,  
  },  
  demoTitle: {  
    fontSize: 16,  
    fontWeight: 'bold',  
    marginVertical: 10,  
  },  
});  

export default PolarChartPage;  