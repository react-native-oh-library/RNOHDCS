import React from 'react';

import { StyleSheet, View, Text, ScrollView, Alert, Animated, Image } from 'react-native';
import MultiSlider from 'react-native-multi-slider';

const AnimatedView = Animated.createAnimatedComponent(View);

CustomLabel.defaultProps = {
  leftDiff: 0,
};

const width = 50;
const pointerWidth = width * 0.47;

function LabelBase(props:any) {
  const { position, value, leftDiff, pressed } = props;
  const scaleValue = React.useRef(new Animated.Value(0.1)); // Behaves oddly if set to 0
  const cachedPressed = React.useRef(pressed);

  React.useEffect(() => {
    Animated.timing(scaleValue.current, {
      toValue: pressed ? 1 : 0.1,
      duration: 200,
      delay: pressed ? 0 : 2000,
      useNativeDriver: false,
    }).start();
    cachedPressed.current = pressed;
  }, [pressed]);

  return (
    Number.isFinite(position) &&
    Number.isFinite(value) && (
      <AnimatedView
        style={[
          labelStyles.sliderLabel,
          {
            left: position - width / 2,
            transform: [
              { translateY: width },
              { scale: scaleValue.current },
              { translateY: -width },
            ],
          },
        ]}
      >
        <View style={labelStyles.pointer} />
        <Text style={labelStyles.sliderLabelText}>{value}</Text>
      </AnimatedView>
    )
  );
}

function CustomLabel(props:any) {
  const {
    leftDiff,
    oneMarkerValue,
    twoMarkerValue,
    oneMarkerLeftPosition,
    twoMarkerLeftPosition,
    oneMarkerPressed,
    twoMarkerPressed,
  } = props;

  return (
    <View style={labelStyles.parentView}>
      <LabelBase
        position={oneMarkerLeftPosition}
        value={oneMarkerValue}
        leftDiff={leftDiff}
        pressed={oneMarkerPressed}
      />
      <LabelBase
        position={twoMarkerLeftPosition}
        value={twoMarkerValue}
        leftDiff={leftDiff}
        pressed={twoMarkerPressed}
      />
    </View>
  );
}

class CustomMarker extends React.Component<any> {
  render() {
    return (
      <View>
        <Text style={markerStyles.text}>{this.props.valuePrefix}{this.props.currentValue}</Text>
        <Image
          style={markerStyles.image}
          source={
            this.props.pressed ? require('./ruby.png') : require('./diamond.png')
          }
          resizeMode="contain"
        />
        <Text style={markerStyles.text}>{this.props.valueSuffix}{this.props.currentValue}</Text>
      </View>
    );
  }
}

