import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {js_beautify, html_beautify, css_beautify} from 'js-beautify';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

//js_beautify的测试
var uglyJs = "function(){console.log('Hello, World!');}";
var prettyJs = js_beautify(uglyJs);
console.log(uglyJs);
console.log(prettyJs);

//html_beautify的测试
var uglyHtml =
  '<!DOCTYPE html><head><title>Simple HTML5 Website</title></head><body><p>Welcome to My Website</p></body></html>';
var prettyHtml = html_beautify(uglyHtml);
console.log(uglyHtml);
console.log(prettyHtml);

//css_beautify的测试
var uglyCss =
  '<style>header{background-color: #333;color: #fff;padding: 10px 0;text-align: center;}</style>';
var prettyCss = css_beautify(uglyCss);
console.log(uglyCss);
console.log(prettyCss);

('use strict');

var code = 'x=3.14;myFunction();function myFunction() {y=3.14,z=1024}';
var code1 = js_beautify(code, {indent_size: 8}); // 一个缩进级别的空格数。默认为 4。
var code2 = js_beautify(code, {indent_char: '\t'}); // 用于缩进的字符。默认为" "（空格）\t 跳格(移至下一列)
var code3 = js_beautify(code, {indent_with_tabs: true}); // 是否应该使用制表符(tab)进行缩进。默认为 false。
console.log(code);
console.log(code1);
console.log(code2);
console.log(code3);

//"end_with_newline": false, // 是否应以新行结束输出。默认为 false。
var obj1 = {completed: false, id: 1, title: 'delectus aut autem', userId: 1};
var dataJson1 = JSON.stringify(obj1);
var prettyObj1 = js_beautify(dataJson1, {
  end_with_newline: false, // 是否应以新行结束输出。默认为 false。
});
console.log(dataJson1);
console.log(prettyObj1);

//"max_preserve_newlines": 2,// 允许保留连续新行的最大数量。
var text1 = `Is there any 





available space here`;
var prettyText1 = js_beautify(text1, {
  max_preserve_newlines: 2, // 允许保留连续新行的最大数量。
});
console.log(text1);
console.log(prettyText1);

// "space_after_anon_function": true, 测试
var text2 = `(function(){
  alert(1);
})();`;
var prettyText2 = js_beautify(text2, {
  space_after_anon_function: true, // 在函数关键字（如function或=>）后面和函数名或括号之间是否加空格。默认为 false。
});
console.log(text2);
console.log(prettyText2);

//keep-array-indentation保留数组缩进
var text3 = `[{id:1,title:"潮流女装"},
  {id:2,title:"品牌男装"},
  {id:3,title:"手机电脑"}] `;
var prettyText3 = js_beautify(text3, {
  keep_array_indentation: true, //保持数组缩进，默认false
});
console.log(text3);
console.log(prettyText3);

//e4x测试
var text4 = `<book>
  <title>Catch 22</title>
  <author>Joseph Heller</author>
  <year>1961</year>
  <publisher>Simon & Schuster</publisher>
</book>`;
var prettyText4 = js_beautify(text4, {
  e4x: false, //  是否应忽略XML元素。默认为 false（在处理时：错误！未知的表达式类型：e4x）。
});
console.log(text4);
console.log(prettyText4);

// "space-after-named-function": true, 测试
var text5 = ` function foo(){
    return true;
  }`;
var prettyText5 = js_beautify(text5, {
  'space-after-named-function': true, //在命名函数的括号前添加一个空格，例如,function example ()。
});
console.log(text5);
console.log(prettyText5);

//"unindent-chained-methods"测试,不缩进链式方法调用。
var text6 = `const array = [1, 2, 3, 4, 5];
    const newArray = array
        .map(item => item * 2)
        .filter(item => item > 5)
        .reduce((acc, cur) => acc + cur, 0);`;

var prettyText6 = js_beautify(text6, {
  'unindent-chained-methods': false, //不缩进链式方法调用。
});
console.log(text6);
console.log(prettyText6);

