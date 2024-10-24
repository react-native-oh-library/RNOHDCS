import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  ColorValue,
  Image,
  ScrollView,
} from 'react-native';
import DropdownAlert, {
  DropdownAlertData,
  DropdownAlertType,
  DropdownAlertColor,
  DropdownAlertProps,
  DropDownAlertImage,
  DropDownAlertTestID,
  DropdownAlertPosition,
  DropdownAlertToValue,
  DropdownAlertDismissAction
} from 'react-native-dropdownalert';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type ListItem = {
  name: string;
  itshould: string;
  alertData?: DropdownAlertData;
  alertProps?: DropdownAlertProps;
  color: ColorValue;
  needMessage?:boolean;
};

type ListItemIndex = {
  item: ListItem;
  index: number;
};
enum CustDropDownAlertImage {
  Info = require('./assets/正常标签_neutral-face.png'),
  Warn = require('./assets/生气_angry-face.png'),
  Error = require('./assets/愤怒_pouting-face.png'),
  Success = require('./assets/开心_emotion-happy.png'),
  Cancel = require('./assets/惊讶张嘴_surprised-face-with-open-big-mouth.png'),
  Nomal = require('./assets/翻转笑脸_upside-down-face.png'),
}
const custAlertporps: DropdownAlertProps = {
  imageSrc: CustDropDownAlertImage.Nomal,
  infoImageSrc: CustDropDownAlertImage.Info,
  warnImageSrc: CustDropDownAlertImage.Warn,
  errorImageSrc: CustDropDownAlertImage.Error,
  successImageSrc: CustDropDownAlertImage.Success,
  cancelImageSrc: CustDropDownAlertImage.Cancel,
  infoColor: '#FF00FF',
  warnColor: '#C0C0C0',
  errorColor: '#483D8B',
  successColor: '#FF7F50',
};

