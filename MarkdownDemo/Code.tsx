import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import Markdown from "react-native-markdown-display";

const App: () => React$Node = () => {
  const copy = `  
Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`
`;

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
