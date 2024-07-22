import   Tooltip  from 'react-native-walkthrough-tooltip';
import {Text,StyleSheet,TouchableHighlight, Alert, View} from 'react-native';
import { useState } from 'react';

export function  TooltipCompent (){
const [toolTipVisible,setToolTipVisible] = useState(false);
return(
<Tooltip 
  isVisible={toolTipVisible}
  content={<Text>基本测试!</Text>}
  placement="top"
  onClose={() => setToolTipVisible(false)}
  contentStyle={{margin:5}}
>
  <TouchableHighlight onPress={() => setToolTipVisible(!toolTipVisible)}>
    <Text style={{color:'red',fontWeight:'900'}}>点击基本测试</Text>
  </TouchableHighlight>
</Tooltip>
)
}


export function  TooltipAccessible (props:any){
  const {accessible} =props
  const [toolTipAccessibleVisible,setToolTipAccessibleVisible] = useState(false);
    return(
    <Tooltip 
      isVisible={toolTipAccessibleVisible}
      content={<Text>气泡accessible属性测试!</Text>}
      placement="top"
      onClose={() => setToolTipAccessibleVisible(false)}
      accessible={accessible}
      contentStyle={{margin:5}}
 
    >
      <TouchableHighlight onPress={() => setToolTipAccessibleVisible(!toolTipAccessibleVisible)}>
        <Text style={{color:'red',fontWeight:'900'}}>点击气泡accessible属性测试</Text>
      </TouchableHighlight>
    </Tooltip>
    )
}



export function  TooltipAllowChildInteraction (props:any){
  const {allowChildInteraction} =props
  const [toolTipAllowChildInteractionVisible,setToolTipAllowChildInteractionVisible] = useState(false);
    return(
    <Tooltip 
      isVisible={toolTipAllowChildInteractionVisible}
      content={<Text>气泡allowChildInteraction属性测试!</Text>}
      placement="top"
      onClose={() => setToolTipAllowChildInteractionVisible(false)}
      allowChildInteraction={allowChildInteraction}
      closeOnBackgroundInteraction={false}
      contentStyle={{margin:5}}

    >
      <TouchableHighlight onPress={() => setToolTipAllowChildInteractionVisible(!toolTipAllowChildInteractionVisible)}>
        <Text style={{color:'red',fontWeight:'900'}}>点击气泡allowChildInteraction属性测试</Text>
      </TouchableHighlight>
    </Tooltip>
    )
}

export function  TooltipArrowSize (props:any){
  const {width, height} =props
  const [toolTipArrowSizeVisible,setToolTipArrowSizeVisible] = useState(false);
    return(
    <Tooltip 
      isVisible={toolTipArrowSizeVisible}
      content={<Text>气泡箭头大小属性测试!</Text>}
      placement="top"
      onClose={() => setToolTipArrowSizeVisible(false)}
      arrowSize={{width ,height}}
      contentStyle={{margin:5}}

    >
      <TouchableHighlight onPress={() => setToolTipArrowSizeVisible(!toolTipArrowSizeVisible)}>
        <Text style={{color:'red',fontWeight:'900'}}>点击气泡箭头大小属性测试</Text>
      </TouchableHighlight>
    </Tooltip>
    )
}

