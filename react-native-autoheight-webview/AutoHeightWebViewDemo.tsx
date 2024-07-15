import React, { useRef, useState } from 'react';



import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  Image,
  Button
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import AutoHeightWebView from 'react-native-autoheight-webview';
type Props = {};
type State = {
  progress: number,
};

const width = 50;
const pointerWidth = width * 0.47;
const labelStyles = StyleSheet.create({
  parentView: {
    position: 'relative',
  },
  sliderLabel: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: '100%',
    width: width,
    height: width,
  },
  sliderLabelText: {
    textAlign: 'center',
    lineHeight: width,
    borderRadius: width / 2,
    borderWidth: 2,
    borderColor: '#999',
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 18,
    color: '#aaa',
  },
  pointer: {
    position: 'absolute',
    bottom: -pointerWidth / 4,
    left: (width - pointerWidth) / 2,
    transform: [{ rotate: '45deg' }],
    width: pointerWidth,
    height: pointerWidth,
    backgroundColor: '#999',
  },
});


const styles = StyleSheet.create({
  
});




export const AutoHeightWebViewwDemo = () => {
  let html =  `
  <p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">
 <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula,”</span></p>
  `
  const [source, setSource] = useState(
   html
  )
  const [scalesPageToFit, setScalesPageToFit] = useState(false)
  const [styleValue,setStyleVlue] = useState(200)
  const [customStyleValue,setCustomStyleVlue] = useState("")
  const [showsHorizontalScrollIndicator,setShowsHorizontalScrollIndicator] = useState(false)
  const [showsVerticalScrollIndicator,setShowsVerticalScrollIndicator] = useState(true)
  const [originWhitelist,setOriginWhitelist] = useState<string[]>([])
  const [viewportContent,setViewportContent] = useState("")
  const [customScript,setCustomScript] = useState("")
  const [files,setFlies] = useState<any>([])
  const [size,setSize] = useState(0)
 const viewRef = useRef(null)

 
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-autoheight-webview">
          <TestCase
            key={"getInitStatus_1"}
            itShould={`source change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                 {isShow&& <AutoHeightWebView  source={{ html: source }} />}
                  <Button title={"start"} onPress={() => {
                    setSource(
                      `<p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span>
                        <span>Add a new paragraph to verify the attributes </span>
                      </p>`

                    )
                    setIsshow(false)
                    setTimeout(()=> {setIsshow(true)},0)
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
            itShould={`scalesPageToFit change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow&&<AutoHeightWebView source={{ html: html }} scalesPageToFit={scalesPageToFit} />}
                  <Button title={"start"} onPress={() => {
                    setScalesPageToFit(true)
                    setIsshow(false)
                    setTimeout(()=> {setIsshow(true)},0)
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
            itShould={`style change  `}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                 {isShow&& <AutoHeightWebView source={{ html: html }} style={{height:styleValue}}  />}
                  <Button title={"start"} onPress={() => {
                    setStyleVlue(500)
                 
                     setIsshow(false)
                     setTimeout(()=> {setIsshow(true)},1000)
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
            itShould={`showsHorizontalScrollIndicator change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow&&<AutoHeightWebView source={{ html: html }} showsHorizontalScrollIndicator={showsHorizontalScrollIndicator} />}
                  <Button title={"start"} onPress={() => {
                    setShowsHorizontalScrollIndicator(true)
                    setIsshow(false)
                    setTimeout(()=> {setIsshow(true)},0)
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
            itShould={`showsVerticalScrollIndicator change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                 {isShow&& <AutoHeightWebView source={{ html: html }} showsVerticalScrollIndicator={showsVerticalScrollIndicator}  style={{height:100}}/>}
                  <Button title={"start"} onPress={() => {
                    setShowsVerticalScrollIndicator(false)
                    setIsshow(false)
                    setTimeout(()=> {setIsshow(true)},0)
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
            key={"getInitStatus_6"}
            itShould={`originWhitelist change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                {isShow&&  <AutoHeightWebView source={{ html: html }} originWhitelist={originWhitelist} />}
                  <Button title={"start"} onPress={() => {
                    setOriginWhitelist(["*"])
                    setIsshow(false)
                    setTimeout(()=> {setIsshow(true)},0)
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
            itShould={`customStyle change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
            const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                {
                   isShow&&  <AutoHeightWebView source={{ html: html }} customStyle={customStyleValue} />
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
                   setTimeout(()=> {
                    setIsshow(true)
                   },1000)
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
            itShould={`onSizeUpdated change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              return (
                <View style={{ flex: 1 }}>
                  <AutoHeightWebView source={{ html: html }} onSizeUpdated={(size)=>{
                    setSize(size.height)
                  }} />
                  <Button title={"start"} onPress={() => {
                    if(size) {
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
            itShould={`viewportContent change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                 {isShow&& <AutoHeightWebView source={{ html: html }} viewportContent={viewportContent} />}
                  <Button title={"start"} onPress={() => {
                  setViewportContent('width=device-width, user-scalable=no')
                  setIsshow(false)
                  setTimeout(()=> {setIsshow(true)},0)
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
            itShould={`customScript change`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
             
              const [isShow,setIsshow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                  {isShow&&<AutoHeightWebView source={{ html: html }}  customScript={customScript} />}
                  <Button title={"start"} onPress={() => {
                    
                 
                   
                    
                  setCustomScript(`document.body.style.background = 'lightyellow'; `)
                  setIsshow(false)
                  setTimeout(()=> {setIsshow(true)},0)
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

const markerStyles = StyleSheet.create({
  webviewContainer:{
     height:300
  },
  webviewContainerChange:{
  height:500
  }
});

