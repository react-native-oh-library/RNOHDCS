import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import * as htmlparser2 from "htmlparser2";
import { DomHandler, ChildNode } from "domhandler";
import CircularJSON from 'circular-json';
import { Parser, ParserOptions } from "htmlparser2";
import { NodeWithChildren } from "./domHandler/node";
import * as node from "./domHandler/node";
import Handler, { DomHandlerOptions } from "./domHandler/index";
import { ElementType } from "domelementtype";

let nodeResult: any[] = [];

export function DomHandlerPage() {
  const [result, setResult] = useState('请点击按钮，查看效果...');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.textArea}>
        <Text>{result}</Text>
      </ScrollView>
      <ScrollView style={styles.buttonArea}>
        <View style = {styles.view}>
          <TouchableOpacity style={styles.button} onPress={() => {
            const rawHtml = "Xyz <script language= javascript>var foo = '<<bar>>';<\/script><!--<!-- Waah! -- -->";
            const handler = new DomHandler((error, dom) => {
                if (error) {
                    setResult(JSON.stringify(error));
                } else {
                  nodeResult = [];
                  setResult(assembleResult('new htmlparser2.Parser(new DomHandler())' +
                    '.write("Xyz <script language= javascript>var foo = \'<<bar>>\';<\/script><!--<!-- Waah! -- -->")', traversalNode(0, dom[0])));
                }
            });
            const parser = new htmlparser2.Parser(handler);
            parser.write(rawHtml);
            parser.end();
          }} >
            <Text style={styles.buttonText}>domhandler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const result = parse(
              `<html><!-- A Comment -->
                  <!doctype html>
                  <title>The Title</title>
                  <body>Hello world<input disabled type=text></body>
                  <script><![CDATA[secret script]]></script>
              </html>`
             );
            let input = 
            'parse(' +
              ' <html><!-- A Comment -->\n' +
              '    <!doctype html>\n' +
              '    <title>The Title</title>\n' +
              '    <body>Hello world<input disabled type=text></body>\n' +
              '    <script><![CDATA[secret script]]></script>\n' +
              '</html>\n' +
             ')\n'
            setResult(assembleResult(input + '.cloneNode(true) === parse(input)', 
              (CircularJSON.stringify(result.cloneNode(true)) == CircularJSON.stringify(result)) + ''));
          }} >
            <Text style={styles.buttonText}>should be cloneable</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const result = parse("<div foo=bar><div><div>");
            let result1 = assembleResult('parse("<div foo=bar><div><div>").cloneNode(true) == parse("<div foo=bar><div><div>")',
              (CircularJSON.stringify(result.cloneNode(true)) === CircularJSON.stringify(result)) + '');
            let result2 = assembleResult('parse("<div foo=bar><div><div>").cloneNode(false) != parse("<div foo=bar><div><div>")' , (result.cloneNode(false) != result) + '');
            let result3 = assembleResult('parse("<div foo=bar><div><div>").cloneNode().toHaveProperty("children", [])' , (result.cloneNode().children.length === 0) + '');
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should not clone recursively if not asked to</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const result = parse("<div foo=bar><div><div>", {
              withStartIndices: true,
              withEndIndices: true,
            }).children[0];
            const clone = result.cloneNode(true);
            let input = 
            'parse("<div foo=bar><div><div>", {\n' +
             ' withStartIndices: true,\n' +
             ' withEndIndices: true,\n' +
            '}).children[0];\n';
            let result1 = assembleResult(input + '.cloneNode(true).startIndex === 0', (clone.startIndex === 0) + '');
            let result2 = assembleResult(input + '.cloneNode(true).endIndex === 23', (clone.endIndex === 23) + '');
            setResult(result1 + result2);
          }} >
            <Text style={styles.buttonText}>should clone startIndex and endIndex</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            class Doctype extends node.Node {
              type = ElementType.Doctype;
              nodeType = NaN;
            }
            const el = new Doctype();
            let input = 
            'class Doctype extends node.Node {\n'+
            '  type = ElementType.Doctype;\n'+
            '  nodeType = NaN;\n'+
            '}\n';
            let result = '未产生异常';
            try {
              el.cloneNode()
            } catch(e) {
              result = e + '';
            }
            setResult(assembleResult('new ' + input + '.cloneNode().toThrow("Not implemented yet: doctype")', result));
          }} >
            <Text style={styles.buttonText}>should throw an error when cloning unsupported types</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const result = parse("<div foo=bar><div><div>").children[0];
            let result1 = assembleResult('node.isTag(parse("<div foo=bar><div><div>").children[0]) === true', (node.isTag(result) === true) + '');
            let result2 = assembleResult('node.hasChildren(parse("<div foo=bar><div><div>").children[0]) === true', (node.hasChildren(result) === true) + '');
            let result3 = assembleResult('node.isCDATA(parse("<div foo=bar><div><div>").children[0]) === false', (node.isCDATA(result) === false) + '');
            let result4 = assembleResult('node.isText(parse("<div foo=bar><div><div>").children[0]) === false', (node.isText(result) === false) + '');
            let result5 = assembleResult('node.isComment(parse("<div foo=bar><div><div>").children[0]) === false', (node.isComment(result) === false) + '');
            let result6 = assembleResult('node.isDirective(parse("<div foo=bar><div><div>").children[0]) === false', (node.isDirective(result) === false) + '');
            let result7 = assembleResult('node.isDocument(parse("<div foo=bar><div><div>").children[0]) === false', (node.isDocument(result) === false) + '');
            setResult(result1 + result2 + result3 + result4 + result5 + result6 + result7);
          }} >
            <Text style={styles.buttonText}>should detect tag types</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const parent: node.ParentNode = new node.Document([]);
            function setQuirks(el: node.ParentNode): void {
              if (el.type === ElementType.Root) {
                el["x-mode"] = "no-quirks";
              }
            }
            setQuirks(parent);
            setResult(assembleResult('new node.Document([])[\'x-mode\'] === "no-quirks"', (parent['x-mode'] === 'no-quirks') + ''));
          }} >
            <Text style={styles.buttonText}>should support using tagged types</Text>
          </TouchableOpacity>
          
          <Text style={styles.buttonBottom}></Text>
        </View>
      </ScrollView>
    </View>
  );
}

type Options = DomHandlerOptions & ParserOptions;
function parse(data: string, options: Options = {}): NodeWithChildren {
  const handler = new Handler((err) => {
      if (err) throw err;
  }, options);

  const parser = new Parser(handler, options);

  parser.end(data);

  return handler.root;
}

function traversalNode(level: number,node: ChildNode) {
  let nodeTemp = {};
  if (node.type === htmlparser2.ElementType.Text || node.type === htmlparser2.ElementType.Comment) {
    nodeTemp = {data: node.data, type: node.type};
  }
  if (node.type === htmlparser2.ElementType.Script) {
    nodeTemp = {data: node.name, type: node.type, attribute: node.attribs};
    let childrens = [];
    if (node.children && node.children.length > 0) {
      for (let i = 0; i<node.children.length; i++) {
        let children = node.children[i] as ChildNode;
        if (children.type === htmlparser2.ElementType.Text) {
          childrens.push({data: children.data, type: children.type });
        }
      }
      nodeTemp = {data: node.name, type: node.type, attribute: node.attribs, children: childrens};
    }
  }
  nodeResult.push(nodeTemp);
  if (node.next) {
    traversalNode(level + 1, node.next);
  }
  return JSON.stringify(nodeResult);
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

