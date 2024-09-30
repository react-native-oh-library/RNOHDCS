import React, { useEffect, useState } from 'react';
import * as htmlparser2 from 'htmlparser2';
import { parseFeed, parseDocument, createDocumentStream } from 'htmlparser2';
import CircularJSON from "circular-json";
import { View, Text, Button, ScrollView } from 'react-native';

function HtmlParser() {
    const [parsedContent, setParsedContent] = useState('');
    const [feedText, setFeedText] = useState('null');
    const dom = parseDocument(
        '<div data-foo="In the end, it doesn\'t really matter."></div><div data-foo="Indeed-that\'s a delicate matter.">',
    );
    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Example RSS feed</title>
        <link>http://example.com/</link>
        <description>An example RSS feed</description>
        <item>
          <title>Example item</title>
          <link>http://example.com/item1</link>
          <description>An example item</description>
        </item>
      </channel>
    </rss>`;
    const [content, setContent] = useState('null');
    const options = { decodeEntities: true };
    const callback = (error, document) => {
        if (error) {
            console.error(error);
        } else {
            setContent(document);
            console.log('document', document);
        }
    };
    const elementCallback = (element) => {
        console.log('element', element)
    };

    const parserFunc = () => {
        console.log('parserFuncparserFuncparserFuncparserFuncparserFuncparserFuncparserFunc')
        const parser = createDocumentStream(callback, options, elementCallback);
        parser.write('<html><head><title>Test</title></head><body><p>Hello, world!</p></body></html>');
        parser.end();
    }

    useEffect(() => {
        const parser = new htmlparser2.Parser({
            onopentag(name, attributes) {
                if (name === 'script' && attributes.type === 'text/javascript') {
                    console.log('JS! Hooray!');
                    setParsedContent(parsedContent => parsedContent + 'JS! Hooray!')
                }
            },
            ontext(text) {
                console.log('-->', text);
                setParsedContent(parsedContent => parsedContent + text);
            },
            onclosetag(tagname) {
                if (tagname === 'script') {
                    console.log("That's it?!");
                    setParsedContent(parsedContent => parsedContent + "That's it?!");
                }
            },
        });

        parser.write("Xyz <script type='text/javascript'>const foo = '111<<bar>>';</script>");
        parser.end();
    }, []);

    return (
        <ScrollView>
             <View>
            <Text style={{ color: 'green', fontWeight: '800' }}>htmlparser2:</Text>
            <Text style={{ color: 'white', marginBottom: 40 }}>{parsedContent}</Text>
            <Text style={{ color: 'green', fontWeight: '800' }}>parseFeed:</Text>
            <Button
                title="parseFeed"
                onPress={() => {
                    setFeedText(parseFeed(rssFeed))
                }}
            />
            <Text style={{ color: 'white', marginBottom: 40 }}>{CircularJSON.stringify(feedText)}</Text>
            <Text style={{ color: 'green', fontWeight: '800' }}>parseDocument:</Text>
            <Text style={{ color: 'white', marginBottom: 40 }}>{CircularJSON.stringify(dom)}</Text>
            <Text style={{ color: 'green', fontWeight: '800' }}>createDocumentStream:</Text>
            <Button
                title="createDocumentStream"
                onPress={parserFunc}
            />
            <Text style={{ color: 'white' }}>{CircularJSON.stringify(content)}</Text>
        </View>
        </ScrollView>
    );
}

export default HtmlParser; 



