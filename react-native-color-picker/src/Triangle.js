import React from 'react'
import { View, Text, Button, Switch, StyleSheet, Alert } from 'react-native'
import { TriangleColorPicker, toHsv, fromHsv } from 'react-native-color-picker'

export class ExampleTriangle extends React.Component {

  constructor(...args) {
    super(...args)
    this.state = {
      color: toHsv('green'),
      oldColor: 'purple',
      hideControls: false,
      isControlled: true,
    }
    this.onColorChange = this.onColorChange.bind(this)
  }

  onColorChange(color) {
    if (this.state.isControlled) {
      this.setState({ color })
    }
  }

  toggleOldColor = () => {
    this.setState(prevState => ({
      oldColor: prevState.oldColor === 'purple' ? '#FFD700' : 'purple'
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
              onValueChange={isControlled => this.setState({ isControlled })}
            />
          </View>
          
          <View style={styles.controlRow}>
            <Text style={styles.controlText}>Toggle `hideControls`</Text>
            <Switch
              value={this.state.hideControls}
              onValueChange={hide => this.setState({ hideControls: hide })}
            />
          </View>
          <Button
            title={`Toggle 'oldColor' (Current: ${this.state.oldColor})`}
            onPress={this.toggleOldColor}
            color="#841584"
          />
        </View>

        <TriangleColorPicker
          key={this.state.isControlled ? 'controlled' : 'uncontrolled'}
          {...pickerProps}
          oldColor={this.state.oldColor}
          hideControls={this.state.hideControls}
          onColorSelected={color => Alert.alert('Color selected:', color)}
          onOldColorSelected={color => Alert.alert('Old color selected:', color)}
          style={{flex: 1}}
        />
      </View>
    )
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
  }
});