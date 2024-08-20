import React, { useState } from "react";
import { View, Text, Button, ScrollView, Image } from "react-native";
import ViewShot, { captureRef, captureScreen, releaseCapture } from "react-native-view-shot";
import { Tester, TestCase } from '@rnoh/testerino';
import FS from "react-native-fs";

export default function ViewShotTest() {
  const myText1 = React.useRef<ViewShot>(null);
  const myText = React.useRef<ViewShot>(null);
  const myText2 = React.useRef<ViewShot>(null);
  const myText3 = React.useRef<ViewShot>(null);
  const myText4 = React.useRef<ViewShot>(null);
  const myText5 = React.useRef<ViewShot>(null);
  const myText6 = React.useRef<ViewShot>(null);
  const myText7 = React.useRef<ViewShot>(null);
  const myText8 = React.useRef<ViewShot>(null);
  const myText9 = React.useRef<ViewShot>(null);
  const myButton = React.useRef<ViewShot>(null);
  const [textUri, setTextUri] = useState('');
  const [widthUri, setWidthUri] = useState('');
  const [width1Uri, setWidth1Uri] = useState('');
  const [buttonUri, setButtonUri] = useState('');
  const [firstUri, setFirstUri] = useState('');
  const [secondUri, setSecondUri] = useState('');
  const [pngUri, setPngUri] = useState('');
  const [jpgUri, setJpgUri] = useState('');
  const [quality1Uri, setQuality1Uri] = useState('');
  const [quality2Uri, setQuality2Uri] = useState('');
  const [result1Uri, setResult1Uri] = useState('');
  const [result2Uri, setResult2Uri] = useState('');
  const [result3Uri, setResult3Uri] = useState('');
  const [windwoUri, setWindowUri] = useState('');
  const [screenData, setScreenData] = useState('');
  const [textData, setTextData] = useState('');
  const [buttonData, setButtonData] = useState('');
  const [quality1Data, setQuality1nData] = useState('');
  const [quality2Data, setQuality2Data] = useState('');
  const [widthData, setWidthData] = useState('');
  const [width1Data, setWidth1Data] = useState('');
  const [releaseUri, setReleaseUri] = useState('');

  const ViewShotWindows = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureScreen({ width: 500, height: 200 }).then((res) => {
        FS.readFile(res, 'base64').then((data) => {
          setScreenData(data);
          setWindowUri(res);
          props.setState(res);
        })
      })
    };

    return (
      <View style={{ height: 400 }}>
        <View style={{ marginTop: 20 }}>
          <Image source={{ uri: `data:image/png;base64,${screenData}` }} style={{ width: 400, height: 300 }} />
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {windwoUri}</Text>
          <Button title="全屏截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotRelease = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const release = () => {
      if(releaseUri){
        releaseCapture(releaseUri)
        props.setState(true);
      }
    };

    const capture = () => {
      captureRef(myText7, { width: 500, height: 200 }).then((res) => {
        setReleaseUri(res);
      })
    };

    return (
      <View style={{ height: 130 }}>
        <View>
          <ViewShot ref={myText7} style={{ backgroundColor: '#bfa' }} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {releaseUri}</Text>
          <View style={{marginBottom:5}}>
            <Button title="截图" onPress={capture} />
          </View>
          <Button title="释放截图截图" onPress={release} />
        </View>
      </View>
    );
  };

  const ViewShotWidth = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText8).then((res) => {
        FS.readFile(res, 'base64').then((data) => {
          setWidthData(data);
          setWidthUri(res);
          props.setState(res);
        })
      })
    };

    return (
      <View style={{ height: 200 }}>
        <View>
          <ViewShot ref={myText8} style={{ backgroundColor:'yellow',width:100,height:50}} children={<Text style={{color:'#000'}}>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 20 }}>
          <Image source={{ uri: `data:image/png;base64,${widthData}` }} style={{ width: 100, height: 50 }} />
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {widthUri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotWidth1 = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText9).then((res) => {
        FS.readFile(res, 'base64').then((data) => {
          setWidth1Data(data);
          setWidth1Uri(res);
          props.setState(res);
        })
      })
    };

    return (
      <View style={{ height: 300 }}>
        <View>
          <ViewShot ref={myText9} style={{ backgroundColor:'blue',width:200,height:100}} >
            <Text>测试截图</Text>
            <Text>测试截图</Text>
            <Text>测试截图</Text>
            <Text>测试截图</Text>
            <Text>测试截图</Text>
          </ViewShot>
        </View>
        <View style={{ marginTop: 20 }}>
          <Image source={{ uri: `data:image/png;base64,${width1Data}` }} style={{ width: 200, height: 100 }} />
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {width1Uri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotText = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText1).then((res) => {
        FS.readFile(res, 'base64').then((data) => {
          setTextData(data);
          setTextUri(res);
          props.setState(res);
        })
      })
    };

    return (
      <View style={{ height: 300 }}>
        <View>
          <ViewShot ref={myText1} style={{ width:200,height:100,backgroundColor:'red'}} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 20 }}>
          <Image source={{ uri: `data:image/png;base64,${textData}` }} style={{ width: 200, height: 100 }} />
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {textUri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotButton = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myButton).then((res) => {
        FS.readFile(res, 'base64').then((data) => {
          setButtonData(data);
          setButtonUri(res);
          props.setState(res);
        })
      })
    };

    return (
      <View style={{ height: 270 }}>
        <View>
          <ViewShot ref={myButton} style={{width:200,height:100, backgroundColor: '#bfa'}} children={<Button title="测试截图" />}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
        <Image source={{ uri: `data:image/png;base64,${buttonData}` }} style={{ width: 200, height: 100 }} />
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {buttonUri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotFirst = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText, { fileName: 'FirstCapture' }).then((res) => {
        setFirstUri(res);
        props.setState(res);
      })
    };

    return (
      <View style={{ height: 100 }}>
        <View>
          <ViewShot ref={myText} style={{ backgroundColor: '#bfa' }} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {firstUri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotSecond = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText, { fileName: 'SecondCapture' }).then((res) => {
        setSecondUri(res);
        props.setState(res);
      })
    };

    return (
      <View style={{ height: 100 }}>
        <View>
          <ViewShot ref={myText} style={{ backgroundColor: '#bfa' }} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {secondUri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotPng = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText, { format: 'png' }).then((res) => {
        setPngUri(res);
        props.setState(res);
      })
    };

    return (
      <View style={{ height: 100 }}>
        <View>
          <ViewShot ref={myText} style={{ backgroundColor: '#bfa' }} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {pngUri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotJpg = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText, { format: 'jpg' }).then((res) => {
        setJpgUri(res);
        props.setState(res);
      })
    };

    return (
      <View style={{ height: 100 }}>
        <View>
          <ViewShot ref={myText} style={{ backgroundColor: '#bfa' }} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {jpgUri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotQuality1 = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText2, { quality: 1,format:"jpg" }).then((res) => {
        FS.readFile(res, 'base64').then((data) => {
          setQuality1nData(data);
          setQuality1Uri(res);
          props.setState(res);
        })
      })
    };

    return (
      <View style={{ height: 300 }}>
        <View>
          <ViewShot ref={myText2} style={{ width: 200, height: 100, backgroundColor: 'red' }} children={<Text style={{fontSize:50}}>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Image source={{ uri: `data:image/png;base64,${quality1Data}` }} style={{ width: 200, height: 100 }} />
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {quality1Uri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotQuality2 = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText3, { quality: 0.1,format:"jpg" }).then((res) => {
        FS.readFile(res, 'base64').then((data) => {
          setQuality2Data(data);
          setQuality2Uri(res);
           props.setState(res);
        })
      })
    };

    return (
      <View style={{ height: 300 }}>
        <View>
          <ViewShot ref={myText3} style={{ width: 200, height: 100, backgroundColor: 'red' }} children={<Text style={{fontSize:50}}>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
        <Image source={{ uri: `data:image/png;base64,${quality2Data}` }} style={{ width: 200, height: 100 }} />
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {quality2Uri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotResult1 = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText4, { result: 'tmpfile' }).then((res) => {
        setResult1Uri(res);
        props.setState(res);
      })
    };

    return (
      <View style={{ height: 100 }}>
        <View>
          <ViewShot ref={myText4} style={{ backgroundColor: '#bfa' }} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {result1Uri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotResult2 = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText5, { result: 'base64' }).then((res) => {
        setResult2Uri(res);
        props.setState(res);
      })
    };

    return (
      <View style={{ height: 100 }}>
        <View>
          <ViewShot ref={myText5} style={{ backgroundColor: '#bfa' }} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {result2Uri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };

  const ViewShotResult3 = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const capture = () => {
      captureRef(myText6, { result: 'data-uri' }).then((res) => {
        setResult3Uri(res);
        props.setState(res);
      })
    };

    return (
      <View style={{ height: 100 }}>
        <View>
          <ViewShot ref={myText6} style={{ backgroundColor: '#bfa' }} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径: {result3Uri}</Text>
          <Button title="截图" onPress={capture} />
        </View>
      </View>
    );
  };
  
  return (
    <View>
      <ScrollView>
        <Tester>
          <TestCase
            itShould="全屏截图captureScreen"
            initialState={''}
            arrange={({ setState }) => <ViewShotWindows setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="调用releaseCapture，释放沙箱中保存的图片，如以释放，再次点击会报错"
            initialState={false}
            arrange={({ setState }) => <ViewShotRelease setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="子组件为Text标签，需要到沙箱临时目录查看截图"
            initialState={''}
            arrange={({ setState }) => <ViewShotText setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="子组件为Button标签，需要到沙箱临时目录查看截图"
            initialState={''}
            arrange={({ setState }) => <ViewShotButton setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的fileName为FirstCapture，查看图片后缀名为FirstCapture"
            initialState={''}
            arrange={({ setState }) => <ViewShotFirst setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的fileName为SecondCapture，查看图片后缀名为SecondCapture"
            initialState={''}
            arrange={({ setState }) => <ViewShotSecond setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
           <TestCase
            itShould="options的width为100,height为50"
            initialState={''}
            arrange={({ setState }) => <ViewShotWidth setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
           <TestCase
            itShould="options的width为200,height为100"
            initialState={''}
            arrange={({ setState }) => <ViewShotWidth1 setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的format为png，查看图片格式为.png"
            initialState={''}
            arrange={({ setState }) => <ViewShotPng setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的format为jpg，查看图片格式为.jpg"
            initialState={''}
            arrange={({ setState }) => <ViewShotJpg setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的quality为1且图片格式为有损格式jpg"
            initialState={''}
            arrange={({ setState }) => <ViewShotQuality1 setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的quality为0.1且图片格式为有损格式jpg"
            initialState={''}
            arrange={({ setState }) => <ViewShotQuality2 setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的result为tmpfile，返回图片保存的沙箱路径"
            initialState={''}
            arrange={({ setState }) => <ViewShotResult1 setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的result为base64"
            initialState={''}
            arrange={({ setState }) => <ViewShotResult2 setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="options的result为data-uri"
            initialState={''}
            arrange={({ setState }) => <ViewShotResult3 setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  )
}