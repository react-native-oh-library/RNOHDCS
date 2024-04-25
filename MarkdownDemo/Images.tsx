import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import Markdown from "react-native-markdown-display";

const copy = `  
![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
`;

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ height: "100%" }}
        >
          <Markdown>{copy}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
