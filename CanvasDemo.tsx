import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Canvas, { Image as CanvasImage, CanvasRenderingContext2D, Path2D } from 'react-native-canvas';

const CanvasDemo = () => {

  const canvasRef = useRef<Canvas>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 300;
      canvas.height = 500;
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;

      // 绘制背景
      context.fillStyle = 'gray';
      context.fillRect(0, 0, 1000, 1000);

      //绘制矩形
      context.fillStyle = 'blue';
      context.fillRect(10, 10, 100, 100);

      //绘制椭圆
      const ellipse = new Path2D(canvas);
      ellipse.ellipse(200, 60, 50, 30, 0, 0, 2 * Math.PI);
      context.fillStyle = 'green';
      context.fill(ellipse);

      //绘制线条
      context.beginPath();
      context.moveTo(10, 150);
      context.lineTo(150, 150);
      context.strokeStyle = 'red';
      context.stroke();

      // 绘制文字
      context.font = 'bold 24px Arial';
      context.fillStyle = 'orange';
      context.fillText('Hello World', 20, 200);

      //绘制图片
      const image = new CanvasImage(canvas);
      image.src = 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF';
      image.addEventListener('load', () => {
        context.drawImage(image, 10, 250, 100, 100);
      });
    }
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Canvas Demo Start</Text>
        <Canvas ref={canvasRef} style={styles.canvas} />
        <Text style={styles.title}>Canvas Demo End</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  canvas: {
    width: 300,
    height: 500,
    backgroundColor: 'blue',
  },
});

export default CanvasDemo;
