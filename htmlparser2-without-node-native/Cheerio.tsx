import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Element } from "domhandler";
import * as cheerio from './cheerio/src/index';
import { getParse } from './cheerio/src/parse';
import { parseDocument as parseWithHtmlparser2 } from 'htmlparser2';
import { parseWithParse5 } from './cheerio/src/parsers/parse5-adapter';

const defaultOpts = { _useHtmlParser2: false };
const parse = getParse((content, options, isDocument, context) =>
  options._useHtmlParser2
    ? parseWithHtmlparser2(content, options)
    : parseWithParse5(content, options, isDocument, context),
);

export function CheerioPage() {
  const [result, setResult] = useState('请点击按钮，查看效果...');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.textArea}>
        <Text>{result}</Text>
      </ScrollView>
      <ScrollView style={styles.buttonArea}>
        <View style={styles.view}>
          <TouchableOpacity style={styles.button} onPress={() => {
              const fruits = [
                '<ul id="fruits">',
                '<li class="apple">Apple</li>',
                '<li class="orange">Orange</li>',
                '<li class="pear">Pear</li>',
                '</ul>'
              ].join('');
              let $ = cheerio.load(fruits);
              const $elem = $('li:first');
              setResult(assembleResult('cheerio.load(' + fruits + ')\n(\'li:first\').attr(\'class\').toBe("apple")', (($elem.attr('class') === 'apple')) + ''));
            }}>
           <Text style={styles.buttonText}>selectors-.class</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
              const $ = cheerio.load('<BODY><ul id="fruits"></ul></BODY>', {
                xml: { lowerCaseTags: true },
              });
              let input = 
              'cheerio.load(\'<BODY><ul id="fruits"></ul></BODY>\', {\n' +
              '  xml: { lowerCaseTags: true },\n' +
              '})\n';
              setResult(assembleResult(input + '.html().toBe("<body><ul id="fruits"/></body>")', ($.html() === '<body><ul id="fruits"/></body>') + ''));
            }}>
            <Text style={styles.buttonText}>selectors.html</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
              const fruits = [
                '<ul id="fruits">',
                '<li class="apple">Apple</li>',
                '<li class="orange">Orange</li>',
                '<li class="pear">Pear</li>',
                '</ul>'
              ].join('');
              let $ = cheerio.load(fruits);
              setResult(assembleResult('cheerio.load(' + fruits + ')\n(\'.pear\').prop(\'outerHTML\').toBe("<li class="pear">Pear</li>")', ($('.pear').prop('outerHTML') === '<li class="pear">Pear</li>') + ''));
            }}>
            <Text style={styles.buttonText}>Rendering</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
              const root = parse(
                '<div><a></a><span></span><p></p></div>',
                defaultOpts,
                false,
                null,
              ).childNodes[0] as Element;
              let input = 
                'parse(\n' +
                '  \'<div><a></a><span></span><p></p></div>\',\n' +
                '  defaultOpts,\n' +
                '  false,\n' +
                '  null,\n' +
                ').childNodes[0]\n';
              const childNodes = root.childNodes as Element[];
              let result1 = assembleResult(input + '.childNodes.childNodes[0].tagName.toBe("a")', (childNodes[0].tagName === 'a') + '');
              let result2 = assembleResult(input + '.childNodes.childNodes[0].previousSibling.toBe(null)', (childNodes[0].previousSibling === null) + '');
              let result3 = assembleResult(input + '.childNodes.childNodes[0].nextSibling.toBe(childNodes[1])', (childNodes[0].nextSibling === childNodes[1]) + '');
              let result4 = assembleResult(input + '.childNodes.childNodes[0].parentNode.toBe(root)', (childNodes[0].parentNode === root) + '');
              let result5 = assembleResult(input + '.childNodes.childNodes[0] as Element).childNodes.toHaveLength(0)', ((childNodes[0] as Element).childNodes.length === 0) + '');
              let result6 = assembleResult(input + '.childNodes.childNodes[0].firstChild.toBe(null)', (childNodes[0].firstChild === null) + '');
              let result7 = assembleResult(input + '.childNodes.childNodes[0].lastChild.toBe(null)', (childNodes[0].lastChild === null) + '');
              setResult(result1 + result2 + result3 + result4 + result5 + result6 + result7);
            }}>
            <Text style={styles.buttonText} >The DOM Node object</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function assembleResult(input: string, result: string) {
  return '输入：\n' + input + '\n结果：\n' + result + '\n';
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