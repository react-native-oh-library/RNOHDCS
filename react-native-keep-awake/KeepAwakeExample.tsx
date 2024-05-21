import React, { useState, useEffect } from 'react';
import {
  Text,
  Button,
} from 'react-native';

import KeepAwake , { activateKeepAwake,deactivateKeepAwake,useKeepAwake} from 'react-native-keep-awake'

export function KeepAwakeExample() {
    useKeepAwake();

    const handleClick = (buttonId: number) => {
        switch (buttonId) {
            case 1:
                deactivateKeepAwake();
                break;
            case 2:
                activateKeepAwake();
                break;
            case 3:
                deactivateKeepAwake();
                break;
            case 4:
                KeepAwake.activate();
                break;
            case 5:
                KeepAwake.deactivate();
                break;
            default:
                break;
        }
    };

    return (
        <>
          <Text style={{color:"blue"}}>Button 1:hook默认方法开启(常亮),----useKeepAwake(),点击按键1关闭常亮</Text>
          <Button title='Button 1' onPress={() => handleClick(1)} ></Button>

          <Text style={{color:"blue"}}>Button 2:functions方法开启----activateKeepAwake()</Text>
          <Button title='Button 2' onPress={() => handleClick(2)}></Button>

          <Text style={{color:"blue"}}>Button 3:function方法关闭----deactivateKeepAwake()</Text>
          <Button title='Button 3' onPress={() => handleClick(3)}></Button>

          <Text style={{color:"blue"}}>Button 4:老接口方法----KeepAwake.activate()</Text>
          <Button title='Button 4' onPress={() => handleClick(4)}></Button>

          <Text style={{color:"blue"}}>Button 5:老接口方法----KeepAwake.deactivate()</Text>
          <Button title='Button 5' onPress={() => handleClick(5)}></Button>
        </>
      );

}
