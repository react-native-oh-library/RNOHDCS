import React from 'react';
import { View, Text, Button, Switch, StyleSheet, Alert } from 'react-native';
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
import { ColorPickerSlider } from './ColorPickerSlider';

export class ExampleVertical extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      color: toHsv('green'),
      oldColor: 'purple',
      isControlled: true,
      hideSliders: false,
    };
    this.onColorChange = this.onColorChange.bind(this);
  }

  onColorChange(color) {
    if (this.state.isControlled) {
      this.setState({ color });
    }
  }

  toggleOldColor = () => {
    this.setState(prevState => ({
      oldColor: prevState.oldColor === 'purple' ? '#FFD700' : 'purple'
    }));
  }

  toggleSliders = () => {
    this.setState(prevState => ({
      hideSliders: !prevState.hideSliders
    }));
  }

  render() {
    const hexColor = fromHsv(this.state.color);

    const pickerProps = {};
    if (this.state.isControlled) {
      pickerProps.color = this.state.color;
      pickerProps.onColorChange = this.onColorChange;
    } else {
      pickerProps.defaultColor = 'red';
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native Color Picker - Modified</Text>
        
        <View style={styles.controls}>
          <View style={styles.controlRow}>
            <Text style={styles.controlText}>fromHsv Result:</Text>
            <Text style={[styles.colorPreviewText, { color: this.state.isControlled ? hexColor : 'red' }]}>
              {this.state.isControlled ? hexColor : '(uncontrolled)'}
            </Text>
          </View>

          <View style={styles.controlRow}>
            <Text style={styles.controlText}>
              Mode: {this.state.isControlled ? 'Controlled' : "Uncontrolled (defaultColor='red')"}
            </Text>
            <Switch
              value={this.state.isControlled}
              onValueChange={isControlled => this.setState({ isControlled, color: toHsv('green') })}
            />
          </View>

          <View style={styles.controlRow}>
            <Text style={styles.controlText}>
              滑动条: {this.state.hideSliders ? '隐藏' : '显示 (自定义组件)'}
            </Text>
            <Switch
              value={!this.state.hideSliders}
              onValueChange={showSliders => this.setState({ hideSliders: !showSliders })}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={this.state.hideSliders ? '#f5dd4b' : '#f4f3f4'}
            />
          </View>
          
          <Button
            title={`Toggle 'oldColor' (Current: ${this.state.oldColor})`}
            onPress={this.toggleOldColor}
            color="#841584"
          />
        </View>

        <ColorPicker
          key={`${this.state.isControlled ? 'controlled' : 'uncontrolled'}-${this.state.hideSliders}`}
          {...pickerProps}
          oldColor={this.state.oldColor}
          onColorSelected={color => Alert.alert('Color selected:', color)}
          onOldColorSelected={color => Alert.alert('Old color selected:', color)}
          hideSliders={this.state.hideSliders}
          sliderComponent={this.state.hideSliders ? undefined : ColorPickerSlider}
          style={{flex: 1}}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#212021'
  },
  title: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  controls: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  controlText: {
    color: 'white'
  },
  colorPreviewText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  statusInfo: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  statusText: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 5,
  }
});