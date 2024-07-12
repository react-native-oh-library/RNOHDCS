
import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,Button
} from 'react-native';

import { BaseDialog,PickerView } from 'react-native-pickers';

class PickerView_ extends PickerView {

    static defaultProps = {
        
    }

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

        <PickerView
            itemTextColor= {this.state.itemTextColor}
            itemSelectedColor={this.state.itemSelectedColor}
            itemHeight= {this.state.itemHeight}
            selectedIndex= {this.state.selectedIndex}

            onPickerSelected={(isOK) => { stateString.current.onPickerSelected = 'pass 返回值:'+isOK }} 
            />
          <Button title='关闭' onPress={()=>{ 
            this.dismiss(() => {
              
            });
          }}></Button>

        </View >
    }

}

export default PickerView_;