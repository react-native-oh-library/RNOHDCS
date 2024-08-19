import React, { useState } from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import Sound from "react-native-sound";

type SectionProps = PropsWithChildren<{
  title: string;
  func: () => void;
}>;

type SliderSectionProps = PropsWithChildren<{
  duration: number;
  value: number;
  func: () => void;
}>;

function Section({ title, func }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Button
        onPress={func}
        title={title}
        color="#2196f3"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export function SoundDemo(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigationOptions = (props: {
    navigation: { state: { params: { title: any } } };
  }) => ({
    title: props.navigation.state.params.title,
  });

  let sound = new Sound("https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3");
  
  const onPlay = () => {
    sound.play();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="play" func={onPlay}></Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});
