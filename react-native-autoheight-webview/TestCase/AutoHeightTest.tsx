import React, {useState } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Button
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import AutoHeightWebView from 'react-native-autoheight-webview';

export const AutoHeightWebViewwDemo = () => {
  let html = `
  <p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">
 <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula,”</span></p>
  `
  const [source, setSource] = useState(
    html
  )
  const [scalesPageToFit, setScalesPageToFit] = useState(false)
  const [styleValue, setStyleVlue] = useState(200)
  const [customStyleValue, setCustomStyleVlue] = useState("")
  const [showsHorizontalScrollIndicator, setShowsHorizontalScrollIndicator] = useState(false)
  const [showsVerticalScrollIndicator, setShowsVerticalScrollIndicator] = useState(true)
  const [viewportContent, setViewportContent] = useState("")
  const [customScript, setCustomScript] = useState("")
  const [files, setFlies] = useState<any>([])
  const [size, setSize] = useState(0)
  return (
    <Tester style={{ paddingBottom: 60 }}>
      <ScrollView>
        <TestSuite name="react-native-autoheight-webview">
          <TestCase
            key={"getInitStatus_1"}
            itShould={`source change 数据源更改`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow, setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow && <AutoHeightWebView source={{ html: source }} />}
                  <Button title={"start"} onPress={() => {
                    setSource(
                      `<p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span>
                        <span>Add a new paragraph to verify the attributes </span>
                      </p>`

                    )
                    setIsshow(false)
                    setTimeout(() => { setIsshow(true) }, 0)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_2"}
            itShould={`scalesPageToFit change  是否可以缩放`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow, setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow && <AutoHeightWebView source={{ html: html }} scalesPageToFit={scalesPageToFit} />}
                  <Button title={"start"} onPress={() => {
                    setScalesPageToFit(true)
                    setIsshow(false)
                    setTimeout(() => { setIsshow(true) }, 0)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_3"}
            itShould={`style change  样式（高度更改）`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow, setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow && <AutoHeightWebView source={{ html: html }} style={{ height: styleValue }} />}
                  <Button title={"start"} onPress={() => {
                    setStyleVlue(500)

                    setIsshow(false)
                    setTimeout(() => { setIsshow(true) }, 1000)
                    setState(true)


                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_4"}
            itShould={`showsHorizontalScrollIndicator change  展示横向滚动条`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow, setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow && <AutoHeightWebView source={{ html: html }} showsHorizontalScrollIndicator={showsHorizontalScrollIndicator} />}
                  <Button title={"start"} onPress={() => {
                    setShowsHorizontalScrollIndicator(true)
                    setIsshow(false)
                    setTimeout(() => { setIsshow(true) }, 0)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_5"}
            itShould={`showsVerticalScrollIndicator change 纵向滚动条的展示与隐藏`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [isShow, setIsshow] = useState(true)
              return (
                <View>
                  {isShow && <AutoHeightWebView source={{
                    html:
                      `
                <p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>
                <p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>
                `

                  }} showsVerticalScrollIndicator={showsVerticalScrollIndicator} style={{ width: Dimensions.get('window').width - 50, marginTop: 35, height: 200 }} />}
                  <Button title={"start"} onPress={() => {
                    setShowsVerticalScrollIndicator(false)
                    setIsshow(false)
                    setTimeout(() => { setIsshow(true) }, 0)
                    setState(true)
                  }}></Button>
                </View>


              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={"getInitStatus_7"}
            itShould={`customStyle change  嵌入样式`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow, setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {
                    isShow && <AutoHeightWebView source={{ html: html }} customStyle={customStyleValue} />
                  }
                  <Button title={"start"} onPress={() => {
                    setCustomStyleVlue(`
                   * {
                   font-family: 'Times New Roman';
                 }
                 p {
                   font-size: 16px;
                   color:red;
                 }
                   `)
                    setIsshow(false)
                    setTimeout(() => {
                      setIsshow(true)
                    }, 1000)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_8"}
            itShould={`onSizeUpdated change  高度宽度变化回调`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                  <AutoHeightWebView source={{ html: html }} onSizeUpdated={(size) => {
                    setSize(size.height)
                  }} />
                  <Button title={"start"} onPress={() => {
                    if (size) {
                      setState(true)
                    }

                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_9"}
            itShould={`viewportContent change   html的mate标签的viewport属性值`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow, setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow && <AutoHeightWebView source={{ html: html }} viewportContent={viewportContent} />}
                  <Button title={"start"} onPress={() => {
                    setViewportContent('width=device-width, user-scalable=no')
                    setIsshow(false)
                    setTimeout(() => { setIsshow(true) }, 0)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_10"}
            itShould={`customScript change  嵌入js`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {

              const [isShow, setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow && <AutoHeightWebView source={{ html: html }} customScript={customScript} />}
                  <Button title={"start"} onPress={() => {
                    setCustomScript(`document.body.style.background = 'lightyellow'; `)
                    setIsshow(false)
                    setTimeout(() => { setIsshow(true) }, 0)
                    setState(true)

                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_11"}
            itShould={`files change   引入本地的css文件`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow, setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow && <AutoHeightWebView

                    source={{
                      html: `
                  <p>12456789</p>
                 `}} files={
                      files
                    } />}
                  <Button title={"start"} onPress={() => {
                    setIsshow(false)
                    setFlies([{
                      href: "resource://rawfile/index.css",
                      type: 'text/css',
                      rel: 'stylesheet'
                    }])

                    setTimeout(() => { setIsshow(true) }, 100)
                    setState(true)

                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

        </TestSuite>

      </ScrollView>
    </Tester>
  );
}


