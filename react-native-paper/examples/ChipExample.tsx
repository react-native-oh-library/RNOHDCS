import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Image, Alert, ScrollView } from 'react-native';
import {
  Chip,
  MD2Theme,
  MD3Theme,
  useTheme,
  MD2Colors,
  MD3Colors,
  Icon
} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function ChipText() {
  const [snackbarProperties, setSnackbarProperties] = React.useState({
    visible: false,
    text: '',
  });
  const [selected, setSelected] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const { isV3 } = useExampleTheme();
  const customColor = isV3 ? MD3Colors.error50 : MD2Colors.purple900;
  const handlePress = () => {
    setSelected(!selected);
  };

  const handlePress1 = () => {
    setIsSelected(!isSelected);
  };

  const selectedStyle = {
    // 这里可以添加你想要的选中状态样式，比如背景色、边框等  
    backgroundColor: 'rgba(0, 0, 255, 0.2)', // 示例：半透明蓝色背景  
  };

  const longText = '这是一段非常长的文本内容，用于演示ellipsizeMode属性';

  const text = '123456'; 

  return (
    <Tester>
      <ScrollView>
        <TestSuite name='Chip' >
          <TestCase itShould='Default'>
            <Chip icon="information" onPress={() => console.log('Pressed')} selected={true}>Example Chip</Chip>
          </TestCase>
          <TestCase itShould='outlined'>
            <Chip mode='outlined' icon="heart" selected={true}>ChipExample</Chip>
          </TestCase>

          <TestCase itShould='avatar'>
              <Chip
              avatar={
                <Image
                  source={require('../assets/images/avatar.png')}
                  accessibilityIgnoresInvertColors
                />
              }
              selected={selected}
              onPress={handlePress}
              onClose={() =>
                setSnackbarProperties({
                  visible: true,
                  text: 'Avatar close button pressed',
                })
              }
              style={styles.chip}
              selectedColor={customColor}
            >
              Avatar(selected)
            </Chip>
          </TestCase>

          <TestCase itShould='Use "elevated" mode to display stereoscopic effects'>
            <Chip
                mode="outlined" // 使用 'elevated' 模式来显示立体效果  
                style={isSelected ? [styles.chip, selectedStyle] : styles.chip} // 根据 isSelected 应用样式  
                onPress={handlePress1}
              >
                Chip Content
              </Chip>
              <Chip
              mode="flat" // 或者 'elevated', 'outlined'  
              onPress={handlePress1}
              style={{ margin: 8 }}
              background={{ color: "#f0f0f0" }}
              accessibilityLabel="My Chip"
              closeIconAccessibilityLabel="Close icon accessibility label">
              {/* 当 Chip 被选中时显示勾选图标 */}
              {isSelected && <Icon size={16} color="green" source={undefined} />}
              showSelectedCheck
            </Chip>
            </TestCase>

            <TestCase itShould='rippleColor'>
             <Chip
              mode="outlined" // 或者 'outlined'  
              rippleColor="red" // 设置涟漪颜色为红色  
              onPress={() => console.log('Chip pressed!')}
              style={{ margin: 8 }}
            >
              Chip Content
            </Chip>
            </TestCase>


            <TestCase itShould='Chip closed '>
            <Chip
              icon="close"
              onClose={() => {Alert.alert('closed Chip')}}
              closeIconAccessibilityLabel="Close chip"
              >
              Example Chip
            </Chip>
            </TestCase>

            <TestCase itShould='Compact chip '>
            <Chip compact={true} style={styles.chip} onPress={() => { Alert.alert('compact') }}>
              Compact chip
             </Chip>
            </TestCase>

            <TestCase itShould='Elevated chip '>
              <Chip elevated={true} onPress={() => { }} style={styles.chip} onLongPress={() => { Alert.alert('Elevated') }}>
                Elevated
              </Chip>
            </TestCase>

            <TestCase itShould='custom chip '>
              <Chip
                onPress={() => { }}
                style={styles.chip}
                textStyle={styles.tiny}>
                With custom size
              </Chip>
            </TestCase>

            <TestCase itShould='ellipsizeMode chip '>
              <Chip
                onPress={() => { }}
                ellipsizeMode="head"
              >
              Chips
              </Chip>
            </TestCase>

            <TestCase itShould='longText chip '>
            <Chip ellipsizeMode="tail" style={{ margin: 8 }}>  
              {longText}  
              </Chip> 
            </TestCase>

            <TestCase itShould='maxFontSizeMultiplier chip '>
            <Chip maxFontSizeMultiplier={0.1} style={{ width: 80, margin: 8 }}>  
               {text}  
             </Chip> 
            </TestCase>

        </TestSuite>
      </ScrollView> 
    </Tester>
  ) 
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  chip: {
    margin: 4,
  },
  tiny: {
    marginVertical: 2,
    marginRight: 2,
    marginLeft: 2,
    minHeight: 19,
    lineHeight: 19,
  },
  bigTextFlex: {
    flex: 1,
    backgroundColor:'red'
  },
  bigTextStyle: {
    flex: -1,
  },
  fullWidthChip: {
    marginVertical: 4,
    marginHorizontal: 12,
  },
  customBorderRadius: {
    borderRadius: 16,
  },
});

export default ChipText;