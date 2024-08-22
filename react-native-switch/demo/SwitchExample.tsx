import React, { useState } from "react";
import { Switch } from "react-native-switch";
import {SafeAreaView, StyleSheet,Button, Text, View, Alert} from 'react-native';


export function SwitchDemo(){
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (val:boolean) => {setIsEnabled(val) };
  
  return(
    <View  style={styles.container}>
      <Text style={{fontSize:32}}>Welcome to React Native !</Text>
      <Switch
        value={isEnabled}
        onValueChange={(val) => toggleSwitch((val))}
        disabled={false}
        activeText={'On'}
        inActiveText={'Off'}
        circleSize={30}
        barHeight={30}
        circleBorderWidth={3}
        backgroundActive={'green'}
        backgroundInactive={'gray'}
        circleActiveColor={'#30a566'}
        circleInActiveColor={'#fff'}
        renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
        innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
        outerCircleStyle={{ }} // style for outer animated circle
        renderActiveText={true}
        renderInActiveText={true}
        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
        switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
        switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
      />
      <Text style={{color:'gray',fontSize:20,marginBottom:10}}>To get started,edit index.harmony.js</Text>
      <Text style={{color:'gray',fontSize:20}}>Press Cmd +R to reload,</Text>
      <Text style={{color:'gray',fontSize:20}}>Cmd+D or shake for dev menu</Text>
    </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"#fff",
      
    }
  });