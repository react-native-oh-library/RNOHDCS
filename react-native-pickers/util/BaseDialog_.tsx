
import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,Button
} from 'react-native';

import { BaseDialog } from 'react-native-pickers';

class BaseDialog_ extends BaseDialog {

    constructor(props) {
        super(props);
    }

    _getContentPosition() {
        return { justifyContent: 'center', alignItems: 'center' }
    }

    renderContent() {
        return <View style={{
            height: this.getSize(150), width: this.getSize(307),
            backgroundColor: '#ffffff', borderRadius: this.getSize(6)
        }}>
          <Button title='关闭弹窗' onPress={()=>{ 
            this.dismiss(() => {
              
            });
          }}></Button>

        </View >
    }

}

export default BaseDialog_;