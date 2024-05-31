import React,{useState} from 'react';
import { SafeAreaView, ScrollView, StatusBar,View, Text , Button} from 'react-native';

import Markdown from 'react-native-markdown-display';

const App: () => React$Node = () => {
  
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
const rules = {
  rule1: {
    tag:'rule1',
    rule: {
      heading1: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_heading1}>
            <Text key={node.key}>{children}</Text>
        </View>
      ),
      heading2: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_heading2}>
          <Text key={node.key}>{children}</Text>
        </View>
      ),
      heading3: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_heading3}>
           <Text key={node.key}>{children}</Text>
        </View>
      ),
      heading4: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_heading4}>
           <Text key={node.key}>{children}</Text>
        </View>
      ),
      heading5: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_heading5}>
          <Text key={node.key}>{children}</Text>
        </View>
      ),
      heading6: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_heading6}>
          <Text key={node.key}>{children}</Text>
        </View>
      ),
      hr: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_hr} />
      ),
    
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
    }
  },
  rule2: {
    tag:'rule2',
    rule: {
      code_inline: (node, children, parent, styles, inheritedStyles = {}) => (
        <Text key={node.key} style={[inheritedStyles, styles.code_inline]}>
          
          >> code_inline >> "{node.content}"
        </Text>
      ),
      code_block: (node, children, parent, styles, inheritedStyles = {}) => {
        let {content} = node;
    
        if (
          typeof node.content === 'string' &&
          node.content.charAt(node.content.length - 1) === '\n'
        ) {
          content = node.content.substring(0, node.content.length - 1);
        }
    
        return (
          <Text key={node.key} style={[inheritedStyles, styles.code_block]}>
            >> code_block >> "{content}"
          </Text>
        );
      },
      fence: (node, children, parent, styles, inheritedStyles = {}) => {
        let {content} = node;
    
        if (
          typeof node.content === 'string' &&
          node.content.charAt(node.content.length - 1) === '\n'
        ) {
          content = node.content.substring(0, node.content.length - 1);
        }
    
        return (
          <Text key={node.key} style={[inheritedStyles, styles.fence]}>
            >> fence >> "{content}"
          </Text>
        );
      },
    
      // Tables
      table: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_table}>
          {children}
        </View>
      ),
      thead: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_thead}>
          {children}
        </View>
      ),
      tbody: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_tbody}>
          {children}
        </View>
      ),
      th: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_th}>
          {children}
        </View>
      ),
      tr: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_tr}>
          {children}
        </View>
      ),
      td: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_td}>
          {children}
        </View>
      ),
    
      text: (node, children, parent, styles, inheritedStyles = {}) => {
        return (
          <Text key={node.key} style={[inheritedStyles, styles.heading6]}>
            {node.content}
          </Text>
        );
      },
      textgroup: (node, children, parent, styles) => (
        <Text key={node.key} style={styles.textgroup}>
          {children}
        </Text>
      ),
      paragraph: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_paragraph}>
          {children}
        </View>
      ),
      hardbreak: (node, children, parent, styles) => (
        <Text key={node.key} style={styles.hardbreak}>
          {'\n'}
        </Text>
      ),
      softbreak: (node, children, parent, styles) => (
        <Text key={node.key} style={styles.softbreak}>
          {'\n'}
        </Text>
      ),
    
      pre: (node, children, parent, styles) => (
        <View key={node.key} style={styles._VIEW_SAFE_pre}>
          {children}
        </View>
      ),
      inline: (node, children, parent, styles) => (
        <Text key={node.key} style={styles.inline}>
          {children}
        </Text>
      ),
      span: (node, children, parent, styles) => (
        <Text key={node.key} style={styles.span}>
          {children}
        </Text>
      ),
    }
  }
}
const [newRules, setNewRules] = useState(rules.rule1);
const changeRules = () =>{
  newRules.tag === 'rule1' ? setNewRules(rules.rule2) : setNewRules(rules.rule1)
}
  return (
    <>
      <SafeAreaView>
      <Button
            title = "Change Rules"
            onPress = {changeRules}
          />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
          
          <Markdown
           rules={newRules.rule}
          >
            {copy}
          </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;