// "break-chained-methods": true, 测试,将链式方法调用分布在多行
var text7 = `var arr = [1, 2, 3, 4, 5];
  var sum = arr.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b);
  console.log(sum);`;

var prettyText7 = js_beautify(text7, {
  'break-chained-methods': true, //将链式方法调用分布在多行
});
console.log(text7);
console.log(prettyText7);

// "space_in_paren": true, 测试,是否应在括号内加上一个空格。默认为 false。
var text8 = "function hello(name){return 'Hello, '+name+'!';}";
var prettyText8 = js_beautify(text8, {
  space_in_paren: true, //是否应在括号内加上一个空格。默认为 false
});
console.log(text8);
console.log(prettyText8);

//"space_in_empty_paren": false,  测试 // 是否应在空的括号和括号内只有空白的情况下加上一个空格。默认为 false。
var text9 = `function greet(){
    console.log('Hello, world!');
}
greet();`;
var prettyText9 = js_beautify(text9, {
  space_in_empty_paren: true, // 是否应在空的括号和括号内只有空白的情况下加上一个空格。默认为 false。
});
console.log(text9);
console.log(prettyText9);

// "keep_array_indentation": false, 测试 // 在美化和新行/缩进时，是否应保留数组的缩进。
var text10 = `var arr = [1,2,3,
  4,
  5, 6,     7,
  8,
  9];`;

var prettyText10 = js_beautify(text10, {
  indent_size: 0,
  keep_array_indentation: false,
});
var prettyCode11 = js_beautify(text10, {
  indent_size: 0,
  keep_array_indentation: true,
});
console.log(text10);
console.log(prettyText10);
console.log(prettyCode11);

// "unescape_strings": false, // 是否应将ES6模板字面量、字符串内容中的转义字符解编码。默认为 false。
//   var text11 = "Hello%20World%21";
//   var prettyText11 = js_beautify(text11,{"unescape_strings": false})
//   var prettyCode12 = js_beautify(text11,{"unescape_strings": true})
//   console.log(text11)
//   console.log(prettyText11)
//   console.log(prettyCode12)

// "operator_position": "before-newline", // 在打破行（换行）时，运算符应放置在新行的哪一侧。可选值包括"before-newline"（默认）、"after-newline"或"preserve-newline"。
var text12 = 'let a = 1+2+3+4+5+6\n+7+8+9+10;';
var prettyText12 = js_beautify(text12, {operator_position: 'before-newline'});
var prettyCode13 = js_beautify(text12, {operator_position: 'after-newline'});
var prettyCode14 = js_beautify(text12, {operator_position: 'preserve-newline'});

console.log('原始代码:' + text12);
console.log(prettyText12);
console.log(prettyCode13);
console.log(prettyCode14);

// "indent-empty-lines": false, //保留空行上的缩进
var text13 = `function() {
    
  return 'Hello world!';
  
  }`;
var prettyText13 = js_beautify(text13, {indent_empty_lines: true});
console.log(text13);
console.log('indent_empty_lines:' + prettyText13);

//"wrap_line_length": 0, // 代码的最大行长度。默认为 0（表示忽略换行）。
var text14 =
  "This is a very long string that definitely.exceeds the typical line length you'd see in most code editors. It should be automatically wrapped by js-beautify.";
var prettyText14 = js_beautify(text14, {indent_size: 2, wrap_line_length: 20});
var prettyText15 = js_beautify(text14, {indent_size: 2, wrap_line_length: 10});
console.log(prettyText14);

var sourceCode =
  'h1 {color: red; font-size: 20px;} h2 {color: blue; font-size: 18px;}';
// "indent_size": 0,   // 一个缩进级别的空格数。默认为4。
var prettySourceCode1 = css_beautify(sourceCode, {indent_size: 2});
console.log(prettySourceCode1);

// "indent_char": " ", // 用于缩进的字符。默认为" "（空格）\t 跳格(移至下一列)
var prettySourceCode2 = css_beautify(sourceCode, {indent_char: ' '});
console.log(prettySourceCode2);