function CustAlertporpsDemo(): React.JSX.Element {
  const defaultSelected: ListItem = {
    name: 'Default',
    itshould: '',
    color: DropdownAlertColor.Default,
  };
  const [selected, setSelected] = useState(defaultSelected);
  const [processing, setProcessing] = useState(false);
  const [dismissType, setDismissType] = useState("");

  let alert = useRef(
    (_data?: DropdownAlertData) => new Promise<DropdownAlertData>(res => res),
  );
  let dismiss = useRef(() => {});
  const reactNativeLogoSrc: ImageSourcePropType = {
    uri: 'https://reactnative.dev/docs/assets/favicon.png',
  };

  const items: ListItem[] = [
    {
      name: 'Customer Warn #C0C0C0',
      itshould: 'Customer Warn 测试 #C0C0C0',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: custAlertporps,
      color: '#C0C0C0',
    },
    {
      name: 'Customer Info #FF00FF',
      itshould: 'Customer Info 测试 #FF00FF',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: custAlertporps,
      color: '#FF00FF',
    },
    {
      name: 'Customer Success #FF7F50',
      itshould: 'Customer Success 测试 #FF7F50',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: custAlertporps,
      color: '#FF7F50',
    },
    {
      name: 'Customer Error #483D8B',
      itshould: 'Customer Error 测试 #483D8B',
      alertData: {
        type: DropdownAlertType.Error,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: custAlertporps,
      color: '#483D8B',
    },
    {
      name: 'Customer Cancel',
      itshould: 'Customer Cancel 测试',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {...custAlertporps, showCancel: true},
      color: DropdownAlertColor.Success,
    },
    {
      name: ' activeStatusBarBackgroundColor #483D8B',
      itshould: ' activeStatusBarBackgroundColor #483D8B',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        updateStatusBar: true,
        activeStatusBarBackgroundColor: '#483D8B',
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: ' activeStatusBarBackgroundColor (dismiss之后修改状态栏颜色) #AACCFF',
      itshould: ' activeStatusBarBackgroundColor #AACCFF',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        updateStatusBar: true,
        activeStatusBarBackgroundColor: '#AACCFF',
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'inactiveStatusBarBackgroundColor (dismiss之后修改状态栏颜色) #AACCFF',
      itshould: 'inactiveStatusBarBackgroundColor #AACCFF',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        updateStatusBar: true,
        inactiveStatusBarBackgroundColor: '#AACCFF',
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'updateStatusBar: false ',
      itshould: 'updateStatusBar: false  #AACCFF',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        updateStatusBar: false,
        inactiveStatusBarBackgroundColor: '#AACCFF',
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'springAnimationConfig(弹簧效果)',
      itshould: 'springAnimationConfig(弹簧效果)',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        springAnimationConfig: {
          toValue: 40,
          friction: 1,
          useNativeDriver: false,
          isInteraction: false,
        },
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'cancelImageProps',
      itshould: 'cancelImageProps',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        showCancel: true,
        cancelImageProps: {
          source: require('./assets/翻转笑脸_upside-down-face.png'),
          style: {borderColor: 'red', borderRadius: 2},
        },
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'cancelTouchableOpacityProps.activeOpacity=0.8',
      itshould: 'cancelTouchableOpacityProps.activeOpacity=0.8',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        showCancel: true,
        cancelImageProps: {
          source: require('./assets/翻转笑脸_upside-down-face.png'),
          style: {borderColor: 'red', borderRadius: 2},
        },
        cancelTouchableOpacityProps: {
          activeOpacity: 0.8,
        },
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'cancelTouchableOpacityProps.activeOpacity=0.1',
      itshould: 'cancelTouchableOpacityProps.activeOpacity=0.1',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        showCancel: true,
        cancelImageProps: {
          source: require('./assets/翻转笑脸_upside-down-face.png'),
          style: {borderColor: 'red', borderRadius: 2},
        },
        cancelTouchableOpacityProps: {
          activeOpacity: 0.1,
        },
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'alertTouchableOpacityProps.activeOpacity=0.8',
      itshould: 'alertTouchableOpacityProps.activeOpacity=0.8',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        alertTouchableOpacityProps: {
          activeOpacity: 0.8,
        },
      },
      color: DropdownAlertColor.Info,
    },
    {
      name: 'alertTouchableOpacityProps.activeOpacity=0.1',
      itshould: 'alertTouchableOpacityProps.activeOpacity=0.1',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        alertTouchableOpacityProps: {
          activeOpacity: 0.1,
        },
      },
      color: DropdownAlertColor.Info,
    },
    {
      name: 'imageProps 使用其他图片',
      itshould: 'imageProps 使用其他图片',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        imageProps: {
          source: require('./assets/翻转笑脸_upside-down-face.png'),
          style: {borderColor: 'red', borderRadius: 2},
        },
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'textViewProps style:{opacity:0.8}',
      itshould: 'textViewProps style:{opacity:0.8}',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        textViewProps: {
          style: {opacity: 0.8, borderColor: '#CCAABB'},
        },
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'textViewProps style:{opacity:0.4}',
      itshould: 'textViewProps style:{opacity:0.4}',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        textViewProps: {
          style: {opacity: 0.4, borderColor: '#CCAABB'},
        },
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'safeViewProps style:{opacity:0.8}',
      itshould: 'safeViewProps style:{opacity:0.8}',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        safeViewProps: {
          style: {opacity: 0.8, borderColor: '#CCAABB'},
        },
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'safeViewProps style:{opacity:0.4}',
      itshould: 'safeViewProps style:{opacity:0.4}',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        safeViewProps: {
          style: {opacity: 0.4, borderColor: '#CCAABB'},
        },
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'animatedViewProps style:{opacity:0.8}',
      itshould: 'animatedViewProps style:{opacity:0.8}',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        animatedViewProps: {
          style: {opacity: 0.8, borderColor: '#CCAABB'},
        },
        springAnimationConfig: {
          toValue: 40,
          friction: 1,
          useNativeDriver: false,
          isInteraction: false,
        },
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'animatedViewProps style:{opacity:0.4}',
      itshould: 'animatedViewProps style:{opacity:0.4}',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        ...custAlertporps,
        animatedViewProps: {
          style: {opacity: 0.4, borderColor: '#CCAABB'},
        },
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'messageTextProps 10、titleTextProps 12',
      itshould:
        'messageTextProps : {fontSize: 10}、titleTextPropsstyle: style: {fontSize: 12}',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'messageTextProps 10、titleTextProps 12',
        message:
          'messageTextProps : {fontSize: 10}、titleTextPropsstyle: style: {fontSize: 12}',
      },
      alertProps: {
        messageTextProps: {
          style: {fontSize: 10},
        },
        titleTextProps: {
          style: {fontSize: 12},
        },
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'messageTextProps 18、titleTextProps 24',
      itshould:
        'messageTextProps : {fontSize: 18}、titleTextPropsstyle: style: {fontSize: 24}',
      alertData: {
        type: DropdownAlertType.Error,
        title: 'messageTextProps 18、titleTextProps 24',
        message:
          'messageTextProps : {fontSize: 18}、titleTextPropsstyle: style: {fontSize: 24}',
      },
      alertProps: {
        messageTextProps: {
          style: {fontSize: 18},
        },
        titleTextProps: {
          style: {fontSize: 24},
        },
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'renderMessage、renderTitle、renderCancel、renderImage测试',
      itshould: 'renderMessage、renderTitle、renderCancel、renderImage测试',
      alertData: {
        type: DropdownAlertType.Success,
        title:
          'I am title  I am title  I am title  I am title  I am title  I am title  I am title I am title  I am title  I am title',
        message:
          'messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines ',
      },
      alertProps: {
        showCancel: true,
        renderImage: _renderImage,
        renderCancel: _renderCancel,
        renderTitle: _renderTitle,
        renderMessage: _renderMessage,
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'activeStatusBarStyle default',
      itshould: 'activeStatusBarStyle default',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        updateStatusBar: true,
        activeStatusBarStyle: 'default',
      },
      color: DropdownAlertColor.Info,
    },
    {
      name: 'activeStatusBarStyle light-content',
      itshould: 'activeStatusBarStyle light-content',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        updateStatusBar: true,
        activeStatusBarStyle: 'light-content',
      },
      color: DropdownAlertColor.Info,
    },
    {
      name: 'activeStatusBarStyle dark-content',
      itshould: 'activeStatusBarStyle dark-content',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        updateStatusBar: true,
        activeStatusBarStyle: 'dark-content',
      },
      color: DropdownAlertColor.Info,
    },
    {
      name: 'inactiveStatusBarStyle default',
      itshould: 'inactiveStatusBarStyle default',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        updateStatusBar: true,
        inactiveStatusBarStyle: 'default',
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'inactiveStatusBarStyle light-content',
      itshould: 'inactiveStatusBarStyle light-content',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        updateStatusBar: true,
        inactiveStatusBarStyle: 'light-content',
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'inactiveStatusBarStyle dark-content',
      itshould: 'inactiveStatusBarStyle dark-content',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        updateStatusBar: true,
        inactiveStatusBarStyle: 'dark-content',
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'onDismiss test 1',
      itshould: 'onDismiss test',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        showCancel: true,
        onDismissPressDisabled:false,
        onDismissAutomatic: () => {
          _onDismissTypeChange('onDismissAutomatic');
        },
        onDismissPress: () => {
          _onDismissTypeChange('onDismissPress');
        },
        onDismissPanResponder: () => {
          _onDismissTypeChange('onDismissPanResponder');
        },
        onDismissProgrammatic: () => {
          _onDismissTypeChange('onDismissProgrammatic');
        },
        onDismissCancel: () => {
          _onDismissTypeChange('onDismissCancel');
        },
      },
      color: DropdownAlertColor.Error,
      needMessage:true
    },
    {
      name: 'onDismiss test 2',
      itshould: 'onDismiss test 2',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        showCancel: true,
        onDismissPressDisabled:false,
        onDismissAutomatic: () => {
          _onDismissTypeChange('onDismissAutomatic');
        },
        onDismissPress: () => {
          _onDismissTypeChange('onDismissPress');
        },
        onDismissPanResponder: () => {
          _onDismissTypeChange('onDismissPanResponder');
        },
        onDismissProgrammatic: () => {
          _onDismissTypeChange('onDismissProgrammatic');
        },
        onDismissCancel: () => {
          _onDismissTypeChange('onDismissCancel');
        },
        alertPosition: 'bottom',
      },
      color: DropdownAlertColor.Success,
      needMessage:true
    },
    {
      name: 'onDismissPressDisabled:true',
      itshould: 'onDismissPressDisabled:true 无法通过点击使其隐藏',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        showCancel: true,
        onDismissPressDisabled: true,
      },
      color: DropdownAlertColor.Info,
    },
    {
      name: 'panResponderEnabled true',
      itshould: 'panResponderEnabled true',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        showCancel: true,
        onDismissPressDisabled: true,
        panResponderEnabled: true,
        alertPosition: 'bottom',
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'panResponderEnabled false',
      itshould: 'panResponderEnabled false',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        showCancel: true,
        onDismissPressDisabled: true,
        panResponderEnabled: false,
        alertPosition: 'bottom',
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'translucent:true',
      itshould: 'translucent:true',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        updateStatusBar: true,
        translucent: true,
        activeStatusBarBackgroundColor: '#483D8B',
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'translucent false',
      itshould: 'translucent false',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        updateStatusBar: true,
        translucent: false,
        activeStatusBarBackgroundColor: '#483D8B',
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'panResponderDismissDistance -20',
      itshould: 'panResponderDismissDistance -20',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        alertPosition: 'bottom',
        onDismissPressDisabled: true,
        panResponderDismissDistance: -20,
        dismissInterval:1000000

      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'panResponderDismissDistance -80',
      itshould: 'panResponderDismissDistance -80',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLinesmessageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines',
      },
      alertProps: {
        alertPosition: 'bottom',
        onDismissPressDisabled: true,
        panResponderDismissDistance: -80,
        dismissInterval:1000000
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'animatedViewStyle backgroundColor: red',
      itshould: 'animatedViewStyle backgroundColor: red',
      alertData: {
        //type: DropdownAlertType.Error,
        title: 'I am title',
        message: 'animatedViewStyle: {backgroundColor: red},',
      },
      alertProps: {
        animatedViewStyle: {backgroundColor: 'red'},
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'alertViewStyle backgroundColor: red',
      itshould: 'alertViewStyle backgroundColor: red',
      alertData: {
        type: DropdownAlertType.Error,
        title: 'I am title',
        message: 'alertViewStyle: {backgroundColor: red},',
      },
      alertProps: {
        alertViewStyle: {backgroundColor: 'red'},
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'safeViewStyle backgroundColor: blue',
      itshould: 'safeViewStyle backgroundColor: blue',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message: 'safeViewStyle: {backgroundColor: blue},',
      },
      alertProps: {
        safeViewStyle: {backgroundColor: 'blue'},
      },
      color: DropdownAlertColor.Warn,
    },{
      name: 'textViewStyle backgroundColor: 	#A52A2A',
      itshould: 'textViewStyle backgroundColor: 	#A52A2A',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: 'textViewStyle: {backgroundColor: 	#A52A2A},',
      },
      alertProps: {
        textViewStyle: {backgroundColor: '#A52A2A'},
      },
      color: DropdownAlertColor.Success,
    },{
      name: 'cancelViewStyle backgroundColor: #F08080',
      itshould: 'cancelViewStyle backgroundColor: #F08080',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'I am title',
        message: 'cancelViewStyle: {backgroundColor: #F08080},',
      },
      alertProps: {
        showCancel:true,
        cancelViewStyle: {backgroundColor: '#F08080'},
      },
      color: DropdownAlertColor.Info,
    },{
      name: 'titleTextStyle backgroundColor: #F08080',
      itshould: 'titleTextStyle backgroundColor: #F08080',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'I am title',
        message: '(I am message )titleTextStyle: {backgroundColor: #F08080},',
      },
      alertProps: {
        titleTextStyle: {backgroundColor: '#F08080'},
      },
      color: DropdownAlertColor.Success,
    },{
      name: 'messageTextStyle backgroundColor: #F08080',
      itshould: 'messageTextStyle backgroundColor: #F08080',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message: '(I am message )messageTextStyle: {backgroundColor: #F08080},',
      },
      alertProps: {
        messageTextStyle: {backgroundColor: '#F08080'},
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'imageStyle backgroundColor: #F08080',
      itshould: 'imageStyle backgroundColor: #F08080',
      alertData: {
        type: DropdownAlertType.Error,
        title: 'I am title',
        message: '(I am message )imageStyle: {backgroundColor: #F08080},',
      },
      alertProps: {
        imageStyle: {backgroundColor: '#F08080'},
      },
      color: DropdownAlertColor.Error,
    },{
      name: 'cancelImageStyle backgroundColor: #F08080',
      itshould: 'cancelImageStyle backgroundColor: #F08080',
      alertData: {
        type: DropdownAlertType.Error,
        title: 'I am title',
        message: '(I am message )cancelImageStyle: {backgroundColor: #F08080},',
      },
      alertProps: {
        showCancel:true,
        cancelImageStyle: {backgroundColor: '#F08080'},
      },
      color: DropdownAlertColor.Error,
    },
  ];
  function _renderImage() {
    return (
      <View>
        <Text>I am renderImage</Text>
      </View>
    );
  }
  function _renderMessage() {
    return (
      <View>
        <Text>I am renderMessage</Text>
      </View>
    );
  }
  function _renderTitle() {
    return (
      <View>
        <Text>I am renderTitle</Text>
      </View>
    );
  }
  function _renderCancel() {
    return (
      <View>
        <Text>I am renderCancel</Text>
      </View>
    );
  }
  function _onDismissTypeChange(onDismissType: string) {
    setDismissType(onDismissType);
  }
  function _onSelect(item: ListItem): void {
    setSelected(item);
    setTimeout(async () => {
      setProcessing(true);
      await alert.current(item.alertData);
      setProcessing(false);
    }, 10);
  }

  return (
    <View>
      <DropdownAlert
        alert={func => (alert.current = func)}
        dismiss={func => (dismiss.current = func)}
        {...selected.alertProps}
      />
      <ScrollView>
        <Tester>
          <TestSuite name="本页演示alertProps 自定义颜色、图片和其他支持自定义的属性">
            {items.map((item: ListItem, index: number) => {
              return item.needMessage?(<TestCase itShould={item.itshould} key={index}>
                <Text>dismiss type:{dismissType}</Text>
                <TouchableOpacity
                  style={[styles.item, {backgroundColor: item.color}]}
                  onPress={() => _onSelect(item)}
                  disabled={processing}>
                  <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
              </TestCase>):(
                <TestCase itShould={item.itshould} key={index}>
                  <TouchableOpacity
                    style={[styles.item, {backgroundColor: item.color}]}
                    onPress={() => _onSelect(item)}
                    disabled={processing}>
                    <Text style={styles.name}>{item.name}</Text>
                  </TouchableOpacity>
                </TestCase>
              );
            })}
          </TestSuite>
        </Tester>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F4F3E9',
  },
  item: {
    padding: 12,
    margin: 4,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'whitesmoke',
  },
  alertView: {
    padding: 8,
    backgroundColor: '#6441A4',
  },
});

export default CustAlertporpsDemo;
