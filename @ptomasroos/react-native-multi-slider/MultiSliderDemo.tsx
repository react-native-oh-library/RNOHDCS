import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const AnimatedView = Animated.createAnimatedComponent(View);

CustomLabel.defaultProps = {
  leftDiff: 0,
};

const width = 50;
const pointerWidth = width * 0.47;

function LabelBase(props: any) {
  const {position, value, leftDiff, pressed} = props;
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
              {translateY: width},
              {scale: scaleValue.current},
              {translateY: -width},
            ],
          },
        ]}>
        <View style={labelStyles.pointer} />
        <Text style={labelStyles.sliderLabelText}>{value}</Text>
      </AnimatedView>
    )
  );
}

function CustomLabel(props: any) {
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
        <Text style={markerStyles.text}>
          {this.props.valuePrefix}
          {this.props.currentValue}
          {this.props.valueSuffix}
        </Text>
        <Image
          style={markerStyles.image}
          source={
            this.props.pressed
              ? require('./ruby.png')
              : require('./diamond.png')
          }
          resizeMode="contain"
        />
        <Text style={markerStyles.text}>
          {this.props.valuePrefix}
          {this.props.currentValue}
          {this.props.valueSuffix}
        </Text>
      </View>
    );
  }
}

type SetStateProps = React.Dispatch<React.SetStateAction<boolean>>;

