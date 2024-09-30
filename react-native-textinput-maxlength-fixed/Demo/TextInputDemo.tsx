import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';
import { multiply } from 'react-native-textinput-maxlength-fixed';

export default function TextInputDemo() {
  const [result1, setResult1] = React.useState<number | undefined>();
  const [result2, setResult2] = React.useState<number | undefined>();
  const [result3, setResult3] = React.useState<number | undefined>();
  const [result4, setResult4] = React.useState<number | undefined>();
  const [result5, setResult5] = React.useState<number | undefined>();
  const [result6, setResult6] = React.useState<number | undefined>();
  const [result7, setResult7] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(2, 5).then(setResult1);
    multiply(3, -4).then(setResult2);
    multiply(-6, -7).then(setResult3);
    multiply(0, 8).then(setResult4);
    multiply(9, 0).then(setResult5);
    multiply(4.7, 3.8).then(setResult6);
    multiply(7.08, 2.94).then(setResult7);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.topText}>multiply 2 x 5 = {result1}</Text>
        <Text style={styles.middleText}>multiply 3 x -4 = {result2}</Text>
        <Text style={styles.middleText}>multiply -6 x -7 = {result3}</Text>
        <Text style={styles.middleText}>multiply 0 x 8 = {result4}</Text>
        <Text style={styles.middleText}>multiply 9 x 0 = {result5}</Text>
        <Text style={styles.middleText}>multiply 4.7 x 3.8 = {result6}</Text>
        <Text style={styles.middleText}>multiply 7.08 x 2.94 = {result7}</Text>
        <Text style={styles.bottomText}>TextInput maxLength:6</Text>
        <TextInput maxLength={6} style={styles.textInput} />
        <Text style={styles.bottomText}>TextInput maxLength:12</Text>
        <TextInput maxLength={12} style={styles.textInput} />
        <Text style={styles.bottomText}>TextInput</Text>
        <TextInput style={styles.textInput} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50
  },
  topText: {
    width: 200,
    height: 20,
  },
  middleText: {
    width: 200,
    height: 20,
  },
  bottomText: {
    width: 200,
    height: 20,
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: '#000000',
    borderWidth: 1,
  },
});
