import React, { useState } from 'react';
import {View, TouchableOpacity, Text, Button, Easing } from 'react-native';
import Popover, {PopoverMode, PopoverPlacement, Rect } from 'react-native-popover-view';

const PopoverDemo = () => {
    const [showPopoverA, setShowPopoverA] = useState(false);
    const [showPopoverB, setShowPopoverB] = useState(false);
    const [showPopoverC, setShowPopoverC] = useState(false);
    const [onOpenStart, setOnOpenStart] = useState(111);
    const [onOpenComplete, setOnOpenComplete] = useState(111);
    const [onCloseStart, setOnCloseStart] = useState(111);
    const [onCloseComplete, setOnCloseComplete] = useState(111);
    const [offsetValue, setOffsetValue] = useState(10);
    return (
        <View>
            <TouchableOpacity>
                <Text>test:from、isVisible</Text>
                <Button
                title= 'testA'
                onPress= {() => setShowPopoverA(true)}
                color= '#841584'
                />
            </TouchableOpacity>
            <Popover
              from= {new Rect(5,100,20,40)}
              isVisible= {showPopoverA}
              onRequestClose={() => {setShowPopoverA(false)}}
              >
              <Text>This is the contents of the popoverA</Text>
              <Text>This is the contents of the popoverB</Text>
              <Text>This is the contents of the popoverC</Text>
            </Popover>
            <TouchableOpacity>
                <Text>test:mode、offset、placement、popoverShift、popoverStyle、backgroundStyle、arrowSize、arrowShift、animationConfig</Text>
                <Button
                onPress = {() => setShowPopoverB(true)}
                title = 'testB'
                color = '#cc15cc'
                />
            </TouchableOpacity>
            <Popover
              from = {new Rect(5,100,20,40)}
              isVisible = {showPopoverB}
              mode = {PopoverMode.RN_MODAL}
              offset = {10}
              placement= {PopoverPlacement.TOP}
              popoverShift= {{x:1}}
              popoverStyle= {{backgroundColor: '#f00'}}
              backgroundStyle= {{backgroundColor: '#00f'}}
              arrowSize= {{width:30,height:8}}
              arrowShift= {2}
              animationConfig= {{duration: 600,easing:Easing.inOut(Easing.quad)}}
              onRequestClose= {() => {setShowPopoverB(false)}}
              >
              <Text>This is the contents of the popoverB</Text>
            </Popover>

            <TouchableOpacity>
                <Text>test:displayArea、displayAreaInsets、onOpenStart、onOpenComplete、onRequestClose、onCloseStart、onCloseComplete、onPositionChange、debug</Text>
                <Button
                onPress = {() => setShowPopoverC(true)}
                title = 'testC'
                color = '#87cc94'
                />
            </TouchableOpacity>
            <Popover
              from = {new Rect(5,100,20,40)}
              isVisible = {showPopoverC}
              offset = {offsetValue}
              debug = {true}
              displayArea = {new Rect(50,50,50,50)}
              displayAreaInsets = {{top:20}}
              verticalOffset = {20}
              onOpenStart = {() => {setOnOpenStart(222)}}
              onOpenComplete= {() => {setOnOpenComplete(222)}}
              onRequestClose= {() => {setShowPopoverC(false)}}
              onCloseStart= {() => {setOnCloseStart(222)}}
              onCloseComplete= {() => {setOnCloseComplete(222)}}
              onPositionChange= {() => {setOnCloseStart(222)}}
            >
              <Text>This is the contents of the popoverC</Text>
            </Popover>
            <Text>onOpenStart {onOpenStart}</Text>
            <Text>onOpenComplete {onOpenComplete}</Text>
            <Text>onCloseStart {onCloseStart}</Text>
            <Text>onCloseComplete {onCloseComplete}</Text>
            <Text>onPositionChange {offsetValue}</Text>
            <Button
            onPress = {() => setOffsetValue(offsetValue === 10 ? 20 : 10)}
            title = 'change position'
            color = '#876664'
            />
        </View>
      );
}

export default PopoverDemo;