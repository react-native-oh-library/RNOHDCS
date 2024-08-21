import React, { useState,useRef } from 'react';
import { StyleSheet, ScrollView, Image, Pressable,Text } from 'react-native';
import BouncyCheckbox, { BouncyCheckboxHandle } from "react-native-bouncy-checkbox";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

export default function BouncyCheckboxExample() {
    const [checkboxState, setCheckboxState] = React.useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('black');
    const [isLongPressed, setIsLongPressed] = useState(false);

    const handleCheckboxLongPress = (checked) => {
        setIsLongPressed(true); 
    };

    const CustomText = ({ children }) => (
        <Text style={styles.customText}>{children}</Text>
    );

    const handleCheckboxPress = (checked) => {
        setIsLongPressed(false);
        setIsChecked(!isChecked);  
        // 根据状态更改背景颜色  
        setBackgroundColor(isChecked ? 'black' : 'red');  
    };

    const CustomImageComponent = () => {
        return (
            <Image
                source={require("./assets/good.png")}
                style={{ height: 15, width: 15 }}
            />
        );
    };

    const CustomTouchable = ({ children, onPress }) => {
        return (
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#d1d1d1' : '#6200ee' },
                ]}
            >
            </Pressable>
        );
    };

    return <ScrollView style={styles.container}>
        <Tester>
        <TestSuite name='isChecked'>
            <TestCase itShould="test BouncyCheckbox isChecked property with value 'false'">
                <BouncyCheckbox
                    isChecked={ false }
                />
            </TestCase>
            <TestCase itShould="test BouncyCheckbox isChecked property with value 'true'">
                    <BouncyCheckbox
                     isChecked={true}
                    />
            </TestCase>
        </TestSuite>
    

   
        <TestSuite name='onPress'>
            <TestCase itShould="test BouncyCheckbox onPress function">
                    <BouncyCheckbox
                    text="Press me!"
                    isChecked={isChecked}
                    onPress={handleCheckboxPress}
                    iconStyle={{  
                        borderColor: 'green',  
                        backgroundColor: backgroundColor, 
                      }}  
                    />
            </TestCase>
            </TestSuite>
        
            
               <TestSuite name='onLongPress'>
                 <TestCase itShould="test BouncyCheckbox onLongPress function">
                    <BouncyCheckbox
                    text="Long press me!"
                    unFillColor="#FFFFFF"
                    onPress={handleCheckboxPress}
                    onLongPress={handleCheckboxLongPress}
                    fillColor={isLongPressed ? "#000000" : "#FF0000"} 
                    />
                 </TestCase>
            </TestSuite>
     

    
        <TestSuite name='text'>
            <TestCase itShould="test BouncyCheckbox text with value 'Hello World'">
                    <BouncyCheckbox
                    text="Hello World!"
                    />
                </TestCase>
                </TestSuite>
      

    
        <TestSuite name='disableText'>
                <TestCase itShould="test BouncyCheckbox disableText property with value 'false'">
                <BouncyCheckbox
                    text="hello world!"
                    disableText={false}
                    />
            </TestCase>
                <TestCase itShould="test BouncyCheckbox disableText property with value 'true'">
                <BouncyCheckbox
                    text="hello world!"
                    disableText={true}
                    />
            </TestCase>
            </TestSuite>
     

   
        <TestSuite name='textComponent'>
            <TestCase itShould="test BouncyCheckbox textComponent property'">
                <BouncyCheckbox
                    textComponent={<CustomText>LOVE YOU! BABY</CustomText>}
                />
            </TestCase>
            </TestSuite>
     

  
        <TestSuite name='size'>
                <TestCase itShould="test BouncyCheckbox size property with value 35">
                    <BouncyCheckbox
                    size={35}
                    />
            </TestCase>
            </TestSuite>
      

   
        <TestSuite name='style'>
                <TestCase itShould="test BouncyCheckbox style property">
                    <BouncyCheckbox
                    text="please press me"
                    style={styles.checkbox}
                    />
            </TestCase>
            </TestSuite>
        

           
            <TestSuite name='textStyle'>
                    <TestCase itShould="test BouncyCheckbox textStyle property">
                <BouncyCheckbox
                    text="please press me!"
                    textStyle={styles.textStyle}
                    />
            </TestCase>
            </TestSuite>
           

         
            <TestSuite name='iconStyle'>
                <TestCase itShould="test BouncyCheckbox iconStyle property">
                    <BouncyCheckbox
                    iconStyle={{
                        borderColor: "green",
                        borderWidth: 8,
                        borderRadius: 0
                    }}
                    />
            </TestCase>
            </TestSuite>
           

        
            <TestSuite name='innerIconStyle'>
                <TestCase itShould="test BouncyCheckbox innerIconStyle property">
                    <BouncyCheckbox
                    innerIconStyle={{ borderWidth: 5, borderColor: "red" }}
                    />
            </TestCase>
            </TestSuite>
           

          
            <TestSuite name='fillColor'>
                <TestCase itShould="test BouncyCheckbox fillColor property with value 'black'">
                    <BouncyCheckbox
                    isChecked={true}
                    fillColor={'black'}
                    />
            </TestCase>
            </TestSuite>
          

          
            <TestSuite name='unFillColor'>
                <TestCase itShould="test BouncyCheckbox unFillColor property with value 'red'">   
                    <BouncyCheckbox
                    isChecked={false}
                    unFillColor={'red'}
                    />
            </TestCase>
            </TestSuite>
           


           
            <TestSuite name='iconComponent'>
                <TestCase itShould="test BouncyCheckbox iconComponent property">
                    <BouncyCheckbox
                    iconComponent={
                        <Image
                            style={{ height: 15, width: 15 }}
                            source={require("./assets/fuck.png")}
                        />
                    }
                    />
            </TestCase>
            </TestSuite>
           

         
            <TestSuite name='checkIconImageSource'>
                <TestCase itShould="test BouncyCheckbox checkIconImageSource property">
                    <BouncyCheckbox
                    isChecked={checkboxState}
                    onPress={() => setCheckboxState(!checkboxState)}
                    checkIconImageSource={require("./assets/good.png")}
                    />
            </TestCase>
            </TestSuite>
        

        
            <TestSuite name='textContainerStyle'>
                <TestCase itShould="test BouncyCheckbox textContainerStyle property">
                    <BouncyCheckbox
                    textContainerStyle={styles.textContainer}
                    />
            </TestCase>
            </TestSuite>
           
          
            <TestSuite name='ImageComponent'>
                <TestCase itShould="test BouncyCheckbox ImageComponent property">
                    <BouncyCheckbox
                        ImageComponent={CustomImageComponent}
                    />
            </TestCase>
            </TestSuite>
          

           
            <TestSuite name='TouchableComponent'>
                <TestCase itShould="test BouncyCheckbox TouchableComponent property">
                    <BouncyCheckbox
                    TouchableComponent={CustomTouchable}
            />
            </TestCase>
            </TestSuite>
          

           
            <TestSuite name='bounceEffectIn'>
            <TestCase itShould="test BouncyCheckbox bounceEffectIn property with value '0.3'">
                    <BouncyCheckbox
                    bounceEffectIn={0.3}
                    />
            </TestCase>
            </TestSuite>
          

           
            <TestSuite name='bounceEffectOut'>
            <TestCase itShould="test BouncyCheckbox bounceEffectOut property with value '2'">
            <BouncyCheckbox
                    bounceEffectIn={2}
            />
            </TestCase>
            </TestSuite>
        

        
            <TestSuite name='bounceVelocityIn'>
                <TestCase itShould="test BouncyCheckbox bounceVelocityIn property with value '0.5'">
                    <BouncyCheckbox
                    bounceEffectIn={0.5}
                    />
            </TestCase>
            </TestSuite>
        

      
            <TestSuite name='bounceVelocityOut'>
                <TestCase itShould="test BouncyCheckbox bounceVelocityOut property with value '0.2'">
                    <BouncyCheckbox
                    bounceEffectIn={0.2}
                    />
            </TestCase>
            </TestSuite>
          

       
            <TestSuite name='bouncinessIn'>
            <TestCase itShould="test BouncyCheckbox bouncinessIn property with value '40'">
                <BouncyCheckbox
                    bounceEffectIn={40}
                />
            </TestCase>
            </TestSuite>
        

        
            <TestSuite name='bouncinessOut'>
                <TestCase itShould="test BouncyCheckbox bouncinessOut property with value '40'">
                    <BouncyCheckbox
                    bounceEffectIn={40}
                    />
                    </TestCase>
                    </TestSuite>
                </Tester>
            </ScrollView>
}

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
        },

        iconImageStyle: {
            width: 20,
            height: 20,

        },
        textContainer: {
            backgroundColor: 'lightblue',
            borderWidth: 5,
            borderColor: 'black',
            padding: 5,
        },
        textStyle: {
            fontSize: 30,
            color: '#010101',
            fontWeight: '600',
            textDecorationLine: "none",
        },
        customText: {
            fontSize: 18,
            color: 'green',
            marginLeft: 29, // �ڸ�ѡ����ı�֮������һЩ���
        },
        checkbox: {
            margin: 10,                    
            borderWidth: 1,                 
            borderColor: '#007aff',         
            borderRadius: 5,                 
            padding: 5,                 
        },  
        button: {
            padding: 25,
            borderRadius: 25,     },
    })