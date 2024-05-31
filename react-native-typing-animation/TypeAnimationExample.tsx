import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';

const TypingAnimationDemo = () => {
  const [isTyping, setIsTyping] = useState(false);

  const startTyping = () => {
    setIsTyping(true);
    // 模拟用户输入，5秒后停止打字动画
    setTimeout(() => {
      setIsTyping(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startTyping} style={styles.button}>
        <Text style={styles.buttonText}>测试按钮</Text>
      </TouchableOpacity>

      <View style={styles.animationContainer}>
        {isTyping && (
          <>
            <Text style={styles.text}>正在输入中...</Text>
            <TypingAnimation
              style={styles.typingAnimation} // 自定义整体打字动画容器的样式
              dotColor="blue" // 光标颜色
              dotStyles={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'pink'}} // 光标样式
              dotRadius={10} // 光标半径
              dotMargin={20} // 光标之间的间距
              dotAmplitude={5} // 光标振幅
              dotSpeed={0.15} // 光标速度
              dotY={6} // 光标在 Y 轴上的偏移
              dotX={12} // 光标在 X 轴上的偏移
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  animationContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  typingAnimation: {
    flexDirection: 'row', // 设置为水平方向排列光标
  },
});

export default TypingAnimationDemo;
