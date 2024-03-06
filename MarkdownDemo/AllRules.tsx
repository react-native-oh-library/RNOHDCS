import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import Markdown from 'react-native-markdown-display';

const copy = `  
Headings

  # h1 Heading 8-)
  ## h2 Heading
  ### h3 Heading
  #### h4 Heading
  ##### h5 Heading
  ###### h6 Heading


Horizontal Rules

  Some text above
  ___

  Some text in the middle

  ---

  Some text below


Emphasis

  **This is bold text**

  __This is bold text__

  *This is italic text*

  _This is italic text_

  ~~Strikethrough~~


Blockquotes

  > Blockquotes can also be nested...
  >> ...by using additional greater-than signs right next to each other...
  > > > ...or with spaces between arrows.


Lists

  Unordered

  + Create a list by starting a line with \`+\`, \`-\`, or \`*\`
  + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
      * Ac tristique libero volutpat at
      + Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.
      - Nulla volutpat aliquam velit
  + Very easy!

  Ordered

  1. Lorem ipsum dolor sit amet
  2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.
  3. Integer molestie lorem at massa

  Start numbering with offset:

  57. foo
  58. bar


Code

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


Tables

  | Option | Description |
  | ------ | ----------- |
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |

  Right aligned columns

  | Option | Description |
  | ------:| -----------:|
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |


Links

  [link text](https://www.google.com)

  [link with title](https://www.google.com "title text!")

  Autoconverted link https://www.google.com (enable linkify to see)


Images

  ![Minion](https://octodex.github.com/images/minion.png)
  ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

  Like links, Images also have a footnote style syntax

  ![Alt text][id]

  With a reference later in the document defining the URL location:

  [id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


Typographic Replacements

  Enable typographer option to see result.

  (c) (C) (r) (R) (tm) (TM) (p) (P) +-

  test.. test... test..... test?..... test!....

  !!!!!! ???? ,,  -- ---

  "Smartypants, double quotes" and 'single quotes'

`;
const rules ={
  heading1: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_heading1}>
        >> H1 TEXT HERE >> "{children}"
    </View>
  ),
  heading2: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_heading2}>
       >> H2 TEXT HERE >> "{children}"
    </View>
  ),
  heading3: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_heading3}>
       >> H3 TEXT HERE >> "{children}"
    </View>
  ),
  heading4: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_heading4}>
       >> H4 TEXT HERE >> "{children}"
    </View>
  ),
  heading5: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_heading5}>
      >> H5 TEXT HERE >> "{children}"
    </View>
  ),
  heading6: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_heading6}>
      >> H6 TEXT HERE >> "{children}"
    </View>
  ),

  // Horizontal Rule
  hr: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_hr} />
  ),

  // Emphasis
  strong: (node, children, parent, styles) => (
    <Text key={node.key} style={styles.strong}>
      >> strong >> "{children}"
    </Text>
  ),
  em: (node, children, parent, styles) => (
    <Text key={node.key} style={styles.em}>
       >> em >> "{children}"
    </Text>
  ),
  s: (node, children, parent, styles) => (
    <Text key={node.key} style={styles.s}>
      >> s >> "{children}"
    </Text>
  ),

  // Blockquotes
  blockquote: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_blockquote}>
      {children}
    </View>
  ),

  // Lists
  bullet_list: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_bullet_list}>
      {children}
    </View>
  ),
  ordered_list: (node, children, parent, styles) => (
    <View key={node.key} style={styles._VIEW_SAFE_ordered_list}>
      {children}
    </View>
  ),
}

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
          <Markdown
           rules={rules}
          >
            {copy}
          </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;