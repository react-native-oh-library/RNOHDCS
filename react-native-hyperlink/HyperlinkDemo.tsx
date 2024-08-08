import React, { useState } from "react";
import { View, Text } from "react-native";
import Hyperlink from "react-native-hyperlink";

export default function App() {
  return (
    <Hyperlink
      linkDefault
      injectViewProps={(url) => ({
        testID: url === "http://link.com" ? "id1" : "id2",
        style:
          url === "https://link.com" ? { color: "red" } : { color: "blue" },
        //any other props you wish to pass to the component
      })}
    >
      <Text>
        You can pass props to clickable components matched by url.
        <Text>This url looks red https://link.com</Text> and this url looks blue
        https://link2.com{" "}
      </Text>
    </Hyperlink>
  );
}