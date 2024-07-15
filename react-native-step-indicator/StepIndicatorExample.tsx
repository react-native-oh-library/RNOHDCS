import * as React from 'react';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import type {StepIndicatorStyles} from 'react-native-step-indicator/lib/typescript/src/types';

type Direction = 'horizontal' | 'vertical' | undefined;

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 30,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f',
};

const arr = [
  'Approval床前明月光疑是地上霜举头望明月',
  'Processing',
  'Shipping',
  'Delivery',
  'Cart',
];

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [labels, setLabels] = React.useState([
    'Approval床前明月光疑是地上霜举头望明月',
    'Processing',
    'Shipping',
    'Delivery',
    'Cart',
  ]);
  const [stepCount, setStepCount] = React.useState(5);
  const [direction, setDirection] = React.useState<Direction>('horizontal');
  const [indicatorStyles, setIndicatorStyles] =
    React.useState<StepIndicatorStyles>({
      stepIndicatorSize: 30,
      currentStepIndicatorSize: 50,
      separatorStrokeWidth: 0,
      separatorStrokeUnfinishedWidth: 10,
      separatorStrokeFinishedWidth: 3,
      stepStrokeWidth: 3,
      currentStepStrokeWidth: 8,
      stepStrokeCurrentColor: '#ff0000',
      stepStrokeFinishedColor: 'yellow',
      stepStrokeUnFinishedColor: '#3dff00',
      separatorFinishedColor: '#00ffea',
      separatorUnFinishedColor: '#00b6ff',
      stepIndicatorFinishedColor: '#636c76',
      stepIndicatorUnFinishedColor: '#b3b3b3',
      stepIndicatorCurrentColor: '#e1e1e1',
      stepIndicatorLabelFontSize: 15,
      currentStepIndicatorLabelFontSize: 15,
      stepIndicatorLabelCurrentColor: '#da00ff',
      stepIndicatorLabelFinishedColor: 'blue',
      stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.3)',
      labelColor: '#ff0050',
      currentStepLabelColor: '#9e9e9e',
      labelSize: 15,
      labelAlign: 'flex-start',
      labelFontFamily: 'Pacifico-Regular',
    });

  const test = React.useRef('');

  const renderStepIndicator = (params: any) => {
    const {position, stepStatus} = params;

    switch (position) {
      case 0: {
        return <Text>你</Text>;
      }
      case 1: {
        return <Text>是</Text>;
      }
      case 2: {
        return <Text>真</Text>;
      }
      case 3: {
        return <Text>的</Text>;
      }
      case 4: {
        return <Text>强</Text>;
      }
      default: {
        return <Text>啊</Text>;
      }
    }
  };

  const onStepPress = (position: number) => {
    setCurrentPage(position);
    test.current = 'pass';
  };

  const renderElement = (title: string, fn: Function) => (
    <TestCase
      itShould={title}
      initialState={false}
      assert={({expect, state}) => {
        expect(state).to.be.true;
      }}
      arrange={({setState}) => (
        <Button
          title={title}
          onPress={() => {
            fn();
            setState(true);
          }}></Button>
      )}></TestCase>
  );

  return (
    <>
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={stepCount}
          customStyles={indicatorStyles}
          currentPosition={currentPage}
          onPress={onStepPress}
          labels={labels}
          direction="horizontal"
        />
      </View>

      <ScrollView>
        <Tester>
          <TestSuite name="react-native-step-indicator">
            <TestCase itShould="onPress 事件函数">
              <Text>{test.current}</Text>
            </TestCase>

            {renderElement('指示器大小 stepIndicatorSize 30 -> 50', () => {
              setIndicatorStyles({...indicatorStyles, stepIndicatorSize: 50});
            })}
            {renderElement('指示器大小 stepIndicatorSize 50 -> 30', () => {
              setIndicatorStyles({...indicatorStyles, stepIndicatorSize: 30});
            })}

            {renderElement(
              '选中的每个指示器大小 currentStepIndicatorSize 50 -> 80',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  currentStepIndicatorSize: 80,
                });
              },
            )}
            {renderElement(
              '选中的每个指示器大小 currentStepIndicatorSize 80 -> 50',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  currentStepIndicatorSize: 50,
                });
              },
            )}

            {renderElement('线的宽度 separatorStrokeWidth 0 -> 10', () => {
              setIndicatorStyles({
                ...indicatorStyles,
                separatorStrokeWidth: 10,
              });
            })}
            {renderElement('线的宽度 separatorStrokeWidth 10 -> 0', () => {
              setIndicatorStyles({
                ...indicatorStyles,
                separatorStrokeWidth: 0,
              });
            })}

            {renderElement(
              '还没完成的线的宽度 separatorStrokeUnfinishedWidth 10 -> 20',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  separatorStrokeUnfinishedWidth: 20,
                });
              },
            )}
            {renderElement(
              '还没完成的线的宽度 separatorStrokeUnfinishedWidth 20 -> 10',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  separatorStrokeUnfinishedWidth: 10,
                });
              },
            )}

            {renderElement(
              '已完成的线的宽度 separatorStrokeFinishedWidth 3 -> 8',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  separatorStrokeFinishedWidth: 8,
                });
              },
            )}
            {renderElement(
              '已完成的线的宽度 separatorStrokeFinishedWidth 8 -> 3',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  separatorStrokeFinishedWidth: 3,
                });
              },
            )}

            {renderElement('指示器的描边宽度 stepStrokeWidth 3 -> 8', () => {
              setIndicatorStyles({...indicatorStyles, stepStrokeWidth: 8});
            })}
            {renderElement('指示器的描边宽度 stepStrokeWidth 8 -> 3', () => {
              setIndicatorStyles({...indicatorStyles, stepStrokeWidth: 3});
            })}

            {renderElement(
              '当前指示器的描边宽度 currentStepStrokeWidth 8 -> 18',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  currentStepStrokeWidth: 18,
                });
              },
            )}
            {renderElement(
              '当前指示器的描边宽度 currentStepStrokeWidth 18 -> 8',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  currentStepStrokeWidth: 8,
                });
              },
            )}

            {renderElement(
              '选中时指示器的描边颜色 stepStrokeCurrentColor #ff0000 -> yellow',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepStrokeCurrentColor: 'yellow',
                });
              },
            )}
            {renderElement(
              '选中时指示器的描边颜色 stepStrokeCurrentColor yellow -> #ff0000',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepStrokeCurrentColor: '#ff0000',
                });
              },
            )}

            {renderElement(
              '结束后指示器的描边颜色 stepStrokeFinishedColor yellow -> red',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepStrokeFinishedColor: 'red',
                });
              },
            )}
            {renderElement(
              '结束后指示器的描边颜色 stepStrokeFinishedColor red -> yellow',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepStrokeFinishedColor: 'yellow',
                });
              },
            )}

            {renderElement(
              '还没被选中的指示器的描边颜色 stepStrokeUnFinishedColor #3dff00 -> green',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepStrokeUnFinishedColor: 'green',
                });
              },
            )}
            {renderElement(
              '还没被选中的指示器的描边颜色 stepStrokeUnFinishedColor green -> #3dff00',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepStrokeUnFinishedColor: '#3dff00',
                });
              },
            )}

            {renderElement(
              '已完成的进度条颜色 separatorFinishedColor #00ffea -> blue',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  separatorFinishedColor: 'blue',
                });
              },
            )}
            {renderElement(
              '已完成的进度条颜色 separatorFinishedColor blue -> #00ffea',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  separatorFinishedColor: '#00ffea',
                });
              },
            )}

            {renderElement(
              '还没完成的进度条颜色 separatorUnFinishedColor #00b6ff -> black',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  separatorUnFinishedColor: 'black',
                });
              },
            )}
            {renderElement(
              '还没完成的进度条颜色 separatorUnFinishedColor black -> #00b6ff',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  separatorUnFinishedColor: '#00b6ff',
                });
              },
            )}

            {renderElement(
              '已完成的指示器填充色 stepIndicatorFinishedColor #636c76 -> pink',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorFinishedColor: 'pink',
                });
              },
            )}
            {renderElement(
              '已完成的指示器填充色 stepIndicatorFinishedColor pink -> #636c76',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorFinishedColor: '#636c76',
                });
              },
            )}

            {renderElement(
              '还没完成的指示器填充色 stepIndicatorUnFinishedColor #b3b3b3 -> grey',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorUnFinishedColor: 'grey',
                });
              },
            )}
            {renderElement(
              '还没完成的指示器填充色 stepIndicatorUnFinishedColor grey -> #b3b3b3',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorUnFinishedColor: '#b3b3b3',
                });
              },
            )}

            {renderElement(
              '当前被选中的指示器填充色 stepIndicatorCurrentColor #e1e1e1 -> #afed64',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorCurrentColor: '#afed64',
                });
              },
            )}
            {renderElement(
              '当前被选中的指示器填充色 stepIndicatorCurrentColor #afed64 -> #e1e1e1',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorCurrentColor: '#e1e1e1',
                });
              },
            )}

            {renderElement(
              '指示器内部的字体大小 stepIndicatorLabelFontSize 15 -> 20',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorLabelFontSize: 20,
                });
              },
            )}
            {renderElement(
              '指示器内部的字体大小 stepIndicatorLabelFontSize 20 -> 15',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorLabelFontSize: 15,
                });
              },
            )}

            {renderElement(
              '当前选中的指示器内部的字体大小 currentStepIndicatorLabelFontSize 15 -> 20',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  currentStepIndicatorLabelFontSize: 20,
                });
              },
            )}
            {renderElement(
              '当前选中的指示器内部的字体大小 currentStepIndicatorLabelFontSize 20 -> 15',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  currentStepIndicatorLabelFontSize: 15,
                });
              },
            )}

            {renderElement(
              '当前选中的指示器内部字体颜色 stepIndicatorLabelCurrentColor #da00ff -> red',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorLabelCurrentColor: 'red',
                });
              },
            )}
            {renderElement(
              '当前选中的指示器内部字体颜色 stepIndicatorLabelCurrentColor red -> #da00ff',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorLabelCurrentColor: '#da00ff',
                });
              },
            )}

            {renderElement(
              '已经结束的指示器内部字体颜色 stepIndicatorLabelFinishedColor blue -> red',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorLabelFinishedColor: 'red',
                });
              },
            )}
            {renderElement(
              '已经结束的指示器内部字体颜色 stepIndicatorLabelFinishedColor red -> blue',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorLabelFinishedColor: 'blue',
                });
              },
            )}

            {renderElement(
              '还没结束的指示器内部字体颜色 stepIndicatorLabelUnFinishedColor rgba(255,255,255,0.3) -> red',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorLabelUnFinishedColor: 'red',
                });
              },
            )}
            {renderElement(
              '还没结束的指示器内部字体颜色 stepIndicatorLabelUnFinishedColor red -> rgba(255,255,255,0.3)',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.3)',
                });
              },
            )}

            {renderElement('label字体颜色 labelColor #ff0050 -> black', () => {
              setIndicatorStyles({...indicatorStyles, labelColor: 'black'});
            })}
            {renderElement('label字体颜色 labelColor black -> #ff0050', () => {
              setIndicatorStyles({...indicatorStyles, labelColor: '#ff0050'});
            })}

            {renderElement(
              '当前选中的label 字体颜色 currentStepLabelColor #9e9e9e -> red',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  currentStepLabelColor: 'red',
                });
              },
            )}
            {renderElement(
              '当前选中的label 字体颜色 currentStepLabelColor red -> #9e9e9e',
              () => {
                setIndicatorStyles({
                  ...indicatorStyles,
                  currentStepLabelColor: '#9e9e9e',
                });
              },
            )}

            {renderElement('label 字体大小 labelSize 15 -> 30', () => {
              setIndicatorStyles({...indicatorStyles, labelSize: 30});
            })}
            {renderElement('label 字体大小 labelSize 30 -> 15', () => {
              setIndicatorStyles({...indicatorStyles, labelSize: 15});
            })}

            {renderElement(
              'label 对其方式 labelAlign flex-start -> center',
              () => {
                setIndicatorStyles({...indicatorStyles, labelAlign: 'center'});
              },
            )}
            {renderElement(
              'label 对其方式 labelAlign center -> flex-start',
              () => {
                setIndicatorStyles({...indicatorStyles, labelAlign: 'flex-start'});
              },
            )}

            {renderElement(
              'label 字体样式 labelFontFamily Pacifico-Regular -> ""',
              () => {
                setIndicatorStyles({...indicatorStyles, labelFontFamily: ''});
              },
            )}
            {renderElement(
              'label 字体样式 labelFontFamily "" -> Pacifico-Regular',
              () => {
                setIndicatorStyles({...indicatorStyles, labelFontFamily: 'Pacifico-Regular'});
              },
            )}

            {renderElement('设置有多少步 stepCount 5 -> 4', () => {
              setStepCount(4);
              setLabels(['Processing', 'Shipping', 'Delivery', 'Cart']);
            })}
            {renderElement('设置有多少步 stepCount 4 -> 5', () => {
              setStepCount(5);
              setLabels(['Processing', 'Shipping', 'Delivery', 'Cart', 'Goods']);
            })}

            <TestCase itShould="自定义内容 renderStepIndicator={renderStepIndicator}">
              <StepIndicator
                stepCount={5}
                customStyles={firstIndicatorStyles}
                renderStepIndicator={renderStepIndicator}
                currentPosition={currentPage}
                onPress={onStepPress}
                labels={arr}
              />
            </TestCase>

            <TestCase itShould="方向 direction='vertical'">
              <View style={{height: 200, marginBottom: 100}}>
                <StepIndicator
                  customStyles={firstIndicatorStyles}
                  renderStepIndicator={renderStepIndicator}
                  currentPosition={currentPage}
                  onPress={onStepPress}
                  direction="vertical"
                  labels={arr}
                />
              </View>
            </TestCase>
          </TestSuite>
        </Tester>
        <View style={{marginBottom: 50}} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 16,
  },
  buttonContainer: {
    flexShrink: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  selected: {
    backgroundColor: 'rgb(101, 121, 191)',
  },
  unSelected: {
    backgroundColor: 'rgba(101, 121, 191, 0.3)',
  },
  buttonLabel: {
    color: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20,
    width: '100%'
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
});
