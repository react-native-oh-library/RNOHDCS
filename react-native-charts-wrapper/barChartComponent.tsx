import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

const BarChartDemo = ()=>{
  const data = [
    {x:0,y:32},
    {x: 1, y: 20},
    {x: 2, y: 43},
    {x: 3, y: 21},
    {x: 4, y: 33},
    {x: 5, y: 23},
    {x: 6, y: 44},
    {x: 7, y: 15},
  ]
  const data2 =[
    {x:0,y:13},
    {x: 1, y: 43},
    {x: 2, y: 11},
    {x: 3, y: 12},
    {x: 4, y: 31},
    {x: 5, y: 22},
    {x: 6, y: 25},
    {x: 7, y: 13},
  ]
  return (
    <Tester>
      <ScrollView style={{marginBottom: 70}}>
        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(enabled:true),是否设置图表图例部件">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(text：图例文本为dataSets中的label),图例文本">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'legend',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(enabled:false),是否设置图表图例部件">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: false,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(textColor),图例文本的颜色">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                  textColor:processColor('#f45')
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(textSize) 图例文本的大小">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                  textSize:30
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(wordWrapEnabled:false) 图例文字是否换行">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo1111111111111111111111111111111111111',
                      values:data
                    },
                    {
                      label: 'demo22222222222222222222222222222222222222',
                      values:data2
                    },
                  ],
                }}
                xAxis={{position:'BOTTOM'}}
                legend={{
                  enabled: true,
                  wordWrapEnabled:false,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(wordWrapEnabled:true) 图例文字是否换行">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo1111111111111111111111111111111111111',
                      values:data,
                      config:{color:processColor('#4f4')}
                    },
                    {
                      label: 'demo22222222222222222222222222222222222222',
                      values:data2
                    },
                  ],
                }}
                xAxis={{position:'BOTTOM'}}
                legend={{
                  enabled: true,
                  wordWrapEnabled:true,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(horizontalAlignment:LEFT) 图例部件水平对齐,左对齐">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                 horizontalAlignment:'LEFT'
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(horizontalAlignment:CENTER) 图例部件水平对齐,居中对齐">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                 horizontalAlignment:'CENTER'
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:fontFamily 字体">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                  fontFamily:'monospace',
                  textSize:20
                }}
              />                                                                                        
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(horizontalAlignment:RIGHT) 图例部件水平对齐,右对齐">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                 horizontalAlignment:'RIGHT'
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

         <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(verticalAlignment:BOTTOM) 图例部件垂直对齐,下对齐">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                  verticalAlignment:'BOTTOM'
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(verticalAlignment:TOP) 图例部件垂直对齐,上对齐">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                  verticalAlignment:'TOP'
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(verticalAlignment:CENTER) 图例部件垂直对齐,居中对齐">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                  verticalAlignment:'CENTER'
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(orientation:HORIZONTAL) 设置图例的方向 垂直">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                  orientation:'HORIZONTAL'
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        
        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(orientation:VERTICAL) 设置图例的方向 水平">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data
                    },
                  ],
                }}
                legend={{
                  enabled: true,
                  orientation:'VERTICAL'
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(drawInside:true) 图例部件是否在图表内部显示">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data,
                    },
                  ],
                }}
                
                legend={{
                  enabled: true,
                  drawInside:true
                  
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(drawInside:false) 图例部件是否在图表内部显示">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data,
                    },
                  ],
                }}
                
                legend={{
                  enabled: true,
                  drawInside:false
                  
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:图例(legend)">
          <TestCase itShould="Props:legend(direction:LEFT_TO_RIGHT) 图例部件设置图例的文本方向 右边显示">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data,
                    },
                  ],
                }}
                
                legend={{
                  enabled: true,
                  direction:'LEFT_TO_RIGHT'
                  
                }}
              />
            </View>
          </TestCase>

          <TestCase itShould="Props:legend(direction:RIGHT_TO_LEFT) 图例部件设置图例的文本方向 左边显示">
            <View style={{width: '100%', height: 400}}>
              <BarChart
                style={styles.chart}
                
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data,
                    },
                  ],
                }}
                
                legend={{
                  enabled: true,
                  direction:'RIGHT_TO_LEFT'
                  
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:drawValueAboveBar">
          <TestCase itShould="Props:drawValueAboveBar(true) 所有值都绘制在其条形上方  需要设置maxVisibleValueCount">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data,
                      config:{drawValues:true,visible:true}
                    },
                  
                  ],
                }}
                drawValueAboveBar={true}
                maxVisibleValueCount={70}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:drawBarShadow">
          <TestCase itShould="Props:drawBarShadow(true) 在每个条形后面绘制一个灰色区域，表示最大值">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data,
                      config:{drawValues:true,visible:true}
                    },
                  
                  ],
                }}
                drawBarShadow={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:drawBarShadow">
          <TestCase itShould="Props:drawBarShadow(false) 默认值，没任何显示">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data,
                      config:{drawValues:true,visible:true}
                    },
                  
                  ],
                }}
                drawBarShadow={false}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:dataSets(label,values:可添加任意数量数据)">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values:data,
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:color,设置图表条形柱的颜色">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4')},
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:colors 应用于此数据集的颜色,由多个颜色组成">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [processColor('#333'), processColor('#f54'),processColor('#4f4')],
                      },
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:drawValues 设置是否绘制值,需设置最大可见值，不然绘制为true也不显示">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues:true
                      },
                      
                    },
                  ],
                  
                }}
                maxVisibleValueCount={70}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:drawValues：false 默认值，不显示值">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues:false
                      },
                      
                    },
                  ],
                  
                }}
                maxVisibleValueCount={70}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:visible:true 数据集的可见性 可见">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues:true,visible:true
                      },
                      
                    },
                  ],
                  
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:visible:false 数据集的可见性 不可见">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues:true,visible:false
                      },
                      
                    },
                  ],
                  
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:axisDependency 设置绘制此数据集所依据的Y轴,demo数据依赖的左边Y轴，demo2依赖的是右边Y轴，可以看0刻度分辨">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        color:processColor('#d2d'),
                        axisDependency:'LEFT'
                      },
                      
                    },
                    {
                        label: 'demo1',
                        values: data2,
                        config: {
                          axisDependency:'RIGHT'
                        },
                        
                    }
                  ],
                  
                }}
                xAxis={{position:'BOTTOM'}}
              />
            </View>
          </TestCase>
        </TestSuite>

 
        <TestSuite name="barChart 基础柱状图:数据(data) ">
          <TestCase itShould="Props:highlightColor 设置用于绘制突出显示指示器的颜色">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        highlightEnabled:true,highlightColor:processColor('#4f4'),highlightAlpha:255
                      },
                      
                    },
                  ],
                }}
                touchEnabled={true}
                maxHighlightDistance={1000}
                highlightFullBarEnabled={true}
                maxVisibleValueCount={70}
                highlightPerTapEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:barWidth 设置每个条形在x轴上应具有的宽度 默认0.85f">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        highlightEnabled:true,highlightColor:processColor('#4f4')
                      },
                      
                    },
                  ],
                config:{barWidth:0.5}
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:topRadius 设置顶部圆角半径">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                config:{topRadius:5}
                }}
              />
            </View>
          </TestCase>
        </TestSuite>


        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:barShadowColor 设置用于绘制条形阴影的颜色 需配合drawBarShadow">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config:{barShadowColor:processColor('#4f4')}
                    }
                  ],               
                }}
                drawBarShadow={true}
              />
            </View>
          </TestCase>

        </TestSuite>
        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:highlightAlpha 设置用于绘制高光的alpha值（透明度）">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config:{  highlightEnabled:true,highlightColor:processColor('#4f4'),highlightAlpha:50}
                    }
                  ],               
                }}
                maxVisibleValueCount={70}
                touchEnabled={true}
                maxHighlightDistance={1000}
                highlightFullBarEnabled={true}
                highlightPerTapEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="barChart 基础柱状图:数据(data)">
          <TestCase itShould="Props:group 设置柱状图的组 fromX,groupSpace,barSpace需要一起设置">
            <View style={{width: '100%', height: 300}}>
              <BarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config:{color:processColor('#5cf')}
                    }
                    
                  ], 
                  config: { group: { fromX: 0, groupSpace: 0.06, barSpace: 0.02 }, barWidth: 0.45 }              
                }}
                xAxis={{position:'BOTTOM'}}
                maxVisibleValueCount={70}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

export default BarChartDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 100,
  },
  chart: {
    flex: 1,
  },
});
