import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import * as CSSselect from "./cssSelect/src";
import { parseDOM, parseDocument } from "htmlparser2";
import { Element, AnyNode } from "domhandler";
import { SelectorType, AttributeAction, parse, stringify } from "css-what";
import type { Adapter } from "./cssSelect/src/types";
import * as DomUtils from "domutils";
import { sortRules } from "./cssSelect/src/helpers/selectors";
import CircularJSON from 'circular-json';

const [dom] = parseDOM("<div id=foo><p>foo</p></div>") as Element[];
const [xmlDom] = parseDOM("<DiV id=foo><P>foo</P></DiV>", {
    xmlMode: true,
}) as Element[];
const dom1 = parseDocument(
  '<div data-foo="In the end, it doesn\'t really matter."></div><div data-foo="Indeed-that\'s a delicate matter.">',
);
const domChilds = dom1.children as Element[];
const dom2 = parseDOM(
  "<div><p>In the end, it doesn't really Matter.</p><div>Indeed-that's a delicate matter.</div>",
) as Element[];

export function CssSelectPage() {
  const [result, setResult] = useState('请点击按钮，查看效果...');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.textArea}>
        <Text>{result}</Text>
      </ScrollView>
      <ScrollView style={styles.buttonArea}>
        <View style = {styles.view}>
          <TouchableOpacity style={styles.button} onPress={() => {
            let curResult = CSSselect.selectAll("div", [dom, dom]);
            setResult(assembleResult('CSSselect.selectAll("div", [dom, dom]).length === 1', (curResult.length === 1) + ''));
          }} >
            <Text style={styles.buttonText}>between identical trees</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let curResult = CSSselect.selectAll("p", [dom, dom.children[0]]);
            setResult(assembleResult('CSSselect.selectAll("p", [dom, dom.children[0]]).length === 1', (curResult.length === 1) + ''));
          }} >
            <Text style={styles.buttonText}>between a superset and subset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
           let curResult = CSSselect.selectAll("p", [dom.children[0], dom]);
           setResult(assembleResult('CSSselect.selectAll("p", [dom.children[0], dom]).length === 1', (curResult.length === 1) + ''));
          }} >
            <Text style={styles.buttonText}>betweeen a subset and superset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
           let curResult = CSSselect.is(dom, (elem) => elem.attribs["id"] === "foo");
           setResult(assembleResult('CSSselect.is(dom, (elem) => elem.attribs["id"] === "foo")', (curResult) + ''));
          }} >
            <Text style={styles.buttonText}>function in `is`</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let curResult = CSSselect.is(dom, [
              [
                  {
                      type: SelectorType.Attribute,
                      action: AttributeAction.Equals,
                      ignoreCase: false,
                      name: "id",
                      namespace: null,
                      value: "foo",
                  },
              ],
            ]);
            let input = 'CSSselect.is(dom, [\n' +
              '[\n' +
              '    {\n' +
              '        type: SelectorType.Attribute,\n' +
              '        action: AttributeAction.Equals,\n' +
              '        ignoreCase: false,\n' +
              '        name: "id",\n' +
              '        namespace: null,\n' +
              '        value: "foo",\n' +
              '    },\n' +
              '],\n' +
            ']);\n'
            setResult(assembleResult(input, (curResult) + ''));
            }} >
            <Text style={styles.buttonText}>parsed selector in `is`</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const divs = [dom];
            let curResult = CSSselect.selectAll("div", divs);
            setResult(assembleResult('CSSselect.selectAll("div", divs).toStrictEqual(divs)', (CircularJSON.stringify(curResult) === CircularJSON.stringify(divs)) + ''));
          }} >
            <Text style={styles.buttonText}>should query array elements directly when they have no parents</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const ps = CSSselect.selectAll("p", [dom]);
            let curResult = CSSselect.selectAll("p", ps);
            setResult(assembleResult('CSSselect.selectAll("p", ps).toStrictEqual(ps)', (CircularJSON.stringify(curResult) === CircularJSON.stringify(ps)) + ''));
          }} >
            <Text style={styles.buttonText}>should query array elements directly when they have parents</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const [dom] = parseDOM(
              '<div><div class="foo">a</div><div class="bar">b</div></div>',
            ) as Element[];
            const curResult = CSSselect.selectAll(".foo:has(+.bar)", dom);
            let result1 = assembleResult('CSSselect.selectAll(".foo:has(+.bar)", dom).toHaveLength(1)', (curResult.length === 1) + '');
            let result2 = assembleResult('CSSselect.selectAll(".foo:has(+.bar)", dom)[0].toStrictEqual(dom.children[0])', (curResult[0] === dom.children[0]) + '');
            setResult(result1 + result2);
          }} >
            <Text style={styles.buttonText}>should support pseudos led by a traversal (#111)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const doc = parseDocument("<div id=foo><p>foo</p></div>");
            let curResult = CSSselect.selectAll(":contains(foo)", doc);
            setResult(assembleResult('CSSselect.selectAll(":contains(foo)", doc).toHaveLength(2)', (curResult.length === 2) + ''));
          }} >
            <Text style={styles.buttonText}>should accept document root nodes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const doc = parseDocument(`
            <div class="parent">
                <div class="one"><p class="p1"></p></div>
                <div class="two"><p class="p2"></p></div>
                <div class="three"><p class="p3"></p></div>
            </div>`);
            const two = CSSselect.selectOne(".two", doc);
            let a = {attribs: { class: "p2" }} as Object;
            let b = CSSselect.selectOne(".parent .two .p2", two, {relativeSelector: false});
            let result1 = assembleResult('CSSselect.selectOne(".parent .two .p2", two, {relativeSelector: false}).toMatchObject({ attribs: { class: "p2" }})',
              (CircularJSON.stringify(a) === CircularJSON.stringify(b)) + '');
            let c = CSSselect.selectOne(".parent .two .p3", two, { relativeSelector: false });
            let result2 = assembleResult('CSSselect.selectOne(".parent .two .p3", two, {relativeSelector: false}).toBeNull()', (c === null) + '');
            setResult(result1 + result2);
          }} >
            <Text style={styles.buttonText}>should support scoped selections relative to the root (#709)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const doc = parseDocument(`<template><div><p id="insert"></p></div></template>`);
            let result1 = assembleResult('CSSselect.selectAll("#insert", doc).toHaveLength(0)', (CSSselect.selectAll("#insert", doc).length === 0) + '');
            let result2 = assembleResult('CSSselect.selectOne("#insert", doc).toBeNull()', (CSSselect.selectOne("#insert", doc) === null) + '');
            let result3 = assembleResult('CSSselect.selectAll("template", doc).toHaveLength(1)', (CSSselect.selectAll("template", doc).length === 1) + '');
            let a = CSSselect.selectOne("template", doc);
            let b = (a !== undefined) && (a !== null);
            let result4 = assembleResult('(CSSselect.selectOne("template", doc).toBeTruthy()', b + '');

            const opts = { xmlMode: true };
            let result5 = assembleResult('CSSselect.selectAll("#insert", doc, opts).toHaveLength(1)', (CSSselect.selectAll("#insert", doc, opts).length === 0) + '');
            let c = CSSselect.selectOne("#insert", doc, opts);
            let d = (c !== undefined) && (c != null);
            let result6 = assembleResult('CSSselect.selectOne("#insert", doc, opts).toBeTruthy()', d + '');
            let result7 = assembleResult('CSSselect.selectAll("template", doc, opts).toHaveLength(1)', (CSSselect.selectAll("template", doc, opts).length === 1) + '');
            let e = CSSselect.selectOne("template", doc, opts);
            let f = (e !== undefined) && (e !== null);
            let result8 = assembleResult('CSSselect.selectOne("template", doc, opts).toBeTruthy()', f + '');
            setResult(result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8);
          }} >
            <Text style={styles.buttonText}>cannot query element within template context, but still query template itself</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            try {
              CSSselect.compile("::after");
            } catch (e) {
              setResult(assembleResult('CSSselect.compile("::after").toThrow("not supported")', e  + ''));
            } 
          }} >
            <Text style={styles.buttonText}>should throw with a pseudo-element</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            try {
              CSSselect.compile("> p", { relativeSelector: false })
            } catch (e) {
              setResult(assembleResult('CSSselect.compile("> p", { relativeSelector: false }).toThrow("Relative selectors are not allowed when the `relativeSelector` option is disabled")', e  + ''));
            } 
          }} >
            <Text style={styles.buttonText}>should throw an error if encountering a traversal-first selector with relative selectors disabled</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            try {
              CSSselect.compile("foo || bar");
            } catch (e) {
              setResult(assembleResult('CSSselect.compile("foo || bar").toThrow(notYet)', e  + ''));
            }
          }} >
            <Text style={styles.buttonText}>should throw with a column combinator</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let result1 = '';
            let result2 = '';
            let error = '';
            let result3 = '';
            try {
              CSSselect.compile("[foo|bar]");
            } catch (e) {
              result1 = assembleResult('CSSselect.compile("[foo|bar]").toThrow(notYet)', e  + '');
            }
            try {
              CSSselect.compile("[|bar]");
            } catch (e) {
              error = e + '';
            } finally {
              result2 = assembleResult('CSSselect.compile("[|bar]").not.toThrow()', error);
            }
            try {
              CSSselect.compile("[*|bar]")
            } catch (e) {
              result3 = assembleResult('CSSselect.compile("[*|bar]").toThrow(notYet)', e  + '');
            }
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should throw with attribute namespace</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let result1 = '';
            let result2 = '';
            let result3 = '';
            try {
              CSSselect.compile("foo|bar");
            } catch (e) {
              result1 = assembleResult('CSSselect.compile("foo|bar").toThrow(notYet)', e  + '');
            }
            try {
              CSSselect.compile("|bar");
            } catch (e) {
              result2 = assembleResult('CSSselect.compile("|bar").toThrow(notYet)', e  + '');
            } 
            try {
              CSSselect.compile("*|bar");
            } catch (e) {
              result3 = assembleResult('CSSselect.compile("*|bar").toThrow(notYet)', e  + '');
            }
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should throw with tag namespace</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let result1 = '';
            let result2 = '';
            let error = '';
            let result3 = '';
            try {
              CSSselect.compile("foo|*");
            } catch (e) {
              result1 = assembleResult('CSSselect.compile("foo|*").toThrow(notYet)', e  + '');
            }
            try {
              CSSselect.compile("|*");
            } catch (e) {
              result2 = assembleResult('CSSselect.compile("|*").toThrow(notYet)', e  + '');
            }
            try {
              CSSselect.compile("*|*");
            } catch (e) {
              error = e + '';
            } finally {
              result3 = assembleResult('CSSselect.compile("*|*").not.toThrow()', error);
            }
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should throw with universal selector</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let result1 = '';
            let result2 = '';
            try {
              CSSselect.compile(":any-link(test)");
            } catch (e) {
              result1 = assembleResult('CSSselect.compile(":any-link(test)").toThrow("doesn\'t have any arguments")', e  + '');
            }
            try {
              CSSselect.compile(":only-child(test)");
            } catch (e) {
              result2 = assembleResult('CSSselect.compile(":only-child(test)").toThrow("doesn\'t have any arguments")', e  + '');
            }
            setResult(result1 + result2);
          }} >
            <Text style={styles.buttonText}>hould throw if parameter is supplied for pseudo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            CSSselect.pseudos["foovalue"] = (elem, { adapter }, subselect) =>
            adapter.getAttributeValue(elem, "foo") === subselect;
            try {
              CSSselect.compile(":foovalue");
            } catch(e) {
              setResult(assembleResult('CSSselect.compile(":foovalue").toThrow("requires an argument");', e + ''));
            } finally {
              delete CSSselect.pseudos["foovalue"];
            }
          }} >
            <Text style={styles.buttonText}>should throw if no parameter is supplied for pseudo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            try {
              CSSselect.compile(":foovalue(boo)", {
                pseudos: { foovalue: "tag" }
              })
            } catch(e) {
              setResult(assembleResult('CSSselect.compile(":foovalue(boo)", {pseudos: { foovalue: "tag" }}).toThrow("doesn\'t have any arguments");', 
              e + ''));
            }
          }} >
            <Text style={styles.buttonText}>should throw if parameter is supplied for user-provided pseudo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let a = 'CSSselect.compile(":foovalue", {\n' +
            'pseudos: {\n' +
              'foovalue(_el, data) {\n' +
                'return data != null;\n' +
              '},\n' +
            '},\n' +
            '})\n'
            try {
              CSSselect.compile(":foovalue", {
                pseudos: {
                  foovalue(_el, data) {
                    return data != null;
                  },
                },
              })
            } catch(e) {
              setResult(assembleResult(a + '.toThrow("requires an argument");', e + ''));
            }
          }} >
            <Text style={styles.buttonText}>should throw if no parameter is supplied for user-provided pseudo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let curResult1: Function = CSSselect._compileUnsafe(":not(*)");
            let result1 = assembleResult('CSSselect._compileUnsafe(":not(*)").toBe(boolbase.falseFunc)', curResult1() + '');
            let curResult2: Function = CSSselect._compileUnsafe(":not(:nth-child(-1n-1))");
            let result2 = assembleResult('CSSselect._compileUnsafe(":not(:nth-child(-1n-1))").toBe(boolbase.falseFunc)', curResult2() + '');
            let curResult3: Function = CSSselect._compileUnsafe(":not(:not(:not(*)))");
            let result3 = assembleResult('CSSselect._compileUnsafe(":not(:not(:not(*)))").toBe(boolbase.falseFunc)', curResult3() + '');
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>in :not</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const matches = CSSselect.selectAll(":has(*)", [dom]);
            let result1 = assembleResult('CSSselect.selectAll(":has(*)", [dom]).toHaveLength(1))', (matches.length === 1) + '');
            let result2 = assembleResult('CSSselect.selectAll(":has(*)", [dom])[0]', (matches[0] === dom) + '');
            let curResult3: Function = CSSselect._compileUnsafe(":has(:nth-child(-1n-1))");
            let result3 = assembleResult('CSSselect._compileUnsafe(":has(:nth-child(-1n-1))").toBe(boolbase.falseFunc)', curResult3() + '');
            const matches2 = CSSselect.selectAll("p:has(+ *)", parseDOM("<p><p>"));
            let result4 = assembleResult('CSSselect.selectAll("p:has(+ *)", parseDOM("<p><p>")).toHaveLength(1))', (matches.length === 1) + '');
            let result5 = assembleResult('CSSselect.selectAll("p:has(+ *)", parseDOM("<p><p>"))..toHaveProperty("tagName", "p"))', JSON.stringify(matches2[0]));
            setResult(result1 + result2 + result3 + result4 + result5);
          }} >
            <Text style={styles.buttonText}>in :has</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let curResult1: Function = CSSselect._compileUnsafe(":is(*)");
            let result1 = assembleResult('CSSselect._compileUnsafe(":is(*)").toBe(boolbase.trueFunc)', curResult1() + '');
            let curResult2: Function = CSSselect._compileUnsafe(":is(:nth-child(-1n-1))");
            let result2 = assembleResult('CSSselect._compileUnsafe(":is(:nth-child(-1n-1))").toBe(boolbase.trueFunc)', curResult2() + '');
            let curResult3: Function = CSSselect._compileUnsafe(":is(:not(:not(*)))");
            let result3 = assembleResult('CSSselect._compileUnsafe(":is(:not(:not(*)))").toBe(boolbase.trueFunc)', curResult3() + '');
            let curResult4: Function = CSSselect._compileUnsafe(":is(*, :scope)");
            let result4 = assembleResult('CSSselect._compileUnsafe(":is(*, :scope)").toBe(boolbase.trueFunc)', curResult4() + '');
            setResult(result1 + result2 + result3 + result4);
          }} >
            <Text style={styles.buttonText}>in :is</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let curResult: Function = CSSselect._compileUnsafe("* :not(*) foo");
            let result = assembleResult('CSSselect._compileUnsafe("* :not(*) foo").toBe(boolbase.trueFunc)', curResult() + '');
            setResult(result);
          }} >
            <Text style={styles.buttonText}>should skip unsatisfiable</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let curResult: Function = CSSselect._compileUnsafe("*, foo");
            let result = assembleResult('CSSselect._compileUnsafe("*, foo").toBe(boolbase.trueFunc)', curResult() + '');
            setResult(result);
          }} >
            <Text style={styles.buttonText}>should promote universally valid</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
             const rootFunc = jest.fn();
             let curResult: Function = CSSselect._compileUnsafe(":is(*), foo", { rootFunc });
             let result = assembleResult('CSSselect._compileUnsafe(":is(*), foo", { rootFunc }).toBe(rootFunc)', curResult() + '');
             setResult(result);
          }} >
            <Text style={styles.buttonText}>should promote `rootFunc`</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
             let matches = CSSselect.selectAll(":matches(p, div)", [dom]);
             let result1 = assembleResult('CSSselect.selectAll(":matches(p, div)", [dom]).toHaveLength(2)', (matches.length === 2) + '');
             matches = CSSselect.selectAll(":matches(div, :not(div))", [dom]);
             let result2 = assembleResult('CSSselect.selectAll(":matches(div, :not(div))", [dom]).toHaveLength(2)', (matches.length === 2) + '');
             let expression = 'CSSselect.selectAll(\n' +
             '  ":matches(boo, baa, tag, div, foo, bar, baz)",\n' +
             '  [dom],\n'
             ');\n'
             matches = CSSselect.selectAll(
               ":matches(boo, baa, tag, div, foo, bar, baz)",
               [dom],
             );
             let result3 = assembleResult(expression + '.toHaveLength(1)', (matches.length === 1) + '');
             let result4 = assembleResult(expression + '[0].toBe(dom)', (matches[0] === dom) + '');
             setResult(result1 + result2 + result3 + result4);
          }} >
            <Text style={styles.buttonText}>matches</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
              const matches = CSSselect.selectAll("p < div", [dom]);
              let result1 = assembleResult('CSSselect.selectAll("p < div", [dom]).toHaveLength(1)', (matches.length === 1) + '');
              let result2 = assembleResult('CSSselect.selectAll("p < div", [dom])[0].toBe(dom)', (matches[0] === dom) + '');
              setResult(result1 + result2);
          }} >
            <Text style={styles.buttonText}>parent selector (&lt)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = CSSselect.selectOne("p", [dom]);
            let result1 = assembleResult('CSSselect.selectOne("p", [dom]).toBe(dom.children[0])', (matches === dom.children[0]) + '');
            matches = CSSselect.selectOne(":contains(foo)", [dom]);
            let result2 = assembleResult('CSSselect.selectOne(":contains(foo)", [dom]).toBe(dom)', (matches === dom) + '');
            setResult(result1 + result2);
          }} >
            <Text style={styles.buttonText}>selectOne</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const opts = { xmlMode: true };
            let matches = CSSselect.is(xmlDom, "DiV:has(P)", opts);
            let result1 = assembleResult('CSSselect.is(xmlDom, "DiV:has(P)", opts).toBe(true)', (matches === true) + '');
            matches = CSSselect.is(xmlDom, "DiV:not(div)", opts);
            let result2 = assembleResult('CSSselect.is(xmlDom, "DiV:not(div)", opts).toBe(true)', (matches === true) + '');
            matches = CSSselect.is(xmlDom.children[0], "DiV:has(P) :not(p)", opts);
            let result3 = assembleResult('CSSselect.is(xmlDom.children[0], "DiV:has(P) :not(p)", opts).toBe(true)', (matches === true) + '');
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>options</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const [dom] = parseDOM('<div id="foo"><p>bar</p></div>',) as Element[];
            const query = CSSselect.compile("#bar p", { cacheResults: false });
            let matches = CSSselect.selectAll(query, [dom]);
            let result1 = assembleResult('(parseDOM(\'<div id="foo"><p>bar</p></div>\',) as Element[]).toHaveLength(0)',
              (matches.length === 0) + '');
            dom.attribs["id"] = "bar";
            matches = CSSselect.selectAll(query, [dom]);
            let result2 = assembleResult('(parseDOM(\'<div id="foo"><p>bar</p></div>\',) as Element[]).toHaveLength(1)',
              (matches.length === 1) + '')
            setResult(result1 + result2);
          }} >
            <Text style={styles.buttonText}>options-cacheResults</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const adapter: Adapter<AnyNode, Element> = { ...DomUtils };
            delete adapter.prevElementSibling;
            const dom = parseDOM(
                `${"<p>foo".repeat(10)}<div>bar</div>`,
            ) as Element[];
            let matches = CSSselect.selectAll("p + div", dom, { adapter });
            let matches1 = CSSselect.selectAll("p + div", dom);
            setResult(assembleResult('CSSselect.selectAll("p + div", dom, { adapter }).toStrictEqual(CSSselect.selectAll("p + div", dom)', 
              (matches === matches1) + ''));
          }} >
            <Text style={styles.buttonText}>optional adapter methods</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            const adapter: Adapter<AnyNode, Element> = { ...DomUtils };
            delete adapter.prevElementSibling;
            const dom = parseDOM(
                `${"<p>foo".repeat(10)}<div>bar</div>`,
            ) as Element[];
            let matches = CSSselect.selectAll("p + div", dom, { adapter });
            let matches1 = CSSselect.selectAll("p + div", dom);
            setResult(assembleResult('CSSselect.selectAll("p + div", dom, { adapter }).toStrictEqual(CSSselect.selectAll("p + div", dom)', 
              (matches === matches1) + ''));
          }} >
            <Text style={styles.buttonText}>Adjacent sibling</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = CSSselect.selectAll(
              '[data-foo="indeed-that\'s a delicate matter." i]',
              dom1
            );
            let result1 = assembleResult('CSSselect.selectAll(\'[data-foo="indeed-that\'s a delicate matter." i]\', dom1).toHaveLength(1)',
              (matches.length === 1) + '');
            let result2 = assembleResult('CSSselect.selectAll(\'[data-foo="indeed-that\'s a delicate matter." i]\', dom1).toStrictEqual([domChilds[1]])',
              ((matches as any[]) === ([domChilds[1]] as any[])) + '');
            matches = CSSselect.selectAll(
              '[data-foo="inDeeD-THAT\'s a DELICATE matteR." i]',
              dom1
            );
            let result3 = assembleResult('[data-foo="inDeeD-THAT/\'s a DELICATE matteR." i],dom1, dom1).toStrictEqual([domChilds[1]]',
              (matches === ([domChilds[1]] as object[])) + '');
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should for =</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = CSSselect.selectAll("[data-foo~=IT i]", dom1);
            let result1 = assembleResult('CSSselect.selectAll("[data-foo~=IT i]", dom1).toHaveLength(1)',
              (matches.length === 1) + '');
            let result2 = assembleResult('CSSselect.selectAll("[data-foo~=IT i]", dom1).toStrictEqual([domChilds[0]])',
              (matches === ([domChilds[0]] as any[])) + '');
            matches = CSSselect.selectAll("[data-foo~=dElIcAtE i]", dom1);
            let result3 = assembleResult('CSSselect.selectAll("[data-foo~=dElIcAtE i]", dom).toStrictEqual([domChilds[1]])',
              (matches === ([domChilds[1]] as any[])) + '');
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should for ~=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = CSSselect.selectAll("[data-foo|=indeed i]", dom1);
            let result1 = assembleResult('CSSselect.selectAll("[data-foo|=indeed i]", dom1).toHaveLength(1)',
              (matches.length === 1) + '');
            let result2 = assembleResult('CSSselect.selectAll("[data-foo|=indeed i]", dom1).toStrictEqual([domChilds[1]])',
              (matches === ([domChilds[1]] as any[])) + '');
            matches = CSSselect.selectAll("[data-foo|=inDeeD i]", dom1);
            let result3 = assembleResult('CSSselect.selectAll("[data-foo|=inDeeD i]", dom1).toStrictEqual([domChilds[1]])',
              (matches === ([domChilds[1]] as any[])) + '');
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should for |=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = CSSselect.selectAll("[data-foo*=IT i]", dom1);
            let result1 = assembleResult('CSSselect.selectAll("[data-foo*=IT i]", dom1).toHaveLength(1)',
              (matches.length === 1) + '');
            let result2 = assembleResult('CSSselect.selectAll("[data-foo*=IT i]", dom1).toStrictEqual([domChilds[0]])',
              (matches === ([domChilds[0]] as any[])) + '');
            matches = CSSselect.selectAll("[data-foo*=tH i]", dom1);
            let result3 = assembleResult('CSSselect.selectAll("[data-foo*=tH i]", dom1).toStrictEqual(domChilds])',
              ((matches as object) === domChilds) + '');
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should for *=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = CSSselect.selectAll("[data-foo^=IN i]", dom1);
            let result1 = assembleResult('CSSselect.selectAll("[data-foo^=IN i]", dom1).toHaveLength(2)',
              (matches.length === 2) + '');
            let result2 = assembleResult('CSSselect.selectAll("[data-foo^=IN i]", dom1).toStrictEqual(domChilds)',
              ((matches as object[]) === domChilds) + '');
            matches = CSSselect.selectAll("[data-foo^=in i]", dom1);
            let result3 = assembleResult('CSSselect.selectAll("[data-foo^=in i]", dom1).toStrictEqual(domChilds)',
              ((matches as object[]) === domChilds) + '');
              matches = CSSselect.selectAll("[data-foo^=iN i]", dom1);
            let result4 = assembleResult('CSSselect.selectAll("[data-foo^=iN i]", dom1).toStrictEqual(domChilds)',
              ((matches as object[]) === domChilds) + '');
            setResult(result1 + result2 + result3 + result4);
          }} >
            <Text style={styles.buttonText}>should for ^=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = CSSselect.selectAll('[data-foo$="MATTER." i]', dom1);
            let result1 = assembleResult('CSSselect.selectAll(\'[data-foo$="MATTER." i]\', dom1).toHaveLength(2)',
              (matches.length === 2) + '');
            let result2 = assembleResult('CSSselect.selectAll(\'[data-foo$="MATTER." i]\', dom1).toStrictEqual(domChilds)',
              ((matches as object[]) === domChilds) + '');
            matches = CSSselect.selectAll('[data-foo$="matter." i]', dom1);
            let result3 = assembleResult('CSSselect.selectAll(\'[data-foo$="matter." i]\', dom1).toStrictEqual(domChilds)',
              ((matches as object[]) === domChilds) + '');
              matches = CSSselect.selectAll('[data-foo$="MaTtEr." i]', dom1);
            let result4 = assembleResult('CSSselect.selectAll(\'[data-foo$="MaTtEr." i]\', dom1).toStrictEqual(domChilds)',
              ((matches as object[]) === domChilds) + '');
            setResult(result1 + result2 + result3 + result4);
          }} >
            <Text style={styles.buttonText}>should for $=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = CSSselect.selectAll(
              '[data-foo!="indeed-that\'s a delicate matter." i]',
              dom1
            );
            let result1 = assembleResult('CSSselect.selectAll(\'[data-foo!="indeed-that\'s a delicate matter." i]\',dom1).toHaveLength(1)',
              (matches.length === 1) + '');
            let result2 = assembleResult('CSSselect.selectAll(\'[data-foo!="indeed-that\'s a delicate matter." i]\',dom1).toStrictEqual([domChilds[0]])',
              ((matches as object[]) === ([domChilds[0]])) + '');
            matches = CSSselect.selectAll(
                '[data-foo!="inDeeD-THAT\'s a DELICATE matteR." i]',
                dom1
            );
            let result3 = assembleResult('CSSselect.selectAll(\'[data-foo!="inDeeD-THAT\'s a DELICATE matteR." i]\',dom1).toStrictEqual([domChilds[0]])',
              ((matches as object[]) === ([domChilds[0]])) + '');
              matches = CSSselect.selectAll('[data-foo$="MaTtEr." i]', dom1);
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should for !=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let result1 = '';
            let result2 = '';
            let result3 = '';
            try {
              CSSselect.compile("foo|*");
            } catch(e) {
              result1 = e + '';
            }
            result1 = assembleResult('CSSselect.compile("foo|*")).toThrow("not yet supported by css-select)")', result1);

            try {
              CSSselect.compile("|*");
            } catch(e) {
              result2 = e + '';
            }
            result2 = assembleResult('CSSselect.compile("|*")).toThrow("not yet supported by css-select)")', result2);

            try {
              CSSselect.compile("*|*");
            } catch(e) {
              result3 = e + '';
            } finally {
              if (result3 === '') {
                result3 = '未抛出异常';
              }
            }
            result3 = assembleResult('CSSselect.compile("*|*").not.toThrow()")', result3);
            setResult(result1 + result2 + result3);
          }} >
            <Text style={styles.buttonText}>should throw with universal selector</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            let matches = parseSortStringify(":not(:empty):empty:contains(a):icontains(a):has(div):is(div):is(foo bar):is([foo])");
            setResult(assembleResult('parseSortStringify(":not(:empty):empty:contains(a):icontains(a):has(div):is(div):is(foo bar):is([foo])") ===' +
              ':contains(a):icontains(a):has(div):is(foo bar):not(:empty):empty:is([foo]):is(div)', 
              (matches === ':contains(a):icontains(a):has(div):is(foo bar):not(:empty):empty:is([foo]):is(div)') + ''));
          }} >
            <Text style={styles.buttonText}>should sort pseudo selectors</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
           const matches = CSSselect.selectAll(":first-child", dom2);
           let result1 = assembleResult('CSSselect.selectAll(":first-child", dom2).toHaveLength(2)', (matches.length === 2) + '');
           let result2 = assembleResult('CSSselect.selectAll(":first-child", dom2).toStrictEqual([dom2[0], dom2[0].children[0]]', 
             (matches === ([dom2[0],  dom2[0].children[0]] as Element[])) +'');
           setResult(result1 + result2);
          }} >
            <Text style={styles.buttonText}>:first-child</Text>
          </TouchableOpacity>

          <Text style={styles.buttonBottom}></Text>
        </View>
      </ScrollView>
    </View>
  );
}

function parseSortStringify(selector: string): string {
    const parsed = parse(selector);
    for (const token of parsed) {
        sortRules(token);
    }
    return stringify(parsed);
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