import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CheckBox from 'react-native-check-box'

type Props = {};
export default class CheckBoxDemo extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      isChecked:true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <CheckBox
            style={{flex: 1, padding: 70}}
            onClick={()=>{
              this.setState({
                  isChecked:!this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            rightText={"CheckBox"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#F5FCFF',
  }
});