function MultiSliderProps(){

    let testRef = React.useRef<View>(null)
    let [currentTestId, setCurrentTestId] = React.useState('')

    // 滑动指标配置
    const touchDimensionsConfig = {height: 60,width: 60,borderRadius: 10,slipDisplacement: 200}

    // 当值开始变化时回调
    const onValuesChangeStart = () => Alert.alert('Success', '值开始变化时回调')

    // 值改变时回调
    const onValuesChange = () => Alert.alert('Success', '值改变时回调')

    // 当值停止变化时回调
    const onValuesChangeFinish = () => Alert.alert('Success', '值停止变化时回调')
    
    // 第一个光标切换时回调
    const onToggleOne = () =>  Alert.alert('Success', '第一个光标切换回调')

    // 第二个光标切换时回调
    const onToggleTwo = () =>  Alert.alert('Success', '第二个光标切换回调')   
    
    // 获取绑定的testID
    const getCurrentTestId = () => {
      const testId = testRef.current?.props.testID || ''
      setCurrentTestId(testId)
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>MultiSlider功能验证</Text>
                <View style={styles.sliders}>
                    <Text style={styles.text}>values（设置values）</Text>
                    <MultiSlider values={[1, 6]} />

                    <Text style={styles.text}>onValuesChangeStart（值开始变化触发回调）</Text>
                    <MultiSlider  onValuesChangeStart={onValuesChangeStart} />

                    <Text style={styles.text}>onValuesChange（值改变时回调触发回调）</Text>
                    <MultiSlider  onValuesChange={onValuesChange} />

                    <Text style={styles.text}>onValuesChangeFinish（当值停止变化时回调）</Text>
                    <MultiSlider  onValuesChangeFinish={onValuesChangeFinish} />

                    <Text style={styles.text}>sliderLength（滑块长度{100}）</Text>
                    <MultiSlider  sliderLength={100} />

                    <Text style={styles.text}>touchDimensions（滑动指标borderRadius 50）</Text>
                    <MultiSlider  touchDimensions={touchDimensionsConfig} />

                    <Text style={styles.text}>enableLabel（开启自定义标签）</Text>
                    <MultiSlider  enableLabel customLabel={CustomLabel} /> 

                    <Text style={styles.text}>customMarker（自定义光标）</Text>
                    <MultiSlider  customMarker={CustomMarker} /> 

                    <Text style={styles.text}>customMarkerLeft/Right（自定义左右光标）</Text>
                    <MultiSlider 
                    values={[1, 1]} 
                    customMarkerLeft={() => <CustomMarker/>} 
                    customMarkerRight={() => <CustomMarker pressed />} 
                    />

                    <Text style={styles.text}>isMarkersSeparated（禁止两个光标重叠）</Text>
                    <MultiSlider values={[1, 10]} isMarkersSeparated={true}  />

                    <Text style={styles.text}>min（滑块可用最小值3）</Text>
                    <MultiSlider  enableLabel min={3} />

                    <Text style={styles.text}>max（滑块可用最大值8）</Text>
                    <MultiSlider  enableLabel max={8} /> 

                    <Text style={styles.text}>step（滑块步长5）</Text>
                    <MultiSlider  enableLabel step={5} />

                    <Text style={styles.text}>optionsArray（节点标记）</Text>
                    <MultiSlider  enableLabel optionsArray={[2, 6, 9]} />                    

                    <Text style={styles.text}>style（滑块样式）</Text>
                    <MultiSlider                       
                        containerStyle={{ backgroundColor: 'lightblue', padding: 10 }}
                        trackStyle={{ backgroundColor: 'gray', height: 5 }}
                        selectedStyle={{ backgroundColor: 'blue' }}
                        unselectedStyle={{ backgroundColor: 'lightgray' }}
                        markerContainerStyle={{ backgroundColor: 'transparent', borderColor: 'blue', borderWidth: 2 }}
                        markerStyle={{ backgroundColor: 'blue', width: 20, height: 20, borderRadius: 10 }}
                        pressedMarkerStyle={{ backgroundColor: 'darkblue' }}
                    />

                    <Text style={styles.text}>valuePrefix（值的前缀 b）</Text>
                    <MultiSlider values={[1, 10]} customMarker={CustomMarker} valuePrefix='b' />

                    <Text style={{...styles.text, marginTop: 20}}>valueSuffix（值的后缀 a）</Text>
                    <MultiSlider values={[1, 10]} customMarker={CustomMarker} valueSuffix='a' />

                    <Text style={styles.text}>enabledOne（启用第一个光标）</Text>
                    <MultiSlider values={[1, 10]} enabledOne={false} />

                    <Text style={styles.text}>enabledTwo（启用第二个光标）</Text>
                    <MultiSlider values={[1, 10]} enabledTwo={false} />

                    <Text style={styles.text}>stepsAs（自定义步骤标签）</Text>
                    <MultiSlider values={[1, 10]} step={2} showSteps stepsAs={
                      [
                        {index: 1, stepLabel: 't1', prefix: 'a1', suffix: 'b1'}, 
                        {index: 2, stepLabel: 't2', prefix: 'a2', suffix: 'b2'}
                      ]}
                    />

                    <Text style={styles.text}>showStepLabels、showStepLabels（显示自定义步骤标签）</Text>
                    <MultiSlider values={[1, 10]} showSteps showStepLabels={false} stepsAs={
                      [
                        {index: 1, stepLabel: 't1', prefix: 'a1', suffix: 'b1'}, 
                        {index: 2, stepLabel: 't2', prefix: 'a2', suffix: 'b2'}
                      ]}
                    />

                    <Text style={styles.text}>showStepMarkers（显示步骤对应的刻度点）</Text>
                    <MultiSlider values={[1, 10]} step={2} showSteps showStepMarkers={false} stepsAs={
                      [
                        {index: 1, stepLabel: 't1', prefix: 'a1', suffix: 'b1'}, 
                        {index: 2, stepLabel: 't2', prefix: 'a2', suffix: 'b2'}
                      ]}
                    />                                                             

                    <Text style={styles.text}>onToggleOne</Text>
                    <MultiSlider values={[1, 10]} onToggleOne={onToggleOne} />

                    <Text style={styles.text}>onToggleTwo</Text>
                    <MultiSlider values={[1, 10]} onToggleTwo={onToggleTwo} />

                    <Text style={styles.text}>allowOverlap（允许光标重叠）</Text>
                    <MultiSlider values={[1, 10]} enableLabel allowOverlap={false} />

                    <Text style={styles.text}>snapped（步进式移动光标）</Text>
                    <MultiSlider
                      sliderLength={300}
                      step={3}
                      snapped
                    />

                    <Text style={styles.text}>smoothSnapped（跳转最近节点）</Text>
                    <MultiSlider
                      smoothSnapped
                      sliderLength={300}
                      step={3}
                    />                      

                    <View style={{marginTop: 60, marginBottom: 120}}>
                      <Text style={styles.text}>vertical（垂直方向）</Text>
                      <MultiSlider  vertical />
                    </View>

                    <Text style={styles.text}>markerOffsetX（横向偏移）</Text>
                    <MultiSlider  markerOffsetX={10} />

                    <Text style={styles.text}>markerOffsetY（纵向偏移）</Text>
                    <MultiSlider  markerOffsetY={10} />

                    <Text style={styles.text}>markerSize（光标与边缘的距离）</Text>
                    <MultiSlider  markerSize={50} />                    

                    <Text style={styles.text}>minMarkerOverlapDistance（避免大光标重叠）</Text>
                    <MultiSlider values={[1, 10]} minMarkerOverlapDistance={100} />

                    <Text style={styles.text}>minMarkerOverlapStepDistance（避免大光标重叠）</Text>
                    <MultiSlider values={[1, 300]} step={3} allowOverlap={false} smoothSnapped minMarkerOverlapStepDistance={2}  />                    

                    <Text style={styles.text}>imageBackgroundSource（背景图片）</Text>
                    <MultiSlider  imageBackgroundSource={require('./logo-og.png')} />

                    <Text style={styles.text} >testID（设置testID）</Text>
                    <MultiSlider values={[1, 6]} testID={'666'} ref={testRef} />
                    <Text onPress={getCurrentTestId}>{currentTestId || '点击获取testID'}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const labelStyles = StyleSheet.create({
  parentView: {
    position: 'relative',
  },
  sliderLabel: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: '100%',
    width: width,
    height: width,
  },
  sliderLabelText: {
    textAlign: 'center',
    lineHeight: width,
    borderRadius: width / 2,
    borderWidth: 2,
    borderColor: '#999',
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 18,
    color: '#aaa',
  },
  pointer: {
    position: 'absolute',
    bottom: -pointerWidth / 4,
    left: (width - pointerWidth) / 2,
    transform: [{ rotate: '45deg' }],
    width: pointerWidth,
    height: pointerWidth,
    backgroundColor: '#999',
  },
});

const markerStyles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },  
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliders: {
      margin: 20,
      width: 280,
    },
    text: {
      alignSelf: 'center',
      paddingVertical: 20,
    },
    title: {
      fontSize: 30,
    },
    sliderOne: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

export default MultiSliderProps;