// "indent_with_tabs": true, // 是否应该使用制表符(tab)进行缩进。默认为 false。
var prettySourceCode3 = css_beautify(sourceCode, {indent_with_tabs: true});
console.log(prettySourceCode3);

// "eol": "\n", // 结束行的字符。默认为"\n"。
var prettySourceCode4 = css_beautify(sourceCode, {eol: '\n'});
console.log(prettySourceCode4);

// "end_with_newline": false, // 是否应以新行结束输出。默认为 false。
var prettySourceCode5 = css_beautify(sourceCode, {end_with_newline: false});
var prettySourceCode55 = css_beautify(sourceCode, {end_with_newline: true});
console.log(prettySourceCode5);
console.log(prettySourceCode55);

// "brace_style": "collapse", //  设置括号样式。可选值包括"collapse"（默认）、"expand"、"end-expand"和"none"。
var prettySourceCode6 = css_beautify(sourceCode, {brace_style: 'expand'});
console.log(prettySourceCode6);

var sourceCode1 = 'div, p, span { color: red; }';
// selector-separator-newline在多个选择器之间添加换行符
var prettySourceCode7 = css_beautify(sourceCode1, {
  selector_separator_newline: 'true',
});
console.log(prettySourceCode7);

var sourceCode2 = '.class1 {color: red;} .class2 {background-color: blue;}';
// newline-between-rules在CSS规则之间添加换行符
var prettySourceCode8 = css_beautify(sourceCode2, {
  newline_between_rules: 'true',
});
console.log(prettySourceCode8);

var sourceCode3 =
  '<html><head><title>My Title</title></head><body></body></html>';
// "indent_size": 4,   // 一个缩进级别的空格数。默认为4。
var prettySourceCode9 = html_beautify(sourceCode3, {indent_size: 10});
console.log(prettySourceCode9);

// "indent_char": " ", // 用于缩进的字符。默认为" "（空格）\t 跳格(移至下一列)
var prettySourceCode10 = html_beautify(sourceCode3, {indent_char: ' '});
console.log(prettySourceCode10);

// "indent_with_tabs": true, // 是否应该使用制表符(tab)进行缩进。默认为 false。
var prettySourceCode11 = html_beautify(sourceCode3, {indent_with_tabs: false});
console.log(prettySourceCode11);

// "eol": "\n", // 结束行的字符。默认为"\n"。"\n"为换行
var prettySourceCode12 = html_beautify(sourceCode3, {eol: '\n'});
console.log(prettySourceCode12);

// "end_with_newline": false, // 是否应以新行结束输出。默认为 false
var prettySourceCode13 = html_beautify(sourceCode3, {end_with_newline: false});
console.log(prettySourceCode13);

//indent-inner-html缩进<head>和<body>部分,默认值为false。
var prettySourceCode14 = html_beautify(sourceCode3, {
  'indent-inner-html': true,
});
console.log(prettySourceCode14);

var sourceCode4 =
  '<html><head><title>My \nTitle</title></head><body></body></html>';
//preserve_newlines 是否在输出中保留原始HTML代码中的换行,默认为false
var prettySourceCode15 = html_beautify(sourceCode4, {preserve_newlines: true});
console.log(prettySourceCode15);

var sourceCode5 = `<html><head></head>
<body>
<p>Hello</p>
<p>World!</p>




<p>More content!</p>
</body></html>`;
//max_preserve_newlines 要保留在一个块中的最大换行数[10]
var options = {
  indent_size: '4',
  indent_char: ' ',
  max_preserve_newlines: 2, // 设置要保留的最大换行数
  preserve_newlines: true, // 启用换行保持功能
};
var prettySourceCode16 = html_beautify(sourceCode5, options);
console.log(prettySourceCode16);