export function MultiSliderDemo() {
  let testRef = React.useRef<View>(null);

  const caseList = [
    {
      describe: 'values',
      cn: '设置values，[1,6]',
      key: 'getInitStatus_1',
      name: 'getInitStatus',
      style: styles.sliderSmall,
      props: {
        values: [1, 6],
      },
    },
    {
      describe: 'values',
      cn: '设置values，[2,4]',
      key: 'getInitStatus_2',
      name: 'getInitStatus',
      style: styles.sliderSmall,
      props: {
        values: [2, 4],
      },
    },
    {
      describe: 'onValuesChangeStart',
      cn: '值开始变化触发回调',
      key: 'onValuesChangeStart',
      name: 'onValuesChangeStart',
      style: styles.sliderSmall,
      fn: (setState: SetStateProps) => {
        return {
          onValuesChangeStart: () => setState(true),
        };
      },
    },
    {
      describe: 'onValuesChange',
      cn: '值改变时回调触发回调',
      key: 'onValuesChange',
      name: 'onValuesChange',
      style: styles.sliderSmall,
      fn: (setState: SetStateProps) => {
        return {
          onValuesChange: () => setState(true),
        };
      },
    },
    {
      describe: 'onValuesChangeFinish',
      cn: '当值停止变化时回调',
      key: 'onValuesChangeFinish',
      name: 'onValuesChangeFinish',
      style: styles.sliderSmall,
      fn: (setState: SetStateProps) => {
        return {
          onValuesChangeFinish: () => setState(true),
        };
      },
    },
    {
      describe: 'sliderLength',
      cn: '滑块长度，100',
      key: 'sliderLength_100',
      name: 'sliderLength',
      style: styles.sliderSmall,
      props: {
        sliderLength: 100,
      },
    },
    {
      describe: 'sliderLength',
      cn: '滑块长度，200',
      key: 'sliderLength_200',
      name: 'sliderLength',
      style: styles.sliderSmall,
      props: {
        sliderLength: 200,
      },
    },
    {
      describe: 'touchDimensions',
      cn: 'touch范围，50',
      key: 'touchDimensions_50',
      name: 'touchDimensions',
      style: styles.sliderSmall,
      props: {
        touchDimensions: {
          height: 50,
          width: 50,
          borderRadius: 10,
          slipDisplacement: 200,
        },
      },
    },
    {
      describe: 'touchDimensions',
      cn: 'touch范围，70',
      key: 'touchDimensions_70',
      name: 'touchDimensions',
      style: styles.sliderSmall,
      props: {
        touchDimensions: {
          height: 70,
          width: 70,
          borderRadius: 10,
          slipDisplacement: 200,
        },
      },
    },
    {
      describe: 'customLabel',
      cn: '自定义标签',
      key: 'customLabel',
      name: 'customLabel',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        enableLabel: true,
        customLabel: CustomLabel,
      },
    },
    {
      describe: 'enableLabel',
      cn: '自定义标签，开启',
      key: 'enableLabel_t',
      name: 'enableLabel',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        enableLabel: true,
        customLabel: CustomLabel,
      },
    },
    {
      describe: 'enableLabel',
      cn: '自定义标签，关闭',
      key: 'enableLabel_f',
      name: 'enableLabel',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        enableLabel: false,
        customLabel: CustomLabel,
      },
    },
    {
      describe: 'customMarker',
      cn: '自定义光标，默认',
      key: 'customMarker',
      name: 'customMarker',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        customMarker: CustomMarker,
      },
    },
    {
      describe: 'customMarkerLeft',
      cn: '自定义光标，左侧',
      key: 'customMarkerLeft',
      name: 'customMarkerLeft',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        isMarkersSeparated: true,
        customMarkerLeft: () => <CustomMarker />,
      },
    },
    {
      describe: 'customMarkerRight',
      cn: '自定义光标，右侧',
      key: 'customMarkerRight',
      name: 'customMarkerRight',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        isMarkersSeparated: true,
        customMarkerRight: () => <CustomMarker />,
      },
    },
    {
      describe: 'isMarkersSeparated',
      cn: '自定义光标，关闭',
      key: 'isMarkersSeparated_f',
      name: 'customMarkerRight',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        isMarkersSeparated: false,
        customMarkerLeft: () => <CustomMarker />,
        customMarkerRight: () => <CustomMarker pressed />,
      },
    },
    {
      describe: 'isMarkersSeparated',
      cn: '自定义光标，开启',
      key: 'isMarkersSeparated_t',
      name: 'customMarkerRight',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        isMarkersSeparated: true,
        customMarkerLeft: () => <CustomMarker />,
        customMarkerRight: () => <CustomMarker pressed />,
      },
    },
    {
      describe: 'min',
      cn: '滑块可用最小值，3',
      key: 'min_3',
      name: 'min',
      style: styles.sliderSmall,
      props: {
        values: [3],
        min: 3,
        enableLabel: true,
      },
    },
    {
      describe: 'min',
      cn: '滑块可用最小值，5',
      key: 'min_5',
      name: 'min',
      style: styles.sliderSmall,
      props: {
        values: [5],
        min: 5,
        enableLabel: true,
      },
    },
    {
      describe: 'max',
      cn: '滑块可用最大值，8',
      key: 'max_8',
      name: 'max',
      style: styles.sliderSmall,
      props: {
        max: 8,
        enableLabel: true,
      },
    },
    {
      describe: 'max',
      cn: '滑块可用最大值，7',
      key: 'max_7',
      name: 'max',
      style: styles.sliderSmall,
      props: {
        max: 7,
        enableLabel: true,
      },
    },
    {
      describe: 'step',
      cn: '步长，2',
      key: 'step_2',
      name: 'step',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
      },
    },
    {
      describe: 'step',
      cn: '步长，3',
      key: 'step_3',
      name: 'step',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 3,
        showSteps: true,
      },
    },
    {
      describe: 'optionsArray',
      cn: '节点标记，2，6，9',
      key: 'optionsArray_a',
      name: 'optionsArray',
      style: styles.sliderSmall,
      props: {
        optionsArray: [2, 6, 9],
        enableLabel: true,
      },
    },
    {
      describe: 'optionsArray',
      cn: '节点标记，1，3，5',
      key: 'optionsArray_b',
      name: 'optionsArray',
      style: styles.sliderSmall,
      props: {
        optionsArray: [1, 3, 5],
        enableLabel: true,
      },
    },
    {
      describe: 'containerStyle',
      cn: '滑块容器样式，#00BFFF',
      key: 'containerStyle_a',
      name: 'containerStyle',
      style: styles.sliderSmall,
      props: {
        containerStyle: {backgroundColor: '#00BFFF', padding: 10},
      },
    },
    {
      describe: 'containerStyle',
      cn: '滑块容器样式，#FF6A6A',
      key: 'containerStyle_b',
      name: 'containerStyle',
      style: styles.sliderSmall,
      props: {
        containerStyle: {backgroundColor: '#FF6A6A', padding: 10},
      },
    },
    {
      describe: 'trackStyle',
      cn: '轨道样式，默认，	#7FFF00',
      key: 'trackStyle_a',
      name: 'trackStyle',
      style: styles.sliderSmall,
      props: {
        trackStyle: {backgroundColor: '#7FFF00', height: 5},
      },
    },
    {
      describe: 'trackStyle',
      cn: '轨道样式，默认，	#8470FF',
      key: 'trackStyle_b',
      name: 'trackStyle',
      style: styles.sliderSmall,
      props: {
        trackStyle: {backgroundColor: '#8470FF', height: 5},
      },
    },
    {
      describe: 'selectedStyle',
      cn: '轨道样式，滑过后，#00CED1',
      key: 'selectedStyle_a',
      name: 'selectedStyle',
      style: styles.sliderSmall,
      props: {
        selectedStyle: {backgroundColor: '#00CED1', height: 5},
      },
    },
    {
      describe: 'selectedStyle',
      cn: '轨道样式，滑过后，#CD5C5C',
      key: 'selectedStyle_b',
      name: 'selectedStyle',
      style: styles.sliderSmall,
      props: {
        selectedStyle: {backgroundColor: '#CD5C5C', height: 5},
      },
    },
    {
      describe: 'unselectedStyle',
      cn: '轨道样式，未滑过，#FF69B4',
      key: 'unselectedStyle_a',
      name: 'unselectedStyle',
      style: styles.sliderSmall,
      props: {
        unselectedStyle: {backgroundColor: '#FF69B4', height: 5},
      },
    },
    {
      describe: 'unselectedStyle',
      cn: '轨道样式，未滑过，#8470FF',
      key: 'unselectedStyle_b',
      name: 'unselectedStyle',
      style: styles.sliderSmall,
      props: {
        unselectedStyle: {backgroundColor: '#8470FF', height: 5},
      },
    },
    {
      describe: 'markerContainerStyle',
      cn: '光标容器样式，#CD5C5C',
      key: 'markerContainerStyle_a',
      name: 'markerContainerStyle',
      style: styles.sliderSmall,
      props: {
        markerContainerStyle: {
          backgroundColor: 'transparent',
          borderColor: '#CD5C5C',
          borderWidth: 2,
        },
      },
    },
    {
      describe: 'markerContainerStyle',
      cn: '光标容器样式，#7FFF00',
      key: 'markerContainerStyle_b',
      name: 'markerContainerStyle',
      style: styles.sliderSmall,
      props: {
        markerContainerStyle: {
          backgroundColor: 'transparent',
          borderColor: '#7FFF00',
          borderWidth: 2,
        },
      },
    },
    {
      describe: 'markerStyle',
      cn: '光标样式，#EE7621',
      key: 'markerStyle_a',
      name: 'markerStyle',
      style: styles.sliderSmall,
      props: {
        markerStyle: {
          backgroundColor: '#EE7621',
          width: 20,
          height: 20,
          borderRadius: 10,
        },
      },
    },
    {
      describe: 'markerStyle',
      cn: '光标样式，#EE00EE',
      key: 'markerStyle_b',
      name: 'markerStyle',
      style: styles.sliderSmall,
      props: {
        markerStyle: {
          backgroundColor: '#EE00EE',
          width: 20,
          height: 20,
          borderRadius: 10,
        },
      },
    },
    {
      describe: 'pressedMarkerStyle',
      cn: '接触光标后的样式，#00CD66',
      key: 'pressedMarkerStyle_a',
      name: 'pressedMarkerStyle',
      style: styles.sliderSmall,
      props: {
        pressedMarkerStyle: {backgroundColor: '#00CD66'},
      },
    },
    {
      describe: 'pressedMarkerStyle',
      cn: '接触光标后的样式，#7B68EE',
      key: 'pressedMarkerStyle_b',
      name: 'pressedMarkerStyle',
      style: styles.sliderSmall,
      props: {
        pressedMarkerStyle: {backgroundColor: '#7B68EE'},
      },
    },
    {
      describe: 'valuePrefix',
      cn: '值的前缀',
      key: 'valuePrefix',
      name: 'valuePrefix',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        customMarker: CustomMarker,
        valuePrefix: 'b',
      },
    },
    {
      describe: 'valueSuffix',
      cn: '值的后缀',
      key: 'valueSuffix',
      name: 'valueSuffix',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        customMarker: CustomMarker,
        valueSuffix: 'a',
      },
    },
    {
      describe: 'enabledOne',
      cn: '第一个光标，禁用',
      key: 'enabledOne_f',
      name: 'enabledOne',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        enabledOne: false,
      },
    },
    {
      describe: 'enabledOne',
      cn: '第一个光标，启用',
      key: 'enabledOne_t',
      name: 'enabledOne',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        enabledOne: true,
      },
    },
    {
      describe: 'enabledTwo',
      cn: '第二个光标，禁用',
      key: 'enabledTwo_f',
      name: 'enabledTwo',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        enabledTwo: false,
      },
    },
    {
      describe: 'enabledTwo',
      cn: '第二个光标，启用',
      key: 'enabledTwo_t',
      name: 'enabledTwo',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        enabledTwo: true,
      },
    },
    {
      describe: 'stepsAs',
      cn: '自定义步骤标签，步骤名称step，前缀@，后缀%',
      key: 'stepsAs_t',
      name: 'stepsAs',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
        stepsAs: [
          {index: 1, stepLabel: 'step', prefix: '@', suffix: '%'},
          {index: 2, stepLabel: 'step', prefix: '@', suffix: '%'},
        ],
      },
    },
    {
      describe: 'showSteps',
      cn: '自定义步骤标签，启用',
      key: 'showSteps_t',
      name: 'showSteps',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
        stepsAs: [
          {index: 1, stepLabel: 'step', prefix: '@', suffix: '%'},
          {index: 2, stepLabel: 'step', prefix: '@', suffix: '%'},
        ],
      },
    },
    {
      describe: 'showSteps',
      cn: '自定义步骤标签，关闭',
      key: 'showSteps_f',
      name: 'showSteps',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: false,
        stepsAs: [
          {index: 1, stepLabel: 'step', prefix: '@', suffix: '%'},
          {index: 2, stepLabel: 'step', prefix: '@', suffix: '%'},
        ],
      },
    },
    {
      describe: 'stepStyle',
      cn: '自定义步骤样式',
      key: 'stepStyle',
      name: 'stepStyle',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
        stepStyle: {backgroundColor: 'red', width: 10, height: 10},
      },
    },
    {
      describe: 'stepLabelStyle',
      cn: '自定义步骤标签label样式',
      key: 'stepLabelStyle',
      name: 'stepLabelStyle',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
        stepsAs: [
          {index: 1, stepLabel: 'step', prefix: '@', suffix: '%'},
          {index: 2, stepLabel: 'step', prefix: '@', suffix: '%'},
        ],
      },
    },
    {
      describe: 'showStepLabels',
      cn: '自定义步骤标签label，显示',
      key: 'showStepLabels_t',
      name: 'showStepLabels',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
        showStepLabels: true,
        stepsAs: [
          {index: 1, stepLabel: 'step', prefix: '@', suffix: '%'},
          {index: 2, stepLabel: 'step', prefix: '@', suffix: '%'},
        ],
      },
    },
    {
      describe: 'showStepLabels',
      cn: '自定义步骤标签label，隐藏',
      key: 'showStepLabels_f',
      name: 'showStepLabels',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
        showStepLabels: false,
        stepLabelStyle: {color: 'red'},
        stepsAs: [
          {index: 1, stepLabel: 'step', prefix: '@', suffix: '%'},
          {index: 2, stepLabel: 'step', prefix: '@', suffix: '%'},
        ],
      },
    },
    {
      describe: 'showStepMarkers',
      cn: '显示步骤对应的刻度点',
      key: 'showStepMarkers',
      name: 'showStepMarkers',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
        showStepMarkers: true,
      },
    },
    {
      describe: 'stepMarkerStyle',
      cn: '自定义步骤刻度点样式',
      key: 'stepMarkerStyle',
      name: 'stepMarkerStyle',
      style: styles.sliderMiddle,
      props: {
        values: [0, 10],
        step: 2,
        showSteps: true,
        showStepMarkers: true,
        stepMarkerStyle: {
          backgroundColor: 'red',
          width: 10,
        },
      },
    },
    {
      describe: 'onToggleOne',
      cn: '点击第一个光标回调',
      key: 'onToggleOne',
      name: 'onToggleOne',
      style: styles.sliderSmall,
      fn: (setState: SetStateProps) => {
        return {
          values: [0, 10],
          onToggleOne: () => setState(true),
        };
      },
    },
    {
      describe: 'onToggleTwo',
      cn: '点击第二个光标回调',
      key: 'onToggleTwo',
      name: 'onToggleTwo',
      style: styles.sliderSmall,
      fn: (setState: SetStateProps) => {
        return {
          values: [0, 10],
          onToggleTwo: () => setState(true),
        };
      },
    },
    {
      describe: 'allowOverlap',
      cn: '光标重叠，允许',
      key: 'allowOverlap_t',
      name: 'allowOverlap',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        allowOverlap: true,
      },
    },
    {
      describe: 'allowOverlap',
      cn: '光标重叠，禁止',
      key: 'allowOverlap_f',
      name: 'allowOverlap',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        allowOverlap: false,
      },
    },
    {
      describe: 'snapped',
      cn: '步进式移动光标，开启',
      key: 'snapped_t',
      name: 'snapped',
      style: styles.sliderSmall,
      props: {
        sliderLength: 300,
        step: 3,
        snapped: true,
      },
    },
    {
      describe: 'snapped',
      cn: '步进式移动光标，关闭',
      key: 'snapped_f',
      name: 'snapped',
      style: styles.sliderSmall,
      props: {
        sliderLength: 300,
        step: 3,
        snapped: false,
      },
    },
    {
      describe: 'smoothSnapped',
      cn: '跳转最近节点，开启',
      key: 'smoothSnapped_t',
      name: 'smoothSnapped',
      style: styles.sliderSmall,
      props: {
        sliderLength: 300,
        step: 3,
        smoothSnapped: true,
      },
    },
    {
      describe: 'smoothSnapped',
      cn: '跳转最近节点，关闭',
      key: 'smoothSnapped_f',
      name: 'smoothSnapped',
      style: styles.sliderSmall,
      props: {
        sliderLength: 300,
        step: 3,
        smoothSnapped: false,
      },
    },
    {
      describe: 'vertical',
      cn: '垂直方向，开启',
      key: 'vertical_t',
      name: 'vertical',
      style: {marginTop: 120, marginBottom: 180},
      props: {
        vertical: true,
      },
    },
    {
      describe: 'vertical',
      cn: '垂直方向，关闭',
      key: 'vertical_f',
      name: 'vertical',
      style: styles.sliderSmall,
      props: {
        vertical: false,
      },
    },
    {
      describe: 'markerOffsetX',
      cn: '横向偏移，20',
      key: 'markerOffsetX_a',
      name: 'markerOffsetX',
      style: styles.sliderSmall,
      props: {
        markerOffsetX: 20,
      },
    },
    {
      describe: 'markerOffsetX',
      cn: '横向偏移，50',
      key: 'markerOffsetX_b',
      name: 'markerOffsetX',
      style: styles.sliderSmall,
      props: {
        markerOffsetX: 50,
      },
    },
    {
      describe: 'markerOffsetY',
      cn: '纵向偏移，10',
      key: 'markerOffsetY_a',
      name: 'markerOffsetY',
      style: styles.sliderSmall,
      props: {
        markerOffsetY: 10,
      },
    },
    {
      describe: 'markerOffsetY',
      cn: '纵向偏移，20',
      key: 'markerOffsetY_b',
      name: 'markerOffsetY',
      style: styles.sliderSmall,
      props: {
        markerOffsetY: 20,
      },
    },
    {
      describe: 'markerSize',
      cn: '光标与边缘的距离，50',
      key: 'markerSize_50',
      name: 'markerSize',
      style: styles.sliderSmall,
      props: {
        markerSize: 50,
      },
    },
    {
      describe: 'markerSize',
      cn: '光标与边缘的距离，80',
      key: 'markerSize_80',
      name: 'markerSize',
      style: styles.sliderSmall,
      props: {
        markerSize: 80,
      },
    },
    {
      describe: 'minMarkerOverlapDistance',
      cn: '避免大光标重叠，100',
      key: 'minMarkerOverlapDistance_a',
      name: 'minMarkerOverlapDistance',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        minMarkerOverlapDistance: 100,
      },
    },
    {
      describe: 'minMarkerOverlapDistance',
      cn: '避免大光标重叠，150',
      key: 'minMarkerOverlapDistance_b',
      name: 'minMarkerOverlapDistance',
      style: styles.sliderSmall,
      props: {
        values: [0, 10],
        minMarkerOverlapDistance: 150,
      },
    },
    {
      describe: 'minMarkerOverlapStepDistance',
      cn: '避免大光标重叠，2步',
      key: 'minMarkerOverlapStepDistance_a',
      name: 'minMarkerOverlapStepDistance',
      style: {...styles.sliderSmall, marginBottom: 50},
      props: {
        values: [0, 300],
        step: 3,
        allowOverlap: false,
        smoothSnapped: true,
        minMarkerOverlapStepDistance: 2,
      },
    },
    {
      describe: 'minMarkerOverlapStepDistance_b',
      cn: '避免大光标重叠，1步',
      key: 'minMarkerOverlapStepDistance',
      name: 'minMarkerOverlapStepDistance',
      style: {...styles.sliderSmall, marginBottom: 50},
      props: {
        values: [0, 300],
        step: 3,
        allowOverlap: false,
        smoothSnapped: true,
        minMarkerOverlapStepDistance: 1,
      },
    },
    {
      describe: 'imageBackgroundSource',
      cn: '背景图片',
      key: 'imageBackgroundSource',
      name: 'imageBackgroundSource',
      style: styles.sliderSmall,
      props: {
        imageBackgroundSource: require('./logo-og.png'),
      },
    },
    {
      describe: 'testID',
      cn: '设置testID',
      key: 'testID',
      name: 'testID',
      style: styles.sliderSmall,
      fn: (setState: SetStateProps) => {
        return {
          values: [0, 10],
          ref: testRef,
          testID: 'testId',
          onValuesChangeStart: () => {
            const testId = testRef.current?.props.testID || '';
            setState(testId === 'testId');
          },
        };
      },
    },
  ];
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-multi-slider">
          <View style={styles.container}>
            <View style={styles.sliders}>
              {caseList.map(item => {
                if (item.fn) {
                  return (
                    <TestCase
                      key={item.key}
                      itShould={item.describe + `（${item.cn}）`}
                      tags={['C_API']}
                      initialState={false}
                      arrange={({setState}) => {
                        return (
                          <View style={item.style}>
                            <MultiSlider {...item.fn(setState)} />
                          </View>
                        );
                      }}
                      assert={async ({expect, state}) => {
                        expect(state).to.be.true;
                      }}
                    />
                  );
                }
                if (item.props) {
                  const mProps = item.props as any;
                  return (
                    <TestCase
                      key={item.key}
                      tags={['C_API']}
                      itShould={item.describe + `（${item.cn}）`}>
                      <View style={item.style}>
                        <MultiSlider {...mProps} />
                      </View>
                    </TestCase>
                  );
                }
              })}
            </View>
          </View>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
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
    transform: [{rotate: '45deg'}],
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
    paddingBottom: 80,
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
  sliderMiddle: {
    height: 80,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  sliderSmall: {
    marginLeft: 20,
    marginRight: 20,
  },
});
