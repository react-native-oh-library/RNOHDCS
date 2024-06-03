import React from 'react';
import { StyleSheet,Text, View, ScrollView } from 'react-native';
import LoginScreen2 from './Screen2';
import LoginScreen3 from './Screen3';

type LoginComponentProps = {};

const Login: React.FunctionComponent<LoginComponentProps> = () => {
  return (
    <>
      <Text style={styles.titleStyle}>Login Example</Text>
      <View style={styles.container}>
        <ScrollView>
          <LoginScreen2 />
          <LoginScreen3 />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },  
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  }
});

export default Login;