//brace-style 设置花括号样式，可选值包括"collapse"（默认）、"expand"、"end-expand"和"none"。
var sourceCode6 = `<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      body {background-color: #f0f0f0;}
    </style>
  </head>
  <body>
    <p>这个页面的背景色是灰色。</p>
  </body>
</html>`;
var prettySourceCode17 = html_beautify(sourceCode6, {brace_style: 'collapse'});
console.log(prettySourceCode17);

//indent_scripts 控制script 标签内的内容应该如何缩进的,可选值"keep"（保持原有缩进）、"separate"（使得内容更深的缩进）和 "normal"默认值（使其与其它标签保持相同的缩进）
var sourceCode7 = `
<html>
<head>
<script>var a = 1;
var b = 2;</script>
</head>
<body>
<h1>Test</h1>
<p>Hello World</p>
</body>
</html>`;
var prettySourceCode18 = html_beautify(sourceCode7, {indent_scripts: 'normal'});
console.log(prettySourceCode18);

//wrap-line-length 控制每行的最大字符数,默认值250
var options1 = {
  indent_size: '2', //每个缩进级别的空格数
  indent_char: ' ', //用作缩进的字符
  wrap_line_length: '50', //每行的最大字符数，超出则换行
};
var sourceCode8 =
  '<p>这是一个非常长的段落，它包含了大量的文字和标签，导致不易在一行内进行清晰展示。</p><div><h1>标题</h1><p>内容</p></div>';
var prettySourceCode19 = html_beautify(sourceCode8, options1);
console.log(prettySourceCode19);

//wrap_attributes 将属性换到新行 有5个值：“auto”(不换行)、“force”(第2个起换行)、 “force-aligned”(第2个起换行，与第1个属性对齐)、 “force-expand-multiline(所有属性都换行)，默认：“auto”
var sourceCode9 = `<a href="http://example.com" id="someid" class="someclass" style="color:blue;">Link</a>`;
console.log('Original HTML:');
console.log(sourceCode9);
var prettySourceCode20 = html_beautify(sourceCode9, {
  wrap_attributes: 'auto',
  wrap_line_length: 80,
});
console.log("\n'auto':");
console.log(prettySourceCode20);
var prettySourceCode21 = html_beautify(sourceCode9, {wrap_attributes: 'force'});
console.log("\n'force':");
console.log(prettySourceCode21);
var prettySourceCode22 = html_beautify(sourceCode9, {
  wrap_attributes: 'force-aligned',
});
console.log("\n'force-aligned':");
console.log(prettySourceCode22);
var prettySourceCode23 = html_beautify(sourceCode9, {
  wrap_attributes: 'force-expand-multiline',
});
console.log("\n'force-expand-multiline':");
console.log(prettySourceCode23);

//wrap_attributes_min_attrs 设置属性的个数到达多少时，每个属性都会换行,默认为2
var options3 = {
  indent_size: 2,
  wrap_attributes: 'force-expand-multiline',
  wrap_attributes_min_attrs: 2,
};
var prettySourceCode24 = html_beautify(sourceCode9, options3);
console.log("\n'wrap_attributes_min_attrs':2");
console.log(prettySourceCode24);

var options4 = {
  indent_size: 2,
  wrap_attributes: 'force-expand-multiline',
  wrap_attributes_min_attrs: 6,
};
var prettySourceCode25 = html_beautify(sourceCode9, options4);
console.log("\n'wrap_attributes_min_attrs':6");
console.log(prettySourceCode25);

//wrap-attributes-indent-size 属性换行缩进大小 默认值为4
var prettySourceCode26 = html_beautify(sourceCode9, {
  wrap_attributes: 'force-expand-multiline', // 强制换行属性
  wrap_attributes_indent_size: 10, // 在切换到新行后，属性应该缩进5个字符
});
console.log("\n'wrap_attributes_indent_size':10");
console.log(prettySourceCode26);

//Inline，[],指定哪些元素为内联元素，内联元素不会产生新的行
var sourceCode10 = '<p><span>Hello</span></p><p><span>World</span></p>';
var prettySourceCode27 = html_beautify(sourceCode10, {inline: ['span']}); //设置<span>标签为一个内联元素
console.log('原始代码');
console.log(sourceCode10);
console.log("\n'inline': ['span']");
console.log(prettySourceCode27);

