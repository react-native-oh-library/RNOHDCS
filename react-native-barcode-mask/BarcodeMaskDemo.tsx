import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import { Camera, useCameraDevice, useCameraFormat, useCameraPermission } from 'react-native-vision-camera';

function PropertiesTestDemo() {
  const [width, setWidth] = useState(280);
  const [height, setHeight] = useState(230);
  const [edgeWidth, setEdgeWidth] = useState(20);
  const [edgeHeight, setEdgeHeight] = useState(20);

  const [edgeColor, setEdgeColor] = useState('#FFF');
  const [edgeBorderWidth, setEdgeBorderWidth] = useState(4);
  const [edgeRadius, setEdgeRadius] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');
  const [outerMaskOpacity, setOuterMaskOpacity] = useState(0.6);

  const [showAnimatedLine, setShowAnimatedLine] = useState(true);
  const [animatedLineColor, setAnimatedLineColor] = useState('#FFF');
  const [animatedLineHeight, setAnimatedLineHeight] = useState(2);
  const [animatedLineWidth, setAnimatedLineWidth] = useState('85%');
  const [lineAnimationDuration, setLineAnimationDuration] = useState(1500);
  const [animatedLineOrientation, setAnimatedLineOrientation] = useState('horizontal');
  const [useNativeDriver, setUseNativeDriver] = useState(true);

  const [layoutInfo, setLayoutInfo] = useState(null);
  const [componentKey, setComponentKey] = useState(0);

  const [isCameraReady, setIsCameraReady] = useState(false);

  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    { videoResolution: { width: 3048, height: 2160 } },
    { fps: 60 },
  ]);
  const { hasPermission, requestPermission } = useCameraPermission();
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const getPermission = async () => {
      const permissionGranted = await requestPermission();
      if (permissionGranted) {
        setIsCameraReady(true);
      } else {
        console.log('相机权限被拒绝');
      }
    };

    if (hasPermission) {
      setIsCameraReady(true);
    } else {
      getPermission();
    }
  }, [hasPermission, requestPermission]);

  const handleLayoutMeasured = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    setLayoutInfo(layout);
  };

  const forceRerender = () => {
    setComponentKey(prev => prev + 1);
  };

  const getAnimatedLineProps = () => {
    if (animatedLineOrientation === 'vertical') {
      return {
        animatedLineWidth: animatedLineHeight,
        animatedLineHeight: animatedLineWidth
      };
    } else {
      return {
        animatedLineWidth,
        animatedLineHeight
      };
    }
  };

  const colorOptions = ['#FFF', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
  const backgroundColorOptions = ['rgb(0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(255, 0, 0, 0.3)', 'rgba(0, 255, 0, 0.3)', 'rgba(0, 0, 255, 0.3)', 'rgba(128, 0, 128, 0.4)'];
  const orientationOptions = ['horizontal', 'vertical'];

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <Text style={styles.previewTitle}>实时预览</Text>
        <View style={styles.mockCamera}>
          <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#333' }} />

          {layoutInfo && device && hasPermission ? (
            <View
              style={[
                styles.cameraClip,
                {
                  left: layoutInfo.x - 12,
                  top: layoutInfo.y - 12,
                  width: layoutInfo.width + 24,
                  height: layoutInfo.height + 24,
                  borderRadius: Math.max((edgeRadius || 0) - 4, 0),
                },
              ]}
            >
              <Camera
                style={StyleSheet.absoluteFillObject}
                ref={cameraRef}
                device={device}
                format={format}
                isActive={isCameraReady}
                preview={true}
                photo={true}
              />
            </View>
          ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>
                {hasPermission ? '等待相机初始化...' : '正在请求相机权限...'}
              </Text>
            </View>
          )}

          <View style={{ ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
            <BarcodeMask
              key={componentKey}
              width={width}
              height={height}
              edgeWidth={edgeWidth}
              edgeHeight={edgeHeight}
              edgeColor={edgeColor}
              edgeBorderWidth={edgeBorderWidth}
              edgeRadius={edgeRadius}
              backgroundColor={backgroundColor}
              outerMaskOpacity={outerMaskOpacity}
              showAnimatedLine={showAnimatedLine}
              animatedLineColor={animatedLineColor}
              {...getAnimatedLineProps()}
              lineAnimationDuration={lineAnimationDuration}
              animatedLineOrientation={animatedLineOrientation}
              useNativeDriver={useNativeDriver}
              onLayoutMeasured={handleLayoutMeasured}
            />
          </View>
        </View>

        <View style={styles.layoutInfoContainer}>
          <Text style={styles.layoutText}>
            {layoutInfo
              ? `尺寸: ${Math.round(layoutInfo.width)} x ${Math.round(layoutInfo.height)} | 位置: (${Math.round(layoutInfo.x)}, ${Math.round(layoutInfo.y)})`
              : '等待布局测量...'
            }
          </Text>
          <TouchableOpacity style={styles.quickResetButton} onPress={forceRerender}>
            <Text style={styles.quickResetButtonText}>重新渲染</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.controlPanel} showsVerticalScrollIndicator={false}>
        <View style={styles.controlRow}>
          <View style={styles.controlColumn}>
            <Text style={styles.sectionTitle}>尺寸属性</Text>
            
            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Width: {width}</Text>
              <View style={styles.buttonRow}>
                {[200, 250, 280].map(w => (
                  <TouchableOpacity 
                    key={w} 
                    style={[styles.button, width === w && styles.activeButton]} 
                    onPress={() => {
                      setWidth(w);
                      forceRerender();
                    }}
                  >
                    <Text style={styles.buttonText}>{w}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Height: {height}</Text>
              <View style={styles.buttonRow}>
                {[150, 200, 230].map(h => (
                  <TouchableOpacity 
                    key={h} 
                    style={[styles.button, height === h && styles.activeButton]} 
                    onPress={() => {
                      setHeight(h);
                      forceRerender();
                    }}
                  >
                    <Text style={styles.buttonText}>{h}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Edge Width: {edgeWidth}</Text>
              <View style={styles.buttonRow}>
                {[10, 15, 20, 25, 30].map(ew => (
                  <TouchableOpacity 
                    key={ew} 
                    style={[styles.button, edgeWidth === ew && styles.activeButton]} 
                    onPress={() => setEdgeWidth(ew)}
                  >
                    <Text style={styles.buttonText}>{ew}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Edge Height: {edgeHeight}</Text>
              <View style={styles.buttonRow}>
                {[10, 15, 20, 25, 30].map(eh => (
                  <TouchableOpacity 
                    key={eh} 
                    style={[styles.button, edgeHeight === eh && styles.activeButton]} 
                    onPress={() => setEdgeHeight(eh)}
                  >
                    <Text style={styles.buttonText}>{eh}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.controlColumn}>
            <Text style={styles.sectionTitle}>样式属性</Text>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Edge Color</Text>
              <View style={styles.buttonRow}>
                {colorOptions.map(color => (
                  <TouchableOpacity 
                    key={color} 
                    style={[
                      styles.colorButton, 
                      { backgroundColor: color },
                      edgeColor === color && styles.activeColorButton
                    ]} 
                    onPress={() => setEdgeColor(color)}
                  />
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Border Width: {edgeBorderWidth}</Text>
              <View style={styles.buttonRow}>
                {[1, 2, 4, 6, 8].map(ebw => (
                  <TouchableOpacity 
                    key={ebw} 
                    style={[styles.button, edgeBorderWidth === ebw && styles.activeButton]} 
                    onPress={() => setEdgeBorderWidth(ebw)}
                  >
                    <Text style={styles.buttonText}>{ebw}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Edge Radius: {edgeRadius}</Text>
              <View style={styles.buttonRow}>
                {[0, 5, 10, 15, 20].map(er => (
                  <TouchableOpacity 
                    key={er} 
                    style={[styles.button, edgeRadius === er && styles.activeButton]} 
                    onPress={() => setEdgeRadius(er)}
                  >
                    <Text style={styles.buttonText}>{er}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Background Color</Text>
              <View style={styles.buttonRow}>
                {backgroundColorOptions.map((bgColor, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={[
                      styles.backgroundColorButton, 
                      { backgroundColor: bgColor.includes('rgba') ? bgColor.replace(/rgba?\(([^)]+)\)/, 'rgb($1)').replace(/, 0\.\d+/, '') : bgColor },
                      backgroundColor === bgColor && styles.activeBackgroundColorButton
                    ]} 
                    onPress={() => setBackgroundColor(bgColor)}
                  >
                    <Text style={styles.backgroundColorButtonText}>
                      {index === 0 ? 'Black' : index === 1 ? 'Default' : `Color${index-1}`}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Mask Opacity: {outerMaskOpacity.toFixed(1)}</Text>
              <View style={styles.buttonRow}>
                {[0.2, 0.4, 0.6, 0.8, 1.0].map(omo => (
                  <TouchableOpacity 
                    key={omo} 
                    style={[styles.button, Math.abs(outerMaskOpacity - omo) < 0.01 && styles.activeButton]} 
                    onPress={() => setOuterMaskOpacity(omo)}
                  >
                    <Text style={styles.buttonText}>{omo}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.controlColumn}>
            <Text style={styles.sectionTitle}>动画属性</Text>

            <View style={styles.controlGroup}>
              <View style={styles.switchRow}>
                <Text style={styles.controlLabel}>Show Line</Text>
                <Switch
                  value={showAnimatedLine}
                  onValueChange={(value) => {
                    setShowAnimatedLine(value);
                    forceRerender();
                  }}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={showAnimatedLine ? '#f5dd4b' : '#f4f3f4'}
                />
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Line Color</Text>
              <View style={styles.buttonRow}>
                {colorOptions.map(color => (
                  <TouchableOpacity 
                    key={color} 
                    style={[
                      styles.colorButton, 
                      { backgroundColor: color },
                      animatedLineColor === color && styles.activeColorButton
                    ]} 
                    onPress={() => setAnimatedLineColor(color)}
                  />
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>
                {animatedLineOrientation === 'horizontal' ? 'Line Height (粗细)' : 'Line Width (粗细)'}: {animatedLineHeight}
              </Text>
              <View style={styles.buttonRow}>
                {[1, 2, 3, 4, 6, 8].map(alh => (
                  <TouchableOpacity 
                    key={alh} 
                    style={[styles.button, animatedLineHeight === alh && styles.activeButton]} 
                    onPress={() => setAnimatedLineHeight(alh)}
                  >
                    <Text style={styles.buttonText}>{alh}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>
                {animatedLineOrientation === 'horizontal' ? 'Line Width (长度)' : 'Line Height (长度)'}: {animatedLineWidth}
              </Text>
              <View style={styles.buttonRow}>
                {['50%', '70%', '85%', '100%', 200, 250].map(alw => (
                  <TouchableOpacity 
                    key={alw} 
                    style={[styles.button, animatedLineWidth === alw && styles.activeButton]} 
                    onPress={() => setAnimatedLineWidth(alw)}
                  >
                    <Text style={styles.buttonText}>{alw}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>Duration: {lineAnimationDuration}ms</Text>
              <View style={styles.buttonRow}>
                {[500, 1000, 1500, 2000, 3000].map(lad => (
                  <TouchableOpacity 
                    key={lad} 
                    style={[styles.button, lineAnimationDuration === lad && styles.activeButton]} 
                    onPress={() => {
                      setLineAnimationDuration(lad);
                      forceRerender();
                    }}
                  >
                    <Text style={styles.buttonText}>{lad}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlLabel}>
                Orientation: {animatedLineOrientation} 
                {animatedLineOrientation === 'horizontal' ? ' (横线上下扫)' : ' (竖线左右扫)'}
              </Text>
              <View style={styles.buttonRow}>
                {orientationOptions.map(orientation => (
                  <TouchableOpacity 
                    key={orientation} 
                    style={[styles.button, animatedLineOrientation === orientation && styles.activeButton]} 
                    onPress={() => {
                      setAnimatedLineOrientation(orientation);
                      forceRerender();
                    }}
                  >
                    <Text style={styles.buttonText}>
                      {orientation === 'horizontal' ? '横线↕' : '竖线↔'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.controlGroup}>
              <View style={styles.switchRow}>
                <Text style={styles.controlLabel}>Native Driver</Text>
                <Switch
                  value={useNativeDriver}
                  onValueChange={(value) => {
                    setUseNativeDriver(value);
                    forceRerender();
                  }}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={useNativeDriver ? '#f5dd4b' : '#f4f3f4'}
                />
              </View>
            </View>

          </View>
        </View>
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  previewContainer: {
    height: 450,
    backgroundColor: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  previewTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#1a1a1a',
  },
  mockCamera: {
    flex: 1,
    backgroundColor: '#333',
  },
  layoutInfoContainer: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  layoutText: {
    color: '#FFD93D',
    fontSize: 12,
    fontFamily: 'monospace',
    flex: 1,
  },
  quickResetButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 10,
  },
  quickResetButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  controlPanel: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  controlRow: {
    flexDirection: 'row',
    padding: 10,
  },
  controlColumn: {
    flex: 1,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 5,
  },
  controlGroup: {
    marginBottom: 15,
  },
  controlLabel: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 3,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
  },
  colorButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 3,
    marginBottom: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeColorButton: {
    borderColor: '#007AFF',
  },
  backgroundColorButton: {
    backgroundColor: '#333',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 3,
    borderWidth: 2,
    borderColor: 'transparent',
    minWidth: 45,
  },
  activeBackgroundColorButton: {
    borderColor: '#007AFF',
  },
  backgroundColorButtonText: {
    color: '#fff',
    fontSize: 9,
    textAlign: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#FF6B6B',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    height: 100,
    backgroundColor: 'transparent',
  },
  cameraClip: {
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: '#000',
    borderWidth: 0,
    zIndex: 0,
  },
});

const App = () => {
  return (
    <PropertiesTestDemo />
  );
};

export default App;