import React, { useState } from "react";
import { StyleSheet,View,Image } from 'react-native';
import BouncyCheckbox from  "react-native-bouncy-checkbox";

export default function BouncyCheckboxwy () {
  const [checkboxState, setCheckboxState] = React.useState(false);
  return (
  <View style={styles.container}>      
  <BouncyCheckbox
        bounceEffectIn={0.3}
        bounceEffectOut={1}
        bounceVelocityIn={0.5}
        bounceVelocityOut={0.8}
        bouncinessIn={30}
        bouncinessOut={30}
        size={80}
        text="please press me!"
        textStyle={styles.textstyle}
        style={styles.container}
        textContainerStyle={styles.textContainer}
        fillColor={'black'}
        unFillColor={"red"}
        innerIconStyle={{ borderWidth: 5,borderColor:"black"}}
        isChecked={checkboxState}
        iconComponent={
            <Image
              style={{ height: 105, width: 105}}
              source={require("./assets/smile.png")}
            />
          }
        onPress={() => setCheckboxState(!checkboxState)}
      />
        </View>
 
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
   textContainer:{
    backgroundColor: 'lightblue',
    borderWidth: 5,
    borderColor: 'black',
    padding: 5,
  },
  textstyle: {
    fontSize: 30,
    color: '#010101',
    fontWeight: '600',
    textDecorationLine: "none",
  }
}); 