//inline_custom_elements，设置自定义组件为内联元素 默认为true                (安卓重点关注)
var sourceCode11 = `<button-component>lorem ipsum</button-component>`;
var prettySourceCode28 = html_beautify(sourceCode11, {
  nline_custom_elements: true,
});
console.log('原始代码');
console.log(sourceCode11);
console.log("\n'nline_custom_elements':true");
console.log(prettySourceCode28);

//unformatted []不会被重新格式化的标签列表（默认为内联）
var sourceCode12 =
  '<div><span>This is a test</span><b>test<b/><i>test<i/></div>';
var prettySourceCode29 = html_beautify(sourceCode12, {
  unformatted: ['span', 'b', 'i'],
});
console.log('原始代码');
console.log(sourceCode12);
console.log("\n''unformatted': ['span', 'b', 'i']");
console.log(prettySourceCode29);

//content_unformatted：[]数组中标签的内容不会重新格式化，默认为pre
var sourceCode13 = `
<pre>
This is some preformatted text.
It should be preserved just like this.
</pre>
<div>
This is some div content.
The formatting should be improved.
</div>`;
var prettySourceCode30 = html_beautify(sourceCode13, {
  content_unformatted: ['pre'],
});
console.log('原始代码');
console.log(sourceCode13);
console.log("\n'content_unformatted': ['pre']");
console.log(prettySourceCode30);

//extra_liners,数组内的标签列表（默认为[head，body，/html/），其前面应该有一个额外的换行符。
var sourceCode14 = `<div><p>Hello World!</p></div>`;
var prettySourceCode31 = html_beautify(sourceCode14, {extra_liners: ['p']});
console.log('原始代码');
console.log(sourceCode14);
console.log("\n'extra_liners': ['p']");
console.log(prettySourceCode31);

