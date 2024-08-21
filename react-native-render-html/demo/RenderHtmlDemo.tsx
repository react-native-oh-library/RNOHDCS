import React from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

const source = {
  html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
};

export default function App() {
  const { width } = useWindowDimensions();
  return <RenderHtml contentWidth={width} source={source} />;
}