import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Markdown, {getUniqueID} from 'react-native-markdown-renderer';

const copy1 = `# 一级标题
## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
`;
const copy2 = `---`;
const copy3 = `___`;
const copy4 = `## Lists

Unordered

- Create a list by starting a line with 
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as 1`;
const copy5 = `**This is bold text**

_This is italic text_

~~Strikethrough~~`;
const copy6 = `## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.`;
const copy7 = `## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;
const copy8 = `## Links
[gitee 官网链接](https://gitee.com/)
`;
const copy9 = `## Images
![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')
`;
const copy10 = `
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
`;
const rules = {
  heading1: (node, children, parent, styles) => (
    <Text key={getUniqueID()} style={[styles.heading, styles.heading1]}>
      [{children}]
    </Text>
  ),
  heading2: (node, children, parent, styles) => (
    <Text key={getUniqueID()} style={[styles.heading, styles.heading2]}>
      [{children}]
    </Text>
  ),
  heading3: (node, children, parent, styles) => (
    <Text key={getUniqueID()} style={[styles.heading, styles.heading3]}>
      [{children}]
    </Text>
  ),
};
export function TestReactNativeMarkdownRendererDemo({
  filter,
}: {
  filter: Filter;
}) {
  const [param1, setParam1] = React.useState('');
  const handleUrlPress1 = (url, matchIndex /*: number*/) => {
    let p = {url, matchIndex};
    setParam1(JSON.stringify(p));
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Text>React Native Markdown Renderer</Text>
        <View style={styles.section}>
          <Text>1、测试Markdown语法：标题</Text>
          <View style={styles.inputpart}>
            <Text>组件输入：</Text>
            <Text>{copy1}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy1}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>2、测试Markdown语法：水平线</Text>
          <View style={styles.inputpart}>
            <Text>组件输入：{copy2}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy2}</Markdown>
          </View>
          <View style={styles.inputpart}>
            <Text>组件输入：{copy3}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy3}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>3、测试Markdown语法：排版替换</Text>
          <View style={styles.inputpart}>
            <Text>组件输入：{copy4}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy4}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>4、测试Markdown语法：强调</Text>
          <View style={styles.inputpart}>
            <Text>组件输入：{copy5}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy5}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>5、测试Markdown语法：Blockquotes</Text>
          <View style={styles.inputpart}>
            <Text>组件输入：{copy6}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy6}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>6、测试Markdown语法：Tables</Text>
          <View style={styles.inputpart}>
            <Text>组件输入：{copy7}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy7}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>7、测试Markdown语法：Links</Text>
          <View style={styles.inputpart}>
            <Text>组件输入：{copy8}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy8}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>8、测试Markdown语法：Images</Text>
          <View style={styles.inputpart}>
            <Text>组件输入：{copy9}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown>{copy9}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>9、测试Markdown组件style属性</Text>
          <View style={styles.inputpart}>
            <Text>
              Heading1 has a fontSize of 32, backgroundColor black and a color
              white.all headers have a border at the bottom, of width 1 with a
              black color.
            </Text>
            <Text>组件输入：{copy10}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown style={styles}>{copy10}</Markdown>
          </View>
        </View>
        <View style={styles.section}>
          <Text>10、测试Markdown组件rules属性</Text>
          <View style={styles.inputpart}>
            <Text>
              So to describe what i customized: header1 will always look like [
              h1 Heading 8-)] and header2 will always look like [ h2 Heading
              8-)] and header3 will always look like [ h3 Heading 8-)].
            </Text>
            <Text>组件输入：{copy10}</Text>
          </View>
          <View style={styles.outputpart}>
            <Text>展示组件效果：</Text>
            <Markdown rules={rules}>{copy10}</Markdown>
          </View>
        </View>
        <View style={styles.buttomMargin}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  inputpart: {
    marginBottom: 10,
  },
  outputpart: {
    paddingBottom: 10,
  },
  heading: {
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  heading1: {
    fontSize: 32,
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
  buttomMargin: {
    width: '100%',
    height: 60,
  },
});
