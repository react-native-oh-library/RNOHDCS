import React, { useState } from 'react'
import { TestSuite, Tester } from '@rnoh/testerino';
import { TestCase } from '../components';
import { View, StyleSheet, Button, Text, ScrollView } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


export function CountdownCircleTime() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [count, setCount] = useState(15)

  return (
    <Tester>
      <TestSuite name='SensitiveInfoDemo'>
        <ScrollView style={{ height: 950 }}>
          <View style={{ backgroundColor: "#000" }}>
            <TestCase.Manual
              itShould="倒计时器"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={isPlaying}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <Button onPress={() => setIsPlaying((prev) => !prev)} title={'Toggle Playing'}></Button>
            <TestCase.Manual
              itShould="initialRemainingTime:10"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={10}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="isSmoothColorTransition:true"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={true}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="updateInterval:5"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={5}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="strokeWidth:40"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={40}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="strokeLinecap:round"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'round'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="rotation:counterclockwise"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'counterclockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}>
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }}
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="size:100"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={100}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}>
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }}
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="trailColor:#efd"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#efd"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}>
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }}
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="isGrowing:false"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={false}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="trailStrokeWidth:100"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={100}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="colors:['#0000FF', '#FFFF00', '#5C3317', '#D9D919'],colorsTime:[15, 10, 7, 3, 0]"
              tags={["dev"]}
              initialState={0}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#0000FF', '#FFFF00', '#5C3317', '#D9D919']}
                  colorsTime={[15, 10, 7, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(remainingTime)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>
                    )
                  }
                  }
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="onUpdate调用测试"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    setState(true)
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: true })}>
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>)
                  }}
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase.Manual
              itShould="onComplete={() => ({ shouldRepeat: false })} "
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) =>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={count}
                  initialRemainingTime={6}
                  isSmoothColorTransition={false}
                  updateInterval={1}
                  strokeWidth={12}
                  strokeLinecap={'square'}
                  rotation={'clockwise'}
                  size={180}
                  // colors="#aabbcc"
                  trailColor="#d9d9d9"
                  isGrowing={true}
                  trailStrokeWidth={10}
                  // colors="url(#test-it)"
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[8, 6, 3, 0]}
                  onUpdate={(remainingTime) => {
                    // Alert.alert(JSON.stringify(remainingTime))
                  }}
                  onComplete={() => ({ shouldRepeat: false })}>
                  {({ remainingTime }) => {
                    return (
                      <View>
                        <Text>{remainingTime}</Text>
                      </View>)
                  }}
                </CountdownCircleTimer>
              }
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <Button onPress={() => setCount((prev) => (prev += 5))} title={'Count'}></Button>

          </View>
        </ScrollView>
      </TestSuite>
    </Tester>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
})
