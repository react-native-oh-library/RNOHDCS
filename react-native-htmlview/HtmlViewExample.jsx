import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import React, { useState } from 'react';
import { StyleSheet, Linking, ScrollView, Text, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';

const htmlContent = `
<h1>Hello, World!</h1>
<p>This is a <a href="https://www.vmallres.com">link</a></p>
<p>Here is an image: <img src="https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/10086102004921/428_428_a_mobileFF345C8650FF6E88771386A6433556D0.jpg" alt="Example Image" /></p>
`;

const htmlContent2 = `
<h1>htmlContent2</h1>
<h2>htmlContent2</h2>
<h3>htmlContent2</h3>
`;

const htmlContent3 = `
<p>This is a <a href="https://www.vmallres.com">link</a></p>
`;

const htmlContent4 = `
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
`;

const htmlContent5 = `
<p>111111111</p>
<p>222222222</p>
`;

const htmlContent6 = `
<br>111111111</br>
<br>222222222</br>
`;

const htmlContent7 = `
<p>This is a <a href="https://www.vmallres.com">link</a></p>
<p>Here is an image: <img src="https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/10086102004921/428_428_a_mobileFF345C8650FF6E88771386A6433556D0.jpg"/></p>
`;

const htmlContent8 = `
    <p>This is a paragraph with a <a href="https://example.com">link</a>.</p>
`;

const htmlContent9 = `
    <p>This is a paragraph with a <a href="https://www.vmallres.com">link</a>.</p>
`;

const htmlContent10 = `
    <p>This is a paragraph with a <a href="https://example.com">link</a>.</p>
`;

const htmlContent11 = `
   <p><h1>Test</h1>This is a paragraph with some text that may break across lines.</p>
   <p>Another paragraph with more text.</p>
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    // Define custom styles for HTML elements
    a: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 20,
        borderColor: '#000000',
        borderWidth: 2
    },
    img: {
        width: 200,
        height: 100,
    },
});

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    a: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 40,
        borderColor: '#000000',
        borderWidth: 4
    },
});

const renderNode = (node, index, siblings, parent, defaultRenderer) => {
    if (node.name === 'p') {
        return (
            <Text key={index} style={{ marginBottom: 10, color: 'red' }}>
                {defaultRenderer(node.children, parent)}
            </Text>
        );
    }
    if (node.name === 'img') {
        const { src } = node.attribs;
        return <Image key={index} style={{ width: 200, height: 200 }} source={{ uri: src }} />;
    }
}

const disRenderNode = (node, index, siblings, parent, defaultRenderer) => {
    if (node.name === 'p') {
        return (
            <Text key={index} style={{ marginBottom: 10, color: 'red' }}>
                {defaultRenderer(node.children, parent)}
            </Text>
        );
    }
    if (node.name === 'img') {
        return null;
    }
}


export default function HtmlViewExample() {

    const [linkText, setlinkText] = useState('');
    const [linkText2, setlinkText2] = useState('');

    const handleLinkLongPress = (url) => {
        setlinkText(`You long pressed: ${url}`);
    };

    const handleLinkLongPress2 = (url) => {
        setlinkText2(`You long pressed: ${url}`);
    };

    const handleLinkPress = (url) => {
        // Open the link using Linking module
        Linking.openURL('https://www.vmallres.com');
    };

    return (
        <Tester>
            <ScrollView>
                <TestSuite name="TesterHtmlViewExample">
                    <TestCase
                        tags={['C_API']}
                        itShould="整体效果,点击蓝色Link,可以进行跳转">
                        <HTMLView
                            value={htmlContent}
                            stylesheet={styles} // Optional: Pass custom styles for HTML elements
                            onLinkPress={(url) => Linking.openURL(url)} // Optional: Handle link presses
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample2">
                    <TestCase
                        tags={['C_API']}
                        itShould="标题类型h1,h2,h3">
                        <HTMLView
                            value={htmlContent2}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample3">
                    <TestCase
                        tags={['C_API']}
                        itShould="点击红色Link">
                        <HTMLView
                            value={htmlContent3}
                            stylesheet={styles2} // Optional: Pass custom styles for HTML elements
                            onLinkPress={(url) => Linking.openURL(url)} // Optional: Handle link presses
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample4">
                    <TestCase
                        tags={['C_API']}
                        itShould="设置无序列表项目符号的样式">
                        <HTMLView
                            value={htmlContent4}
                            bullet={'•'}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample5">
                    <TestCase
                        tags={['C_API']}
                        itShould="设置无序列表项目符号的样式">
                        <HTMLView
                            value={htmlContent4}
                            bullet={'*'}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample6">
                    <TestCase
                        tags={['C_API']}
                        itShould="出现在每个P标签末尾">
                        <HTMLView
                            value={htmlContent5}
                            paragraphBreak={'paragraphBreak'}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample7">
                    <TestCase
                        tags={['C_API']}
                        itShould="出现在每个新br标签前后">
                        <HTMLView
                            value={htmlContent6}
                            lineBreak={'lineBreak'}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample8">
                    <TestCase
                        tags={['C_API']}
                        itShould="renderNode方法渲染,renderNode可以自定义方法.p标签红色,边距10.图片200x200">
                        <HTMLView
                            value={htmlContent7}
                            renderNode={renderNode}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample9">
                    <TestCase
                        tags={['C_API']}
                        itShould="renderNode方法渲染,renderNode可以自定义方法.这里禁用了img标签">
                        <HTMLView
                            value={htmlContent7}
                            renderNode={disRenderNode}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample10">
                    <TestCase
                        tags={['C_API']}
                        itShould="onLinkPress,当点击跳转的时候,可以自定义操作,例如这里点击的网址为https://example.com,实际上最后跳转到了https://www.vmallres.com">
                        <HTMLView
                            value={htmlContent8}
                            onLinkPress={(url) => handleLinkPress(url)}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample11">
                    <TestCase
                        tags={['C_API']}
                        itShould="onLinkLongPress,长按操作。长按Link,可以显示对应网址https://www.vmallres.com">
                        <Text>现在长按的链接为：{linkText}</Text>
                        <HTMLView
                            value={htmlContent9}
                            stylesheet={styles2}
                            onLinkLongPress={(url) => handleLinkLongPress(url)}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample12">
                    <TestCase
                        tags={['C_API']}
                        itShould="onLinkLongPress,长按操作。长按Link,可以显示对应网址https://example.com">
                        <Text>现在长按的链接为：{linkText2}</Text>
                        <HTMLView
                            value={htmlContent10}
                            stylesheet={styles2}
                            onLinkLongPress={(url) => handleLinkLongPress2(url)}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample12">
                    <TestCase
                        tags={['C_API']}
                        itShould="段落换行控制,搭配paragraphBreak和lineBreak使用.当addLineBreaks为false,paragraphBreak换行操作不会生效">
                        <HTMLView
                            value={htmlContent11}
                            addLineBreaks={false}
                            paragraphBreak={'qwq'}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample13">
                    <TestCase
                        tags={['C_API']}
                        itShould="段落换行控制,搭配paragraphBreak和lineBreak使用.当addLineBreaks为true,paragraphBreak换行操作生效">
                        <HTMLView
                            value={htmlContent11}
                            addLineBreaks={true}
                            paragraphBreak={'qwq'}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample14">
                    <TestCase
                        tags={['C_API']}
                        itShould="段落换行控制,搭配paragraphBreak和lineBreak使用.当addLineBreaks为false,lineBreak换行操作不会生效">
                        <HTMLView
                            value={htmlContent6}
                            addLineBreaks={false}
                            lineBreak={'QAQ'}
                        />
                    </TestCase>
                </TestSuite>

                <TestSuite name="TesterHtmlViewExample15">
                    <TestCase
                        tags={['C_API']}
                        itShould="段落换行控制,搭配paragraphBreak和lineBreak使用.当addLineBreaks为false,lineBreak换行操作不会生效">
                        <HTMLView
                            value={htmlContent6}
                            addLineBreaks={true}
                            lineBreak={'QAQ'}
                        />
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}
