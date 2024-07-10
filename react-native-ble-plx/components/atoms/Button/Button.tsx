/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, TouchableOpacity,Text} from 'react-native'
// import { Container, StyledText } from './Button.styled'

interface AppButtonProps {
  label: string;
  onPress?: () => void;
  disabled?: boolean; // 可选的disabled属性，用于禁用按钮
}

export const AppButton: React.FC<AppButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.6} // 按下时的不透明度
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff304d',
    margin: 5,
    padding: 12,
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
