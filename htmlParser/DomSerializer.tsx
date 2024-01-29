import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import cheerio from './cheerio/src/index';
import render, { DomSerializerOptions } from "./domSerializer/index";
import type { Document } from "domhandler";

const { _parse: parse, options: defaultOpts } = cheerio.prototype;
const htmlFunc = html.bind(null, { _useHtmlParser2: true });

interface CheerioOptions extends DomSerializerOptions {
  _useHtmlParser2?: boolean;
}
function html(
  preset: CheerioOptions,
  str: string,
  options: CheerioOptions = {},
) {
  const opts = { ...defaultOpts, ...preset, ...options };
  const dom = parse(str, opts, true) as Document;
  return render(dom, opts);
}

function xml(str: string, options: CheerioOptions = {}) {
  const opts = { ...defaultOpts, ...options, xmlMode: true };
  const dom = parse(str, opts, true) as Document;
  return render(dom, opts);
}

export function DomSerializerPage() {
  const [result, setResult] = useState('请点击按钮，查看效果...');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.textArea}>
        <Text>{result}</Text>
      </ScrollView>
      <ScrollView style={styles.buttonArea}>
        <View style = {styles.view}>
          <TouchableOpacity style={styles.button} onPress={() => {
              const str = "<hr class='an \"edge\" case' />";
              setResult(assembleResult('htmlFunc("<hr class=\'an "edge" case\' />")', htmlFunc(str) + ''));
            }} >
              <Text style={styles.buttonText}>should handle double quotes within single quoted attributes properly</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const str = '<a href="a < b &quot; & c">& " &lt; &gt;</a>';
            setResult(assembleResult('html({ _useHtmlParser2: true, encodeEntities: "utf8" }, \'<a href="a < b &quot; & c">& " &lt; &gt;</a>\')',
              html({ _useHtmlParser2: true, encodeEntities: "utf8" }, str)));
          }} >
            <Text style={styles.buttonText}>should escape entities to utf8 if requested</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const str ="<a> <b> <![CDATA[ asdf&asdf ]]> <c/> <![CDATA[ asdf&asdf ]]> </b> </a>";
            setResult(assembleResult('xml("<a> <b> <![CDATA[ asdf&asdf ]]> <c/> <![CDATA[ asdf&asdf ]]> </b> </a>")', xml(str)));
          }} >
            <Text style={styles.buttonText}>should render CDATA correctl</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
          const str = "<div dropdown-toggle>";
          setResult(assembleResult('xml("<div dropdown-toggle>")', xml(str)));
          }} >
            <Text style={styles.buttonText}>should append ="" to attributes with no value</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
          const str = "<input disabled>";
          setResult(assembleResult('xml("<input disabled>")', xml(str)));
          }} >
            <Text style={styles.buttonText}>should append ="" to boolean attributes with no value</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
          const str = '<div xmlns:ex="http://example.com/ns"><p ex:ample="attribute">text</p></div>';
          setResult(assembleResult('xml("<div xmlns:ex="http://example.com/ns"><p ex:ample="attribute">text</p></div>")', xml(str)));
          }} >
            <Text style={styles.buttonText}>should preserve XML prefixes on attributes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const str = '<svg viewBox="0 0 8 8"><radialGradient/></svg>';
            setResult(assembleResult('xml("<svg viewBox="0 0 8 8"><radialGradient/></svg>")', xml(str)));
          }} >
            <Text style={styles.buttonText}>should preserve mixed-case XML elements and attributes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            setResult(assembleResult('xml("<script>"<br/>"</script>")', xml('<script>"<br/>"</script>')));
          }} >
            <Text style={styles.buttonText}>should encode entities in otherwise special tags</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const str = '<script>"<br/>"</script>';
            setResult(assembleResult('xml("<script>"<br/>"</script>", { decodeEntities: false })', xml(str, { decodeEntities: false })));
          }} >
            <Text style={styles.buttonText}>should not encode entities if disabled</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const str = "<foo /><bar></bar>";
            setResult(assembleResult('xml("<foo /><bar></bar>", { decodeEntities: false })', xml(str, { selfClosingTags: false })));
          }} >
            <Text style={styles.buttonText}>should render childless nodes with an explicit closing tag</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button} onPress={() => {
            const str = "<br />";
            setResult(assembleResult('html({_useHtmlParser2: true,decodeEntities: false,selfClosingTags: true}, "<br />")', 
            html({_useHtmlParser2: true,decodeEntities: false,selfClosingTags: true}, str)));
          }} >
            <Text style={styles.buttonText}>should render br tags correctly</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const str = '<svg><circle x="12" y="12"></circle><path d="123M"></path><polygon points="60,20 100,40 100,80 60,100 20,80 20,40"></polygon></svg>';
            setResult(assembleResult('html({_useHtmlParser2: true,decodeEntities: false,selfClosingTags: false}, ' +
              '"<svg><circle x="12" y="12"></circle><path d="123M"></path><polygon points="60,20 100,40 100,80 60,100 20,80 20,40"></polygon></svg>")', 
              html({_useHtmlParser2: true,decodeEntities: false,selfClosingTags: false}, str)));
          }} >
            <Text style={styles.buttonText}>should render childless SVG nodes with an explicit closing tag</Text>
          </TouchableOpacity>
            
          <Text style = {styles.buttonBottom}></Text>
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
  },
  buttonBottom: {
    height: 100
  }
});