export function  TooltipBackgroundColor (props:any){
    const {backgroundColor} =props
    const [toolTipBackgroundColorVisible,setToolTipBackgroundColorVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipBackgroundColorVisible}
        content={<Text>气泡背景色属性测试!</Text>}
        placement="top"
        onClose={() => setToolTipBackgroundColorVisible(false)}
        backgroundColor={backgroundColor}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipBackgroundColorVisible(!toolTipBackgroundColorVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡背景色属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipChildContentSpacing (props:any){
    const {childContentSpacing} =props
    const [toolTipChildContentSpacingVisible,setToolTipChildContentSpacingVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipChildContentSpacingVisible}
        content={<Text>气泡箭头距离属性测试!</Text>}
        placement="top"
        onClose={() => setToolTipChildContentSpacingVisible(false)}
        childContentSpacing={childContentSpacing}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipChildContentSpacingVisible(!toolTipChildContentSpacingVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡箭头距离属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipCloseOnChildInteraction (props:any){
    const {closeOnChildInteraction} =props
    const [toolTipCloseOnChildInteractionVisible,setToolTipCloseOnChildInteractionVisible] = useState(false);
      return(
      <View>
      <Tooltip 
        isVisible={toolTipCloseOnChildInteractionVisible}
        content={<Text>气泡关闭子交互属性测试!</Text>}
        placement="top"
        onClose={() => setToolTipCloseOnChildInteractionVisible(false)}
        closeOnChildInteraction={closeOnChildInteraction}
        contentStyle={{margin:5}}
      >
      <TouchableHighlight onPress={() => setToolTipCloseOnChildInteractionVisible(!toolTipCloseOnChildInteractionVisible)}>
      <Text style={{color:'red',fontWeight:'900'}}>点击气泡关闭子交互属性属性测试</Text>
    </TouchableHighlight>
      </Tooltip>
    </View>
      )
  }
  
  
  export function  TooltipCloseOnContentInteraction (props:any){
    const {closeOnContentInteraction} =props
    const [toolTipCloseOnContentInteractionVisible,setToolTipCloseOnContentInteractionVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipCloseOnContentInteractionVisible}
        content={<Text>气泡触摸内容属性测试!</Text>}
        placement="top"
        onClose={() => setToolTipCloseOnContentInteractionVisible(false)}
        closeOnContentInteraction={closeOnContentInteraction}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipCloseOnContentInteractionVisible(!toolTipCloseOnContentInteractionVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡触摸内容属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipDisplayInsets (props:any){
    const {top,bottom,left,right} =props
    const [toolTipDisplayInsetsVisible,setToolTipDisplayInsetsVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipDisplayInsetsVisible}
        content={<Text>气泡显示插入像素属性测试!</Text>}
        placement="top"
        onClose={() => setToolTipDisplayInsetsVisible(false)}
        displayInsets={{top,bottom,left,right}}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipDisplayInsetsVisible(!toolTipDisplayInsetsVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡显示插入像素属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipDisableShadow (props:any){
    const {disableShadow} =props
    const [toolTipDisableShadowVisible,setToolTipDisableShadowVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipDisableShadowVisible}
        content={<Text>气泡阴影属性测试!</Text>}
        placement="top"
        onClose={() => setToolTipDisableShadowVisible(false)}
        disableShadow={disableShadow}
        contentStyle={{margin:5}}
        backgroundColor='rgba(0,125,50,1)'
      >
        <TouchableHighlight onPress={() => setToolTipDisableShadowVisible(!toolTipDisableShadowVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡阴影属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipPlacement (props:any){
    const {placement} =props
    const [toolTipPlacementVisible,setToolTipPlacementVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipPlacementVisible}
        content={<Text>气泡显示位置属性测试!</Text>}
        onClose={() => setToolTipPlacementVisible(false)}
        placement={placement}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipPlacementVisible(!toolTipPlacementVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡显示位置属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipShowChildInTooltip (props:any){
    const {showChildInTooltip} =props
    const [toolTipShowChildInTooltipVisible,setToolTipShowChildInTooltipVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipShowChildInTooltipVisible}
        content={<Text>气泡子项显示属性测试!</Text>}
        onClose={() => setToolTipShowChildInTooltipVisible(false)}
        showChildInTooltip={showChildInTooltip}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipShowChildInTooltipVisible(!toolTipShowChildInTooltipVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡子项显示属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipSupportedOrientations (props:any){
    const {supportedOrientations} =props
    const [toolTipSupportedOrientationsVisible,setToolTipSupportedOrientationsVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipSupportedOrientationsVisible}
        content={<Text>气泡显示方向属性测试!</Text>}
        onClose={() => setToolTipSupportedOrientationsVisible(false)}
        supportedOrientations={supportedOrientations}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipSupportedOrientationsVisible(!toolTipSupportedOrientationsVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡显示方向属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipTopAdjustment (props:any){
    const {topAdjustment} =props
    const [toolTipTopAdjustmentVisible,setToolTipTopAdjustmentVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipTopAdjustmentVisible}
        content={<Text>气泡顶部调整属性测试!</Text>}
        onClose={() => setToolTipTopAdjustmentVisible(false)}
        topAdjustment={topAdjustment}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipTopAdjustmentVisible(!toolTipTopAdjustmentVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡顶部调整属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipHorizontalAdjustment (props:any){
    const {horizontalAdjustment} =props
    const [toolTipHorizontalAdjustmentVisible,setToolTipHorizontalAdjustmentVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipHorizontalAdjustmentVisible}
        content={<Text>气泡水平调整属性测试!</Text>}
        onClose={() => setToolTipHorizontalAdjustmentVisible(false)}
        horizontalAdjustment={horizontalAdjustment}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setToolTipHorizontalAdjustmentVisible(!toolTipHorizontalAdjustmentVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡水平调整属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipUseInteractionManager (props:any){
    const {useInteractionManager} =props
    const [toolTipUseInteractionManagerVisible,setTooltipUseInteractionManagerVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipUseInteractionManagerVisible}
        content={<Text>气泡交互管理属性测试!</Text>}
        onClose={() => setTooltipUseInteractionManagerVisible(false)}
        useInteractionManager={useInteractionManager}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight  onPress={() => setTooltipUseInteractionManagerVisible(!toolTipUseInteractionManagerVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡交互管理属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }

  export function  TooltipUseReactNativeModal (props:any){
    const {useReactNativeModal} =props
    const [toolTipUseReactNativeModalVisible,setTooltipUseReactNativeModalVisible] = useState(false);
      return(
      <Tooltip 
        isVisible={toolTipUseReactNativeModalVisible}
        content={<Text>气泡ReactNativeModal属性测试!</Text>}
        onClose={() => setTooltipUseReactNativeModalVisible(false)}
        useReactNativeModal={useReactNativeModal}
        contentStyle={{margin:5}}
      >
        <TouchableHighlight onPress={() => setTooltipUseReactNativeModalVisible(!toolTipUseReactNativeModalVisible)}>
          <Text style={{color:'red',fontWeight:'900'}}>点击气泡ReactNativeModal属性测试</Text>
        </TouchableHighlight>
      </Tooltip>
      )
  }




const styles = StyleSheet.create({});