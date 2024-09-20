import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <LottieView source={require("./assets/xxx.json")} autoPlay loop />
    </View>
  );
};

export default App;