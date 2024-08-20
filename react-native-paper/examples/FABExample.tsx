import React,{useRef} from 'react';
import { View ,StyleSheet, ScrollView} from 'react-native';
import { FAB,Button, AnimatedFAB, MD2Colors } from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

type FABOpen = {
  [key: string]: boolean | undefined;
};

type AnimatedFABExtended = {
  [key: string]: boolean | undefined;
};

function FABText() { 

  const [open, setOpen] = React.useState<FABOpen>({});
  const _getOpen = (name: string) => !!open[name];
  const _showOpen = (name: string) => () =>
  setOpen({ ...open, [name]: !open[name] });

  const [extended, setExtended] = React.useState<AnimatedFABExtended>({});
  const _getExtended = (name: string) => !!extended[name];
  const _showExtended = (name: string) => () =>
  setExtended({ ...extended, [name]: !extended[name] });

  const _onPress = ()=> {
    if(icon === 'plus') {
      setIcon('email')
    } else {
      setIcon('plus')
    }
  }

  const _onPress1 = ()=> {
    if(icon1 === 'plus') {
      setIcon1('email')
    } else {
      setIcon1('plus')
    }
  }

  const _onPress2 = ()=> {
    console.info('fuction onPress')
  }

  const _onLongPress =() => {
    console.info('fuction onLongPress')
  }

    // 创建一个ref，它将被用来引用View组件  
  const viewRef = useRef(null); 
  // 你可以使用这个ref来访问View组件，例如测量其尺寸  
  const measureView = () => {  
    if (viewRef.current) {  
      // 这里只是为了演示如何访问ref  
      console.log('View is referenced');
    }  
  };  
  const [icon , setIcon ] = React.useState<string>('plus');
  const [icon1 , setIcon1 ] = React.useState<string>('plus');

  React.useState<boolean>(false);


  const FabProps = [
    {
      key: 'fab style:icon={"plus"}',
      value: {
        icon:'plus',
        style:styles.fab
      },
    },
    {
      key: 'fab style:label={"Remind"}',
      value: {
        icon:'plus',
        style:styles.fab,
        label: 'Remind',
      },
    },
    {
      key: 'fab style:label={"Email"}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        uppercase:true,
      },
    },
    {
      key: 'fab style:uppercase={true}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        uppercase:true,
      },
    },
    {
      key: 'fab style:uppercase={false}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        uppercase:false,
      },
    },
    {
      key: 'fab style:background={color:"red"}(该属性只在Android上生效)',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        background:{color:'red'},
      },
    },
    {
      key: 'fab style:accessibilityLabel={"accessibility Label"}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        accessibilityLabel:'accessibility Label',
      },
    },
    {
      key: 'fab style:accessibilityState={disabled:true}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        accessibilityState:{disabled:true},
      },
    },
    {
      key: 'fab style:animated={true}',
      value: {
        icon:icon,
        style:styles.fab,
        label: 'Email',
        animated:true,
        onPress:_onPress
      },
    },
    {
      key: 'fab style:animated={false}',
      value: {
        icon:icon1,
        style:styles.fab,
        label: 'Email',
        animated:false,
        onPress:_onPress1
      },
    },
    {
      key: 'fab style:color={"red"}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        color:'red'
      },
    },
    {
      key: 'fab style:rippleColor={"red"}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onPress:_onPress2,
        rippleColor:'red'
      },
    },
    {
      key: 'fab style:disabled={true}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onPress:_onPress2,
        disabled:true
      },
    },
    {
      key: 'fab style:disabled={false}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onPress:_onPress2,
        disabled:false
      },
    },
    {
      key: 'fab style:visible={true}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onPress:_onPress2,
        visible:true
      },
    },
    {
      key: 'fab style:visible={false}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onPress:_onPress2,
        visible:false
      },
    },
    {
      key: 'fab style:loading={true}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onPress:_onPress2,
        loading:true
      },
    },
    {
      key: 'fab style:loading={false}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onPress:_onPress2,
        loading:false
      },
    },
    {
      key: 'fab fuction:onPress',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onPress:_onPress,
      },
    },
    {
      key: 'fab fuction:onLongPress',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onLongPress:_onLongPress,
      },
    },
    {
      key: 'fab style:delayLongPress={1000} (延时长按1秒)',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onLongPress:_onLongPress,
        delayLongPress:1000
      },
    },
    {
      key: 'fab style:delayLongPress={10000} (延时长按10秒)',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        onLongPress:_onLongPress,
        delayLongPress:10000
      },
    },
    {
      key: 'fab style:size = {"small"}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        size :'small' as 'small' | 'medium' | 'large'
      },
    },
    {
      key: 'fab style:size = {"medium"}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        size :'medium' as 'small' | 'medium' | 'large'
      },
    },
    {
      key: 'fab style:size = {"large"}',
      value: {
        icon:'email',
        style:styles.fab,
        label: 'Email',
        size :'large' as 'small' | 'medium' | 'large'
      },
    },
    {
      key: 'fab style:mode = {"flat"}',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        mode :'flat' as 'flat' | 'elevated'
      },
    },
    {
      key: 'fab style:mode = {"elevated"}',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        mode :'elevated' as 'flat' | 'elevated'
      },
    },
    {
      key: 'fab style:variant = {"primary"}',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        variant :'primary' as 'primary' | 'secondary' | 'tertiary' | 'surface'
      },
    },
    {
      key: 'fab style:variant = {"secondary"}',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        variant :'secondary' as 'primary' | 'secondary' | 'tertiary' | 'surface'
      },
    },
    {
      key: 'fab style:variant = {"tertiary"}',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        variant :'tertiary' as 'primary' | 'secondary' | 'tertiary' | 'surface'
      },
    },
    {
      key: 'fab style:variant = {"surface"}',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        variant :'surface' as 'primary' | 'secondary' | 'tertiary' | 'surface'
      },
    },
    {
      key: 'fab style:labelMaxFontSizeMultiplier = 1',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        labelMaxFontSizeMultiplier:1
      },
    },
    {
      key: 'fab style:labelMaxFontSizeMultiplier = 2',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        labelMaxFontSizeMultiplier:2
      },
    },
    {
      key: 'fab style:styles.fab',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
      },
    },
    {
      key: 'fab style:Theme { colors: { primary: "green"} }',
      value: {
        icon:'email',
        style:styles.fab,
        label:'Email',
        theme:{ colors: { primary: 'green' } }
      },
    },
  ]

  const [isExtended, setIsExtended] = React.useState(false);

  const onPress = () => {
    console.info('console fuction Pressed')
  }

  const AnimatedFABProps = [
    {
      key: ' AnimatedFAB style:icon={"plus"} label={"Label"}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:uppercase={true}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        uppercase:true,
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:uppercase={false}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        uppercase:false,
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:background={color:MD2Colors.red100}(该属性仅限于Android)',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        background:{color:MD2Colors.red100},
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:accessibilityLabel={"accessibilityLabel1"}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        accessibilityLabel:"accessibilityLabel1",
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:accessibilityLabel={"accessibilityLabel2"}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        accessibilityLabel:"accessibilityLabel2",
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:accessibilityState={disabled:true}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        accessibilityState:{disabled:true},
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:color={"red"}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        color:'red',
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:color={"blue"}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        color:'blue',
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:rippleColor={MD2Colors.red100}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        rippleColor:MD2Colors.red100,
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:rippleColor={MD2Colors.blue100}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        rippleColor:MD2Colors.blue100,
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:disabled={true}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        disabled:true,
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:disabled={false}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        disabled:false,
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:visible={true}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        visible:true,
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:visible={false}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        iconMode:'static' as 'static' | 'dynamic',
        visible:false,
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB fuction:onPress={_showExtended("AnimatedFAB")}',
      value: {
        icon :'plus',
        label:"label",
        extended:_getExtended('AnimatedFAB'),
        onPress:_showExtended('AnimatedFAB'),
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB fuction:onLongPress={_onLongPress}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        onLongPress:_onLongPress,
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:delayLongPress={1000}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        onLongPress:_onLongPress,
        delayLongPress:1000,
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' AnimatedFAB style:delayLongPress={10000}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        onLongPress:_onLongPress,
        delayLongPress:10000,
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:iconMode={"static"}',
      value: {
        icon :'plus',
        label:"label",
        extended:_getExtended('AnimatedFAB2'),
        onPress:_showExtended('AnimatedFAB2'),
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:animateFrom={"right"}',
      value: {
        icon :'plus',
        label:"label",
        extended:_getExtended('AnimatedFAB3'),
        onPress:_showExtended('AnimatedFAB3'),
        animateFromL:'right' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:iconMode={"left"}',
      value: {
        icon :'plus',
        label:"label",
        extended:_getExtended('AnimatedFAB4'),
        onPress:_showExtended('AnimatedFAB4'),
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:extended={_getExtended("AnimatedFAB22")}',
      value: {
        icon :'plus',
        label:"label",
        extended:_getExtended('AnimatedFAB22'),
        onPress:_showExtended('AnimatedFAB22'),
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:labelMaxFontSizeMultiplier={1}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        labelMaxFontSizeMultiplier:1,
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:labelMaxFontSizeMultiplier={2}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        labelMaxFontSizeMultiplier:2,
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:variant={"primary"}',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        variant :"primary" as 'primary' | 'secondary' | 'tertiary' | 'surface',
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:styles.fabStyle',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle
      },
    },
    {
      key: ' iconMode style:theme ={ colors: { primary:"green" } }',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle,
        theme:{ colors: { primary: 'green' } }
      },
    },
    {
      key: ' iconMode style:testID ="testID1"',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle,
        testID:"testID1"
      },
    },
    {
      key: ' iconMode style:testID ="testID2"',
      value: {
        icon :'plus',
        label:"label",
        extended:false,
        onPress:_onPress,
        animateFromL:'left' as 'left' | 'right',
        iconMode:'static' as 'static' | 'dynamic',
        style:styles.fabStyle,
        testID:"testID2"
      },
    },
  ]


  const actions = [
    { icon: 'plus', onPress: () => console.log('Pressed add') },
    {
      icon: 'star',
      label: 'Star',
      onPress: () => console.log('Pressed star'),
    },
    {
      icon: 'email',
      label: 'Email',
      onPress: () => console.log('Pressed email'),
    },
    {
      icon: 'bell',
      label: 'Remind',
      onPress: () => console.log('Pressed notifications'),
    },
  ]

  const FABGroupProps = [
    {
      key: ' FABGroup style:actions={actions}',
      value: {
        open:_getOpen('FABGroup'),
        visible:true,
        icon:_getOpen('FABGroup') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup'),
        onPress:_onPress2
      },
    },
    {
      key: ' FABGroup style:icon={getOpen("FABGroup1") ? "calendar-today" : "plus"}',
      value: {
        open:_getOpen('FABGroup1'),
        visible:true,
        icon:_getOpen('FABGroup1') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup1'),
        onPress:_onPress2
      },
    },
    {
      key: ' FABGroup style:accessibilityLabel={"accessibilityLabel"}',
      value: {
        open:_getOpen('FABGroup2'),
        visible:true,
        icon:_getOpen('FABGroup2') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup2'),
        onPress:_onPress2,
        accessibilityLabel:'accessibilityLabel'
      },
    },
    {
      key: ' FABGroup style:accessibilityLabel={"accessibilityLabel1"}',
      value: {
        open:_getOpen('FABGroup3'),
        visible:true,
        icon:_getOpen('FABGroup3') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup3'),
        onPress:_onPress2,
        accessibilityLabel:'accessibilityLabel1'
      },
    },
    {
      key: ' FABGroup style:color={"red"}',
      value: {
        open:_getOpen('FABGroup4'),
        visible:true,
        icon:_getOpen('FABGroup4') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup4'),
        onPress:_onPress2,
        color:'red'
      },
    },
    {
      key: ' FABGroup style:color={"blue"}',
      value: {
        open:_getOpen('FABGroup4'),
        visible:true,
        icon:_getOpen('FABGroup4') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup4'),
        onPress:_onPress2,
        color:'blue'
      },
    },
    {
      key: ' FABGroup style:backdropColor={"red"}',
      value: {
        open:_getOpen('FABGroup5'),
        visible:true,
        icon:_getOpen('FABGroup5') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup5'),
        onPress:_onPress2,
        backdropColor:'red'
      },
    },
    {
      key: ' FABGroup style:backdropColor={"blue"}',
      value: {
        open:_getOpen('FABGroup6'),
        visible:true,
        icon:_getOpen('FABGroup6') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup6'),
        onPress:_onPress2,
        backdropColor:'blue'
      },
    },
    {
      key: ' FABGroup style:rippleColor={MD2Colors.red100}',
      value: {
        open:_getOpen('FABGroup7'),
        visible:true,
        icon:_getOpen('FABGroup7') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup7'),
        onPress:_onPress2,
        rippleColor:MD2Colors.red100
      },
    },
    {
      key: ' FABGroup style:rippleColor={MD2Colors.blue100}',
      value: {
        open:_getOpen('FABGroup8'),
        visible:true,
        icon:_getOpen('FABGroup8') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup8'),
        onPress:_onPress2,
        rippleColor:MD2Colors.blue100
      },
    },
    {
      key: ' FABGroup style:onPress={_onPress2}',
      value: {
        open:_getOpen('FABGroup9'),
        visible:true,
        icon:_getOpen('FABGroup9') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup9'),
        onPress:_onPress2,
      },
    },
    {
      key: ' FABGroup style:onLongPress={_onLongPress}',
      value: {
        open:_getOpen('FABGroup10'),
        visible:true,
        icon:_getOpen('FABGroup10') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup10'),
        onLongPress:_onLongPress,
      },
    },
    {
      key: ' FABGroup style:toggleStackOnLongPress={true}',
      value: {
        open:_getOpen('FABGroup11'),
        visible:true,
        icon:_getOpen('FABGroup11') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup11'),
        onLongPress:_onLongPress,
        toggleStackOnLongPress:true
      },
    },
    {
      key: ' FABGroup style:toggleStackOnLongPress={false}',
      value: {
        open:_getOpen('FABGroup12'),
        visible:true,
        icon:_getOpen('FABGroup12') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup12'),
        onLongPress:_onLongPress,
        toggleStackOnLongPress:false
      },
    },
    {
      key: ' FABGroup style:delayLongPress={10000}',
      value: {
        open:_getOpen('FABGroup13'),
        visible:true,
        icon:_getOpen('FABGroup13') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup13'),
        onLongPress:_onLongPress,
        delayLongPress:10000
      },
    },
    {
      key: ' FABGroup style:delayLongPress={100000}',
      value: {
        open:_getOpen('FABGroup14'),
        visible:true,
        icon:_getOpen('FABGroup14') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup14'),
        onLongPress:_onLongPress,
        delayLongPress:100000
      },
    },
    {
      key: ' FABGroup style:enableLongPressWhenStackOpened={true}',
      value: {
        open:_getOpen('FABGroup15'),
        visible:true,
        icon:_getOpen('FABGroup15') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup15'),
        onLongPress:_onLongPress,
        enableLongPressWhenStackOpened:true
      },
    },
    {
      key: ' FABGroup style:enableLongPressWhenStackOpened={false}',
      value: {
        open:_getOpen('FABGroup16'),
        visible:true,
        icon:_getOpen('FABGroup16') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup16'),
        onLongPress:_onLongPress,
        enableLongPressWhenStackOpened:false
      },
    },
    {
      key: ' FABGroup style:open={_getOpen("FABGroup17")}',
      value: {
        open:_getOpen('FABGroup17'),
        visible:true,
        icon:_getOpen('FABGroup17') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup17'),
        onLongPress:_onLongPress,
      },
    },
    {
      key: ' FABGroup style:onStateChange={_showOpen("FABGroup18")}',
      value: {
        open:_getOpen('FABGroup18'),
        visible:true,
        icon:_getOpen('FABGroup18') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup18'),
        onLongPress:_onLongPress,
      },
    },
    {
      key: ' FABGroup style:visible={true}',
      value: {
        open:_getOpen('FABGroup20'),
        visible:true,
        icon:_getOpen('FABGroup20') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup20'),
      },
    },
    {
      key: ' FABGroup style:visible={false}',
      value: {
        open:_getOpen('FABGroup21'),
        visible:false,
        icon:_getOpen('FABGroup21') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup21'),
      },
    },
    {
      key: ' FABGroup style:{backgroundColor:MD2Colors.yellow500}',
      value: {
        open:_getOpen('FABGroup22'),
        visible:true,
        icon:_getOpen('FABGroup22') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup23'),
        style:{backgroundColor:MD2Colors.yellow500}
      },
    },
    {
      key: ' FABGroup fabStyle:{backgroundColor:MD2Colors.yellow500}',
      value: {
        open:_getOpen('FABGroup23'),
        visible:true,
        icon:_getOpen('FABGroup23') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup23'),
        fabStyle:{backgroundColor:MD2Colors.yellow500}
      },
    },
    {
      key: ' FABGroup style :variant = {"primary"}',
      value: {
        open:_getOpen('FABGroup24'),
        visible:true,
        icon:_getOpen('FABGroup24') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup24'),
        variant :'primary' as 'primary' | 'secondary' | 'tertiary' | 'surface'
      },
    },
    {
      key: ' FABGroup style :variant = {"secondary"}',
      value: {
        open:_getOpen('FABGroup25'),
        visible:true,
        icon:_getOpen('FABGroup25') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup25'),
        variant :'secondary' as 'primary' | 'secondary' | 'tertiary' | 'surface'
      },
    },
    {
      key: ' FABGroup style :variant = {"tertiary"}',
      value: {
        open:_getOpen('FABGroup26'),
        visible:true,
        icon:_getOpen('FABGroup26') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup26'),
        variant :'tertiary' as 'primary' | 'secondary' | 'tertiary' | 'surface'
      },
    },
    {
      key: ' FABGroup style :variant = {"surface"}',
      value: {
        open:_getOpen('FABGroup27'),
        visible:true,
        icon:_getOpen('FABGroup27') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup27'),
        variant :'surface' as 'primary' | 'secondary' | 'tertiary' | 'surface'
      },
    },
    {
      key: ' FABGroup style :theme = { colors: { primary: "green" } }',
      value: {
        open:_getOpen('FABGroup28'),
        visible:true,
        icon:_getOpen('FABGroup28') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup28'),
        theme :{ colors: { primary: 'green' } }
      },
    },
    {
      key: ' FABGroup style :label = {"label"}',
      value: {
        open:_getOpen('FABGroup29'),
        visible:true,
        icon:_getOpen('FABGroup29') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup29'),
        label :'label'
      },
    },
    {
      key: ' FABGroup style :label = {"label1"}',
      value: {
        open:_getOpen('FABGroup30'),
        visible:true,
        icon:_getOpen('FABGroup30') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup30'),
        label :'label1'
      },
    },
    {
      key: ' FABGroup style :testID = {"testID1"}',
      value: {
        open:_getOpen('FABGroup31'),
        visible:true,
        icon:_getOpen('FABGroup31') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup31'),
        testID :'testID1'
      },
    },
    {
      key: ' FABGroup style :testID = {"testID2"}',
      value: {
        open:_getOpen('FABGroup31'),
        visible:true,
        icon:_getOpen('FABGroup31') ? 'calendar-today' : 'plus',
        actions:actions,
        onStateChange:_showOpen('FABGroup31'),
        testID :'testID2'
      },
    },
  ]

  return (
    <ScrollView>
      <Tester>
      <TestSuite name='FAB' >
         <TestCase itShould={'fab style:ref={viewRef}'}  >
         <FAB
            icon="email"
            label='Email'
            style={styles.fab}
            ref={viewRef}
            onPress={() => console.log('Pressed')}/>
         <Button onPress={measureView} >Press me</Button>  
         </TestCase>
          {FabProps.map((item) => {
              return (
                <TestCase itShould={item.key}  key={item.key}>
                    <FAB {...item.value}/>
              </TestCase>
              );
          })},
          {AnimatedFABProps.map((item) => {
              return (
                <TestCase itShould={item.key}  key={item.key}>
                <View style={styles.container}>
                  <AnimatedFAB {...item.value}/>
                </View>
              </TestCase>
              );
          })},
          {FABGroupProps.map((item) => {
              return (
                <TestCase itShould={item.key}  key={item.key}>
                  <View style={styles.container}>
                  <FAB.Group {...item.value}/>
                  </View>
              </TestCase>
              );
          })},
      </TestSuite>
      </Tester>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    height:100,
  },
    fab: {
      margin: 16,
      right: 0,
      bottom: 0,
    },
    fabStyle: {
      bottom: 16,
      right: 16,

    },
  });  

export default FABText ;