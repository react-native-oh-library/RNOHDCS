import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import * as htmlparser2 from "htmlparser2";
import { parseDocument, parseDOM } from "htmlparser2";
import fixture from "./domUtils/__fixtures__/fixture";
import { DomHandler, ChildNode, Element, AnyNode, isTag } from "domhandler";
import type { Document } from "domhandler";
import { ElementType } from "domelementtype";
import {
  existsOne,
  filter,
  find,
  findAll,
  findOne,
  findOneChild,
} from "./domUtils/querying";
import {
  getInnerHTML,
  getOuterHTML,
  getText,
  textContent,
  innerText,
} from "./domUtils/stringify";
import {
  getAttributeValue,
  getName,
  getSiblings,
  hasAttrib,
  nextElementSibling,
  prevElementSibling,
} from "./domUtils/traversal";
import { openHandlesTimeout } from '../jest.config';
import { timeout } from '../rn_tester/examples/Layout/LayoutAnimationExample';

const CircularJSON = require('circular-json');
let nodeResult: any[] = [];
let timeOut: NodeJS.Timeout | string | number | undefined = -1;

export function DomUtilsPage() {
  const [result, setResult] = useState('请点击按钮，查看效果...');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.textArea}>
        <Text>{result}</Text>
      </ScrollView>
      <ScrollView style={styles.buttonArea}>
        <View style = {styles.view}>
          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDocument("<div><p><span></span></p><p></p></div>").children[0] as Element;
            const firstChild = dom.children[0] as Element;
            const matches = htmlparser2.DomUtils.removeSubsets([dom, firstChild.children[0]]);
            setResult(assembleResult('htmlparser2.DomUtils.removeSubsets([parseDocument("<div><p><span></span></p><p></p></div>")' +
              '.children[0] as Element, firstChild.children[0]]).length === 1',
              (matches.length === 1) + ''));
          }}>
            <Text style={styles.buttonText}>removeSubsets</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const markup = "<div><p><span></span></p><a></a></div>";
            const dom = parseDocument(markup).children[0] as Element;
            const p = dom.children[0] as Element;
            const span = p.children[0];
            const a = dom.children[1];
            const matches = htmlparser2.DomUtils.compareDocumentPosition(span, a);
            setResult(assembleResult('parseDocument("<div><p><span></span></p><a></a></div>").children[0] as Element => ' +
              'htmlparser2.DomUtils.compareDocumentPosition(span, a)', (matches === 2) + ''));
          }}>
            <Text style={styles.buttonText}>compareDocumentPosition</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            let root: Document = parseDocument("<div><p><span></span></p><a></a></div>");
            let dom: Element;
            let p: Element;
            let a: Element;
            [dom] = root.children as Element[];
            [p, a] = dom.children as Element[];
            const matches1 = htmlparser2.DomUtils.uniqueSort([p, a, p]);
            const matches2 = htmlparser2.DomUtils.uniqueSort([p, a]);
            setResult(assembleResult('"[p, a] = <div><p><span></span></p><a></a></div>".children.children;\n' +
              'uniqueSort([p, a, p] == uniqueSort([p, a]))', (CircularJSON.stringify(matches1) == CircularJSON.stringify(matches2)) + ''));
          }}>
            <Text style={styles.buttonText}>uniqueSort</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const expected = {
              idAsdf: fixture[1] as Element,
              tag2: [] as AnyNode[],
              typeScript: [] as AnyNode[],
            };
            for (let idx = 0; idx < 20; ++idx) {
              const node = fixture[idx * 2 + 1] as Element;
              expected.tag2.push(node.children[5]);
              expected.typeScript.push(node.children[1]);
            }
            const matches = htmlparser2.DomUtils.getElements({ id: "asdf" }, fixture, true, 1);
            setResult(assembleResult('getElements({ id: "asdf" }, fixture, true, 1).toEqual([expected.idAsdf])',
              (CircularJSON.stringify(matches) == CircularJSON.stringify([expected.idAsdf])) + ''));
          }}>
            <Text style={styles.buttonText}>getElements</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const expected = {
              idAsdf: fixture[1] as Element,
              tag2: [] as AnyNode[],
              typeScript: [] as AnyNode[],
            };
            for (let idx = 0; idx < 20; ++idx) {
              const node = fixture[idx * 2 + 1] as Element;
              expected.tag2.push(node.children[5]);
              expected.typeScript.push(node.children[1]);
            }
            const matches = htmlparser2.DomUtils.getElementById("asdf", fixture, true);
            setResult(assembleResult('getElementById("asdf", fixture, true).toBe(expected.idAsdf)',
              (matches === expected.idAsdf) + ''));
          }}>
            <Text style={styles.buttonText}>getElementById</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const expected = {
              idAsdf: fixture[1] as Element,
              tag2: [] as AnyNode[],
              typeScript: [] as AnyNode[],
            };
            for (let idx = 0; idx < 20; ++idx) {
              const node = fixture[idx * 2 + 1] as Element;
              expected.tag2.push(node.children[5]);
              expected.typeScript.push(node.children[1]);
            }
            const matches = htmlparser2.DomUtils.getElementsByTagName("tag2", fixture, true);
            setResult(assembleResult('getElementsByTagName("tag2", fixture, true).toEqual(expected.tag2)',
              (CircularJSON.stringify(matches) == CircularJSON.stringify(expected.tag2)) + ''));
          }}>
            <Text style={styles.buttonText}>getElementsByTagName</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const expected = {
              idAsdf: fixture[1] as Element,
              tag2: [] as AnyNode[],
              typeScript: [] as AnyNode[],
            };
            for (let idx = 0; idx < 20; ++idx) {
              const node = fixture[idx * 2 + 1] as Element;
              expected.tag2.push(node.children[5]);
              expected.typeScript.push(node.children[1]);
            }
            const matches = htmlparser2.DomUtils.getElementsByTagType(ElementType.Script, fixture, true);
            setResult(assembleResult('getElementsByTagType(ElementType.Script, fixture, true).toEqual(expected.typeScript)',
              (CircularJSON.stringify(matches) == CircularJSON.stringify(expected.typeScript)) + ''));
          }}>
            <Text style={styles.buttonText}>getElementsByTagType</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDOM("<div><p><img/></p><p><object/></p></div>")[0] as Element;
            const dom1 = parseDOM("<div><p><img/><span/></p><p><object/></p></div>")[0] as Element;
            const child = parseDOM("<span></span>")[0] as Element;
            const parents = dom.children as Element[];
            htmlparser2.DomUtils.append(parents[0].children[0], child);
            setResult(assembleResult('"<div><p><img/></p><p><object/></p></div>".append(parents[0].children[0], "<span></span>") ==' +
              '"<div><p><img/><span/></p><p><object/></p></div"',
              ((CircularJSON.stringify(dom) === CircularJSON.stringify(dom1))) + ''));
          }}>
            <Text style={styles.buttonText}>append</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDOM("<div><p><img/></p><p><object/></p></div>")[0] as Element;
            const dom1 = parseDOM("<div><p><img/><span/></p><p><object/></p></div>")[0] as Element;
            const child = parseDOM("<span></span>")[0] as Element;
            const parents = dom.children as Element[];
            htmlparser2.DomUtils.appendChild(parents[0], child);
            setResult(assembleResult('"<div><p><img/></p><p><object/></p></div>".appendChild(parents[0], child), "<span></span>") ==' +
              '<div><p><img/><span/></p><p><object/></p></div>',
              (CircularJSON.stringify(dom) == CircularJSON.stringify(dom1)) + ''));
          }}>
            <Text style={styles.buttonText}>appendChild</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDOM("<div><p><img/><object/></p><p></p></div>")[0] as Element;
            const dom1 = parseDOM("<div><p><object/></p><p></p></div>")[0] as Element;
            const parents = dom.children as Element[];
            const image = parents[0].children[0];
            htmlparser2.DomUtils.removeElement(image);
            setResult(assembleResult('"<div><p><img/><object/></p><p></p></div>".removeElement(image) == ' +
              '"<div><p><object/></p><p></p></div>"',
              (CircularJSON.stringify(dom) == CircularJSON.stringify(dom1)) + ''));
          }}>
            <Text style={styles.buttonText}>removeElement</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDOM("<div><p><img/></p><p><object/></p></div>")[0] as Element;
            const child = parseDOM("<span></span>")[0] as Element;
            const parents = dom.children as Element[];
            htmlparser2.DomUtils.prepend(parents[0].children[0], child);
            htmlparser2.DomUtils.prepend(parents[1].children[0], child);
            let result1 = assembleResult('"<div><p><img/></p><p><object/></p></div>".children[0].prepend(parents[0].children[0], "<span></span>").children.length === 1', 
            (parents[0].children.length === 1) + '');
            let result2 = assembleResult('"<div><p><img/></p><p><object/></p></div>".children[1].prepend(parents[1].children[0], "<span></span>").children.length === 2', 
            (parents[1].children.length === 2) + '');
            setResult(result1 + result2);
          }}>
            <Text style={styles.buttonText}>prepend</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDOM("<div><p><img/></p><p><object/></p></div>")[0] as Element;
            const child = parseDOM("<span></span>")[0] as Element;
            const parents = dom.children as Element[];
            htmlparser2.DomUtils.prependChild(parents[0], child);
            htmlparser2.DomUtils.prependChild(parents[1], child);
            let result1 = assembleResult('"<div><p><img/></p><p><object/></p></div>".children[0].prependChild("<span></span>").children.length === 1', 
            (parents[0].children.length === 1) + '');
            let result2 = assembleResult('"<div><p><img/></p><p><object/></p></div>".children[1].prependChild("<span></span>").children.length === 2', 
            (parents[1].children.length === 2) + '');
            setResult(result1 + result2);
          }}>
            <Text style={styles.buttonText}>prependChild</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const div = parseDOM("<div><p>")[0] as Element;
            const div1 = parseDOM("<div><template></p></template></div>")[0] as Element;
            const template = parseDOM("<template></template>")[0] as Element;
            const p = div.children[0];
            htmlparser2.DomUtils.replaceElement(p, template);
            htmlparser2.DomUtils.appendChild(template, p);
            setResult(assembleResult('"<div><p>".replaceElement("<p>", "<template></template>").appendChild("<template></template>", "<p>") == ' + 
              '"<div><template><p>/template></div>"',
              (CircularJSON.stringify(div) == CircularJSON.stringify(div1)) + ''));
          }}>
            <Text style={styles.buttonText}>replaceElement</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            timeConsumingOperations(1, setResult);
          }}>
            <Text style={styles.buttonText}>find</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
           timeConsumingOperations(2, setResult);
          }}>
            <Text style={styles.buttonText}>findAll</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            timeConsumingOperations(3, setResult);
          }}>
            <Text style={styles.buttonText}>filter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            timeConsumingOperations(4, setResult);
          }}>
            <Text style={styles.buttonText}>findOneChild</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            timeConsumingOperations(5, setResult);
          }}>
            <Text style={styles.buttonText}>findOne</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            timeConsumingOperations(6, setResult);
          }}>
            <Text style={styles.buttonText}>existsOne</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const matches = getOuterHTML(fixture[1]);
            setResult(assembleResult('getOuterHTML(fixture[1]) === " <script>text</script> <!-- comment --> <tag2> text </tag2>"',
              (matches) + ''));
          }}>
            <Text style={styles.buttonText}>getOuterHTML</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const matches = getInnerHTML(fixture[1]);
            setResult(assembleResult('getInnerHTML(fixture[1]) === <tag1 id="asdf"> <script>text</script> <!-- comment --> <tag2> text </tag2></tag1>',
              CircularJSON.stringify(matches)));
          }}>
            <Text style={styles.buttonText}>getInnerHTML</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const matches = getText(fixture[1]);
            setResult(assembleResult('getText(fixture[1]) === " text   text "',
              (matches === " text   text ") + ''));
          }}>
            <Text style={styles.buttonText}>getText</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const matches = textContent(fixture[1]);
            setResult(assembleResult('textContent(fixture[1]) === " text   text "',
              (matches === " text   text ") + ''));
          }}>
            <Text style={styles.buttonText}>textContent</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const matches = innerText(fixture[1]);
            setResult(assembleResult('innerText(fixture[1]) === "    text "',
              (matches === "    text ") + ''));
          }}>
            <Text style={styles.buttonText}>innerText</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDOM("<div><h1></h1><p><p><p></div>")[0] as Element;
            const matches = getSiblings(dom.children[1]);
            setResult(assembleResult('getSiblings(dom.children[1]).length === 4',
              (matches.length === 4) + ''));
          }}>
            <Text style={styles.buttonText}>getSiblings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const matches = hasAttrib(
              parseDOM("<div><h1></h1>test<p></p></div>")[0] as Element,
              "constructor"
            );
            setResult(assembleResult('hasAttrib(parseDOM("<div><h1></h1>test<p></p></div>")[0] as Element, "constructor") === false',
              (matches === false) + ''));
          }}>
            <Text style={styles.buttonText}>hasAttrib</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDOM(
              "<div><h1></h1>test<p></p></div>"
            )[0] as Element;
            const firstNode = dom.children[0];
            const next = nextElementSibling(firstNode);
            setResult(assembleResult('parseDOM("<div><h1></h1>test<p></p></div>")[0].toHaveProperty("tagName") === p',
              (next?.tagName === 'p') + ''));
          }}>
            <Text style={styles.buttonText}>nextElementSibling</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const dom = parseDOM(
              "<div><h1></h1>test<p></p></div>"
            )[0] as Element;
            const lastNode = dom.children[2];
            const prev = prevElementSibling(lastNode);
            setResult(assembleResult('parseDOM("<div><h1></h1>test<p></p></div>")[0].toHaveProperty("tagName") === h1',
              (prev?.tagName === 'h1') + ''));
          }}>
            <Text style={styles.buttonText}>prevElementSibling</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const matches = getAttributeValue(parseDOM("<div class='test'>")[0] as Element, "class");
            setResult(assembleResult('parseDOM("<div class=\'test\'>")[0] === "test"',
              (matches === 'test') + ''));
          }}>
            <Text style={styles.buttonText}>getAttributeValue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            judgeTimeOut();
            const matches = getName(parseDOM("<div>")[0] as Element);
            setResult(assembleResult('getName(parseDOM("<div>")[0] === "div"',
              (matches === 'div') + ''));
          }}>
            <Text style={styles.buttonText}>getName</Text>
          </TouchableOpacity>
          <Text style={styles.buttonBottom}></Text>
        </View>
      </ScrollView>
    </View>
  );
}