function BeautifyDemo(): JSX.Element {
  0;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{uglyJs}</Text>
        <Text style={styles.titleStyle}>{'\nprettyJs:'}</Text>
        <Text>{prettyJs}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal HTML:'}</Text>
        <Text>{uglyHtml}</Text>
        <Text style={styles.titleStyle}>{'\npretty HTML:'}</Text>
        <Text>{prettyHtml}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal CSS:'}</Text>
        <Text>{uglyCss}</Text>
        <Text style={styles.titleStyle}>{'\npretty CSS:'}</Text>
        <Text>{prettyCss}</Text>
        <Text style={styles.textStyle}>Js细分测试</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{code}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_size': 8"}</Text>
        <Text>{code1}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_char':'\t'"}</Text>
        <Text>{code2}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_with_tabs': true"}</Text>
        <Text>{code3}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{dataJson1}</Text>
        <Text style={styles.titleStyle}>{"\n'end_with_newline'："}</Text>
        <Text>{prettyObj1}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text1}</Text>
        <Text style={styles.titleStyle}>{"\n'max_preserve_newlines':2"}</Text>
        <Text>{prettyText1}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text2}</Text>
        <Text style={styles.titleStyle}>
          {"\n'space_after_anon_function':true"}
        </Text>
        <Text>{prettyText2}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text3}</Text>
        <Text style={styles.titleStyle}>
          {"\n'keep_array_indentation':true"}
        </Text>
        <Text>{prettyText3}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text4}</Text>
        <Text style={styles.titleStyle}>{"\n'e4x': false"}</Text>
        <Text>{prettyText4}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text5}</Text>
        <Text style={styles.titleStyle}>
          {"\n'space-after-named-function':true"}
        </Text>
        <Text>{prettyText5}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text6}</Text>
        <Text style={styles.titleStyle}>
          {"\n'unindent-chained-methods':false"}
        </Text>
        <Text>{prettyText6}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text7}</Text>
        <Text style={styles.titleStyle}>
          {"\n'break-chained-methods':true"}
        </Text>
        <Text>{prettyText7}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text8}</Text>
        <Text style={styles.titleStyle}>{"\n'space_in_paren':true"}</Text>
        <Text>{prettyText8}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text9}</Text>
        <Text style={styles.titleStyle}>{"\n'space_in_empty_paren':true"}</Text>
        <Text>{prettyText9}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text10}</Text>
        <Text style={styles.titleStyle}>
          {"\n'keep_array_indentation': false ,:"}
        </Text>
        <Text>{prettyText10}</Text>
        <Text style={styles.titleStyle}>
          {"\n'keep_array_indentation': true ,:"}
        </Text>
        <Text>{prettyCode11}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        {/* <Text>
     {text11}
      </Text>
      <Text style={styles.titleStyle}>
      {"\n'unescape_strings': false,："}
      </Text>
      <Text>
       {prettyText11}
      </Text>
      <Text style={styles.titleStyle}>
      {"\n'unescape_strings': true,："}
      </Text>
      <Text>
      {prettyCode12}
      </Text> */}
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text12}</Text>
        <Text style={styles.titleStyle}>
          {"\noperator_position: 'before-newline'："}
        </Text>
        <Text>{prettyText12}</Text>
        <Text style={styles.titleStyle}>
          {"\noperator_position: 'after-newline'："}
        </Text>
        <Text>{prettyCode13}</Text>
        <Text style={styles.titleStyle}>
          {"\noperator_position: 'preserve-newline'："}
        </Text>
        <Text>{prettyCode14}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text13}</Text>
        <Text style={styles.titleStyle}>{"\n'indent-empty-lines'： "}</Text>
        <Text>{prettyText13}</Text>
        <Text style={styles.titleStyle}>{'\nOriginal JS:'}</Text>
        <Text>{text14}</Text>
        <Text style={styles.titleStyle}>{"\n'wrap_line_length': 20，： "}</Text>
        <Text>{prettyText14}</Text>
        <Text style={styles.titleStyle}>{"\n'wrap_line_length': 10，："}</Text>
        <Text>{prettyText15}</Text>
        <Text style={styles.textStyle}>Css细分测试</Text>
        <Text style={styles.titleStyle}>{'\npretty CSS:'}</Text>
        <Text>{sourceCode}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_size: 2'"}</Text>
        <Text>{prettySourceCode1}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_char': ' '"}</Text>
        <Text>{prettySourceCode2}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_with_tabs': true"}</Text>
        <Text>{prettySourceCode3}</Text>
        <Text style={styles.titleStyle}>{"\n'eol: \n'"}</Text>
        <Text>{prettySourceCode4}</Text>
        <Text style={styles.titleStyle}>{"\n'end_with_newline': false"}</Text>
        <Text>{prettySourceCode5}这里为end_with_newline": false,换不了行</Text>
        <Text style={styles.titleStyle}>{"\n'end_with_newline': true"}</Text>
        <Text>{prettySourceCode55}这里为end_with_newline": true,可换行</Text>
        <Text style={styles.titleStyle}>{"\n'brace_style': 'collapse'"}</Text>
        <Text>{prettySourceCode6}</Text>
        <Text style={styles.titleStyle}>{'\npretty CSS:'}</Text>
        <Text>{sourceCode1}</Text>
        <Text style={styles.titleStyle}>
          {"\n'selector_separator_newline': 'true'"}
        </Text>
        <Text>{prettySourceCode7}</Text>
        <Text style={styles.titleStyle}>{'\npretty CSS:'}</Text>
        <Text>{sourceCode2}</Text>
        <Text style={styles.titleStyle}>
          {"\n'newline_between_rules': 'true'"}
        </Text>
        <Text>{prettySourceCode8}</Text>

        <Text style={styles.textStyle}>html细分测试</Text>
        <Text style={styles.titleStyle}>{'Original HTML:'}</Text>
        <Text>{sourceCode3}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_size': 10"}</Text>
        <Text>{prettySourceCode9}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_char':''"}</Text>
        <Text>{prettySourceCode10}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_with_tabs': false"}</Text>
        <Text>{prettySourceCode11}</Text>
        <Text style={styles.titleStyle}>{"\n'eol': 换行符"}</Text>
        <Text>{prettySourceCode12}</Text>
        <Text style={styles.titleStyle}>{"\n'end_with_newline': false"}</Text>
        <Text>{prettySourceCode13}这里为end_with_newline": false,换不了行</Text>
        <Text style={styles.titleStyle}>{"\n'indent-inner-html': true"}</Text>
        <Text>{prettySourceCode14}</Text>
        <Text style={styles.titleStyle}>{"\n'preserve_newlines': true"}</Text>
        <Text>{prettySourceCode15}</Text>
        <Text style={styles.titleStyle}>
          {"\n'max_preserve_newlines': '2', 'preserve_newlines': true"}
        </Text>
        <Text>{prettySourceCode16}</Text>
        <Text style={styles.titleStyle}>{"\n'brace_style': collapse"}</Text>
        <Text>{prettySourceCode17}</Text>
        <Text style={styles.titleStyle}>{"\n'indent_scripts': normal"}</Text>
        <Text>{prettySourceCode18}</Text>
        <Text style={styles.titleStyle}>{"\n'wrap_line_length': 50"}</Text>
        <Text>{prettySourceCode19}</Text>
        <Text style={styles.titleStyle}>{'Original HTML:'}</Text>
        <Text>{sourceCode9}</Text>
        <Text style={styles.titleStyle}>{"\n'auto':"}</Text>
        <Text>{prettySourceCode20}</Text>
        <Text style={styles.titleStyle}>{"\n'force':"}</Text>
        <Text>{prettySourceCode21}</Text>
        <Text style={styles.titleStyle}>{"\n'force-aligned':"}</Text>
        <Text>{prettySourceCode22}</Text>
        <Text style={styles.titleStyle}>{"\n'force-expand-multiline':"}</Text>
        <Text>{prettySourceCode23}</Text>
        <Text style={styles.titleStyle}>
          {"\n'wrap_attributes_min_attrs':2"}
        </Text>
        <Text>{prettySourceCode24}</Text>
        <Text style={styles.titleStyle}>
          {"\n'wrap_attributes_min_attrs':6"}
        </Text>
        <Text>{prettySourceCode25}</Text>
        <Text style={styles.titleStyle}>
          {"\n'wrap_attributes_indent_size':5"}
        </Text>
        <Text>{prettySourceCode26}</Text>
        <Text style={styles.titleStyle}>{'Original HTML:'}</Text>
        <Text>{sourceCode10}</Text>
        <Text style={styles.titleStyle}>{"\n'inline': ['span']"}</Text>
        <Text>{prettySourceCode27}</Text>
        <Text style={styles.titleStyle}>{'Original HTML'}</Text>
        <Text>{sourceCode11}</Text>
        <Text style={styles.titleStyle}>
          {"\n'nline_custom_elements':true"}
        </Text>
        <Text>{prettySourceCode28}</Text>
        <Text style={styles.titleStyle}>{'Original HTML'}</Text>
        <Text>{sourceCode12}</Text>
        <Text style={styles.titleStyle}>
          {"\n''unformatted': ['span', 'b', 'i']"}
        </Text>
        <Text>{prettySourceCode29}</Text>
        <Text style={styles.titleStyle}>{'Original HTML'}</Text>
        <Text>{sourceCode13}</Text>
        <Text style={styles.titleStyle}>
          {"\n'content_unformatted': ['pre']"}
        </Text>
        <Text>{prettySourceCode30}</Text>
        <Text style={styles.titleStyle}>{'Original HTML'}</Text>
        <Text>{sourceCode14}</Text>
        <Text style={styles.titleStyle}>{"\n'extra_liners': ['p']"}</Text>
        <Text>{prettySourceCode31}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BeautifyDemo;
