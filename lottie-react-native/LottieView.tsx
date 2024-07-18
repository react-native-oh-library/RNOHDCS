import React, { useRef, useState } from "react";

import { View, ScrollView, Button,Text } from "react-native";
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";
import Lottie from "lottie-react-native";
export const ProgressViewDemo = () => {
  const animationRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const Meun = [
    {
      key: "lottie-react-native_1",
      itShould:
        "Play the animation all the way through, at the speed specified as a prop. It can also play a section of the animation (not available on web) when called as play(startFrame, endFrame)",
      label: "play",
      onPress: (setState: (arg0: boolean) => void) => {
        animationRef.current && animationRef.current.play();
        setState(true);
      },
    },
    {
      key: "lottie-react-native_2",
      itShould: "Reset the animation back to 0 progress",
      label: "reset",
      onPress: (setState: (arg0: boolean) => void) => {
        animationRef.current && animationRef.current.reset();
        setState(true);
      },
    },
    {
      key: "lottie-react-native_3",
      itShould: "Pauses the animation",
      label: "pause",
      onPress: (setState: (arg0: boolean) => void) => {
        animationRef.current && animationRef.current.pause();
        setState(true);
      },
    },
    {
      key: "lottie-react-native_4",
      itShould: "Resumes the paused animation",
      label: "resume",
      onPress: (setState: (arg0: boolean) => void) => {
        animationRef.current && animationRef.current.resume();
        setState(true);
      },
    },
    {
      key: "lottie-react-native_5",
      itShould: "progress add",
      label: "setProgress add 0.1",
      onPress: (setState: (arg0: boolean) => void) => {
        if (progress !== 1) {
          setProgress(Number((progress + 0.1).toFixed(1)));
          setState(true);
        }
      },
    },

    {
      key: "lottie-react-native_6",
      itShould: "progress sub",
      label: "setProgress sub 0.1",
      onPress: (setState: (arg0: boolean) => void) => {
        if (progress !== 0) {
          setProgress(Number((progress - 0.1).toFixed(1)));
          setState(true);
        }
      },
    },
  ];
  return (
    <Tester>
      <ScrollView>
        <TestSuite name='lottie-react-native'>
          <Lottie
            ref={animationRef}
            style={{
              height: 150,
              top: 0,
              left: 0,
              backgroundColor: "#0f0",
            }}
            source={require("../assets/lottie-react-native/animations.json")}
            autoPlay
            progress={progress}
            
          />
           <View style={{padding:20}}><Text style={{color:'#fff',fontSize:20}}>progressValue: {progress}</Text></View>
          {Meun.map((item) => (
            <TestCase
              key={item.key}
              itShould={item.itShould}
              tags={["C_API"]}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button
                      title={item.label}
                      onPress={() => item.onPress(setState)}
                    ></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
          ))}
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