function assembleResult(input: string, result: string) {
  return '输入：\n' + input + '\n结果：\n' + result + '\n';
}

// 防抖，针对耗时操作多次快速点击只执行最后一次
function timeConsumingOperations (methodNum: number, fun: Function) {
  judgeTimeOut();
  timeOut = setTimeout(() => {
    let operationResult = '';
    let manyNodesWide = parseDocument(
      `<body>${"<div></div>".repeat(200_000)}Text</body>`,
    ).children;
    switch (methodNum) {
      case 1:
        const matches1 = find((elem) => elem.type === ElementType.Tag, manyNodesWide, true, Infinity);
        operationResult = assembleResult('find((elem) => elem.type === ElementType.Tag, manyNodesWide, true, Infinity).length === 200001',
          (matches1.length === 200001) + '');
          fun(operationResult);
          timeOut = -1;
        break;
      case 2:
        const matches2 = findAll((elem) => elem.name === "div", manyNodesWide);
        operationResult = assembleResult('findAll((elem) => elem.name === "div", manyNodesWide).length === 200000',
          (matches2.length === 200000) + '');
          fun(operationResult);
          timeOut = -1;
        break;
      case 3:
        const matches3 = filter((elem) => elem.type === ElementType.Tag, manyNodesWide);
        operationResult = assembleResult('filter((elem) => elem.type === ElementType.Tag, manyNodesWide).length === 200001',
          (matches3.length === 200001) + '');
          fun(operationResult);
          timeOut = -1;
        break;
      case 4:
        const matches4 = findOneChild((elem) => isTag(elem) && elem.name === "body", manyNodesWide);
        operationResult = assembleResult('findOneChild((elem) => isTag(elem) && elem.name === "body", manyNodesWide) === manyNodesWide[0]',
          (matches4 === manyNodesWide[0]) + '');
          fun(operationResult);
          timeOut = -1;
        break;
      case 5:
        const matches5 = findOne((elem) => elem.name === "body", manyNodesWide, true);
        operationResult = assembleResult('findOne((elem) => elem.name === "body", manyNodesWide, true) === manyNodesWide[0]',
          (matches5 === manyNodesWide[0]) + '');
          fun(operationResult);
        break;
      case 6:
        const matches6 = existsOne((elem) => elem.name === "body", manyNodesWide);
        operationResult = assembleResult('existsOne((elem) => elem.name === "body", manyNodesWide) === true',
          (matches6 === true) + '');
          fun(operationResult);
          timeOut = -1;
        break;
      default:
        break;
    }
  }, 1000);
}

// 判断延迟任务
function judgeTimeOut() {
  if (timeOut != -1) {
    clearTimeout(timeOut);
    timeOut = -1;
  }
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