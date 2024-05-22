import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as htmlparser2 from "htmlparser2";
// import { WritableStream } from "htmlparser2/lib/WritableStream";
// import RNFS from 'react-native-fs';
import type { Element } from "domhandler";

let domResult = '';

export function HtmlParser2Page() {
  const [result, setResult] = useState('请点击按钮，查看效果...');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.textArea}>
        <Text>{result}</Text>
      </ScrollView>
      <ScrollView style={styles.buttonArea}>
        <View style = {styles.view}>
          <TouchableOpacity style={styles.button} onPress={() => {
            setResult(parseInput());
          }} >
            <Text style={styles.buttonText}>Usage</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            setResult(parserStream());
          }} >
            <Text style={styles.buttonText}>Usage with streams</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={async() => {
            domResult = '';
            let html = "<div><p><span></span></p><a></a></div>";
            let dom = htmlparser2.parseDocument(html);
            if (dom && dom.children) {
              setResult(assembleResult(html, await traversalDom(0, dom.children as Element[])));
            } else {
              setResult('');
            }
          }} >
            <Text style={styles.buttonText}>Getting a DOM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            setResult(parseFeedsRss());
          }} >
            <Text style={styles.buttonText}>Parsing Feeds(RSS)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            setResult(parseFeedsRdf());
          }} >
            <Text style={styles.buttonText}>Parsing Feeds(RDF)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            setResult(parseFeedsAtom());
          }} >
            <Text style={styles.buttonText}>Parsing Feeds(Atom)</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function parseInput() {
  let result = '';
  const parser = new htmlparser2.Parser({
    onopentag(name, attributes) {
      if (name === "script" && attributes.type === "text/javascript") {
        result += ("JS! Hooray! \n");
      }
    },
    ontext(text) {
      result += (text + '\n');
    },
    onclosetag(tagname) {
      if (tagname === "script") {
        result += "That's it?! \n";
      }
    },
  });
  let input = "Xyz <script type='text/javascript'>const foo = '<<bar>>';</script>";
  parser.write(input);
  parser.end();
  return assembleResult(input, result);
}

function parserStream() {
  // const parserStream = new WritableStream({
  //     ontext(text) {
  //         console.log("------>>>:", text);
  //     },
  // });

  // const htmlStream = createReadStream("./index.html");
  // htmlStream.pipe(parserStream).on("finish", () => console.log("done"));
  return '基于react-native-fs';
}

async function traversalDom(level: number, dom: Element[]) {
  dom.forEach(async(item) => {
    let tabs = '';
    for (let i=0;i<level;i++) {
      tabs += '  ';
    }
    domResult += (tabs + item.name + '\n');
    if (item.children && item.children.length > 0) {
      await traversalDom(level + 1, item.children as Element []);
    }
  });
  return domResult;
}

function parseFeedsRss() {
  let input = '<?xml version="1.0" encoding="UTF-8"?>' +
        '<rss version="2.0">' +
        '  <channel>' +
        '    <title>My Blog</title>' +
        '    <link>http://www.example.com/myblog/</link>' +
        '    <description>A blog about technology and gadgets.</description>' +
        '    <language>en-us</language>' +
        '    <pubDate>Tue, 20 Jan 2024 00:00:00 GMT</pubDate>' +
        '    <lastBuildDate>Tue, 20 Jan 2024 12:00:00 GMT</lastBuildDate>' +
        '    <item>' +
        '      <title>10 Best Smartphones of 2024</title>'+
        '      <link>http://www.example.com/myblog/best-smartphones-2024/</link>' +
        '      <description>Check out our top picks for the best smartphones of 2024.</description>' +
        '      <pubDate>Mon, 13 Jan 2024 00:00:00 GMT</pubDate>' +
        '      <guid isPermaLink="false">article-12345</guid>' +
        '    </item>' +
        '    <item>' +
        '      <title>Review: Samsung Galaxy S16</title>' +
        '      <link>http://www.example.com/myblog/review-samsung-galaxy-s16/</link>' +
        '      <description>A detailed review of the latest Samsung flagship smartphone.</description>' +
        '      <pubDate>Fri, 17 Jan 2024 00:00:00 GMT</pubDate>' +
        '      <guid isPermaLink="false">article-12346</guid>' +
        '    </item>' +
        '  </channel>' +
        '</rss>';
  let feed = htmlparser2.parseFeed(input, { xmlMode: true });
  return assembleResult(input, JSON.stringify(feed));
}

function parseFeedsRdf() {
  let input = '<?xml version="1.0" encoding="UTF-8"?>' +
  '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"' +
  '         xmlns:dc="http://purl.org/dc/elements/1.1/">' +
  '  <rdf:Description rdf:about="http://www.example.com/article123">' +
  '    <dc:title>Sample Article</dc:title>' +
  '    <dc:creator>John Doe</dc:creator>' +
  '    <dc:date>2024-01-20</dc:date>' +
  '    <dc:description>This is a sample article for demonstration purposes.</dc:description>' +
  '  </rdf:Description>' +
  '</rdf:RDF>';
  let feed = htmlparser2.parseFeed(input, { xmlMode: true });
  return assembleResult(input, JSON.stringify(feed));
}

function parseFeedsAtom() {
  let input = '<?xml version="1.0" encoding="UTF-8"?>' +
  '<feed xmlns="http://www.w3.org/2005/Atom">' +
  '  <title>My Blog</title>' +
  '  <link href="http://www.example.com/blog" rel="self"/>' +
  '  <link href="http://www.example.com/blog/archive" rel="archive"/>' +
  '  <updated>2024-01-20T10:30:00Z</updated>' +
  '  <author>' +
  '    <name>John Doe</name>' +
  '    <email>johndoe@example.com</email>' +
  '  </author>' +
  '  <entry>' +
  '    <title>First Post</title>' +
  '    <link href="http://www.example.com/blog/first-post" rel="alternate"/>' +
  '    <id>urn:uuid:12345678-1234-5678-1234-567812345678</id>' +
  '    <published>2024-01-15T08:00:00Z</published>' +
  '    <updated>2024-01-15T08:00:00Z</updated>' +
  '    <author>' +
  '      <name>John Doe</name>' +
  '      <email>johndoe@example.com</email>' +
  '    </author>' +
  '    <content type="html">&lt;p&gt;This is my first blog post.&lt;/p&gt;</content>' +
  '  </entry>' +
  '</feed>';
  let feed = htmlparser2.parseFeed(input, { xmlMode: true });
  return assembleResult(input, JSON.stringify(feed));
}

function assembleResult(input: string, result: string) {
  return '输入：\n' + input + '\n结果：\n' + result;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  textArea: {
    width: '100%',
    height: '50%',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10
  },
  buttonArea: {
    width: '100%',
    height: '50%'
  },
  view: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    width: '80%',
    marginTop: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

